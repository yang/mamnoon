<template>
  <section id="testimonials" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>{{header.header}}</h4>
        <p class="description-para noselect">{{header.description}}</p>
        <div class="width-container">
            <Mamnoon :caviarLink="true" />
            <MamnoonStreet :caviarLink="true" />
        </div>
    </section>
</template>

<script>

import Mamnoon from '@/components/svgIcons/Mamnoon.vue'
import MamnoonStreet from '@/components/svgIcons/MamnoonStreet.vue'
export default {
    components:{
        Mamnoon,
        MamnoonStreet
    },
    name: 'alacarte',
    props: ['data','header'],
    data () {
        return {

        }
    }
}

</script>