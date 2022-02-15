<template>
  <div class="pt180" style="overflow-x:hidden;">
    <Nav3 />

    <div class="container mobilePage">
      <h1>Hello Fatima!</h1>

      <div
        v-for="item in this.$store.state.pageData[0].restaurant_repeater"
        :key="item.acf_fc_layout"
      >
        <!--begin big loop-->

        <router-link :to="item.name.replaceAll(' ', '')">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";

export default {
  components: {
    Nav3,
  },
  data() {
    return {
      pageData: null,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
  @import '@/assets/styles/css/landingdrawer.scss';
</style>
