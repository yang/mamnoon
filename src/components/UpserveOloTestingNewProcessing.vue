<template>
  <div :key="componentKey" v-if="!$store.state.reorderTrue" id="upserveolo" :class='{smallerBoxes: currentItem && returnCorrect }'>
      <!-- <div id="upserveolo"> -->
    <section>

<div v-if="editInfoVisible === true" class="editInfoModalBg">
</div>
<div v-if="editInfoVisible === true" class="editInfoModal">
        <div class="container online-menu order-modal-width full-width-modal-header">
          <div @click="editInfoVisible = false" class="close closeModal">
            <CloseModal />
          </div>
          <h4>edit info</h4>
        </div>






<div class="cIEdit">



      <div class="address" v-if="!updateCI">
<b>guest info:</b> <br />
<template v-if="user && user.user && user.user.deliveryAddress">
{{user.user.deliveryAddress.first_name}}&nbsp;{{user.user.deliveryAddress.last_name}}
<br>
{{user.user.deliveryAddress.phone}}<br>
</template>
<br>
<button class="sm-button" @click="updateCI = true">update guest info</button>
<br>
</div>



<form class="infoForm" @submit.prevent="checkFormCustomerInfo" v-if="updateCI && user && user.user && user.user.deliveryAddress">

<b>guest info:</b>
 <br>
  <p>
    <input
      id="name"
      v-model="user.user.deliveryAddress.name"
      type="text"
      name="name"
      placeholder="add name"
      class="add-name-field"
    >
    <br>
    <input
      id="phone"
      v-model="user.user.deliveryAddress.phone"
      type="text"
      name="phone"
      placeholder="(555) 555-5555"
      class="add-phone-field"
    >
    <br>




    &nbsp;&nbsp;&nbsp;
    <br>
    <button class="sm-button add-delivery-address-button" type="submit" value="Submit">
   submit
      </button>
<button class="sm-button" v-if="updateCI" @click="updateCI = false">cancel</button>
  </p>
</form>



</div>
<div class="billingEdit">
      <div class="address" v-if="!updateBilling">
<b>billing info:</b> <br />
<template v-if="user && user.user && user.user.billingAddress">
{{user.user.billingAddress.name}}<br>
{{user.user.billingAddress.addressLine1}}<br>
{{user.user.billingAddress.addressLine2}}<br>
{{user.user.billingAddress.city}}&nbsp;{{user.user.billingAddress.state}}&nbsp;{{user.user.billingAddress.zip}}
</template>
<br><br>
<button class="sm-button" @click="updateBilling = true">update billing info</button>
<br><br>
</div>


<form class="infoForm" @submit.prevent="checkFormBilling" v-if="updateBilling && user && user.user && user.user.billingAddress">
<b>street address:</b>
 <br />

  <p>
    <input
      id="nameBilling"
      v-model="user.user.billingAddress.name"
      type="text"
      name="name"
      placeholder="add name"
      class="add-name-field"
    >
    <br>
  
    <input
      id="addressLine1Billing"
      v-model="user.user.billingAddress.addressLine1"
      type="text"
      name="addressLine1"
      placeholder="add address line 1"
      class="add-addressLine1-field"
    >
    <br>
        <input
      id="addressLine2Billing"
      v-model="user.user.billingAddress.addressLine2"
      type="text"
      name="addressLine2"
      placeholder="add address line 2"
      class="add-addressLine2-field"
    >
    <br>
    <input
      id="cityBilling"
      v-model="user.user.billingAddress.city"
      type="text"
      name="city"
      placeholder="add city"
      class="add-city-field"
    >
    <br>
      <input
      id="stateBilling"
      v-model="user.user.billingAddress.state"
      type="text"
      name="state"
      placeholder="add state"
      class="add-state-field"
    >
    <br>
      <input
      id="zipBilling"
      v-model="user.user.billingAddress.zip"
      type="text"
      name="zip"
      placeholder="add zip"
      class="add-zip-field"
    >
<br>

    &nbsp;&nbsp;&nbsp;
<br>
<button class="sm-button add-billing-address-button" type="submit" value="Submit">
   submit
      </button>
<button class="sm-button" v-if="updateBilling" @click="updateBilling = false">cancel</button>
  </p>
</form>

</div>

  </div>
<OrderConfirmationModal :orderConfirmationModal="orderConfirmationModal" :orderCMR="orderCMR" />
<UnableToProcessModal :unableToProcessModal="unableToProcessModal" :currentOrder="currentOrder"/>




      <div v-if="modalOpen" class="order-modal">
        <!-- 1111111111111111 -->
        <div class="container modal-body order-modal-width order-modal-body bottomCurves" style="padding:0;">
          <div @click="closeModal()" class="close closeModal redXCircle" style="z-index:100;position: absolute;top: 11px;right: 11px;">
            <CloseModal />
          </div>
   <!-- comment -->
      <!-- comment -->
         <!-- comment -->
            <!-- comment -->
               <!-- comment -->
               <div style="overflow-y: scroll;">

        



<ModalImagePanel :currentItem="currentItem" />



<div class="scrollItems">
            <p class="item-description-p" :class="{noTopMarge: true === true}">
   
    <b>{{currentItem.name.toLowerCase()}}&nbsp;<template v-if="packageObjectMaximum !== null">({{ packageObjectMaximum}}&nbsp;remain)</template></b>



                <br>
                     <!-- </template> -->
                     <!-- {{currentItem.description}} -->





    <div style="overflow:hidden;font-size: 12px;" v-html="currentItem.description"></div>                                   
                     </p>
                    <hr />
          <template v-if="currentItem.modifier_group_ids">
          <div v-if="currentItem.modifier_group_ids.length >= 1">
        <h4 v-if="currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Street Combo'" class="text-left">options</h4>
            <h4 v-else class="text-left" style="font-size:16px;">add ons</h4>

  


            <div v-for="(modifieritem,i) in currentItem.modifier_group_ids" :key="'A'+ i">
              <div v-for="(modifier,i) in modifierGroups" :key="'B'+ i">
                <template v-if="modifieritem === modifier.id">
                  <div class="displayInlineBlock">
                <template v-if="currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Lunch Combo Special' || currentItem.name === `Valentine's Day Kit For Two`">
                    <div class="optionHeader">{{modifier.name.replace(" : choose 1", "")}} (select one)</div>
                  </template>


                  <div class="fw">
                  <div class="option-choices row row-eq-height">
                                              <!-- <div v-if="modifier.name === 'Promotions'">{{modifier.name}}</div> -->
                                              <template v-for="(mod,i) in modifierItems">
                                                <!-- <template v-for="(mod,i) in modifierItems" :key="'C'+ i"> -->
                                                <template v-for="(m,i) in modifier.modifier_ids">
                                                    <!-- <div v-for="(m,i) in modifier.modifier_ids" :key="'D'+ i"> -->
                                                  <template v-if="currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Lunch Combo Special' || currentItem.name === `Valentine's Day Kit For Two`">
                                                 
                                                 
                                               <!--  <div v-if="m === mod.id && mod.name !== 'None'"-->
                                                  <div v-if="m === mod.id" class="box" @click="selectedOption(m, modifier, mod, modifieritem)" :class="{selected: currentModifiers.findIndex(p => p.option === m) > -1, fifth: currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Lunch Combo Special' || currentItem.name === `Valentine's Day Kit For Two` }">
 
<!-- option select inner 2 -->
                <OptionSelectInner2 :currentItem="currentItem" :mod="mod" :upserveList="upserveList" :modifier="modifier" />


                                                  </div>
                                                  </template>
                                                <template v-else>



<div v-if="m === mod.id && mod.id !== '7d6b8ea8-4bc7-4716-b8f8-44b5d5184f79'" class="box normal" :id="'toggle-' + mod.id" @click="toggleAddOn(mod,modifieritem)" :class="{selected: currentModifiers.findIndex(p => p.option === m) > -1,biggerWidth: packageObjectMaximum !== null }">
<!-- option select inner 3 -->
<OptionSelectInner3 @click="toggleAddOn(mod,modifieritem)" :currentItem="currentItem" :upserveList="upserveList" :mod="mod" :modifier="modifier" :m="m" :packageObjectMaximum="packageObjectMaximum" />


</div>

                                    
                                                </template>
                                                </template>
                                              </template> 
<!-- end container -->
</div>
         </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          </template>
            <textarea 
            type="text"
            placeholder="special instructions"
            v-model="textdescription"
            style="margin-top: 10px;"
            />
          
    </div>
          <!-- <hr /> -->
   <!-- comment -->
      <!-- comment -->
         <!-- comment -->

      </div>
        </div>
<div class="orderModalFooter" v-if="oloAvailable">
<hr/>


          <div class="add-to-order-footer" v-if="oloAvailable">
            item total: <b>${{ formatExtraZero(computedAddition * currentItemQuantity) }}</b>
          </div>
         <div class="add-to-order-footer">
          <button class="order-confirm-button" v-if="currentItemQuantity > 1" @click="decrementCurrentItem()">-</button>
          <button class="order-confirm-button disabled" v-else disabled>-</button>
          &nbsp;&nbsp;
          <span id="value">{{currentItemQuantity}}</span>&nbsp;&nbsp;


<template v-if="packageObjectMaximum !== null">




<template v-if="currentItemQuantity < packageObjectMaximum">
          <button style="order-confirm-button"@click="incrementCurrentItem()">+</button>
</template>
<template v-else>
          <button disabled>+</button>
</template>

</template>
<template v-else>


<button class="order-confirm-button" @click="incrementCurrentItem()">+</button>

</template>


                <template v-if="currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Lunch Combo Special' || currentItem.name === `Valentine's Day Kit For Two`">
                    <template v-if="allOptionsSelected">
                      <button
                      v-if="oloAvailable"
                      class="float-right add-to-order-button"
                      @click="addToOrder(currentItem,packageOrderDate)"
                      >add to order  {{packageOrderDate}}</button>
                    </template>
                    <template v-else>
                      <button
                      v-if="oloAvailable"
                      class="float-right add-to-order-button"
                      disabled>select 1 option from each</button>
                    </template>
                </template>
                <template v-else>
                  <button
                  v-if="oloAvailable"
                    class="add-to-order-button"
                    @click="addToOrder(currentItem,packageOrderDate)"
                  >add to order</button>
                </template>
          </div>
</div>
</div>
                <!-- 11111111111111111111 -->



<!--end??-->
<!--end??-->
<!--end??-->
<!--end??-->







<!--end??-->
<!--end??-->
<!--end??-->

      <div v-if="modal2Open" class="order-modal">
        <!-- 222222222222 -->
        <div class="container modal-body order-modal-width order-modal-body bottomCurves" style="padding:0;">
          <div @click="closeModal()" class="close closeModal redXCircle" style="z-index:100;position: absolute;top: 11px;right: 11px;">
            <CloseModal />
          </div>
   <!-- comment -->
      <!-- comment -->
         <!-- comment -->
            <!-- comment -->
               <!-- comment -->
               <div style="overflow-y: scroll;">

        <div class="container online-menu order-modal-width topCurves orderModalHeader" style="margin: 0;max-width: 100% !important;">

          <template v-if="currentItem.name !== 'mamnoon @ home' || currentItem.name !== 'Street Combo' || currentItem.name !== 'Lunch Combo Special'|| currentItem.name === `Valentine's Day Kit For Two`">
          <div
            class="item-image-container topCurves"
            v-if="currentItem.images"
            :style="{'background-image': currentItem.images.online_ordering_menu.main}"
          >
          
<div v-if="imageDimensions(currentItem.images.online_ordering_menu.main)>1">
    <img :src="currentItem.images.online_ordering_menu.main" style="width:100%" />
</div>
<div v-else>
    <img :src="currentItem.images.online_ordering_menu.main" style="width:100%" />
  </div>
      </div>
          <div class="item-image-container" v-else style="height: 70px;background: #ffffff;">
      
            </div>
          </template>
      </div>
<div class="scrollItems">

<!-- <pre>
{{currentItem.item_object}}
</pre> -->

<!-- {{currentItem.item_object.modifier_group_ids}} -->

            <p class="item-description-p" :class="{noTopMarge: true === true}">
             <!--<pre>{{currentItem}}</pre>-->
                  <!-- <pre>{{currentItem.item_object.modifier_group_ids}}</pre> -->
                            <!-- <template v-if="currentItem.name === 'mamnoon @ home'"> -->
                   <!-- <b>{{currentItem.name.toLowerCase().replace(" pickup","").replace(" to go only", "")}}</b>  -->
                       <b>{{currentItem.name.toLowerCase()}}&nbsp;<template v-if="packageObjectMaximum !== null">({{packageObjectMaximum}} remain)</template></b>
                     <b style="float:right;">${{ formatPrice(currentItem.price_cents) }}</b><br>
                     <!-- </template> -->
                     <!-- {{currentItem.description}} -->

    <div style="overflow:hidden;font-size: 12px;" v-html="currentItem.description"></div>                                   
                     </p>
                    <hr />
          <template v-if="currentItem.modifier_group_ids">
          <div v-if="currentItem.modifier_group_ids.length >= 1">
        <h4 v-if="currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Street Combo'" class="text-left">options</h4>
            <h4 v-else class="text-left" style="font-size:16px;">add ons</h4>
            <div v-for="(modifieritem,i) in currentItem.modifier_group_ids" :key="'A'+ i">
              <div v-for="(modifier,i) in modifierGroups" :key="'B'+ i">
                <template v-if="modifieritem === modifier.id">
                  <div class="displayInlineBlock">
                <template v-if="currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Lunch Combo Special' || currentItem.name === `Valentine's Day Kit For Two`">
                    <div class="optionHeader">{{modifier.name.replace(" : choose 1", "")}} (select one)</div>
                  </template>



                  <div class="fw">


                  <div class="option-choices row row-eq-height">
                                              <!-- <div v-if="modifier.name === 'Promotions'">{{modifier.name}}</div> -->
                                              <template v-for="(mod,i) in modifierItems">
                                           <!-- <template v-for="(mod,i) in modifierItems" :key="'C'+ i"> -->
                                                <template v-for="(m,i) in modifier.modifier_ids">
                                                    <!-- <div v-for="(m,i) in modifier.modifier_ids" :key="'D'+ i"> -->
                                                  <template v-if="currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Lunch Combo Special'|| currentItem.name === `Valentine's Day Kit For Two`">

              <!--<div v-if="m === mod.id && mod.name !== 'None'"-->
              <div v-if="m === mod.id" class="box" @click="selectedOption(m, modifier, mod, modifieritem)" :class="{selected: currentModifiers.findIndex(p => p.option === m) > -1, fifth: currentItem.name === 'mamnoon @ home' || currentItem.name === 'Street Combo' || currentItem.name === 'Lunch Combo Special' || currentItem.name === `Valentine's Day Kit For Two`}">
                             <!-- option select inner 1      -->


                             <!-- {{currentItem}} -->

                             <!-- {{mod}} -->

                             <!-- {{upserveList}} -->

                            <!-- dddddd       
                            
                                             -->
          <OptionSelectInner :currentItem="currentItem" :mod="mod" :upserveList="upserveList" />
                                                   
                                          




                                                  </div>
                                                  </template>
                                                <template v-else>
                                                    



                                                <!--<div v-if="m === mod.id && mod.id !== '7d6b8ea8-4bc7-4716-b8f8-44b5d5184f79'" class="box normal" :id="'toggle-' + mod.id" @click="toggleAddOn(mod,modifieritem)" :class="{selected: currentModifiers.findIndex(p => p.option === m) > -1 }">-->
      <div v-if="m === mod.id && mod.id !== '7d6b8ea8-4bc7-4716-b8f8-44b5d5184f79'" class="box normal selected" :id="'toggle-' + mod.id" @click="toggleAddOn(mod,modifieritem)" :class="{'selected selectedAddOn': currentlyContains(currentItem.modifiers,m,mod.id) }">
                                      <div class="box-inner">
       
                                                                          <div class="pad-10 leftmodbuttons">
                                                                            <!-- {{mod.id}} -->
                                                                          <span class="title-bolder">{{mod.name.replace('add ','')}} <span class="italicize" v-if="mod.price != 0.0"><span class="thin">+</span>${{mod.price}}</span></span>
                                                                          <br />
                                                                          </div>
                                                                          <div v-if="modifier.name.includes(': choose 1')">
                                                <div v-for="(piece,i) in upserveList" :key="'E'+ i">
                                                                                    <div v-if="piece.name.toLowerCase() === mod.name"><div class="pad-10"><p>{{piece.description}}</p></div></div>
                                                                                  </div>
                                                                                </div>
                                                    </div>
                                                  </div>
                                                </template>
                                                </template>
                                              </template> 
<!-- end container -->
</div>
         </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          </template>
            <textarea 
            type="text"
            placeholder="special instructions"
            v-model="textdescription"
            style="margin-top: 10px;"
            />
          
    </div>
          <!-- <hr /> -->
   <!-- comment -->
      <!-- comment -->
         <!-- comment -->
            <!-- comment -->
               <!-- comment -->
      </div>
        </div>
<div class="orderModalFooter">
<hr/>
          <div class="add-to-order-footer">
            item total: <b>${{ formatExtraZero(computedAddition * currentItemQuantity) }}</b>
          </div>
         <div class="add-to-order-footer">
          <button class="order-confirm-button" v-if="currentItemQuantity > 1" @click="decrementCurrentItem()">-</button>
          <button class="order-confirm-button disabled" v-else disabled>-</button>
          &nbsp;&nbsp;
          <span id="value">{{currentItemQuantity}}</span>&nbsp;&nbsp;
          <button class="order-confirm-button" @click="incrementCurrentItem()">+</button>
                <template v-if="currentItem.item_object.name === 'mamnoon @ home' || currentItem.item_object.name === 'Street Combo' || currentItem.item_object.name === 'Lunch Combo Special' || currentItem.item_object.name === `Valentine's Day Kit For Two`">
                    <template v-if="allOptionsSelected">
                      <button
                      class="float-right add-to-order-button"
                      @click="updateOrderItem(currentItem)"
                      >update</button>
                    </template>
                    <template v-else>
                      <button
                      class="float-right add-to-order-button"
                      disabled>select 1 option from each</button>
                    </template>
                </template>
                <template v-else>
                  <button
                    class="float-right add-to-order-button"
                    @click="updateOrderItem(currentItem)"
                  >update</button>
                </template>
          </div>
</div>
</div>
                <!-- 222222222222 -->



<!--end??-->
<!--end??-->
<!--end??-->
<!--end??-->
<!--end??-->
<!--end??-->
<!--end??-->
<!--end??-->
<!--end??-->








































      <div class="container pt20 no-bot-pad">
        <div class="row no-lr-margin">
          <div class="col-md-12 grey-text">
             <template v-if="openDays">
         <span v-if="currentRestaurantHours !== ''">{{title.toLowerCase()}}, {{openDays[0] }}-{{openDays[openDays.length-1]}}, <span v-for="(time,index) in currentRestaurantHours.information.open_time_range" :key="'F'+ index"><span v-if="index === 1">,</span>&nbsp;&nbsp;{{time.time_slot.open | formatAmPmFirst}}-{{time.time_slot.close | formatAmPm}}</span></span>
         </template><br>
         <span v-if="dates_additional_information">{{dates_additional_information}}</span>
         <br v-if="dates_additional_information">
    <span v-if="this.title === 'Mamnoon'"><a class="weblink" href="https://mamnoonrestaurant.com/" target="_blank">mamnoon's website</a></span>
 <span v-if="this.title === 'Mamnoon Street'"><a class="weblink" href="https://mamnoonstreet.com/" target="_blank">mamnoon street's website</a></span>

        </div>
      </div>
      </div>
      <div class="container pt20">
        <div class="row no-lr-margin">
<div class="col-md-12 col-lg-8">
      <div class="container no-pad"> 
      <h4 class="text-left red">full menu</h4>



    <div style="margin-top: 20px;">
      <p>this location is on capitol hill, <span style="text-decoration: underline;">not South Lake Union</span></p>
      This page is for pickup orders only. For delivery, please visit 
 <template v-if="this.title === 'Mamnoon'">
       <a target="_blank" :href="'https://www.doordash.com/store/mamnoon-seattle-37814/'">Doordash.</a>
  </template>

 <template v-if="this.title === 'Mamnoon Street'">
       <a target="_blank" :href="'https://www.doordash.com/store/mamnoon-street-seattle-89822/'">Doordash.</a>
  </template>



    </div>


<template v-if="reOrder && $store.state.storeCurrentOrder && reOrder.id && $store.state.storeCurrentOrder.id">
<div class="order-modal"> 
        <div class="container online-menu order-modal-width" style="padding: 20px 0 15px !important; margin-top: 24px;">
          <div @click="emptyReOrderObject()" class="close closeModal">
            <CloseModalMed />
          </div>
          <h4>order again</h4>
        </div>
            <div class="container modal-body order-modal-width order-modal-body bottomCurves">
<div class=""> 
<div class="block mb20" v-for="item in reOrder.charges.items" v-if="item.reorder !== true">
<div class="yellow-bg-test" >
  <div class="half-width2left">
        <div class="content-box">
        <div class="showBox" v-if="item.images" v-bind:style="{ backgroundImage: 'url(' + item.images.online_ordering_menu.main + ')' }"></div>
      <!-- {{item}} -->
      <div class="name">{{item.quantity}} x {{item.name}}</div>
      <!-- <div class="food-description">chickpeas, garlic, lemon, tahini (served with 4 pita)</div> -->
      <div class="food-price"> ${{item.price | showToFixed }} </div>

  <button class="add-to-order-button" @click="addToOrderFromReorder(item)">
add
</button>
      </div>
      </div>
      <div class="half-width2right">
        <div class="backgroundImage"  v-if="item.images" v-bind:style="{ backgroundImage: 'url(' + item.images.online_ordering_menu.main + ')' }"></div>
         <div class="backgroundImage" v-else v-bind:style="{ height: '140px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundColor: '#dddddd' }">     <NadiIconSmX style="height:140px;" /></div>
        </div>
        </div>
