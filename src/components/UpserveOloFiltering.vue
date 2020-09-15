<template>
  <div>
    <section>
      <!-- {{$data}} -->
      <div v-if="orderConfirmationModal" class="order-confirmation-modal">
             <div class="container online-menu order-modal-width">
                  <div @click="closeConfirmationModal()" class="close closeModal">
            <CloseModal />
          </div>
          <h4>order confirmation</h4>

       </div>
    <div class="container modal-body order-modal-width order-modal-body">
          <div>
          <pre>
            {{orderConfirmationModalResponse}}
          </pre>
    </div>
     </div>
        </div>
      <div v-if="modalOpen" class="order-modal">
        <div class="container online-menu order-modal-width">
                  <div @click="closeModal()" class="close closeModal">
            <CloseModal />
          </div>
          <h4>{{currentItem.name}}</h4>

       </div>
        <div class="container modal-body order-modal-width order-modal-body">
 
          <div class="item-image-container" v-if="currentItem.images.online_ordering_menu" :style="{'background-image': currentItem.images.online_ordering_menu.main}">
            <img :src="currentItem.images.online_ordering_menu.main" />
          </div>


          <p class="item-description-p">
          {{currentItem.description}}
          </p>
          <b>price: {{currentItem.price_cents}}</b>
   <hr />
          <div v-if="currentItem.modifier_group_ids.length >= 1">
            <h4 class="text-left">addons</h4>
            <div v-for="modifieritem in currentItem.modifier_group_ids" :key="modifieritem">
              <div v-for="modifier in modifierGroups" :key="modifier.name">
                <div v-if="modifieritem === modifier.id" style="width: 100%;display: inline-block;">
                   <div v-if="modifier.minimum_required === 0">
                     <div v-if="modifier.name !== 'Promotions'">
                  (addons not required)
                  </div>
                    </div>
                       <div v-else>
                        minimum_required:  {{modifier.minimum_required}}
                        maximum_required:  {{modifier.maximum_required}}
                        </div>

                    <div v-if="modifier.name === 'Promotions'">

                
                  {{modifier.name}}
</div>
                  <div v-for="mod in modifierItems" :key="mod.id">
                    <div v-for="m in modifier.modifier_ids" :key="m">
                      <div v-if="m === mod.id" class="box">
                        <div class="box-inner">
 {{mod.name}}<br>
<b>{{mod.price}}</b>
                        <div v-if="modifier.name === 'Promotions'">
                          <div v-for="piece in upserve" :key="piece.name">
                            <div v-if="piece.name === mod.name">
                              <img :src="piece.images.online_ordering_menu.main" />
                            </div>
                          </div>
                        </div>
                        <!-- loop through and get image -->

<div class="mt10">
                        <button @click="addAddOn(mod,modifieritem)" :id="'add-' + mod.id">+</button>&nbsp;&nbsp;
                        <button
                          @click="removeAddOn(mod,modifieritem)"
                          :id="'remove-' + mod.id"
                          disabled
                        >-</button>
                        </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<hr />
     

          <button v-if="currentItemQuanity > 1" @click="decrementCurrentItem()">-</button>
          <button v-else disabled>-</button>
          &nbsp;&nbsp;
          <span id="value">{{currentItemQuanity}}</span>&nbsp;&nbsp;
          <button @click="incrementCurrentItem()">+</button>

          <br />
          <br />special instructions:
          <br />
          <textarea v-model="textdescription" />


