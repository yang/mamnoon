<template>
    <div class="mamnoon">
      <Nav3 />
    <ReservationsMobile />
    </div>
</template>

<script type="text/javascript">
// 1. Require the Storyblok client

import Nav3 from "@/components/Nav3";
import ReservationsMobile from '@/components/ReservationsMobile'
// 2. Set your token - you will be able to create a new space later.



export default {
name: 'SlideShow',
components: {
ReservationsMobile,
Nav3
},
data () {
    return {
        story: {
            content: {
                body: []
        }
      }
}
},
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
    // this.showProducts();
      }

}
</script>

