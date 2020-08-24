<template>
  <main v-editable="blok" v-if="blok.content.body[0]">
<div v-for="item in pageData" :key="item.acf_fc_layout">
  <TestimonialsMain v-if="item.acf_fc_layout === 'testimonials'" :header="item.testimonials_header" :data="item.testimonials" />
  <CoverFlow v-else-if="item.acf_fc_layout === 'meal_calendar'" :header="item.meal_calendar_header" :data="item.meal_calendar" />
  <Reservations v-else-if="item.acf_fc_layout === 'reservations'" :header="item.reservations_header" :data="item.reservations" />
  <OnlineShop v-else-if="item.acf_fc_layout === 'online_shop'" :header="item.online_shop_header" :data="item.online_shop" />
<ALaCarte v-else-if="item.acf_fc_layout === 'a_la_carte'" :header="item.a_la_carte_header" :data="item.service" />
  </div>
    <section
      :id="offering.category"
      v-for="(offering,index) in inventory.offerings"
      v-bind:key="offering.title"
      class="section hero is-primary is-fullheight"
      v-bind:class="{familymeal : index === 0}"
    >
      <div
        v-if="offering.visible"
        v-bind:class="{ carousel: !offering.reservationBlock, shortcarousel: offering.reservationBlock }"
      >
        <h4 class="noselect" v-if="!offering.insideHeader">

<div v-if="offering.title === 'order now'">
{{ blok.content.body[0].orderNowHeader }}
</div>
<span v-if="offering.tock">{{currentDay}}</span>
</h4>







        <carousel
          v-else-if="offering.responsive"
          :responsive=" {0:{items:1},768:{items:2},1080:{items:3}}"
          :items="offering.slideNo ? offering.slideNo : 3"
          :loop="false"
          :dots="false"
          :nav="false"
        >

          <div
            v-for="item in offering.items"
            v-bind:key="item.name"
            style="text-align:center;margin-top: 10px;width: 100%;"
          >




<div v-if="offering.mamaShop" class="relative-pos">
<img v-bind:src="item.image" />
     

            <div class="itemDescription">
              <div class="text-box">
              {{item.description}}
              </div>
              </div>

</div>
<div v-else>
              <img v-if="offering.tock" v-bind:src="'./assets/ala/' + currentDay + '.jpg'" />

            <img v-else v-bind:src="item.image" />
  </div>


            <template v-if="item.caviarLink">
              <div class="order-bottom">
                {{item.name}}
                <div class="order-panel">
                  <a :href="item.caviarLink" target="_blank">
                    <Order />
                  </a>
                </div>
              </div>
            </template>
            <template v-if="item.statistics">
              <div class="order-bottom">
                {{item.name}}
                <div class="order-panel">
                  <button
                    class="snipcart-add-item"
                    v-bind:data-item-id="item.name"
                    v-bind:data-item-price="item.price"
                    v-bind:data-item-image="item.image"
                    v-bind:data-item-name="item.name"
                    v-bind:data-item-description="item.description"
                    v-bind:data-item-weight="item.weight"
                  >
                    <Order />
                  </button>
                </div>
              </div>
            </template>
            <div v-if="offering.tockButton" class="order-bottom order-top">
              <span class="month">{{item.month}}</span>
              <div class="days">
                <span v-for="(day,index) in item.days" v-bind:key="day">
                  <span @click="dayChange(index)">{{index + 1}}</span>
                </span>
              </div>
            </div>
          </div>
          <template v-if="index === 0 || index === 1" slot="next"></template>
          <template v-else class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
        <carousel
          v-else-if="!offering.reservationBlock"
          :items="offering.slideNo ? offering.slideNo : 3"
          :loop="false"
          :dots="false"
          :nav="false"
        >
          <template class="subprev" slot="prev">
            <span class="prev">
              <Prev />
            </span>
          </template>
 
          <div
            v-for="item in offering.items"
            v-bind:key="item.name"
            style="text-align:center;margin-top: 15px;"
          >
            <h4 v-if="offering.insideHeader" class="insideHeader noselect">
              {{offering.title}} / {{item.month}} /
              <span v-if="offering.tock">{{currentDay}}</span>
            </h4>
            <img v-if="offering.tock" v-bind:src="'./assets/ala/' + currentDay + '.jpg'" />

            <img v-else v-bind:src="item.image" />
            
            {{item.description}}

            <template v-if="item.statistics">
              <div class="order-bottom">
                {{item.name}}
                <div class="order-panel">
                  <button
                    class="snipcart-add-item"
                    v-bind:data-item-id="item.name"
                    v-bind:data-item-price="item.price"
                    v-bind:data-item-image="item.image"
                    v-bind:data-item-name="item.name"
                  >
                    <Order />
                  </button>
                </div>
              </div>
            </template>

            <div v-if="offering.tockButton" class="order-bottom order-top">
              <span class="month">{{item.month}}</span>
              <div class="days">
                <span v-for="(day,index) in item.days" v-bind:key="day">
                  <span @click="dayChange(index)">{{index + 1}}</span>
                </span>
              </div>
            </div>
          </div>

          <template v-if="index === 0 || index === 1" slot="next"></template>
          <template v-else class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>

        <div v-if="offering.tockButton" class="order-bottom">
          <div id="mama-dummy-button" class="TockButton-buttonContainer" style="cursor: pointer;">
            <div data-tock-reserve="true" class="TockButton-link">
              <div class="TockButton TockButton-blue">
                <span class="TockWidget-B2" @click="loggit()">
                  <OrderStar />
                </span>
              </div>
            </div>
          </div>
        </div>
        


      </div>

    </section>
    <Newsletter :title="blok.content.body[0].newsLetterFooterHeader" :description="blok.content.body[0].newsLetterFooterDescription" />
  </main>