<div class="add-to-order-footer">

          item total: {{currentItem.price_cents * currentItemQuanity }}
 

          <button class="float-right" @click="addToOrder(currentItem)">add to order</button>


          </div>

          <!-- {{currentItem}} -->
        </div>
      </div>

      <div class="container pt50">
        <div class="row">
          <div class="col-sm-8">
            <div class="container online-menu">
           
                <h4>mamnoon menu</h4>
         <!-- {{googleAddressView.address_components}} -->
            </div>

            <div v-for="item in upserveSections" :key="item.name" class="container menu-line">
              <div
                :id="'drawertop-'+ item.id"
                @click="expandChild(item.id)"
                class="display-block row no-lr-margin"
              >
                <h2 class="menu-header"><span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span><span :id="'minus-'+ item.id" class="expand-contract minus">-</span> {{item.name}}</h2>
              </div>
              <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                <div class="filtree-half" v-for="piece in item.item_ids" :key="piece">
                  <div class="grey-bg">
                 
                    <div v-for="serve in upserve" :key="serve.id">
                      <template v-if="serve.id === piece" class="inline-block">
                        <div class="yellow-bg" @click="openModal(serve)">
                       <div class="half-width2left">

  <div class="content-box">
<div class="name">{{serve.name}}





</div>
<div v-if="serve.description" class="food-description">{{serve.description}}</div>
<div class="food-price">{{serve.price}}</div>

             
                     
<br>  
                                          <!-- <button @click="openModal(serve)">view</button> -->

  
    </div>
  
  </div>
                        <div class="half-width2right">
                        <template v-if="serve.images">


<!-- <img v-if="serve.images.online_ordering_menu" :src="serve.images.online_ordering_menu.main" alt="" style="width: 100%;height: 140px;">
<div v-else style="width:100%;height: 140px;color:transparent;">_</div> -->

                          <div
                            v-if="serve.images.online_ordering_menu"
                            class="backgroundImage"
                            v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                          ></div>
                          <div
                            v-else
                            class="backgroundImage"
                            v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                          ></div>
                        </template>

                        </div>
                        <!-- <button @click="addToOrder(serve)">add to order</button> -->
      
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <!-- google area -->
     

            <div v-if="currentOrder" class="container">
              <button
                class="delivery-option"
                :class="{selected : currentOrder.fulfillment_info.type === 'delivery'}"
                @click="deliveryOption('delivery')"
              >delivery</button>&nbsp;&nbsp;
              <button
                class="delivery-option"
                :class="{selected : currentOrder.fulfillment_info.type === 'pickup'}"
                @click="deliveryOption('pickup')"
              >pickup</button>
<br><br v-if="currentOrder.fulfillment_info.type === 'delivery'">

              <!-- <div v-if="googVPresent === true"> -->

                     <!-- </div> -->

              


<div v-if="currentOrder.fulfillment_info.type === 'delivery'" style="width:100%;position: relative;height: 50px;">
<div style="width:100%;position: relative;height: 40px;position: absolute; top: 0; left: 0;background-color: #fff;padding:5px 0;">
       <button v-if="this.currentOrder.fulfillment_info.type === 'delivery'" @click="refreshGoogle()">update address</button>

</div>


<div style="width:100%;position: relative;height: 50px;position: absolute; top: 0; left: 0;background-color: transparent;pointer-events:none">

       <GoogleValidate style="pointer-events:all" :key="renderKey" v-if="this.currentOrder.fulfillment_info.type === 'delivery'" />
  
</div>



</div>
<br>
              <form>

              <div v-if="this.currentOrder.fulfillment_info.type === 'delivery'">
             
              
                 <h4 class="text-left">address</h4>
            <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1">{{currentOrder.fulfillment_info.delivery_info.address.address_line1}}<br></span>
           <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line2">{{currentOrder.fulfillment_info.delivery_info.address.address_line2}}<br></span>
                       
                <input
                v-if="this.$store.state.googleAddress !== {}"
                  type="text"
                  id="address_l2"
                  name="address_l2"
                  placeholder="apt/unit/floor"
                  v-model="currentOrder.fulfillment_info.delivery_info.address.address_line2"
                />
