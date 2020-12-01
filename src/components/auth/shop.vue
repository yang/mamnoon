<template>
<div>
  <div class="open-modal" v-if="modalOpen">
      <div class="container nav-acc-header mb-80 modalContainer position-relative no-padding" style="padding:0;">
 <!-- {{currentPopupItem}} -->



<div class="columnblock">
     <img :src="currentPopupItem.shop_item.image" />
</div>
<div class="columnblock text-left pad10">



<h3 class="merch-modal-header">{{currentPopupItem.shop_item.name}}</h3>

<h4 class="text-left red merch-modal-price">${{parseFloat(currentPopupItem.shop_item.price)}}</h4>
<p class="thick-grey merch-modal-description">{{currentPopupItem.shop_item.description}}</p>
<div style="width: 100%;text-align: center;">

<!-- {{currentPopupItem.index}} -->
                  <button
                    style="margin:0 auto;"
                    class="snipcart-add-item"
                    v-bind:data-item-id="currentPopupItem.shop_item.id"
                    v-bind:data-item-price="currentPopupItem.shop_item.price"
                    v-bind:data-item-image="currentPopupItem.shop_item.image"
                    v-bind:data-item-name="currentPopupItem.shop_item.name"
                    v-bind:data-item-description="currentPopupItem.shop_item.description"
                    v-bind:data-item-weight="currentPopupItem.shop_item.weight"
                    v-bind:itemId="currentPopupItem.shop_item.id"
                    v-bind:data-itemId="currentPopupItem.shop_item.id"
                    v-bind:data-item-url="currentPopupItem.shop_item.url"
                  >
                    <AddToCart />
                  </button>
</div>




</div>


   <button class="modal-close" @click="modalClose()">
     <CloseModalRed />
     </button>
    </div>  </div> 
  <div class="container nav-acc-header mb-80">
    <div class="row">
      <section id="alacarte" class="section hero is-primary is-fullheight fw">
        <div class>
          <h4 class="noselect">mama shop</h4>
          <p
            class="description-para noselect"
          >for merchandise and other special items, browse the brand new mama shop</p>
        </div>


<div class="category-filter">
<ul class="inline-filters">
  <li @click="filterItems('all')" :class="{underline: currentCategory === 'all'}" class="text-center">all</li>
  <li @click="filterItems(name)" class="text-center" :class="{underline: currentCategory === name}" v-for="name in uniqueNames" :key="name">
    {{name}}
  </li>
</ul>
</div>



        <!---->
      </section>
    </div>
    <div class="row">
      <!-- shop -->

      <!-- {{ story}} -->
<!-- <div v-if="item.shop_item.category === currentCategory"> -->



 <div class="shopthird" v-if="currentCategory === 'all'" v-for="(item, index) in shopItems"
        :key="item.shop_item.id">
   <img v-lazy="item.shop_item.image.replace('.jpg','-768x768.jpg')" />
        <div class="order-bottom" style="text-align: center;">
          {{item.shop_item.name}}, ${{parseFloat(item.shop_item.price)}}
          <div class="order-panel">

            <button class="snipcart-add-item"
              @click="modalPopup(item,index)"
            >
              <ShopNow />
            </button>
  
          </div>
        </div>
      </div>
       <div class="shopthird" v-if="item.shop_item.category === currentCategory" v-for="item in shopItems"
        :key="item.shop_item.id">
   <img v-lazy="item.shop_item.image.replace('.jpg','-768x768.jpg')" />
        <div class="order-bottom" style="text-align: center;">
          {{item.shop_item.name}}
          <div class="order-panel">
            <button style="background: transparent; border: 0;"
              @click="modalPopup(item)"
            >
              <ShopNow />
            </button>
  
          </div>
        </div>
      </div>



    </div>
  </div>

<button class="toggle snipcart-checkout"><span>
  
  
  <svg style="margin-top: -5px;margin-left: -5px;" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon--blue-dark snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#313749"></path></svg>
  
  


     <span class="snipcart-items-count" style="font-size: 14px;margin-top: 20px;"></span></span></button>




  </div>
</template>

<script type="text/javascript">

import VueLazyload from 'vue-lazyload';
import AddToCart from "@/components/svgIcons/AddToCart";
import ShopNow from "@/components/svgIcons/ShopNow";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import Carousel from "@/components/Carousel";


