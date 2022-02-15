<template>
  <div class="pt100" style="overflow-x:hidden;">
    <Nav3 />

    <div class="rotating-letters-container" style="display:none;">
      <!-- cff -->

      <!-- <div class="bottom-attach orange" style="bottom:0px;left:10px;width: 100%;" :style="{ backgroundImage: 'url(' + require('@/assets/orangezig.svg') + ')' }"> -->

      <!-- <div class="bottom-attach grey" style="bottom:0px;width: 100%;" :style="{ backgroundImage: 'url(' + require('@/assets/greyzig.svg') + ')' }"> -->
      <div
        class="bottom-attach grey"
        style="bottom:0px;width: 100%;overflow:hidden;height: 100px;"
      >
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
              <transition name="fade"
                ><div v-if="currentIndex === 0">
                  mama means <span>love</span>
                </div></transition
              >
              <transition name="fade"
                ><div v-if="currentIndex === 1">
                  mama means <span>reservations</span>
                </div></transition
              >
              <transition name="fade"
                ><div v-if="currentIndex === 2">
                  mama means <span>fresh</span>
                </div></transition
              >
              <transition name="fade"
                ><div v-if="currentIndex === 3">
                  mama means <span>shopping</span>
                </div></transition
              >
              <transition name="fade"
                ><div v-if="currentIndex === 4">
                  mama means <span>delivery</span>
                </div></transition
              >
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
    <GlobalFooter />
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";

import UserProfile from "@/components/UserProfile";
import Products from "@/components/Products";
import Nav3 from "@/components/Nav3";

import GlobalFooter from "@/components/GlobalFooter";
import Stars from "@/components/Stars";
import StarsLeft from "@/components/StarsLeft";

export default {
  components: {
    Products,
    UserProfile,
    Nav3,
    Stars,
    StarsLeft,
    GlobalFooter,
  },
  data() {
    return {
      // items: [1,2,3,4,5],
      currentIndex: 0,
      user: {},
      products: "",
    };
  },
  methods: {
    countDown: function() {
      if (this.currentIndex === 4) {
        this.currentIndex = 0;
        // console.log(this.currentIndex)
      } else {
        this.currentIndex = this.currentIndex + 1;
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
      if (localStorage.getItem("jwt")) {
        let token = localStorage.getItem("jwt");
        let decoded = VueJwtDecode.decode(token);
        this.user = decoded;
      }
    },
    async getUserProducts() {
      let response = await this.$http.get("/api/user/" + this.user._id);
      this.products = response.data.user.products;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
  mounted: function() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.countDown();
      }, 4000);
    });
  },
};
</script>

<style scoped lang="scss">
  @import '@/assets/styles/css/home.scss';
</style>
