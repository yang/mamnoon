<template>
<div>
  

<Nav2 />




        <div v-if="this.$store.state.pageData[0].restaurant_repeater.map(x=>x.name.replace(' ', '')).includes($route.params.id)">

                  <div v-for="item in this.$store.state.pageData[0].restaurant_repeater" :key="item.acf_fc_layout"><!--begin big loop-->
                      









<!--notification section-->
<template v-if="item.header_notification && notificationVisible && item.name.replace(' ', '') === restaurantName">

  





<section class="header-notification" v-bind:style="{ 'background-color': item.header_notification_background_color, 'color': item.header_notification_text_color }">

<div class="dismissNotification" @click="dismissNotification">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6.36426" width="35" height="9" transform="rotate(45 6.36426 0)" fill="white"/>
<rect x="31.1128" y="6.36401" width="35" height="9" transform="rotate(135 31.1128 6.36401)" fill="white"/>
</svg>
</div>
    <div class="container mobilePage">

     <!--begin row-->
<div class="row">
             
                                          
<div class="col-sm-8 offset-2">


<h3>  
{{item.header_notification}}
</h3>




</div></div></div>
</section>
</template>

<!--end notification section-->



























                      <template v-if="item.name.replace(' ', '') === restaurantName">
                      <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + item.background_image.url + ')', 'background-position': 'top center', 'position': 'relative' }">
                        <!--<div class="container mobilePage pt132">-->
  
                    <div v-html="item.logo_svg" class="restaurantLogo"></div>



<!--// {{item.background_video}}-->

<!-- <VideoComponent :src="item.background_video" />-->









                      <!--<br>-->
                       <!-- </div>-->
                      </section>
                      <section v-bind:style="{ 'background-color': item.background_color }">

         <!--begin container-->
    <div class="container mobilePage secPad">

     <!--begin row-->
<div class="row">
             
                                          
<div class="col-md-6">
                <p class="header-p" v-bind:style="{ 'color': item.text_color }">{{item.description}}</p>

                        <template v-for="button in item.buttons">







            <a class="ctaLink" target="_blank" :style="styleObject" :href="button.link">{{button.text}}</a>




                                                </template>
                                                <br>







</div>
<div class="col-md-6">


              <div :style="{'color' : item.text_color}">

<div style="display: inline-block;width: 100%;">
              <div style="width: 40px;float: left;height: 60px;display: inline-block;">
              <Phone :color="item.text_color" class="mr6" /></div>
<template v-if="item.phone_number">
{{item.phone_number}}<br>             {{button.color}}
</template>


</div>


<br>
<template v-if="item.contact">
<div style="display: inline-block;width: 100%;">
<div style="width: 40px;float: left;height: 60px;display: inline-block;">
<Envelope :color="item.text_color" class="mr6 centeredSvg" style="position: initial;width: 20px;margin-right: 10px;" />
</div>


<template v-for="line in item.contact.contact_lines">
{{line.line}}<br>
</template>
<br>
</div>
</template>

<template v-if="item.address">
<div style="display: inline-block;width: 100%;">
<div style="width: 40px;float: left;height: 60px;display: inline-block;">
<MapPin :color="item.text_color" class="mr6" />
</div>
<template v-for="line in item.address.address_lines">

{{line.line}}<br>
</template>
<br>

</div>
</template>



<template v-if="item.hours">
<div style="display: inline-block;width: 100%;">
<div style="width: 40px;float: left;height: 60px;display: inline-block;">
<Clock :color="item.text_color" class="mr6" />
</div>
<template v-for="line in item.hours.hours_lines">

{{line.line}}<br>
</template>
<br>
</div>
</template>
              </div>


                              </div>
                     
                      </div>
                                          <!--end row-->
</div>
                     <!--end container-->

                      </section>




<!--social section-->
<template v-if="item.social">

<section class="secPadMed social" v-bind:style="{ 'background-color': item.text_color, 'color': item.background_color }">




    <div class="container mobilePage">

     <!--begin row-->
<div class="row">
             
                                          
<div class="col-sm-6 social-text">

<h3>  
follow us
</h3>
</div>

<div class="col-sm-6 social-icons">
<template v-for="social in item.social">

<div class="socialLink">
<a :href="social.link" :title="social.title" target="_blank">
      <div v-html="social.svg"></div>
</a>
</div>



</template>

</div>
</div>
</div>

</section>
</template>


<!--end social section-->





<!--notification section-->
<template v-if="item.notification">

  


<section class="secPad" v-bind:style="{ 'background-color': item.background_color, 'color': item.text_color }">


    <div class="container mobilePage">

     <!--begin row-->
