<template>
  <div>
    <Nav3 />
    <div class="main-content">
      <h5>work for mama</h5>
      <p>
        interested in joining mama's team? we're always looking for qualified
        applicants, and can't wait to hear from you.
      </p>
      <p>
        when submitting your cover letter and resume, please be sure that all
        attachments are in pdf format.
      </p>
      <p>
        scroll below to see current openings.
      </p>
      
    </div>
      <div class="col-md-8 m-auto mt-5">
        <Logos/>
      </div>
      <div>
        <Hanoon/>
      </div>
      <div>
        <Manna/>
      </div>
      <div>
        <Mbar/>
      </div>
    <!-- spot for image -->
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";
import GlobalFooter from "@/components/GlobalFooter";
import Logos from "@/components/Logos";
import Hanoon from '@/components/hanoonCareerModule.vue'
import Manna from '@/components/mannaCareerModule.vue'
import Mbar from '@/components/mbarCareerModule.vue'
export default {
  components: {
    Nav3,
    GlobalFooter,
    Logos,
    Hanoon,
    Manna,
    Mbar
  },
  
};
</script>

<style lang="scss">
@import "@/assets/styles/css/careers.scss";
</style>
