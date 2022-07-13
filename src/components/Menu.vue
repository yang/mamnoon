<template>
<div class='menu'>
  <h2>mezze, soup, and salad</h2>
  <hr>
  <div class="menuItems" v-for="item in this.mezzeItems">
    <h4><i>{{item.name}}</i></h4>
    <em>{{item.description}}</em>
    <b> {{showToFixed(item.price)}}</b>
  </div>
  <br>
  <h2>lebanese wraps</h2>
  <hr>
  <div class="menuItems" v-for="item in this.wrapItems">
    <h4><i>{{item.name}}</i></h4>
    <em>{{item.description}}</em>
    <b> {{showToFixed(item.price)}}</b>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      mezzeItems: [],
      wrapItems: [],
    }
  },
  methods: {
    async getMenuItems() {
      let res = await this.$http.get("/product/menuitems")
      this.mezzeItems = res.data['mezze'];
      this.wrapItems = res.data['wraps']
    },
    showToFixed: function(value) {
      let decvalue = value / 100;
      return decvalue.toFixed(0);
    },
  },
  mounted() {
    this.getMenuItems();
  },
  
};
</script>

<style lang='scss'>
.menu {
  width: 100%;
  margin-left: 35px;
  margin-top: 15vh;
  h2 {
    font-weight: bold;
  }
  hr {
    border-top: 3px solid $nadi-red-color;
    margin-right: 20px;
  }
}
.menuItems {

  h4 {
    font-size: 20px;
  }
  em {
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  b {

  }
}
</style>
