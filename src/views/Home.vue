<template>
<div style="overflow-x:hidden;">
<Nav />

<div class="rotating-letters-container">
  <!-- cff -->





  <!-- <div class="bottom-attach orange" style="bottom:0px;left:10px;width: 100%;" :style="{ backgroundImage: 'url(' + require('@/assets/orangezig.svg') + ')' }"> -->



  <!-- <div class="bottom-attach grey" style="bottom:0px;width: 100%;" :style="{ backgroundImage: 'url(' + require('@/assets/greyzig.svg') + ')' }"> -->
     <div class="bottom-attach grey" style="bottom:0px;width: 100%;overflow:hidden;height: 100px;">

<div style="position:absolute;width: 100%;height: 100px;top:0;left:0;">
<div style="position:relative;width: 100%;height: 100px;">

<div class="sliderDiv left">

<Stars />
<Stars />
<Stars />
<Stars />
<Stars />



     </div>



<div class="sliderDiv left xx-left">

<Stars />
<Stars />
<Stars />
<Stars />
<Stars />



     </div>



<div class="sliderDiv right">
<StarsLeft />
<StarsLeft />
<StarsLeft />
<StarsLeft />
<StarsLeft />

     </div>


<div class="sliderDiv right xx-right">
<StarsLeft />
<StarsLeft />
<StarsLeft />
<StarsLeft />
<StarsLeft />

     </div>



</div>
</div>
  <div class="container rotating-letters" style="padding-top: 20px;">

      <h2>
      <!-- MAMA MEANS&nbsp;&nbsp; -->
      <div class="currentIndexLetters" style="width:100%;">
      
          <transition name="fade"><div v-if="currentIndex === 0">mama means <span>love</span></div></transition>
          <transition name="fade"><div v-if="currentIndex === 1">mama means <span>reservations</span></div></transition>
          <transition name="fade"><div v-if="currentIndex === 2">mama means <span>fresh</span></div></transition>
          <transition name="fade"><div v-if="currentIndex === 3">mama means <span>shopping</span></div></transition>
          <transition name="fade"><div v-if="currentIndex === 4">mama means <span>delivery</span></div></transition>
</div>



    </h2>
</div>
</div>







</div>

      <!-- <div class="container mt-5 nav-acc-header"> -->
      <div class="container mt-5 home-page">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group" style="display:none;">
              <li class="list-group-item">Name : {{ user.name }}</li>
              <li class="list-group-item">Email : {{ user.email }}</li>
              </ul>
<ul style="display:none;">
  <li v-for="item in products" v-bind:key="item">
    {{ item }}
  </li>
  </ul>

<SlideShow />
          </div>
        </div>
      </div>

  </div>
</template>
<script>

import VueJwtDecode from "vue-jwt-decode";
import SlideShow from "@/components/SlideShow";
import UserProfile from "@/components/UserProfile";
import Products from "@/components/Products";
import Nav from "@/components/Nav";


import Stars from "@/components/Stars";
import StarsLeft from "@/components/StarsLeft";


