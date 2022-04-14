<template>
  <div class="container">
    <div class="holderMbar">
      <div class="col-md-4">
        <div class="logoMbar" v-html="this.pageData[0].logo_svg"></div>
        <div>
          <p>south lake union</p>
          <p>400 fairview ave n</p>
          <p>seattle, wa 98109</p>
        </div>
      </div>
      <div class="col-md-8">
        <div class="openings">
          <span class="listItemMbar">no openings at this time, please check back later</span>
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
  @import '@/assets/styles/css/mbar.scss';
</style>
