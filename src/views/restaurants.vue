<template>
  <div class="restaurants">
    <Nav3 />

    <div>
      <div class="container">
        <div class="row text-center">
          <h1 class="subpage-header white-text text-center mb60">
            a mama restaurant for every occasion.
          </h1>
        </div>
      </div>

      <div class="container pb100">
        <div class="row">
          <template
            v-if="$store && $store.state"
            v-for="restaurant in this.$store.state.pageData[0]
              .restaurant_repeater"
          >
            <div class="col-md-6">
              <div class="restaurantBox">
                <router-link
                  v-if="restaurant.background_image.sizes"
                  :to="restaurant.name.replace(' ', '')"
                >
                  <div
                    class="imgBox"
                    :style="{
                      'background-image': `url(${restaurant.background_image.sizes.medium_large})`,
                    }"
                  >
                    <!--<div class="imgBox">->>-->

                    .
                  </div>
                </router-link>
                <router-link v-else :to="restaurant.name.replace(' ', '')">
                  <!--<div class="imgBox" :style="{'background-image': `url(${restaurant.background_image.sizes.medium_large})`}">-->
                  <div class="imgBox">
                    .
                  </div>
                </router-link>
                <div class="restaurantContent">
                  <div class="restaurantName">
                    <router-link :to="restaurant.name.replace(' ', '')">
                      <template v-if="restaurant.name === 'mbar'">
                        <MbarLogo :height="90" :marginLeft="6" />
                      </template>
                      <template
                        v-else-if="restaurant.name === 'mamnoon street'"
                      >
                        <StreetLogo
                          :height="80"
                          :marginLeft="6"
                          :marginBottom="10"
                        />
                      </template>
                      <template v-else-if="restaurant.name === 'mamnoon'">
                        <MamnoonLogo :height="90" :marginLeft="6" />
                      </template>
                      <template v-else-if="restaurant.name === 'anar'">
                        <AnarLogo :height="90" :marginLeft="6" />
                      </template>
                      <template v-else>
                        {{ restaurant.name }}
                      </template>
                    </router-link>
                  </div>

                  <div class="infoIconLine2 top">
                    <div class="rightIcon">
                      <div class="right-icon-text">
                        <MapPin class="mr6 centeredSvg" style="padding-bottom: 30px !important;"/>
                        <span>
                          <template v-for="address in restaurant.address">
                            <template v-for="line in address">
                              <a
                                :href="line.line_group.url"
                                target="_blank"
                                class="linkBlack"
                                >{{ line.line_group.text }}</a
                              ><br />
                            </template>
                          </template>
                          <br/>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="infoIconLine2">
                    <div class="rightIcon">
                      <div class="right-icon-text">
                        <Clock :color="'black'" class="mr6 centeredSvg" style="padding-bottom: 20px !important;"/>
                        <span>
                          <template v-for="hour in restaurant.hours">
                            <template v-for="line in hour">
                              <p>{{ line.line }}</p>
                            </template>
                          </template>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="infoIconLine2">
                    <div class="rightIcon">
                      <div class="right-icon-text">
                        <Phone :width="20" class="mr6 mt6 centeredSvg" />
                        <span>
                          <br/>
                          <a
                            :href="
                              `tel:+1${restaurant.phone_number.replace(
                                /[^0-9.]/g,
                                ''
                              )}`
                            "
                            target="_blank"
                            class="linkBlack"
                            
                            >{{ restaurant.phone_number }}</a
                          >
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style="">
                    <template v-for="(link, i) in restaurant.tile_list_links">
                      <div v-if="link.visible" class="listLinks">
                        <a class="listLink" :href="link.link"
                          >{{ link.title }} &#x203A;</a
                        >
                      </div>
                    </template>

                    <div class="bottomLinks">
                      <template v-for="link in restaurant.tile_bottom_buttons">
                        <a class="bottomButton" :href="link.link">{{
                          link.title
                        }}</a>
                      </template>
                    </div>
                  </div>
                </div>

                <!--<pre>
{{restaurant}}

</pre>-->
              </div>
            </div>
          </template>
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

import GlobalFooter from "@/components/GlobalFooter";
import Borderline from "@/components/svgIcons/Borderline";

import MapPin from "@/components/svgIcons/MapPin";
import Clock from "@/components/svgIcons/Clock";
import Phone from "@/components/svgIcons/Phone";
import MbarLogo from "@/components/svgIcons/MbarLogo";
import AnarLogo from "@/components/svgIcons/AnarLogo";
import StreetLogo from "@/components/svgIcons/StreetLogo";
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo";

export default {
  metaInfo() {
    return {
      title: `mama group restaurants`,
      meta: [
        { name: "description", content: `a mama location for every occasion` },
        { property: "og:title", content: `mama group restaurants` },
        { property: "og:site_name", content: "nadi mama" },
        {
          property: "og:description",
          content: `a mama location for every occasion`,
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
    GlobalFooter,
    Borderline,
    MamnoonLogo,
    StreetLogo,
    AnarLogo,
    MbarLogo,
    MapPin,
    Clock,
    Phone,
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

      //  await this.getB()
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
  @import '@/assets/styles/css/restaurants.scss';
</style>
