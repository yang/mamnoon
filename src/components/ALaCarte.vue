<template>
  <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>{{header}}</h4>
        <p class="description-para noselect">{{description}}</p>
        <div class="width-container">

                         <router-link to="/mamnoon">
                         <!-- mamnoon -->
               <Mamnoon :caviarLink="false" />
            </router-link>

    
  
            <!-- <MamnoonStreet :caviarLink="false" /> -->
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
    props: ['data','header','tag','description'],
    data () {
        return {

        }
    }
}

</script>