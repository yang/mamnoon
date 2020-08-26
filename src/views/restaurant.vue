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
        // `http://localhost:8888/wp-json/acf/v3/restaurant/${this.$route.params.id}`
        // `https://testsite.mamnoon.webfactional.com/wp-json/acf/v3/restaurant/${this.$route.params.id}`
       `https://testsite.mamnoon.webfactional.com/wp-json/acf/v3/restaurant/${this.$route.params.id}`
      );


let responseAcf2 = {
  acf: {
    content_fields: [
      {
        acf_fc_layout: 'meal_calendar',
        header: 'plan ahead',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        meal_calendar: [
          {
            meal: {
              createdLink: 'https://www.exploretock.com/mamnoonrestaurant/experience/163298/',
              date: 'Monday / September / 9',
              delivery: true,
              description: 'chicken with great sides',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/family-meal-3.jpg',
              restaurant_name: 'mamnoon',
              title: 'chicken shwarma',
              veg: false,
              _id: '1345',
              contents: [
                {
                  included_item: 'hummus'
                },
                {
                  included_item: 'olives'
                },
                {
                  included_item: 'feta'
                },
                {
                  included_item: 'pita'
                }
              ],
              food_style: [
                {
                  food_style_category: 'Gluten Free'
                }
              ],
              group_name: ''
            }
          },
          {
            meal: {
              createdLink: 'https://www.exploretock.com/mamnoonrestaurant/experience/163298/',
              date: 'Monday / September / 10',
              delivery: false,
              description: 'meal with great sides',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/shwarmakitsmall.jpg',
              restaurant_name: 'mbar',
              title: 'meat skewers',
              veg: true,
              _id: '1347',
              contents: false,
              food_style: [
                {
                  food_style_category: 'Gluten Free'
                },
                {
                  food_style_category: 'Vegan'
                }
              ],
              group_name: ''
            }
          },
          {
            meal: {
              createdLink: 'https://www.exploretock.com/mamnoonrestaurant/experience/163298/',
              date: 'Monday / September / 11',
              delivery: true,
              description: 'meal with great sides',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/familymealimage-chicken-schwarma.jpg',
              restaurant_name: 'mamnoon street',
              title: 'falafel plate',
              veg: false,
              _id: '1345',
              contents: false,
              food_style: false,
              group_name: ''
            }
          }
        ],
        tagname: 'planahead'
      },
      {
        acf_fc_layout: 'testimonials',
        header: 'testimonials',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        testimonials: [
          {
            testimonial: {
              quote: 'this is great food',
              author: 'jim d'
            }
          },
          {
            testimonial: {
              quote: '3 this is great food',
              author: 'davd d'
            }
          },
          {
            testimonial: {
              quote: '4 this is great food',
              author: 'jim wil'
            }
          },
          {
            testimonial: {
              quote: '1 this is great food',
              author: 'thopm domg'
            }
          }
        ],
        tagname: 'testimonials'
      },
      {
        acf_fc_layout: 'global_information',
        header: '',
        description: '',
        global_information: {
          title: 'guitar',
          address: '124 c street',
          email_address: 'joe@gmail.com',
          phone_number: '425 442 9308',
          instagram: '@guitarinsta',
          facebook: 'facebook.com/guitarinsta'
        },
        tagname: ''
      },
      {
        acf_fc_layout: 'reservations',
        header: 'reservations',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        reservations: [
          {
            restaurant_title: 'mamnoon',
            reservation_link: 'sevenrooms.com/mamnoon'
          },
          {
            restaurant_title: 'mamnoon street',
            reservation_link: 'sevenrooms.com/mamnoon-street'
          },
          {
            restaurant_title: 'anar',
            reservation_link: 'sevenrooms.com/anar'
          },
          {
            restaurant_title: 'mbar',
            reservation_link: 'sevenrooms.com/mbar'
          }
        ],
        tagname: 'reservations'
      },
      {
        acf_fc_layout: 'online_shop',
        header: 'mama shop',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        online_shop: [
          {
            shop_item: {
              id: '100001',
              name: 'mamnoon candle (large)',
              price: '44.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/candle.jpg',
              description: 'Marigold & Mint natural soy candle',
              weight: '21',
              options: false
            }
          },
          {
            shop_item: {
              id: '100002',
              name: 'mamnoon candle',
              price: '22.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/candle-large.jpg',
              description: 'Marigold & Mint natural soy candle',
              weight: '10.4',
              options: false
            }
          },
          {
            shop_item: {
              id: '100003',
              name: 'mama mask',
              price: '8.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/mask.jpg',
              description: ' mama mask with signature logo',
              weight: '1',
              options: false
            }
          },
          {
            shop_item: {
              id: '100004',
              name: 'marigold & mint hand sanitzier',
              price: '1.0',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/sanitizer.jpg',
              description: 'custom blended scent, 62% ethyl alcohol',
              weight: '2',
              options: false
            }
          },
          {
            shop_item: {
              id: '100005',
              name: 'aleppo cookbook',
              price: '25.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/aleppo-cookbook.jpg',
              description: 'celebrating the legendary cuisine of Syria',
              weight: '40',
              options: false
            }
          },
          {
            shop_item: {
              id: '100006',
              name: 'aleppo spice',
              price: '8.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/aleppo-pepper.jpg',
              description: 'villa jerada flavorful chili flake from the levant',
              weight: '6.6',
              options: false
            }
          },
          {
            shop_item: {
              id: '100007',
              name: 'sumac',
              price: '8.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/sumac.jpg',
              description: 'villa jerada cherry & citrus notes',
              weight: '6.6',
              options: false
            }
          },
          {
            shop_item: {
              id: '',
              name: 'house za\'atar blend',
              price: '15.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/zaatar.jpg',
              description: 'signature za\'atar blend packaged at mamnoon',
              weight: '9.7',
              options: false
            }
          },
          {
            shop_item: {
              id: '100009',
              name: 'soup for syria book',
              price: '30.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/soup-for-syria.jpg',
              description: 'favorite recipes to help Syrian refugees',
              weight: '38',
              options: false
            }
          },
          {
            shop_item: {
              id: '100010',
              name: '\'Seattle Cooks\' Cookbook',
              price: '32.95',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/seattle-cooks.jpg',
              description: 'celebration of iconic chefs in Seattle & recipes',
              weight: '35',
              options: false
            }
          },
          {
            shop_item: {
              id: '',
              name: 'mamnoon means thankful unisex tee',
              price: '20.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/mamnoon-white-t.jpg',
              description: 'a thank you to the healthcare workers of Seattle',
              weight: '1',
              options: [
                {
                  variant_group: {
                    variant_title: 'size',
                    variant_option: [
                      {
                        option: 'S'
                      },
                      {
                        option: 'M'
                      },
                      {
                        option: 'L'
                      },
                      {
                        option: 'Xl'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            shop_item: {
              id: '100012',
              name: 'mamnoon kids t',
              price: '20.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/mamnoon-kids-t.jpg',
              description: 'red mamnoon kids tee w/ logo',
              weight: '1',
              options: [
                {
                  variant_group: {
                    variant_title: 'size',
                    variant_option: [
                      {
                        option: '2T'
                      },
                      {
                        option: '4T'
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            shop_item: {
              id: '100013',
              name: 'mamnoon womens t',
              price: '25.00',
              image: 'https://testsite.mamnoon.webfactional.com/wp-content/uploads/2020/08/mamnoon-womens-t.jpg',
              description: 'red mamnoon w/ logo ',
              weight: '1',
              options: [
                {
                  variant_group: {
                    variant_title: 'size',
                    variant_option: [
                      {
                        option: 'S'
                      },
                      {
                        option: 'M'
                      },
                      {
                        option: 'L'
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        tagname: 'shop'
      },
      {
        acf_fc_layout: 'a_la_carte',
        header: 'a la carte',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        service: [
          {
            service_item: {
              name: 'mamnoon',
              link: 'https://app.upserve.com/s/mamnoon-llc-seattle'
            }
          },
          {
            service_item: {
              name: 'mamnoon street',
              link: 'https://app.upserve.com/s/mamnoon-street-seattle'
            }
          }
        ],
        tagname: 'alacarte'
      },
      {
        acf_fc_layout: 'newsletter',
        header: 'sign up for our newsletter',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        campaign_monitor_id: '30FEA77E7D0A9B8D7616376B90063231D39C7C96A1D7376C38AE60E1910A82A10202394E8D6AA574431DCB69ECEA19B52C2754C5E2F6A48DEA4ACA3762773CE1',
        campaign_monitor_name: 'cm-wodku-wodku'
      }
    ]
  }
}


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




