<template>
  <section :id="tag" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>{{header}}</h4>
        <p class="description-para noselect">{{description}}</p>
        <div class="width-container">

                         <router-link to="/mamnoon">
                         <!-- mamnoon -->
               <Mamnoon1 :caviarLink="false" />
            </router-link>
              <router-link to="/mamnoonstreet">
    
  
            <MamnoonStreet1 :caviarLink="false" />
                          </router-link>
        </div>
    </section>
</template>

<script>

import Mamnoon1 from '@/components/svgIcons/Mamnoon1.vue'
import MamnoonStreet1 from '@/components/svgIcons/MamnoonStreet1.vue'
export default {
    components:{
        Mamnoon1,
        MamnoonStreet1
    },
    name: 'alacarte',
    props: ['data','header','tag','description'],
    data () {
        return {

        }
    }
}

</script>