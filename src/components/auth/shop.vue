<template>
  <div class="container nav-acc-header mb-80">
    <div class="row">
      <section id="alacarte" class="section hero is-primary is-fullheight">
        <div class>
          <h4 class="noselect">mama shop</h4>
          <p
            class="description-para noselect"
          >order now Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque.</p>
        </div>
        <!---->
      </section>
    </div>

    <div class="row">
      <!-- shop -->

      <!-- {{ story}} -->

      <div
        class="shopthird"
        v-for="mamaItem in story.content.body[0].testimonials.tbody"
        :key="mamaItem._uid"
      >
        <img v-bind:src="mamaItem.body[3].value" />

        <div class="order-bottom" style="text-align: center;">
          {{mamaItem.body[1].value}}
          <div class="order-panel">
            <button
              class="snipcart-add-item"
              v-bind:data-item-id="mamaItem.body[0].value"
              v-bind:data-item-price="mamaItem.body[2].value"
              v-bind:data-item-image="mamaItem.body[3].value"
              v-bind:data-item-name="mamaItem.body[1].value"
              v-bind:data-item-description="mamaItem.body[4].value"
              data-item-url="https://www.nadimama.com/products.json"
            >
              <Order />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
// 1. Require the Storyblok client
import StoryblokClient from "storyblok-js-client";

import Order from "@/components/svgIcons/Order";

import Carousel from "@/components/Carousel";
// 2. Set your token - you will be able to create a new space later.
const token = "H8MYzXMCYp9QQ30fkKtixwtt";

// 3. Initialize the client with the preview token so we can access our API easily
// from your space dashboard at https://app.storyblok.com
let storyapi = new StoryblokClient({
  accessToken: token,
});

export default {
  name: "shop",
  components: {
    Order,
  },
  data() {
    return {
      story: {
        content: {
          body: [],
        },
      },
    };
  },
  created() {
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
  methods: {
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
};
</script>


<style lang="scss">
.shopthird {
  width: 33.33333333%;
  float: left;
  margin-bottom: 0px;
  img {
    width: 100%;
  }
}
</style>