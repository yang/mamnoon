<template>
    <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4 class="mob-bottom-margin">
          
             <router-link to="/retail">
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
          :key="refresh"
        >
           <template class="subprev" slot="prev">
            <span class="prev">
              <Prev />
            </span>
          </template>


<div @click="goToRetail()" class="text-center" style="" v-for="item in retailItems" :key="item.id">





<div v-if="item.images" class="squareAspect" :style="{'backgroundImage': 'url('+item.images.online_ordering_menu.main+')'}">



  <!-- <img :src="item.images.online_ordering_menu.main" alt=""> -->
  </div>
<div v-else>

<NadiIconSmInv />
</div>

              <div class="order-bottom">
                {{item.name}}
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
        <router-link to="/retail">
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

import NadiIconSm from "@/components/svgIcons/NadiIconSm";
import NadiIconSmInv from "@/components/svgIcons/NadiIconSmInv";
export default {
    data() {
      return {
          refresh: 0,
        upserve: [],
        upserveList: [],
        upserveSections: [],
        retailItems: []
      }
    },
    components:{
      NadiIconSmInv,
        carousel,
        Next,
        Prev,
        ShowAll,
        Order
    },
    name: 'onlineshop',
    props: ['data','header','tag','description'],
    methods: {
      goToRetail(){
 this.$router.push("/retail");
      },
      leadInScroll: function(){
console.log('send and expand to retail')
      },
       async upservesMongo() {
      let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);
      let upserveProducts = responseUpserve.data.doc[0].menu.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.doc[0].menu.sections;



let upserveSectionsRetail = this.upserveSections.filter(item => item.name === 'Spices'||item.name === 'Holiday Retail'||item.name === 'Pantry Items').map(x => x.item_ids).flat();
// console.log(upserveSectionsRetail)
// console.log(this.upserveList)

      this.retailItems = this.upserveList.filter(x=>upserveSectionsRetail.includes(x.id))
    // console.log(this.retailItems)
    
      this.refresh++;
    },



async upserves() {




      let responseUpserve = await this.$http.get('/product/upserveolo');
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;



let upserveSectionsRetail = this.upserveSections.filter(item => item.name === 'Spices'||item.name === 'Holiday Retail'||item.name === 'Pantry Items').map(x => x.item_ids).flat();
// console.log(upserveSectionsRetail)
// console.log(this.upserveList)

      this.retailItems = this.upserveList.filter(x=>upserveSectionsRetail.includes(x.id))
    // console.log(this.retailItems)
    
      this.refresh++;
    },


    },
    mounted(){
// this.upserves()

this.upservesMongo()
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



.squareAspect {
  position: relative;
  width: 100%;
  background-position: center center;
  background-size: cover;
}

.squareAspect:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

</style>