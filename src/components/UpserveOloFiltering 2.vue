<template>
    <div>
<section>
{{$data}}

  <div v-if="modalOpen" class="order-modal">


  <div class="container modal-body">
    <div @click="closeModal()" class="close closeModal">
      <CloseModal />
    </div>
    <h4>
    {{currentItem.name}}
    </h4>
     <div v-if="currentItem.images.online_ordering_menu">
    <img style="width:200px" :src="currentItem.images.online_ordering_menu.main" /><br />
    </div>
    <hr>
    {{currentItem.description}}<br />
    price: {{currentItem.price_cents}}



<!-- {{currentItem.modifier_group_ids.length >= 1}} -->


<div v-if="currentItem.modifier_group_ids.length >= 1">
  <h4>addons</h4>
    <div v-for="modifieritem in currentItem.modifier_group_ids" :key="modifieritem">
      <div v-for="modifier in modifierGroups" :key="modifier.name">
        <div v-if="modifieritem === modifier.id">
        {{modifier.name}}


<div v-for="mod in modifierItems" :key="mod.id">
<div v-for="m in modifier.modifier_ids" :key="m">

<div v-if="m === mod.id">


<!-- {{m}}

{{mod}} -->



<!-- loop through and get image -->


<!-- {{upserveProducts}} -->


<div v-if="modifier.name === 'Promotions'">

<div v-for="piece in upserve" :key="piece.name">
  
  <div v-if="piece.name === mod.name">
<img :src="piece.images.online_ordering_menu.main" />

  </div>

</div>

  </div>
<!-- loop through and get image -->






<button @click="addAddOn(mod,modifieritem)" :id="'add-' + mod.id">add</button>
<button @click="removeAddOn(mod,modifieritem)" :id="'remove-' + mod.id" disabled>remove</button>
<br /><br />
  </div>

</div>
</div>
        </div>
      </div>
    </div>
  </div>










<br /><br />

<button v-if="currentItemQuanity > 1" @click="decrementCurrentItem()">-</button>
<button v-else disabled>-</button>
&nbsp;&nbsp;<span id="value">{{currentItemQuanity}}</span>&nbsp;&nbsp;
<button @click="incrementCurrentItem()">+</button>

<br /><br />
special instructions:
<br />
<textarea v-model="textdescription" />

<br /><br />



item total: {{currentItem.price_cents * currentItemQuanity }}
<br /><br />

<button @click="addToOrder(currentItem)">add to order</button>
<br /><br />
<!-- {{currentItem}} -->

</div>
</div>
    
  <div class="container">
    <div class="row">
    <div class="col-sm-8">






  <div class="container">
      <div class="row">
<h1>mamnoon menu</h1>
<!-- {{upserveSections}} -->
</div>
</div>

<div v-for="item in upserveSections" :key="item.name" class="container menu-line">

<div :id="'drawertop-'+ item.id" @click="expandChild(item.id)" class="row display-block">
   <h2 class="menu-header">{{item.name}}</h2></div>
<div :data="'drawer' + item.id" class="hidden-drawer row"> 
<div class="filtree-half" v-for="piece in item.item_ids" :key="piece">
  <div class="grey-bg">
 <div v-for="serve in upserve" :key="serve.id">
  <div v-if="serve.id === piece">


    {{serve.name}}
    {{serve.price}}

    <div v-if="serve.images">
  <div v-if="serve.images.online_ordering_menu" class="backgroundImage" v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }">
      </div>
  <div v-else class="backgroundImage" v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }">
      </div>


  </div>
<!-- <button @click="addToOrder(serve)">add to order</button> -->
<button @click="openModal(serve)">view</button>


</div>




</div>
</div>
</div>


</div>


  </div>


  </div>


    <div class="col-sm-4">

google area


<GoogleValidate />


<div v-if="currentOrder" class="container">


