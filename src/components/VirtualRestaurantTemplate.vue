<template>
<div>
  






        <div v-if="pageData[0].restaurant_repeater.map(x=>x.name.replace(' ', '')).includes($route.params.id)">

                  <div v-for="item in pageData[0].restaurant_repeater" :key="item.acf_fc_layout"><!--begin big loop-->
                      
                      <template v-if="item.name.replace(' ', '') === restaurantName">
                      <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + item.background_image.url + ')' }">
                        <div class="container mobilePage">
               
                    <img :src="item.logo_image.url" style="width: 200px;margin: 0 auto;text-align: center;">

                      <br>
                        </div>
                      </section>
                      <section class="fh" v-bind:style="{ 'background-color': item.background_color }">
                                              <div class="container mobilePage">

                <p class="header-p" v-bind:style="{ 'color': item.text_color }">{{item.description}}</p>






                      <!--<div :style="{ backgroundColor: item.button_color }">
                      button color
                      </div>
                      <br>
                      <div :style="{ backgroundColor: item.text_color }">
                      text color
                      </div>-->


                        <template v-for="button in item.buttons">

                        <a :style="{'padding':'10px', 'display':'block', 'border-radius': '5px', 'width': '300px', 'border': `2px solid ${item.text_color}`, 'color' : item.text_color, 'background-color': item.button_color, 'margin': '10px 0', 'text-align': 'center' }" :href="button.link">{{button.text}}</a>
                        
                        </template>

                              </div>
                      </section>

                          </template>


              </div><!--end big loop-->

              </div>
              <div v-else>
                      {{ pushHome() }}
              </div>







  </div>
</template>

<script type="text/javascript">

import ALaCarte from "@/components/ALaCarte";

export default {
  components: {
    ALaCarte
  },
  computed: {

    containsYN(){


    // let arrRest = this.pageData[0].restaurant_repeater.map(x=>x.name.replace(" ", ""));

    let arrRest = this.pageData[0];

console.log(arrRest);


return arrRest;
    },
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

      restaurantName: 'fff',
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
      pushHome(){
          this.$router.push("/")
        },
 isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },
visibilityChanged (isVisible, entry) {
  this.isVisible = isVisible
  ///console.log(entry.target.id)
  //console.log(entry.isIntersecting)
///console.log(entry)

// this.visibility[entry.target.id] = true


this.visibility[entry.target.id] = entry.isIntersecting


},

  async individualRestaurant(){
   




let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/virtual_restaurant/412`)
    // let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)


    let responseAcf2 = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
// console.log(responseAcf2);

    // console.log(responseAcf);
    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields
    this.pageData = AcfBlock.data.acf.restaurants
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
    }
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
  },
  mounted(){
    this.individualRestaurant()
        // this.upserves()





this.restaurantName = this.$route.params.id;

        console.log(this.$route.name);
  }
};

</script>


<style lang="scss">


.topSection{
  background-size: cover;
// height: 100vh;
}

.fh{
height: 80vh;

}


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
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    right: 5%;
  }
}
.is-fullheight {
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
    top: 0 !important;
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

    // margin-top: 90px;

    width: 70%;

    margin-left: auto;
    margin-right: auto;

}
@media only screen and (max-width: 960px) {
  .coverflowsection {
        // height: 660px;
        // height: 880px;
           width: 100%;
  }
}
@media only screen and (max-width: 640px) {
  .coverflowsection {
      // height: 660px;
      // height: 800px
      //  height: 880px;
  }
}
@media only screen and (max-width: 480px) {
  .coverflowsection {

      // height: 880px;
      // height: 804px;
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
  // height: 120px;
  height: 110px;
  a {
    position: absolute;
    // width: 100%;
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
      color: #f05d5b;
    }
}

}

ul.upserve-cats li{
  display: inline;
}

.filtree-half{

    width: 50%;
    float: left;
    // height: 300px;
    // height: 220px;
    height: 140px;
    background: transparent;
    // margin: 5px;
    padding: 0px;
    overflow: hidden;

@media only screen and (max-width: 768px) {
  width: 100%
}


.grey-bg{
    //  padding: 5px;
      // background: #fff367;
            background: #ffffff;
            // padding: 10px 5px;
      
}
}
.filtree{
//   width: 50%;
//   float: left;
//   height: 300px;
// background: #ddd;
// margin: 5px;
// padding: 5px;


width: 30%;
    float: left;
    height: 300px;
    background: #ddd;
    margin: 5px;
    padding: 5px;
    overflow: hidden;



@media only screen and (max-width: 1080px) {
width: 50%
}


@media only screen and (max-width: 768px) {

width: 100%





}



}




@media only screen and (max-width: 1200px) {

.coverflowsection{

    // height: 814px;
}
}

@media only screen and (max-width: 768px) {





.coverflowsection,
.mb-80{
  margin-bottom: 40px;
}
}




@media only screen and (max-width: 768px) {


.coverflowsection{

    // height: 745px;
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
  padding:20px;
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




.container.mt-5.mobilePage{
    margin-top: 3rem!important;
    padding-top: 100px;

    @media only screen and (max-width: 992px) {
            // padding-top:0px;



              margin-top: 1rem!important;
    }
}

.header-p{
    font-size: 28px;
    line-height: 40px;
    width: 300px;
    padding: 30px 0;
    font-weight: 600;
    margin-bottom: 0;
    }

</style>