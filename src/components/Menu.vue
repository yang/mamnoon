<template>
  <div>
    <div class="logo">
      <HanoonLogo />
    </div>
    <div class="menu">
      <div v-if="!this.loading">
        <div class="menuSection">
          <div class="menuItems">
            <h2>mezze &amp; soup</h2>
            <div class="item" v-for="item in this.mezzeItems">
              <div class="left">
                <h4>{{ item.name }} {{ item.health }}</h4>
                <em>{{ item.description }}</em>
                <p>{{ item.tag }}</p>
              </div>
              <div class="right">
                <b> {{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>
          <br />

          <div class="menuItems">
            <h2>lebanese wraps</h2>
            <div class="item" v-for="item in this.wrapItems">
              <div class="left">
                <h4>{{ item.name }} {{ item.health }}</h4>
                <em>{{ item.description }}</em>
                <p>{{ item.tag }}</p>
              </div>
              <div class="right">
                <b> {{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>
          <br />
        </div>

        <div class="menuSection">
          <div class="menuItems">
            <h2>drinks</h2>
            <div class="item" v-for="item in this.drinksItems">
              <div class="left">
                <h4>{{ item.name }} {{ item.health }}</h4>
                <em>{{ item.description }}</em>
                <b>{{ item.tag }}</b>
              </div>
              <div class="right">
                <b> {{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>
          <br />
          <div class="menuItems">
            <h2>sides</h2>
            <div class="item" v-for="item in this.sidesItems">
              <div class="left">
                <h4>{{ item.name }} {{ item.health }}</h4>
                <em>{{ item.description }}</em>
                <b>{{ item.tag }}</b>
              </div>
              <div class="right">
                <b> {{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div class="menuSection">
          <div class="menuItems">
            <h2>helou <span>&#40;sweets&#41;</span></h2>
            <div class="item" v-for="item in this.sweetsItems">
              <div class="left">
                <h4>{{ item.name }} {{ item.health }}</h4>
                <em>{{ item.description }}</em>
                <p>{{ item.tag }}</p>
              </div>
              <div class="right">
                <b> {{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>

          <div class="menuItems">
            <div class="item">
              <div class="left">
                <div class="dietary">
                  <p>
                    v - <span>vegetarian</span> veg - <span>vegan</span> gf -
                    <span>gluten free</span>
                  </p>
                  <p>df - <span>dairy free</span> hal - <span>halal</span></p>
                </div>
              </div>
              <div class="right"></div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div v-else-if="this.loading">
        <h5>loading...</h5>
      </div>
    </div>
  </div>
</template>

<script>
import HanoonLogo from "../components/svgIcons/HanoonLogo.vue";
export default {
  components: {
    HanoonLogo,
  },
  data() {
    return {
      mezzeItems: [],
      wrapItems: [],
      sidesItems: [],
      sweetsItems: [],
      drinksItems: [],
      loading: true,
    };
  },
  methods: {
    async getMenuItems() {
      let res = await this.$http.get("/product/hanoonitems");
      //console.log("res: ", res);
      this.mezzeItems = res.data["mezze"];
      this.wrapItems = res.data["wraps"];
      this.sidesItems = res.data["sides"];
      this.sweetsItems = res.data["sweets"];
      this.drinksItems = res.data["drinks"];

      if (
        this.mezzeItems.length !== 0 &&
        this.mezzeItems.length !== 0 &&
        this.sidesItems.length !== 0 &&
        this.sweetsItems.length !== 0 &&
        this.drinksItems.length !== 0
      ) {
        this.loading = false;
      }
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
  -webkit-print-color-adjust: exact;
  width: 100%;
  margin-top: 15vh;
  margin-bottom: 15vh;
  margin-left: 6vw;
  h2 {
    font-weight: bold;
    margin-bottom: 1vh;
    color: $hanoon-pink;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    color: $hanoon-gray;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
  }
}

.item {
  margin-bottom: 15px;
  width: 80%;
  h4 {
    font-size: 26px;
    color: $hanoon-gray;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
  }
  em {
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
    color: $hanoon-gray;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
  }
  b {
    font-size: 20px;
    color: $hanoon-pink;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
  }
  .left {
    width: 80%;
    float: left;
    p {
      font-size: 22px;
      color: $hanoon-gray;
      font-weight: 600;
    }
    span {
      font-size: 20px;
      color: $hanoon-pink;
      font-weight: 600;
      margin-right: 2%;
    }
  }
  .right {
    width: 20%;
    float: right;
    margin-top: 1.5vh;
  }
}

.menuSection {
  display: flex;
  justify-content: center;
  align-items: top;
  margin-left: auto;
  margin-bottom: 3%;
}

.logo {
  width: 35%;
  margin: 130px 0 -7% 75px;
  padding: 0;
}

.menuItems {
  width: 100%;
  span {
    font-size: 24px;
    color: $hanoon-gray;
    font-weight: 600;
  }
}

/////// MOBILE ///////
@media only screen and (max-width: 762px) {
  .menu {
    width: 100%;
    margin-top: 10vh;
    margin-bottom: 5vh;
    margin-left: 15vw;
  }

  .menuSection {
    display: grid;
    grid-template-columns: 100%;
  }

  .item {
    .right {
      width: 15%;
      float: right;
      margin-top: 1vh;
    }
    h4 {
      font-size: 22px;
    }
    em {
      font-size: 20px;
    }
  }

  .logo {
    width: 60%;
    margin: 120px auto -12% auto;
    padding: 0;
  }
  .dietary {
    margin-top: 7%;
    word-wrap: break-word;
    p {
      width: 23ch;
    }
  }
}

/////// TABLET ///////
@media only screen and (max-width: 992px) and (min-width: 763px) {
  .menu {
    width: 100%;
    margin-top: 10vh;
    margin-bottom: 5vh;
    margin-left: 15vw;
  }

  .menuSection {
    display: grid;
    grid-template-columns: 100%;
  }

  .item .right {
    width: 15%;
    float: right;
    margin-top: 1vh;
  }

  .item h4 {
    font-size: 22px;
  }

  .item em {
    font-size: 20px;
  }

  .logo {
    width: 60%;
    margin: 135px auto -8% auto;
    padding: 0;
  }
}

/////// PRINT STYLES ///////
@media print {
  * {
    padding: 0;
    margin: 0;
  }
  .menu {
    width: 100%;
    max-height: 95%;
    margin-left: 6vw;
    margin-top: 1vh;
    h2 {
      font-weight: bold;
      margin-bottom: 0.5vh;
      color: $hanoon-pink;
    }
    p {
      font-weight: bold;
      font-size: 18px;
      color: $hanoon-gray;
    }
  }

  .item {
    width: 80%;
    margin-bottom: 0 !important;
    span {
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: $hanoon-gray;
    }

    h4 {
      font-size: 20px;
      color: $hanoon-gray;
      font-weight: 600;
      margin-top: 6px;
      margin-bottom: 6px;
    }

    em {
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: $hanoon-gray;
    }

    b {
      font-size: 16px;
      color: $hanoon-pink;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif !important;
     
    }

    .left {
      width: 80%;
      float: left;
    }

    .right {
      width: 20%;
      float: right;
      margin-top: .5vh;
    }
  }

  .menuSection {
    display: flex;
    justify-content: center;
    align-items: top;
    margin-left: auto;
    margin-bottom: 0;
  }

  .logo {
    width: 35%;
    margin: 40px 0 0 35px;
    padding: 0;
  }

  .dietary {
    margin-top: 7%;
    word-wrap: break-word;
    p {
      width: 23ch;
    }
  }

  .menuItems {
    width: 100%;
  }
}
</style>