<button class="delivery-option " :class="{selected : currentOrder.fulfillment_info.type === 'delivery'}" @click="deliveryOption('delivery')">delivery</button>&nbsp;&nbsp;
<button class="delivery-option " :class="{selected : currentOrder.fulfillment_info.type === 'pickup'}" @click="deliveryOption('pickup')">pickup</button>



<form>
<br>
<h4>customer info</h4>

  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" placeholder="first" v-model="currentOrder.fulfillment_info.customer.first_name"><br>

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" placeholder="last" v-model="currentOrder.fulfillment_info.customer.last_name"><br>

  <label for="email">email:</label><br>
  <input type="text" id="email" name="email" placeholder="email" v-model="currentOrder.fulfillment_info.customer.email"><br>



  <label for="phone">phone:</label><br>
  <input type="text" id="phone" name="phone" placeholder="xxx-xxx-xxxx" v-model="currentOrder.fulfillment_info.customer.phone"><br>
<br>
<h4>address</h4>


  <label for="address_l1">address line 1</label><br>
  <input type="text" id="address_l1" name="address_l1" placeholder="address line 1" v-model="currentOrder.fulfillment_info.delivery_info.address.address_line1"><br>
  <label for="address_l2">address line 2</label><br>
  <input type="text" id="address_l2" name="address_l2" placeholder="address line 2" v-model="currentOrder.fulfillment_info.delivery_info.address.address_line2"><br>

  <label for="city">city:</label><br>
  <input type="text" id="city" name="city" placeholder="city" v-model="currentOrder.fulfillment_info.delivery_info.address.city"><br>

  <label for="state">state:</label><br>
  <input type="text" id="state" name="state" placeholder="state" v-model="currentOrder.fulfillment_info.delivery_info.address.state"><br>

  <label for="zip">zip:</label><br>
  <input type="text" id="zip" name="zip" placeholder="10001"  v-model="currentOrder.fulfillment_info.delivery_info.address.zip_code"><br>





  </form>



<ul class="order-sidebar">
<li v-for="order in currentOrder.charges.items" :key="order.cartId">
<br>
{{order.name}} x {{order.quantity}}, <b>{{order.price_cents * order.quantity}}</b>

<button @click="removeFromOrder(order)">x</button>


<div v-if="order.instructions !== ''" class="order-instructions">
  <br>
<i>{{order.instructions}}</i>
  <br> <br>
</div>
<div v-else>
  <br>
  <br>
</div>
  </li>
</ul>


<hr>

pretotal: {{currentOrder.charges.pretotal}}<br>

total: {{total}}<br>
tax: {{taxes}}
<hr>
<b>order total: {{total + taxes}}</b>



<br><br><br>
<!-- <button v-if="currentOrder.charges.items.length === 0" disabled>no items in cart</button> -->
<!-- <button v-if="currentOrder.charges.total > 0" @click="doAnOrder(currentOrder)"> do an order</button> -->


 <button v-if="currentOrder.charges.total > 0" id="cip-pay-btn" @click="cippaybutton">Pay</button>
<button v-else disabled>cart empty</button>
  <!-- store: -->


<br><br><br>
</div>

      </div>

    </div>

<!-- <pre>
{{currentOrder}}
</pre> -->


<pre>
{{this.$store.state.storeCurrentOrder}}
</pre>

  </div>




 





</section>

    </div>
</template>

<script>

