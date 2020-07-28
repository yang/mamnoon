import Vue from "vue";
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import VueMq from 'vue-mq'
import App from "./App.vue";
import GAuth from 'vue-google-oauth2';
import router from "./router";
import axios from "axios";
import VueScrollactive from 'vue-scrollactive';
import "bootstrap/dist/css/bootstrap.css";
import "./coverflow.js"
import "./sevenRooms1.js"
import "./sevenRooms2.js"
import StoryblokVue from 'storyblok-vue'
// import { updateTockOfferings } from "../../../server/api/tock/controller/tockController";
// import { update } from "../../../server/api/product/model/Product";


Vue.use(StoryblokVue)

const base = axios.create({
  baseURL: "http://localhost:4000"
// baseURL: 'https://young-hamlet-03679.herokuapp.com'
});



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

// vuexstoremethods
Vue.use(VueScrollactive);

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})


// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');




const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
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
      offerings: [
        {
          visible: false,
          title: 'plan ahead',
          category: 'familymeal',
          slideNo: 1,
          tock: true,
          tockButton: true,
          insideHeader: true,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque"
        },
        {
          visible: true,
          title: 'order now',
          category: 'alacarte',
          caviarButton: true,
          slideNo: 2,
          items: [
            {
              name: "mamnoon",
              price: 5.00,
              description: '',
              caviarLink: 'https://www.trycaviar.com/m/mamnoon-628'
            },
            {
              name: "mamnoon street",
              price: 10.00,
              description: '',
              caviarLink: 'https://www.trycaviar.com/m/mamnoon-street-6597'
            }
          ]
        },
        {
          visible: true,
          title: 'reservations',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque",
          category: 'reservations',
          reservationBlock: true,
          mbarTrigger: 'https://www.sevenrooms.com/reservations/mbarseattle',
          mamnoonTrigger: 'https://www.sevenrooms.com/reservations/mamnoon'
        },
        {
          visible: true,
          title: 'testimonials',
          category: 'testimonials',
          responsive: true,
        slideNo: 1,
        items: [
          {
            quote: "Thank you! so so good!!!! YUM",
            author: "Diane",
            authorLast: 'N',
            imageTestimonial: './assets/img/1.jpg'
          },
          {
            quote: "The Pick up was easy and the food was great! Thank you for making us feel like we were dining out and a little more normal. Hope to see you soon.",
            author: "Teri",
            authorLast: 'P',
            imageTestimonial: './assets/img/2.jpg'
          },
          {
            quote: "Amazing meal, thank you!!",
            author: "Lindsay",
            authorLast: 'O',
            imageTestimonial: './assets/img/3.jpg'
          },
          {
            quote: "Pickup was a breeze and the food was amazing, will definitely order again thank you for letting us enjoy the wonders of a great meal at home",
            author: "Jane",
            authorLast: 'N',
            imageTestimonial: './assets/img/4.jpg'
          },
      
          {
            quote: "WEll, the food was superb! The lamb the best ever! And, in the midst of these hard times, I really appreciated the warmth and good positive energy of the staff. Thanks! So glad you're here.",
            author: "Lyn",
            authorLast: 'K',
            imageTestimonial: './assets/img/2.jpg'
          },
      
          {
            quote: "Love love love!! The food at Mamnoon, never had anything we didn’t thoroughly enjoy!!",
            author: "Lori",
            authorLast: 'S',
            imageTestimonial: './assets/img/1.jpg'
          },
      
          {
            quote: "Your food was AMAZING! WE loved it and will be back. Thank you for creating such delicious dishes!",
            author: "Diane",
            authorLast: 'S',
            imageTestimonial: './assets/img/1.jpg'
          },
      
          {
            quote: "The food was AMAZING! Thank you! <3",
            author: "Christina",
            authorLast: 'B',
            imageTestimonial: './assets/img/1.jpg'
          },
      
          {
            quote: "Love your take out meals. Thanks for giving me something to look forward to every week.",
            author: "Erik",
            authorLast: 'F',
            imageTestimonial: './assets/img/2.jpg'
          },
      
          {
            quote: "Delicious food, good portions, friendly and safe service, loved the little sweet treat! Thank you for being open.",
            author: "Kristen",
            authorLast: 'S',
            imageTestimonial: './assets/img/4.jpg'
          },
      
          {
            quote: "this was the best meal I've had in months. the staff is amazing too!",
            author: "Johnny",
            authorLast: 'S',
            imageTestimonial: './assets/img/3.jpg'
          },
      
          {
            quote: "Impeccable in every possible way!",
            author: "Heidi",
            authorLast: 'A',
            imageTestimonial: './assets/img/2.jpg'
          },
      
          {
            quote: "So tasty. Best takeout food. Thank you for making mother's day awesome.",
            author: "Kristen",
            authorLast: "S",
            imageTestimonial: './assets/img/1.jpg'
          },
      
          {
            quote: "You guys are one of our favorite restaurants in Seattle. Family was Very good value, and super yummy! Very happy. We love you guys. Keep fighting and we will keep supporting you!",
            author: "Angie",
            authorLast: 'A',
            imageTestimonial: './assets/img/2.jpg'
          },
      
          {
            quote: "Easy to order, easy pickup. Outstanding food! Thanks, we’ll be back soon.",
            author: "Michael",
            authorLast: 'V',
            imageTestimonial: './assets/img/3.jpg'
          },
      
          {
            quote: "Thanks for the best birthday dinner ever! (and a milestone one, at that ;-) )The chicken stayed nice and crispy on the way home, the sides were all great, and the wine was fantastic! I'm looking forward to eating in the restaurant again whenever that becomes possible, but in the meantime we will definitely be ordering take-out again. Best of luck to all at Mamnoon, and stay safe and healthy.",
            author: "Jennifer",
            authorLast: 'C',
            imageTestimonial: './assets/img/4.jpg'
          },
      
          {
            quote: "The whole meal was amazing.... and such generous portions. We're adding this meal to our regular rotation :)",
            author: "Stephanie",
            authorLast: 'G',
            imageTestimonial: './assets/img/2.jpg'
          },
      
          {
            quote: "Continues to be my favorite restaurant in Seattle.",
            author: "Ben",
            authorLast: 'B',
            imageTestimonial: './assets/img/1.jpg'
          },
      
          {
            quote: "Wow, what a delicious dinner. Also the labneh and hummous were super authentic to what I used to eat in the Middle East.",
            author: "Sarah",
            authorLast: 'S',
            imageTestimonial: './assets/img/1.jpg'
          },
      
          {
            quote: "We are absolutely obsessed with your restaurant! You are doing a phenomenal job and we are so happy to support you!",
            author: "Marisa",
            authorLast: 'G',
            imageTestimonial: './assets/img/1.jpg'
          },
      
          {
            quote: "The team was enthusiastic and super friendly. The food of course was excellent!",
            author: "Lyn",
            authorLast: 'K',
            imageTestimonial: './assets/img/2.jpg'
          },
      
          {
            quote: "Super yummy, great value, travelled well. Excellent!",
            author: "James",
            authorLast: 'G',
            imageTestimonial: './assets/img/4.jpg'
          },
      
          {
            quote: "Always a delight to have Mamnoon for dinner. From the warm welcome and efficient staff, to the phenomenal flavors of the food and inventive, delicious cocktails -- Mamnoon continues to deliver joy to our family.",
            author: "Stephanie",
            authorLast: 'D',
            imageTestimonial: './assets/img/3.jpg'
          },
      
          {
            quote: "Your process is efficient, from the descriptions online to the ordering to the pick-up. All very smooth. This was our first dinner on the deck of the summer and it was a lovely evening, an excellent meal (REALLY excellent!), and a really nice wine! Thank you for making our evening special!",
            author: "Peg",
            authorLast: 'B',
            imageTestimonial: './assets/img/2.jpg'
          },
          {
            quote: "Thank you so much for this special food. The family meal was the best meal we have had in months. Best potatoes my husband has ever had. Thank you for making this possible during such bitter times. All the best to the Mamnoon and Tock families. You brought goodness to a dark day.",
            author: "Cynthia",
            authorLast: 'M',
            imageTestimonial: './assets/img/1.jpg'
          },
          {
            quote: "Thank you so much for calling me and letting me know about how you wanted to honor my order despite the uncertainty around the curfew and protests in the area. I wanted to have a special meal for my 2nd wedding anniversary and this was certainly it. Thank you for making it happen! By the way I came here after I got engaged a little over 2 years ago, so this place has a special place in my heart :)",
            author: "Apoorva",
            authorLast: 'C',
            imageTestimonial: './assets/img/2.jpg'
          },
          {
            quote: "Such excellent food! Always thrilled to get Mamnoon!",
            author: "Lilium",
            authorLast: 'P',
            imageTestimonial: './assets/img/3.jpg'
          }
        ]
        }
      ]
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

    inventoryTockAdd.forEach(function(e){
      if( !lookup( e.createdLink ) ) {
        state.inventory.tockMeals.push(e);
      }
    })

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

          // base.post(`/tock/removealltocks`)
          // .then(function(res){
          // })
          // .catch(function(err){
          //   console.log(err)
          // })

          base.post(`/tock/updatetockofferings`, { update: state.inventory.tockMeals})
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

    // base.post(`/tock/removealltocks`)
    // .then(function(res){
      
    // })
    // .catch(function(err){
    //   console.log(err)
    // })




    // get tock meals from the database
        
// let mongoTock = await this.$http.get(`/tock/mongotock`)
// let tockResponse = mongoTock
// console.log(tockResponse)


let responseTock = await this.$http.get(`/tock/tockmeals/${false}`)
let inventoryTockAdd = responseTock.data.tockMeals
this.$store.commit('updateTockMeals', { inventoryTockAdd })

let responseTockStreet = await this.$http.get(`/tock/tockmeals/${true}`)
let inventoryTockAddStreet = responseTockStreet.data.tockMeals
this.$store.commit('updateTockMealsStreet', { inventoryTockAddStreet })


    
    let response = await this.$http.get('/product/snipcartproducts') 
    let inventoryAdd = response.data.body.items
    this.$store.commit('updateInventory', { inventoryAdd })



  }
}).$mount("#app");
