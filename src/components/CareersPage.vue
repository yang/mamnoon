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
      <div class="col-md-8 m-auto p-auto">
        <Logos/>
      </div>
      <div>
        <Mbar/>
      </div>
      <div>
        <Mamnoon/>
      </div>
      <div>
        <Anar/>
      </div>
      <div>
        <Street/>
      </div>
      <div>
        <Hanoon/>
      </div>
      <div>
        <Manna/>
      </div>
      <div>
        <NoOpenings/>
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
import Street from '@/components/streetCareerModule.vue'
import Mamnoon from '@/components/mamnoonCareerModule.vue'
import Anar from '@/components/anarCareerModule.vue'
import NoOpenings from '@/components/noOpeningsModule.vue'
export default {
  components: {
    Nav3,
    GlobalFooter,
    Logos,
    Hanoon,
    Manna,
    Mbar,
    Street,
    Mamnoon,
    Anar,
    NoOpenings
  },
  
};
</script>

<style lang="scss">
@import "@/assets/styles/css/careers.scss";
</style>