export default {
    components: {
    SlideShow,
    Products,
    UserProfile,
    Nav,
    Stars,
    StarsLeft,
  },
  data() {
    return {
        // items: [1,2,3,4,5],
        currentIndex: 0,
      user: {},
      products: ''
      };
  },
  methods: {
    countDown: function(){
        if(this.currentIndex === 4){
          this.currentIndex = 0
          // console.log(this.currentIndex)
        }else{
          this.currentIndex = this.currentIndex + 1
          // console.log(this.currentIndex)
        }
    },
    // randomIndex: function () {
    //   return Math.floor(Math.random() * this.items.length)
    // },
    // add: function () {
    //   this.items.splice(this.randomIndex(), 0, this.nextNum++)
    // },
    // remove: function () {
    //   this.items.splice(this.randomIndex(), 1)
    // },
    getUserDetails() {

      if(localStorage.getItem("jwt")){
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    }
    },
    async getUserProducts(){

      let response = await this.$http.get('/api/user/' + this.user._id) 
      this.products = response.data.user.products
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
    },
  created() {
    this.getUserDetails();
  },
    mounted: function () {
        this.$nextTick(function () {
            window.setInterval(() => {
                this.countDown();
            },4000);
        })
    }
};
</script>

<style scoped lang="scss">
.fix-top-nav{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    top: 44px;
}

.section.hero{
  width: 100%;
  height: 100vh;
}
.nav-acc-header{
  padding-top: 130px;
transition: padding .5s ease;
&.morePadding{
    padding-top: 300px;
}
}

@media only screen and (max-width: 1080px) {
.nav-acc-header{
  // padding-top: 90px;
    padding-top: 60px;
transition: padding .5s ease;
&.morePadding{
    padding-top: 250px;
}

}

}

.rotating-letters{
    // padding-top: 158px;
        // padding-top: 148px;
  text-align: center;
  h2{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 50px;
    // font-style: italic;
    color: #f38e5e;
        margin-top: 4px;
        position: relative;
            margin-top: 25px;
  }
}

.rotating-letters-container{
    width: 100%;
    height: 200px;
    height: 225px;
    height: 245px;
    height: 265px;
    height: 285px;
    height: 315px;
    background: transparent;
    position: relative;
}


.bottom-attach{
  
position: absolute;
    bottom: 0;
    width: 100%;
    // height: 63px;
    height: 106px;
    background-size: 28%;
    background-repeat: repeat-x;
@media only screen and (max-width: 640px) {

    height: 35px;
    }



&.yellow{
&:after{
  animation: marqueeOp 120s linear infinite;
    // background: linear-gradient(-45deg, #FFF367 16px, transparent 0), linear-gradient(45deg, #FFF367 16px, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 32px 32px;
    content: " ";
    display: block;
    position: absolute;
    bottom: -32px;
    left: 0px;
    width: 100%;
    height: 32px;
    // transform: rotate(180deg);


    background-image: url('https://www.nadimama.com/assets/img/yellowtri.svg');
}



&:before{
  animation: marquee 120s linear infinite;
    // background: linear-gradient(-45deg, #FFF367 16px, transparent 0), linear-gradient(45deg, #FFF367 16px, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 32px 32px;
    content: " ";
    display: block;
    position: absolute;
    top: -32px;
    left: 0px;
    width: 100%;
    height: 32px;
background-image: url('https://www.nadimama.com/assets/img/yellowtri.svg');
    transform: rotate(180deg);
}



}


&.orange{
&:after{
  animation: marquee 120s linear infinite;
    // background: linear-gradient(-45deg, #F38E5E 16px, transparent 0), linear-gradient(45deg, #F38E5E 16px, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 32px 32px;
    content: " ";
    display: block;
    position: absolute;
    bottom: -32px;
    left: 0px;
    width: 100%;
    height: 32px;
    // transform: rotate(180deg);
    background-image: url('https://www.nadimama.com/assets/img/orangetri.svg');
}


&:before{
  animation: marqueeOp 120s linear infinite;
    // background: linear-gradient(-45deg, #F38E5E 16px, transparent 0), linear-gradient(45deg, #F38E5E 16px, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 32px 32px;
    content: " ";
    display: block;
    position: absolute;
    top: -32px;
    left: 0px;
    width: 100%;
    height: 32px;
        transform: rotate(180deg);
    background-image: url('https://www.nadimama.com/assets/img/orangetri.svg');

}

}


&.grey{
  background-color: #49494A;
// &:after{
//   // animation: marquee 20s linear infinite;
//     background: linear-gradient(-45deg, #49494A 16px, transparent 0), linear-gradient(45deg, #49494A 16px, transparent 0);
//     background-position: left-bottom;
//     background-repeat: repeat-x;
//     background-size: 32px 32px;
//     content: " ";
//     display: block;
//     position: absolute;
// bottom: -32px;
//     left: 0px;
//     width: 100%;
//     height: 32px;
//     transform: rotate(180deg)

// }



// &:before{

//     background: linear-gradient(-45deg, #49494A 16px, transparent 0px), linear-gradient(45deg, #49494A 16px, transparent 0);
//     background-position: left-bottom;
//     background-repeat: repeat-x;
//     background-size: 32px 32px;
//     content: " ";
//     display: block;
//     position: absolute;
//     top: -32px;
//     left: 0;
//     width: 100%;
//     height: 32px;

// }


}


}


@media only screen and (max-width: 1080px) {


.rotating-letters-container{
  width: 100%;
  // height: 146px;
  height: 176px;
display: none;
}


.rotating-letters{
    // padding-top: 100px;
  text-align: center;
}


.rotating-letters h2{
      // transform: translateX(-50px);
      text-transform: lowercase;
        font-size: 30px;
      // transform: translateX(-10%);
      span{
        color: #fff367;
      }
}


} 


@media only screen and (max-width: 640px) {
.rotating-letters h2{
font-size: 22px;
// transform: translateX(-70px);

span{
      left: 4px;
}
} 


.rotating-letters-container{
      // height: 136px;
          // height: 176px;
              height: 150px;
}

}

.rotating-letters h2{
      text-transform: lowercase;
      margin-top: 4px;
      padding-top: 2px;
             color: #fff367;
      span{
        color: #f38e5e;
      }
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave-active {
  transition: opacity .5s;
}


.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.currentIndexLetters{
  // display: inline;
  // position: relative;
  // margin-left: 4px;
  position: relative;
  span{
    // position: absolute;
    // top: 0;
    // left: 9px;
  }
}


.currentIndexLetters > div{
  width: 100%;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 38px;


@media only screen and (max-width: 640px) {
      font-size: 18px;
}


}



 .flip-horizontal{
    //    -moz-transform: scaleX(-1);
    // -webkit-transform: scaleX(-1);
    // -o-transform: scaleX(-1);
    // transform: scaleX(-1);
    // -ms-filter: fliph; /*IE*/
    // filter: fliph; /*IE*/
 }



@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}

@keyframes marqueeOp {
  0% { left: -100%; }
  100% { left: 0%; }
}
// marqueeOp 


 .moved-over{

   left: calc(100%);

 }






@media only screen and (max-width: 1080px) {
.container.mt-5{
padding-top: 100px;
}

}


@media only screen and (max-width: 640px) {
.container.mt-5.home-page{
padding-top: 80px;
}

}



.sliderDiv{

overflow: hidden;
  animation-name: slider;
  animation-duration: 8s;
  animation-iteration-count: infinite;
    animation-timing-function: linear;
}





@keyframes slider {
    0%   { transform: translateY(0) }
    100% { transform: translateY(-400px) }
}





.sliderDiv{

    // position: relative;
    position: absolute;
  top:0;
  width:28%;
  height: 500px;
  background: transparent;
  border-bottom: 1px solid yellow;




  &.left{
  left:0;


&.xx-left{
  left: -500px;
}

  }



  &.right{
  right:0;


&.xx-right{
  right: -500px;
}

  }

}

.squareStar{
  display:block;
  width:100%;
  height:50px;
    background: orange;
}


.squareStar1{
  display:block;
  width:100%;
  height:50px;
      background: transparent;
}


</style>