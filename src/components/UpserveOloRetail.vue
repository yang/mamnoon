<template>
  <div id="upserveolo" class="shopRetail">
    <section>
<OrderConfirmationModal :orderConfirmationModal="orderConfirmationModal" :orderCMR="orderCMR" :retail="true" />
      <div v-if="modalOpen" class="order-modal">
        <div class="container online-menu order-modal-width">
          <div @click="closeModal()" class="close closeModal">
            <CloseModal />
          </div>
          <h4>{{currentItem.name}}</h4>
        </div>
        <div class="container modal-body order-modal-width order-modal-body">
          <div
            class="item-image-container"
            v-if="currentItem.images"
            :style="{'background-image': currentItem.images.online_ordering_menu.main}"
          >
            <img :src="currentItem.images.online_ordering_menu.main" />
          </div>
          <div class="item-image-container" v-else>
            <NadiIcon />
            </div>

          <p class="item-description-p">{{currentItem.description}}</p>
        <b>${{currentItem.price_cents.toFixed(2)/100}}</b>
                    <hr />
          <div v-if="currentItem.modifier_group_ids.length >= 1">
            <h4 class="text-left">addons</h4>
            <div v-for="modifieritem in currentItem.modifier_group_ids" :key="modifieritem">
              <div v-for="modifier in modifierGroups" :key="modifier.name">
                <div v-if="modifieritem === modifier.id" class="displayInlineBlock">
        
                  <div v-if="modifier.name === 'Promotions'">{{modifier.name}}</div>
                  <div v-for="mod in modifierItems" :key="mod.id">

                    <div v-for="m in modifier.modifier_ids" :key="m">
                      <div v-if="m === mod.id" class="box">
                        <div class="box-inner">
                          {{mod.name}}
                          <br />
                          
                          <i class="small" v-if="mod.price==='0.0'">no extra charge</i>
                          <b v-else>{{mod.price}}</b>


                          <div v-if="modifier.name === 'Promotions'">
                            <div v-for="piece in upserveList" :key="piece.name">
                              <div v-if="piece.name === mod.name">
                                <img v-if="piece.images" :src="piece.images.online_ordering_menu.main" />
                              </div>
                            </div>
                          </div>
                          <!-- loop through and get image -->


                          <div class="mt10" v-if="modifier.name === 'Promotions'">

              
                           
                            <button @click="addToOrderDontCloseModal(mod)" :id="'add-' + mod.id">+</button>&nbsp;&nbsp;
                            <button @click="removeFromOrderDontCloseModal(mod)" :id="'remove-' + mod.id"
                              disabled>-</button>
                          </div>

                          <div v-else class="mt10">

                           

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
        
          <!-- <hr /> -->

          <button v-if="currentItemQuanity > 1" @click="decrementCurrentItem()">-</button>
          <button v-else disabled>-</button>
          &nbsp;&nbsp;
          <span id="value">{{currentItemQuanity}}</span>&nbsp;&nbsp;
          <button @click="incrementCurrentItem()">+</button>
          <div class="add-to-order-footer">
            item total: <b>${{currentItem.price_cents.toFixed(2)/100 * currentItemQuanity }}</b>
           
          <div v-if="shippingOption">
         <button
            v-if="currentItem.shippable"
              class="float-right"
              @click="addToOrder(currentItem)"
            >add to cart</button>
               <button
            v-else
              class="float-right"
              @click="addToOrder(currentItem)"
            disabled>not available for shipping</button>


</div>
<div v-else>
            <button
              class="float-right"
              @click="addToOrder(currentItem)"
            >add to cart</button>

</div>






          </div>
        </div>
      </div>
     <div class="container pt20">
        <div class="row">
          <div class="col-md-12 col-lg-8">
     
   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>
   

</template>
<div class="container online-menu">
<h4>Online Shop</h4>
</div>

   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>


<div style="background: #f58e58;text-align:center;padding: 10px; margin-bottom: 10px;">
  <ul class="filters">
      <li @click="currentFilter = 'All'">All</li>
            <template v-for="item in upserveSections">
              <li @click="currentFilter = item.name"  v-if="item.name === 'Spices'||item.name === 'Holiday Retail'||item.name === 'Pantry Items'">
         
                 {{item.name.replace('- To Go', '').replace('To Go', '')}}
         
     </li>
            </template>
            </ul>
</div>


<div class="container">

<div class="row">
            <template v-for="item in upserveSections">
              <template v-if="item.name === 'Spices'||item.name === 'Holiday Retail'||item.name === 'Pantry Items'">
                <template v-if="item.timing_mask === null">
 
                <template v-if="currentFilter === 'All' || currentFilter === item.name">
              
                <div class="col-6 col-md-4 shop-item no-lr-pad" v-for="piece in item.item_ids" :key="piece">
              
                    <template v-for="serve in upserveList">
                      <template v-if="serve.id === piece">
                        <div class="itemContainer" @click="openModal(serve)">
                            <template v-if="serve.images">
                              <div
                                v-if="serve.images"
                                class="backgroundImageSquare"
                                v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                              ></div>
                            </template>
                            <template v-else>
     <div class="backgroundImageSquare">   
                              <div class="content">

                            
                              
                               <NadiIconSm />
                              </div>
                              
                              
                              </div>

                            </template>
        
                    <div class="description-panel">
                              <div>{{serve.name}}</div>
                         <!-- {{item.name}} -->
                              <!-- <div
                                v-if="serve.description"
                              >{{serve.description}}</div> -->
                              <div class="food-price">
                            
                                ${{ serve.price_cents.toFixed(2)/100}} <span class="pick-up-only" v-if="!serve.shippable">pickup only, </span><span class="weight" v-if="serve.lbs > 0">{{serve.lbs}}lbs</span>&nbsp;<span class="weight" v-if="serve.oz > 0">{{serve.oz}}oz</span>
                                <br><span class="weight" v-if="serve.width > 0">w: {{serve.width}}"</span>&nbsp;<span class="weight" v-if="serve.height > 0">h: {{serve.oz}}"</span>&nbsp;<span class="weight" v-if="serve.length > 0">l: {{serve.length}}"</span>
                              </div>
                              </div>
                        
                          
                 

                        </div>
                      </template>
                    </template>
               
                </div>

         </template>

   
           

 </template>

     </template>

            </template>
</div></div>
  </template>


          </div>

          <div class="col-sm-4 drawer-on-mobile" :class="{expanded: toggledDrawer}">
<button @click="toggleDrawer()" class="toggle">
<span v-if="toggledDrawer">hide order</span>
<span v-else>view order</span>
</button>


<div v-if="shippingOption" class="container mb5"> 
        <button v-if="shippingOption" style="width: 100%;" @click="shipOption(false)">pickup</button> 
</div>

