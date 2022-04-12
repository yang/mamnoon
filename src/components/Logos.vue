<template>
  <div v-if="$store && $store.state">
    <div class="restaurantLogos" v-for="restaurant in this.pageData">
      <pre class="logos" v-html="restaurant.logo_svg"></pre>
    </div>
    <p>hello world</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: null,
      logoArray: [],
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
<style scoped>
.restaurantLogos {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.logos{
  height: 100px;
  width: 150px;
}
</style>
