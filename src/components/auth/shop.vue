<template>
<div>
  <div class="open-modal" v-if="modalOpen">
      <div class="container nav-acc-header mb-80 modalContainer position-relative no-padding">
 <!-- {{currentPopupItem}} -->



<div class="columnblock">
     <img :src="currentPopupItem.shop_item.image" />
</div>
<div class="columnblock text-left pad30">



<h3>{{currentPopupItem.shop_item.name}}</h3>

<h4 class="text-left red" style="margin-top: 20px;">{{currentPopupItem.shop_item.price}}</h4>
<p class="thick-grey" style="margin-top: 20px;">{{currentPopupItem.shop_item.description}}</p>
    <br /><br />
<div style="width: 100%;text-align: center;">
                  <button
                    style="margin:0 auto;"
                    class="snipcart-add-item"
                    v-bind:data-item-id="currentPopupItem.shop_item.id"
                    v-bind:data-item-price="currentPopupItem.shop_item.price"
                    v-bind:data-item-image="currentPopupItem.shop_item.image"
                    v-bind:data-item-name="currentPopupItem.shop_item.name"
                    v-bind:data-item-description="currentPopupItem.shop_item.description"
                    v-bind:data-item-weight="currentPopupItem.shop_item.weight"
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
      <section id="alacarte" class="section hero is-primary is-fullheight">
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



 <div class="shopthird" v-if="currentCategory === 'all'" v-for="item in shopItems"
        :key="item.shop_item.id">
   <img v-bind:src="item.shop_item.image" />
        <div class="order-bottom" style="text-align: center;">
          {{item.shop_item.name}}
          <div class="order-panel">
            <button
              class="snipcart-add-item"
              @click="modalPopup(item)"
            >
              <ShopNow />
            </button>
  
          </div>
        </div>
      </div>
       <div class="shopthird" v-if="item.shop_item.category === currentCategory" v-for="item in shopItems"
        :key="item.shop_item.id">
   <img v-bind:src="item.shop_item.image" />
        <div class="order-bottom" style="text-align: center;">
          {{item.shop_item.name}}
          <div class="order-panel">
            <button
              class="snipcart-add-item"
              @click="modalPopup(item)"
            >
              <ShopNow />
            </button>
  
          </div>
        </div>
      </div>



    </div>
  </div>
  </div>
</template>

<script type="text/javascript">



import AddToCart from "@/components/svgIcons/AddToCart";

import ShopNow from "@/components/svgIcons/ShopNow";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";

import Carousel from "@/components/Carousel";


export default {
  name: "shop",
  components: {
    AddToCart,
    ShopNow,
    CloseModalRed
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
modalPopup(item){

this.modalOpen = true
this.currentPopupItem = item
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
top: 92px;
    text-align: center;
    padding-top:20px;
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


</style>