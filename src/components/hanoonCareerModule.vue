<template>
  <div class="container">
    <div class="holderHanoon">
      <div class="col-md-4">
        <div class="logoHanoon" v-html="this.pageData[4].logo_svg"></div>
        <div class="locationHanoon">
          <p>opening june 2022</p>
          <br />
          <p>totem lake</p>
          <p>12670 120th ave ne,</p>
          <p>kirkland, wa 98034</p>
        </div>
      </div>
      <div class="col-md-4"></div>
      <div class="hanoonJobs">
        <div class="hanoon">
          
          <div class="nowHiring">
            <span class="listTitle">floor</span>
            <br>
            <span class="listItem">server - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=5baf193977ab40fd">apply here</a></span>
            <br>
            <span class="listItem">server assistant - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=aa7669a48616dfc4">apply here</a></span>
            <br>
            <span class="listItem">host - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=cf6ee5f8f94a80f2">apply here</a></span>
            <br>
            <span class="listItem">dishwasher - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=8ab8b42f6599770d">apply here</a></span>
          </div>
          <div class="nowHiring">
            <span class="listTitle">bar</span>
            <br>
            <span class="listItem">bartender - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=a55d9fa2e84f96ff">apply here</a></span>
            <br>
          </div>
          <div class="nowHiring">
            <span class="listTitle">management</span>
            <br>
            <span class="listItem">sous chef - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=7a7fe4a9e6b47af0">apply here</a></span>
            <br>
            <span class="listItem">general manager - <a href="https://www.indeed.com/job/general-manager-new-restaurant-opening-7bcfa509dd53432b">apply here</a></span>
                        <br>
            <span class="listItem">front of house manager - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=817b3f3f558a7fe1">apply here</a></span>
          </div>
          <div class="nowHiring">
            <span class="listTitle">kitchen</span>
            <br>
            <span class="listItem">prep cook - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=2a527043db991e0d">apply here</a></span>
            <br>
            <span class="listItem">line cook - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=f4b0c1110191b420">apply here</a></span>
          </div>
          <br>
          <br>
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
      logoArray: [],
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
  @import '@/assets/styles/css/hanoon.scss';
</style>
