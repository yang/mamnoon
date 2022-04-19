<template>
  <div class="container">
    <div class="holderMamnoon">
      <div class="col-md-4">
        <div class="logoMamnoon" v-html="this.pageData[1].logo_svg"></div>
        <div class="locationMamnoon">
          <p>capitol hill</p>
          <p>1508 melrose ave</p>
          <p>seattle, wa 98122</p>
        </div>
      </div>
      <div class="col-md-4"></div>
      <div class="mamnoonJobs">
        <div class="nowHiring">
          <span class="titleMamnoon">kitchen</span>
          <p>
            <span class="listItemMamnoon"
              >mezze master / prep cook -&nbsp;<a
                href="https://poachedjobs.com/jobs/seattle-wa-kitchen-jobs-mamnoon-mezze-master-prep-cook?from=jobs&rec=false"
                >apply here</a
              ></span
            >
          </p>
          <p>
            <span class="listItemMamnoon"
              >pastry assistant -&nbsp;<a
                href="https://poachedjobs.com/jobs/seattle-wa-kitchen-jobs-mamnoon-pastry-assistant?from=jobs&rec=false"
                >apply here</a
              ></span
            >
          </p>
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

<style lang="scss">
@import "@/assets/styles/css/mamnoon.scss";
</style>
