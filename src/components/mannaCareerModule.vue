<template>
  <div class="container">
    <div class="holderManna">
      <div class="col-md-4">
        <div class="logoManna" v-html="this.pageData[5].logo_svg"></div>
        <div class="locationManna">
          <p>south lake union</p>
          <p>446 terry ave n</p>
          <p>seattle, wa 98109</p>
        </div>
      </div>
      <div class="col-md-4"></div>
      <div class="mannaJobs">
        <div>
          <p><span class="listItemManna">no openings at this time, please check</span></p>
          <p><span class="listItemManna">back later</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: null,
    };
  },
  methods: {
    getLogos() {
      this.pageData = this.$store.state.pageData[0].restaurant_repeater;
    },
  },
  mounted() {
    this.getLogos();
  },
};
</script>

<style lang='scss'>
  @import '@/assets/styles/css/manna.scss';
</style>