<div v-if="!shippingOption" class="container mb10"> 
    <button v-if="!shippingOption" style="width: 100%;" @click="shipOption(true)">ship</button> 


        <button v-if="shippingOption" style="width: 100%;" @click="shipOption(false)">pickup</button> 
</div>


<div v-if="currentOrder" class="container text-center">
              <template v-if="valid">
<div v-if="shippingOption === false" class="toggleLr">
    <div>
    <button @click="preOrderToggle(false)" :class="{ selected: !preOrderToggleState }">asap</button></div> 
  <div>
    <button class="fl-right" @click="preOrderToggle(true)" :class="{ selected: preOrderToggleState }">pickup later</button> 
    </div> 
  <div>

    </div> 
</div>
</template>
<template v-else>
<div> 
Come and pick up your items during store hours or get them shipped to your door via usps!
</div> 

</template>

<button v-if="panelShow === 'yourOrder'" @click="panelShowChoose('yourOrder')" class="filehalf" style="margin-top: 5px;width: 100%;background-color: #f05d5b;color: #fff;">
      <template v-if="valid">
          your order
  </template>
      <template v-else>
          your pre order
  </template>


  </button>
<button v-else @click="panelShowChoose('yourOrder')" class="filehalf" style="width: 100%;font-size: 24px;padding-top: 3px;margin-top:6px;">edit order</button>


<template v-if="this.currentOrder.charges.items.length > 0">
  <br>

</template>



<template v-if="valid">
<template v-if="preOrderToggleState">

  <template v-if="shippingOption === false">
  <div style="margin-top:15px;">
<v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
</div>
<div style="margin-top:15px;" v-if="selectedDate !== null">
<v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
</div>
</template>
</template>
</template>
  <template v-else>
<template v-if="this.currentOrder.charges.items.length > 0">
<br>  
<v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
<div style="margin-top:15px;" v-if="selectedDate !== null">
<v-select v-if="rendered" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
</div>

</template>
</template>
</div>

<div v-if="panelShow === 'customerInfo'">
  <div class="container">
      <hr />
  </div>
            <div v-if="currentOrder" class="container  mt10">
        
  <h4 v-if="currentOrder.fulfillment_info.type === 'delivery'" class="address-info text-left mt10">shipping address</h4>
<div v-if="currentOrder.fulfillment_info.type === 'delivery'">
<div class="small-message" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 === ''">please enter a valid shipping address</div>
</div>
            

              <div v-if="currentOrder.fulfillment_info.type === 'delivery'" class="delivery-box mt10">
               
                <div class="updateAddress">
                  <button
                    v-if="this.currentOrder.fulfillment_info.type === 'delivery'"
                    @click="refreshGoogle()"
                  >update address</button>
                </div>

                <div class="googleValidate">
                  <GoogleValidate
                    class="pointer-all"
                    :key="renderKey"
                    v-if="this.currentOrder.fulfillment_info.type === 'delivery'"
                  />
                </div>
              </div>



              <form class="mb20" @submit="checkForm">


 

                <div v-if="this.currentOrder.fulfillment_info.type === 'delivery'" style="margin-top: 10px;">
                 
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1">
                    {{currentOrder.fulfillment_info.delivery_info.address.address_line1}}</span>
                    <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line2 !== ''">,</span>
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.address_line2">
                    {{currentOrder.fulfillment_info.delivery_info.address.address_line2}}
                    <!-- <br /> -->
                  </span>
                            <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
          <span
                    v-if="currentOrder.fulfillment_info.delivery_info.address.city"
                  >{{currentOrder.fulfillment_info.delivery_info.address.city}},</span>
                  <!-- <span v-if="currentOrder.fulfillment_info.delivery_info.address.state">{{currentOrder.fulfillment_info.delivery_info.address.state}}<br></span> -->
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.zip_code">
                    {{currentOrder.fulfillment_info.delivery_info.address.zip_code}}
                    <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
                  </span>



                  <span  :class="{attention: attention}" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''">floor/unit?</span>&nbsp;&nbsp;
                  <input
                    v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''"
                    type="text"
                    id="address_l2"
                    name="address_l2"
                    placeholder="unit/floor"
                    class="formatted"
                    :class="{attention: attention}"
                    autocomplete="no"
                    @click="removeAttention()"
                    v-model="currentOrder.fulfillment_info.delivery_info.address.address_line2"
                  />
  

                  <div class="address-fields display-none">
                    <label class="smblk" for="address_l1">address line 1</label>
                    <br />
                    <input
                      type="text"
                      id="address_l1"
                      name="address_l1"
                      placeholder="address line 1"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.address_line1"
                    />
                    <br />
                    <label class="smblk" for="address_l2">address line 2</label>
                    <br />
                    <input
                      type="text"
                      id="address_l2"
                      name="address_l2"
                      placeholder="address line 2"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.address_line2"
                    />
                    <br />

                    <label class="smblk" for="city">city:</label>
                    <br />
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="city"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.city"
                    />
                    <br />

                    <label class="smblk" for="state">state:</label>
                    <br />
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="state"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.state"
                    />
                    <br />

                   <label class="smblk" for="zip">zip:</label>
                    <br />
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                      v-model="currentOrder.fulfillment_info.delivery_info.address.zip_code"
                    />
                  </div>
                  <hr />
                  </div>

             
          



               <h4 v-if="currentOrder.fulfillment_info.type === 'pickup'" class="customer-info text-left mt10">customer info</h4>
                <h4 v-else-if="currentOrder.fulfillment_info.type === ''" class="customer-info text-left mt10">customer info</h4>
                <h4 v-else class="text-left mt10">customer info</h4>
                <label class="smblk" for="name">name:</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  v-model="currentOrder.fulfillment_info.customer.first_name"
                />
                <br />
               <label class="smblk" for="email">email:</label>
                <br />
                <div v-if="emailAddress" style="margin-bottom: 10px;">{{emailAddress}}</div>
                <input
                v-else
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  v-model="email"
                />
                <!-- <br /> -->

               <label class="smblk" for="phone">phone:</label>
                <br />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  v-model="currentOrder.fulfillment_info.customer.phone"
                />

            <input style="width: auto;margin-right: 10px;transform: translateY(1px);" type="checkbox" id="sms" name="sms" value="sms" v-model="currentOrder.sms">
  <label class="smblk" for="sms">enable SMS order updates </label>
<!-- billing info -->

          <h4 class="customer-info text-left mt10">billing info</h4>
         
         
         <template v-if="currentOrder.fulfillment_info.type === 'delivery'"> 
          <div style="clear: both;width: 100%;margin-bottom: 10px;height: 20px;" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''">

              <div style="float: left;width: 15px;height: 20px;margin-right: 5px;padding-top: 2px;">
              <input type="checkbox" id="checkbox" v-model="checked" />
              </div>

              <div style="float: left; height: 20px;">
              <label class="smblk" for="checkbox">same as delivery address</label>
              </div>
