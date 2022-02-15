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
  @import '@/assets/styles/css/about.scss';
</style>