<hr />  
</div>
</div>
          <div class="add-to-order-footer">
 <button  style="margin-right: 10px;" class="add-to-order-button" @click="emptyReOrderObject()">cancel  </button>  &nbsp;&nbsp;
 <button class="add-to-order-button" style="margin-right: 10px;" @click="addToAllItemsToOrder(reOrder.charges.items)">
   <template v-if="reOrder.charges.items.length > 1"> 
   add everything to order
   </template>
    <template v-else> 
   add item to order
   </template>
   </button>&nbsp;&nbsp;
          </div>
</div>
</div>
</template>

       </div>


          <div v-if="oloAvailable" class="container no-lr-pad" style="margin-top: 16px;">
          <!--          <template v-if="valid">
          we are open
          </template>
          <template v-else>
          we are currently closed
          </template>-->
              <template v-if="valid">
              <div class="toggleLr">
                <div>
 <button class="oloButton" @click="preOrderToggle(true)" :class="{ selected: preOrderToggleState }">preorder</button> 
  
                  </div> 
                <div>
                  <button class="oloButton" v-if="!packageLink"  @click="preOrderToggle(false)" :class="{ selected: !preOrderToggleState }">get it now</button>
          
                  </div> 
              </div>
              </template>
              <template v-else>
              <div class="mb16"> 
       we are currently closed. now accepting preorders for future pickup.
              </div> 
              </template>
              <template v-if="valid">
                  <template v-if="preOrderToggleState">
                  <div class="leftDropdown">
                  <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
                  </div>
                  <div class="rightDropdown" v-if="selectedDate && selectedDate !== null">
                  <v-select v-if="rendered && !packageLink" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                  <v-select v-else :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" v-model="selectedTime" :selectable="x => x.time > Date.now()" ></v-select>

                 



                  </div>
                </template>
              </template>
              <template v-else>
                  <template>
                     <div class="leftDropdown">
                      <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select></div>
                      <div class="rightDropdown" v-if="selectedDate && selectedDate !== null">
                                   <v-select v-if="rendered && !packageLink" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                                   <v-select v-else :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" v-model="selectedTime" :selectable="x => x.time > Date.now()" ></v-select>
                    
                                    
                    
                      </div>
                  </template>
            </template>
</div>

    <!-- <div class="testPage">testpage, please use nadimama.com/mamnoon for an actual experience.</div> -->
 

<!--  
      <div class="container online-menu">
      <h4>order from the full menu</h4>
       </div> -->
      <!-- <div> -->
      <!-- </div> -->
      
          <template v-if="valid">
          <!-- we are openc  {{!preOrderToggleState}} -->
          </template>
          <template v-else>
          <!-- we are currently closed, so no food is available. please select a date and time in the future to see what is available -->
          </template>


<div class="stickyPosition"> 
<div class="relative"> 
<MoreInfo v-if="sliderNavVisible" :selectedDate="selectedDate" :selectedTime="selectedTime" :valid="valid" :preOrderToggleState="preOrderToggleState" :upserveSections="upserveSections" :upserveList="upserveList" :noFiltering="noFiltering" :nowDate="nowDate" :nowTime="nowTime" :futureDay="futureDay" :futureTime="futureTime" />
 

<SliderNav v-if="sliderNavVisible" :selectedDate="selectedDate" :selectedTime="selectedTime" :valid="valid" :preOrderToggleState="preOrderToggleState" :upserveSections="upserveSections" :noFiltering="noFiltering" :nowDate="nowDate" :nowTime="nowTime" :futureDay="futureDay" :futureTime="futureTime" />
</div> 
</div> 


<!-- // staff selection --> 
<!-- // staff selection --> 
<!-- // staff selection --> 
<!-- // staff selection --> 


<!--staff display group-->
 <template v-if="employeeCheckout && this.title === 'Mamnoon'">
                <div :id="trimmedName(itemStaff)" v-if="currentlyAvailable(selectedDate,selectedTime,itemStaff.name,itemStaff.timing_mask)" class="container menu-line-testing" :class="{hideIfExpired: hideIfExpired(itemStaff)}">
<div class="display-block row no-lr-margin">
                                                    <h2 class="menu-header"><template v-if="showScenarios">scenario 6 staff menu {{currentlyAvailable(selectedDate,selectedTime,itemStaff.name,itemStaff.timing_mask)}}</template>{{itemStaff.name.replace('- To Go', '').replace('To Go', '')}}</h2>
                                                </div>
                                        <div :data="'drawer' + itemStaff.id" class=" row no-lr-margin">
                                              <template v-for="(serve,index) in upserveListStaff" class="grey-bg">
                                            <div class="filtree-full-testing">
                                                                  <template class="inline-block">
            <div class="yellow-bg-test" @click="openModal(serve,itemStaff.timing_mask)"> 
<ItemContent :serve="serve" :orderHistoryList="orderHistoryList" :packages="packages" :notAvailableDayOf="notAvailableDayOf(serve)" />
                                                                        </div>
                                                                  </template>
                                            </div>
                                         </template>
                                      </div>
                                    </div>
</template>
<!-- staff display group-->
<!-- // staff selection --> 
<!-- // staff selection --> 
<!-- // staff selection --> 
<!-- // staff selection --> 















<!-- BEGINNING OF ORIGINAL -->
<!-- BEGINNING OF ORIGINAL -->
<!-- BEGINNING OF ORIGINAL -->
<!-- BEGINNING OF ORIGINAL -->

<!-- <h1>begin new filter for use when open</h1> -->
 <!-- beggin 00 -->

 <template v-if="valid && !preOrderToggleState">
          <template v-for="item in upserveSections">







  <!-- beggin 0 -->
  <template v-if="noFiltering && item.name !== 'featured item'">
    <!-- beggin 1 -->
      <!-- check if package section -->
        
    <div :id="trimmedName(item)" v-if="item.timing_mask && currentlyAvailable(nowDate,nowTime,item.name,item) || !item.timing_mask" class="container menu-line-testing" :class="{hideIfExpired: hideIfExpired(item)}">
                

             <div class="display-block row no-lr-margin">
              
                        <h2 class="menu-header"><template v-if="showScenarios">scenario 1 get it now landing page</template>{{item.name.replace('- To Go', '').replace('To Go', '')}}</h2>
                                          
                </div>
            <div :data="'drawer' + item.id" class="row no-lr-margin">
                <div class="filtree-full-testing" v-if="checkIfPackageAvailable(piece)" v-for="piece in item.item_ids" :key="piece">
              <template v-for="serve in upserveList" class="grey-bg">
                <template v-if="serve.id === piece" class="inline-block">
 
                    
                                                   <div class="yellow-bg-test" :class="{unavailable: notAvailableDayOf(serve), unavailable2: checkIfPackage(serve.id) === 'sold out'  }" @click="openModal(serve,item.timing_mask)"> 
<!--{{serve}}{{item.timing_mask}}-->
<ItemContent :serve="serve" :orderHistoryList="orderHistoryList" :packages="packages" :notAvailableDayOf="notAvailableDayOf(serve)" />



                  </div>
          </template>
        </template>
        
          </div>
        </div>
      </div>

      
          <!-- end check if package section -->

    
      <!-- end 1 -->


  </template>
  <!-- end 0 -->
</template>
</template>
<!-- end 00 -->

<!--// <h1>end new</h1>-->







<!-- <h1>begin new filter for use when open</h1> -->
 <!-- beggin 00 -->

 <template v-if="!valid">









<template v-for="item in upserveSections">
  <!-- beggin 0 -->
  <template v-if="noFiltering && item.name !== 'featured item'">
    <!-- beggin 1 -->








                             <div :id="trimmedName(item)" class="container menu-line-testing" :class="{hideIfExpired: hideIfExpired(item)}">
<div class="display-block row no-lr-margin">
                                                    <h2 class="menu-header"><template v-if="showScenarios"> 2 closed/no filtering</template>{{item.name.replace('- To Go', '').replace('To Go', '')}}</h2>
                                                </div>




                                        <div :data="'drawer' + item.id" class=" row no-lr-margin">
                                            <div class="filtree-full-testing" v-if="checkIfPackageAvailable(piece)" v-for="piece in item.item_ids" :key="piece">




                                              <template v-for="serve in upserveList" class="grey-bg">




                                                                  <template v-if="serve.id === piece" class="inline-block">
            <div class="yellow-bg-test" :class="{unavailable: notAvailableDayOf(serve), unavailable2: checkIfPackage(serve.id) === 'sold out'  }" @click="openModal(serve,item.timing_mask)"> 




<ItemContent :serve="serve" :orderHistoryList="orderHistoryList" :packages="packages" :notAvailableDayOf="notAvailableDayOf(serve)" />




                                                                                </div>
                                                                  </template>
                                                    </template>
                                            </div>
                                      </div>
                                    </div>

      <!-- end 1 -->
  </template>
<template v-else>



<!-- else -->
<!--{{selectedDate.dateformatted}}-->
<!--{{selectedDate.dateformatted}}-->



<template v-if="item.name !== 'featured item' && currentlyAvailable(selectedDate,selectedTime,item.name,item) || !item.timing_mask">






           <div :id="trimmedName(item)" class="container menu-line-testing" :class="{hideIfExpired: hideIfExpired(item)}">
            <!-- this is available at the started time -->
            

            
            
     <div class="display-block row no-lr-margin">
                  <h2 class="menu-header"><template v-if="showScenarios">scenario 3 closed, some filtering</template>{{item.name.replace('- To Go', '').replace('To Go', '')}}</h2>

              </div>
              <div :data="'drawer' + item.id" class=" row no-lr-margin">
                <div class="filtree-full-testing" v-if="checkIfPackageAvailable(piece)" v-for="piece in item.item_ids" :key="piece">
                    
                    <template v-for="serve in upserveList" class="grey-bg">
                      <template v-if="serve.id === piece" class="inline-block">
                                                  <div class="yellow-bg-test" :class="{unavailable: notAvailableDayOf(serve), unavailable2: checkIfPackage(serve.id) === 'sold out'  }" @click="openModal(serve,item.timing_mask)"> 
<!--{{serve}}{{item.timing_mask}}-->
<ItemContent :serve="serve" :orderHistoryList="orderHistoryList" :packages="packages" :notAvailableDayOf="notAvailableDayOf(serve)" />
                        </div>
                      </template>
                    </template>
                </div>
              </div>
              </div>

</template>

</template>
  <!-- end 0 -->
</template>
</template>











<!-- end 00 -->

<!--// <h1>end new</h1>-->





















 
<template v-if="preOrderToggleState">
            <template v-for="item in upserveSections">
 <!-- beggin 0 -->
    <template v-if="noFiltering && item.name !== 'featured item'">
                              <div :id="trimmedName(item)" class="container menu-line-testing" :class="{hideIfExpired: hideIfExpired(item)}">
          <div class="display-block row no-lr-margin">
            <h2 class="menu-header"><template v-if="showScenarios">scenario 4 preorder clicked, nothing selected</template>{{item.name.replace('- To Go', '').replace('To Go', '')}}</h2>
          </div>
          <div :data="'drawer' + item.id" class=" row no-lr-margin">
            <div class="filtree-full-testing" v-if="checkIfPackageAvailable(piece)" v-for="piece in item.item_ids" :key="piece">
            <template v-for="serve in upserveList" class="grey-bg">
            <template v-if="serve.id === piece" class="inline-block">
          <div class="yellow-bg-test" :class="{unavailable: notAvailableDayOf(serve), unavailable2: checkIfPackage(serve.id) === 'sold out'  }" @click="openModal(serve,item.timing_mask)"> 
<!--{{serve}}{{item.timing_mask}}-->
<!--{{serve}}-->

<ItemContent :serve="serve" :orderHistoryList="orderHistoryList" :packages="packages" :notAvailableDayOf="notAvailableDayOf(serve)" />
                                                                  </div>
                                                                  </template>
                                                                  </template>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                 

      </template>
      <template v-else>
<!--this one shouldnt show staff because staff has a timing mask-->
           <template v-if="item.timing_mask === null && item.name !== 'featured item'">
           <!-- no timing mask -->
              <div :id="trimmedName(item)" class="container menu-line-testing" :class="{hideIfExpired: hideIfExpired(item)}">
         <div class="display-block row no-lr-margin">
                  <h2 class="menu-header"><template v-if="showScenarios">scenario 5 preorder date and/or time selected {{item.timing_mask}}</template>{{item.name.replace('- To Go', '').replace('To Go', '')}}</h2>
              </div>
              <div :data="'drawer' + item.id" class=" row no-lr-margin">
                <div class="filtree-full-testing" v-if="checkIfPackageAvailable(piece)" v-for="piece in item.item_ids" :key="piece">
           
                    <template v-for="serve in upserveList" class="grey-bg">
                      <template v-if="serve.id === piece" class="inline-block">
          <div class="yellow-bg-test" :class="{unavailable: notAvailableDayOf(serve), unavailable2: checkIfPackage(serve.id) === 'sold out'  }" @click="openModal(serve,item.timing_mask)"> 
<!--{{serve}}{{item.timing_mask}}-->
<ItemContent :serve="serve" :orderHistoryList="orderHistoryList" :packages="packages" :notAvailableDayOf="notAvailableDayOf(serve)" />
                        </div>
                      </template>
                    </template>
               
                </div>
              </div>
              </div>

</template>
<template v-else>

<template v-if="item.name !== 'featured item' && currentlyAvailable2(item.timing_mask.start_time, item.timing_mask.end_time, item.timing_mask.rules, selectedDate, selectedTime)">

    <div :id="trimmedName(item)" class="container menu-line-testing" :class="{hideIfExpired: hideIfExpired(item)}">
                        <div class="display-block row no-lr-margin">
    <h2 class="menu-header"><template v-if="showScenarios">scenario 6 preorder {{currentlyAvailable(selectedDate,selectedTime,item.name,item.timing_mask)}} {{item.timing_mask}}</template>{{item.name.replace('- To Go', '').replace('To Go', '')}}</h2>

              </div>
              <div :data="'drawer' + item.id" class=" row no-lr-margin">
                <div class="filtree-full-testing" v-if="checkIfPackageAvailable(piece)" v-for="piece in item.item_ids" :key="piece">
                
                    <template v-for="serve in upserveList" class="grey-bg">
                      <template v-if="serve.id === piece" class="inline-block">
                        <div class="yellow-bg-test" :class="{unavailable: notAvailableDayOf(serve), unavailable2: checkIfPackage(serve.id) === 'sold out'  }" @click="openModal(serve,item.timing_mask)"> 
                          <ItemContent :serve="serve" :orderHistoryList="orderHistoryList" :packages="packages" :notAvailableDayOf="notAvailableDayOf(serve)" />
                        </div>
                      </template>
                    </template>
                </div>
              </div>
              </div>

</template>



</template>

  </template>


  </template>

<!-- END OF ORIGINAL -->
<!-- END OF ORIGINAL -->
<!-- END OF ORIGINAL -->
<!-- END OF ORIGINAL -->



</template>
          </div>

          <div class="col-sm-4 drawer-on-mobile" :class="{expanded: toggledDrawer}">

<div class="right-column" style="position: absolute !important;">
<button v-if="!toggledDrawer" @click="toggleDrawer()" class="toggle">
<!--<span><CartIcon /> {{cartItems}}</span>-->

<div class="bagIcon"><BagIcon /><div class="bagNumbers" v-if="itemsInCart(this.currentOrder.charges.items) >0">{{itemsInCart(this.currentOrder.charges.items)}}</div></div>




</button>

<div class="container mb6 hide-on-mob"> 

<div class="pad-bot-20 hide-on-desktop-2" @click="toggleDrawer()">
  <ExButton />
</div>

<div @click="panelShowChoose('yourOrder')" class="filehalf topPre" style="">
      <template v-if="!preOrderToggleState">


        your pick-up order from
         <h4 class="text-left red">{{title.toLowerCase()}}
           </h4>
  </template>
      <template v-else>
        your pick-up pre order from
          <h4 class="text-left red">{{title.toLowerCase()}}</h4>
  </template>
  </div>
  </div>


<!-- preorder edit here -->
<div v-if="panelShow !== 'customerInfo'" class="container text-center">

              <template v-if="valid">
              <div class="toggleLr hide-on-desktop" v-if="oloAvailable">
                <div>
                  <button v-if="!packageLink" class="oloButton" @click="preOrderToggle(false)" :class="{ selected: !preOrderToggleState }">get it now</button></div> 
                <div>
                  <button class="oloButton" @click="preOrderToggle(true)" :class="{ selected: preOrderToggleState }">preorder</button> 
                  </div> 
              </div>
              </template>
              <template v-else>
              <div class="mb16 if-mobile"> 
      we are currently closed. now accepting preorders for future pickup.
              </div> 
              </template>
  <div class="if-mobile">
              <template v-if="valid">
                  <template v-if="preOrderToggleState">
                  <div class="leftDropdown" style="width: 100%;padding: 0 0 10px 0;">
                  <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
                  </div>
                  <div class="rightDropdown" style="width: 100%;padding: 0 0 0px 0;" v-if="selectedDate && selectedDate !== null">
                               <v-select v-if="rendered && !packageLink" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                               <v-select v-else :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" v-model="selectedTime" :selectable="x => x.time > Date.now()" ></v-select>
                
                                    

                  </div>
                </template>
              </template>
              <template v-else>
                  <template>
                      <div class="leftDropdown">
                      <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select></div>
                      <div class="rightDropdown" v-if="selectedDate && selectedDate !== null">
                                   <v-select v-if="rendered && !packageLink" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                                   <v-select v-else :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" v-model="selectedTime" :selectable="x => x.time > Date.now()" ></v-select>
                     
                     
                     
                      </div>
                  </template>
            </template>

</div>
</div>

<!-- preorder edit here -->


<div v-if="currentOrder && panelShow === 'customerInfo'" class="container text-center">



<button v-if="panelShow === 'customerInfo'" @click="panelShowChoose('yourOrder')" class="edit-order-button"><span v-if="currentOrder.preorder === true">edit pre order</span><span v-else>edit order</span></button>

<template v-if="this.currentOrder.charges && this.currentOrder.charges.items.length > 0">
  <br>
</template>


<div style="display:none;">
<template v-if="valid">
<template v-if="preOrderToggleState">
  <div style="margin-top:15px;">
<v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
</div>
<div style="margin-top:15px;" v-if="selectedDate && selectedDate !== null">
             <v-select v-if="rendered && !packageLink" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
             <v-select v-else :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" v-model="selectedTime" :selectable="x => x.time > Date.now()" ></v-select>

            

</div>
</template>
</template>
  <template v-else>
      <template v-if="this.currentOrder.charges && this.currentOrder.charges.items.length > 0">
      <br>  
      <v-select v-if="rendered" :options="dropDownDays" label="dateData" placeholder="Select Day" v-model="selectedDate" :selectable="x => !x.closed"></v-select>
      <div style="margin-top:15px;" v-if="selectedDate && selectedDate !== null">
                   <v-select v-if="rendered && !packageLink" :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" :selectable="x => x.time > Date.now()" v-model="selectedTime"></v-select>
                   <v-select v-else :options="selectedDate.timeslots" label="timelabel" placeholder="Select Time" v-model="selectedTime" :selectable="x => x.time > Date.now()" ></v-select>
      
                
      </div>

</template>
</template>
</div>


</div>

<div v-if="panelShow === 'customerInfo'">
  <div class="container">
      <hr />
  </div>
            <div v-if="currentOrder" class="container  mt10">
  <h4 v-if="currentOrder.fulfillment_info.type === 'delivery'" class="address-info text-left mt10">address</h4>
<div v-if="currentOrder.fulfillment_info.type === 'delivery'">
<div class="small-message" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 === ''">please enter a valid delivery address</div>
</div>
              <div v-if="currentOrder.fulfillment_info.type === 'delivery'" class="mt10">
               
                <div class="">
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
                  </span>
                  <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.city"
                  >{{currentOrder.fulfillment_info.delivery_info.address.city}},</span>
                  <span v-if="currentOrder.fulfillment_info.delivery_info.address.zip_code">
                    {{currentOrder.fulfillment_info.delivery_info.address.zip_code}}
                    <br v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''" />
                  </span>

                  <span :class="{attention: attention}" v-if="currentOrder.fulfillment_info.delivery_info.address.address_line1 !== ''">floor/unit?</span>&nbsp;&nbsp;
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
                  <label class="smblk">special instructions:</label>
                  <br />
                  <textarea
                    type="text"
                    id="specialinstructions"
                    name="specialinstructions"
                    placeholder="eg, leave on doorstep"
                    v-model="currentOrder.fulfillment_info.instructions"
                  />

                     </div>
            <input style="width: auto;margin-right: 10px;transform: translateY(1px);" type="checkbox" id="cutlery" name="cutlery" value="cutlery" v-model="currentOrder.fulfillment_info.no_tableware">
  <label class="smblk" for="cutlery">please include plastic cutlery </label>
                  <br />

<h4 v-if="currentOrder.fulfillment_info.type === '' || currentOrder.fulfillment_info.type === 'pickup'" class="customer-info text-left mt10">guest info</h4>



                <label class="smblk" for="name">first name:</label>
                <br />



<!--              <input type="text" id="name" placeholder="name" v-model="user.user.deliveryAddress.name" v-if="user && user.user && user.user.deliveryAddress && user.user.deliveryAddress.name && user.user.deliveryAddress.name !== ''" style="margin-bottom: 10px;">-->
            <input
              type="text"
              id="name"
              name="name"
              placeholder="first name"
              @change="checkIfFirstNameValid(currentOrder.fulfillment_info.customer.first_name)"
              v-model="currentOrder.fulfillment_info.customer.first_name"
              />
                        <div class="small-message" v-if="firstNameErrorVisibleTf && !validFirstName(currentOrder.fulfillment_info.customer.first_name)">please enter a first name</div>
             <label class="smblk" for="name">last name:</label>
                <br />