</template>

<script type="text/javascript">

import carousel from "vue-owl-carousel";
import Order from "@/components/svgIcons/Order";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import Mamnoon from "@/components/svgIcons/Mamnoon";
import Mbar from "@/components/svgIcons/Mbar";
import ShowAll from "@/components/svgIcons/ShowAll";
import MamnoonStreet from "@/components/svgIcons/MamnoonStreet";
import MamnoonSVG from "@/components/svgIcons/MamnoonSVG";
import Newsletter from "@/components/Newsletter";
import CoverFlow from "@/components/CoverFlow";
import UpserveFiltering  from "@/components/UpserveFiltering";
import TestimonialsMain from "@/components/TestimonialsMain";
import Reservations from "@/components/Reservations";
import ALaCarte from "@/components/ALaCarte";
import OnlineShop from "@/components/OnlineShop";

export default {
  components: {
    ALaCarte,
    carousel,
    Order,
    Next,
    Prev,
    Newsletter,
    CoverFlow,
    Mbar,
    Mamnoon,
    MamnoonStreet,
    MamnoonSVG,
    ShowAll,
    UpserveFiltering,
    TestimonialsMain,
    Reservations,
    OnlineShop
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    names() {
      return this.$store.state.names;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      pageData: null,
      testimonials: null,
      inventory: this.$store.state.inventory,
      products: this.$store.state.inventory.offerings[0].items,
      blockedBody: this.apiData,
      upserve: null,
      upserveCategories: [],
      currentlyFiltered: []
    };
  },
  props: ['apiData', 'blok'],
  methods: {
  async individualRestaurant(){

    let responseAcf = await this.$http.get(`https://testsite.mamnoon.webfactional.com/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields

},
    filterByCat(cat){
      this.currentlyFiltered = []
      for(let i = 0;i<this.upserve.length;i++){
        if(this.upserve[i].category === cat){
        this.currentlyFiltered.push(this.upserve[i])
        }
      }
    },
    dayChange(e) {
      this.currentDay = e + 1;
    },
    loggit() {
      console.log(134);
    },
    toggle: function(event) {
      if (event.target.classList.contains("is-open")) {
        this.$store.commit("decrement");
        event.target.classList.remove("is-open");
      } else {
        event.target.classList.add("is-open");
        this.$store.commit("increment");
      }
    },
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    increment2(name) {
      this.$store.commit("increment2", { name });
    },
    removeFromCart(price) {
      this.$store.commit("removeFromCart", { price });
    },
    confirmOrder(timeslot) {
      if (event.target.classList.contains("reserved")) {
        this.$store.commit("unreserveFamilyMeal", { timeslot });
      } else {
        this.$store.commit("reserveFamilyMeal", { timeslot });
      }
    },
    changedAlert() {
      console.log("changed");
    },
    async upserves(){

      let responseUpserve = await this.$http.get("/product/upserve");
      let upserveProducts = responseUpserve.data.body.objects
  
      this.upserve = upserveProducts

      for(let i = 0;i<upserveProducts.length;i++){
        if(!this.upserveCategories.includes(upserveProducts[i].category)){
          this.upserveCategories.push(upserveProducts[i].category)
        }
      }

    }
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
  },
  mounted(){
    this.individualRestaurant()
  }
};

</script>


<style lang="scss">
.reserved {
  background: red;
}
.not-available {
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}
.order-button {
  width: 33.33%;
  padding: 20px 0;
}
h4 {
  text-align: center;
}
.is-fullheight,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;
  }
}
.section.hero.familymeal {
  width: 88%;
  margin: 0 auto;
}
.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: -2px;
  left: 25%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    left: 5%;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: -2px;
  right: 25%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    right: 5%;
  }
}
.is-fullheight {
  padding: 20px 0 0 0;
}
.familymeal {
  padding: 0 0 0 0;
}
.order-bottom {
  background: #fff367;
  padding: 10px 0;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
}
.order-bottom.order-top {
  background: #f1765b;
  min-height: 90px;
  text-align: center;
}
.order-panel {
  padding: 10px 0;
}
#mama-dummy-button {
  width: 70px;
  margin: 0 auto;
}
.carousel {
  margin-bottom: 80px;
}
#testimonials .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f1765b;
  }
  &:nth-child(even) {
    background: #f58e58;
  }
}
.owl-stage {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.owl-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto !important;
}
#testimonials .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#testimonials .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#testimonials .owl-item > div > div {
  text-align: left;
}
.xs {
  // font-size: 16px;
  font-size: 18px;
}
.sm {
  // font-size: 22px;
  font-size: 18px;
}
.md {
  // font-size: 18px;
  // font-size: 38px;


font-size: 18px;

}
.lg {
  font-size: 64px;
}
.days {
  margin: 10px auto 5px;
  width: 80%;
}
.days span {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 30px;
  cursor: pointer;
}
.month {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  // line-height: 30px;
  cursor: pointer;
}
.insideHeader {
  margin-bottom: 20px;
  margin-top: -15px;
}
button.snipcart-add-item {
  border: 0;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}
.snipcart-modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 110 !important;
  background-color: #f0f5f6;
  // top: 140px !important;
  top: 90px !important;
}
.top-widget {
  width: 100%;
  height: 500px;
  background: green;
}
.coverflowsection {
  padding: 0 0 0 0;
  // height: 600px;
  // height: 510px;
  // height: 600px;
  height: 600px;
  height: 830px;
  margin-bottom: 80px;
  // background-color: #f05d5b;
  background-color: #F58E58;
  overflow: hidden;
  position: relative;
  h4 {
    color: #fff367;
  }
  p {
    color: white;
    width: 80%;
    margin: 10px auto 10px;
    text-align: center;
  }
}
@media only screen and (max-width: 960px) {
  .coverflowsection {
    // height: 660px;
        height: 710px
  }
}
@media only screen and (max-width: 640px) {
  .coverflowsection {
    // height: 660px;
        height: 800px
  }
}
@media only screen and (max-width: 480px) {
  .coverflowsection {
    height: 800px;
  }
}
.bottom-button {
  // position: absolute;
  // bottom: 0;
  // background: #FFF367;
  // width: 100%;
  // padding: 10px 0;
  position: absolute;
  bottom: 0;
  background: #fff367;
  width: 100%;
  padding: 10px 0;
  height: 120px;
  a {
    position: absolute;
    // width: 100%;
  }
}
.width-container {
  width: 100%;
  overflow: auto;
}
section {
  clear: both;
}
.shortcarousel {
  margin-bottom: 80px;
}
.description-para {
  color: white;
  margin: 20px auto;
  width: 80%;
}

.quote-container {
  // position: relative;
  // height: 100%;
  // width: 100%;
  // padding-bottom: 80px;
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  // padding-bottom: 80px;
  text-align: center;

}
.quote-author {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff367;
}
.itemDescription{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff367b5;
    top: 0;
    opacity: 0;
    transition: all .5s ease;
.text-box{
      width: 80%;
      margin: 0 auto;
      font-weight: 100;
      font-size: 36px;
      margin-top: 100px;
}
}
.relative-pos{
  position: relative;
  overflow: hidden;  
    &:hover{
      .itemDescription{
        opacity: 1;
      }
    }
}


.tesstimonialItem{
  text-align:center;
  margin-top: 0px;
  width: 100% !important;
  
}



#mama-shop .carousel{
    margin-bottom: 20px;
}



.owl-item > div{
  width: 100%
}


#testimonials{
  .owl-carousel {
    margin-top: -10px;
  }
}


#testimonials{
  .quote-container {
    // height: 200px;
        min-height: 60px;
    position: relative;

    .md, .xs{
      position: absolute;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      left: 50%;
      width: 100%;
      font-size: 20px;
    }
}

}

ul.upserve-cats li{
  display: inline;
}


.filtree{
  width: 50%;
  float: left;
  height: 300px;
background: #ddd;
margin: 5px;
padding: 5px;
}
</style>