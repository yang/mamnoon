<template>
    <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4 class="mob-bottom-margin">
          
             <router-link to="/shop">
                    {{header}}
             </router-link>
          </h4>
                <p class="description-para noselect hide-mobile">{{description}}</p>
        <carousel
          :responsive=" {0:{items:1},480:{items:2},1080:{items:3}}"
          :items="1"
          :loop="false"
          :dots="false"
          :nav="false"
        >
           <template class="subprev" slot="prev">
            <span class="prev">
              <Prev />
            </span>
          </template>
<div class="text-center" v-for="item in data" :key="item.shop_item.name">
<img class="lazy" :src="item.shop_item.image.replace('.jpg','-768x768.jpg')" />






              <div class="order-bottom">
                {{item.shop_item.name}}
              </div>
        </div>
          <!-- <template v-if="index === 0 || index === 1" slot="next"></template> -->
          <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
      <div class="text-center mb-perfect" @onclick="leadInScroll()">
        <router-link to="/mamnoon">
       <ShowAll />
        </router-link>
        </div>


    </section>
</template>
<script>
import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import ShowAll from "@/components/svgIcons/ShowAll";
import Order from "@/components/svgIcons/Order";
export default {
    components:{
        carousel,
        Next,
        Prev,
        ShowAll,
        Order
    },
    name: 'onlineshop',
    props: ['data','header','tag','description'],
    methods: {
      leadInScroll: function(){
console.log('send and expand to retail')
      }
    }
}
</script>


<style lang="scss">
.mb-perfect{
  margin-bottom: 0px;
  height: 90px;
}


.mob-bottom-margin a{
color: #fff367;
}



</style>