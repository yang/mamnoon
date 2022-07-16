<template>
  <div class="menu">
    <div v-if="!this.loading">
      <div class="mezzeMenuItems">
        <h2>mezze, soup, and salad</h2>
        <hr />
        <div class="item" v-for="item in this.mezzeItems">
          <h4>
            <i>{{ item.name }}</i>
          </h4>
          <em>{{ item.description }}</em>
          <b> {{ showToFixed(item.price) }}</b>
        </div>
      </div>
      <br />
      <div class="wrapMenuItems">
        <h2>lebanese wraps</h2>
        <hr />
        <div class="item" v-for="item in this.wrapItems">
          <h4>
            <i>{{ item.name }}</i>
          </h4>
          <em>{{ item.description }}</em>
          <b> {{ showToFixed(item.price) }}</b>
        </div>
      </div>
    </div>
    <div v-else-if="this.loading">
      <h5>loading...</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mezzeItems: [],
      wrapItems: [],
      loading: true,
    };
  },
  methods: {
    async getMenuItems() {
      let res = await this.$http.get("/product/menuitems");
      this.mezzeItems = res.data["mezze"];
      this.wrapItems = res.data["wraps"];
      console.log("loading1", this.loading);
      if (this.mezzeItems.length !== 0 && this.mezzeItems.length !== 0) {
        this.loading = false;
      }
      console.log("loading2", this.loading);
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

<style lang="scss">
.menu {
  width: 100%;
  margin-top: 15vh;
  margin-bottom: 15vh;
  h2 {
    font-weight: bold;
    margin-bottom: 1vh;
  }
  hr {
    border-top: 3px solid $nadi-red-color;
    margin-right: 20px;
  }
}

.item {
  margin-bottom: 15px;
  h4 {
    font-size: 20px;
  }
  em {
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
  }
  margin-bottom: 10px;
}

@media print {
  .menu {
    display: inline-block;
    margin-top: 3vh;

    width: 100%;
    h2 {
      font-weight: bold;
      font-size: 36px;
    }
    hr {
      border-top: 3px solid $nadi-red-color;
      margin-right: 30px;
    }
  }
  .mezzeMenuItems {
    float: left;
    width: 45%;
    h4 {
      font-size: 22px;
      font-weight: bold;
    }
    em {
      font-size: 16px;
      line-height: 30px;
      font-weight: 500;
    }
    b {
      font-size: 18px;
    }
  }
  .wrapMenuItems {
    float: right;
    width: 45%;
    margin-top: -23px;
    h4 {
      font-size: 22px;
      font-weight: bold;
    }
    em {
      font-size: 16px;
      line-height: 30px;
      font-weight: 500;
    }
    b {
      font-size: 18px;
    }
  }
}
</style>
