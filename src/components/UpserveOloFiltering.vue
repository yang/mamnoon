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
          <h2>thank you for your order!</h2>
          <div>
            <pre>
            {{orderConfirmationModalResponse}}
          </pre>
<ul class="no-left-pad" v-if="orderConfirmationModalResponse.charges.items">
  <li v-for="item in orderConfirmationModalResponse.charges.items" :key="item.name">
    {{item.name}}
  </li>
  </ul>  
  <br />  
<b>tip: ${{orderConfirmationModalResponse.charges.tip.amount.toFixed(2)/100}}</b>
  <br />  
<b>taxes: ${{orderConfirmationModalResponse.charges.taxes.toFixed(2)/100}}</b>
  <br />  
<b>total: ${{orderConfirmationModalResponse.charges.total.toFixed(2)/100}}</b>


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
          <div
            class="item-image-container"
            v-if="currentItem.images.online_ordering_menu"
            :style="{'background-image': currentItem.images.online_ordering_menu.main}"
          >
            <img :src="currentItem.images.online_ordering_menu.main" />
          </div>

          <p class="item-description-p">{{currentItem.description}}</p>
        <b>${{currentItem.price_cents.toFixed(2)/100}}</b>
                    <hr />
          <div v-if="currentItem.modifier_group_ids.length >= 1">
            <h4 class="text-left">addons</h4>
            <div v-for="modifieritem in currentItem.modifier_group_ids" :key="modifieritem">
              <div v-for="modifier in modifierGroups" :key="modifier.name">
                <div v-if="modifieritem === modifier.id" class="displayInlineBlock">
                  <div v-if="modifier.minimum_required === 0">
                    <div v-if="modifier.name !== 'Promotions'">(addons not required)</div>
                  </div>
                  <div v-else>
                    minimum_required: {{modifier.minimum_required}}
                    maximum_required: {{modifier.maximum_required}}
                  </div>

                  <div v-if="modifier.name === 'Promotions'">{{modifier.name}}</div>
                  <div v-for="mod in modifierItems" :key="mod.id">
                    <div v-for="m in modifier.modifier_ids" :key="m">
                      <div v-if="m === mod.id" class="box">
                        <div class="box-inner">
                          {{mod.name}}
                          <br />
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
            <textarea
            type="text"
            placeholder="special instructions"
            v-model="textdescription"
            />
          <!-- <hr /> -->

          <button v-if="currentItemQuanity > 1" @click="decrementCurrentItem()">-</button>
          <button v-else disabled>-</button>
          &nbsp;&nbsp;
          <span id="value">{{currentItemQuanity}}</span>&nbsp;&nbsp;
          <button @click="incrementCurrentItem()">+</button>
          <div class="add-to-order-footer">
            item total: <b>${{currentItem.price_cents.toFixed(2)/100 * currentItemQuanity }}</b>


            <button
              class="float-right"
              @click="addToOrder(currentItem)"
            >add to order</button>
          </div>

          <!-- {{currentItem}} -->
        </div>
      </div>


      <div class="container pt20 no-bot-pad">
        <div class="row">
          <div class="col-md-12">
             <h1 class="text-center">mamnoon</h1>
               </div>
        </div>
      </div>

      <div class="container pt20">
        <div class="row">
          <div class="col-md-8">
            <div class="container online-menu">
              <h4>featured</h4>


            </div>
            <!-- <div class="container featured">
              <h4>featured</h4>
            </div> -->
<!-- 
    <vue-aspect-ratio ar="16:9" width="640px">
        <div>your content goes here</div>
    </vue-aspect-ratio> -->

   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>
   