import GoogleValidate from "@/components/GoogleValidate";
import CloseModal from "@/components/svgIcons/CloseModal";
export default {
    name: 'upservefiltering',
    props: ['data'],
    components: {
CloseModal,
GoogleValidate
    },
  watch: {
    // whenever question changes, this function will run
    total: function (newTotal, oldTotal) {
      let taxAmt = Number(this.total) * Number(this.upserveTaxRate)
      let totalWithTax = Number(this.total) + taxAmt
      // this.totalWithTax = Math.ceil(totalWithTax)
            this.totalWithTax = Math.round(totalWithTax)
      this.taxes = Math.round(taxAmt)
      this.currentOrder.charges.total = this.totalWithTax
       
let storeCurrentOrder = this.currentOrder
this.$store.commit('upserveOrderCurrentOrder', { storeCurrentOrder })


    }
    },
        data() {
            return {
              total: 0,
              totalWithTax: 0,
              taxes: 0,
              modifiers: [],
              currentItemModifierArray: [],
              modifierItems: [],
              modifierGroups: [],
              upserveTaxRate: "0.101",
              modalOpen: false,
              currentItem: null,
              currentItemQuanity: 1,
              cartTotal: 0,
              textdescription: '',
              blockedBody: this.data,
              upserve: null,
              upserveSections: null,
              upserveCategories: [],
              currentlyFiltered: [],
              currentOrder: {
                id: Math.random().toString(36).substr(2, 29) + '_' + Math.random().toString(36).substr(2, 29) + '_' + Math.random().toString(36).substr(2, 29),
                // items: [],
                time_placed: null,
                confirmation_code: "mamnoon-" + Math.random().toString(36).substr(2, 29),
                charges: {
                  total: 0,
                  preTotal: 0,
                  fees: 0,
                  taxes: 0,
                  tip: {
                    amount: 0,
                    payment_type: "Generic Online Ordering Integrated"
                  },
                  items: []
                },
                  fulfillment_info: {
                    type: "pickup",
                    estimated_fulfillment_time: null,
                    customer: {
                      email: "joe.waine@gmail.com",
                      phone: "425-442-9308",
                      last_name: "Waine",
                      first_name: "Joseph"
                    },
                    instructions: "Leave order with building security",
                    no_tableware: true,
                    delivery_info: {
                        is_managed_delivery: false,
                        address: {
                          city: "Seattle",
                          state: "WA",
                          zip_code: "98122",
                          address_line1: "1508 Melrose Ave",
                          address_line2: ""
                        }
                  }
                },
                payments: {
                  payments: [
                    {
payment_type: "Generic Online Ordering Integrated",
amount: null
}
                  ]
                }
            }
        }},
  methods: {
    cippaybutton(){


let self = this

          this.getToken()
          .then(function(transactionToken) {
              // Set up and open the payment modal
              emergepay.open({
                  // (required) Used to set up the modal
                  transactionToken: transactionToken,
                  // (optional) Callback function that gets called after a successful transaction
                  onTransactionSuccess: function(approvalData) {
                      console.log("Approval Data", approvalData);
                      emergepay.close();
                      // location = "https://www.chargeitpro.com";
//do the post here
self.doAnOrder(self.$store.state.storeCurrentOrder)
                  },
                  // (optional) Callback function that gets called after a failure occurs during the transaction (such as a declined card)
                  onTransactionFailure: function(failureData) {
                      console.log("Failure Data", failureData);
                  },
                  // (optional) Callback function that gets called after a user clicks the close button on the modal
                  onTransactionCancel: function () {
                      console.log("transaction cancelled!");
                  }
              });
          });
    },
    getToken(){

      let self = this

      return new Promise(function (resolve, reject) {
          $.ajax({
              // url: '/api/start-transaction',
              url: '/api',
              type: 'POST',
              dataType: 'json',
              contentType: 'application/json',
              data: JSON.stringify(self.$store.state.storeCurrentOrder)

          })
          .done(function(data) {
              if (data.transactionToken) resolve(data.transactionToken);
              else reject('Error getting transaction token');
          })
          .fail(function(err) {
              reject(err);
          });
      });
    },
    async getTransToken(){
      try {
        // let response = await this.$http.post("http://young-hamlet-03679.herokuapp.com/start-transaction");
      let response = await this.$http.post("http://young-hamlet-03679.herokuapp.com/start-transaction");
      
            console.log(response)
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    },
    deliveryOption(choice){

if(choice === 'delivery'){
  this.currentOrder.fulfillment_info.type = "delivery"
}else{
    this.currentOrder.fulfillment_info.type = "pickup"
}

let storeCurrentOrder = this.currentOrder
this.$store.commit('upserveOrderCurrentOrder', { storeCurrentOrder })
    },
    addAddOn(mod,modifieritem){

let modAddition = {
  id: mod.id,
  modifier_group_id: modifieritem,
  price: mod.price_cents
}
console.log(modAddition)


      // this.currentItemModifierArray.push(mod)
           this.currentItemModifierArray.push(modAddition)


      this.currentItem.price_cents = Number(this.currentItem.price_cents) + Number(mod.price_cents)

     document.getElementById('add-' + mod.id).disabled = true;
     document.getElementById('remove-' + mod.id).disabled = false;

    },

   removeAddOn(mod,modifieritem){

    let updatedItems = this.currentItemModifierArray.filter(item => item.id !== mod.id)
    this.currentItemModifierArray = updatedItems
    this.currentItem.price_cents = Number(this.currentItem.price_cents) - Number(mod.price_cents)

    document.getElementById('add-' + mod.id).disabled = false;
    document.getElementById('remove-' + mod.id).disabled = true;

    },
    removeFromOrder(removal){


let currentItems = this.currentOrder.charges.items
let updatedItems = currentItems.filter(item => item.cartId !== removal.cartId)

this.currentOrder.charges.items = updatedItems


let removeCost = removal.price * removal.quantity

this.currentOrder.charges.total = this.currentOrder.charges.total - removeCost


this.currentOrder.payments.payments[0].amount = this.currentOrder.payments.payments[0].amount - removeCost



let taxAmount = this.currentOrder.charges.total * this.upserveTaxRate
this.currentOrder.charges.taxes = parseInt(taxAmount)



let storeCurrentOrder = this.currentOrder
this.$store.commit('upserveOrderCurrentOrder', { storeCurrentOrder })

this.total = this.currentOrder.charges.total
    },
incrementCurrentItem(){
this.currentItemQuanity++
},
decrementCurrentItem(){
this.currentItemQuanity--
},
closeModal(){

this.modalOpen = false
this.currentItem = null 
this.currentItemQuanity = 1
this.textdescription = ''


},
    openModal(serve){



this.modalOpen = true
this.currentItem = serve 
    },
    expandChild(drawer){

        // console.log(drawer)
        var nextElement = document.getElementById('drawertop-' + drawer).nextSibling
        // console.log(nextElement.classList.value)


if(nextElement.classList.contains('visible')){
  nextElement.classList.remove('visible')
}else{
  nextElement.classList.add('visible')
}
        
      
        // console.log(nextElement.classList)




    },
    addToOrder(item){
    let modifierPriceTotal = 0
    for(let i=0;i<this.currentItemModifierArray.length;i++){
      modifierPriceTotal = modifierPriceTotal + this.currentItemModifierArray[i].price_cents
    }

      let itemToAdd = {
        name: item.name,
        cartId: Math.random().toString(36).substr(2, 29) + '_' + Math.random().toString(36).substr(2, 29) + '_' + Math.random().toString(36).substr(2, 29),
        item_id: item.id,
        price: item.price_cents,
        price_cents: item.price_cents,
        quantity: this.currentItemQuanity,
        instructions: this.textdescription,
        modifiers: this.currentItemModifierArray,
        sides: []
      }

this.currentOrder.charges.items.push(itemToAdd)
this.currentOrder.charges.total = Number(this.currentOrder.charges.total) + Number(item.price_cents * this.currentItemQuanity)
let taxAmount = this.currentOrder.charges.total * this.upserveTaxRate
this.currentOrder.charges.taxes = parseInt(taxAmount)
this.currentOrder.payments.payments[0].amount = Number(this.currentOrder.payments.payments[0].amount) + Number(item.price_cents * this.currentItemQuanity)


let newDate = new Date()
let twentyMinutesLater = newDate.setMinutes(newDate.getMinutes() + 20)
this.currentOrder.time_placed = newDate
this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate


//then close the modal

this.currentItemModifierArray = []
this.closeModal()
let storeCurrentOrder = this.currentOrder
this.$store.commit('upserveOrderCurrentOrder', { storeCurrentOrder })


console.log(storeCurrentOrder)


this.total = this.currentOrder.charges.total

    },
    filterByCat(cat){
      this.currentlyFiltered = []
      for(let i = 0;i<this.upserve.length;i++){
        if(this.upserve[i].category === cat){
        this.currentlyFiltered.push(this.upserve[i])
        }
      }
    },
    async upserves(){
        let responseUpserve = await this.$http.get("http://young-hamlet-03679.herokuapp.com/product/upserveolo");
// let responseUpserve = await this.$http.get("http://young-hamlet-03679.herokuapp.com/product/upserve");
        let upserveProducts = responseUpserve.data.body.items
  // console.log(upserveProducts)
        this.upserve = upserveProducts
        this.upserveSections = responseUpserve.data.body.sections
        this.upserveTaxRate = responseUpserve.data.body.tax_rates[0].percentage_rate
        this.modifierGroups = responseUpserve.data.body.modifier_groups
        this.modifiers = responseUpserve.data.body.modifiers
        this.modifierItems = responseUpserve.data.body.modifiers
    },
  doAnOrder(currentOrder){

  // this.$http.post('/api/product/oloorder', JSON.stringify(currentOrder), {
  //   headers: {
  //     // Overwrite Axios's automatically set Content-Type
  //     'Content-Type': 'application/json'
  // }
  // }).then(response => {
  //   console.log(response)
  // })
  //   .catch(e => {
  //     this.errors.push(e)
  //   })



let curOr = JSON.stringify(currentOrder)

  this.$http.post('/api/oloorder',currentOrder).then(response => {
    console.log(response)
  })
    .catch(e => {
      this.errors.push(e)
    })




    // this.$http.post(`/api/product/oloorder`, {
    //   body: currentOrder
    // })
    // .then(response => {})
    // .catch(e => {
    //   this.errors.push(e)
    // })
  }
    },
    mounted(){
    this.upserves()


     emergepay.init();


     this.$store.state.storeCurrentOrder = {}
  }

}


</script>


<style scoped lang="scss">


img.itemimage{
width: 100%;
}

.container{
  display: block
}

.order-modal{
    position: fixed;
    z-index: 100;
    background: #ffffff99;
    height: 100vh;
    width: 100%;

}




li {
border-bottom: 1px solid grey;
    position: relative;
}

li button{
 position: absolute;
 right: 0;
}


.modal-body{
  background: white;
  padding: 10px;
  border-radius: 0px;
  border: 1px solid grey;
}


button {
  border: 1px solid #F05D5B;
  background-color: #F05D5B;
  color: #ffffff;
  padding: 5px 10px;
}

button:hover {
  border: 1px solid #F05D5B;
  background-color: #F05D5B;
  color: #ffffff;
  padding: 5px 10px;
}

button:disabled,
button[disabled="true"]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

div {
  // padding: 5px 10px;
}


.closeModal{
opacity: 1;
cursor: pointer;

}


.order-sidebar{
      padding-left: 0;
li{
  font-size: 16px;
  list-style-type: none;
}

}


.hidden-drawer.row{
display: none;
padding: 0 14px;

  &.visible{
display:inline-block;
width: 100%;
  }
}


.display-block{
  display: block;
}


h2{
  cursor: pointer;
}


.menu-line{
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin: 10px 0;
}

h2.menu-header{
  // font-size: 32px;
  // font-size: 24px;
  font-size: 18px;
      padding: 0 14px;
}



button.delivery-option{

  border: 1px solid white;
&.selected{
  border: 1px solid black;
}

}

form input{
  width: 100%;
  padding: 5px;
  border-radius: 2px;
}


.backgroundImage{

    background-position: center center;
    background-size: cover;
    height: 140px;
    width: 140px;
    background-size: 152%;



}

</style>