<template>
  <div class="container">
    <div class="holderAnar">
      <div class="col-md-4">
        <div class="logoAnar" v-html="this.pageData[2].logo_svg"></div>
        <div class="locationAnar">
          <p>south lake union</p>
          <p>2040 6th ave</p>
          <p>seattle, wa 98121</p>
        </div>
      </div>
      <div class="col-md-8">
        <div>
          <p><span class="listItemAnar">no openings at this time, please check</span></p>
          <p><span class="listItemAnar">back later</span></p>
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
  @import '@/assets/styles/css/anar.scss';
</style>
