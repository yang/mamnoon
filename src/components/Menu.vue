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
                <h4>
                  {{ item.name }} <i>{{ item.health }}</i>
                </h4>
                <em>{{ item.description }}</em>
                <p>
                  <i>{{ item.tag }}</i>
                </p>
              </div>
              <div class="right">
                <b>{{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>
          <br />

          <div class="menuItems">
            <h2>lebanese wraps</h2>
            <div class="item" v-for="item in this.wrapItems">
              <div class="left">
                <h4>
                  {{ item.name }} <i>{{ item.health }}</i>
                </h4>
                <em>{{ item.description }}</em>
                <p>
                  <i>{{ item.tag }}</i>
                </p>
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
                <h4>
                  {{ item.name }} <i>{{ item.health }}</i>
                </h4>
                <em>{{ item.description }}</em>
                <p>
                  <i>{{ item.tag }}</i>
                </p>
              </div>
              <div class="right">
                <b>{{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>
          <br />
          <div class="menuItems sides">
            <h2>sides</h2>
            <div class="item" v-for="item in this.sidesItems">
              <div class="left">
                <h4>
                  {{ item.name }} <i>{{ item.health }}</i>
                </h4>
                <em>{{ item.description }}</em>
                <p>
                  <i>{{ item.tag }}</i>
                </p>
              </div>
              <div class="right">
                <b> {{ showToFixed(item.price) }}</b>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div class="menuSection">
          <div class="menuItems helou">
            <h2>
              helou <span><i>&#40;sweets&#41;</i></span>
            </h2>
            <div class="item" v-for="item in this.sweetsItems">
              <div class="left">
                <h4>
                  {{ item.name }} <i>{{ item.health }}</i>
                </h4>
                <em>{{ item.description }}</em>
                <p>
                  <i>{{ item.tag }}</i>
                </p>
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
                    <i>
                      v - <span>vegetarian</span> veg - <span>vegan</span> gf -
                      <span>gluten free</span>
                    </i>
                  </p>
                  <p>
                    <i>df - <span>dairy free</span> hal - <span>halal</span></i>
                  </p>
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
    margin-bottom: 15px;
  }
  p {
    font-weight: bolder;
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
    font-size: 29px;
    color: $hanoon-gray;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 5px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;

    i {
      font-size: 20px;
    }
  }
  em {
    font-size: 22px;
    line-height: 1.2;
    font-weight: 600;
    color: $hanoon-gray;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
  }
  b {
    font-size: 28px;
    color: $hanoon-pink;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
  }
  .left {
    width: 80%;
    float: left;
    p {
      font-size: 20px;
      color: $hanoon-gray;
      font-weight: 900;
      margin-top: 3px;
      line-height: 1.75;
    }
    span {
      font-size: 22px;
      color: $hanoon-pink;
      font-weight: 600;
      margin-right: 3%;
    }
  }
  .right {
    width: 20%;
    float: right;
    margin-top: 0.8vh;
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
  margin: 130px auto -7% auto;
  padding: 0;
}

.menuItems {
  width: 100%;
  h2 {
    font-size: 38px;
  }
  span {
    font-size: 24px;
    color: $hanoon-gray;
    font-weight: 600;
  }
}

.dietary {
  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
    font-size: 22px !important;
    margin-top: -1vh !important;
    margin-bottom: 1vh;
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

@media only screen and (max-width: 450px) {
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
  @page {
    size: 11in 17in;
    padding: 0;
    margin: 0;
  }
  .menu {
    width: 100%;
    height: 80% !important;
    margin-left: 6vw;
    margin-top: 1vh;
    h2 {
      font-weight: bold;
      font-size: 18pt;
      color: $hanoon-pink;
      margin-top: 12px;
      margin-bottom: 5px;
    }
  }
  .item {
    width: 90%;
    margin-bottom: 20px;
    span {
      font-size: 12pt;
      line-height: 12pt;
      font-weight: 500;
      color: $hanoon-gray;
    }

    h4 {
      font-size: 17pt;
      color: $hanoon-gray;
      font-weight: 600;
      margin-top: 6px;
      margin-bottom: 6px;
    }

    em {
      font-size: 15pt;
      font-weight: 600;
      color: $hanoon-gray;
    }

    b {
      font-size: 15pt;
      color: $hanoon-pink;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif !important;
    }

    .left {
      width: 80%;
      float: left;
      margin-bottom: -10px;
      i {
        font-size: 15pt;
        font-weight: 900;
      }
      span {
        font-size: 15pt;
        font-weight: 600;
      }
    }

    .right {
      width: 20%;
      float: right;
      margin-top: 0.5vh;
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
    margin: 0 auto 0 auto;
    padding: 0;
  }
  .dietary {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif !important;
    margin-top: 7%;
    position: absolute;
    bottom: 5;
    width: 400px;
    border: 1px solid red;
    p {
      width: 50ch;
    }
    p span {
      width: 35ch !important;
      font-size: 10pt !important;
      font-weight: 300 !important;
    }
    p i {
      width: 35ch !important;
      font-size: 10pt !important;
      font-weight: 300 !important;
    }
  }

  .helou {
    margin-top: -5px;
  }
  .sides {
    margin-top: -110px;
  }
}
</style>
