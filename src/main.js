import Vue from "vue";
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import VueMq from 'vue-mq'
import App from "./App.vue";
import GAuth from 'vue-google-oauth2';
import router from "./router";
import axios from "axios";
import VueScrollactive from 'vue-scrollactive';
import VueCurrencyInput from 'vue-currency-input'
import vSelect from "vue-select";
import "bootstrap/dist/css/bootstrap.min.css";
import "vue-select/src/scss/vue-select.scss";


Vue.use(VueCurrencyInput)
Vue.component('v-select', vSelect)

const base = axios.create({
  baseURL: "https://young-hamlet-0 3679.herokuapp.com"
  // baseURL: "http://localhost:4000"
}); 


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.prototype.$http = base;
Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    sm: 1080,
    lg: Infinity,
  }
})

Vue.use(GAuth, {
  clientId: '190034127812-vjtpck9bt7btor25njinff491j2ab16m.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false
})
 
var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

var genUserName = function(text){
  return text.split('@')[0];
};

Vue.filter('truncate', filter);
Vue.filter('generateUsername', genUserName)
Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})

Vue.use(VueScrollactive);

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    openDrawerOnLoad: false,
    orderConfirmation: {},
    googleAddress: {},
    storeCurrentOrder: {},
    userProfileModalVisible: true,
    loggedIn: false,
    count: 0,
    names: [],
    shoppingCartItems: [],
    cart: 0,
    userName: 'joe',
    currentUserEmail: '',
    userInfo: {},
    vegetarian: false,
    inventory: {
      snipCartItems: [],
      tockMeals: [],
      currentDay: String(new Date().getDate()).padStart(2, '0'),
      offerings: []
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    increment2 (state, { name }) {
      if (name in state) {
        state[name]++
      } else {
        state[name] = 1
      }
    },
    drawerTrue (state, { drawerTrue }) {
      state.openDrawerOnLoad = drawerTrue
    },
    orderCMR (state, { orderCMR }) {
      state.orderCMR = orderCMR
    },
    googleAddress (state, { googleAddress }) {
      state.googleAddress = googleAddress
    },
    addtocart (state) {
      state.cart = state.cart + 20
    },
    removeFromCart (state) {
      state.cart = state.cart - 20
    },
    switchLoggedIn (state) {
      state.loggedIn = !state.loggedIn
    },
    logOut (state) {
      state.loggedIn = false
      state.currentUserEmail = ''
    },
    logIn (state) {
      state.loggedIn = true
    },
    upserveOrderCurrentOrder(state, { storeCurrentOrder }){
      state.storeCurrentOrder = storeCurrentOrder
    },
    reserveFamilyMeal (state, { timeslot }) {
      state.shoppingCartItems.push({timeslot: timeslot})
      state.cart = state.cart + 20
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = true
          break
        }
      }
    },
    removeUnreserve (state, { timeslot }) {
      state.cart = state.cart - 20
      state.shoppingCartItems = state.shoppingCartItems.filter(function (obj) {
        return obj.timeslot !== timeslot
      })
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = false
          break
        }
      }
    },
    unreserveFamilyMeal (state, { timeslot }) {
      state.cart = state.cart - 20
      state.shoppingCartItems = state.shoppingCartItems.filter(function (obj) {
        return obj.timeslot !== timeslot
      })
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = false
          break
        }
      }
    },
    completeCheckout (state, { shoppingCart }) {
      for (var i in shoppingCart) {
        for (var j in state.inventory.offerings[0].items[0].availableFamilyMeals) {
          if (state.inventory.offerings[0].items[0].availableFamilyMeals[j].timeslot === shoppingCart[i].timeslot) {
            state.inventory.offerings[0].items[0].availableFamilyMeals[j].amountRemaining--
            break
          }
        }
      }
      state.shoppingCartItems = []
      state.cart = 0
      for (var k in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        state.inventory.offerings[0].items[0].availableFamilyMeals[k].reserved = false
      }
    },
    async updateInventory(state, { inventoryAdd }){
  
      state.inventory.offerings = state.inventory.offerings.filter(function( obj ) {
        return obj.snipcart !== true;
      });

      state.inventory.offerings.push({
        visible: true,
        title: 'mama shop',
        category: 'mama-shop',
        responsive: true,
        caviarButton: false,
        snipcart: true,
        items: inventoryAdd,
        slideNo: 6,
        mamaShop: true
      })
  },
    updateTockMeals(state, { inventoryTockAdd }){




      function lookup( name ) {
        for(var i = 0, len = state.inventory.tockMeals.length; i < len; i++) {
            if( state.inventory.tockMeals[ i ].createdLink === name )
                return true;
        }
        return false;
    }


    state.inventory.tockMeals = []
    },
    updateTockMealsStreet(state, { inventoryTockAddStreet }){

      function lookup( name ) {
          for(var i = 0, len = state.inventory.tockMeals.length; i < len; i++) {
              if( state.inventory.tockMeals[ i ].createdLink === name )
                  return true;
          }
          return false;
      }

      inventoryTockAddStreet.forEach(function(e){
        if( !lookup( e.createdLink ) ) {
          state.inventory.tockMeals.push(e);
        }
      })

    },
   async updateTockItem(state, { updateTockItem }){

      let tockItem = state.inventory.tockMeals[updateTockItem.index]
      let tock = updateTockItem

      if(tock.item === 'title'){
        tockItem.title = tock.text
      }else if(tock.item === 'description'){
        tockItem.description = tock.text
      }else if(tock.item === 'image'){
        tockItem.image = tock.text
      }


          base.post(`/tock/updatetockofferings`, { updateTockItem })
          .then(function(res){
          console.log(res.data.data.tockMeals)



          state.inventory.tockMeals = res.data.data.tockMeals

          })
          .catch(function(err){
          console.log(err)

          })



    },
    showMessage () {
      console.log('this is th emesae')
    },
    updateCurrentUser(state, { currentUserInfo }){
      state.userInfo = currentUserInfo
    },
    setCurrentUserEmail(state, { currentUserEmail }){
      state.currentUserEmail = currentUserEmail
    },
    clearCurrentUser (state) {
      state.userInfo = null
      state.currentUserEmail = null
    },
    toggleVegetarian (state) {
      state.vegetarian = !state.vegetarian
    },
    hideUserModal (state) {
      state.userProfileModalVisible = false
    },
    showUserModal (state) {
      state.userProfileModalVisible = true
    }
   
  }
})


new Vue({
  router,
  store: store,
  render: h => h(App),
  async mounted () {


let responseTockStreet2 = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/pages`)
let inventoryTockAdd = responseTockStreet2.data[0].acf.family_meal_calendar
this.$store.commit('updateTockMeals', { inventoryTockAdd })

}
}).$mount("#app");























