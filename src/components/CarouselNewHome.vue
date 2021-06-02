<template>
<div>
  <main>
    <!-- <div class=""> -->
      <!-- <div class="container"> -->
      <!-- <h2 class="intro-paragraph-header">Welcome!</h2> -->
      <!-- <p class="intro-paragraph">Nadi Mama is a one stop shop for all things The Mama Group has to offer. Order food, purchase retail items, make a reservation or simply stay up to date with our offerings.</p> -->
    <!-- </div> -->
    <!-- </div> -->

  <div v-for="item in pageData" :key="item.acf_fc_layout">
  <template v-if="!isMobile()">
    <TestimonialsMain :visible="visibility.testimonials" v-if="item.acf_fc_layout === 'testimonials'" :showHide="item.showhide" :header="item.header" :description="item.description" :data="item.testimonials" :tag="item.tagname" />
    <!-- <CoverFlowCarousel :visible="visibility.planahead" v-if="item.acf_fc_layout === 'meal_calendar'" :header="item.header" :feature="item.feature" :descriptionbody="item.description" :data="item.meal_calendar" :tag="item.tagname" /> -->
    <Reservations :visible="visibility.reservations" v-if="item.acf_fc_layout === 'reservations'" :header="item.header" :description="item.description" :data="item.reservations" :tag="item.tagname" />
    <OnlineShopUpserve :visible="visibility.onlineshop" v-if="item.acf_fc_layout === 'online_shop'" :header="item.header" :description="item.description" :data="item.online_shop" :tag="item.tagname" />
   <FineFoods :visible="visibility.finefoods" v-if="item.acf_fc_layout === 'fine foods'" :header="item.header" :description="item.description" :data="item.fine_foods" :tag="item.tagname" />
    <ALaCarte :visible="visibility.alacarte" v-if="item.acf_fc_layout === 'a_la_carte'" :header="item.header" :description="item.description" :data="item.service" :tag="item.tagname" />
    <Newsletter :visible="visibility.newsletter" v-if="item.acf_fc_layout === 'newsletter'" :header="item.header" :body="item.description" :tag="item.tagname" />
  </template>
  <template v-else>


<!-- mobile featured.  -->
     <template v-if="item.acf_fc_layout === 'meal_calendar'">
        <router-link class="orange-button" to="/featured">featured</router-link>
      </template>
<!-- mobile reservations. -->

      <template v-if="item.acf_fc_layout === 'reservations'">
        <router-link class="orange-button" to="/reservations">reservations</router-link>
      </template>

<!-- mobile online shop. -->
      <template v-if="item.acf_fc_layout === 'online_shop'">
        <router-link class="orange-button" to="/retail">retail items</router-link>
      </template>
<!-- mobile find foods. -->
      <template v-if="item.acf_fc_layout === 'fine foods'">
        <router-link class="orange-button" to="/mamnoonff">fine foods</router-link>
      </template>
<!-- mobile a la cart. -->
      <template v-if="item.acf_fc_layout === 'a_la_carte'">
        <router-link class="orange-button" to="/onlinemenu">online menu</router-link>
      </template>
<!-- mobile newsletter. -->
      <template v-if="item.acf_fc_layout === 'newsletter'">
        <router-link class="orange-button" to="/newsletterarchive">newsletter archive</router-link>
      </template>
<!-- about. -->
      <template v-if="item.acf_fc_layout === 'about'">
        <router-link class="orange-button" to="/about">about</router-link>
      </template>




  </template>
  </div>

  <template v-if="isMobile()">
 <router-link class="orange-button" to="/about">about</router-link>

  </template>





  </main>

  </div>
</template>

<script type="text/javascript">