<span v-if="currentOrder.fulfillment_info.delivery_info.address.city">{{currentOrder.fulfillment_info.delivery_info.address.city}}, </span>
<!-- <span v-if="currentOrder.fulfillment_info.delivery_info.address.state">{{currentOrder.fulfillment_info.delivery_info.address.state}}<br></span> -->
<span v-if="currentOrder.fulfillment_info.delivery_info.address.zip_code">{{currentOrder.fulfillment_info.delivery_info.address.zip_code}}<br></span>



                <div class="address-fields" style="display:none;">
                <label for="address_l1">address line 1</label>
                <br />
                <input
                  type="text"
                  id="address_l1"
                  name="address_l1"
                  placeholder="address line 1"
                  v-model="currentOrder.fulfillment_info.delivery_info.address.address_line1"
                />
                <br />
                <label for="address_l2">address line 2</label>
                <br />
                <input
                  type="text"
                  id="address_l2"
                  name="address_l2"
                  placeholder="address line 2"
                  v-model="currentOrder.fulfillment_info.delivery_info.address.address_line2"
                />
                <br />

                <label for="city">city:</label>
                <br />
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="city"
                  v-model="currentOrder.fulfillment_info.delivery_info.address.city"
                />
                <br />

                <label for="state">state:</label>
                <br />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="state"
                  v-model="currentOrder.fulfillment_info.delivery_info.address.state"
                />
                <br />

                <label for="zip">zip:</label>
                <br />
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="10001"
                  v-model="currentOrder.fulfillment_info.delivery_info.address.zip_code"
                />
                </div>
                <!-- <br /> -->
                <hr />
                <label for="zip">special instructions:</label>
                <br />
                <textarea
                  type="text"
                  id="specialinstructions"
                  name="specialinstructions"
                  placeholder="eg, leave on doorstep"
                  v-model="currentOrder.fulfillment_info.instructions"
                />
</div>

                <!-- <br /> -->
                <h4 class="text-left">customer info</h4>

                <label for="fname">First name:</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="first"
                  v-model="currentOrder.fulfillment_info.customer.first_name"
                />
                <br />

                <label for="lname">Last name:</label>
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="last"
                  v-model="currentOrder.fulfillment_info.customer.last_name"
                />
                <br />

                <label for="email">email:</label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  v-model="currentOrder.fulfillment_info.customer.email"
                />
                <br />

                <label for="phone">phone:</label>
                <br />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  v-model="currentOrder.fulfillment_info.customer.phone"
                />
              


              </form>

              <ul class="order-sidebar">
                <li v-for="order in currentOrder.charges.items" :key="order.cartId">
                  <br />
                  {{order.name}} x {{order.quantity}},
                  <b>{{order.price_cents * order.quantity}}</b>

                  <button @click="removeFromOrder(order)">x</button>

                  <div v-if="order.instructions !== ''" class="order-instructions">
                    <br />
                    <i>{{order.instructions}}</i>
                    <br />
                    <br />
                  </div>
                  <div v-else>
                    <br />
                    <br />
                  </div>
                </li>
              </ul>

              <hr />


              pretotal: {{ currentOrder.charges.pretotal}}

<!-- decimals -->

              <br />
              total: {{total}}
              <br />
              tax: {{taxes}}
              <br />

              tip: {{ tip }} 
<br>
 <!-- tip mult: -->
<!-- {{tipMultiplier}} -->

         
<div v-if="total > 0">
                <button id="noTip" class="tipButton" @click="setTip(0, 'noTip')">no tip</button>&nbsp;
                <button id="tipOption1" class="tipButton" @click="setTip(.18, 'tipOption1')">18% ({{tip1}})</button>&nbsp;
                <button id="tipOption2" class="tipButton" @click="setTip(.22, 'tipOption2')">22% ({{tip2}})</button>&nbsp;
                <button id="tipOption3" class="tipButton" @click="setTip(.25, 'tipOption3')">25% ({{tip3}})</button>&nbsp;
                <button id="customTip" class="tipButton" @click="setTip(0, 'customTip')">custom</button>&nbsp;