<!--              <input type="text" id="name" placeholder="name" v-model="user.user.deliveryAddress.name" v-if="user && user.user && user.user.deliveryAddress && user.user.deliveryAddress.name && user.user.deliveryAddress.name !== ''" style="margin-bottom: 10px;">-->
            <input
              type="text"
              id="name"
              name="name"
              placeholder="last name"
              @change="checkIfLastNameValid(currentOrder.fulfillment_info.customer.last_name)"
              v-model="currentOrder.fulfillment_info.customer.last_name"
              />

                        <div class="small-message" v-if="lastNameErrorVisibleTf && !validLastName(currentOrder.fulfillment_info.customer.last_name)">please enter a last name</div>
               <label class="smblk" for="email">email:</label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  @change="emailErrorVisible(currentOrder.fulfillment_info.customer.email,currentOrder.fulfillment_info.customer.phone)"
                v-model="currentOrder.fulfillment_info.customer.email"
                />



<!--{{dnsCheck}}
{{dnsChecker}}-->
<div class="small-message" v-if="emailErrorVisibleTf && !validEmail(currentOrder.fulfillment_info.customer.email.trim())">invalid email format (ex: a@b.com, d@g.co.uk)</div>



               <label class="smblk" for="phone">phone:</label>
                <br />
                     <!--<div v-if="user && user.user && user.user.deliveryAddress && user.user.deliveryAddress.phone && user.user.deliveryAddress.phone !== ''" style="margin-bottom: 10px;">{{user.user.deliveryAddress.phone}}</div>-->
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  @change="checkIfPhoneValid(currentOrder.fulfillment_info.customer.phone)"
                  v-model="currentOrder.fulfillment_info.customer.phone"
                />

                  <!--// @change="phoneErrorVisible(currentOrder.fulfillment_info.customer.email,currentOrder.fulfillment_info.customer.phone)"-->
                <div class="small-message" v-if="phoneErrorVisibleTf && !validPhone(currentOrder.fulfillment_info.customer.phone)">please enter a valid phone number</div>

            <input style="width: auto;margin-right: 10px;transform: translateY(1px);margin-top:5px;display:none;" type="checkbox" id="sms" name="sms" value="sms" v-model="currentOrder.sms">
  <label class="smblk" for="sms" style="margin-top:5px;display:none;">enable SMS order updates </label>
<!-- billing info -->
          <h4 class="customer-info text-left mt10">billing info
          
<!--               <span class="edit-link" v-if="user && user.user"><div @click="editInfo()">&nbsp;(<span class="edit">edit</span>)</div></span>-->
          
          </h4>         
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

                <label class="smblk" for="name">name:</label>
                <br />
  
<!--   <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.name !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.name}}</div>-->
                <input
                  type="text"
                  id="name-billing"
                  name="name"
                  placeholder="name"
                  @change="checkIfFullNameValid(currentOrder.billing.billing_name)"
                  v-model="currentOrder.billing.billing_name"
                />
                                <div class="small-message" v-if="fullNameErrorVisibleTf && !validFullName(currentOrder.billing.billing_name)">please enter a valid full name</div>
<!--here-->
             <!--<div class="mt10" style="display:none;">
                                        <div class="googleValidate2">
                                          <GoogleValidate2
                                            class="pointer-all"
                                            :key="renderKey"
                                          />
                                        </div>
                                           <div class="updateAddress2">
                                          <button @click="refreshGoogle()"
                                          >update address</button>
                                        </div>
                            </div>-->
<!--here-->
           <div style="">
<div style="width: 100%;display: inline-block;">
                <label class="smblk" for="address">street address:</label>
                <br />
 <!--    <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.addressLine1 !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.addressLine1}}&nbsp;{{user.user.billingAddress.addressLine2}}</div>-->
                <input
                style="width:100%;"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="address"
                  @change="checkIfAddressValid(currentOrder.billing.billing_address)"
                  v-model="currentOrder.billing.billing_address"
                />

     </div>

<!--<div style="width: 20%;display: inline-block;">-->

    <!--   <label class="smblk" for="unit">unit:</label>
                <br />
   <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.addressLine1 !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.addressLine1}}&nbsp;{{user.user.billingAddress.addressLine2}}</div>-->
           <!--     <input
                  type="text"
                  id="unit"
                  name="unit"
                  placeholder="unit"
                  v-model="currentOrder.billing.billing_address_line2"
                />-->

<!--
<div class="small-message" v-if="addressErrorVisibleTf && !validAddress(currentOrder.billing.billing_address)">please enter a valid address</div>
         
             </div>    -->
             </div>
             
             
                <label class="smblk" for="city">city:</label>
                <br />
 <!--    <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.addressLine1 !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.addressLine1}}&nbsp;{{user.user.billingAddress.addressLine2}}</div>-->
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="city"
                  @change="checkIfCityValid(currentOrder.billing.billing_address_city)"
                  v-model="currentOrder.billing.billing_address_city"
                />
  
   <div class="small-message" v-if="cityErrorVisibleTf && !validCity(currentOrder.billing.billing_address_city)">
      please enter a valid city</div>
            <div style="">
<div style="width: 50%;display: inline-block;">
                <label class="smblk" for="state">state:</label>
                <br />
 <!--    <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.addressLine1 !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.addressLine1}}&nbsp;{{user.user.billingAddress.addressLine2}}</div>-->


<select class="selectState" @change="checkIfStateValid(currentOrder.billing.billing_address_state)" v-model="currentOrder.billing.billing_address_state">
	<option value=""></option>
  <option value="AL">AL</option>
	<option value="AK">AK</option>
	<option value="AR">AR</option>	
	<option value="AZ">AZ</option>
	<option value="CA">CA</option>
	<option value="CO">CO</option>
	<option value="CT">CT</option>
	<option value="DC">DC</option>
	<option value="DE">DE</option>
	<option value="FL">FL</option>
	<option value="GA">GA</option>
	<option value="HI">HI</option>
	<option value="IA">IA</option>	
	<option value="ID">ID</option>
	<option value="IL">IL</option>
	<option value="IN">IN</option>
	<option value="KS">KS</option>
	<option value="KY">KY</option>
	<option value="LA">LA</option>
	<option value="MA">MA</option>
	<option value="MD">MD</option>
	<option value="ME">ME</option>
	<option value="MI">MI</option>
	<option value="MN">MN</option>
	<option value="MO">MO</option>	
	<option value="MS">MS</option>
	<option value="MT">MT</option>
	<option value="NC">NC</option>	
	<option value="NE">NE</option>
	<option value="NH">NH</option>
	<option value="NJ">NJ</option>
	<option value="NM">NM</option>			
	<option value="NV">NV</option>
	<option value="NY">NY</option>
	<option value="ND">ND</option>
	<option value="OH">OH</option>
	<option value="OK">OK</option>
	<option value="OR">OR</option>
	<option value="PA">PA</option>
	<option value="RI">RI</option>
	<option value="SC">SC</option>
	<option value="SD">SD</option>
	<option value="TN">TN</option>
	<option value="TX">TX</option>
	<option value="UT">UT</option>
	<option value="VT">VT</option>
	<option value="VA">VA</option>
	<option value="WA">WA</option>
	<option value="WI">WI</option>	
	<option value="WV">WV</option>
	<option value="WY">WY</option>
</select>


</div>

                             
<div style="width: 50%;display: inline-block;">


                <label class="smblk" for="postal_code">zip code:</label>
                <br />
                    <!-- <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.zip !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.zip}}</div>-->
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  placeholder="zip code"
                  class="inputZip"
                  @change="checkIfPostalValid(currentOrder.billing.billing_postal_code)"
                  v-model="currentOrder.billing.billing_postal_code"
                />
            
            
            
            
</div>
                                <div class="small-message" v-if="postalErrorVisibleTf && !validPostal(currentOrder.billing.billing_postal_code)">please enter a valid zip code</div>


<div class="small-message" v-if="stateErrorVisibleTf && !validState(currentOrder.billing.billing_address_state)">please select a valid state</div>


            </div>
            
            
            
            
            
            
              </form>




            </div>
            </div>
<div class="container mt10">






<div v-if="this.title === 'Mamnoon'">
<div class="mb6" style="height:160px; width:100%; display:inline-block; overflow:hidden;">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.592120094785!2d-122.33530883409114!3d47.61462023625063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906acad96c413d%3A0xa59eabfc8c017e8b!2sMamnoon!5e0!3m2!1sen!2sus!4v1626129380040!5m2!1sen!2sus" width="100%" height="350" frameborder="0" style="position:relative; top:-70px; border:none;"></iframe>
</div>
</div>

<div v-if="this.title === 'Mamnoon Street'">
<div class="mb6" style="height:160px; width:100%; display:inline-block; overflow:hidden;">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10758.32452141347!2d-122.3386493!3d47.6148339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x352f82a23182d965!2sMamnoon%20Street!5e0!3m2!1sen!2sus!4v1626132059997!5m2!1sen!2sus" width="100%" height="350" frameborder="0" style="position:relative; top:-70px; border:none;"></iframe>

</div>
</div>


<div class="mb16" v-if="this.title === 'Mamnoon'">

<MapPin class="mr6" />

1508 Melrose Ave, Seattle, WA 98122
</div>

<div class="mb16" v-if="this.title === 'Mamnoon Street'">

<MapPin class="mr6" />

2020 6th Ave, Seattle, WA 98121
</div>


<div class="mb16">


<Clock :color="'#000000'" class="mr6" /> <span v-if="valid">open</span><span v-else>closed</span>
</div>

<div class="mb16">

    <span v-if="this.title === 'Mamnoon'"><Phone class="mr6" />&nbsp;&nbsp;<a class="weblink-black" href="tel:+12069069606" target="_blank">(206) 906-9606</a></span>
 <span v-if="this.title === 'Mamnoon Street'"><Phone class="mr6" />&nbsp;&nbsp;<a class="weblink-black" href="tel:+12063279121" target="_blank">(206) 327-9121</a></span>


  </div> 
            <!--      // begin of available conditional-->
  <template v-if="!oloAvailable">
<div class="text-center">
    <h4>online ordering is currently unavailable</h4>
  sorry for the inconvenience.

  <template v-if="this.title === 'Mamnoon'">
    <br>

          please use this link to complete your order:<br>
          <a href="https://app.upserve.com/s/mamnoon-llc-seattle">order here</a>

  </template>
  <template v-if="this.title === 'Mamnoon Street'">
    <br>
     please use this link to complete your order:<br>
   <a href="https://app.upserve.com/s/mamnoon-street-seattle"
            >order here</a
          >

  </template>







  </div>
  </template>
  <template v-else>


              <ul class="order-sidebar" v-if="panelShow === 'yourOrder'">
                <template v-if="currentOrder.charges">
                 

                <li v-for="order in currentOrder.charges.items" :key="order.cartId" class="smblk">
                    <button class="noStyleButton" @click="removeFromOrder(order)">
                        <!-- <CloseModalRedSm />   -->
                        <TrashCan />         
                  </button>

<div @click="openModal2(order)">
<OrderLineItem :order="order"  />
</div>
            </li>
                </template>
              </ul>





<!-- start panel -->
<!-- start panel -->
<!-- start panel -->
<template v-if="currentOrder.charges && currentOrder.charges.items.length > 0">

              <!-- <div class="mt10" v-if="total > 0"> -->
                <template v-if="panelShow === 'customerInfo'">
Tip the staff:
              <div class="mt10">
                <button id="noTip" class="tipButton quarter" style="display:none;" @click="setTip(0)"><b>no tip</b><br>(0)</button>&nbsp;
                <button
                  id="tipOption1"
                  class="tipButtons"
                  :class="{ disabled: currentOrder.tipSelected === 1 }"
                  @click="setTip(1)">
                  <b>18%</b>
                  <br>
                  (${{tipReturn(.18) | showToFixed }})  
                  </button>&nbsp;
                <button
                  id="tipOption2"
                  class="tipButtons"
                 :class="{ disabled: currentOrder.tipSelected === 2 }"
                  @click="setTip(2)">
                  <b>22%</b>
                  <br>
                  (${{tipReturn(.22) | showToFixed }})  
                  </button>&nbsp;
                <button
                  id="tipOption3"
                  class="tipButtons"
                  :class="{ disabled: currentOrder.tipSelected === 3 }"
                  @click="setTip(3)"><b>25%</b>
                  <br>
                  (${{tipReturn(.25) | showToFixed }})  
                  </button>&nbsp;
                <br>
               <button
                  id="customTip"
                  class="tipButtons custom"
                  :class="{activated: this.customTipVisible, disabled: currentOrder.tipSelected === 4 }"
                  @click="setTip(4)"
                >custom</button>
                &nbsp;
                <currency-input class="custom-tip-button" currency="USD" v-if="customTipVisible === true" v-model="currentAmountToAddCustom" />
              </div>
              <hr />
              </template>


<div style="margin-bottom: 20px;" v-if="panelShow === 'customerInfo'&& currentOrder.preorder === true && this.currentOrder.scheduled_time !== null">
scheduled time:<br><b>{{currentOrder.scheduled_time | formatDate}}</b><br>
<button class="schedule-later" style="margin-top:10px;margin-bottom: 20px;" @click="selectADifferentTime()">Select a different time</button>
</div>


<div style="margin-bottom: 20px;" v-if="panelShow === 'customerInfo'&& currentOrder.preorder === false">
scheduled time:<br><b>{{thirtyMinutesFromNow}}</b><br>
<span style="font-size: .9rem;font-style: italic;">(approximately 20 minutes from now)</span>
<button class="schedule-later" style="margin-top:10px;margin-bottom: 20px;" @click="changeToPreorderAndShowDropDown()">schedule a different pick-up time</button>


</div>



                <span v-if="panelShow === 'customerInfo'">subtotal: ${{currentOrder.charges.preTotal | showToFixed}}<!--<br>tax: ${{currentOrder.charges.taxes | showToFixed}}--></span>
              <span v-else>subtotal: ${{currentOrder.charges.preTotal | showToFixed}}<!--<br>tax: ${{currentOrder.charges.taxes | showToFixed}}--></span>

              <br />
  
            <!-- <div v-if="custom === true"> -->
            <!-- custom tip: ${{ Number(currentAmountToAdd).toFixed(2)/100  }} -->
            <!-- </div> -->
            <div v-if="panelShow === 'customerInfo'">
            <span v-if="this.tipSelected === 1">
              tip (18%): 
            </span>
            <span v-else-if="this.tipSelected === 2">
              tip (22%): 
            </span>
            <span v-else-if="this.tipSelected === 3">
              tip (25%): 
            </span>
            <span v-else-if="this.tipSelected === 4">
              tip: 
            </span>
            <span v-else>
              tip: 
            </span>

             ${{currentOrder.charges.tip.amount | showToFixed }}
            </div>
                       <span  v-if="panelShow === 'customerInfo'">tax: ${{currentOrder.charges.taxes | showToFixed}}</span>
              <hr v-if="panelShow === 'customerInfo'" />
              <b v-if="panelShow === 'customerInfo'">order total: ${{currentOrder.charges.total | showToFixed }}</b>
<!--<br v-if="panelShow === 'customerInfo'">-->
<br v-if="panelShow === 'customerInfo'">
 <!--<CreditSaveForm2 v-if="panelShow === 'customerInfo'" :emailAddress="$store.state.currentUserEmail" />-->
<br v-if="panelShow === 'customerInfo'"/>
</template>
<template v-else>
<div class="text-center cart-empty-class">
bag empty
</div>
</template>
<template v-if="panelShow === 'yourOrder'">
<button @click="panelShowChoose('customerInfo')" class="mt10 fw filehalf deactivated" disabled="disabled" style="width:100%;margin-top: 15px;pointer-events:none;display:none;" v-if="this.currentOrder.charges && this.currentOrder.charges.items.length === 0">guest info</button>
 <button style="width: 100%;font-size: 24px;padding-top: 3px;padding: 12px 10px;" @click="panelShowChoose('customerInfo')" class="checkout-button" v-else>
 <span class="float-left-checkout">checkout ({{itemsInCart(this.currentOrder.charges.items)}})</span> <span class="float-right-checkout">${{currentOrder.charges.total | showToFixed }}</span></button>
</template>
<template v-if="panelShow === 'customerInfo'">
<template v-if="giftCardPanel ===  false">

<template v-if="currentOrder.preorder === true">




<!-- hello -->




  <div class="small-message" v-if="selectedTime === null">please select a date and time at the top of this page</div>


  <div class="small-message" v-if="currentOrder.billing.billing_address_city === ''">please enter a billing city</div>

  <div class="small-message" v-if="currentOrder.billing.billing_address_state === ''">please select a billing state</div>



  <div class="small-message" v-if="currentOrder.charges.total === 0">please add some items to your cart</div>
  <!--<div class="small-message" v-if="currentOrder.fulfillment_info.customer.first_name === ''">please enter a guest name</div>-->
<template v-if="this.$store.state.loggedIn">

  <!--<div class="small-message" v-if="currentOrder.fulfillment_info.customer.email === '' || !validEmail(currentOrder.fulfillment_info.customer.email)">please enter a valid guest email address</div>-->









</template>
<template v-else>
  <!--<div class="small-message" v-if="currentOrder.fulfillment_info.customer.email === ''">please enter a guest email address</div>-->

</template>
 <!-- <div class="small-message" v-if="currentOrder.fulfillment_info.customer.phone === '' || !validPhone(currentOrder.fulfillment_info.customer.phone) ">please enter a valid guest phone number</div>
  <div class="small-message" v-if="currentOrder.billing.billing_name === ''">please enter a billing name</div>
  <div class="small-message" v-if="currentOrder.billing.billing_address === ''">please enter a billing address</div>-->
<!--  <div class="small-message" v-if="currentOrder.billing.billing_postal_code === ''">please enter a billing zip code</div>-->



<template v-if="this.$store.state.loggedIn && panelShow === 'customerInfo'">

<template v-if="currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone && currentOrder.fulfillment_info.customer.phone !== ''">


  <template v-if="$store.state.currentUserEmail">
<template v-if="1===1" v-for="savedCard in savedCards">

<template v-if="savedCard.primary ===  true">

   <button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== '' && validPostal(currentOrder.billing.billing_postal_code)" class="pay-button" :class='{disabled: !formsValidClass }' @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'primaryCard')">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
      </button>
        <button v-else class="pay-button" :class='{disabled: !formsValidClass }' style="margin-top:20px;" disabled>Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
      </button>





</template>


</template>

</template>
</template>
<template v-else>

  <template v-if="$store.state.currentUserEmail">
<template v-for="savedCard in savedCards">





<template v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== '' && validPostal(currentOrder.billing.billing_postal_code)">

<button v-if="savedCard.primary === true" class="pay-button disabled" style="margin-top:20px;" @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'primaryCard')">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button>
</template>
<template v-else>
<button v-if="savedCard.primary === true" class="pay-button disabled" style="margin-top:20px;" disabled>Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button>
</template>










</template>
</template>
</template>
</template>

<template v-if="this.$store.state.loggedIn">

        <button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== '' && validPostal(currentOrder.billing.billing_postal_code)" class="pay-button" style="margin-top:20px;" id="cip-pay-btn" @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'debit')">Credit/Debit Pay</button> 
            <button v-else class="pay-button disabled" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybuttoncreditauth" disabled>Credit/Debit Pay</button> 
 <!--@click="cippaybuttoncreditauth"-->






        <!-- <template v-if="employeeCheckout">
        <button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== '' && validPostal(currentOrder.billing.billing_postal_code)" class="pay-button" style="margin-top:20px;" @click="employeeCheckoutButton">Employee Checkout</button> 
            <button v-else class="pay-button disabled" style="margin-top:20px;" disabled>Employee Checkout</button> 
        </template> -->


</template>
<template v-else>

        <button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== '' && validPostal(currentOrder.billing.billing_postal_code)" class="pay-button" style="margin-top:20px;" id="cip-pay-btn" @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'debit')">Credit/Debit Pay</button> 
            <button v-else class="pay-button disabled" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybuttoncreditauth" disabled>Credit/Debit Pay</button> 



<!--@click="cippaybuttoncreditauth"-->




  <!-- <template v-if="employeeCheckout">
        <button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== '' && validPostal(currentOrder.billing.billing_postal_code)" class="pay-button" style="margin-top:20px;" @click="employeeCheckoutButton">Employee Checkout</button> 
            <button v-else class="pay-button disabled" style="margin-top:20px;" disabled>Employee Checkout</button>
    </template> -->


</template>
</template>
<template v-else>

  <div class="small-message" v-if="currentOrder.charges.total === 0">please add some items to your cart</div>
  <!--<div class="small-message" v-if="currentOrder.fulfillment_info.customer.first_name === ''">please enter a guest name</div>-->




  <div class="small-message" v-if="currentOrder.billing.billing_address_city === ''">please enter a billing city</div>

  <div class="small-message" v-if="currentOrder.billing.billing_address_state === ''">please select a billing state</div>



  <div class="small-message" v-if="currentOrder.charges.total === 0">please add some items to your cart</div>









<template v-if="this.$store.state.loggedIn && panelShow === 'customerInfo'">

<template v-if="currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''">


  <template v-if="$store.state.currentUserEmail">
<template v-for="savedCard in savedCards">


<template v-if="savedCard.primary">
<template v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" >
<button class="pay-button" :class='{disabled: !formsValidClass }' @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'primaryCard')">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button>
</template>
  <template v-else>
<button class="pay-button" :class='{disabled: !formsValidClass }' disabled>Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button>
</template>
</template>

</template>
</template>


</template>
<template v-else>


  <template v-if="$store.state.currentUserEmail">
<template v-for="savedCard in savedCards">

<button v-if="savedCard.primary ===  true" class="pay-button disabled" :class="{disabled: disabledButton}" @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'primaryCard')">Use Stored Card<br>({{savedCard.approvalData.maskedAccount}})
</button>
</template>

</template>
</template>


</template>






<template v-if="this.$store.state.loggedIn">


<button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="pay-button" style="margin-top:20px;" id="cip-pay-btn" @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'debit')">Credit/Debit Pay</button> 
<button v-else class="pay-button disabled" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybuttoncreditauth" disabled>Credit/Debit Pay</button> 

<!--@click="cippaybuttoncreditauth"-->



<!-- <template v-if="employeeCheckout">
<button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="pay-button" style="margin-top:20px;" @click="employeeCheckoutButton">Employee Checkout</button> 
<button v-else class="pay-button disabled" style="margin-top:20px;" disabled>Employee Checkout</button> 
</template> -->


