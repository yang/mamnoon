<template>
  <div class="container">
    <div class="holderStreet">
      <div class="col-md-4">
        <div class="logoStreet" v-html="this.pageData[3].logo_svg"></div>
        <div class="locationStreet">
          <p>south lake union</p>
          <p>2020 6th ave</p>
          <p>seattle, wa 98121</p>
        </div>
      </div>
      <div class="col-md-8">
        <div class="nowHiring">
            <span class="titleStreet">kitchen</span>
          <p><span class="listItemStreet">cashier / prep cook - <a href="">apply here</a></span></p>
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
  @import '@/assets/styles/css/street.scss';
</style>