<!-- <input type="text" placeholder="custom tip" /> -->
<input v-if="customTipVisible === true" type="number" min="1" step="any" placeholder="custom tip" v-model="customTip" />

                </div>
              <hr />
              <b>order total: {{Number(total) + Number(taxes) + Number(tip) + Number(customTip)}}</b>

<!-- order total: {{orderTotal}} -->


              <br />
              <br />
              <br />
              <!-- <button v-if="currentOrder.charges.items.length === 0" disabled>no items in cart</button> -->
              <!-- <button v-if="currentOrder.charges.total > 0" @click="doAnOrder(currentOrder)"> do an order</button> -->

              <button
                v-if="currentOrder.charges.total > 0"
                id="cip-pay-btn"
                @click="cippaybutton"
              >Pay</button>
              <button v-else disabled>cart empty</button>
              <!-- store: -->

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <!-- <pre>
{{currentOrder}}
        </pre>-->

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
  name: "upservefiltering",
  props: ["data"],
  components: {
    CloseModal,
    GoogleValidate,
  },
  computed: {
    googleAddress() {
      return this.$store.state.googleAddress
    },
    tip0(){
      return Number(this.total) * 0
    },
    tip1(){
    return Number(this.total) * 0.18
    },
    tip2(){
    return Number(this.total) * 0.22
    },
    tip3(){
    return Number(this.total) * 0.25
    },    
  },
  watch: {
      googleAddress(newAddress, oldAddress) {
      this.googleAddressView = newAddress
      let googleAddressObject = {
        streetNumber: '',
        route: '',
        locality: '',
        state: '',
        zip: ''
  
      }

googleAddressObject.route = newAddress.address_components.filter(obj => {
  return obj.types[0] === 'route'
})[0].long_name

googleAddressObject.streetNumber = newAddress.address_components.filter(obj => {
  return obj.types[0] === 'street_number'
})[0].long_name


googleAddressObject.locality = newAddress.address_components.filter(obj => {
  return obj.types[0] === 'locality'
})[0].long_name

googleAddressObject.state = newAddress.address_components.filter(obj => {
  return obj.types[0] === 'administrative_area_level_1'
})[0].long_name

googleAddressObject.zip = newAddress.address_components.filter(obj => {
  return obj.types[0] === 'postal_code'
})[0].long_name



console.log(googleAddressObject)

this.googleAddressObject = googleAddressObject




this.currentOrder.fulfillment_info.delivery_info.address.city = googleAddressObject.locality
this.currentOrder.fulfillment_info.delivery_info.address.state = googleAddressObject.state
this.currentOrder.fulfillment_info.delivery_info.address.zip_code = googleAddressObject.zip
this.currentOrder.fulfillment_info.delivery_info.address.address_line1 = googleAddressObject.streetNumber + ' ' + googleAddressObject.route






      // this.date = newCount[0].meal.date;
      // this.delivery = newCount[0].meal.delivery;
      // this.reset(newCount);
    },
    // whenever total changes, this function will run
    tip: function(newTip, oldTip){


      console.log(this.tip)


this.currentOrder.charges.tip.amount = this.tip

    },
    customTip: function(newCustomTip, oldCustomTip){





this.currentOrder.charges.tip.amount = this.customTip

    },
    total: function (newTotal, oldTotal) {
      //good
      let taxAmt = Number(this.total) * Number(this.upserveTaxRate);
      this.taxes = Math.round(taxAmt);

        this.currentOrder.charges.taxes = this.taxes




      //good
      let totalWithTax = Number(this.total) + taxAmt;
      this.totalWithTax = Math.round(totalWithTax);
      this.currentOrder.charges.total = this.totalWithTax;
      this.currentOrder.payments.payments[0].amount = this.totalWithTax;
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
    },
  },
  data() {
    return {
      customTip: 0,
      customTipVisible: false,
      tip: 0,
      googleAddressObject: {},
      googleAddressView: this.$store.state.googleAddress,
      renderKey: 0,
      googVPresent: true,
      orderConfirmationModal: false,
      orderConfirmationModalResponse: '',
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
      textdescription: "",
      blockedBody: this.data,
      upserve: null,
      upserveSections: null,
      upserveCategories: [],
      currentlyFiltered: [],
      currentOrder: {
        id:
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29),
        // items: [],
        time_placed: null,
        confirmation_code:
          "mamnoon-" + Math.random().toString(36).substr(2, 29),
        charges: {
          total: 0,
          preTotal: 0,
          fees: 0,
          taxes: 0,
          tip: {
            amount: 0,
            payment_type: "Generic Online Ordering Integrated",
          },
          items: [],
        },
        fulfillment_info: {
          type: "pickup",
          estimated_fulfillment_time: null,
          customer: {
            // email: "joe.waine@gmail.com",
            // phone: "425-442-9308",
            // last_name: "Waine",
            // first_name: "Joseph",
            email: "",
            phone: "",
            last_name: "",
            first_name: ""
          },
          // instructions: "Leave order with building security",
            instructions: "",
          no_tableware: true,
          delivery_info: {
            is_managed_delivery: false,
            address: {
              // city: "Seattle",
              // state: "WA",
              // zip_code: "98122",
              // address_line1: "1508 Melrose Ave",
              // address_line2: "",
              city: "",
              state: "",
              zip_code: "",
              address_line1: "",
              address_line2: "", 
            },
          },
        },
        payments: {
          payments: [
            {
              payment_type: "Generic Online Ordering Integrated",
              amount: null,
            },
          ],
        },
      },
    };
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
},
  methods: {
    setTip(multiplier,tipButtonId){

          // setTip to zero, and then recalculate:

// tipOption1
// tipOption2
// tipOption3


// this.currentOrder.charges.tip.amount = total * .1
this.tipMultiplier = multiplier
this.tip = multiplier * this.total


// this.total = this.total - this.tip
// this.tip = 0
// this.tip = total * .1
// this.total = this.total + this.tip


if(tipButtonId === 'tipOption1'){
    document.getElementById(tipButtonId).disabled = true;
     document.getElementById('noTip').disabled = false;
    document.getElementById('tipOption2').disabled = false;
    document.getElementById('tipOption3').disabled = false;
    document.getElementById('customTip').disabled = false;

this.customTipVisible = false
this.customTip = 0
}else if(tipButtonId === 'tipOption2'){

    document.getElementById(tipButtonId).disabled = true;
     document.getElementById('noTip').disabled = false;
    document.getElementById('tipOption1').disabled = false;
    document.getElementById('tipOption3').disabled = false;
    document.getElementById('customTip').disabled = false;
this.customTipVisible = false
this.customTip = 0

}else if(tipButtonId === 'tipOption3'){
  
    document.getElementById(tipButtonId).disabled = true;
    document.getElementById('noTip').disabled = false;
    document.getElementById('tipOption1').disabled = false;
    document.getElementById('tipOption2').disabled = false;
    document.getElementById('customTip').disabled = false;


this.customTipVisible = false
this.customTip = 0

}else if(tipButtonId === 'noTip'){
  
    document.getElementById(tipButtonId).disabled = true;
    document.getElementById('tipOption1').disabled = false;
    document.getElementById('tipOption2').disabled = false;
    document.getElementById('tipOption3').disabled = false;
    document.getElementById('customTip').disabled = false;


this.customTipVisible = false

this.customTip = 0

}else if(tipButtonId === 'customTip'){
  
    document.getElementById(tipButtonId).disabled = true;
    document.getElementById('tipOption1').disabled = false;
    document.getElementById('tipOption2').disabled = false;
    document.getElementById('tipOption3').disabled = false;
    document.getElementById('noTip').disabled = false;


this.customTipVisible = true


}else{

}




    },
    refreshGoogle() {
    this.renderKey++;

    this.googleAddressObject = {}
    let googleAddress = {}



  this.currentOrder.fulfillment_info.delivery_info.address ={
              city: "",
              state: "",
              zip_code: "",
              address_line1: "",
              address_line2: "", 
            }





this.$store.commit("googleAddress", { googleAddress });


    },
    cippaybutton() {
      let self = this;

      this.getToken().then(function (transactionToken) {
        // Set up and open the payment modal
        emergepay.open({
          // (required) Used to set up the modal
          transactionToken: transactionToken,
          // (optional) Callback function that gets called after a successful transaction
          onTransactionSuccess: function (approvalData) {
            // console.log("Approval Data", approvalData);
            emergepay.close();
            // location = "https://www.chargeitpro.com";
            //do the post here
            self.doAnOrder(self.$store.state.storeCurrentOrder);
          },
          // (optional) Callback function that gets called after a failure occurs during the transaction (such as a declined card)
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);
          },
          // (optional) Callback function that gets called after a user clicks the close button on the modal
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });
      });
    },
    getToken() {
      let self = this;

      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "http://localhost:4000/start-transaction",
          // url: "https://young-hamlet-03679.herokuapp.com/start-transaction",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(self.$store.state.storeCurrentOrder),
        })
          .done(function (data) {
            if (data.transactionToken) resolve(data.transactionToken);
            else reject("Error getting transaction token");
          })
          .fail(function (err) {
            reject(err);
          });
      });
    },
    deliveryOption(choice) {
      if (choice === "delivery") {
        this.currentOrder.fulfillment_info.type = "delivery";





        this.refreshGoogle()
      } else {
        this.currentOrder.fulfillment_info.type = "pickup";
      }

      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
    },
    addAddOn(mod, modifieritem) {
      let modAddition = {
        id: mod.id,
        modifier_group_id: modifieritem,
        price: mod.price_cents,
      };

      this.currentItemModifierArray.push(modAddition);

      this.currentItem.price_cents =
        Number(this.currentItem.price_cents) + Number(mod.price_cents);

      document.getElementById("add-" + mod.id).disabled = true;
      document.getElementById("remove-" + mod.id).disabled = false;
    },
    removeAddOn(mod, modifieritem) {
      let updatedItems = this.currentItemModifierArray.filter(
        (item) => item.id !== mod.id
      );
      this.currentItemModifierArray = updatedItems;
      this.currentItem.price_cents =
        Number(this.currentItem.price_cents) - Number(mod.price_cents);

      document.getElementById("add-" + mod.id).disabled = false;
      document.getElementById("remove-" + mod.id).disabled = true;
    },
    removeFromOrder(removal) {
      let currentItems = this.currentOrder.charges.items;
      let updatedItems = currentItems.filter(
        (item) => item.cartId !== removal.cartId
      );

      this.currentOrder.charges.items = updatedItems;

      let removeCost = removal.price * removal.quantity;

      this.total = this.total - removeCost;



      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

    },
    incrementCurrentItem() {
      this.currentItemQuanity++;
    },
    decrementCurrentItem() {
      this.currentItemQuanity--;
    },
    closeModal() {
      this.modalOpen = false;
      this.currentItem = null;
      this.currentItemQuanity = 1;
      this.textdescription = "";
    },
    closeConfirmationModal(){
      this.orderConfirmationModal = false;
      this.orderConfirmationModalResponse = '';

    },
    openModal(serve) {
      this.modalOpen = true;
      this.currentItem = serve;
    },