</template>
<template v-else>
<!-- you are not logged in -->

<button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="pay-button" style="margin-top:20px;" id="cip-pay-btn" @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'debit')">Credit/Debit Pay</button> 
<button v-else class="pay-button disabled" style="margin-top:20px;" id="cip-pay-btn" @click="cippaybuttoncreditauth" disabled>Credit/Debit Pay</button> 
<!--@click="cippaybuttoncreditauth"-->


<!-- <template v-if="employeeCheckout">
<button v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''" class="pay-button" style="margin-top:20px;" @click="employeeCheckoutButton">Employee Checkout</button> 
<button v-else class="pay-buton disabled" style="margin-top:20px;" disabled>Employee Checkout</button> 
</template> -->


</template>









</template>
</template>

<template v-if="giftCardPanel ===  false">
  

      <!--////-->
      <template v-if="currentOrder.preorder === true">


     <!-- {{currentOrder.scheduled_time.toISOString()}} -->
     <!-- <br> -->
        <!-- {{currentOrder.scheduled_time.toISOString()}} -->
      <button 
      v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.scheduled_time !== null && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''"
      @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'giftCard')" id="cip-pay-btn" class="pay-button gift-card">Use Giftcard</button>


<!--      showGiftcard()-->
      <button 
      v-else id="cip-pay-btn" class="pay-button gift-card disabled" disabled>Use Giftcard</button>
      </template>
      <template v-else>
      <button 
      v-if="validState(currentOrder.billing.billing_address_state) && validPostal(currentOrder.billing.billing_postal_code) && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== '' && currentOrder.fulfillment_info.customer.first_name !== '' && currentOrder.fulfillment_info.customer.last_name !== '' && currentOrder.fulfillment_info.customer.email !== '' && currentOrder.fulfillment_info.customer.phone !== ''"
      @click="emailValidFromServer(currentOrder.fulfillment_info.customer.email, 'giftCard')" id="cip-pay-btn" class="pay-button gift-card">Use Giftcard</button>
      <button 
      v-else id="cip-pay-btn" class="pay-button gift-card disabled" disabled>Use Giftcard</button>

<!--      showGiftcard()-->
      </template>
      <!--////-->



</template>



<template v-if="giftCardPanel ===  true">
<template v-if="user && user.user && user.user.email">

<br>



  <input maxlength="16" @change="validGiftCard(cardNumberInput)" v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number">
    <div v-if="currentBalance < currentOrder.charges.total/100" class="small-message">insufficient funds</div>
<div v-if="validNumber === false" class="small-message">invalid giftcard number</div>


              <button class="mt10 fw pay-button gift-card" :class="{ disabled: disabledGiftCardButton }" style="margin-bottom: 20px;margin-top:10px;"
                v-if="currentBalance > currentOrder.charges.total/100 && validNumber && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="giftCardPreFlight()"
              >Pay With Giftcard</button>
              <button class="mt10 fw pay-button gift-card" style="margin-bottom: 20px;margin-top:10px;" 
               v-else disabled>Pay With Giftcard</button>
</template>
  <template v-else>
<br>



  <input maxlength="16" @change="validGiftCard(cardNumberInput)" v-model="cardNumberInput" style="margin-top: 20px;" class="giftcardinput" placeholder="enter your giftcard number">
    <div v-if="currentBalance < currentOrder.charges.total/100" class="small-message">insufficient funds</div>
<div v-if="validNumber === false" class="small-message">invalid giftcard number</div>


                <button class="mt0 fw pay-button gift-card" :class="{ disabled: disabledGiftCardButton }" style="margin-top:10px;margin-bottom: 20px;" 
                v-if="currentBalance > currentOrder.charges.total/100 && validNumber && currentOrder.charges.total > 0 && currentOrder.billing.billing_name !== '' && currentOrder.billing.billing_address !== '' && currentOrder.billing.billing_postal_code !== ''"
                id="cip-pay-btn"
                @click="giftCardPreFlight()"
              >Pay With Giftcard</button>
              <button class="mt0 fw pay-button gift-card" style="margin-bottom: 20px;margin-top:10px;" v-else disabled>Pay With Giftcard</button>
    </template>
</template>
<template v-if="giftCardPanel ===  true">
<br>
<u class="link-button" style="cursor: pointer;"@click="hideGiftCard()">
  <span style="text-decoration: none;">  
  use debit/credit instead
  </span>
  </u>
</template>
</template>
      <br />
      <br />


   <!--      // end of right col-->   
</template>
            <!--      // end of available conditional-->
            <!--      // end of available conditional-->




      <br />
  
      </div>
 </div>
<!--// end of right col-->
      </div>
      </div>
      <div>
      </div>
      </div>
      </section>
    <!--
<pre style="text-transform: none !important" v-if="this.title === 'Mamnoon'">{{this.$store.state.storeMamnoon}}</pre>
<pre style="text-transform: none !important" v-if="this.title === 'Mamnoon Street'">{{this.$store.state.storeStreet}}</pre>
-->
   <!--// ccc-->






  </div>

   



</template>

<script>

import vSelect from "vue-select";

import GoogleValidate from "@/components/GoogleValidate";
import GoogleValidate2 from "@/components/GoogleValidate2";
import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalMed from "@/components/svgIcons/CloseModalMed";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";

import Swiper from "@/components/Swiper";


import OrderConfirmationModal from "@/components/OrderConfirmationModal"

import UnableToProcessModal from "@/components/UnableToProcessModal"



import SavedCard from "@/components/SavedCard";
import CloseModalRedSm from "@/components/svgIcons/CloseModalRedSm";

import VueAspectRatio from "vue-aspect-ratio";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import NadiIconxx from "@/components/svgIcons/NadiIconxx";
import NadiIcon from "@/components/svgIcons/NadiIcon";
import NadiIcon70 from "@/components/svgIcons/NadiIcon70";
import NadiIconSm from "@/components/svgIcons/NadiIconSm";
import NadiIconSmX from "@/components/svgIcons/NadiIconSmX";
import NadiIconSmXSidebar from "@/components/svgIcons/NadiIconSmXSidebar";
import  MoreInfo from "@/components/MoreInfo";

import SliderNav from "@/components/SliderNav";

import moment from 'moment'
import tz from 'moment-timezone'

import swal from "vue-sweetalert2";
import CartIcon from "@/components/svgIcons/CartIcon";
import BagIcon from "@/components/svgIcons/BagIcon";

import CloseModalSm2 from "@/components/svgIcons/CloseModalSm2";


import TrashCan from "@/components/svgIcons/TrashCan";
import Phone from "@/components/svgIcons/Phone";
import Clock from "@/components/svgIcons/Clock";
import MapPin from "@/components/svgIcons/MapPin";
import ExButton from "@/components/svgIcons/ExButton";



import CreditSaveForm2 from "@/components/CreditSaveForm2";


import ItemContent from "@/components/ItemContent";

import OptionSelectInner from "@/components/OptionSelectInner";
import OptionSelectInner2 from "@/components/OptionSelectInner2"
import OptionSelectInner3 from "@/components/OptionSelectInner3"

import ModalImagePanel from "@/components/ModalImagePanel";


import OrderLineItem from "@/components/OrderLineItem";

