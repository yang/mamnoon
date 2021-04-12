<template>
    <div class="mamnoon">
      <Nav />
    <OnlineMenuMobile />
    </div>
</template>

<script type="text/javascript">
// 1. Require the Storyblok client

import Nav from "@/components/Nav";
import OnlineMenuMobile from '@/components/OnlineMenuMobile'
// 2. Set your token - you will be able to create a new space later.



export default {
name: 'SlideShow',
components: {
OnlineMenuMobile,
Nav
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