expandChild(drawer){
var container = document.getElementById("drawertop-" + drawer)
        .nextSibling;
var button    = document.querySelector('button')

	/** Slide down. */
    if(!container.classList.contains('active')) {

    document.getElementById("plus-" + drawer).classList.remove('visible')
    document.getElementById("minus-" + drawer).classList.add('visible')

		/** Show the container. */
    	container.classList.add('active')
        container.style.height = "auto"
        
		/** Get the computed height of the container. */
    	var height = container.clientHeight + "px"

		/** Set the height of the content as 0px, */
        /** so we can trigger the slide down animation. */
        container.style.height = "0px"

		/** Do this after the 0px has applied. */
        /** It's like a delay or something. MAGIC! */
        setTimeout(() => {
            container.style.height = height
        }, 0) 
    
	/** Slide up. */
    } else {
    	/** Set the height as 0px to trigger the slide up animation. */
    	container.style.height = "0px"
        
        /** Remove the `active` class when the animation ends. */
    	container.addEventListener('transitionend', () => {
        	container.classList.remove('active')
        }, {once: true})


    document.getElementById("plus-" + drawer).classList.add('visible')
    document.getElementById("minus-" + drawer).classList.remove('visible')

    }
},
    addToOrder(item) {
      let modifierPriceTotal = 0;
      for (let i = 0; i < this.currentItemModifierArray.length; i++) {
        modifierPriceTotal =
          modifierPriceTotal + this.currentItemModifierArray[i].price_cents;
      }

      let itemToAdd = {
        name: item.name,
        cartId:
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29),
        item_id: item.id,
        price: item.price_cents,
        price_cents: item.price_cents,
        quantity: this.currentItemQuanity,
        instructions: this.textdescription,
        modifiers: this.currentItemModifierArray,
        sides: [],
      };

      this.currentOrder.charges.items.push(itemToAdd);

      this.total = Number(this.total) + Number(item.price_cents * this.currentItemQuanity);



      let newDate = new Date();
      this.currentOrder.time_placed = newDate;
      this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

      //then close the modal
      this.currentItemModifierArray = [];
      this.closeModal();
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
 
    },
    filterByCat(cat) {
      this.currentlyFiltered = [];
      for (let i = 0; i < this.upserve.length; i++) {
        if (this.upserve[i].category === cat) {
          this.currentlyFiltered.push(this.upserve[i]);
        }
      }
    },
    async upserves() {
      let responseUpserve = await this.$http.get(
         //   // "http://localhost:4000/product/upserveolo"
        "https://young-hamlet-03679.herokuapp.com/product/upserveolo"
      );
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;
      this.upserveTaxRate =
        responseUpserve.data.body.tax_rates[0].percentage_rate;
      this.modifierGroups = responseUpserve.data.body.modifier_groups;
      this.modifiers = responseUpserve.data.body.modifiers;
      this.modifierItems = responseUpserve.data.body.modifiers;
    },
    doAnOrder(currentOrder) {

      let self = this;
      let curOr = JSON.stringify(currentOrder);
      this.$http
        .post("http://localhost:4000/oloorder", currentOrder)
        // .post("https://young-hamlet-03679.herokuapp.com/oloorder", currentOrder)
        .then((response) => {
          console.log(response);
          self.orderConfirmationModal = true
          self.orderConfirmationModalResponse = response.data

        })
        .catch((e) => {
            // this.errors.push(e);
            console.log('errors')
            console.log(e)
        });
    },
  },
  mounted() {
    this.upserves();
    emergepay.init();
    this.$store.state.storeCurrentOrder = {};
  },



  
};
</script>