export default {
      metaInfo: {
      name: 'UpserveOloTestingNewProcessing',
      title: 'order online',
      titleTemplate: '%s | nadi mama'
    },
  name: "UpserveOloTestingNewProcessing",
  props: ["data","emailAddress","oloEndpoint","menuEndpoint","title","userData"],
  components: {
    ModalImagePanel,
    OrderLineItem,
    ItemContent,
    OptionSelectInner3,
    OptionSelectInner2,
    OptionSelectInner,
    CreditSaveForm2,
    OrderConfirmationModal,
    CloseModalSm2,
      CloseModalMed,
    CloseModalRed,
    CloseModalSm,
    CloseModal,
    CloseModalRedSm,
    GoogleValidate,
        GoogleValidate2,
    
    VueAspectRatio,
    Next,
    Prev,
    NadiIcon,
        NadiIcon70,
    NadiIconxx,
    NadiIconSm,
    NadiIconSmX,
    NadiIconSmXSidebar,
    SavedCard,
    Swiper,
    SliderNav,
    MoreInfo,
    CartIcon,
    BagIcon,
    TrashCan,
    Phone,
    Clock,
    MapPin,
    ExButton,
    UnableToProcessModal
  },
  computed: {
    cartItems(){
if(this.title === "Mamnoon Street"){
      return this.$store.state.storeStreet.charges.items.length;
}
if(this.title === "Mamnoon"){
      return this.$store.state.storeMamnoon.charges.items.length;
}

    },
    returnCorrect(){
if(this.currentItem){
if(this.currentItem.name === "mamnoon @ home"|| this.currentItem.name === "Street Combo" || this.currentItem.name === 'Lunch Combo Special' || this.currentItem.name === `Valentine's Day Kit For Two`){
  return true
  }else{
    return false
  }
}else{
  return false
}
    },
computedAddition(){
  let addOn = 0
  this.currentItemModifierArray.forEach(function(x){
    addOn = addOn + x.price
  })
  let combo = addOn + this.currentItem.price_cents
  return combo/100

},
correctTipSelected(i){
return this.currentOrder.tipSelected === i
},
    customAmountAddition(){
      return this.currentAmountToAddCustom
    },
    googleAddress() {	
      return this.$store.state.googleAddress;	
    },

  },	
  watch: {
    // dnsCheck:{
    //   handler(val){


    //     this.dnsChecker = this.dnsCheck;


    //   }
    //   },


    rendered:{
      handler(val){

      let startdate = window.location.search.substring(1);

      var new_date = moment(startdate.substring(0,10), "YYYY-MM-DD").add(1,'days');

      var day = new_date.format('DD');
      var month = new_date.format('MM');
      var year = new_date.format('YYYY');




let correctDate = year + '-' + month + '-' + day;

if(window.location.search){
  // console.log(window.location.search);
this.preOrderToggle(true);
// console.log(moment(window.location.search.substring(1)).add(1,'days'));
// console.log(correctDate);
// console.log(this.dropDownDays[0].dateFormatted);


  // console.log(this.dropDownDays);

      let filteredSelection = this.dropDownDays.filter(function(x){
        return x.dateFormatted === correctDate;
      });

      // console.log(filteredSelection)
      this.selectedDate = this.dropDownDays[0];



  console.log(this.dropDownDays);


}else{

      let filteredSelection = this.dropDownDays.filter(function(x){
        return x.dateFormatted === correctDate;
      });
      // console.log(filteredSelection)

}

      }
      },
    reOrder:{
      handler(val){
// console.log('reorder changes')
// console.log(this.reOrder)

      }
      },
    orderHistory:{

      
      handler(val){
      let self = this;


    if(self.orderHistory && self.orderHistory.user){
      for(var order in self.orderHistory.user.slice().reverse()){
      for(var item in self.orderHistory.user[order].orderInfo.charges.items){
        if(!self.orderHistoryList.some(itemIndex => itemIndex.item === self.orderHistory.user[order].orderInfo.charges.items[item].item_id)){
          self.orderHistoryList.push({
            name: self.orderHistory.user[order].orderInfo.charges.items[item].name,
            item: self.orderHistory.user[order].orderInfo.charges.items[item].item_id,
            date: self.orderHistory.user[order].orderInfo.time_placed
        })
}}}}
}

    },
    valid:{
handler(val){
  // console.log('valid - changed')

if(this.valid){
this.filterForNow()
}
  
}
    },
    upserveSections:{
handler(val){
//   console.log('this.upserveSections')
// console.log(this.upserveSections)


this.computedSections = this.upserveSections

}
    },
        cardNumberInput:{
        handler(val){
   if(this.cardNumberInput){
        if(this.cardNumberInput.length === 16){
          // console.log('is 16')
          this.lookupBalance()
          // this.validNumber = true
        }else{
          // console.log('not 16')
        this.validNumber = false
        }


        }
        }
      },

email:{
handler(val){


if(this.emailAddress){
this.email = this.emailAddress;
}}
},      
    user:{
handler(val){

// console.log('updateing useing')
// console.log(this.currentOrder.fulfillment_info.customer.email)
// console.log(this.user.user.email)

if(this.currentOrder.fulfillment_info.customer && this.user.user){

  // console.log('this.user.user.email');
    // console.log(this.user.user.email);
this.currentOrder.fulfillment_info.customer.email = this.user.user.email;
this.currentOrder.fulfillment_info.customer.first_name = this.user.user.deliveryAddress.first_name;
}


          }, deep: true
    },
customAmountAddition: {
      handler(val){
        // if(this.currentOrder.charges){
this.currentOrder.charges.tip.amountOptions[4] = this.customAmountAddition
this.currentOrder.charges.tip.amount = this.customAmountAddition
      // }

      },
        deep: true
},  

 currentOrder: {
     handler(val){




// if(this.currentOrder.charges.total>20000){
//   alert(this.currentOrder.charges.total);
// }


      let preTotal = 0


      let curOr = this.currentOrder
      curOr.restaurant = this.title


      //  if(this.currentOrder.charges){

if(this.user){
  // console.log('this.user')
  // console.log(this.user)
  // console.log(this.user.user.email)
}

      for(var item of curOr.charges.items){

        let modifierAmount = 0

            for(var mod of item.modifiers){
              modifierAmount = modifierAmount + mod.price
            }
          // console.log(modifierAmount)
          let price = item.price + modifierAmount
          let itemAddition = item.quantity * price
          preTotal = preTotal + itemAddition
      }

      curOr.charges.preTotal = preTotal
      let currentTax = Number(preTotal) * Number(this.upserveTaxRate)


      // console.log('this.upserveTaxRate')
      // console.log(Number(this.upserveTaxRate))
      // console.log('preTotal')
      // console.log(Number(preTotal))
      // console.log('currentTax')
      // console.log(currentTax)



      curOr.charges.taxes = Math.round(currentTax)
      
      curOr.charges.tip.amountOptions[0] = curOr.charges.preTotal * 0
      curOr.charges.tip.amountOptions[1] = curOr.charges.preTotal * 0.18
      curOr.charges.tip.amountOptions[2] = curOr.charges.preTotal * 0.22
      curOr.charges.tip.amountOptions[3] = curOr.charges.preTotal * 0.25
      curOr.charges.tip.amountOptions[4] = this.customAmountAddition * 100
    
      curOr.charges.tip.amount = curOr.charges.tip.amountOptions[curOr.tipSelected]
      curOr.charges.total = curOr.charges.preTotal + curOr.charges.taxes + curOr.charges.tip.amount
      curOr.payments.payments[0].amount = curOr.charges.total
      curOr.currentAmountToAddCustom = this.customAmountAddition * 100
  //  }

    if(this.title === 'Mamnoon'){
        let storeMamnoon = curOr;
        this.$store.commit("upserveOrderCurrentOrderUpdateMamnoon", { storeMamnoon });	

        // let storeMamnoonTesting = curOr;
        // this.$store.commit("upserveOrderCurrentOrderUpdateMamnoonTesting", { storeMamnoonTesting });

    }else if(this.title === 'Mamnoon Street'){
        let storeStreet = curOr;
        this.$store.commit("upserveOrderCurrentOrderUpdateStreet", { storeStreet });	
    }
    // console.log(curOr)
    

let matches = this.currentOrder.charges.items.filter((obj) => {	
  // return obj.item_id === "6bed4f99-0b7f-4215-a7b4-fed7314e9c8d";
  return obj.item_id === "fe3f54dc-bc65-4842-97ab-06f0cfdea495";
});	


if(matches.length > 0 ){
// add the string
console.log(matches[0].name)

}else{
// dont add the string

}


this.formsValid(this.currentOrder.fulfillment_info.customer.email.trim(),this.currentOrder.fulfillment_info.customer.phone);

this.validGiftCard(this.cardNumberInput);

// this.lookupBalance();

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

if(this.selectedDate === null && this.selectedTime === null){
this.noFiltering = true
}else{
  this.noFiltering = false
}

let itemsToRemove = []

if(this.currentOrder.charges){
for (var value of this.currentOrder.charges.items) {

  if(value.timing_mask){

if(value.timing_mask.start_date && value.timing_mask.end_date){
let mappedFormattedDates = this.enumerateDaysBetweenDates(value.timing_mask.start_date, value.timing_mask.end_date).map(x=>moment(x).format('YYYY-MM-DD'));
console.log(mappedFormattedDates);

if(this.selectedDate && this.selectedDate.dateFormatted && !mappedFormattedDates.includes(moment(this.selectedDate.dateFormatted).format('YYYY-MM-DD'))){
     this.removeFromOrder(value)
    itemsToRemove.push(value)
}

}


  if(this.selectedDate && this.selectedDate.dayLabel && !value.timing_mask.rules.includes(this.selectedDate.dayLabel.substring(0,3).toLowerCase())){
    this.removeFromOrder(value)
    itemsToRemove.push(value)
  }
  }



  
}
}
let removalItems = []
if(itemsToRemove.length > 1){
removalItems = itemsToRemove.map(x => ' ' + x.name.slice(0, -1) )
}else{
removalItems = itemsToRemove.map(x => ' ' + x.name )
}

if(removalItems.length === 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
  removalItems = removalItems.toString().replace(',','');
}else if(removalItems.length > 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
}

if(itemsToRemove.length === 1){


        this.$swal({ 
           title: removalItems + ' is not available at the selected pick-up date and has been removed from your shopping bag'
          });

      // this.$swal({ 
      //  title: removalItems + ' is not available at the selected pick-up time. please select another time.'
      // });
// this.selectedTime = null;
}else if(itemsToRemove.length>1){


        this.$swal({ 
           title: removalItems + ' are not available at the selected pick-up date and have been removed from your shopping bag'
          });

        // this.$swal({ 
        //    title: removalItems + ' are not available at the selected pick-up time. please select another time.'
        //   });
// this.selectedTime = null
}

this.currentOrder.scheduled_time = null

this.selectedTime = null

},
selectedTime(){



if(this.selectedDate === null && this.selectedTime === null){
this.noFiltering = true
}else{
  this.noFiltering = false

// console.log(this.selectedDate)
// console.log(this.selectedTime)


}

let itemsToRemove = []

if(this.currentOrder.charges){
for (var value of this.currentOrder.charges.items) {
if(value.timing_mask){

console.log(this.selectedTime);

if(this.selectedTime && this.selectedTime.time && !this.isBetween(value.timing_mask.start_time,value.timing_mask.end_time,moment(this.selectedTime.time).format('HH:mm:ss'))){
// console.log(value + " not available")
// this.removeFromOrder(value)
itemsToRemove.push(value)
}}}
}
let removalItems = []
if(itemsToRemove.length > 1){
removalItems = itemsToRemove.map(x => ' ' + x.name.slice(0, -1) )
}else{
removalItems = itemsToRemove.map(x => ' ' + x.name )
}


if(removalItems.length === 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
  removalItems = removalItems.toString().replace(',','');
}else if(removalItems.length > 2){
  removalItems[removalItems.length - 1] = " and" + removalItems[removalItems.length - 1]
}

if(itemsToRemove.length === 1){




        // this.$swal({ 
        //    title: removalItems + ' is not available at the selected pick-up time and has been removed from your shopping bag'
        //   });


   if(value){
    if(value.timing_mask){
      if(value.timing_mask.start_time){
        if(value.timing_mask.end_time){
    this.$swal({ 
           title: removalItems + ' is not available at the selected pick-up time. please select another time between ' + value.timing_mask.start_time + ' and ' + value.timing_mask.end_time
          });
        }
          }
        }
      }

this.selectedTime = null


}else if(itemsToRemove.length>1){

  if(value){
    if(value.timing_mask){
      if(value.timing_mask.start_time){
        if(value.timing_mask.end_time){
        this.$swal({ 
           title: removalItems + ' are not available at the selected pick-up time. please select another time between ' + value.timing_mask.start_time + ' and ' + value.timing_mask.end_time
          });
            }
          }
        }
      }


this.selectedTime = null

}

  if(this.selectedTime){
    this.currentOrder.scheduled_time = this.selectedTime.time;
this.currentOrder.fulfillment_info.estimated_fulfillment_time = this.selectedTime.time;
  }else{
    this.currentOrder.scheduled_time = null
  }

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

console.log('newAddress');
console.log(newAddress.address_components[5].short_name);

      googleAddressObject.state = newAddress.address_components[5].short_name;	
}	
if(newAddress){	
      googleAddressObject.zip = newAddress.address_components.filter((obj) => {	
        return obj.types[0] === "postal_code";	
      })[0].long_name;	
}	
      this.googleAddressObject = googleAddressObject;	
      this.currentOrder.billing.billing_address_city =	
        googleAddressObject.locality;	
      this.currentOrder.billing.billing_address_state =	
        googleAddressObject.state;	
      this.currentOrder.billing.billing_postal_code =	
        googleAddressObject.zip;	
      this.currentOrder.billing.billing_address =	
        googleAddressObject.streetNumber + " " + googleAddressObject.route;	


googleAddressObject.state;	

    }
    },
  data() {
  return {
domains: ["mamnoonrestaurant.com","gmail.com","yahoo.com","hotmail.com","aol.com","hotmail.co.uk","hotmail.fr","msn.com","yahoo.fr","wanadoo.fr","orange.fr","comcast.net","yahoo.co.uk","yahoo.com.br","yahoo.co.in","live.com","rediffmail.com","free.fr","gmx.de","web.de","yandex.ru","ymail.com","libero.it","outlook.com","uol.com.br","bol.com.br","mail.ru","cox.net","hotmail.it","sbcglobal.net","sfr.fr","live.fr","verizon.net","live.co.uk","googlemail.com","yahoo.es","ig.com.br","live.nl","bigpond.com","terra.com.br","yahoo.it","neuf.fr","yahoo.de","alice.it","rocketmail.com","att.net","laposte.net","facebook.com","bellsouth.net","yahoo.in","hotmail.es","charter.net","yahoo.ca","yahoo.com.au","rambler.ru","hotmail.de","tiscali.it","shaw.ca","yahoo.co.jp","sky.com","earthlink.net","optonline.net","freenet.de","t-online.de","aliceadsl.fr","virgilio.it","home.nl","qq.com","telenet.be","me.com","yahoo.com.ar","tiscali.co.uk","yahoo.com.mx","voila.fr","gmx.net","mail.com","planet.nl","tin.it","live.it","ntlworld.com","arcor.de","yahoo.co.id","frontiernet.net","hetnet.nl","live.com.au","yahoo.com.sg","zonnet.nl","club-internet.fr","juno.com","optusnet.com.au","blueyonder.co.uk","bluewin.ch","skynet.be","sympatico.ca","windstream.net","mac.com","centurytel.net","chello.nl","live.ca","aim.com","bigpond.net.au"],
staffTimingMask: {
  "id": "7af998f6-20f1-4984-a625-943f787be339",
  "start_time": "14:30",
  "end_time": "16:00",
  "rules": [
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
  ],
  "status": "enabled",
  "owner_id": "447606b2-ef3c-4df3-9f47-56e123a2c6c6"
}, 
    upserveListStaff:   [
 {
  "id": "8fca1abe-f209-4b8b-bd32-968f0a22ae4d",
  "name": "shish taouk",
  "price": "29.0",
  "price_cents": 2900,
  "description": "yogurt marinated and grilled chicken, tamarind glaze, preserved root vegetables, brown butter toum, grapefruit, herbs, served over rice",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "images": {
    "online_ordering_menu": {
      "main": "https://res-4.cloudinary.com/upserve/image/upload/v1641682331/ctu09uchek7qnsrr3hw1.jpg"
    }
  },
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [
    {
      "id": "7995a631-fe31-4c5f-9d53-38aaec6fe7b3",
      "metadata": {
        "image_path": "v1641682331/ctu09uchek7qnsrr3hw1.jpg",
        "curated": false,
        "url": "https://res-4.cloudinary.com/upserve/image/upload/v1641682331/ctu09uchek7qnsrr3hw1.jpg"
      },
      "url": "https://res-4.cloudinary.com/upserve/image/upload/v1641682331/ctu09uchek7qnsrr3hw1.jpg"
    }
  ],
  "modifier_group_ids": [],
  "side_ids": [],
  "tax_rate_ids": []
},
   {
  "id": "512d6558-aa69-46a3-980d-300e23f5e05f",
  "name": "Lunch Combo Special",
  "price": "25.0",
  "price_cents": 2500,
  "description": "Takeout only Tuesday-Saturday 11:30-2:30pm\r\n\r\nYour choice of either\r\n~chicken shawarma (halal) shawarma spiced chicken, lettuce, tomato, house pickles, fries & roasted garlic sauce\r\nOR\r\n~mamnoon falafel (veg) chickpea fritters, cabbage, pickles, hummus, yogurt, tomato, parsley, mint\r\n\r\nAND\r\n\r\n~ labneh with mint, four pieces of housemade pita \r\n~ harra frites\r\n\r\nSorry, no substitutions\r\n",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [],
  "modifier_group_ids": [
    "9426fb7e-a114-4d76-94ba-63e3e0c4c84f",
    "a024a7f9-2199-4684-b351-37d6cec41447"
  ],
  "side_ids": [],
  "tax_rate_ids": []
},
 {
  "id": "62fafabb-240e-4e34-9f80-ee1ea311c59b",
  "name": "chicken shawarma ",
  "price": "12.0",
  "price_cents": 1200,
  "description": "shawarma spiced chicken, lettuce,\r\ntomato, pickled peppers, frites, roasted garlic sauce, arabic bread",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "images": {
    "online_ordering_menu": {
      "main": "https://res-5.cloudinary.com/upserve/image/upload/v1598579602/m680cjftyiivxutgkpi8.jpg"
    }
  },
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [
    {
      "id": "da2f08a3-adaa-48c2-a6c2-216ab552bfc2",
      "metadata": {
        "image_path": "v1598579602/m680cjftyiivxutgkpi8.jpg",
        "curated": false,
        "url": "https://res-5.cloudinary.com/upserve/image/upload/v1598579602/m680cjftyiivxutgkpi8.jpg"
      },
      "url": "https://res-5.cloudinary.com/upserve/image/upload/v1598579602/m680cjftyiivxutgkpi8.jpg"
    }
  ],
  "modifier_group_ids": [
    "a024a7f9-2199-4684-b351-37d6cec41447"
  ],
  "side_ids": [],
  "tax_rate_ids": []
},
 {
  "id": "a3c70f6d-562f-48e3-8cc4-517e96d0c81e",
  "name": "falafel ",
  "price": "11.0",
  "price_cents": 1100,
  "description": "chickpea fritters, cabbage, tomato, pickles, hummus, yogurt, tarrator, herbs, arabic bread ",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "images": {
    "online_ordering_menu": {
      "main": "https://res-2.cloudinary.com/upserve/image/upload/v1598579656/ftoyhwzhhwlat98qiscc.jpg"
    }
  },
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [
    {
      "id": "a423a8c5-24b6-42a9-b004-d1bdd6acd5cd",
      "metadata": {
        "image_path": "v1598579656/ftoyhwzhhwlat98qiscc.jpg",
        "curated": false,
        "url": "https://res-2.cloudinary.com/upserve/image/upload/v1598579656/ftoyhwzhhwlat98qiscc.jpg"
      },
      "url": "https://res-2.cloudinary.com/upserve/image/upload/v1598579656/ftoyhwzhhwlat98qiscc.jpg"
    }
  ],
  "modifier_group_ids": [
    "a024a7f9-2199-4684-b351-37d6cec41447"
  ],
  "side_ids": [],
  "tax_rate_ids": []
},
 {
  "id": "4965a936-7c93-4b47-b86b-d7d41adec278",
  "name": "za'atar man'oushe ",
  "price": "9.0",
  "price_cents": 900,
  "description": "king of lebanese street food! wild thyme,\r\nsesame, olive, labneh, tomato, herbs, arabic bread",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "images": {
    "online_ordering_menu": {
      "main": "https://res-1.cloudinary.com/upserve/image/upload/v1598579793/gppll9561fcdwxn18n8f.jpg"
    }
  },
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [
    {
      "id": "403e45be-96c2-404b-9ec2-5e0c4cfe670d",
      "metadata": {
        "image_path": "v1598579793/gppll9561fcdwxn18n8f.jpg",
        "curated": false,
        "url": "https://res-1.cloudinary.com/upserve/image/upload/v1598579793/gppll9561fcdwxn18n8f.jpg"
      },
      "url": "https://res-1.cloudinary.com/upserve/image/upload/v1598579793/gppll9561fcdwxn18n8f.jpg"
    }
  ],
  "modifier_group_ids": [
    "a024a7f9-2199-4684-b351-37d6cec41447"
  ],
  "side_ids": [],
  "tax_rate_ids": []
},
 {
  "id": "1e29ca0b-8e11-4c49-aa4c-0e2d10dc4033",
  "name": "jibneh wi za'atar",
  "price": "10.0",
  "price_cents": 1000,
  "description": "za’atar, mozzarella, tomato, olive, herbs, arabic bread ",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "images": {
    "online_ordering_menu": {
      "main": "https://res-2.cloudinary.com/upserve/image/upload/v1598582695/gstdkf8fghc6famufqcg.jpg"
    }
  },
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [
    {
      "id": "304533d5-f5cb-44a5-ac06-a21827556b79",
      "metadata": {
        "image_path": "v1598582695/gstdkf8fghc6famufqcg.jpg",
        "curated": false,
        "url": "https://res-2.cloudinary.com/upserve/image/upload/v1598582695/gstdkf8fghc6famufqcg.jpg"
      },
      "url": "https://res-2.cloudinary.com/upserve/image/upload/v1598582695/gstdkf8fghc6famufqcg.jpg"
    }
  ],
  "modifier_group_ids": [
    "a024a7f9-2199-4684-b351-37d6cec41447"
  ],
  "side_ids": [],
  "tax_rate_ids": []
},
 {
  "id": "2b6d7c40-13b2-4e47-aff7-cf4913f6d178",
  "name": "fleifleh ",
  "price": "9.0",
  "price_cents": 900,
  "description": "roasted red pepper and onion confit,\r\nsesame, nigella, herbs (vegan)\r\n",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "images": {
    "online_ordering_menu": {
      "main": "https://res-1.cloudinary.com/upserve/image/upload/v1598579550/swtfbhggtgbl72g7qpru.jpg"
    }
  },
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [
    {
      "id": "3c9fec47-121f-4f8a-83b2-c5c0105a364c",
      "metadata": {
        "image_path": "v1598579550/swtfbhggtgbl72g7qpru.jpg",
        "curated": false,
        "url": "https://res-1.cloudinary.com/upserve/image/upload/v1598579550/swtfbhggtgbl72g7qpru.jpg"
      },
      "url": "https://res-1.cloudinary.com/upserve/image/upload/v1598579550/swtfbhggtgbl72g7qpru.jpg"
    }
  ],
  "modifier_group_ids": [
    "a024a7f9-2199-4684-b351-37d6cec41447"
  ],
  "side_ids": [],
  "tax_rate_ids": []
},
 {
  "id": "0cca54cd-617d-49b4-b872-32f70cd0448e",
  "name": "lahm bi ajine",
  "price": "10.0",
  "price_cents": 1000,
  "description": "minced lamb, aleppo chili, pomegranate\r\nmolasses, herbs",
  "min_sides": 0,
  "max_sides": 0,
  "item_type": "normal",
  "tax_inclusive": false,
  "images": {
    "online_ordering_menu": {
      "main": "https://res-4.cloudinary.com/upserve/image/upload/v1598579244/cdeq9g0dvg2dquuv8uua.jpg"
    }
  },
  "tax_rate_id": "4c4734ea-c91d-412e-a2e3-67a8409908bf",
  "item_images": [
    {
      "id": "4175d142-2647-4b7c-a251-d83865ccaf86",
      "metadata": {
        "image_path": "v1598579244/cdeq9g0dvg2dquuv8uua.jpg",
        "curated": false,
        "url": "https://res-4.cloudinary.com/upserve/image/upload/v1598579244/cdeq9g0dvg2dquuv8uua.jpg"
      },
      "url": "https://res-4.cloudinary.com/upserve/image/upload/v1598579244/cdeq9g0dvg2dquuv8uua.jpg"
    }
  ],
  "modifier_group_ids": [
    "a024a7f9-2199-4684-b351-37d6cec41447"
  ],
  "side_ids": [],
  "tax_rate_ids": []
}     
],
    itemStaff: { 
      "id": "8ce914dc-b26f-4dc9-b0d1-9e2837c484b5",
      "name": "staff display group",
      "timing_mask": {
  "id": "7af998f6-20f1-4984-a625-943f787be339",
  "start_time": "14:30",
  "end_time": "16:00",
  "rules": [
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
  ],
  "status": "enabled",
  "owner_id": "447606b2-ef3c-4df3-9f47-56e123a2c6c6"
},
      "item_ids": [ "fa80d069-baa8-4906-8bd9-3887e4a15c38", "e1d4fa26-9fd3-4e0f-9959-06837f93089a", "b40f9c17-a344-4950-9b48-df8acb6fdb51", "e2cf7af3-7060-4209-817d-3970923c5521", "d187d4dd-c95b-4e48-a751-94122920c41d", "2703ead3-bc05-401b-aa00-37c8043c732d" ] },
    tFs: null,
    showScenarios: false,
    showStaffMenu: false,
    packageLink: false,
    packageOrderDate: null,
    packageObjectMaximum: null,
    forPackageModal: {},
    employeeCheckout: false,
    dnsCheck: -1,
    unableToProcessModal: false,
    thirtyMinutesFromNow: moment().add(20, 'minutes').format("LLLL"),
    changedToDropdown: false,
    changePickupTime: false,
    oloAvailable: true,
    formsValidClass: false,
    postalErrorVisibleTf: false,
    emailErrorVisibleTf: false,
    phoneErrorVisibleTf: false,
    addressErrorVisibleTf: false,
    fullNameErrorVisibleTf: false,
    firstNameErrorVisibleTf: false,
    lastNameErrorVisibleTf: false,
    cityErrorVisibleTf: false,
    stateErrorVisibleTf: false,
    filteredValues: [],
    sliderNavVisible: true,
    packages: null,
    disabledButton: false,
    disabledGiftCardButton: false,
    fetchedDate: '',
    reOrder: {},
    orderHistoryList: [],
    orderHistory: null,
    componentKey: 0,
          savedDeliveryAddress: {},
      savedBillingAddress: {},
    updateCI: false,
    updateBilling: false,
    editInfoVisible: false,
    savedCards: null,
    resizeIndex: 1,
    nowTime: null,
    nowDate: null,
    allOptionsSelected: false,
    currentModifiers: [],
    // test: 'testing',
    test: 'not testing',
    validNumber: false,
      updateBilling: false,
      updateDelivery: false,
      savedDeliveryAddress: {},
      savedBillingAddress: {},
      deliveryAddress: {
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: ''
      },
      billingAddress: {
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: ''
      },
      user: {},
      noFiltering: true,
      currentRestaurantHours: '',
      nextOpen: '',
      preOrderToggleState: false,
      currentRestaurantDays: [],
      rendered: false,
      timeslotsCreated: [],
      openTimesUpdated: [],
      openTimes: [],
      openDays: [],
      dates_additional_information: null,
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
      upserveTaxRate: 0.101,
      modalOpen: false,
      modal2Open: false,
      currentItem: null,
      currentItemQuantity: 1,
      cartTotal: 0,
      textdescription: "",
      blockedBody: this.data,
      upserve: null,
      upserveList: null,
      upserveSections: [],
      upserveCategories: [],
      currentlyFiltered: [],
      currentOrder: { 
        timeStamp: Date.now(),
        tipSelected: 0,
        currentAmountToAddCustom: 0,
        sms: false,
        restaurant: this.title,
        billing:{
          billing_name: '',
          billing_address: '',
          billing_address_unit: '',
          billing_address_city: '',
          billing_address_state:'',
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
          total: 0,
          preTotal: 0,
          fees: 0,
          taxes: 0,
          tip: {
            amountOptions: [],
            amount: 0,
            // payment_type: "Generic Online Ordering Integrated",
            payment_type: "Nadi Mama"
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
            last_name: "",
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
              // payment_type: "Generic Online Ordering Integrated",
              payment_type: "Nadi Mama",
              amount: null,
            },
          ],
        },
      },
    };
  },
  filters: {
  formatDate(value) {
  if (value) {
        let order = moment(String(value));
        return order.tz('America/Los_Angeles').format('LLLL').replace(', 2020', ', at');
  }
},
capitalizeFirstLetter(string) {
  if(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
},
formatAmPm(value) {
  if (value) {
return moment(value, 'HH:mm:ss').format('h:mm:ssa').replace(':00','');
  }
},
formatAmPmFirst(value) {
  if (value) {
return moment(value, 'HH:mm:ss').format('h:mm:ss').replace(':00','');
  }
},
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
showToFixed: function (value) {
    let decvalue = value/100
    return decvalue.toFixed(2).replace('.00', '')
}
  },
  methods: {
tipReturn(amount){

    if(this.title === 'Mamnoon'){
      return Number(this.$store.state.storeMamnoon.charges.preTotal) * amount;	
    }else if(this.title === 'Mamnoon Street'){
      return Number(this.$store.state.storeStreet.charges.preTotal) * amount;	
    }


},
// formatNonMilitary(time){
// return moment(time).format('HH:mm');
// },
returnAsMappedTimeSlots(timeslots){
return timeslots.map(function(tx) {  return tx.time })

    },
hideIfExpired(item){

if(item.timing_mask && item.timing_mask.end_date){
if(item.timing_mask.end_date === moment().tz('America/Los_Angeles').format('YYYY-MM-DD')){
  return true;
}
}
},
    trimmedName(item){
      return item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
    },
enumerateDaysBetweenDates(startDate, endDate) {
    var dates = [];

    var currDate = moment(startDate).startOf('day');
    var lastDate = moment(endDate).startOf('day');


dates.push(currDate.clone().toDate());

    while(currDate.add(1, 'days').diff(lastDate) < 0) {
        // console.log(currDate.toDate());
        dates.push(currDate.clone().toDate());
    }


dates.push(lastDate.clone().toDate());


    return dates;
},
checkIfPackageSection(f){

const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('packageId');

let result = false;


return result;



},
  async emailValidFromServer(email, payType){
    if(!this.validEmail(email)){
      alert(`Hmmm...the email address "${email}" doesn't look right. Please enter a valid email address`);
    }

    if(this.domains.includes(email.split("@")[1])){
      this.checkPaymentMethod(payType);
    } else {

      let self = this
      await self.$http.get(`/emailverified/${email}`)
      .then(response => {
        console.log(`line 3395 olo testing`,response.data.data);
        if(response.data.data.dnsCheck === 'true'){
          self.checkPaymentMethod(payType);
        }else{
        alert(`Hmmm...the email address "${email}" doesn't look right. Please enter a valid email address`);
        }
      }).catch(err => {
        console.log('err line 3465', err)
      })
    }
  },


  checkPaymentMethod(payType){
    if(payType === "debit"){
      this.cippaybuttoncreditauth();
    } else if(payType === "giftCard"){
      console.log("does it enter gift card part?")
      this.showGiftCard();
    } else if(payType === "primaryCard"){
      let primaryCard = this.savedCards.filter(function(x){
        return x.primary === true;
      })
        this.confirmTokenizedPreAuth(primaryCard[0].approvalData,this.currentOrder.charges.total,primaryCard[0].approvalData.uniqueTransId,primaryCard[0].approvalData.maskedAccount.replace('************',''));
    } else {
      return null;
    }
    
  },


    changeToPreorderAndShowDropDown(){

  this.$swal({ 
      title: "please select a preferred date and time at the top of the page.",
    showDenyButton: true,
    denyButtonText: `Cancel`,
    confirmButtonText: `Confirm`
  }).then((confirmed) => {
    if (confirmed) {

      if(confirmed.isConfirmed){
  
        this.preOrderToggle(true);
        window.scrollTo(0,0);
        this.toggledDrawer = false;

      }

    } else {

    }
  });

    },
selectADifferentTime(){

  this.$swal({ 
      title: "select a different time at the top of the page",
    showDenyButton: true,
    denyButtonText: `Cancel`,
    confirmButtonText: `Confirm`
  }).then((confirmed) => {
    if (confirmed) {

      if(confirmed.isConfirmed){
  

      window.scrollTo(0,0);
      this.toggledDrawer = false;
      }
    } else {
    }
  });
    },
showPickupTime(){
  this.changePickupTime = true;s

},
cippaybuttoncreditauth() {


      // console.log("enter else on line 3582")
      let self = this;
      this.getCreditAuthToken().then(function (transactionToken) {
        console.log(transactionToken);
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();
            console.log('authorized now put into the upserve world');

            if(self.title === 'Mamnoon'){

              if(self.$store.state.storeMamnoon.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeMamnoon,approvalData,null);
              }
              
              if(self.$store.state.storeMamnoon.preorder === false){
                self.doAnOrder(self.$store.state.storeMamnoon,approvalData,null);
              }

            }else if(self.title === 'Mamnoon Street'){

                if(self.$store.state.storeStreet.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeStreet,approvalData,null);
              }
              if(self.$store.state.storeStreet.preorder === false){
                self.doAnOrder(self.$store.state.storeStreet,approvalData,null);
              }
      }
    

// credit save
// credit save
// credit save

          },
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);
            console.log('proceeed with order now you have a transaction');
            // console.log('transasction success')

          },
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });
      });
    
},
    cippaybuttoncreditsave() {
        
      let self = this;
      this.getCreditSaveToken().then(function (transactionToken) {
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();
            console.log('proceeed with order now you have a transaction');
// credit save
// credit save
// credit save success

console.log('transasction success')
   if(self.title === 'Mamnoon'){

              if(self.$store.state.storeMamnoon.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeMamnoon,approvalData,null);
              }
              
              if(self.$store.state.storeMamnoon.preorder === false){
                self.doAnOrder(self.$store.state.storeMamnoon,approvalData,null);
              }



    }else if(self.title === 'Mamnoon Street'){
      if(self.$store.state.storeStreet.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeStreet,approvalData,null);
              }
              if(self.$store.state.storeStreet.preorder === false){
                self.doAnOrder(self.$store.state.storeStreet,approvalData,null);
              }
    }
// credit save
// credit save
// credit save

          },
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);
            console.log('proceeed with order now you have a transaction');
            // console.log('transasction success')

          },
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });
      });
    },
    getCreditSaveToken() {
      let self = this;
      let dataToSend = {
      billing:{
        billing_name: this.currentOrder.billing.billing_name,
        billing_address: this.currentOrder.billing.billing_address,
        billing_postal_code: this.currentOrder.billing.billing_postal_code
      }
      }

      return new Promise(function (resolve, reject) {
        $.ajax({
          url: `${self.$http.defaults.baseURL}/order/start-credit-save`,
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(dataToSend),
        })
          .done(function (data) {
            if (data.transactionToken) resolve(data.transactionToken);
            else reject("Error getting transaction token");
          })
          .fail(function (err) {
            reject( err);
          });
      });
    },
   getCreditAuthToken() {
      let self = this;
      let dataToSend = {
      currentOrder: this.currentOrder
      }

      return new Promise(function (resolve, reject) {
        $.ajax({
         url: `${self.$http.defaults.baseURL}/credit/start-credit-auth`,
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(dataToSend),
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
    emailErrorVisible(emailEntry,phoneEntry){


console.log('change done');

      emailEntry.trim();
      this.formsValid(emailEntry,phoneEntry);
      this.emailErrorVisibleTf = true;
    },
    checkIfFullNameValid(fullname){
      this.fullNameErrorVisibleTf = true;
    },
    checkIfFirstNameValid(firstname){
      this.firstNameErrorVisibleTf = true;
    },
    checkIfLastNameValid(lastname){
      this.lastNameErrorVisibleTf = true;
    },
    checkIfPhoneValid(phoneEntry){
      this.phoneErrorVisibleTf = true;
    },
    checkIfPostalValid(postalEntry){
      this.postalErrorVisibleTf = true;
    },
    checkIfAddressValid(addressEntry){
      this.addressErrorVisibleTf = true;
    },
    checkIfCityValid(city){
      console.log(city);
      if(city.length > 0){
        console.log('valid')
        this.cityErrorVisibleTf = false;
      }else{
        console.log('invalid')
        this.cityErrorVisibleTf = true;
      }
    },
    checkIfStateValid(state){
      if(state.length === 2){
        console.log('valid')
      this.stateErrorVisibleTf = false;
      }else{
        console.log('invalid')
        this.stateErrorVisibleTf = true;
      }
    },
    phoneErrorVisible(emailEntry,phoneEntry){
      this.phoneErrorVisibletf = true;
      this.formsValid(emailEntry,phoneEntry);
    },

    formsValid(emailEntry,phoneEntry){
      if(this.validEmail(emailEntry) && this.validPhone(phoneEntry) && this.currentOrder.charges.items.length>0){
        this.formsValidClass = true;
        return true;
      }else{
        this.formsValidClass = false;
        return false;
      }
    },
currentlyContains(modifiers,m,modid){




if(m !== modid){
        console.log('match');
}


        let filtered = modifiers.filter(x=>x.id === m);
        // console.log(filtered);

if(filtered.length>0){
return true;
}else{
return false;
}


      },
itemsInCart(items){

let amountOfItems = 0

  for(let i in items){
amountOfItems = amountOfItems+ items[i].quantity;
  }
return amountOfItems;
},
findWithInstructions(array, value) {

// let ins = null;

    for(var i = 0; i < array.length; i += 1) {
        if(array[i].instructions === value) {
          //  ins = i;
            // console.log(i);
return i;
}
    }

// if(ins === null){
  // console.log('finding with arrt no results');
  return -1;
// }else{
  //  console.log(array, value);
  // return ins;
// }


    
},
findWithModifiers(array, value) {


function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}

// let ins = null;

    for(var i = 0; i < array.length; i += 1) {
        if(arraysEqual(array[i].modifiers, value)) {
        // ins = i;
            // console.log(i);
            return i;
        }
    }
   


// if(ins === null){
  // console.log('finding with arrt no results');
  return -1;
// }else{
  //  console.log(array, value);
  // return ins;
// }


    
},
findWithAttr(array, value) {

// let ins = null;
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].name === value) {
            return i;
            // ins = i;
            // console.log(i);
        }
    }


// if(ins === null){
  // console.log('finding with arrt no results');
  return -1;
// }else{
  //  console.log(array, value);
  // return ins;
// }


    
},
filterDown(items){

let arrr = [];

let itemsCopy = items.slice(0);


for(let i = 0; i < itemsCopy.length; i++){
// console.log(this.findWithAttr(arrr, itemsCopy[i].name));
  if(this.findWithAttr(arrr, itemsCopy[i].name) === -1){
    console.log('there isnt one, so add it');
    arrr.push(itemsCopy[i]);
  }else{
    console.log('there is one, so increase it by one');
    arrr[this.findWithAttr(arrr, itemsCopy[i].name)].quantity++;
  }
    
}
console.log(arrr);
// this.arrCounted = arrr;
return arrr;

},
doACalculation(calculation){

function findWithAttr(array, value) {

    for(var i = 0; i < array.length; i += 1) {
        if(array[i].name === value) {
            return i;
        }
    }
    return -1;
}

    },
     computed3(insert) {
      // return insert.replace(/\\"/g, '"');
            return insert;
    },
checkIfGiftCard(value){

  if(value.includes("Gift Card")){
    return 'gift card';
  }else{
    return value
  }

},
formatWithAddons(order){

let finishedPrice = order.price_cents;

for(let i = 0;i<order.modifiers.length;i++){
  finishedPrice = finishedPrice + order.modifiers[i].price;
}

return finishedPrice.toFixed(2)/100 * order.quantity;

},
formatExtraZero(value){

// console.log(value.toString())
// console.log("value.split('')")
// console.log(value.toString().split('').length)

  if(value.toString().split('')[value.toString().split('').length-2]=== '.'){
return value + '0';
  }{
    return value;
  }



},
   formatPrice(value) {
        let val = (value/100).toFixed(2)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(".00","");
    },
decrementIfMatch(currentOrder){


let self = this;
// console.log(currentOrder.charges.items);


if(self.packages){
// console.log('self.packages');
// console.log(self.packages);
   for(let i = 0;i < currentOrder.charges.items.length;i++){
    console.log('currentOrder.charges.items[i]');
 console.log(currentOrder.charges.items[i]);


// console.log('self.packages');
// console.log(self.packages);


if(self.packages.length > 0){
      let result = self.packages.find(pack => {
        return pack.upserveId === currentOrder.charges.items[i].item_id
      });
console.log('result');
console.log(result);



if(result && result.upserveId){
self.decrementPackageByUpserveId(result.upserveId,currentOrder.charges.items[i].quantity);
}
   }
}


}

},
async decrementPackageByUpserveId(id,amount) {
            // console.log('retriev orders frome')
            console.log(id);
                 console.log('end id')
            let decrementPack = await this.$http.post(`/package/decrementpackagebyupserveid`, {
                upserveId: id,
                amount
              });

        let decrementPackResponse = decrementPack.data;
        console.log(decrementPackResponse);
        },
    async retrievePackages() {
// console.log('retrieve packages');
    // console.log('retriev orders frome')  
    let responseUpserve = await this.$http.get(`/package/retrieve`);
    this.packages = responseUpserve.data.packs;

    },
    async retrieveOnePackage(upserveId) {
let self = this;
    // console.log('retriev orders frome')
    let responseUpserve = await this.$http.get(`/package/retrieveone/${upserveId}`);

// console.log(responseUpserve);
//  console.log(responseUpserve.data.package.object);
// this.forPackageModal = responseUpserve.data.package.object;


if(responseUpserve.data.package.number === 0){

  this.$swal({ 
    title: "this package has unfortunately sold out!",
    showDenyButton: false,
    confirmButtonText: `Okay`
  }).then((confirmed) => {
    if (confirmed) {

      if(confirmed.isConfirmed){
        self.$router.push('/');
      }
    } 
  });


}else{
self.openModal(responseUpserve.data.package.object,responseUpserve.data.package.timing_mask,responseUpserve.data.package);
}
    },
emptyReOrderObject(){

  this.reOrder = {};
  this.$store.commit('upserveOrderCurrentOrder', {});

},
returnOrder(itemid){


var result = jsObjects.find(obj => {
  return obj.b === 6
})

},
    checkIfPackageAvailable(itemid){
//   if(this.packages){
//   let result = this.packages.find(pack => {
// return pack.upserveId === itemid
//   });

// // console.log(result);
// if(result !== undefined){



// if(result.number === 0){
//   return false;
// }else{
//   return true;
// }

// }else{
// return true;
// }

// }
return true;
      },
notAvailableDayOf(item){

return false;
// console.log(item);

//  if(this.packages){
// // console.log(this.packages)
// // console.log(this.packages);

//   let result = this.packages.find(pack => {
// return pack.upserveId === item.id
//   });

// // console.log(result);
// if(result){
// return true;
// }else{
//    return false;
//  }

// }

},
    checkIfPackage(itemid){
      if(this.packages){
      let result = this.packages.find(pack => {
        return pack.upserveId === itemid
      });

    // console.log(result);
if(result === undefined){
return false;
}else{


  if(result.number>0){
    return result.number + ' remain';
  }else{
    return 'sold out';
  }

  // return result.number;
}

    }

      },
    checkIfOrdered(itemid){

      // console.log(itemid);
      if(this.orderHistoryList){


var result = this.orderHistoryList.find(obj => {
  return obj.item === itemid
})

// console.log(result);
if(result !== undefined){
        let order = moment(String(result.date));
        return 'ordered on ' + order.tz('America/Los_Angeles').format('MM/DD')


}

    }

      },
    retrieveOrders() {
    let self = this
        this.$http.get(`/order/email/${this.emailAddress}`).then(function (response) {
// this.$http.get(`/order/email/${this.$auth._data.user.email}`).then(function (response) {


        self.orderHistory = response.data



    })
    },
     forceRerender() {
      this.componentKey += 1;

      console.log('force rerender happened')
    },
    async checkFormBilling() {
          this.updateBilling = false
        try {
        let response = await this.$http.post("/user/submitbillingaddress", {
          email: this.emailAddress,
          billingAddress: this.user.user.billingAddress
          });
 console.log(response)
          this.savedBillingAddress = response.data.user.billingAddress
          // this.updateBilling = false

       
         } catch (err) {
        console.log(err.response);
      }
        this.getUser()
    },
async checkFormCustomerInfo() {
 this.updateCI = false
        try {
        let response = await this.$http.post("/user/submitdeliveryaddress", {
          email: this.emailAddress,
          deliveryAddress: this.user.user.deliveryAddress
          });
this.savedDeliveryAddress = response.data.user.deliveryAddress
         } catch (err) {
        console.log(err.response);
      }

 this.getUser()
    },
    editInfo(){

       this.editInfoVisible = true 


    },
    clearOrderAndReRoute(){

      if(this.currentOrder){

          this.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          this.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29)
          let newDate = new Date();
          this.currentOrder.time_placed = newDate;


  
    if(this.selectedTime){
this.currentOrder.fulfillment_info.estimated_fulfillment_time = this.selectedTime.time;

  }else{
this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;


  }



  
          // this.$store.commit("orderCMR", { orderCMR });
          // this.$router.push("/orderconfirmation");

        }
    },
    handleClickSignInForCard(emailAddress,approvalData) {
      let self = this
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          var profile = GoogleUser.getBasicProfile();

          // console.log("Email: " + profile.getEmail());

          // console.log(this.$gAuth.isAuthorized)
          // console.log(profile)
          // this.showUserInfo(profile.getEmail())
          self.isSignIn = self.$gAuth.isAuthorized;

          self.$store.commit("logIn");

          let currentUserEmail = profile.getEmail();
          // console.log(profile)
          // console.log(currentUserEmail)
          self.$store.commit("setCurrentUserEmail", { currentUserEmail });
          // location.reload()
          self.checkAndSend(self.emailAddress,approvalData)

          self.clearOrderAndReRoute()
          self.$router.push("/profile");
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },
    async checkAndSend(email,approvalData){
      console.log('check credit card')

    try {
      let response = await this.$http.post('/credit/checkcreditcard/',{
        email,
        approvalData
      }) 
      console.log('check credit card length')


      console.log(response.data.user)
     if(response.data.user.length > 0){


//  this.$swal({ 
// title: "this card has already been saved to your account"
//   });


               this.ccBillingPostalCode = null
               this.ccBillingAddress = null
               this.ccBillingName = null

    this.showAddCardFormVisible = false

      }else{



    this.sendApprovalDataToMongo(email, approvalData)
      }
     
 

    } catch (err) {

 this.$swal({ 
    title: "Error"
  });

       
        console.log(err);
      }
    },
  sendApprovalDataToMongo(email, approvalData){
console.log('send approval ')
console.log(email, approvalData)

    let infoForPay = {
          payInfo: null,
          email
        }

        if(approvalData.data){
          infoForPay.payInfo = approvalData.data;

        }else{
         infoForPay.payInfo = approvalData; 
        }

    let infoForPayStringify = infoForPay      
     this.$http
        .post("/credit/creditsavemongo", infoForPayStringify)
        .then((response) => {

 this.$swal({ 
    title: "success! card has been saved."
  });

          this.ccBillingPostalCode = null
          this.ccBillingAddress = null
          this.ccBillingName = null

          this.showAddCardFormVisible = false
          this.setPrimaryIfOnlyOne(email)
          this.getCreditCards();



        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });
  },
    setPrimaryIfOnlyOne(email){
      console.log('spio1')
        let self = this;
        let emailBody = {
          email
        }
      this.$http
        .post("/credit/setprimaryifonlyone", emailBody)
        .then((response) => {

          console.log(response)
          self.getCreditCards();
        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });


  },
  confirmTokenizedPreAuth(approvalData,orderTotal,transId,cardSuffix){
// for store card
    let decvalue = orderTotal/100


    
console.log("Approval Data", approvalData);
  this.$swal({ 
    title: "confirm saved card ending in " + cardSuffix + " payment for $" + decvalue.toFixed(2).replace('.00', '') + " ?",
    showDenyButton: true,
    confirmButtonText: `Confirm`
  }).then((confirmed) => {
    if (confirmed) {

      if(confirmed.isConfirmed){
  
        this.disabledButton = true;
        this.tokenizedPayment(approvalData);

      }

    } else {

    }
  });

  },
                async tokenizedPayment(approvalData1){


      
               let self = this;

            console.log("Approval Data", approvalData1);
      
            console.log('proceeed with order now you have a transaction');


// credit save
// credit save
// credit save success

console.log('transasction success')
   if(self.title === 'Mamnoon'){

              if(self.$store.state.storeMamnoon.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeMamnoon,approvalData1,null);
              }
              
              if(self.$store.state.storeMamnoon.preorder === false){
                self.doAnOrder(self.$store.state.storeMamnoon,approvalData1,null);
              }



    }else if(self.title === 'Mamnoon Street'){
      if(self.$store.state.storeStreet.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeStreet,approvalData1,null);
              }
              if(self.$store.state.storeStreet.preorder === false){
                self.doAnOrder(self.$store.state.storeStreet,approvalData1,null);
              }
    }

