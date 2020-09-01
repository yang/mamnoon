<template>
  <main>
       <UpserveFiltering />
  <div v-for="item in pageData" :key="item.acf_fc_layout">

    <TestimonialsMain v-if="item.acf_fc_layout === 'testimonials'" :header="item.header" :description="item.description" :data="item.testimonials" :tag="item.tagname" />
    <CoverFlow v-else-if="item.acf_fc_layout === 'meal_calendar'" :header="item.header" :descriptionbody="item.description" :data="item.meal_calendar" :tag="item.tagname" />
    <Reservations v-else-if="item.acf_fc_layout === 'reservations'" :header="item.header" :description="item.description" :data="item.reservations" :tag="item.tagname" />
    <OnlineShop v-else-if="item.acf_fc_layout === 'online_shop'" :header="item.header" :description="item.description" :data="item.online_shop" :tag="item.tagname" />
    <ALaCarte v-else-if="item.acf_fc_layout === 'a_la_carte'" :header="item.header" :description="item.description" :data="item.service" :tag="item.tagname" />
    <Newsletter v-else-if="item.acf_fc_layout === 'newsletter'" :header="item.header" :body="item.description" :tag="item.tagname" />
  </div>
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
      blockedBody: this.apiData,
      upserve: null,
      upserveCategories: [],
      currentlyFiltered: []
    };
  },
  props: ['apiData', 'blok'],
  methods: {
  async individualRestaurant(){
        let responseAcf = await this.$http.get(`/wp-json/acf/v3/restaurant/188`)


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
    // async upserves(){

    //   let responseUpserve = await this.$http.get("http://localhost:4000/product/upserve");
    //   console.log(responseUpserve)
    //   let upserveProducts = responseUpserve.data.body.objects
  
    //   this.upserve = upserveProducts

    //   for(let i = 0;i<upserveProducts.length;i++){
    //     if(!this.upserveCategories.includes(upserveProducts[i].category)){
    //       this.upserveCategories.push(upserveProducts[i].category)
    //     }
    //   }

    // }
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
  },
  mounted(){
    this.individualRestaurant()
        // this.upserves()
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
.is-fullheight {
  padding: 20px 0 0 0;
  overflow: hidden;
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
   height: 880px;
  }
}
@media only screen and (max-width: 640px) {
  .coverflowsection {
    // height: 660px;
        // height: 800px
   height: 880px;
  }
}
@media only screen and (max-width: 480px) {
  .coverflowsection {
height: 880px;
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
  margin: 12px auto 20px;
  width: 80%;
  text-align: center;

@media only screen and (max-width: 992px) {
  width: 90%;
  font-size: 12px;
}

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