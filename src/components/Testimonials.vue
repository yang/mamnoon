<template>
  <section class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>Testimonials</h4>
<!--carousel-->
        <carousel
          :responsive=" {0:{items:1},768:{items:1},1080:{items:1}}"
          :items="1"
          :loop="true"
          :dots="false"
          :nav="false"
          :autoplay="true" :autoplaySpeed="1000"  
        >
           <template class="subprev" slot="prev">
            <span class="prev">
              <Prev />
            </span>
          </template>

<div v-for="item in data" :key="item">
{{ item.testimonial }}
</div>


          <!-- <template v-if="index === 0 || index === 1" slot="next"></template> -->
          <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
<!--carousel-->



</section>
</template>

<script>



import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";


export default {
    components:{
        carousel,
        Next,
        Prev
    },
    name: 'testimonials',
    props: ['data']
}
</script>