// credit save
// credit save
// credit save


        },
            async xtokenizedPayment(orderTotal,transId){
////////
      try {
        let response = await this.$http.post("/credit/tokenizedpayment/",{
            orderTotal,
            transId
        });
        console.log(response.data)



console.log('transasction success')
   if(this.title === 'Mamnoon'){

              if(this.$store.state.storeMamnoon.preorder === true){
                this.scheduleAnOrder(this.$store.state.storeMamnoon,response.data,null);
              }
              
              if(this.$store.state.storeMamnoon.preorder === false){
                this.doAnOrder(this.$store.state.storeMamnoon,response.data,null);
              }



    }else if(this.title === 'Mamnoon Street'){

              if(this.$store.state.storeStreet.preorder === true){
                this.scheduleAnOrder(this.$store.state.storeStreet,response.data,null);
              }
              
              if(this.$store.state.storeStreet.preorder === false){
                this.doAnOrder(this.$store.state.storeStreet,response.data,null);
              }

    }

this.toggledDrawer = false
 
         } catch (err) {
        console.log(err.response);
      }
            
//////

        },
                async getCreditCards() {
      // console.log('get credit cards')
      try {
        let response = await this.$http.get("/credit/getcreditcards/" + this.emailAddress);
        // console.log(response.data)
        this.savedCards = response.data.usercreditcards
 
         } catch (err) {
        console.log(err.response);
      }

    },
 setResizeIndex(){
  this.resizeIndex = Math.random();
 },
  showCurrentlyAvailable(){

  },
    selectedOption(id, modifier, mod, modifieritem){

    let index = this.currentModifiers.findIndex(p => p.option === id)

      if(index > -1){
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].option = null
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].selected = false
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].price = 0
        this.removeAddOnOne(mod,modifieritem)
      }else{
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].option = id
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].selected = true
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === modifier.id)].price = mod.price_cents
        this.addAddOnOne(mod,modifieritem)
      }


let self = this
let filteredCurrent = this.currentItemModifierArray.filter(function(x){
 return self.currentModifiers.findIndex(p => p.option === x.id) > -1

});

this.currentItemModifierArray = filteredCurrent

      if(this.currentModifiers.every( (val, i, arr) => val.selected === true ) ){
          this.allOptionsSelected = true
        }else{
          this.allOptionsSelected = false
        }

    },
    emptyCart(){
//console.log('empty the cart');

//console.log(this.currentOrder.charges.items);
this.$store.state
//console.log(this.$store.state);
      this.currentOrder.charges.items = []
      
      if(this.$store.state.loggedIn){
        if(this.currentOrder.fulfillment_info.customer && this.user.user){
        this.currentOrder.fulfillment_info.customer.email = this.user.user.email
        }
      }

    if(this.title === 'Mamnoon'){
        let storeMamnoon = this.currentOrder
        this.$store.commit("upserveOrderCurrentOrderUpdateMamnoon", { storeMamnoon });	


        // let storeMamnoonTesting = this.currentOrder
        // this.$store.commit("upserveOrderCurrentOrderUpdateMamnoonTesting", { storeMamnoonTesting });	

    }else if(this.title === 'Mamnoon Street'){
        let storeStreet = this.currentOrder
        this.$store.commit("upserveOrderCurrentOrderUpdateStreet", { storeStreet });	
    }



    },
    resetCart(){

    },
addTimes (startTime, endTime) {
  var times = [ 0, 0, 0 ]
  var max = times.length

  var a = (startTime || '').split(':')
  var b = (endTime || '').split(':')

  // normalize time values
  for (var i = 0; i < max; i++) {
    a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
    b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
  }

  // store time values
  for (var i = 0; i < max; i++) {
    times[i] = a[i] + b[i]
  }

  var hours = times[0]
  var minutes = times[1]
  var seconds = times[2]

  if (seconds >= 60) {
    var m = (seconds / 60) << 0
    minutes += m
    seconds -= 60 * m
  }

  if (minutes >= 60) {
    var h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h
  }

  return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
},
preOrderToggle(c){

this.preOrderToggleState = c


if(c === true){
      this.currentOrder.preorder = true

}else{

  this.changedToDropdown = false;
  this.currentOrder.preorder = false
  this.selectedTime, this.selectedDate = null


}

},
    async upserves() {

      let responseUpserve = await this.$http.get(this.menuEndpoint);
// console.log(responseUpserve)


console.log(this.menuEndpoint);
if(responseUpserve.data.body){
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;

      this.upserveTaxRate = Number(responseUpserve.data.body.tax_rates.filter(x=>x.name === "Sales Tax")[0].percentage_rate)

      this.modifierGroups = responseUpserve.data.body.modifier_groups;
      this.modifiers = responseUpserve.data.body.modifiers;
      this.modifierItems = responseUpserve.data.body.modifiers;
    }
    },
