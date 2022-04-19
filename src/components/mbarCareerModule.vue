<template>
  <div class="container">
    <div class="holderMbar">
      <div class="col-md-4">
        <div class="logoMbar" v-html="this.pageData[0].logo_svg"></div>
        <div class="locationMbar">
          <p>south lake union</p>
          <p>400 fairview ave n</p>
          <p>seattle, wa 98109</p>
        </div>
      </div>
      <div class="col-md-4"></div>
        <div class="openings">
          <span class="listTitleMbar">bar</span>
          <p>
            <span class="listItemMbar"
              >barback / server assistant -&nbsp;
              <a
                href="https://poachedjobs.com/jobs/seattle-wa-floor-jobs-mbar-barbackserver-assistant?from=jobs&rec=false"
                >apply here</a
              ></span
            >
          </p>
          <p>
            <span class="listItemMbar"
              >bartender -&nbsp;
              <a
                href="https://poachedjobs.com/jobs/seattle-wa-bar-jobs-mbar-bartender-6?from=jobs&rec=false"
                >apply here</a
              ></span
            >
          </p>
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

<style lang="scss">
@import "@/assets/styles/css/mbar.scss";
</style>