</div>
       </template>


<!-- <div v-if="checked === false"> -->
                <label class="smblk" for="name">name:</label>
                <br />
                <input
                  type="text"
                  id="name-billing"
                  name="name"
                  placeholder="name"
                  v-model="currentOrder.billing.billing_name"
                />


                <label class="smblk" for="address">billing address:</label>
                <br />
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="address"
                  v-model="currentOrder.billing.billing_address"
                />

                <label class="smblk" for="postal_code">billing postal code:</label>
                <br />
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  placeholder="postal code"
                  v-model="currentOrder.billing.billing_postal_code"
                />

<!-- </div> -->
  <br />

              </form>

</div>
      </div>



<div class="container mt10">
              <ul class="order-sidebar" v-if="panelShow === 'yourOrder'">
                <li v-for="order in currentOrder.charges.items" :key="order.cartId" class="smblk">
            


                  <button class="removeClose" @click="removeFromOrder(order)">
                        <CloseModalRedSm />
                     
                  </button>
<div class="mt8">

                  <b>{{order.quantity}}</b> {{order.name}}&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>${{order.price_cents.toFixed(2)/100 * order.quantity}}</b>


<div class="weight">{{order.lbs}}lbs, {{order.oz}}oz </div> 
<div v-if="!order.shippable">pickup only</div>


                  <div v-if="order.instructions !== ''" class="order-instructions">
             
                    <i>{{order.instructions}}</i>
            
                  </div>
                  <div v-else>
          
                  </div>
                  </div>
                </li>
              </ul>
<!-- start panel -->
<!-- start panel -->
<!-- start panel -->
<!-- <div v-if="shippingOption"> 
<button v-if="validPostal(currentOrder.billing.billing_postal_code)" @click="shippingPrice('98122', String(currentOrder.billing.billing_postal_code),String(totalWeight),'0')">
calculate shipping
</button>
</div> -->



<template v-if="this.currentOrder.charges.items.length > 0">
              <!-- <div class="mt10" v-if="total > 0"> -->


<div class="small-message" v-if="weightShipping.lbs > 70">
  package cannot be more than 70lbs
</div>

              <div class="mt10">
                &nbsp;
                <currency-input class="custom-tip-button" currency="USD" v-if="customTipVisible === true" v-model="currentAmountToAddCustom" />

              </div>
              weight: {{weightShipping.lbs}}lbs, {{weightShipping.oz}}oz
              <br />
              <!-- <hr />   -->
              total: ${{total.toFixed(2)/100 }}
              <br />
              tax: ${{currentTax.toFixed(2)/100 }}
             <div v-if="shippingOption && shippingAmount > 0">   
              usps priority shipping: ${{shippingAmount}}
               </div>  
     
            <div style="display:none;" v-if="custom === true">
            custom tip: ${{ Number(currentAmountToAdd).toFixed(2)/100  }}
            </div>
             <div style="display:none;" v-else>
             tip: ${{currentAmountToAdd | showToFixed }}
            </div>
              <hr />
              <b>order total: ${{orderTotal | showToFixed }}</b>
<br />
</template>
<template v-else>
<div class="text-center cart-empty-class">
cart empty
</div>
</template>
<!-- start panel -->
<!-- start panel -->
<!-- start panel -->
<!-- </div> -->
<template v-if="panelShow === 'yourOrder'">
 <button @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf deactivated" disabled="disabled" style="width:100%;margin-top: 15px;" v-if="this.currentOrder.charges.items.length === 0">customer info</button>
 <button style="width: 100%;font-size: 24px;padding-top: 3px;width:100%;" @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf" v-else>checkout</button>
</template>
              <template v-if="panelShow === 'customerInfo'">
            <template v-if="giftCardPanel ===  false">
              <button class="mt10 fw" style="margin-top:20px;"
                v-if="weightShipping.lbs < 70 && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="cippaybutton"
              >Credit/Debit Pay</button>
              <button class="mt10 fw" style="margin-top:20px;"
              v-else disabled>Credit/Debit Pay</button>
        </template>

<template v-if="giftCardPanel ===  false">
<button 
v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
@click="showGiftcard()" id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;">Use Giftcard</button>
<button 
v-else id="cip-pay-btn" class="fw" style="margin-bottom: 20px;margin-top: 15px;" disabled>Use Giftcard</button>
</template>




<template v-if="giftCardPanel ===  true">
<template v-if="this.$store.state.loggedIn">
   <br>
    <h4 v-if="showInsufficientFunds === true" class="error" style="text-align:left">insufficient funds</h4>

  <input v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number">
<br>
              <button class="mt10 fw" style="margin-bottom: 20px;margin-top:10px;"
                v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="useGiftCardBalance()"
              >Pay With Giftcard</button>
              <button class="mt10 fw" style="margin-bottom: 20px;margin-top:10px;" 
               v-else disabled>Pay With Giftcard</button>
</template>
  <template v-else>
  <input v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number">
<br>
                <button class="mt0 fw" style="margin-top:10px;margin-bottom: 20px;" 
                v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="useGiftCardBalance()"
              >Pay With Giftcard</button>
              <button class="mt0 fw" style="margin-bottom: 20px;margin-top:10px;" v-else disabled>Pay With Giftcard</button>
    </template>
</template>
<template v-if="giftCardPanel ===  true">
<br>
<u style="cursor:pointer;color:#f05d5b;" @click="hideGiftcard()">
  <span style="color:#f05d5b;">  
  use debit/credit instead
  </span>
  </u>
</template>







              </template>
              <br />
              <br />
              <br />
      </div>
          </div>
        </div>
        <div>
</div></div>
    </section>

<pre>{{$store.state.storeCurrentOrder}}</pre>


  </div>
</template>

<script>

import vSelect from "vue-select";
import carousel from "vue-owl-carousel";
import GoogleValidate from "@/components/GoogleValidate";
import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";



import OrderConfirmationModal from "@/components/OrderConfirmationModal"
import OnlineMenuCarousel from "@/components/OnlineMenuCarousel";

import CloseModalRedSm from "@/components/svgIcons/CloseModalRedSm";

import VueAspectRatio from "vue-aspect-ratio";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import NadiIcon from "@/components/svgIcons/NadiIcon";
import NadiIconSm from "@/components/svgIcons/NadiIconSm";


import moment from 'moment'
import tz from 'moment-timezone'