async upserveMongo(){


// console.log('upserveMongo');
// console.log('upserveMongo');
// console.log('upserveMongo');

      let self = this
      let responseUpserve = await this.$http.get(`product/upserve_mongo/${self.title.toLowerCase().replace(' ','')}`);


if(responseUpserve.data.doc[0].menu){

      let upserveProducts = responseUpserve.data.doc[0].menu.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.doc[0].menu.sections;

      this.upserveTaxRate = Number(responseUpserve.data.doc[0].menu.tax_rates.filter(x=>x.name === "Sales Tax")[0].percentage_rate)

      this.modifierGroups = responseUpserve.data.doc[0].menu.modifier_groups;
      this.modifiers =responseUpserve.data.doc[0].menu.modifiers;
      this.modifierItems = responseUpserve.data.doc[0].menu.modifiers;
}
},
  async getPackageHours(){

      // console.log('get packages hour');


    let self = this
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.hours = AcfBlock.data.acf.content_fields.find(o => o.acf_fc_layout === 'timeranges');   


    this.currentRestaurantHours = this.hours.restaurant_hours[0].restaurant_name.find(o => o.name === this.title.toLowerCase());
    this.openDays = this.currentRestaurantHours.information.days_of_week
    let curRest = this.currentRestaurantHours.information.open_time_range

    this.dates_additional_information = this.currentRestaurantHours.information.additional_information





// console.log('this.currentRestaurantHours');
// console.log(this.currentRestaurantHours);



// console.log('this.openDays');
// console.log(this.openDays);


// console.log('this.dates_additional_information');
// console.log(this.dates_additional_information);


// console.log('curRest.length');
// console.log(curRest.length);
    for(let i = 0; i < curRest.length; i++){


      // console.log(curRest[i].time_slot.open.split(':')[0]);
      // console.log(curRest[i].time_slot.close.split(':')[0]);
         








let startTimeString = location.search.substring(1).split('&')[3].replace('startTime=','').split('%3A')[0];
let endTimeString = location.search.substring(1).split('&')[4].replace('endTime=','').split('%3A')[0];



// **get before and end time from packages object **

                  this.showTimeInterVals(startTimeString,endTimeString)
    }


  let today = new Date()
  let todayDay = today.getDay()

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let subdays = days.map(function(x){
    return x.substring(0,3).toLowerCase()
  })

if(this.openDays.includes(subdays[todayDay].substring(0,3).toLowerCase())){
    for(let i = 0; i < curRest.length; i++){
      if(self.returnAvailableNow(curRest[i].time_slot.open,curRest[i].time_slot.close)){
        this.valid = true
        this.currentOrder.preorder = false
        break
        }else{
      this.currentOrder.preorder = true
    }
}
}else{
      this.currentOrder.preorder = true
}

},
  async getHours(){


    let self = this
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.hours = AcfBlock.data.acf.content_fields.find(o => o.acf_fc_layout === 'timeranges');   


    this.currentRestaurantHours = this.hours.restaurant_hours[0].restaurant_name.find(o => o.name === this.title.toLowerCase());




    // console.log(this.currentRestaurantHours);
    // console.log(this.currentRestaurantHours);
    // console.log(this.currentRestaurantHours);
    // console.log(this.currentRestaurantHours);
    // console.log(this.currentRestaurantHours);
    this.openDays = this.currentRestaurantHours.information.days_of_week
    let curRest = this.currentRestaurantHours.information.open_time_range


// console.log(curRest);

    this.dates_additional_information = this.currentRestaurantHours.information.additional_information


    for(let i = 0; i < curRest.length; i++){
      // console.log(curRest[i].time_slot.open.split(':')[0]);
      // console.log(curRest[i].time_slot.close.split(':')[0]);
          this.showTimeInterVals(curRest[i].time_slot.open.split(':')[0],curRest[i].time_slot.close.split(':')[0])
    }


  let today = new Date()
  let todayDay = today.getDay()
  // console.log('todayDay');
  // console.log(todayDay);
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let subdays = days.map(function(x){
    return x.substring(0,3).toLowerCase()
  })

if(this.openDays.includes(subdays[todayDay].substring(0,3).toLowerCase())){
    for(let i = 0; i < curRest.length; i++){
      if(self.returnAvailableNow(curRest[i].time_slot.open,curRest[i].time_slot.close)){
        this.valid = true
        this.currentOrder.preorder = false
        break
        }else{
      this.currentOrder.preorder = true

    }
}
}else{
      this.currentOrder.preorder = true

}



},
       currentlyAvailable2(startTime,endTime,rules,futureDay,futureTime){




    let weekday = ['mon','tue','wed','thu','fri','sat','sun']

            if(!futureDay && !futureTime){
                let currentDate = new Date();   
                let startDate = new Date(currentDate.getTime());

                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);

                if(rules.includes(weekday[currentDate.getDay()])){
                    return startDate < currentDate && endDate > currentDate
                }
            }

    if(futureDay && !futureTime){
      if(rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())){
        return true
      }
    }
    if(futureDay && futureTime){

    let currentDate = Date.parse(futureTime.time) 
    let startDate2 = new Date(currentDate);
    let startDate3 = moment(startDate2)._i
    startDate3.setHours(startTime.split(":")[0]);
    startDate3.setMinutes(startTime.split(":")[1]);
    let endDate2 = new Date(currentDate);
    let endDate3 = moment(endDate2)._i
    endDate3.setHours(endTime.split(":")[0]);
    endDate3.setMinutes(endTime.split(":")[1]);
    let validTime = startDate3 < currentDate && endDate3 > currentDate
    let validDay = rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())

    if(validTime && validDay){
      return true
    }else{
      return false
    }
}


},
currentlyAvailable(futureDay,futureTime,name,item){


if(!item.timing_mask){
  return true
}else{





let startTime = item.timing_mask.start_time;
let endTime = item.timing_mask.end_time;
let rules = item.timing_mask.rules;






    let weekday = ['mon','tue','wed','thu','fri','sat','sun']
            if(!futureDay && !futureTime){
                let currentDate = new Date();   
                let startDate = new Date(currentDate.getTime());

                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);

                if(rules.includes(weekday[currentDate.getDay()])){
                    return startDate < currentDate && endDate > currentDate
                }
            }

    if(futureDay && !futureTime){
      if(rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())){
        return true
      }
    }
    if(futureDay && futureTime){

    let currentDate = Date.parse(futureTime.time) 
    let startDate2 = new Date(currentDate);
    let startDate3 = moment(startDate2)._i
    startDate3.setHours(startTime.split(":")[0]);
    startDate3.setMinutes(startTime.split(":")[1]);
    let endDate2 = new Date(currentDate);
    let endDate3 = moment(endDate2)._i
    endDate3.setHours(endTime.split(":")[0]);
    endDate3.setMinutes(endTime.split(":")[1]);
    let validTime = startDate3 < currentDate && endDate3 > currentDate
    let validDay = rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())



    if(validTime && validDay){

// console.log('is showing up: '+name);

if(name=== 'Lunch Wraps To Go'){
// console.log('here');

// console.log(futureDay)
// console.log(futureTime)
// // console.log(name)
// console.log(item)


}





      return true
    }else{

// console.log(name);
// console.log('not showing up: '+name);

      return false
    }
}


}

},
isBetween(startTime,endTime,proposedTime){


var format = 'HH:mm'
// var time = moment() gives you current time. no format required.
var time = moment(proposedTime,format),
  beforeTime = moment(startTime, format).subtract(1, 'seconds'),
  afterTime = moment(endTime, format).add(1, 'seconds');


  // console.log(time,beforeTime,afterTime)
if (time.isBetween(beforeTime, afterTime)) {
  // console.log(true)
  return true
} else {
  //  console.log(false)
  return false
}


},
returnAvailableNow(startTime,endTime){


let adjustedEndTime = moment().set('hour', endTime.split(":")[0]).set('minute', endTime.split(":")[1]).set('second', endTime.split(":")[2]).subtract(30,'minutes');


let endTimeTrimmed = adjustedEndTime.format('LTS').split(' ')[0];


// console.log(moment(endTime).subtract('minutes',30));


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
              // endDate.setHours(endTimeTrimmed.split(":")[0]);
              // endDate.setMinutes(endTimeTrimmed.split(":")[1]);
              // endDate.setSeconds(endTimeTrimmed.split(":")[2]);




              let tF = startDate < currentDate && endDate > currentDate
              // this.valid = startDate < currentDate && endDate > currentDate
              return tF

              }

    },
hideGiftCard(){
  this.giftCardPanel = false
},
showGiftCard(){
  this.giftCardPanel = true
},
            getUser() {

            if(this.emailAddress){
 
              let self = this
              this.$http.get(`/user/email/${this.emailAddress}`).then(function (response) {
              let userInfo = response.data;

              self.user = userInfo
              self.cardNumberInput = userInfo.user.giftcard
              self.preferredGiftCard = userInfo.user.giftcard
              
// console.log(self.currentOrder.billing)

if(self.currentOrder.billing && userInfo.user.billingAddress){

              self.currentOrder.billing.billing_name = userInfo.user.billingAddress.name
              self.currentOrder.billing.billing_address = userInfo.user.billingAddress.addressLine1 + ' ' + userInfo.user.billingAddress.addressLine2
              self.currentOrder.billing.billing_postal_code = userInfo.user.billingAddress.zip

              self.currentOrder.billing.billing_address_city = userInfo.user.billingAddress.city;
              self.currentOrder.billing.billing_address_state = userInfo.user.billingAddress.state;






              self.currentOrder.fulfillment_info.customer.phone = userInfo.user.deliveryAddress.phone
              self.currentOrder.fulfillment_info.customer.first_name = userInfo.user.deliveryAddress.first_name
              self.currentOrder.fulfillment_info.customer.last_name = userInfo.user.deliveryAddress.last_name
              self.currentOrder.fulfillment_info.delivery_info.address.city = userInfo.user.deliveryAddress.city
              self.currentOrder.fulfillment_info.delivery_info.address.state = userInfo.user.deliveryAddress.state
              self.currentOrder.fulfillment_info.delivery_info.address.zip_code = userInfo.user.deliveryAddress.zip
              self.currentOrder.fulfillment_info.delivery_info.address.address_line1 = userInfo.user.deliveryAddress.addressLine1
              self.currentOrder.fulfillment_info.delivery_info.address.address_line2 = userInfo.user.deliveryAddress.addressLine2
              }
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

// console.log(giftcardLookup.data);
      if(giftcardResponse.resSendData.Responses[0].SvInquiry[0].ErrorID[0] === "10001"){
          this.validNumber = false
      }else{
             this.validNumber = true
      }
      this.currentBalance =
        giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0];

// console.log(giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0]);

    },
giftCardPreFlight(){

let self = this;
 this.$swal({ 
    title: "confirm giftcard transaction?",
    showDenyButton: true,
    confirmButtonText: `Confirm`
  }).then((confirmed) => {
    if (confirmed) {
    if(confirmed.isConfirmed){
          this.disabledGiftCardButton = true;
          self.useGiftCardBalance()
      }
    }
    });
},
    useGiftCardBalance() {
      let self = this;
      // first check if the balance is available
      // console.log('use balance')
      this.$http
        .post("/user/lookupgiftcard", {
          cardNumber: self.cardNumberInput
        })
        .then(function (response) {
      let balanceCheck
    if(self.title === 'Mamnoon'){
      balanceCheck = self.$store.state.storeMamnoon.charges.total.toFixed(2)/100
    }else if(self.title === 'Mamnoon Street'){
      balanceCheck = self.$store.state.storeStreet.charges.total.toFixed(2)/100
    }   
          
          if (
            Number(
              response.data.resSendData.Responses[0].SvInquiry[0]
                .CurrentBalance[0]
            ) >= balanceCheck
          ) {


console.log(JSON.stringify(self.cardNumberInput))
console.log(JSON.stringify(balanceCheck))
            self.showInsufficientFunds = false;
            self.$http
              .post("/user/usegiftcard", {
                cardNumber: self.cardNumberInput,
                useAmount: JSON.stringify(balanceCheck)
              })
              .then(function (response) {
console.log('response after giftcard')
console.log(response)

                     
                self.currentBalance =
                  response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0];
                  






    if(self.title === 'Mamnoon'){
    console.log(self.$store.state.storeMamnoon)
                    if(self.$store.state.storeMamnoon.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeMamnoon,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
        
               if(self.$store.state.storeMamnoon.preorder === false){
                  self.doAnOrder(self.$store.state.storeMamnoon,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
    
    
    }else if(self.title === 'Mamnoon Street'){
    
                     if(self.$store.state.storeStreet.preorder === true){
                  self.scheduleAnOrder(self.$store.state.storeStreet,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
                
                
               if(self.$store.state.storeStreet.preorder === false){
                  self.doAnOrder(self.$store.state.storeStreet,response.data.resSendData,response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0]);
                }
    
    
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
console.log(info)
// alert(info)
if(info === 'yourOrder'){
this.panelShow = 'yourOrder'
}else if(info === 'customerInfo'){
this.panelShow = 'customerInfo'
}else{

}




   if(this.title === 'Mamnoon'){

       if(this.$store.state.storeMamnoon.fulfillment_info.customer.email !== ''){
       }
     


    }
    if(this.title === 'Mamnoon Street'){
      if(this.$store.state.storeStreet.fulfillment_info.customer.email !== ''){
       }   
              
      
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
           


 this.$swal({ 
    title: "Name required."
  });

      }

      if (!this.currentOrder.fulfillment_info.customer.phone) {
        this.errors.push("Phone required.");


 this.$swal({ 
    title: "Phone required."
  });


  
      }
      
      if (!this.currentOrder.fulfillment_info.customer.email) {
        this.errors.push('Email required.');
    
       this.$swal({ 
            title: "Valid email required."
          });



      } else if (!this.validEmail(this.currentOrder.fulfillment_info.customer.email)) {
        this.errors.push('Valid email required.');
    
    this.$swal({ 
            title: "Valid email required."
          });
      }

      if (!this.currentOrder.billing.billing_postal_code) {
        this.errors.push('invalid zip code');
    
       this.$swal({ 
            title: "invalid zip code"
          });

      } else if (!this.validPostal(this.currentOrder.billing.billing_postal_code)) {
         this.errors.push('invalid zip code');
      this.$swal({ 
            title: "invalid zip code"
          });
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
removeAttention(){
this.attention = false
},
    toggleDrawer(){
this.toggledDrawer = !this.toggledDrawer
    },
setTip(index) {



this.currentOrder.tipSelected = index



this.tipSelected = index

if(index === 0){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 1){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 2){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 3){
  this.showingCustom(false)
  this.customTipVisible = false
}else if(index === 4){
  this.showingCustom(true)
  this.customTipVisible = true
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
      this.$store.commit("googleAddress", { googleAddress });
    },


        cippaybutton() {
      // this.checkForm()
      let self = this;
      this.getToken().then(function (transactionToken) {
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            // console.log("Approval Data", approvalData);
            emergepay.close();

console.log('transasction success')
   if(self.title === 'Mamnoon'){

              if(self.$store.state.storeMamnoon.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeMamnoon,approvalData,null);
              }
              
              if(self.$store.state.storeMamnoon.preorder === false){
                self.doAnOrder(self.$store.state.storeMamnoon,approvalData,null);
              }



    }else if(self.title === 'Mamnoon Street'){


              if(self.$store.state.storeStreet.preorder === true){
                self.scheduleAnOrder(self.$store.state.storeStreet,approvalData,null);
              }
              
              if(self.$store.state.storeStreet.preorder === false){
                self.doAnOrder(self.$store.state.storeStreet,approvalData,null);
              }



    }









          
          },
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);

            // console.log('transasction success')

          },
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });
      });
    },
    getToken() {
      let self = this;
      let dataToSend
   if(self.title === 'Mamnoon'){
      dataToSend = self.$store.state.storeMamnoon
    }else if(self.title === 'Mamnoon Street'){
      dataToSend = self.$store.state.storeStreet
    }
// added 
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: `${self.$http.defaults.baseURL}/order/start-auth`,
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(dataToSend),
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
    addAddOnOne(mod, modifieritem) {


      let modAddition = {
        id: mod.id,
        modifier_group_id: modifieritem,
        price: mod.price_cents,
        name: mod.name
      };

      this.currentItemModifierArray.push(modAddition);
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)



      if(document.getElementById("add-" + mod.id)){
        document.getElementById("add-" + mod.id).disabled = true;
      }
      if(document.getElementById("remove-" + mod.id)){
        document.getElementById("remove-" + mod.id).disabled = false;
      }


console.log(this.currentItemModifierArray);
console.log(this.currentItem.price_cents);

    },
    removeAddOnOne(mod, modifieritem) {



let updatedItems = this.currentItemModifierArray.filter(
        (item) => item.id !== mod.id
      );
      this.currentItemModifierArray = updatedItems;
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)


      if(document.getElementById("add-" + mod.id)){
      document.getElementById("add-" + mod.id).disabled = false;
      }
       if(document.getElementById("remove-" + mod.id)){
      document.getElementById("remove-" + mod.id).disabled = true;
       }

},
toggleAddOn(mod,modifieritem){



let element = document.getElementById("toggle-" + mod.id)

if(element.classList.contains('selectedAddOn')){
element.classList.remove('selectedAddOn');
this.removeAddOn(mod, modifieritem);
}else{
element.classList.add('selectedAddOn');

this.addAddOn(mod, modifieritem);



}


},
addAddOn(mod, modifieritem) {


      let modAddition = {
        id: mod.id,
        modifier_group_id: modifieritem,
        price: mod.price_cents,
        name: mod.name
      };

      this.currentItemModifierArray.push(modAddition)
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)


      if(document.getElementById("add-" + mod.id)){
        document.getElementById("add-" + mod.id).disabled = true;
      }
      if(document.getElementById("remove-" + mod.id)){
        document.getElementById("remove-" + mod.id).disabled = false;
      }

    },
    removeAddOn(mod, modifieritem) {



let updatedItems = this.currentItemModifierArray.filter(
        (item) => item.id !== mod.id
      );
      this.currentItemModifierArray = updatedItems;
      this.currentItem.price_cents = Number(this.currentItem.price_cents);
      // this.currentItem.price_cents = Number(this.currentItem.price_cents)


      if(document.getElementById("add-" + mod.id)){
      document.getElementById("add-" + mod.id).disabled = false;
      }
       if(document.getElementById("remove-" + mod.id)){
      document.getElementById("remove-" + mod.id).disabled = true;
       }

},
    removeFromOrderDontCloseModal(removal) {

    document.getElementById("add-" + removal.id).disabled = false;
    document.getElementById("remove-" + removal.id).disabled = true;

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

      this.currentOrder.charges.items = concatenated;

      let removeCost = removal.price_cents;

      this.total = this.total - removeCost;

      // let storeCurrentOrder = this.currentOrder;






    },
removeFromOrder(removal) {
      let currentItems = this.currentOrder.charges.items;
      let updatedItems = currentItems.filter(
        (item) => item.cartId !== removal.cartId
      );

      this.currentOrder.charges.items = updatedItems;
      let removeCost = removal.price * removal.quantity;
      // this.total = this.total - removeCost;
      this.currentOrder.charges.total = this.currentOrder.charges.total - removeCost;
      let storeCurrentOrder = this.currentOrder;


      // this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
    },
    incrementCurrentItem() {
      this.currentItemQuantity++;
    },
    decrementCurrentItem() {
      this.currentItemQuantity--;
    },
    closeModal() {
      this.modalOpen = false;
      this.modal2Open = false;
      this.currentItem = null;
      this.currentItemQuantity = 1;
      this.textdescription = "";
      this.packageObjectMaximum = null;
      this.packageOrderDate = null;
      this.currentItemModifierArray = [];


      document.documentElement.style.overflow = 'auto'
    },
    closeConfirmationModal() {
      this.orderConfirmationModal = false;
      this.orderCMR = "";
    },
    openModal(serve,timing_mask,packageObject) {
// console.log(timing_mask);

// console.log(packageObject);
      let current = Object.assign({}, serve);
      current.timing_mask = timing_mask

      // console.log(current.modifier_group_ids)



if(current.modifier_group_ids){
      this.currentModifiers = current.modifier_group_ids.map(function(x){
        return { name: x,
                selected: false,
                option: null,
                price: 0
              }
      })

    }else{
     this.currentModifiers = [];
    }
      this.modalOpen = true;
      this.currentItem = current;


      if(packageObject){
        if(packageObject.number){
          this.packageObjectMaximum = packageObject.number;

          // console.log(packageObject.number);
        }

        if(packageObject.orderDate){
          this.packageOrderDate = packageObject.orderDate;
        }

    }

 document.documentElement.style.overflow = 'hidden'

    },
        openModal2(serve) {

      let current = Object.assign({}, serve);

  
      this.currentModifiers = current.modifier_group_ids.map(function(x){
        return { name: x,
                selected: false,
                option: null,
                price: 0
              }
      })


  
for(let i = 0;i<current.modifiers.length;i++){
console.log(i);
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === current.modifiers[i].modifier_group_id)].option = current.modifiers[i].id
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === current.modifiers[i].modifier_group_id)].selected = true
        this.currentModifiers[this.currentModifiers.findIndex(p => p.name === current.modifiers[i].modifier_group_id)].price = current.modifiers[i].price


};



console.log('this.currentModifiers')
this.currentItemModifierArray = current.modifiers;


console.log('currentModifiers adjusted');
console.log(this.currentModifiers);
    let priceAdjustment = 0;
    for(let i in current.modifiers){
      priceAdjustment = priceAdjustment + current.modifiers[i].price;
    };


      if(this.currentModifiers.every( (val, i, arr) => val.selected === true ) ){
          this.allOptionsSelected = true
        }else{
          this.allOptionsSelected = false
        }
   

current.price = current.price + priceAdjustment;


      this.modal2Open = true;
      this.currentItem = current;
this.textdescription = this.currentItem.instructions;


this.currentItemQuantity = this.currentItem.quantity;

 document.documentElement.style.overflow = 'hidden'

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
    addToAllItemsToOrder(items){
      this.reOrder = this.$store.state.storeCurrentOrder;
      // let self = this
      // items.forEach(function(x){
      //   self.addToOrderFromReorder(x)
      // });

      this.emptyReOrderObject()

    },
    addToOrderFromReorder(item) {

      console.log(item)
      let modifierPriceTotal = 0;
      for (let i = 0; i < item.modifiers.length; i++) {
        modifierPriceTotal =
          modifierPriceTotal + item.modifiers[i].price;
      }

      let itemToAdd = {
        name: item.name,
        cartId:
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29) +
          "_" +
          Math.random().toString(36).substr(2, 29),
        item_id: item.item_id,
        price: item.price_cents,
        price_cents: item.price_cents,
        instructions: item.instructions,
        modifiers: item.modifiers,
        quantity: item.quantity,
        sides: item.sides,
        timing_mask: item.timing_mask,
        images: item.images ? item.images : '',

      };

          // console.log(this.currentOrder)
          this.currentOrder.charges.items.push(itemToAdd);

          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          
          //this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          if(this.selectedTime){
            this.currentOrder.fulfillment_info.estimated_fulfillment_time = this.selectedTime.time;
          }else{
          // this.currentOrder.fulfillment_info.estimated_fulfillment_time = moment(newDate).add(20,'minutes');
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          }


          // this.currentItemModifierArray = [];
          // this.allOptionsSelected = false
          

    },
    addToOrder(item) {

    console.log('specificDate');

      // console.log(item)
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
        quantity: this.currentItemQuantity,
        instructions: this.textdescription,
        modifiers: this.currentItemModifierArray,
        modifier_group_ids: item.modifier_group_ids,
        sides: [],
        timing_mask: item.timing_mask,
        images: item.images ? item.images : '',
        item_object: item
      };

    
// console.log(this.currentOrder.charges.items.length);


    console.log(`this store current order`, this.$store.state)



// if(this.currentOrder.charges.items.length === 0){
// // if(this.findWithAttr(this.currentOrder.charges.items, item.name) === -1 || this.findWithInstructions(this.currentOrder.charges.items, this.textdescription) === -1 || this.findWithModifiers(this.currentOrder.charges.items, this.currentItemModifierArray) === -1){
//   // console.log('one attribute previously non existent. add to list.')
//   this.currentOrder.charges.items.push(itemToAdd);
// // }
// }else{
// console.log(this.searchForItem(item.name,this.textdescription,this.currentItemModifierArray));
// if(this.searchForItem(item.name,this.textdescription,this.currentItemModifierArray) === 'add'){
// this.currentOrder.charges.items.push(itemToAdd);
// }
// }


console.log(item);


function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}

// console.log(itemFilter.modifiers);
console.log(this.currentItemModifierArray);
// console.log(arraysEqual(itemFilter.modifiers, this.currentItemModifierArray));

let result = this.currentOrder.charges.items.filter(itemFilter => itemFilter.name === item.name && itemFilter.instructions === this.textdescription && arraysEqual(itemFilter.modifiers, this.currentItemModifierArray));
console.log(result[0]);




if(result.length > 0){

var elementPos = this.currentOrder.charges.items.map(function(x) {return x.cartId; }).indexOf(result[0].cartId);
this.currentOrder.charges.items[elementPos].quantity = this.currentOrder.charges.items[elementPos].quantity + this.currentItemQuantity;

  
}else{
this.currentOrder.charges.items.push(itemToAdd);
}








  

          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
          // this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;


          if(this.selectedTime){
            this.currentOrder.fulfillment_info.estimated_fulfillment_time = this.selectedTime.time;
          }else{
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
                //  this.currentOrder.fulfillment_info.estimated_fulfillment_time = moment(newDate).add(20,'minutes');
          
          }





          this.currentItemModifierArray = [];
          this.allOptionsSelected = false
          this.closeModal();


    },
    updateOrderItem(item) {

    console.log('specificDate');

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
        quantity: this.currentItemQuantity,
        instructions: this.textdescription,
        modifiers: this.currentItemModifierArray,
        modifier_group_ids: item.modifier_group_ids,
        sides: [],
        timing_mask: item.timing_mask,
        images: item.images ? item.images : '',
        item_object: item
      };