<div class="is-fullheight no-top-pad">
        <carousel :items="1" :loop="true" :dots="false" :nav="false"  v-if="upserveSections">
                      <template class="subprev" slot="prev">
                <span class="prev">
                    <Prev />
            </span>
          </template>

            <!-- <template v-for="item in upserveSections" v-if="item.name === 'Feature - Tuesday'||item.name === 'Feature - Wednesday'||item.name === 'Feature - Thursday'||item.name === 'Feature - Friday'||item.name === 'Feature - Saturday'"> -->
            <template v-for="item in upserveSections">
  <VueAspectRatio ar="4:3" width="100%" class="" v-for="piece in item.item_ids" :key="piece">  
                    <template v-for="serve in upserve">
                      <div v-if="serve.id === piece" class="inline-block full-height-slide">
                        <div @click="openModal(serve)">
                            <template v-if="serve.images">
                              <div
                                v-if="serve.images.online_ordering_menu"
                                v-bind:style="{ backgroundImage: 'url(' + serve.images.online_ordering_menu.main + ')' }"
                              ></div>
                              <div
                                v-else
                                v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
                              ></div>
                            </template>
                                                 <div class="content-box-upper">
                              <div class="name">{{item.name.replace('Feature - ', '')}}<br>{{serve.name}}</div>
                              <div
                                v-if="serve.description"
                                class="food-description"
                              >{{serve.description}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                            </div></div>
                            </div>
                    </template>
         </VueAspectRatio>
          </template>
                    <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
            </carousel>
</div>

</template>

<br>
                        <div class="container online-menu">
              <h4>full mamnoon menu</h4>


            </div>
     
   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20">
       Loading...
     </div>
     </template>
         <template v-else>
            <template v-for="item in upserveSections">
<div style="display:none;" v-if="item.name === 'Feature - Tuesday'||item.name === 'Feature - Wednesday'||item.name === 'Feature - Thursday'||item.name === 'Feature - Friday'||item.name === 'Feature - Saturday'"></div>
              <div v-else class="container menu-line">

              <div
                :id="'drawertop-'+ item.id"
                @click="expandChild(item.id)"
                class="display-block row no-lr-margin"
              >
                <h2 class="menu-header">
                  <span :id="'plus-'+ item.id" class="expand-contract plus visible">+</span>
                  <span :id="'minus-'+ item.id" class="expand-contract minus">-</span>
                  {{item.name}}
                </h2>
              </div>
              <div :data="'drawer' + item.id" class="hidden-drawer row no-lr-margin">
                <div class="filtree-full" v-for="piece in item.item_ids" :key="piece">
              
                    <template v-for="serve in upserve" class="grey-bg">
                      <template v-if="serve.id === piece" class="inline-block">
                        <div class="yellow-bg" @click="openModal(serve)">
                          <div class="half-width2left">
                            <div class="content-box">
                              <div class="name">{{serve.name}}</div>
                              <!-- <div class="item">
                                {{serve}}
                              </div> -->
                              <div
                                v-if="serve.description"
                                class="food-description"
                              >{{serve.description}}</div>
                              <div class="food-price">
                                ${{ serve.price_cents.toFixed(2)/100}}
                              </div>
                              <br />
                              <!-- <button @click="openModal(serve)">view</button> -->
                            </div>
                          </div>
                          <div class="half-width2right">
                            <template v-if="serve.images">
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
                        </div>
                      </template>
                    </template>
               
                </div>
              </div>
              </div>
            </template>

  </template>


          </div>

          <div class="col-sm-4 drawer-on-mobile" :class="{expanded: toggledDrawer}">
<button @click="toggleDrawer()" class="toggle">
<span v-if="toggledDrawer">hide order</span>
<span v-else>view order</span>
</button>
      <div v-if="currentOrder" class="container  mt10">
<button v-if="panelShow === 'yourOrder'" @click="panelShowChoose('yourOrder')" class="filehalf" style="width: 100%;background-color: #f05d5b;color: #fff;">your order</button>
<button v-else @click="panelShowChoose('yourOrder')" class="filehalf" style="width: 100%;">edit order</button>
<!-- <button @click="panelShowChoose('customerInfo')" class="filehalf deactivated" disabled="disabled" v-if="this.currentOrder.charges.items.length === 0">customer info</button> -->
<!-- <button @click="panelShowChoose('customerInfo')" class="filehalf" v-else>customer info</button> -->


</div>







<div v-if="panelShow === 'customerInfo'">
  <div class="container">
      <hr />
  </div>
<div class="container small-message mt10" v-if="this.currentOrder.fulfillment_info.type === ''">

delivery or pickup?
  </div>


            <!-- google area -->

            <div v-if="currentOrder" class="container  mt10">
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
             <br />


              <!-- <div v-if="googVPresent === true"> -->
              <!-- </div> -->
  <h4 v-if="currentOrder.fulfillment_info.type === 'delivery'" class="address-info text-left mt10">address</h4>
<div v-if="currentOrder.fulfillment_info.type === 'delivery'">
<div class="small-message" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 === ''">please enter a valid delivery address</div>
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







              
              <!-- <br v-if="currentOrder.fulfillment_info.type === 'delivery'" /> -->
              <!-- {{errors}} -->
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
                  <!-- <br /> -->
                  <hr />
                  <label class="smblk" for="zip">special instructions:</label>
                  <br />
                  <textarea
                    type="text"
                    id="specialinstructions"
                    name="specialinstructions"
                    placeholder="eg, leave on doorstep"
                    v-model="currentOrder.fulfillment_info.instructions"
                  />
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
                  v-model="currentOrder.fulfillment_info.customer.name"
                />
                <br />
               <label class="smblk" for="email">email:</label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  v-model="currentOrder.fulfillment_info.customer.email"
                />
                <br />

               <label class="smblk" for="phone">phone:</label>
                <br />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  v-model="currentOrder.fulfillment_info.customer.phone"
                />












                

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
<template v-if="this.currentOrder.charges.items.length > 0">
              <div class="mt10" v-if="total > 0">
 
                <button id="noTip" class="tipButton quarter" style="display:none;" @click="setTip(0)"><b>no tip</b><br>(0)</button>&nbsp;
                <button
                  id="tipOption1"
                  class="tipButton quarter"
                  @click="setTip(1)"
                ><b>18%</b><br>(${{tip1.toFixed(2)/100 }})</button>&nbsp;
                <button
                  id="tipOption2"
                  class="tipButton quarter"
                  @click="setTip(2)"
                ><b>22%</b><br>(${{tip2.toFixed(2)/100 }})</button>&nbsp;
                <button
                  id="tipOption3"
                  class="tipButton quarter"
                  @click="setTip(3)"
                ><b>25%</b><br>(${{tip3.toFixed(2)/100 }})</button>&nbsp;
                <br>
                <button
                  id="customTip"
                  class="tipButton customtip"
                  :class="{activated: this.customTipVisible}"
                  @click="setTip(4)"
                >custom</button>
                &nbsp;
                <!-- <input type="text" placeholder="custom tip" /> -->
                <!-- <input
                  v-if="customTipVisible === true"
                  type="number"
                  min="0.00"
                  placeholder="0.00"
                  v-model="currentAmountToAddCustom"
                /> -->
                <currency-input class="custom-tip-button" currency="USD" v-if="customTipVisible === true" v-model="currentAmountToAddCustom" />

              </div>
          
              <hr />  
              total: ${{total.toFixed(2)/100 }}
              <br />
              tax: ${{taxes.toFixed(2)/100 }}
     
<div v-if="custom === true">
custom tip: ${{ Number(currentAmountToAdd).toFixed(2)/100  }}
</div>
<div v-else>
             tip: ${{currentAmountToAdd.toFixed(2)/100 }}
</div>

             

              <hr />

              <b>order total: ${{orderTotal.toFixed(2)/100 }}</b>



</template>
<template v-else>
<div class="text-center cart-empty-class">
cart empty
</div>
</template>
<!-- start panel -->
<!-- start panel -->
<!-- start panel -->






    
              <!-- <button v-if="currentOrder.charges.items.length === 0" disabled>no items in cart</button> -->
              <!-- <button v-if="currentOrder.charges.total > 0" @click="doAnOrder(currentOrder)"> do an order</button> -->

<!-- </div> -->
<template v-if="panelShow === 'yourOrder'">

 <button @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf deactivated" disabled="disabled" style="width:100%;" v-if="this.currentOrder.charges.items.length === 0">customer info</button>
 <button @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf" style="width:100%;" v-else>edit customer info</button>
</template>


              <template v-if="panelShow === 'customerInfo'">
              <button class="mt10 fw" 
                v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="cippaybutton"
              >Pay</button>
              <button class="mt10 fw" v-else disabled>Pay</button>
              </template>
              <!-- store: -->

              <br />
              <br />
              <br />
      </div>
          </div>
        </div>
        <pre>
          {{this.$store.state.storeCurrentOrder}}
        </pre>
      </div>
    </section>
  </div>
</template>

<script>


import carousel from "vue-owl-carousel";
import GoogleValidate from "@/components/GoogleValidate";
import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";

import CloseModalRedSm from "@/components/svgIcons/CloseModalRedSm";

import VueAspectRatio from "vue-aspect-ratio";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import swal from "sweetalert";
export default {
  name: "upservefiltering",
  props: ["data"],
  components: {
    CloseModal,
    CloseModalRed,
    CloseModalSm,
    CloseModalRedSm,
    GoogleValidate,
    carousel,
    VueAspectRatio,
    Next,
    Prev
  },
  computed: {
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
  },
  watch: {
    checked(){

      if(this.checked){

      this.currentOrder.billing.billing_name = this.currentOrder.fulfillment_info.customer.name
      
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
},
    computedTotal(newComputedTotal,oldComputedTotal){
this.computedTotal = Number(this.total) + Number(this.currentAmountToAdd)
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
      console.log(googleAddressObject);

      this.googleAddressObject = googleAddressObject;

      this.currentOrder.fulfillment_info.delivery_info.address.city =
        googleAddressObject.locality;
      this.currentOrder.fulfillment_info.delivery_info.address.state =
        googleAddressObject.state;
      this.currentOrder.fulfillment_info.delivery_info.address.zip_code =
        googleAddressObject.zip;
      this.currentOrder.fulfillment_info.delivery_info.address.address_line1 =
        googleAddressObject.streetNumber + " " + googleAddressObject.route;

      // this.date = newCount[0].meal.date;
      // this.delivery = newCount[0].meal.delivery;
      // this.reset(newCount);
    },
    // whenever total changes, this function will ru
   taxes: function(newTaxes,oldTaxes){
this.orderTotal = Number(this.total) + Number(this.taxes) + Number(this.tip) + Number(this.currentAmountToAdd)


this.currentOrder.charges.addedTotal = this.orderTotal
this.currentOrder.charges.total = this.orderTotal
    },
    currentAmountToAdd: function(newCurrent,oldCurrent){
this.orderTotal = Number(this.total) + Number(this.taxes) + Number(this.tip) + Number(this.currentAmountToAdd)
this.currentOrder.charges.addedTotal = this.orderTotal
this.currentOrder.charges.total = this.orderTotal
this.currentOrder.charges.tip.amount = this.currentAmountToAdd

    },
    tip: function (newTip, oldTip) {
      this.orderTotal = Number(this.total) + Number(this.taxes) + Number(this.tip) + Number(this.currentAmountToAdd)
      this.currentOrder.charges.tip.amount = this.tip;
      this.currentOrder.charges.addedTotal = this.orderTotal
      this.currentOrder.charges.total = this.orderTotal
    },
    customTip: function (newCustomTip, oldCustomTip) {
      this.currentOrder.charges.tip.amount = this.customTip;
    },
    total: function (newTotal, oldTotal) {
      //good
      let taxAmt = Number(this.total) * Number(this.upserveTaxRate);
      this.taxes = Math.round(taxAmt);

      this.currentOrder.charges.taxes = this.taxes;

      //good
      let totalWithTax = Number(this.total) + taxAmt;
      this.totalWithTax = Math.round(totalWithTax);
      this.currentOrder.charges.total = this.totalWithTax;
      this.currentOrder.charges.preTotal = this.totalWithTax;
      this.currentOrder.payments.payments[0].amount = this.totalWithTax;
      let storeCurrentOrder = this.currentOrder;


this.computedTotal = this.total

this.totalwith18 = this.total * .18
this.totalwith22 = this.total * .22
this.totalwith25 = this.total * .25


this.orderTotal = Number(this.total) + Number(this.taxes) + Number(this.tip) + Number(this.currentAmountToAdd)


this.currentOrder.charges.addedTotal = this.orderTotal
this.currentOrder.charges.total = this.orderTotal


      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
    }
    },
  data() {
    return {
      panelShow: 'yourOrder',
      checked: false,
      currentAmountToAddCustom: 0,
      custom: false,
      errors: [],
      attention: true,
      orderTotal: 0,
      tipSelected: 0,
      totalwith18: 0,
      totalwith22: 0,
      totalwith25: 0,
      toggledDrawer: false,
      computedTotal: 0,
      currentAmountToAdd: 0,
      customTip: 0,
      customTipVisible: false,
      tip: 0,
      googleAddressObject: {},
      googleAddressView: this.$store.state.googleAddress,
      renderKey: 0,
      googVPresent: true,
      orderConfirmationModal: false,
      orderConfirmationModalResponse: "",
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
        time_placed: null,
        confirmation_code:
          "mamnoon-" + Math.random().toString(36).substr(2, 29),
        charges: {
          total: 0,
          preTotal: 0,
          addedTotal: 0,
          fees: 0,
          taxes: 0,
          tip: {
            amount: 0,
            payment_type: "Generic Online Ordering Integrated",
          },
          items: [],
        },
        fulfillment_info: {
          // type: "",
          type: "delivery",
          estimated_fulfillment_time: null,
          customer: {
            // email: "joe.waine@gmail.com",
            // phone: "425-442-9308",
            // last_name: "Waine",
            // first_name: "Joseph",
            email: "",
            phone: "",
            name: "",
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
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
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
      if (!this.currentOrder.fulfillment_info.customer.name) {
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
    setTip(index) {


this.tipSelected = index

this.computedTotal = 0;
if(index === 0){
this.showingCustom(false)
  document.getElementById("noTip").disabled = true;
  document.getElementById("tipOption1").disabled = false;
  document.getElementById("tipOption2").disabled = false;
  document.getElementById("tipOption3").disabled = false;
  document.getElementById("customTip").disabled = false;




this.currentAmountToAdd = 0
this.customTipVisible = false
}else if(index === 1){
      
this.showingCustom(false)
  document.getElementById("noTip").disabled = false;
  document.getElementById("tipOption1").disabled = true;
  document.getElementById("tipOption2").disabled = false;
  document.getElementById("tipOption3").disabled = false;
  document.getElementById("customTip").disabled = false;

this.currentAmountToAdd = this.totalwith18
this.customTipVisible = false
}else if(index === 2){

this.showingCustom(false)
  document.getElementById("noTip").disabled = false;
  document.getElementById("tipOption1").disabled = false;
  document.getElementById("tipOption2").disabled = true;
  document.getElementById("tipOption3").disabled = false;
  document.getElementById("customTip").disabled = false;


this.currentAmountToAdd = this.totalwith22
this.customTipVisible = false
}else if(index === 3){


this.showingCustom(false)
  document.getElementById("noTip").disabled = false;
  document.getElementById("tipOption1").disabled = false;
  document.getElementById("tipOption2").disabled = false;
  document.getElementById("tipOption3").disabled = true;
  document.getElementById("customTip").disabled = false;

this.currentAmountToAdd = this.totalwith25
this.customTipVisible = false
}else if(index === 4){
this.showingCustom(true)

  document.getElementById("noTip").disabled = false;
  document.getElementById("tipOption1").disabled = false;
  document.getElementById("tipOption2").disabled = false;
  document.getElementById("tipOption3").disabled = false;
  document.getElementById("customTip").disabled = true;
this.currentAmountToAddCustom = 0

this.customTipVisible = true
this.currentAmountToAdd = 0
this.currentAmountToAdd = this.customTip


}else{

} 

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
        // Set up and open the payment modal
        emergepay.open({
          // (required) Used to set up the modal
          transactionToken: transactionToken,
          // (optional) Callback function that gets called after a successful transaction
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();
            // location = "https://www.chargeitpro.com";
            //do the post here
            // self.doAnOrder(self.$store.state.storeCurrentOrder);
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
          // url: "http://localhost:4000/start-transaction",
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

        this.refreshGoogle();





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



this.totalwith18 = this.total * .18
this.totalwith22 = this.total * .22
this.totalwith25 = this.total * .25




if(this.tipSelected === 0){
  this.currentAmountToAdd = 0
}else if(this.tipSelected === 1){
  this.currentAmountToAdd = this.totalwith18
}else if(this.tipSelected === 2){
  this.currentAmountToAdd = this.totalwith22
}else if(this.tipSelected === 3){
  this.currentAmountToAdd = this.totalwith25
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
      this.orderConfirmationModalResponse = "";
    },
    openModal(serve) {
      this.modalOpen = true;
      this.currentItem = serve;
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
      };

      this.currentOrder.charges.items.push(itemToAdd);

      this.total =
        Number(this.total) + Number(item.price_cents * this.currentItemQuanity);

      let newDate = new Date();
      this.currentOrder.time_placed = newDate;
      this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

      //then close the modal
      this.currentItemModifierArray = [];
      this.closeModal();
      let storeCurrentOrder = this.currentOrder;


this.totalwith18 = this.total * .18
this.totalwith22 = this.total * .22
this.totalwith25 = this.total * .25




if(this.tipSelected === 0){
  this.currentAmountToAdd = 0
}else if(this.tipSelected === 1){
  this.currentAmountToAdd = this.totalwith18
}else if(this.tipSelected === 2){
  this.currentAmountToAdd = this.totalwith22
}else if(this.tipSelected === 3){
  this.currentAmountToAdd = this.totalwith25
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
      let responseUpserve = await this.$http.get(
        //   // "http://localhost:4000/product/upserveolo"
        "http://localhost:4000/product/upserveolo"
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
        // .post("http://localhost:4000/oloorder", currentOrder)
        .then((response) => {
          console.log(response);
          self.orderConfirmationModal = true;
          self.orderConfirmationModalResponse = response.data;
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
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
  top: 0;
}

li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

li button {
  position: absolute;
  right: 0;
  top: 20px;
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
  border-radius: 4px;
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
 
    font-size: .9rem;
    list-style-type: none;
    padding: 18px 0 22px;
    
  }
}

.hidden-drawer {
  // display: none;
  padding: 0;
  height: 0;
  transition: all 0.5s ease;
  overflow: hidden;
  &.expanded-drawer {
    transition: all 0.5s ease;
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
  // padding: 0 18px;
  font-size: 18px;
  font-weight: 400;
}

button.delivery-option {
    width: 49%;

    border-radius: 4px;
    border: 2px solid #f05d5b;
    background: #fff;
    color: #f05d5b;
    padding-top: 5px;
  &.selected {
    background: #f05d5b;
    color: #ffffff;
  border: 2px solid #f05d5b;
    padding-top: 5px;
  }
}

button.filehalf {
    width: 49%;

    border-radius: 4px;
    border: 2px solid #f05d5b;
    background: #fff;
    color: #f05d5b;
    padding-top: 5px;
  &.selected {
    background: #f05d5b;
    color: #ffffff;
  border: 2px solid #f05d5b;
    padding-top: 5px;
  }

&.deactivated{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;

}



}

form input,
form textarea {
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  // margin-bottom: 10px;
      margin-bottom: 6px;
}

.backgroundImage {
  background-position: center center;
  background-size: cover;

  // height: 180px;
  // background-size: 129%;

  height: 100%;
}

.inline-block {
  display: inline-block;
  width: 100%;
}

.yellow-bg {
  background: #fff367;
  width: 100%;
  display: inherit;
  height: 180px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
  }

  position: relative;
  overflow: hidden;
}

.half-width2left {
  width: 65%;
  float: left;
  height: 180px;
  overflow: hidden;
}

.half-width2right {
  width: 35%;
  float: left;
  height: 180px;
  overflow: hidden;
}

.grey-bg {
  height: 180px;
}

.filtree-half {
  width: calc(50% - 0px);
  float: left;
  height: 180px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}

.filtree-full {
  width: calc(100% - 0px);
  float: left;
  height: 180px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}

@media only screen and (max-width: 768px) {
  .filtree-half {
    width: calc(100% - 0px);
    float: left;
    height: 180px;
    background: transparent;
    padding: 5px;
    overflow: hidden;
    margin-bottom: 5px;
  }
}

.content-box {
  // margin: 10px;


      position: inherit;
    bottom: 0;
    background: #fff367;
    padding: 10px;
    // width: 100%;  

  .name {
  }

  .food-description {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
}


.content-box-upper {
  // margin: 10px;


      position: absolute;
    bottom: 0;
    background: #fff367;
    padding: 10px;
    width: 100%;  

  .name {
  }

  .food-description {
    font-size: 0.9rem;
    margin-bottom: 0px;
  }
}


.text-left {
  text-align: left;
}

.online-menu {
  background-color: #f05d5b;
  padding: 20px 0 15px;
  text-align: center;
  position: relative;
  h4 {
    color: #fff367;
    font-size: 1.5rem;
    text-align: center;
  }
}

.food-price {
  font-size: 0.9rem;
  font-weight: 600;
}

.no-lr-margin {
  margin-left: 0;
  margin-right: 0;
}

.expand-contract {
  display: none;
  &.visible {
    display: inline-block;
  }
}

.closeModal {
  position: absolute;
  top: 11px;
  right: 15px;
}

.box {
  width: 33.33%;
  // border: 1px solid red;
  float: left;
}

.box-inner {
  margin: 10px 0;
  // width: 25%;
  padding: 0px;

  border: 0px solid red;
  float: left;
}

.order-modal-width {
  width: 700px;

  img {
    width: 100% !important;
  }
}

@media only screen and (max-width: 768px) {
  .order-modal-width {
    width: 100% !important;
    max-width: 96% !important;
  }
}

.order-modal-body {
  // max-height: 70vh;
  max-height: 80vh;
  overflow-y: scroll;
border-top: 0;
  textarea {
    width: 100%;
    margin: 0px 0;
    margin-bottom: 10px;
  }
}

.container.online-menu.order-modal-width {
  margin-top: 24px;
}

.float-right {
  float: right;
}

.item-image-container {
  text-align: center;

  background-position: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 300px;
  z-index: 1;

  background: #f0ecec;

  img {
    width: auto !important;
    height: 300px;
  }
}

.add-to-order-footer {
  padding: 15px 0 20px 0;
  width: 100%;
}

#value {
  margin: 10px;
  font-weight: 600;
}

.pt50 {
  padding-top: 50px;
}

.pt20 {
  padding-top: 20px;
}



.mt10 {
  margin-top: 10px;
}

.item-description-p {
  margin-top: 15px;
  margin-bottom: 5px;
}

textarea {
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  margin-bottom: 10px;
}

.displayInlineBlock {
  width: 100%;
  display: inline-block;
}

.delivery-box {
  width: 100%;
  position: relative;
  height: 50px;
}

.updateAddress {
  width: 100%;
  position: relative;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 0;
}

.googleValidate {
  width: 100%;
  position: relative;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  pointer-events: none;
}

.pointer-all {
  pointer-events: all;
}

.display-none {
  display: none;
}



.tipButton{
  // margin-bottom: 20px;
    margin-bottom: 5px;
    width: calc(33% - 1.8px);
    border: 2px solid #f05d5b;
    background-color: #ffffff;
    color: #f05d5b;
    padding: 5px 10px;
    border-radius: 4px;


transition: background-color .1s ease;
    &:hover{
        border: 2px solid #f05d5b;
    }

    &:disabled{
          &:hover{
        border: 1px solid #999999;
    }
    }

}



    .toggle{
      display: none;
    }

@media only screen and (max-width: 960px) {
.drawer-on-mobile{
    position: fixed;
    left: 100%;
    background: white;
    padding: 10px;
    width: 100%;
    max-width: 100%;
    top: 90px;
    height: 100vh;
    border-left: 1px solid black;
    transition: all .25s ease;

    // border-left: 50px solid #F05D5B;
    z-index: 100;
&.expanded{
      left: 0;
      // border-left: 0px solid #F05D5B;


    .toggle{
    transform: translate(0px);
    }


}

    .toggle{
        display: block;
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100;
    }


}}



@media only screen and (max-width: 768px) {


 .backgroundImage {
  background-position: center center;
  background-size: cover;

  // height: 150px;
  // background-size: 129%;
}

.inline-block {
  display: inline-block;
  width: 100%;
}

.yellow-bg {
  background: #fff367;
  width: 100%;
  display: inherit;
  height: 150px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
  }
}

.half-width2left {
  width: 65%;
  float: left;
  height: 150px;
  overflow: hidden;
}

.half-width2right {
  width: 35%;
  float: left;
  height: 150px;
  overflow: hidden;
}

.grey-bg {

  height: 150px;
}

.filtree-half {
  width: calc(100%);
  float: left;
  height: 150px;
  background: transparent;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 5px;
}


}


input.formatted{
  border: 1px solid #b7b7b7;
  width: 100px;
  margin: 10px 0;


&.attention{
    border: 2px solid #f05d5b;
}

}


span.attention{
  color: #f05d5b;
}



ul.no-left-pad{
  padding-left: 0;
}


.mt10{
  margin-top: 10px;
}


.small-message{
    color: #f05d5b;
    font-size: .9rem;
    font-style: italic;
}


.smblk{
    color: #000;
    font-size: .9rem;
}



.fw{
      width: 100%;
      margin-top: 20px;

}




.removeClose{
    height: 30px;
    border-radius: 15px;


}


.removeClose > div{
margin-top: -3px;

    
}


.custom-tip-button{
  padding: 4px;
  border-radius: 4px;
    width: 68%;
}


.customtip{
  width: 100%;


&.activated{
  width: 30%
}

}


.full-height-slide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.yellow-bg{
      height: 100%;
}


.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 14px;
  left: 30%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    left: 5%;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 14px;
  right: 30%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    right: 5%;
  }
}

.is-fullheight{
  padding: 20px 0 0 0;
  overflow: hidden;


  &.no-top-pad{
    padding-top: 0;
  }
}



.removeClose{
  background-color: transparent!important;
  svg{
    width: 9px;
    margin: 7.5px auto 10px;
  }
}



.removeClose:hover{
    // background-color: #f05d5b;
  svg{
.cls-1closeModalRed {
    fill: #ffffff !important;
}
  }
}

.customer-info,
.address-info{
font-size: 1.2rem
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}



form hr{
      margin-top: .75rem;
    margin-bottom: .75rem;

}

.drawer-on-mobile.expanded{
    height: 100%;
    overflow: scroll;
    padding-bottom: 160px;
}

// @
// padding: 5px 5px;

.tipButton.customtip,
.tipButton.quarter {

    font-size: 12px;
}


@media only screen and (max-width: 1280px) {
.tipButton.quarter {
    margin-bottom: 5px;
    // width: calc(25% - 3.5px);


    width: calc(33% - 2px);
    padding: 5px 5px !important;
    font-size: 12px;
}
}


.mt8{
margin-top: 8px;
}


.mb20{
  margin-bottom: 20px;
}


.pt20{
  padding: 20px 0;
}

.no-bot-pad{
  padding-bottom: 0;
}

.cart-empty-class{
  background-color: #f3f3f3;
    padding: 20px 0;
    color: #a6a4a4;
    font-style: italic;
    font-size: 14px;
    border-radius: 5px;
}

</style>