<div class="row">
             
                                          
<div class="col-sm-8 offset-2">


<h3>  
{{item.notification}}
</h3>


</div></div></div>
</section>
</template>

<!--end notification section-->



 <!--map section-->
<template v-if="item.map">

<section class="secPad" v-bind:style="{ 'background-color': item.text_color, 'color': item.background_color }">



    <div class="container mobilePage noPadMob">

     <!--begin row-->
<div class="row">


<div class="col-sm-6">

      <div class="map" v-html="item.map.map_embed"></div>
</div>

<div class="col-sm-6" style="position:relative">



<div style="position: absolute;bottom: 0;">



<template v-if="item.address">
<template v-for="line in item.address.address_lines">

{{line.line}}<br>
</template>

</template>

</div>

</div></div></div>


</section>
</template>

 <!--end map section-->




















<!--lr mod repeater-->

<template v-if="item.lr_mod_repeater">
<template v-for="(repeat,index) in item.lr_mod_repeater">



<template v-if="index % 2 === 0">
<section class="flexSection" v-bind:style="{ 'background-color': item.background_color, 'color': item.text_color, 'width': '100%' }">
<div class="half-panel with-background" v-bind:style="{ 'background-color': item.background_color}">
<div class="imagePanel" v-bind:style="{ 'background-image': 'url(' + repeat.image + ')' }">
_</div>

</div>
<div class="half-panel right" :style="{'background-color': item.background_color, 'position': 'relative','height':'100vh', 'padding':0}">
  <div :style="{'background-color': item.background_color, 'position': 'absolute', 'bottom': '60px'}">
      <div>
      <h3>  
        {{repeat.text}}
      </h3>
      <br>






       <a class="ctaLink" target="_blank" :style="styleObject" :href="repeat.button_link">{{repeat.button_text}}</a>

      </div>
  </div>
</div>
</section>
</template>
<template v-else>
<section class="flexSection" v-bind:style="{ 'background-color': item.text_color, 'color': item.background_color, 'width': '100%'}">
<div class="half-panel with-background" v-bind:style="{ 'background-color': item.text_color}">
<div class="imagePanel" v-bind:style="{ 'background-image': 'url(' + repeat.image + ')' }">
_</div>

</div>
<div class="half-panel right" :style="{'background-color': item.text_color, 'position': 'relative','height':'100vh', 'padding':0}">
  <div :style="{'background-color': item.text_color, 'position': 'absolute', 'bottom': '60px'}">
      <div>
      <h3>  
        {{repeat.text}}
      </h3>
      <br>

                              <a class="ctaLinkOpposite" target="_blank" :style="styleObject" :href="repeat.button_link">{{repeat.button_text}}</a>
      </div>
  </div>
</div>
</section>
</template>






</template>



</template>


<!--end lr mod repeater-->






<!--full width image-->
<template  v-if="item.full_width">

<section class="secPad fh" v-bind:style="{ 'background-size': 'cover', 'background-image': 'url(' + item.full_width + ')', 'height': '100vh' }">


</section>

</template>

<!--end full width image-->






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
import Nav2 from "@/components/Nav2";



import Phone from "@/components/svgIcons/Phone";
import Clock from "@/components/svgIcons/Clock";
import MapPin from "@/components/svgIcons/MapPin";
import Envelope from "@/components/svgIcons/Envelope";



import VideoComponent from "@/components/VideoComponent";

