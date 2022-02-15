<template>
  <div>
    <div>
      <VirtualRestaurantTemplate />
    </div>
    <!-- {{$store.state.currentUserEmail}} -->
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

import VirtualRestaurantTemplate from "@/components/VirtualRestaurantTemplate";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: `our restaurant`,
    // all titles will be injected into this template
    titleTemplate: "%s | nadi mama",
    meta: [{ vmid: "description", name: "description", content: "barbar" }],
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
    VirtualRestaurantTemplate,
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
  @import '@/assets/styles/css/restauranttemplate.scss';
</style>
