<template>
  <div>
<Nav />

<div class="rotating-letters-container">
  <!-- cff -->
  <div class="bottom-attach">
  <div class="container rotating-letters">
      <h2>
      MAMA MEANS&nbsp;&nbsp;<div class="currentIndexLetters">
      
          <transition name="fade"><span v-if="currentIndex === 0">&nbsp;&nbsp;love</span></transition><transition name="fade"><span v-if="currentIndex === 1">reservations</span></transition><transition name="fade"><span v-if="currentIndex === 2">fresh</span></transition><transition name="fade"><span v-if="currentIndex === 3">shopping</span></transition><transition name="fade"><span v-if="currentIndex === 4">delivery</span></transition>
</div>



    </h2>
</div>
</div>
</div>

      <!-- <div class="container mt-5 nav-acc-header"> -->
      <div class="container mt-5">
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

export default {
    components: {
    SlideShow,
    Products,
    UserProfile,
    Nav
  },
  data() {
    return {
        items: [1,2,3,4,5],
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
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
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
            },2000);
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
  }
}

.rotating-letters-container{
    width: 100%;
    height: 200px;
    height: 225px;
    background: transparent;
    position: relative;
}


.bottom-attach{
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #49494a;
}


@media only screen and (max-width: 1080px) {


.rotating-letters-container{
  width: 100%;
  height: 146px;

}


.rotating-letters{
    // padding-top: 100px;
  text-align: center;
}


.rotating-letters h2{
      transform: translateX(-50px);
      text-transform: lowercase;
        font-size: 30px;
      transform: translateX(-10%);
      span{
        color: #fff367;
      }
}


} 


@media only screen and (max-width: 640px) {
.rotating-letters h2{
font-size: 22px;
transform: translateX(-70px);

span{
      left: 4px;
}
} 


.rotating-letters-container{
      height: 136px;
}

}

.rotating-letters h2{
      text-transform: lowercase;
      margin-top: 4px;
      padding-top: 2px;
      span{
        color: #fff367;
      }
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave-active {
  transition: opacity 0s;
}


.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.currentIndexLetters{
  display: inline;
  position: relative;
  margin-left: 4px;
  span{
    position: absolute;
    top: 0;
    left: 9px;
  }
}




</style>