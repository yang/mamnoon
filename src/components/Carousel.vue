<template>
    <main>
      <section :id="offering.category" v-for="(offering,index) in offerings" v-bind:key="offering.title" class="section hero is-primary is-fullheight" v-bind:class="{familymeal : index === 0}">

<!-- {{index}} -->

        <div v-if="offering.visible" class="carousel">
       <h4>{{offering.title}}</h4>
      <carousel :items="offering.slideNo ? offering.slideNo : 3" :loop="false" :dots="false" :nav="false">





<template v-if="index === 0" slot="prev"><span class="prev"><Prev /></span></template>
<template v-else class="subprev" slot="prev"><span class="prev"><Prev /></span></template>
 

          <div v-for="item in offering.items" v-bind:key="item.name" style="text-align:center;margin-top: 15px;">
            <!-- {{item.name}} ${{item.price}} -->
            
            <img v-bind:src="item.img" />
            {{item.description}}
   

            <template v-if="item.caviarLink">
              <div class="order-bottom">
                {{item.name}}
                       <div class="order-panel">
              <a :href="item.caviarLink" target="_blank"><Order /></a>
                            </div>
                            </div>
            </template>




<div v-if="item.quote">
{{item.quote}}
</div>

          </div>






<template v-if="index === 0" slot="next"><span class="next"><Next /> </span></template>
<template v-else class="subnext" slot="next"><span class="next"><Next /> </span></template>

        </carousel>  


<div v-if="offering.tockButton" class="order-bottom">
              <div id="mama-dummy-button" class="TockButton-buttonContainer" style="cursor: pointer;">
                <div data-tock-reserve="true" class="TockButton-link">
                  <div class="TockButton TockButton-blue">
                    <span class="TockWidget-B2" @click="loggit()"><OrderStar /></span>
                  </div>
                </div>
              </div>
</div>
        </div>

      </section>



<Newsletter />
  </main>





</template>

<script>

import carousel from 'vue-owl-carousel'


import Order from "@/components/Order";
import OrderStar from "@/components/OrderStar";


import Next from "@/components/Next";
import Prev from "@/components/Prev";



import Newsletter from "@/components/Newsletter";



export default {
  components: { carousel, Order, OrderStar, Next, Prev, Newsletter },
  computed: {
    count () {
      return this.$store.state.count
    },
    names () {
      return this.$store.state.names
    },
    cart () {
      return this.$store.state.cart
    }
  },
  data () {
    return this.$store.state.inventory
  },
  methods: {
    loggit () {
      console.log(134)
    },
    toggle: function (event) {
      if (event.target.classList.contains('is-open')) {
        this.$store.commit('decrement')
        event.target.classList.remove('is-open')
      } else {
        event.target.classList.add('is-open')
        this.$store.commit('increment')
      }
    },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    increment2 (name) {
      this.$store.commit('increment2', { name })
    },
    removeFromCart (price) {
      this.$store.commit('removeFromCart', { price })
    },
    confirmOrder (timeslot) {
      if (event.target.classList.contains('reserved')) {
        this.$store.commit('unreserveFamilyMeal', { timeslot })
      } else {
        this.$store.commit('reserveFamilyMeal', { timeslot })
      }
    }
  }
}
</script>


<style lang="scss">
.reserved{
  background: red;
}

.not-available{
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}


.order-button{
  width: 33.33%;
  padding: 20px 0;
}


h4{
  text-align: center;
}

.is-fullheight,
.familymeal,
.narrow{
  background-color: #F05D5B;


  h4{
        color: #FFF367;
  }
}




.section.hero.familymeal{
      width: 88%;
      margin: 0 auto;
}

// [id^=carousel_prev_]{
//   position: absolute;
//   top: 0;
//   left: 33%;
// }

// [id^=carousel_next_]{
//   position: absolute;
//   top: 0;
//   right: 33%;
// }





.is-fullheight [id^=carousel_prev_]{
  position: absolute;
  top:0px;
  left: 33%;
  // display: none;
}

.is-fullheight [id^=carousel_next_]{
  position: absolute;
  top: 0px;
  right: 33%;
  // display: none;
}



.is-fullheight.familymeal [id^=carousel_prev_]{
  position: absolute;
  bottom:30px;
  top: initial;
  left: 33%;
  // display: none;
}

.is-fullheight.familymeal [id^=carousel_next_]{
  position: absolute;
bottom: 30px;
  top: initial;
  right: 33%;
  // display: none;
}


.is-fullheight,
.familymeal{
  padding: 20px 0 0 0;
  }


.order-bottom{
  background: #FFF367;
  padding: 10px 0;
  color: black;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 18px;
    font-weight: 500;
    line-height: 1.2;

}
  

.order-panel{
    padding: 10px 0;
}



#mama-dummy-button{
  width: 70px;
  margin: 0 auto;
}




.carousel{
  margin-bottom: 100px;
}



@media only screen and (max-width: 1080px) {

.carousel{
  margin-bottom: 40px;
}


}

</style>