<style scoped lang="scss">
img.itemimage {
  width: 100%;
}

.container {
  display: block;
}


.order-confirmation-modal,
.order-modal {
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

li button {
  position: absolute;
  right: 0;
}

.modal-body {
  background: white;
  padding: 15px;
  border-radius: 0px;
  border: 1px solid grey;
}

button {
  border: 1px solid #f05d5b;
  background-color: #f05d5b;
  color: #ffffff;
  padding: 5px 10px;
}

button:hover {
  border: 1px solid #f05d5b;
  background-color: #f05d5b;
  color: #ffffff;
  padding: 5px 10px;
}

button:disabled,
button[disabled="true"] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

div {
  // padding: 5px 10px;
}

.closeModal {
  opacity: 1;
  cursor: pointer;
}

.order-sidebar {
  padding-left: 0;
  li {
    font-size: 16px;
    list-style-type: none;
  }
}

.hidden-drawer {
  // display: none;
  padding: 0;
  height: 0;
  transition: all .5s ease;
  overflow: hidden;
  &.expanded-drawer {
  transition: all .5s ease;
  // display: inline-block;
  // width: 100%;
  height: 100%;
  }
}

.display-block {
  display: block;
}

h2 {
  cursor: pointer;
}

.menu-line {
  border-bottom: 1px solid #ddd;
  padding: 10px 0 6px;
  margin: 6px 0;
}

h2.menu-header {
font-size: 20px;
// padding: 0 18px;
font-weight: 400;
}

button.delivery-option {
  border: 1px solid white;
  &.selected {
    border: 1px solid black;
  }
}

form input, form textarea {
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  margin-bottom: 10px;

}

.backgroundImage {
  background-position: center center;
  background-size: cover;


height: 180px;
// background-size: 129%;


}


.inline-block{
display: inline-block;
    width: 100%;
}


.yellow-bg{
    background: #fff367;
    width: 100%;
    display: inherit;
    height: 180px;
    cursor: pointer;
  transition: all .5s ease;
    

&:hover{
  opacity: .7
}

}





   .half-width2left{
        width: 65%;
        float: left;
        height: 180px;
        overflow: hidden;
    }

   .half-width2right{
      width: 35%;
      float: left;
      height: 180px;
      overflow: hidden;
    }


.grey-bg{
background: pink;


height: 180px;
}

.filtree-half{
  width: calc(50% - 0px);
  float: left;
  height: 180px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}


@media only screen and (max-width: 768px) {
.filtree-half{
  width: calc(100% - 0px);
  float: left;
  height: 180px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}


}

.content-box{
  margin: 10px;


  .name{

  }


.food-description{
  font-size: 0.7rem;
  margin-bottom: 5px;
}


}



.text-left{
  text-align: left;
}




.online-menu{

  background-color: #F05D5B;
  padding: 20px 0 15px;
    text-align: center;
    position: relative;
  h4{
      color: #fff367;
        font-size: 1.5rem;
        text-align: center;
  }
}

.food-price{
  font-size: .75rem;
  font-weight: 400;
}


.no-lr-margin{
margin-left: 0;
margin-right: 0;
}


.expand-contract{
  display: none;
&.visible{
  display: inline-block;
}

}


.closeModal{

    position: absolute;
    top: 11px;
    right: 15px;

}

.box{
      width: 33.33%;
    // background: pink;
    // border: 1px solid red;
    float: left;
}


.box-inner{
margin: 10px 0;
      // width: 25%;
      padding: 0px;

    border: 0px solid red;
    float: left;
}



.order-modal-width{
  width: 700px;

  img{
        width: 100% !important;
  }
}


@media only screen and (max-width: 768px) {
.order-modal-width{
    width: 100% !important;
    max-width: 96% !important;

}



}



.order-modal-body{
  max-height: 60vh;
  overflow-y: scroll;

  textarea{
      width: 100%;
      margin: 10px 0;
}

}



.container.online-menu.order-modal-width{
margin-top: 24px;
}


.float-right{
  float: right;
}





.item-image-container{

  text-align: center;



    background-position: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 300px;
    z-index: 1;

    background: #f0ecec;

  img{
    width: auto !important;
    height: 300px;
  }
}


.add-to-order-footer{
  padding: 10px 0 20px 0;
  width: 100%;
}


#value{
      margin: 10px;
    font-weight: 600;
}


.pt50{
  padding-top: 50px;
}


.mt10{
  margin-top: 10px;
}


.item-description-p{
  margin-top: 15px;
}




textarea{
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  margin-bottom: 10px;


}

</style>




