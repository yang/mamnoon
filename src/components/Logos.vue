<template>
  <div class="logoRow" v-if="$store && $store.state">
    <div class="logosInline" v-for="restaurant in this.pageData">
      <div class="displayInline" v-html="restaurant.logo_svg"></div>
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
      console.log(`pageData`, this.pageData);
    },
  },
  mounted() {
    this.getLogos();
  },
};
</script>
<style lang="scss">
.logosInline {
  width: 100%;
  margin-left: 2vw;
  @media only screen and (max-width: 1080px) {
    width: 80%;
    margin: 0 auto;
  }
}

.displayInline {
  display: inline-block;
  @media only screen and (max-width: 768px) {
    display: block;
  }
}
.displayInline svg {
  height: 150px;
  width: 100px;
}

.logoRow {
  display: flex;
  justify-content: space-around;
  align-content: normal;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 35px;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    margin-left: 20px;
  }
}
</style>
