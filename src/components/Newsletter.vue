<template>

  <section id="newsletter" class="section hero is-primary is-fullheight position-relative mb-80 black-background" :if="visible" style="display:none;">
        <h4 class="mob-bottom-margin">{{header}}</h4>
       <p class="description-para noselect hide-mobile">{{body}}</p>

<div class="width-container text-center translate40">
  <CampaignMonitor />
  <br>
</div>
</section>
</template>



<script>

import CampaignMonitor from '@/components/CampaignMonitor.vue'

import Send from '@/components/Send.vue'

export default {
props: ['title', 'description','header','body','visible'],
components: {
    Send,
    CampaignMonitor
},
  created(){
    let recaptchaScriptModal = document.createElement('script')
      recaptchaScriptModal.setAttribute('src', 'https://js.createsend1.com/javascript/copypastesubscribeformlogic.js')
      document.head.appendChild(recaptchaScriptModal)
  }


};
</script>



<style lang="scss">
  @import '@/assets/styles/css/newsletter.scss';
</style>