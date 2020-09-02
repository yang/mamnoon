<template>
    <div>
<section>
  
  
  
  <div v-if="modalOpen" class="order-modal">


  <div class="container modal-body">
    <div @click="closeModal()" class="close closeModal">
      <CloseModal />
    </div>
    <h4>
    {{currentItem.name}}
    </h4>
     <div v-if="currentItem.images.online_ordering_menu">
    <img style="width:300px" :src="currentItem.images.online_ordering_menu.main" /><br />
    </div>
    <hr>
    {{currentItem.description}}<br />
    price: {{currentItem.price}}

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



item total: {{currentItem.price * currentItemQuanity }}
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

<div v-for="item in upserveSections" :key="item.name" class="container">

<div :id="'drawertop-'+ item.id" @click="expandChild(item.id)" class="row display-block">
   <h2 >{{item.name}}</h2></div>
<div :data="'drawer' + item.id" class="hidden-drawer row"> 
<div class="filtree-half" v-for="piece in item.item_ids" :key="piece">
  <div class="grey-bg">
 <div v-for="serve in upserve" :key="serve.id">
  <div v-if="serve.id === piece">
    {{serve.name}}
    {{serve.price}}

    <div v-if="serve.images">
  <div v-if="serve.images.online_ordering_menu" v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }">
      </div>
  <div v-else v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }">
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


<div v-if="currentOrder" class="container">
current order


<ul class="order-sidebar">
<li v-for="order in currentOrder.charges.items" :key="order.cartId">
<br>
{{order.name}} x {{order.quantity}} {{order.price * order.quantity}}

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
<!-- decimalsGen -->
order total: {{currentOrder.charges.total}}

<br><br><br>
<button v-if="currentOrder.charges.items.length === 0" disabled>no items in cart</button>
<button @click="doAnOrder(currentOrder)" v-else> do an order</button>
<br><br><br>
</div>

      </div>

    </div>

<pre>
{{currentOrder}}
  </pre>

  </div>


  
</section>

    </div>
</template>

<script>
import CloseModal from "@/components/svgIcons/CloseModal";
export default {
    name: 'upservefiltering',
    props: ['data'],
    components: {
CloseModal
    },
        data() {
            return {
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
                    total: null,
                    fees: 0,
                    taxes: 0,
                    tip: {
                      amount: 0,
                      payment_type: "Generic Online Ordering Integrated"
                    },
                    items: []
                  },
                  fulfillment_info: {
                    type: "delivery",
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
    removeFromOrder(removal){


let currentItems = this.currentOrder.charges.items
let updatedItems = currentItems.filter(item => item.cartId !== removal.cartId)
this.currentOrder.charges.items = updatedItems



let removeCost = removal.price * removal.quantity

this.currentOrder.charges.total = this.currentOrder.charges.total - removeCost
this.currentOrder.payments.payments[0].amount = this.currentOrder.payments.payments[0].amount - removeCost



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
      // console.log(item)
      // this.currentOrder = item
      // this.currentOrder.items.push(item)

let itemToAdd = {
  name: item.name,
  cartId: Math.random().toString(36).substr(2, 29) + '_' + Math.random().toString(36).substr(2, 29) + '_' + Math.random().toString(36).substr(2, 29),
  item_id: item.id,
  price: item.price_cents,
  quantity: this.currentItemQuanity,
  instructions: this.textdescription,
  modifiers: [],
  sides: []
}




this.currentOrder.charges.items.push(itemToAdd)



this.currentOrder.charges.total = Number(this.currentOrder.charges.total) + Number(item.price_cents * this.currentItemQuanity)
this.currentOrder.payments.payments[0].amount = Number(this.currentOrder.payments.payments[0].amount) + Number(item.price_cents * this.currentItemQuanity)
let newDate = new Date()
let twentyMinutesLater = newDate.setMinutes(newDate.getMinutes() + 20)
this.currentOrder.time_placed = newDate
this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate


//then close the modal

this.closeModal()

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
     
          let responseUpserve = await this.$http.get("http://localhost:4000/product/upserveolo");
// let responseUpserve = await this.$http.get("https://young-hamlet-03679.herokuapp.com/product/upserve");
        let upserveProducts = responseUpserve.data.body.items
  // console.log(upserveProducts)
        this.upserve = upserveProducts

        this.upserveSections = responseUpserve.data.body.sections

    },
  doAnOrder(currentOrder){
    console.log(currentOrder)

  this.$http.post('http://localhost:4000/product/oloorder', currentOrder, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
  }
  }).then(response => {
    console.log(response)
  })
    .catch(e => {
      this.errors.push(e)
    })



    // this.$http.post(`http://localhost:4000/product/oloorder`, {
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
  border-radius: 20px;
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
button[disabled]{
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

li{
  font-size: 16px;
  list-style-type: none;
}

}


.hidden-drawer.row{
display: none;


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
</style>