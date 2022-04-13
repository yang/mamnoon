<template>
  <div class="container">
    <div class="holderHanoon">
      <div class="col-md-4">
        <div class="logoHanoon" v-html="this.pageData[4].logo_svg"></div>
        <div class="locationHanoon">
          <p>opening spring 2022</p>
          <br />
          <p>totem lake</p>
          <p>12670 120th ave ne,</p>
          <p>kirkland, wa 98034</p>
        </div>
      </div>
      <div class="col-md-8">
        <div>
          <a :href="'www.google.com'">apply here</a>
          <br />
          <div class="nowHiring">
            <span class="title">now hiring for the</span>
            <br />
            <span class="title">following positions:</span>
          </div>
          <div class="nowHiring">
            <span class="listTitle">floor</span>
            <br>
            <span class="listItem">server</span>
            <br>
            <span class="listItem">host</span>
            <br>
            <span class="listItem">busser/runner</span>
            <br>
            <span class="listItem">dishwasher</span>
          </div>
          <div class="nowHiring">
            <span class="listTitle">bar</span>
            <br>
            <span class="listItem">barback</span>
            <br>
            <span class="listItem">bartender</span>
            <br>
            <span class="listItem">bar lead</span>
            <br>
          </div>
          <div class="nowHiring">
            <span class="listTitle">management</span>
            <br>
            <span class="listItem">floor manager</span>
            <br>
            <span class="listItem">wine/floor manager</span>
            <br>
            <span class="listItem">sous chef</span>
            <br>
            <span class="listItem">chef-de-cuiside</span>
            <br>
            <span class="listItem">assistant general manager</span>
            <br>
            <span class="listItem">general manager</span>
          </div>
          <div class="nowHiring">
            <span class="listTitle">kitchen</span>
            <br>
            <span class="listItem">prep cook</span>
            <br>
            <span class="listItem">line cook</span>
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
