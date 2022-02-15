<template>
  <div class="nadi">
    <Nav3 />

    <div
      class="announcementBar"
      v-if="
        getTimeStamp(notificationHeader.expiration) &&
          notificationVisible &&
          notificationHeader.visible
      "
    >
      <div class="dismissNotification" @click="dismissNotification">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6.36426"
            width="35"
            height="9"
            transform="rotate(45 6.36426 0)"
            fill="white"
          />
          <rect
            x="31.1128"
            y="6.36401"
            width="35"
            height="9"
            transform="rotate(135 31.1128 6.36401)"
            fill="white"
          />
        </svg>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4 col-10">
            <div class="blockHeader">
              {{ notificationHeader.header }}
            </div>

            <a
              :href="notificationHeader.cta_url"
              target="_blank"
              class="blockButton"
            >
              {{ notificationHeader.cta_text }}</a
            >
          </div>
          <div class="hideOnMob col-md-4 offset-md-4">
            <img class="anouncement-image" :src="notificationHeader.image" />
          </div>
        </div>
      </div>
    </div>

    <section
      class="topSection fh"
      v-bind:style="{
        'text-align': 'center',
        'background-image':
          'url(' +
          'http://mamnoontogo.net/wp-content/uploads/2021/11/MStreet-Environment-9131-scaled.jpg' +
          ')',
        'background-position': 'center',
        position: 'relative',
        height: '100vh',
        'background-size': 'cover',
      }"
    >
      <!--<div class="container mobilePage pt132">-->

      <div class="bottomAttach header black secPadMedAlt">
        <img
          src="http://mamnoontogo.net/wp-content/uploads/2021/11/MStreet-Environment-9131-scaled.jpg"
          class="responsiveBannerImage"
        />
        <div class="container" style="position: relative;">
          <div class="row text-center">
            <div class="col-12 offset-0">
              <h1 class="subpage-header white-text mt0 text-left">
                welcome to nadi mama: the online home for the mama family of
                restaurants.
              </h1>
            </div>
          </div>

          <div class="row text-center">
            <div class="logosInline">
              <div class="displayInline">
                <router-link :to="'mamnoon'">
                  <MamnoonLogo
                    :height="70"
                    :marginLeft="0"
                    :marginRight="20"
                    :fill="'white'"
                  />
                </router-link>
              </div>
              <div class="displayInline">
                <router-link :to="'mbar'"
                  ><MbarLogo
                    :height="70"
                    :marginLeft="20"
                    :marginRight="20"
                    :fill="'white'"
                  />
                </router-link>
              </div>
              <div class="displayInline">
                <router-link :to="'mamnoonstreet'"
                  ><StreetLogo
                    :height="70"
                    :marginLeft="20"
                    :marginRight="20"
                    :fill="'white'"
                  />
                </router-link>
              </div>
              <div class="displayInline">
                <router-link :to="'anar'"
                  ><AnarLogo
                    :height="70"
                    :marginLeft="20"
                    :marginRight="0"
                    :fill="'white'"
                  />
                </router-link>
              </div>
            </div>
          </div>
          <div @click="scrollDown">
            <DownArrow />
          </div>
        </div>
      </div>

      <!--<br>-->
      <!-- </div>-->
    </section>

    <!--sub module loop-->
    <!--sub module loop-->
    <!--sub module loop-->
    <!--sub module loop-->
    <!--sub module loop-->

    <template v-for="mod in subModules">
      <section
        v-if="getTimeStamp(mod.date_range_end)"
        class="topSection fh moduleStyling"
        v-bind:style="{
          'text-align': 'center',
          'background-color': `${mod.background_color}`,
          'background-image': 'url(' + mod.background_image + ')',
        }"
        :class="`background-${mod.image_style}`"
      >
        <img class="mobileImage" :src="mod.background_image" />

        <img
          class="imageStyleCentered"
          v-if="mod.image_style === 'centered'"
          :src="mod.background_image"
        />

        <div class="bottomAttach black sub secPadMedAlt">
          <div class="container">
            <div class="row text-center"></div>
            <div class="block">
              <div class="blockHeader">
                {{ mod.header }}
              </div>
              <div class="blockDescription">
                {{ mod.subheader }}
              </div>

              <template v-for="(button, index) in mod.button_repeater">
                <a
                  class="blockButton"
                  :class="{ firstChild: index === 0 }"
                  :href="button.cta_url"
                  target="_blank"
                  >{{ button.cta_text }}</a
                >
              </template>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!--sub module loop-->
    <!--sub module loop-->
    <!--sub module loop-->
    <!--sub module loop-->
    <!--sub module loop-->

    <GlobalFooter />
    <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";

import VideoComponent2 from "@/components/VideoComponent2";

import MbarLogo from "@/components/svgIcons/MbarLogo";
import AnarLogo from "@/components/svgIcons/AnarLogo";
import StreetLogo from "@/components/svgIcons/StreetLogo";
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo";
import DownArrow from "@/components/svgIcons/DownArrow";

import GlobalFooter from "@/components/GlobalFooter";

import moment from "moment";
import tz from "moment-timezone";

export default {
  metaInfo() {
    return {
      title: `nadi mama`,
      meta: [
        {
          name: "description",
          content: `welcome to nadi mama: the online home for the mama family of restaurants | levantine cuisine in seattle`,
        },
        { property: "og:title", content: `nadi mama` },
        { property: "og:site_name", content: "nadi mama" },
        {
          property: "og:description",
          content: `welcome to nadi mama: the online home for the mama family of restaurants | levantine cuisine in seattle`,
        },
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
      notificationHeader: null,
      subModules: null,
      loaded: false,
      notificationVisible: true,
    };
  },
  components: {
    DownArrow,
    Nav3,
    VideoComponent2,
    MbarLogo,
    AnarLogo,
    StreetLogo,
    MamnoonLogo,
    GlobalFooter,
  },
  methods: {
    dismissNotification() {
      this.notificationVisible = false;
    },
    getTimeStamp(date) {
      if (date === null) {
        return true;
      } else {
        let date2 = moment(date);
        // console.log(date2.utc().valueOf());
        if (date2.utc().valueOf() < Date.now().valueOf()) {
          return false;
        } else {
          return true;
        }
      }
    },
    currentlyVisible(end) {
      if (end === null) {
        return true;
      }
    },

    async loadHomePage() {
      //  console.log(this.$store.state.homePageData);

      let responseAcf = await this.$http.get(
        `https://mamnoontogo.net/wp-json/acf/v3/home/614`
      );
      // let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)

      let AcfBlock = responseAcf;

      this.pageData = AcfBlock.data.acf.home;

      this.subModules = AcfBlock.data.acf.home[0].sub_modules;

      this.notificationHeader = AcfBlock.data.acf.home[0].notification_header;

      // this.pageData = this.$store.state.homePageData;
    },
    scrollDown() {
      window.scrollTo(0, this.$el.clientHeight);
      // console.log(pageHeight);
    },
  },

  mounted() {
    // console.log(this.$refs)

    this.loadHomePage();

    window.addEventListener("load", () => {
      // run after everything is in-place

      this.loaded = true;
    });
  },
};
</script>

<style lang="scss">
  @import '@/assets/styles/css/nadi.scss';
</style>