import swal from "sweetalert";
export default {
  name: "UpserveOloRetail",
  props: ["data","emailAddress","oloEndpoint","menuEndpoint","title"],
  components: {
    OrderConfirmationModal,
    OnlineMenuCarousel,
    CloseModal,
    CloseModalRed,
    CloseModalSm,
    CloseModalRedSm,
    GoogleValidate,
    carousel,
    VueAspectRatio,
    Next,
    Prev,
    NadiIcon,
    NadiIconSm
  },
  computed: {	
    weightShipping(){

      let weight = {
        lbs:0,
        oz:0
      }

      for(var item in this.currentOrder.charges.items){
          weight.lbs = Number(weight.lbs) + Number(this.currentOrder.charges.items[item].lbs)
          weight.oz = Number(weight.oz) + Number(this.currentOrder.charges.items[item].oz)
      }

      return weight
    },
totalWeight(){
      let cost = 0
      for(var item in this.currentOrder.charges.items){
        cost = cost + this.currentOrder.charges.items[item].price
      }

      return cost
    },
    orderTotal(){

      let shippingAmountToAdd = Number(this.shippingAmount) * 100
      return Number(this.total) + Number(this.currentTax) + Number(this.tip) + Number(this.currentAmountToAdd) + shippingAmountToAdd

    },  
    googleAddress() {	
      return this.$store.state.googleAddress;	
    },	
    tip0() {	
      return Number(this.total) * 0;	
    },	
    tip1() {	
      return Number(this.total) * 0.18;	
    },	
    tip2() {	
      return Number(this.total) * 0.22;	
    },	
    tip3() {	
      return Number(this.total) * 0.25;	
    },	
    currentTax(){

        let currentTax = Number(this.total) * Number(this.upserveTaxRate);

      return Math.round(currentTax)
    }
  },	
  watch: {	
 currentOrder: {
     handler(val){
      // do stuff
      if(this.shippingOption === true && this.validPostal(this.currentOrder.billing.billing_postal_code)){
          // this.shippingPrice('98122', String(this.currentOrder.billing.billing_postal_code),String(this.totalWeight/100),'0')
this.shippingPrice('98122', String(this.currentOrder.billing.billing_postal_code),String(this.weightShipping.lbs),String(this.weightShipping.oz))


          
      }
    },
     deep: true
  },
openTimesUpdated(){
  this.dropDown();
},
openTimes(){
  this.openTimesUpdated = this.openTimes
},
selectedDate(){
  // if(this.selectedDate){
  //         console.log(this.selectedDate.dayLabel.substring(0,3))
  // }

      this.currentOrder.scheduled_time = null

      let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
      this.selectedTime = null
      },
tipSelected(){

this.currentOrder.tipSelected = this.tipSelected


let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	

},
    selectedTime(){
this.currentOrder.scheduled_time = this.selectedTime.time
    },
    email(){
        this.currentOrder.fulfillment_info.customer.email = this.email.toLowerCase();
    },
    checked(){	
      if(this.checked){	
      this.currentOrder.billing.billing_name = this.currentOrder.fulfillment_info.customer.first_name	
      	
      this.currentOrder.billing.billing_address = this.currentOrder.fulfillment_info.delivery_info.address.address_line1 + ' ' +  this.currentOrder.fulfillment_info.delivery_info.address.address_line2	
      this.currentOrder.billing.billing_postal_code = this.currentOrder.fulfillment_info.delivery_info.address.zip_code	
      var input = document.getElementById("name-billing");	
      	
      input.focus();	
      }else{	
        this.currentOrder.billing.billing_name = ''	
        this.currentOrder.billing.billing_address = ''	
        this.currentOrder.billing.billing_postal_code = ''	
      }	
    },	
currentAmountToAddCustom(){	
this.currentAmountToAdd = this.currentAmountToAddCustom * 100	


      this.currentOrder.currentAmountToAddCustom = this.currentAmountToAdd

let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	


},	
    googleAddress(newAddress, oldAddress) {	
      this.googleAddressView = newAddress;	
      let googleAddressObject = {	
        streetNumber: "",	
        route: "",	
        locality: "",	
        state: "",	
        zip: "",	
      };	
if(newAddress){	
      googleAddressObject.route = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "route";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.streetNumber = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "street_number";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.locality = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "locality";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.state = newAddress.address_components.filter(	
        (obj) => {	
          return obj.types[0] === "administrative_area_level_1";	
        }	
      )[0].long_name;	
}	
if(newAddress){	
      googleAddressObject.zip = newAddress.address_components.filter((obj) => {	
        return obj.types[0] === "postal_code";	
      })[0].long_name;	
}	
      this.googleAddressObject = googleAddressObject;	
      this.currentOrder.fulfillment_info.delivery_info.address.city =	
        googleAddressObject.locality;	
      this.currentOrder.fulfillment_info.delivery_info.address.state =	
        googleAddressObject.state;	
      this.currentOrder.fulfillment_info.delivery_info.address.zip_code =	
        googleAddressObject.zip;	
      this.currentOrder.fulfillment_info.delivery_info.address.address_line1 =	
        googleAddressObject.streetNumber + " " + googleAddressObject.route;	

    },	
    currentAmountToAdd: function(newCurrent,oldCurrent){	
      this.currentOrder.charges.total = this.orderTotal	
      this.currentOrder.payments.payments[0].amount = this.orderTotal
      this.currentOrder.charges.tip.amount = this.currentAmountToAdd	
    },	
    tip: function (newTip, oldTip) {	
      this.currentOrder.charges.tip.amount = this.tip;	
      this.currentOrder.charges.total = this.orderTotal	
      this.currentOrder.payments.payments[0].amount = this.orderTotal

    },	
    total: function (newTotal, oldTotal) {	
      this.currentOrder.charges.taxes = this.currentTax;	
      this.currentOrder.charges.total = this.orderTotal;


      this.currentOrder.charges.preTotal = this.orderTotal - this.currentTax - this.tip;
      this.currentOrder.payments.payments[0].amount = this.orderTotal

      let storeCurrentOrder = this.currentOrder;	
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	

    },	
    },
  data() {
    return {
      weight: 0,
      shippingAmount: 0,
      shippingOption: false,
      nextOpen: '',
      preOrderToggleState: false,
      currentFilter: 'All',
      currentRestaurantDays: [],
      rendered: false,
      timeslotsCreated: [],
      openTimesUpdated: [],
      openTimes: [],
      openDays: [],
      futureDay:null,
      futureTime:null,
      valid: false,
      selectedDate: null,
      selectedTime: null,
      dropDownDays: [],
      email: '',
      giftCardPanel: false,
      preferredGiftCard: '',
      showInsufficientFunds: false,
      amountUse: "",
      cardNumberInput: "",
      panelShow: 'yourOrder',
      checked: false,
      currentAmountToAddCustom: 0,
      custom: false,
      errors: [],
      attention: true,
      tipSelected: 0,
      toggledDrawer: false,
      currentAmountToAdd: 0,
      customTipVisible: false,
      tip: 0,
      googleAddressObject: {},
      googleAddressView: this.$store.state.googleAddress,
      renderKey: 0,
      googVPresent: true,
      orderConfirmationModal: false,
      orderCMR: "",
      total: 0,
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
      upserveList: null,
      upserveSections: null,
      upserveCategories: [],
      currentlyFiltered: [],
      currentOrder: { 
        tipSelected: 0,
        currentAmountToAddCustom: 0,
        sms: true,
        restaurant: this.title,
        billing:{
          billing_name: '',
          billing_address: '',
          billing_postal_code: ''
        },
        id:
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29),
        // items: [],
        preorder: false,
        scheduled_time: null,
        time_placed: null,
        confirmation_code:
          "mamnoon-" + Math.random().toString(36).substr(2, 29),
        charges: {
          shipping: 0,
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
            email: this.emailAddress,
            phone: "",
            first_name: "",
          },
          instructions: "",
          no_tableware: false,
          delivery_info: {
            is_managed_delivery: false,
            address: {
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
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
showToFixed: function (value) {
    let decvalue = value/100

    return decvalue.toFixed(2)
}
  },
  methods: {




removeNonShippables(){

for (var value of this.currentOrder.charges.items) {
// console.log(value.shippable)

if(value.shippable === false){
  swal(value.name + ' is not available for shipping and has been removed from your order.')
  this.removeFromOrder(value)
}


}



      },


  async shippingPrice(orig,dest,lb,oz){
console.log(orig,dest,lb,oz)

    let responseAcf = await this.$http.get(`/shippingcalculation`, { params: { ZipOrigination: orig, ZipDestination: dest, Pounds: lb, Ounces: oz } })
    console.log(responseAcf.data[0].Rate[0])


    this.shippingAmount = responseAcf.data[0].Rate[0]
    this.currentOrder.charges.shipping = responseAcf.data[0].Rate[0]

    let storeCurrentOrder = this.currentOrder;
    this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


},
shipOption(c){



  this.shippingOption = c
  c === true ? this.currentOrder.fulfillment_info.type = 'delivery' : this.currentOrder.fulfillment_info.type = 'pickup'

let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });



if(c === true){
  console.log('remove non shippables')
  this.removeNonShippables()
}else{
  this.shippingAmount = 0
  this.currentOrder.charges.shipping = 0

  let storeCurrentOrder = this.currentOrder;
  this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

}

  },
    makePickup(){


      this.currentOrder.fulfillment_info.type === 'pickup'
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

    },
preOrderToggle(c){

// this.preOrderToggleState = c


if(c === true){
  this.preOrderToggleState = c
      this.currentOrder.preorder = true
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


this.panelShow = 'customerInfo'

 

}

if(c === false){
  this.preOrderToggleState = c
      this.currentOrder.preorder = false
      let storeCurrentOrder = this.currentOrder;
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


this.panelShow, this.currentOrder.fulfillment_info.type = ''

}

if(c === 'shipping'){

  this.preOrderToggleState = 'shipping'
  this.panelShow = 'customerInfo'
this.currentOrder.fulfillment_info.type = 'delivery'
}

},
  async getHours(){

    let self = this
   
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.hours = AcfBlock.data.acf.content_fields.find(o => o.acf_fc_layout === 'timeranges');   

    this.currentRestaurantHours = this.hours.restaurant_hours[0].restaurant_name.find(o => o.name === this.title.toLowerCase());
    this.openDays = this.currentRestaurantHours.information.days_of_week
    let curRest = this.currentRestaurantHours.information.open_time_range


    for(let i = 0; i < curRest.length; i++){
          this.showTimeInterVals(curRest[i].time_slot.open.split(':')[0],curRest[i].time_slot.close.split(':')[0])
    }

for(let i = 0; i < curRest.length; i++){
    
      if(self.returnAvailableNow(curRest[i].time_slot.open,curRest[i].time_slot.close)){
// console.log('it returned true so break')
this.valid = true
break
      }else{
        // console.log('it didn treturn true')
      }

    }
},
currentlyavailable(startTime,endTime,rules,futureDay,futureTime){

    let weekday = ['mon','tue','wed','thu','fri','sat','sun']

            if(!futureDay && !futureTime){

                let currentDate = new Date();   

                let startDate = new Date(currentDate.getTime());
                // console.log(startDate)
                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);

                if(rules.includes(weekday[currentDate.getDay()])){
                    return startDate < currentDate && endDate > currentDate
                }
            }
          if(futureDay){
          if(!futureTime){
              if(rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())){
                  return true
              }
          }else{
              let currentDate = Date.parse(futureTime.time) 
              let startDate2 = new Date(currentDate);
              let startDate3 = moment(startDate2)._i
              // console.log(startDate3)
              startDate3.setHours(startTime.split(":")[0]);
              startDate3.setMinutes(startTime.split(":")[1]);
              let endDate2 = new Date(currentDate);
              let endDate3 = moment(endDate2)._i
              endDate3.setHours(endTime.split(":")[0]);
              endDate3.setMinutes(endTime.split(":")[1]);
              return startDate3 < currentDate && endDate3 > currentDate
          }
          }
},
          returnAvailableNow(startTime,endTime){

              if(startTime && endTime){

              let currentDate = new Date()   

              let startDate = new Date(currentDate.getTime());
              startDate.setHours(startTime.split(":")[0]);
              startDate.setMinutes(startTime.split(":")[1]);
              startDate.setSeconds(startTime.split(":")[2]);

              let endDate = new Date(currentDate.getTime());
              endDate.setHours(endTime.split(":")[0]);
              endDate.setMinutes(endTime.split(":")[1]);
              endDate.setSeconds(endTime.split(":")[2]);

              let tF = startDate < currentDate && endDate > currentDate
              // this.valid = startDate < currentDate && endDate > currentDate
              // console.log(tF)
return tF

//               if(this.valid === true){
// this.currentOrder.preorder = this.valid;
// break;
//               }

              


              }

    },
hideGiftcard(){
  this.giftCardPanel = false
},
showGiftcard(){
  this.giftCardPanel = true
},
            getUser() {

            if(this.emailAddress){

              let self = this
              this.$http
              .get("/user/email/" + this.emailAddress)
              .then(function (response) {
              let userInfo = response.data;
              
              self.user = userInfo


              self.cardNumberInput = userInfo.user.giftcard
              self.preferredGiftCard = userInfo.user.giftcard
              })
              .catch(function (error) {
              console.log(error);
              });

    }
    },
    async lookupBalance() {

      let giftcardLookup = await this.$http.post("/user/lookupgiftcard", {
        cardNumber: this.cardNumberInput,
      });
      let giftcardResponse = giftcardLookup.data;

      this.currentBalance =
        giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0];
    },
    useGiftCardBalance() {
      let self = this;
      // first check if the balance is available
      console.log('use balance')
      this.$http
        .post("/user/lookupgiftcard", {
          cardNumber: self.cardNumberInput
        })
        .then(function (response) {
        //   console.log(response)
          if (
            Number(
              response.data.resSendData.Responses[0].SvInquiry[0]
                .CurrentBalance[0]
            ) >= Number(self.orderTotal.toFixed(2)/100)
          ) {
            self.showInsufficientFunds = false;
            self.$http
              .post("/user/usegiftcard", {
                cardNumber: self.cardNumberInput,
                useAmount: self.orderTotal.toFixed(2)/100
              })
              .then(function (response) {
                    //  console.log(response)
                self.currentBalance =
                  response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0];
                  
                if(self.$store.state.storeCurrentOrder.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeCurrentOrder,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
                
               if(self.$store.state.storeCurrentOrder.preorder === false){
                  self.doAnOrder(self.$store.state.storeCurrentOrder,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
        
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            self.showInsufficientFunds = true;
            setTimeout(function () {
              self.showInsufficientFunds = false;
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
panelShowChoose(info){

// alert(info)
if(info === 'yourOrder'){
this.panelShow = 'yourOrder'
}else if(info === 'customerInfo'){
this.panelShow = 'customerInfo'
}else{

}

},
    showingCustom(e){


      if(e === true){
this.custom = true
      }else{
this.custom = false
      }

    },
    checkForm: function (e) {
      this.errors = [];
      if (!this.currentOrder.fulfillment_info.customer.first_name) {
        this.errors.push("Name required.");
                  swal("Name required.");
      }

      if (!this.currentOrder.fulfillment_info.customer.phone) {
        this.errors.push("Phone required.");

        swal("Phone required.");
      }
      
      if (!this.currentOrder.fulfillment_info.customer.email) {
        this.errors.push('Email required.');
          swal('Valid email required.');
      } else if (!this.validEmail(this.currentOrder.fulfillment_info.customer.email)) {
        this.errors.push('Valid email required.');
        swal('Valid email required.');
      }

      if (!this.currentOrder.billing.billing_postal_code) {
        this.errors.push('invalid postal code');
        swal('invalid postal code');

      } else if (!this.validPostal(this.currentOrder.billing.billing_postal_code)) {
         this.errors.push('invalid postal code');
        swal('invalid postal code');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

   validPostal: function (postal_code) {
      var re = /^[0-9]{5}(?:-[0-9]{4})?$/;
      return re.test(postal_code);
    },


removeAttention(){
this.attention = false
},
    toggleDrawer(){
this.toggledDrawer = !this.toggledDrawer
    },
    refreshGoogle() {
      this.renderKey++;

      this.googleAddressObject = {};
      let googleAddress = {};

      this.currentOrder.fulfillment_info.delivery_info.address = {
        city: "",
        state: "",
        zip_code: "",
        address_line1: "",
        address_line2: "",
      };
this.attention = true
      this.$store.commit("googleAddress", { googleAddress });
    },
    cippaybutton() {
      this.checkForm()
      let self = this;
      this.getToken().then(function (transactionToken) {
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            // console.log("Approval Data", approvalData);
            emergepay.close();

              if(self.$store.state.storeCurrentOrder.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeCurrentOrder,approvalData,null);
              }
              
              if(self.$store.state.storeCurrentOrder.preorder === false){
                self.doAnOrder(self.$store.state.storeCurrentOrder,approvalData,null);
              }
          
          },
          onTransactionFailure: function (failureData) {
            // console.log("Failure Data", failureData);
          },
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
          url: "https://young-hamlet-03679.herokuapp.com/order/start-transaction",
          // url: "http://localhost:4000/order/start-transaction",
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
    // deliveryOption(choice) {
    //   if (choice === "delivery") {
    //     this.currentOrder.fulfillment_info.type = "delivery";
    //     this.refreshGoogle();
    //   } else {
    //     this.currentOrder.fulfillment_info.type = "pickup";
    //   }

    //   let storeCurrentOrder = this.currentOrder;
    //   this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
    // },
    addAddOn(mod, modifieritem) {
      let modAddition = {
        id: mod.id,
        modifier_group_id: modifieritem,
        price: mod.price_cents,
      };
      // this.currentItemModifierArray.push(modAddition);

      this.currentItem.price_cents = Number(this.currentItem.price_cents) + Number(mod.price_cents);
    //   console.log(this.currentItem)
      document.getElementById("add-" + mod.id).disabled = true;
      document.getElementById("remove-" + mod.id).disabled = false;
    //   console.log('reset upserves')

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

    removeFromOrderDontCloseModal(removal) {


     document.getElementById("add-" + removal.id).disabled = false;
      document.getElementById("remove-" + removal.id).disabled = true;
    //   console.log('reset upserves')



// console.log(removal)

      let currentItems = this.currentOrder.charges.items;
      let updatedItems = currentItems.filter(
        (item) => item.item_id !== removal.id
      );


      let removals = currentItems.filter(
        (item) => item.item_id === removal.id
      );

  let newArray = removals.map(a => ({...a}));
  newArray.shift()

  let updatedNewItems = updatedItems.map(a => ({...a}));
  updatedNewItems.concat(newArray);

  let concatenated = updatedNewItems.concat(newArray);



// console.log(removal)


      this.currentOrder.charges.items = concatenated;

      let removeCost = removal.price_cents;

      this.total = this.total - removeCost;

      let storeCurrentOrder = this.currentOrder;




if(this.tipSelected === 0){
  this.currentAmountToAdd = 0
}else if(this.tipSelected === 1){
  this.currentAmountToAdd = this.tip1
}else if(this.tipSelected === 2){
  this.currentAmountToAdd = this.tip2
}else if(this.tipSelected === 3){
  this.currentAmountToAdd = this.tip3
}else{

}



      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

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


if(this.tipSelected === 0){
  this.currentAmountToAdd = 0
}else if(this.tipSelected === 1){
  this.currentAmountToAdd = this.tip1
}else if(this.tipSelected === 2){
  this.currentAmountToAdd = this.tip2
}else if(this.tipSelected === 3){
  this.currentAmountToAdd = this.tip3
}else{

}

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
    closeConfirmationModal() {
      this.orderConfirmationModal = false;
      this.orderCMR = "";
    },
    openModal(serve) {


      let current = Object.assign({}, serve);

      // let current = serve
      

      this.modalOpen = true;
      this.currentItem = current;
    },
    expandChild(drawer) {
      var container = document.getElementById("drawertop-" + drawer)
        .nextSibling;
      var button = document.querySelector("button");

      /** Slide down. */
      if (!container.classList.contains("active")) {
        document.getElementById("plus-" + drawer).classList.remove("visible");
        document.getElementById("minus-" + drawer).classList.add("visible");
        /** Show the container. */
        container.classList.add("active");
        container.style.height = "auto";
        /** Get the computed height of the container. */
        var height = container.clientHeight + "px";
        /** Set the height of the content as 0px, */
        /** so we can trigger the slide down animation. */
        container.style.height = "0px";
        /** Do this after the 0px has applied. */
        /** It's like a delay or something. MAGIC! */
        setTimeout(() => {
          container.style.height = height;
        }, 0);

        /** Slide up. */
      } else {
        /** Set the height as 0px to trigger the slide up animation. */
        container.style.height = "0px";

        /** Remove the `active` class when the animation ends. */
        container.addEventListener(
          "transitionend",
          () => {
            container.classList.remove("active");
          },
          { once: true }
        );

        document.getElementById("plus-" + drawer).classList.add("visible");
        document.getElementById("minus-" + drawer).classList.remove("visible");
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
        lbs: item.lbs * this.currentItemQuanity,
        oz: item.oz * this.currentItemQuanity,
        shippable: item.shippable
      };

        this.currentOrder.charges.items.push(itemToAdd);

          this.total =
            Number(this.total) + Number(item.price_cents * this.currentItemQuanity);


          // let newDate = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

          //then close the modal
          this.currentItemModifierArray = [];
          this.closeModal();
          let storeCurrentOrder = this.currentOrder;

  

          if(this.tipSelected === 0){
            this.currentAmountToAdd = 0
          }else if(this.tipSelected === 1){
            this.currentAmountToAdd = this.tip1
          }else if(this.tipSelected === 2){
            this.currentAmountToAdd = this.tip2
          }else if(this.tipSelected === 3){
            this.currentAmountToAdd = this.tip3
          }else{

          }




      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });


    },



    addToOrderDontCloseModal(item) {


      document.getElementById("add-" + item.id).disabled = true;
      document.getElementById("remove-" + item.id).disabled = false;
    //   console.log('reset upserves')



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

          this.total =
            Number(this.total) + Number(item.price_cents * this.currentItemQuanity);


          // let newDate = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

          //then close the modal
          this.currentItemModifierArray = [];
          // this.closeModal();
          let storeCurrentOrder = this.currentOrder;

  

          if(this.tipSelected === 0){
            this.currentAmountToAdd = 0
          }else if(this.tipSelected === 1){
            this.currentAmountToAdd = this.tip1
          }else if(this.tipSelected === 2){
            this.currentAmountToAdd = this.tip2
          }else if(this.tipSelected === 3){
            this.currentAmountToAdd = this.tip3
          }else{

          }




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

      let responseUpserve = await this.$http.get(this.menuEndpoint);
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;
      this.upserveTaxRate =
        responseUpserve.data.body.tax_rates[0].percentage_rate;
      this.modifierGroups = responseUpserve.data.body.modifier_groups;
      this.modifiers = responseUpserve.data.body.modifiers;
      this.modifierItems = responseUpserve.data.body.modifiers;

      // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      // let upserveProducts = responseUpserve.data.doc[0].menu.items;
    },
    async upservesMongo() {

      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      let upserveProducts = responseUpserve.data.doc[0].menu.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.doc[0].menu.sections;
      this.upserveTaxRate =
        responseUpserve.data.doc[0].menu.tax_rates[0].percentage_rate;
      this.modifierGroups = responseUpserve.data.doc[0].menu.modifier_groups;
      this.modifiers = responseUpserve.data.doc[0].menu.modifiers;
      this.modifierItems = responseUpserve.data.doc[0].menu.modifiers;

      // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      // let upserveProducts = responseUpserve.data.doc[0].menu.items;
    },





    scheduleAnOrder(currentOrder,approvalData,giftcardbalance) {


      let self = this;
      // this.$http
      //   .post(this.oloEndpoint, currentOrder)
      //   .then((response) => {
      //     console.log(response);
      //     self.orderConfirmationModal = true;
      //     self.giftcardbalance = giftcardbalance
      //     self.orderCMR = response.data;
      //     let orderCMR = response.data;
      //     orderCMR.giftcardbalance = giftcardbalance
      //     self.$store.commit("orderCMR", { orderCMR });
      //     this.$router.push("/orderconfirmation");
      //     self.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
      //     self.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
      //     let newDate = new Date();
      //     self.currentOrder.time_placed = newDate;
      //     self.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
      //     let storeCurrentOrder = self.currentOrder
      //     self.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
      //   })
      //   .catch((e) => {
      //     // this.errors.push(e);
      //     console.log("errors");
      //     console.log(e);
      //   });
  
      this.$http.post("/confirmationemail",currentOrder)
      .then((response) => {
        //   console.log('confirmation email sent')
      }).catch((e) => {
        //   console.log("errors");
        //   console.log(e);
        });


    let infoForPay = {
          payInfo: approvalData,
          orderInfo: currentOrder
        }
    let infoForPayStringify = infoForPay      
     this.$http
        .post("/order/addorder", infoForPayStringify)
        .then((response) => {
        //   console.log('add to mongo emerge pay front end')
// console.log(currentOrder);
// console.log(currentOrder)
          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = currentOrder;
          let orderCMR = currentOrder;
          orderCMR.giftcardbalance = giftcardbalance
          self.$store.commit("orderCMR", { orderCMR });
          this.$router.push("/orderconfirmation");


        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });
      },
doAnOrder(currentOrder,approvalData,giftcardbalance) {
      let self = this;
      this.$http
        .post(this.oloEndpoint, currentOrder)
        .then((response) => {
        //   console.log(response);
          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = response.data;
          let orderCMR = response.data;
        //   console.log(response.data)
          orderCMR.giftcardbalance = giftcardbalance
          self.$store.commit("orderCMR", { orderCMR });
          this.$router.push("/orderconfirmation");
          self.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          self.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
          let newDate = new Date();
          self.currentOrder.time_placed = newDate;
          self.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          let storeCurrentOrder = self.currentOrder
          self.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
  
    let infoForPay = {
          payInfo: approvalData,
          orderInfo: currentOrder
        }
    let infoForPayStringify = infoForPay      
     this.$http
        .post("/order/addorder", infoForPayStringify)
        .then((response) => {
          console.log(response);
          console.log('add to mongo emerge pay front end')
        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });
      },
    issueReturn() {
      this.$http
        .post("/issue-return")
        .then((response) => {
        let prestring = JSON.stringify(response.data.transactionToken)
        let token = prestring.replace(/['"]+/g, '')
        emergepay.open({
          // (required) Used to set up the modal
          transactionToken: token,
          // (optional) Callback function that gets called after a successful transaction
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();
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


        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },

thanksgiving(m,dy) {
  let d = new Date();
  let n = d.getFullYear();
  let  days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}
  ,dat = new Date(n+'/'+m+'/1')
  ,currentmonth = m
  ,firstday = false;
  while (currentmonth === m){
    firstday = dat.getDay() === days[dy] || firstday;
    dat.setDate(dat.getDate()+(firstday ? 7 : 1));
    currentmonth = dat.getMonth()+1 ;
  }
  dat.setDate(dat.getDate()-7);
  return dat;
},
showTimeInterVals(startTime,endTime){


let items = [];
for (var hour = startTime; hour < endTime; hour++) {
  items.push([parseInt(hour), 0]);
  items.push([parseInt(hour), 15]);
  items.push([parseInt(hour), 30]);
  items.push([parseInt(hour), 45]);
}

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
});

const range = items.map(time => {
  const [hour, minute] = time;
  date.setHours(hour);
  date.setMinutes(minute);
  return formatter.format(date);
});

this.openTimes = this.openTimes.concat(items)


},
dropDown(){

     let today = new Date()
     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

         let subdays = days.map(function(x){
           return x.substring(0,3).toLowerCase()
          })

        let self2 = this
        let tFs = subdays.map(function(x){
        return self2.openDays.includes(x)
        })


         for(let i = 0;i<7;i++){
          let tomorrow = new Date(today)
          tomorrow.setDate(tomorrow.getDate() + i)

        if('January 1st' === moment(String(tomorrow)).format('MMMM Do') || 'December 25th' === moment(String(tomorrow)).format('MMMM Do') || !tFs[tomorrow.getDay()] || moment(String(this.thanksgiving(11,'thu'))).format('MMMM Do YYYY') === moment(String(tomorrow)).format('MMMM Do YYYY')){
              
            let timeslotsCreated = [];

            for(let i = 1; i < this.openTimesUpdated.length; i++){ 
              timeslotsCreated.push({
              time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
              timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 
              
            this.dropDownDays.push({
            dayLabel: days[tomorrow.getDay()] + ' (closed)',
            dayName: days[tomorrow.getDay()],
            closed: true,
            dateData: days[tomorrow.getDay()] + moment(String(tomorrow)).format(' MMM Do'),
            dateFormatted: tomorrow.toISOString().slice(0,10),
            timeslots: timeslotsCreated
            })
                            
            }else{

            let timeslotsCreated = [];

            for(let i = 1; i < this.openTimesUpdated.length; i++){ 
              timeslotsCreated.push({
              time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
              timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 
            this.dropDownDays.push({
            dayLabel: days[tomorrow.getDay()],
            dayName: days[tomorrow.getDay()],
            closed: false,
            dateData: days[tomorrow.getDay()] + moment(String(tomorrow)).format(' MMM Do'),
            dateFormatted: tomorrow.toISOString().slice(0,10),
            timeslots: timeslotsCreated
            })
            }
        }





   this.rendered = true;
    }
  },
  mounted() {

    this.getHours();

      // this.returnAvailableNow();
    this.getUser();
    // this.upserves();
    this.upservesMongo();
    emergepay.init();

    this.$store.state.storeCurrentOrder = {};
    this.$store.state.orderCMR = {};
    this.$store.state.orderConfirmationModalResponse = {};
//reset
//reset



// if(this.title === this.$store.state.storeCurrentOrder.restaurant){
//     this.total = 0
//     this.currentAmountToAddCustom = 0
//     this.tipSelected = 0
//     this.currentAmountToAdd = 0
//     this.tip = 0
//     this.total = 0
//     this.cartTotal = 0
//     this.currentOrder.charges.total = 0
//     this.currentOrder.charges.fees = 0
//     this.currentOrder.charges.taxes = 0
//     this.currentOrder.charges.tip.amount = 0
//     this.currentOrder.payments.payments.amount = null;
//     if(this.$store.state.storeCurrentOrder.charges){
//         this.total = this.$store.state.storeCurrentOrder.charges.preTotal;
//     }
//     this.currentOrder = this.$store.state.storeCurrentOrder;
// }else{
//     this.$store.state.storeCurrentOrder = {};
// }






if(this.$store.state.openDrawerOnLoad === true){
  this.toggleDrawer()
  let drawerTrue = false
  this.$store.commit("drawerTrue", { drawerTrue });
}
    // this.dropDown();
  }
};
</script>


<style lang="scss">

.toggleLr{
  div{
    width: 50%;
    display: inline-block;

      &:first-child{
      //  padding-right: 1%;
       float: left;
      }
            &:last-child{
      //  padding-left: 1%;
       float: right;
      }

    button{
      width: 98%;
      margin: 0 auto;
float: left;

&.fl-right{
  float: right;
}
    }



  }
}


button.selected{
 
   background: transparent !important;
    border: 2px solid #f05d5b !important;
    box-sizing: border-box;
    color: #f05d5d !important;

}


#upserveolo.shopRetail{
  
  ul.filters{
  border-bottom: 0px solid rgba(0, 0, 0, 0.1);
position: relative;
display: inline;
        margin-bottom: 0;
      li{
        border-bottom: 0px solid rgba(0, 0, 0, 0.1);
        color: #fff367;
        font-weight: 500;
        margin: 0 5px;
        text-transform: lowercase;
            display: inline;
      }  
      }

}


.no-lr-pad{
  padding-left: 0;
  padding-right: 0;
}


.col-sm-4.shop-item{
  margin-bottom: 10px;
}

.backgroundImageSquare{
width: 100%;
    background-size: 150%;
    background-position: center;

position: relative;
.content {
  background: #f05d5b;
  position: absolute;
  width: 100%;
  height: 100%;
}

}

  .backgroundImageSquare:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}


.col-6.col-md-4.shop-item.no-lr-pad:nth-child(3n){
.itemContainer{
// background: green;
padding-left: 8px;
padding-right: 0;
}
}
.col-6.col-md-4.shop-item.no-lr-pad:nth-child(3n+1){
.itemContainer{
// background: red;
padding-left: 0;
padding-right: 8px;
}
}

.col-6.col-md-4.shop-item.no-lr-pad:nth-child(3n+2){
.itemContainer{
// background: pink;
padding-left: 4px;
padding-right: 4px;
}
}


.description-panel{
  background: #fff367;
  padding: 10px;
}


.itemContainer{
      margin-bottom: 12px;
}


@media only screen and (max-width: 768px) {

.col-6.col-md-4.shop-item.no-lr-pad:nth-child(odd){
.itemContainer{
// background: green;
padding-left: 0px !important;
padding-right: 4px !important;
}
}
.col-6.col-md-4.shop-item.no-lr-pad:nth-child(even){
.itemContainer{
// background: red;
padding-left: 4px !important;
padding-right: 0px !important;
}
}


.container.pt20{
  padding-left: 20px;
  padding-right: 20px;

}


}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.itemContainer,
ul li{
  cursor: pointer;
}


.mb20{
  margin-bottom: 20px;
}

.mb10{
  margin-bottom: 10px;
}

.mb5{
    margin-bottom: 5px;
}

.weight,
.pick-up-only{
font-style: italic;
font-size: .875em;
font-weight: 300;
}
</style>