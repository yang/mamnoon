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
      <div class="logos">
        <Logos/>
      </div>
      
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
export default {
  components: {
    Nav3,
    GlobalFooter,
    Logos,
  },
  data() {
    return {
      pageData: null,
      logoArray: []
    };
  },
  // methods: {
  //   getLogos() {
  //     this.pageData = this.$store.state.pageData[0].restaurant_repeater;
  //     console.log(`pageData`, this.pageData);
  //     for(let svg in this.pageData){
  //       let logo = this.pageData[svg].logo_svg
  //       this.logoArray.push(logo);
  //     }
  //     console.log('this.logoArray', this.logoArray)
  //   }

  // },
  //   mounted() {
  //     this.getLogos();
  //   }
};
</script>

<style lang="scss">
@import "@/assets/styles/css/careers.scss";
</style>