export default {
  components: {
    ALaCarte,
    Nav2,
    Phone,
    Clock,
    Envelope,
    MapPin,
    VideoComponent
  },

computed: {

    styleObject() {
      return {
        '--button-color': this.button.color,
        '--button-background-color': this.button.colorBackd,
        '--button-border-color': this.button.borderColor,
        
        '--button-color--hover': this.button.colorHover,
        '--button-background-color--hover': this.button.colorBackdHover,
        '--button-border-color': this.button.borderColorHover
      };
    },












    containsYN(){


    // let arrRest = this.this.$store.state.pageData[0].restaurant_repeater.map(x=>x.name.replace(" ", ""));

    let arrRest = this.$store.state.pageData[0];

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
      button:{
        colorBackd: '',
        colorBackdHover: '',
        color: '',
        colorHover: '',
        borderColor: '',
        borderColorHover: ''
    },
notificationVisible: true,
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
dismissNotification(){
  this.notificationVisible = false;
},
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



    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields
    this.pageData = AcfBlock.data.acf.restaurants







for(var i in this.$store.state.pageData[0].restaurant_repeater){



if(this.restaurantName === this.$store.state.pageData[0].restaurant_repeater[i].name){
console.log(this.$store.state.pageData[0].restaurant_repeater[i])



this.button.color = this.$store.state.pageData[0].restaurant_repeater[i].button_text_color
this.button.colorHover = this.$store.state.pageData[0].restaurant_repeater[i].button_color
this.button.colorBackd = this.$store.state.pageData[0].restaurant_repeater[i].button_color
this.button.colorBackdHover = this.$store.state.pageData[0].restaurant_repeater[i].button_text_color


console.log(this.$store.state.pageData[0].restaurant_repeater[i].button_text_color);
console.log(this.$store.state.pageData[0].restaurant_repeater[i].background_color);
console.log(this.$store.state.pageData[0].restaurant_repeater[i].button_color);
console.log(this.$store.state.pageData[0].restaurant_repeater[i].button_text_color);





}

}



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

        // console.log(this.$route.name);
  }
};

</script>


<style lang="scss">


.topSection{
  background-size: cover;
    margin-top: 92px;
}

.fh{
min-height: 80vh;

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



.pt132{
  padding-top: 132px;
}


.restaurantLogo{


width: 300px;
    margin: 0 auto;
    text-align: center;
    height: 100%;
    position: relative;
    width: 100%;
    min-height: 80vh;

svg{

      width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

}



.half-panel{
  width: 50%;
float: left;
padding: 50px;
    &.with-background{
          background-size: cover;
    background-position: center center;
    padding: 36px;
    
    }
h3{
  width: 300px;
}


&.right{
  height: 100vh;
  padding: 0px;
}

 @media only screen and (max-width: 768px) {

  width: 100%;
float: left;
padding: 50px;
    &.with-background{
          background-size: cover;
    background-position: center center;
   padding: 16px;
    
    }
h3{
  width: 300px;
}

&.right{
  min-height: 250px !important;
  padding: 16px !important;
  height: auto !important;

    
}

&.right > div{
bottom: 16px !important;


width: calc(100% - 32px);

    
}


 }





}






.secPad{
  padding: 60px 0;


 @media only screen and (max-width: 768px) {
padding: 20px 16px; 
 }

}


.secPadMed{
  padding: 34px 0;
}



.map iframe{
  width: 280px;
  height: 280px;
  border: 1px solid;
  border-radius: 10px;
  float: right;


 @media only screen and (max-width: 768px) {
width: 100%;
float: none;
 }



}

h3{
 font-size: 1.6rem;
}

h4{
 font-size: 1.2rem;
}


.socialLink{
  display: inline-block;
  margin: 0 30px;
}


.header-notification{
    background-color: #000582;
    color: #ffffff;
    position: absolute;
    top: 90px;
    z-index: 99;
    width: 100%;
    padding: 30px 0;
}


.imagePanel{
background: red;
color: transparent;
width: calc(100%-72px);
height: 100%;

          background-size: cover;
    background-position: center center;
 height:100vh;


 @media only screen and (max-width: 768px) {

height: 300px;
 }



}

.dismissNotification{
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}


a.ctaLink,
a.ctaLinkOpposite{
display: block;
border-radius: 5px;
width: 300px;
margin: 10px 0;
text-align: center;
padding: 3px 10px 5px;
font-size: 22px;
font-weight: 500;


 @media only screen and (max-width: 768px) {
    width: 100%;
 }

}









.flexSection{


display: inline-flex;


 @media only screen and (max-width: 768px) {

display: block;
 }


}


section{
  overflow-x: hidden;
}


.social-text{

text-align: right;
 @media only screen and (max-width: 768px) {

text-align: center;
margin-bottom: 12px;
 }


}


.social-icons{


 @media only screen and (max-width: 768px) {

text-align: center;
 }

}


.noPadMob{

   @media only screen and (max-width: 768px) {


     padding-left: 0;
     padding-right: 0;
   }

}



a.ctaLink {
  color: var(--button-color);
  background-color: var(--button-background-color);
 

border: 2px solid;
border-color: var(--button-color);

  transition: all .5s ease;


  text-decoration: none;
&:hover {
  color: var(--button-color--hover);
  background-color: var(--button-background-color--hover);
  border-color: var(--button-border-color--hover);
}
}


a.ctaLinkOpposite {
  color: var(--button-color);
  background-color: var(--button-background-color);
 

border: 2px solid;



  color: var(--button-color--hover);
  background-color: var(--button-background-color--hover);
  border-color: var(--button-border-color--hover);



  transition: all .5s ease;


  text-decoration: none;
&:hover {
  color: var(--button-color);
  background-color: var(--button-background-color);
 


border-color: var(--button-color);
}
}


</style>