import carousel from "vue-owl-carousel";
import Order from "@/components/svgIcons/Order";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import Mamnoon from "@/components/svgIcons/Mamnoon";
import Mbar from "@/components/svgIcons/Mbar";
import ShowAll from "@/components/svgIcons/ShowAll";
import MamnoonSVG from "@/components/svgIcons/MamnoonSVG";
import Newsletter from "@/components/Newsletter";
import CoverFlowCarousel from "@/components/CoverFlowCarousel";
import UpserveFiltering  from "@/components/UpserveFiltering";
import TestimonialsMain from "@/components/TestimonialsMain";
import Reservations from "@/components/Reservations";
import ALaCarte from "@/components/ALaCarte";
import OnlineShop from "@/components/OnlineShop";
import FineFoods from "@/components/FineFoods";
import OnlineShopUpserve from "@/components/OnlineShopUpserve";
export default {
  components: {
    FineFoods,
    ALaCarte,
    carousel,
    Order,
    Next,
    Prev,
    Newsletter,
    CoverFlowCarousel,
    Mbar,
    Mamnoon,
    MamnoonSVG,
    ShowAll,
    UpserveFiltering,
    TestimonialsMain,
    Reservations,
    OnlineShop,
    OnlineShopUpserve
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
      blockedBody: this.apiData,
      upserve: null,
      upserveCategories: [],
      currentlyFiltered: [],
      visibility: {
        testimonials: false,
        planahead: false,
        reservations: false,
        shop: false,
        finefoods: false,
        fullonlinemenu: false,
        newsletter: false
    }
    };
  },
  props: ['apiData', 'blok'],
  methods: {
 isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },
  async individualRestaurant(){
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields
},
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
.is-fullheight2,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;    font-weight: bold;
  }
}
.section.hero.familymeal {
  width: 88%;
  margin: 0 auto;
}
.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 14px;
  //  top: 110px;
  left: 20%;
    left: 30%;
        left: 35%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    left: 5%;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 14px;
    //  top: 110px;
  right: 20%;
    right: 30%;
        right: 35%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    right: 5%;
  }
}



.is-fullheight,
.is-fullheight2 {
  padding: 20px 0 0 0;
  // overflow: hidden;
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
  text-transform: lowercase;
}
.order-bottom.order-top {
  background: #f58e58;
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
    background: #f58e58;
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
  float: left;
  img {
    width: 100%;
  }
}
#testimonials .owl-item > div > div {
  text-align: left;
}
.xs {
  font-size: 18px;
}
.sm {

  font-size: 18px;
}
.md {
  font-size: 18px;
}
.lg {
  font-size: 64px;
}
.days {
  margin: 10px auto 5px;
  width: 80%;
}


.insideHeader {
  margin-bottom: 20px;
  margin-top: -15px;
}

.top-widget {
  width: 100%;
  height: 500px;
  background: green;
}
.coverflowsection {
  padding: 0 0 20px 0;
  margin-bottom: 80px;
  background-color: #f05d5b;
  overflow: hidden;
  position: relative;
  h4 {
    color: #fff367;
    font-weight: bold;
  }
  p {
    color: white;
    width: 80%;
    margin: 10px auto 10px;
    text-align: center;
  }



    width: 70%;

    margin-left: auto;
    margin-right: auto;

}


.bottom-button {

  position: absolute;
  bottom: 0;
  background: #fff367;
  width: 100%;
  padding: 10px 0;

  height: 110px;
  a {
    position: absolute;
 
  }
  display: none;
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
  margin: 12px auto 20px;
  width: 80%;
  text-align: center;

@media only screen and (max-width: 992px) {
  width: 90%;
  font-size: 12px;
}

}

.quote-container {
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
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
      color: #f05d5b;
    }
}

}

ul.upserve-cats li{
  display: inline;
}




@media only screen and (max-width: 768px) {

.coverflowsection,
.mb-80{
  margin-bottom: 40px;
}
}

.intro-paragraph-header{
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #f05d5b;
}

.intro-paragraph{
      font-size: 14px;
    color: #f05d5b;
}
.rollbar{
  position: fixed;
    width: 100%;
    min-height: 90px;
    background: green;
    top: 142px;
    left: 0;
    z-index: 100;
    padding: 10px 0; 
}

@media only screen and (max-width: 1080px) {
.rollbar{
    top: 92px;

}
}

@media only screen and (max-width: 992px) {
.rollbar{
    top: 92px;
}
}

.orange-button{
      padding: 14px 20px;
  background: #f58e58;
  display: block;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  transition: all .5s ease;
  &:hover{
    text-decoration: none;
  }
}
</style>