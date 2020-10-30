<template>
    <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>{{header}}</h4>
                <p class="description-para noselect">{{description}}</p>
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
<img :src="item.shop_item.image" />
              <div class="order-bottom">
                {{item.shop_item.name}}
                <div class="order-panel">
               
                  <button
                    class="snipcart-add-item"
                    v-bind:data-item-id="item.shop_item.id"
                    v-bind:data-item-price="item.shop_item.price"
                    v-bind:data-item-image="item.shop_item.image"
                    v-bind:data-item-name="item.shop_item.name"
                    v-bind:data-item-description="item.shop_item.description"
                    v-bind:data-item-weight="item.shop_item.weight"
                  >
                    <Order />
                  </button>
                </div>
              </div>
        </div>
          <!-- <template v-if="index === 0 || index === 1" slot="next"></template> -->
          <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
      <div class="text-center mb-perfect">
        <router-link to="/shop">
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
    props: ['data','header','tag','description']
}
</script>


<style>
.mb-perfect{
  margin-bottom: 0px;
  height: 90px;
}






</style>