var elementPos = this.currentOrder.charges.items.map(function(x) {return x.cartId; }).indexOf(item.cartId);
var objectFound =this.currentOrder.charges.items[elementPos]


// console.log(objectFound);
  // this.currentOrder.charges.items.push(itemToAdd);


this.currentOrder.charges.items[elementPos] = itemToAdd;

  
          let newDate = new Date();
          this.currentOrder.time_placed = newDate;
         // this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;


          if(this.selectedTime){
            this.currentOrder.fulfillment_info.estimated_fulfillment_time = this.selectedTime.time;
          }else{
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
          // this.currentOrder.fulfillment_info.estimated_fulfillment_time = moment(newDate).add(20,'minutes');


          }

          this.currentItemModifierArray = [];
          this.allOptionsSelected = false
          this.closeModal();
    },
    searchForItem(name, instructions, currentItemModifierArray){



let searchResult = {
name: -1,
instructions: -1,
modifiers: -1,
simple: false
}

    for(var i = 0; i < this.currentOrder.charges.items.length; i += 1) {
        if(this.currentOrder.charges.items[i].name === name) {
            // return i;
            // ins = i;
            // console.log('index of name '+ i);
            searchResult.name = i;
        }
    }

if(currentItemModifierArray.length === 0 && instructions === ''){
searchResult.simple = true;
console.log(searchResult);
return searchResult;
}else{
console.log(this.currentOrder.charges.items);

    for(var i = 0; i < this.currentOrder.charges.items.length; i += 1) {
        if(this.currentOrder.charges.items[i].instructions === instructions) {
            // return i;
            // ins = i;

            console.log('index of instructions '+ i);
            searchResult.instructions = i;
        }
    }



function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}


    for(var i = 0; i < this.currentOrder.charges.items.length; i += 1) {
        if(arraysEqual(this.currentOrder.charges.items[i].modifiers, currentItemModifierArray)) {
          // ins = i;
          // console.log(i);
          // return i;
          console.log('modifiers '+ i);
          searchResult.modifiers = i;
        }
    }






if(searchResult.instructions === -1 ||searchResult.modifiers === -1){
  console.log(searchResult);
  console.log('add');
  return 'add';
}else{
return searchResult;
}

// if(searchResult.name === searchResult.instructions && searchResult.instructions === searchResult.modifiers){
// console.log('all three match so add to the index');
// }else{
//  console.log('all three dont match so add to the index'); 
// }




}





// return searchResult;
// console.log(searchResult);

    },
    addToOrderDontCloseModal(item) {

      document.getElementById("add-" + item.id).disabled = true;
      document.getElementById("remove-" + item.id).disabled = false;

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
        quantity: this.currentItemQuantity,
        instructions: this.textdescription,
        modifiers: this.currentItemModifierArray,
        sides: [],
        timing_mask: item.timing_mask,
        item_object: item
      };

        this.currentOrder.charges.items.push(itemToAdd);

          this.total =
            Number(this.total) + Number(item.price_cents * this.currentItemQuantity);

          let newDate = new Date();
          this.currentOrder.time_placed = newDate;

          // this.currentOrder.time_placed = moment(newDate).add(20,'minutes');

         // this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;

          if(this.selectedTime){
            this.currentOrder.fulfillment_info.estimated_fulfillment_time = this.selectedTime.time;
          }else{
          this.currentOrder.fulfillment_info.estimated_fulfillment_time = newDate;
        // this.currentOrder.fulfillment_info.estimated_fulfillment_time = moment(newDate).add(20,'minutes');

          
          }


          //then close the modal
          this.currentItemModifierArray = [];
          
          // let storeCurrentOrder = this.currentOrder;

  


      // this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
    },
    filterByCat(cat) {
      this.currentlyFiltered = [];
      for (let i = 0; i < this.upserve.length; i++) {
        if (this.upserve[i].category === cat) {
          this.currentlyFiltered.push(this.upserve[i]);
        } 
      }
    },
    scheduleAnOrder(currentOrder,approvalData,giftcardbalance) {


console.log(currentOrder);


if(currentOrder.fulfillment_info.customer.first_name.substring(0,3) !== "nx "){



currentOrder.fulfillment_info.customer.first_name = 'nx ' + currentOrder.fulfillment_info.customer.first_name;


console.log(approvalData);
console.log(giftcardbalance);

      let self = this;
      this.$http.post("/confirmationemail",currentOrder)
      .then((response) => {
          console.log('confirmation email sent')










// begin add to mongo

    let infoForPay = {
          payInfo: null,
          orderInfo: currentOrder
        }

        if(approvalData.data){
          infoForPay.payInfo = approvalData.data;

        }else{
         infoForPay.payInfo = approvalData; 
        }

        console.log(infoForPay, " info for pay");

    let infoForPayStringify = infoForPay      
     this.$http
        .post("/order/addorder", infoForPayStringify)
        .then((response) => {

          // decrement if match

          self.decrementIfMatch(self.currentOrder);

          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = currentOrder;
          let orderCMR = currentOrder;
          orderCMR.giftcardbalance = giftcardbalance

          self.currentOrder = self.$store.state.storeOrderUpdate
          self.emptyCart();


        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });

// end add to mongo

      }).catch((e) => {
          console.log("errors");
          console.log(e);
        });


    }

      },
      doAnOrder(currentOrder,approvalData,giftcardbalance) {



if(currentOrder.fulfillment_info.customer.first_name.substring(0,3) !== "nx "){

          currentOrder.fulfillment_info.customer.first_name = "nx " + currentOrder.fulfillment_info.customer.first_name;





        console.log("approval data" + approvalData);
      console.log('do an order')
      let self = this;
      console.log('this.oloEndpoint');
      console.log(this.oloEndpoint);
      // console.log(currentOrder)


// currentOrder.fulfillment_info.estimated_fulfillment_time = new Date();
  // console.log(moment().add(15, 'minutes'));



currentOrder.fulfillment_info.estimated_fulfillment_time = moment().add(20, 'minutes').format();


      this.$http.post(this.oloEndpoint, currentOrder).then((response) => {


    console.log(response);


        if(response.data.error?.status === 400){
             self.unableToProcessModal = true;
  console.log(response);
      }else{


   



    console.log('response happen');
          console.log(response);
          self.orderConfirmationModal = true;
          self.giftcardbalance = giftcardbalance
          self.orderCMR = response.data;
          let orderCMR = response.data;
          console.log(response.data)
          orderCMR.giftcardbalance = giftcardbalance
     

  
                  // add to mongo

                    let infoForPay = {
                          payInfo: null,
                          orderInfo: currentOrder
                        }



                      if(approvalData.data){
                        infoForPay.payInfo = approvalData.data;
                      }else{
                      infoForPay.payInfo = approvalData; 
                      }






                      let infoForPayStringify = infoForPay      
                      this.$http
                          .post("/order/addorder", infoForPayStringify)
                          .then((response) => {
                            console.log(response);
                            console.log('add to mongo emerge pay front end')


                              self.emptyCart();

                          })
                          .catch((e) => {
                            console.log("errors");
                            console.log(e);
                          });

                  //end add to mongo


      }

   

        }).catch((e) => {
          console.log("errors");
          console.log(e);

          console.log('unabeltoprocess modal now')
          console.log('unabeltoprocess modal now')
          console.log('unabeltoprocess modal now')
          console.log('unabeltoprocess modal now')


self.unableToProcessModal = true;

        });

        }

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




if(this.packageLink){

// console.log(endTime);
// console.log(endTime+1);

let timeToEnd = parseInt(endTime);

for (var hour = startTime; hour <= timeToEnd; hour++) {

  items.push([parseInt(hour), 0]);

  if(hour != timeToEnd){
  items.push([parseInt(hour), 15]);
  items.push([parseInt(hour), 30]);
  items.push([parseInt(hour), 45]);

  }

}
}

let timeToEnd = parseInt(endTime);

for (var hour = startTime; hour <= timeToEnd; hour++) {



  items.push([parseInt(hour), 0]);
  
   if(hour != timeToEnd){
  items.push([parseInt(hour), 15]);
  items.push([parseInt(hour), 30]);
  items.push([parseInt(hour), 45]);
   }
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

// console.log('this.openTimes.concat(items)');
// console.log(this.openTimes.concat(items));


this.openTimes = this.openTimes.concat(items)

},
filterForNow(){
// console.log('rrrr');

let today = new Date()
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let subdays = days.map(function(x){
return x.substring(0,3).toLowerCase()
})

let self2 = this
let tFs = subdays.map(function(x){
return self2.openDays.includes(x)
})


this.tFs = tFs;

let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 0)

let timeslotsCreated = [];
// console.log(this.openTimesUpdated)
for(let i = 1; i < this.openTimesUpdated.length; i++){ 
timeslotsCreated.push({
time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
})
} 
let createdItem = {
dayLabel: days[tomorrow.getDay()],
dayName: days[tomorrow.getDay()],
closed: false,
dateData: days[tomorrow.getDay()] + moment(String(tomorrow)).format(' MMM Do'),
dateFormatted: tomorrow.toISOString().slice(0,10),
timeslots: timeslotsCreated.slice(2),
time: {
// time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
time: new Date(),
timelabel: new Date().toLocaleTimeString().replace(":00","")
}
}



let createdTime = {
// time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
time: new Date(),
timelabel: new Date().toLocaleTimeString().replace(":00","")
}


this.nowTime = createdTime
this.nowDate = createdItem



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


this.tFs = tFs;


// console.log(window.location);
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get('packageId');

// console.log(window.location);
const endDate = urlParams.get('endDate');


// console.log(location.search.substring(1).split('&'));

// console.log('endDate');
// console.log(endDate);
// console.log(endDate);
// console.log(endDate);




if(product !== null){

   let tomorrow = new Date(today)
          tomorrow.setDate(tomorrow.getDate())
      let timeslotsCreated = [];



            for(let i = 0; i < this.openTimesUpdated.length; i++){ 
              timeslotsCreated.push({
              time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
              timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 



let dateString = location.search.substring(1).split('&')[0]
let endDateString2 = location.search.substring(1).split('&')[2].replace('endDate=','');


// console.log('enumerate through these');
// console.log(dateString);
// console.log(endDateString2);
// console.log(this.enumerateDaysBetweenDates(dateString,endDateString2));
// console.log(timeslotsCreated);


let timeslotsCreatedNoDuplicates = timeslotsCreated.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.timelabel === value.timelabel
  ))
)


let datesToAddList = this.enumerateDaysBetweenDates(dateString,endDateString2);





console.log(datesToAdd);

let datesToAdd = datesToAddList.map(function(x){
  return moment(x).format();
})



console.log(datesToAdd);



if(dateString === endDateString2){

let testArray = [];
            for(let x = 0; x < this.openTimesUpdated.length; x++){ 
              testArray.push({
              time: new Date(datesToAddList[0].setHours(this.openTimesUpdated[x][0], this.openTimesUpdated[x][1], 0, 0)),
              timelabel: new Date(datesToAddList[0].setHours(this.openTimesUpdated[x][0], this.openTimesUpdated[x][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 


let timeslotsCreatedNoDuplicates2 = testArray.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.timelabel === value.timelabel
  ))
)





            this.dropDownDays.push({
            dayLabel: moment(datesToAdd[0]).format('dddd').substring(0,3).toLowerCase(),
            dayName: moment(datesToAdd[0]).format('dddd'),
            closed: !this.tFs[moment(datesToAdd[0]).day()],
            dateData: moment(datesToAdd[0]).format('dddd') + ', ' + moment(datesToAdd[0]).format("MMM Do"),
            dateFormatted: datesToAdd[0],
            timeslots: timeslotsCreatedNoDuplicates2
            })



}else{
for(let i in datesToAdd){



console.log(datesToAddList[i]);

let testArray = [];
            for(let j = 0; j < this.openTimesUpdated.length; j++){ 
              testArray.push({
              time: new Date(datesToAddList[i].setHours(this.openTimesUpdated[j][0], this.openTimesUpdated[j][1], 0, 0)),
              timelabel: new Date(datesToAddList[i].setHours(this.openTimesUpdated[j][0], this.openTimesUpdated[j][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 

// console.log(testArray);


let timeslotsCreatedNoDuplicates2 = testArray.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.timelabel === value.timelabel
  ))
)





            this.dropDownDays.push({
            dayLabel: moment(datesToAdd[i]).format('dddd').substring(0,3).toLowerCase(),
            dayName: moment(datesToAdd[i]).format('dddd'),
            closed: !this.tFs[moment(datesToAdd[i]).day()],
            dateData: moment(datesToAdd[i]).format('dddd') + ', ' + moment(datesToAdd[i]).format("MMM Do"),
            dateFormatted: datesToAdd[i],
            timeslots: timeslotsCreatedNoDuplicates2
            })

}
}


// console.log('timeslotsCreatedNoDuplicates');
// console.log(timeslotsCreatedNoDuplicates);

            // this.dropDownDays.push({
            // dayLabel: "d",
            // dayName: "d",
            // closed: false,
            // dateData: moment(dateString).format('dddd') + ', ' + moment(dateString).format("MMM Do"),
            // dateFormatted: dateString,
            // timeslots: timeslotsCreatedNoDuplicates
            // })

// if(location.search.substring(1).split('&')[2]){

// let endDateString = location.search.substring(1).split('&')[2].replace('endDate=','');
//       console.log(timeslotsCreated);
//     this.dropDownDays.push({
//     dayLabel: "d",
//     dayName: "d",
//     closed: false,
//     dateData: moment(endDateString).format('dddd') + ', ' + moment(endDateString).format("MMM Do"),
//     dateFormatted: endDateString,
//     timeslots: timeslotsCreatedNoDuplicates
//     })



// }
             


}else{





         for(let i = 0;i<42;i++){
          let tomorrow = new Date(today)
          tomorrow.setDate(tomorrow.getDate() + i)

        if('January 1st' === moment(String(tomorrow)).format('MMMM Do') || 'December 25th' === moment(String(tomorrow)).format('MMMM Do') || !tFs[tomorrow.getDay()] || moment(String(this.thanksgiving(11,'thu'))).format('MMMM Do YYYY') === moment(String(tomorrow)).format('MMMM Do YYYY')){
              
            let timeslotsCreated = [];



        // console.log('timeslotsCreated 1');
        // console.log('timeslotsCreated 1');
        // console.log(timeslotsCreated);
              // console.log(timeslotsCreated.slice(2));
      // console.log('this.openTimesUpdated');
      //   console.log(this.openTimesUpdated);

            for(let i = 1; i < this.openTimesUpdated.length; i++){ 
              timeslotsCreated.push({
              time: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)),
              timelabel: new Date(tomorrow.setHours(this.openTimesUpdated[i][0], this.openTimesUpdated[i][1], 0, 0)).toLocaleTimeString().replace(":00","")
              })
            } 
              // console.log(timeslotsCreated);
            this.dropDownDays.push({
            dayLabel: days[tomorrow.getDay()] + ' (closed)',
            dayName: days[tomorrow.getDay()],
            closed: true,
            dateData: days[tomorrow.getDay()] + moment(String(tomorrow)).format(' MMM Do'),
            dateFormatted: tomorrow.toISOString().slice(0,10),
            timeslots: timeslotsCreated.slice(2)
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
            timeslots: timeslotsCreated.slice(2)
            })
            }
        }
}


   this.rendered = true;
    },
    setTipToZero(){
      console.log('set tip to zero')
this.setTip(0)

    },
    checkOlo() {
// console.log('check olod')
            let self = this
            // console.log(`this.title is: ${this.title}`)
                this.$http.get(`/order/acceptingOrdersBoolean/${this.title.replace(" ","")}`).then(function (response) {


if(response.data.result === "success"){
  self.oloAvailable = true;

}else{
  self.oloAvailable = false;

    if(self.title === 'Mamnoon'){
      window.location.href = 'https://app.upserve.com/s/mamnoon-llc-seattle';
    }

    if(self.title === 'Mamnoon Street'){
      window.location.href = 'https://app.upserve.com/s/mamnoon-street-seattle';
    }



}



// pulling online ordering availability from WP in each restaurant's template
//################################################

let pageData = self.$store.state.pageData[0]

for(var i in pageData.restaurant_repeater){

if(pageData.restaurant_repeater[i].name.toLowerCase().replace(" ","") ===  self.title.toLowerCase().replace(" ","")){
// console.log('match')
// console.log(pageData.restaurant_repeater[i].online_ordering)


 self.oloAvailable = pageData.restaurant_repeater[i].online_ordering;

console.log('pageData.restaurant_repeater[i]');
console.log('pageData.restaurant_repeater[i]');
console.log(pageData.restaurant_repeater[i].online_ordering);

if(pageData.restaurant_repeater[i].online_ordering === false){
// self.$router.push('http://www.yoursite.com/blog');


if(pageData.restaurant_repeater[i].name === 'mamnoon'){
window.location.href = 'https://app.upserve.com/s/mamnoon-llc-seattle';
}

if(pageData.restaurant_repeater[i].name === 'mamnoon street'){
  window.location.href = 'https://app.upserve.com/s/mamnoon-street-seattle';
}




}




}

//################################################


}

            })

    },
    updateTimeStamp(){
    

    
          this.currentOrder.timeStamp = Date.now();
 

   


   
    },

getCustomerEmails(){
// console.log('333');
    let self = this
        this.$http.get(`/order/getemaildomains`).then(function (response) {
// this.$http.get(`/order/email/${this.$auth._data.user.email}`).then(function (response) {

let domainSet = new Set(self.domains.concat(response.data.domains));
self.domains = [...domainSet];

    })
  
},
    mountFunctions(){



this.getCustomerEmails();


console.log('mount functions start');

      // if(window.location.hash === '#mamnoonEmployee'){
      // this.employeeCheckout = true
      // }

        this.$nextTick(function () {
            window.setInterval(() => {
              this.thirtyMinutesFromNow = moment().add(20, 'minutes').format("LLLL");

            },1000);

            window.setInterval(() => {
              this.updateTimeStamp();
            },30000);

        })

        this.checkOlo();

        this.$nextTick(function () {
            window.setInterval(() => {

            if(this.currentOrder.charges.items.length > 0){
              this.emptyCart(); 
              alert('Your Nadi Mama order has expired and your shopping bag is now empty. To place an order, please return to the current menu on this page.');
            }

            },2700000);
        })

        let self = this;

        this.$nextTick(function () {
            window.setInterval(() => {
        
            if(self.$store.state.reorderTrue === true){
              self.$store.commit("reorderfalse");
              location.reload();
            }

          },100);
      
        })


        const urlParams = new URLSearchParams(window.location.search);
        const product = urlParams.get('packageId');

        if(product !== null){

            let endDateString2 = location.search.substring(1).split('&')[2].replace('endDate=','');
            if(endDateString2 === moment().tz('America/Los_Angeles').format('YYYY-MM-DD')){
              this.$router.push(window.location.pathname);
                this.getHours();

              }else{
                    this.packageLink = true;
                    this.retrieveOnePackage(product);
                  this.getPackageHours();
                }
}else{
  
  // console.log('    this.getHours();')
      this.getHours();
}


this.retrievePackages();
 
this.reOrder = this.$store.state.storeCurrentOrder


    this.retrieveOrders();

 
if(this.$store.state.loggedIn){
 this.getCreditCards()
}

if(this.valid){

  
this.filterForNow()
}

    this.upserveMongo();
    this.getUser();
    this.showCurrentlyAvailable();
    emergepay.init();
      let ffAgo = Date.now() - 2700000
// /      let ffAgo = Date.now() - 10000

    if(this.title === 'Mamnoon'){

      if(this.$store.state.storeMamnoon.timeStamp === null){
        this.$store.state.storeMamnoon.timeStamp = Date.now()
      }


      let cachedTimeStamp = this.$store.state.storeMamnoon.timeStamp
      let decider = cachedTimeStamp - ffAgo
      if(decider < 0){
            console.log('Your Nadi Mama order has expired and your shopping bag is now empty. To place an order, please return to the current menu on this page.');
        this.emptyCart()
      }else{
        // console.log('not empty yet')
      }


        this.currentOrder = this.$store.state.storeMamnoon
        this.setTip(this.$store.state.storeMamnoon.tipSelected)
        this.currentAmountToAddCustom = this.$store.state.storeMamnoon.currentAmountToAddCustom/100
    }else if(this.title === 'Mamnoon Street'){


if(this.$store.state.storeStreet.timeStamp === null){
  this.$store.state.storeStreet.timeStamp = Date.now()
}



      let cachedTimeStamp = this.$store.state.storeStreet.timeStamp
      let decider = cachedTimeStamp - ffAgo
      if(decider < 0){
             console.log('Your Nadi Mama order has expired and your shopping bag is now empty. To place an order, please return to the current menu on this page.');
          this.emptyCart()
      }else{
        // console.log('not empty yet')
      }

        this.currentOrder = this.$store.state.storeStreet

        this.setTip(this.$store.state.storeStreet.tipSelected)
        this.currentAmountToAddCustom = this.$store.state.storeStreet.currentAmountToAddCustom/100
    }

    this.$store.state.orderCMR = {};
    this.$store.state.orderConfirmationModalResponse = {};

    if(this.$store.state.openDrawerOnLoad === true){
      this.toggleDrawer()
      let drawerTrue = false
      this.$store.commit("drawerTrue", { drawerTrue });
    }
  
    this.currentOrder.id = Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29);
        this.currentOrder.confirmation_code = "mamnoon-" + Math.random().toString(36).substr(2, 29);
  
this.$nextTick(function() {
window.addEventListener(`resize`, this.setResizeIndex);
})

this.currentOrder.scheduled_time = null
this.oloAvailable = false;

console.log('mount functions end');

},
  },
  mounted() {

    

  console.log(moment().add(15, 'minutes').format());

    this.mountFunctions();

  },
  created(){


      let recaptchaScriptJquery = document.createElement('script')
      recaptchaScriptJquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      document.head.appendChild(recaptchaScriptJquery)
}

};
</script>


<style lang="scss">
  @import '@/assets/styles/olostyles.scss';
  @import '@/assets/styles/_classes.scss';
</style>