<template>
  <div class="mamnoon">
    <Nav3 />

    <div>
      <div v-if="ffdata" class="container pad ff">
        <div class="row lower-margin" v-if="ffdata">
          <div class="col-md-4 mb20 offset-md-2">
            <img style="width: 100%;" alt="mamnoon fine foods" :src="ffdata.header_image" />
          </div>
          <div class="col-md-4 mb20 pt20" v-html="ffdata.body_text"></div>
        </div>

        <template v-for="item in ffdata.fine_foods">
          <!--<h2 :id="item.shop_item.name.replaceAll(' ','-')">{{item.shop_item.name}}</h2>-->

          <div :id="item.shop_item.name.replaceAll(' ', '-')" class="row">
            <div class="col-md-8 offset-md-2 overflow-x-hidden">
              <div class="border-red">
                <div class="col-l">
                  <img
                    style="width: 100%;"
                    :alt="item.shop_item.name"
                    :src="item.shop_item.image.sizes.medium_large"
                  />
                </div>

                <div class="col-r">
                  <div>
                    <h2>{{ item.shop_item.name }}</h2>
                    <h3>{{ item.shop_item.ingredients }}</h3>
                    <p>
                      {{ item.shop_item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <div class="row">
          <div class="mb20 col-md-8 offset-md-2 overflow-x-hidden">
            <Borderline />
            <h2>{{ ffdata.locations_sub_header }}</h2>

            <p class="list-of-links">
              <template v-for="link in ffdata.locations_link_repeater">
                {{ link.name }} -
                <a :href="link.url" target="_blank">{{ link.url }}</a
                ><br />
              </template>
            </p>
            <Borderline />
          </div>
        </div>

        <div class="row pad-sm" v-if="ffdata.bottom_images">
          <div class="mb20 col-md-8 offset-md-2">
            <template v-for="image in ffdata.bottom_images">
              <!-- <div class="col-md-4 mb20"> -->
              <div
                class="inblock-red"
                :style="{ backgroundImage: 'url(' + image.image + ')' }"
              >
                _
              </div>
              <!-- </div> -->
            </template>
          </div>
        </div>
      </div>

      <!-- <img style="width: 100%;" src="@/assets/img/mamnoonFF_NADI_2-01.png"> -->
    </div>
    <!-- {{$store.state.currentUserEmail}} -->
    <GlobalFooter />
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";
import Borderline from "@/components/svgIcons/Borderline";
import GlobalFooter from "@/components/GlobalFooter";

export default {
  metaInfo() {
    return {
      title: `mamnoon fine foods`,
      meta: [
        {
          name: "description",
          content: `mamnoon fine foods: available in fine retailers across the puget sound`,
        },
        { property: "og:title", content: `mamnoon fine foods` },
        { property: "og:site_name", content: "nadi mama" },
        {
          property: "og:description",
          content: `mamnoon fine foods: available in fine retailers across the puget sound`,
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
      ffdata: null,
    };
  },
  components: {
    Nav3,
    Borderline,
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
        if (acf[item].acf_fc_layout === "fine foods") {
          this.ffdata = acf[item];
        }
      }

      await this.getB();
    },
    getB() {
      console.log("done");

      // window.scrollTop(0,100);
      console.log(document);
    },
  },

  mounted() {
    this.individualRestaurant();
  },
};
</script>

<style lang="scss">
  @import '@/assets/styles/css/mamnoonff.scss';
</style>
