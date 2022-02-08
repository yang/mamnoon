<template>
  <div class="mamnoon">
    <Nav3 />

    <div>
      <!--{{ffdata}}-->

      <div v-if="ffdata" class="container ff">
        <div class="row lower-margin">
          <div class="col-md-8 offset-md-2 about">
            <template v-for="item in ffdata">
              <div
                class="halfwidthclass"
                :class="{ smalled: item.smaller_logo }"
                v-html="item.logo_svg"
              ></div>

              <template v-html="item.description">
                {{ item.description }}
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- <img style="width: 100%;" src="@/assets/img/mamnoonFF_NADI_2-01.png"> -->
    <GlobalFooter />
  </div>
  <!-- {{$store.state.currentUserEmail}} -->
</template>
<script>
import Nav3 from "@/components/Nav3";
import AboutAlt from "@/components/AboutAlt";
import Borderline from "@/components/svgIcons/Borderline";
import GlobalFooter from "@/components/GlobalFooter";

export default {
  metaInfo() {
    return {
      title: `about mama group and nadi mama`,
      meta: [
        { name: "description", content: `` },
        { property: "og:title", content: `about mama group and nadi mama` },
        { property: "og:site_name", content: "nadi mama" },
        { property: "og:description", content: `` },
        { property: "og:url", content: "https://nadimama.com/" },
        // {property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }
      ],
    };
  },

  props: ["data"],
  data() {
    return {
      user: null,
      pageData: null,
      ffdata: null,
    };
  },
  components: {
    Nav3,
    Borderline,
    AboutAlt,
    GlobalFooter,
  },
  methods: {
    async individualRestaurant() {
      let responseAcf = await this.$http.get(
        `https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`
      );
      let AcfBlock = responseAcf;
      this.pageData = AcfBlock.data.acf.content_fields;

      for (var item in AcfBlock.data.acf.content_fields) {
        // console.log(item)

        // console.log(AcfBlock.data.acf.content_fields[item].acf_fc_layout)

        let acf = AcfBlock.data.acf.content_fields;
        if (acf[item].acf_fc_layout === "about") {
          this.ffdata = acf[item].about;
        }
      }
    },
  },
  mounted() {
    this.individualRestaurant();
  },
};
</script>

<style lang="scss">
.mamnoon {
  padding-top: 132px;
}

@media only screen and (max-width: 992px) {
  .mamnoon {
    padding-top: 112px;
  }
}

.about {
  h1 {
    // display: inline;
    color: #f05d5b;
    text-align: left;
    margin: 30px 10px 0px auto;
  }

  p {
    margin-top: 10px;
  }
}

.pad {
  padding-top: 50px;
  padding-bottom: 50px;
}

.pad-sm {
  padding-top: 25px;
  padding-bottom: 25px;
}

.mb20 {
  margin-bottom: 20px;
}

.ff {
  h2 {
    color: #f05d5b;
  }

  h3 {
    font-style: italic;
    font-size: 1em;
    font-weight: bold;
  }

  p {
  }

  a {
    color: #f05d5b;
    text-decoration: underline;
  }
}

@media only screen and (max-width: 992px) {
  .ff {
    padding-top: 0;
  }

  .list-of-links {
    margin-top: 40px;
    a {
      display: block;
    }
  }
}

.ff h2 {
  text-transform: lowercase;
  margin-bottom: 24px;
  font-size: 36px;
}

p.list-of-links {
  font-size: 20px;
  font-weight: bold;
  line-height: 2;
  a {
    font-style: italic;
  }
}

.border-left {
  border: 4px solid #f05d5b;
  box-sizing: border-box;
  padding: 0;
  border-right: 0;
}
.border-right {
  border: 4px solid #f05d5b;
  box-sizing: border-box;
  border-left: 0;
}

.border-red {
  border: 5px solid #f05d5b;
  margin-bottom: 50px;
  display: inline-block;
  .col-l {
    width: 50%;
    display: block;
    float: left;
  }
  .col-r {
    width: 50%;
    display: block;
    float: left;

    div {
      padding: 40px;
    }
  }
}

.restaurantLogo {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  position: relative;
  width: 100%;
  min-height: 80vh;

  svg {
    // width: 500px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.lower-margin {
  margin-bottom: 60px;
}

.pt20 {
  padding-top: 20px;
}

.inblock-red {
  border: 5px solid #f05d5b;
  display: inline-block;
  // width: 50%;
  float: left;
  color: transparent;
  background-size: cover;
  background-position: center center;

  width: 50%;
  padding-bottom: 50%;

  &:first-child {
    border-right: 0px;
  }
}

@media only screen and (max-width: 1220px) {
  .border-red {
    .col-r {
      div {
        padding: 10px 20px;
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .border-red {
    border: 4px solid #f05d5b;
    margin-bottom: 50px;
    .col-l {
      width: 100%;
      display: inline-block;
    }
    .col-r {
      width: 100%;
      display: inline-block;

      div {
        padding: 40px;
      }
    }
  }

  .ff {
    padding-top: 20px;
  }
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.halfwidthclass {
  width: 50%;
  margin-top: 50px;
  transform: translateX(-10px);
  &.smalled {
    width: 37.5%;
  }
}

.st0 {
  display: none;
}
.st1 {
  display: inline;
  fill: #575757;
}
.st2 {
  display: none;
  fill: #f15d58;
}
.st4 {
  fill: #f15d58;
}
.st3 {
  fill: #424242;
}
</style>