export default {
  name: "shop",
  components: {
    AddToCart,
    ShopNow,
    CloseModalRed,
    VueLazyload
  },
  data() {
    return {

  modalOpen: false,
  currentCategory: 'all',
  currentPopupItem: null,
  shopItems: [],
      story: {
        content: {
          body: [],
        },
      },
    };
  },
            computed: {
    uniqueNames: function() {
      var filtered_array = [];
      for(var i =0; i < this.shopItems.length; i++) {
        if(filtered_array.indexOf(this.shopItems[i].shop_item.category) === -1) {
          filtered_array.push(this.shopItems[i].shop_item.category)
        }
      }
    return filtered_array;
    }
  },
  mounted () {
this.individualRestaurant()





      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.js')
      recaptchaScript.setAttribute('data-autopop', 'false')
      recaptchaScript.setAttribute('data-api-key', 'MTAyNTVhZGQtMzU2Mi00ZWEwLWI1ZjctNWQwY2MwYjZiYjZkNjM3MjYyOTQ3OTQ3OTcxNTA1')
      document.head.appendChild(recaptchaScript)


  },
  methods: {
filterItems (category) {
  this.currentCategory = category
},
  async individualRestaurant(){

    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)

    let AcfBlock = responseAcf
    let pageData = AcfBlock.data.acf.content_fields

    for(let i = 0;i<pageData.length;i++){
    if(pageData[i].acf_fc_layout === 'online_shop'){
      this.shopItems = pageData[i].online_shop
    }
    }

},
modalPopup(item,index){

this.modalOpen = true
this.currentPopupItem = item
this.currentPopupItem.index = index
},
modalClose(){
  this.modalOpen = false
  this.currentPopupItem = null
}
  },
};







</script>


<style lang="scss">

#alacarte{
  border: 5px solid white;
     border-top:0;
    //  border-bottom: 20px;
}
.shopthird {
  width: 33.33333333%;
  float: left;
  margin-bottom: 0px;
  border: 5px solid white;
 
  img {
    width: 100%;
  }


@media only screen and (max-width: 1080px) {
width: 50%
}


@media only screen and (max-width: 768px) {

width: 100%

}



}

.open-modal{
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.6);
  position: fixed;
// top: 92px;
    top: 72px;
    text-align: center;
    padding-top:20px;


@media only screen and (max-width: 768px) {
      // padding-top: 0px;
    z-index: 100;
        top: 0;
            // padding-top: 10px;

                padding-top: 0;
}

    
}

.modalContainer{
      background: #fff367;
        border: 5px solid white;
}


.modal-close{
  top: 5px;
  right: 10px;
  position: absolute;
  background: transparent;
  border: 0;
}

.columnblock{
  width: 50%;
  float: left;


@media only screen and (max-width: 768px) {

width: 100%

}

}




.columnblock img{
  width: 100%;
}

.no-padding{
  padding: 0;
  display: inline-block;
}
.text-left{
  text-align: left;
}




button,
button:focus,
button:active{
  outline: none;
}


.pad10{
  padding: 10px;
}

.pad30{
  padding: 30px;
}


h4.text-left.red{
  color: #f05d5b;
  font-weight: 600;
}



p.thick-grey{
color:#595959;
  font-weight: 600;

}






.category-filter{
background-color: #F58E58;
    min-height: 50px;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 10px;

.inline-filters{

padding-left: 0;
margin: 0px auto 0;
li{
      display: inline;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding: 0 20px;
    color: #fff;

cursor: pointer;
    &.underline{
    color: #fff367;
  }
}
}
  
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fw{
  width: 100%;
}


.snipcart__box--badge, .snipcart__font--subtitle, .snipcart__font--xlarge {
    font-size: 15px !important;
}






.pad10{
  padding: 30px;
}





@media only screen and (max-width: 768px) {


  .pad10{
  padding: 10px;
}

.merch-modal-header{
  font-size: 1rem;
}

.merch-modal-price{
margin-top: 10px;font-size: 1rem;margin-bottom:.25rem;
}




.merch-modal-description{
margin-top: 5px;font-size: .8rem;font-weight: 300;margin-bottom: 0.25rem;
}


.order-panel{
 padding: 5px 0
}


svg#shopnow {
    width: 120px;
    margin: 5px auto;
}

}


    .toggle{
        display: block;
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100;
            border: 1px solid #f05d5b;
    background-color: #f05d5b;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 4px;
    }



.shopping-bag{

        width: 20px;
	.st0{fill:#FFFFFF;}
	.st1{fill:#FFFFFF;}
	.st2{fill:#FFFFFF;}
	.st3{fill:#FFFFFF;}
	.st4{fill:#FFFFFF;}
}

  .toggle.snipcart-checkout{
display: none;
  }


@media only screen and (max-width: 768px) {

  .toggle.snipcart-checkout{
display: block
  }
}

</style>