<template>
  <div>
    <Nav />
<br>
<br>
<br>
<br>

    <div class="container mt-5 nav-acc-header">
      <div class="row">
        <div class="col-md-12">
          <div v-for="item in restaurantInfo" :key="item.acf_fc_layout">
            <OnlineShop v-if="item.acf_fc_layout === 'online_shop'" :data="item.online_shop" />
            <MealCalendar v-else-if="item.acf_fc_layout === 'meal_calendar'" :data="item" />
            <OrderToGo v-else-if="item.acf_fc_layout === 'individual_to_go'" :data="item" />
            <Testimonials v-else-if="item.acf_fc_layout === 'testimonials'" :data="item.testimonials" />
            <Reservations v-else-if="item.acf_fc_layout === 'reservations'" :data="item.reservations" />  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import Testimonials from "@/components/Testimonials";
import OnlineShop from "@/components/OnlineShop";
import MealCalendar from "@/components/MealCalendar";
import OrderToGo from "@/components/OrderToGo";
import Reservations from "@/components/Reservations";

import StoryblokClient from "storyblok-js-client";

// 2. Set your token - you will be able to create a new space later.
const token = "H8MYzXMCYp9QQ30fkKtixwtt";

// 3. Initialize the client with the preview token so we can access our API easily
// from your space dashboard at https://app.storyblok.com
let storyapi = new StoryblokClient({
  accessToken: token,
});

export default {
  name: "restaurant",
  components: {
    Nav,
    Carousel,
    Testimonials,
    OnlineShop,
    MealCalendar,
    OrderToGo,
    Reservations
  },
  data() {
    return {
      restaurantInfo: "",
      story: {
        content: {
          body: [],
        },
      },
    };
  },
  methods: {
    async dumpAcf() {
      let responseAcf = await this.$http.get(
        `http://localhost:8888/wp-json/acf/v3/restaurant/${this.$route.params.id}`
      );
      let AcfBlock = responseAcf.data.acf.content_fields;
      this.restaurantInfo = AcfBlock;
    },
    getStory(slug, version) {
      storyapi
        .get("cdn/stories/" + slug, {
          version: version,
        })
        .then((response) => {
          this.story = response.data.story;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.dumpAcf();
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
    // this.showProducts();

    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    window.storyblok.init({
      accessToken: token,
    });
    window.storyblok.on("change", () => {
      // this will indicate to load the home story, exchange that with the full slug of your content
      // either it is the page URL or hardcoded as in the example below
      this.getStory("home", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("home", "draft");
      } else {
        this.getStory("home", "published");
      }
    });
  },
};
</script>




