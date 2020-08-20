<template>
  <section class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>Testimonials</h4>

        <carousel :items="1" :loop="false" :dots="false" :nav="false">
            <template class="subprev" slot="prev">
                <span class="prev">
                    <Prev />
            </span>
          </template>
<div v-for="item in data" :key="item.testimonial.quote">
            <div class="height-100">
              <div class="l-col">
                <div class="quote-container">
                  <div class="md">{{ item.testimonial.quote }} - {{ item.testimonial.author }}</div>
                </div>
              </div>
            </div>
  </div>
          <template v-if="index === 0 || index === 1" slot="next"></template>
          <template v-else class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
        </carousel>
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


