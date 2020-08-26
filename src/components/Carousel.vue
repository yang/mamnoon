<template>
  <main v-editable="blok" v-if="blok.content.body[0]">
  <div v-for="item in pageData" :key="item.acf_fc_layout">
    <TestimonialsMain v-if="item.acf_fc_layout === 'testimonials'" :header="item.header" :description="item.description" :data="item.testimonials" :tag="item.tagname" />
    <CoverFlow v-else-if="item.acf_fc_layout === 'meal_calendar'" :header="item.header" :description="item.description" :data="item.meal_calendar" :tag="item.tagname" />
    <Reservations v-else-if="item.acf_fc_layout === 'reservations'" :header="item.header" :description="item.description" :data="item.reservations" :tag="item.tagname" />
    <OnlineShop v-else-if="item.acf_fc_layout === 'online_shop'" :header="item.header" :description="item.description" :data="item.online_shop" :tag="item.tagname" />
    <ALaCarte v-else-if="item.acf_fc_layout === 'a_la_carte'" :header="item.header" :description="item.description" :data="item.service" :tag="item.tagname" />
    <Newsletter v-else-if="item.acf_fc_layout === 'newsletter'" :header="item.header" :body="item.description" :tag="item.tagname" />
  </div>
  </main>
</template>

<script type="text/javascript">

import carousel from "vue-owl-carousel";
import Order from "@/components/svgIcons/Order";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import Mamnoon from "@/components/svgIcons/Mamnoon";
import Mbar from "@/components/svgIcons/Mbar";
import ShowAll from "@/components/svgIcons/ShowAll";
import MamnoonStreet from "@/components/svgIcons/MamnoonStreet";
import MamnoonSVG from "@/components/svgIcons/MamnoonSVG";
import Newsletter from "@/components/Newsletter";
import CoverFlow from "@/components/CoverFlow";
import UpserveFiltering  from "@/components/UpserveFiltering";
import TestimonialsMain from "@/components/TestimonialsMain";
import Reservations from "@/components/Reservations";
import ALaCarte from "@/components/ALaCarte";
import OnlineShop from "@/components/OnlineShop";

export default {
  components: {
    ALaCarte,
    carousel,
    Order,
    Next,
    Prev,
    Newsletter,
    CoverFlow,
    Mbar,
    Mamnoon,
    MamnoonStreet,
    MamnoonSVG,
    ShowAll,
    UpserveFiltering,
    TestimonialsMain,
    Reservations,
    OnlineShop
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    names() {
      return this.$store.state.names;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      pageData: null,
      testimonials: null,
      inventory: this.$store.state.inventory,
      // products: this.$store.state.inventory.offerings[0].items,
      blockedBody: this.apiData,
      upserve: null,
      upserveCategories: [],
      currentlyFiltered: []
    };
  },
  props: ['apiData', 'blok'],
  methods: {
  async individualRestaurant(){

    // let responseAcf = await this.$http.get(`https://testsite.mamnoon.webfactional.com/wp-json/acf/v3/restaurant/188`)
        let responseAcf = await this.$http.get(`https://testsite.mamnoon.webfactional.com/wp-json/acf/v3/restaurant/188`)

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
    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields
        // this.pageData = AcfBlock.acf.content_fields

},
    filterByCat(cat){
      this.currentlyFiltered = []
      for(let i = 0;i<this.upserve.length;i++){
        if(this.upserve[i].category === cat){
        this.currentlyFiltered.push(this.upserve[i])
        }
      }
    },
    dayChange(e) {
      this.currentDay = e + 1;
    },
    loggit() {
      console.log(134);
    },
    toggle: function(event) {
      if (event.target.classList.contains("is-open")) {
        this.$store.commit("decrement");
        event.target.classList.remove("is-open");
      } else {
        event.target.classList.add("is-open");
        this.$store.commit("increment");
      }
    },
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    increment2(name) {
      this.$store.commit("increment2", { name });
    },
    removeFromCart(price) {
      this.$store.commit("removeFromCart", { price });
    },
    confirmOrder(timeslot) {
      if (event.target.classList.contains("reserved")) {
        this.$store.commit("unreserveFamilyMeal", { timeslot });
      } else {
        this.$store.commit("reserveFamilyMeal", { timeslot });
      }
    },
    changedAlert() {
      console.log("changed");
    },
    async upserves(){

      let responseUpserve = await this.$http.get("/product/upserve");
      let upserveProducts = responseUpserve.data.body.objects
  
      this.upserve = upserveProducts

      for(let i = 0;i<upserveProducts.length;i++){
        if(!this.upserveCategories.includes(upserveProducts[i].category)){
          this.upserveCategories.push(upserveProducts[i].category)
        }
      }

    }
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
  },
  mounted(){
    this.individualRestaurant()
  }
};

</script>


<style lang="scss">
.reserved {
  background: red;
}
.not-available {
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}
.order-button {
  width: 33.33%;
  padding: 20px 0;
}
h4 {
  text-align: center;
}
.is-fullheight,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;
  }
}
.section.hero.familymeal {
  width: 88%;
  margin: 0 auto;
}
.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 14px;
  left: 30%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    left: 5%;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 14px;
  right: 30%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    right: 5%;
  }
}
.is-fullheight {
  padding: 20px 0 0 0;
  overflow: hidden;
}
.familymeal {
  padding: 0 0 0 0;
}
.order-bottom {
  background: #fff367;
  padding: 10px 0;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
}
.order-bottom.order-top {
  background: #f1765b;
  min-height: 90px;
  text-align: center;
}
.order-panel {
  padding: 10px 0;
}
#mama-dummy-button {
  width: 70px;
  margin: 0 auto;
}
.carousel {
  margin-bottom: 80px;
}
#testimonials .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f1765b;
  }
  &:nth-child(even) {
    background: #f58e58;
  }
}
.owl-stage {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.owl-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto !important;
}
#testimonials .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#testimonials .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#testimonials .owl-item > div > div {
  text-align: left;
}
.xs {
  // font-size: 16px;
  font-size: 18px;
}
.sm {
  // font-size: 22px;
  font-size: 18px;
}
.md {
  // font-size: 18px;
  // font-size: 38px;


font-size: 18px;

}
.lg {
  font-size: 64px;
}
.days {
  margin: 10px auto 5px;
  width: 80%;
}
.days span {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 30px;
  cursor: pointer;
}
.month {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  // line-height: 30px;
  cursor: pointer;
}
.insideHeader {
  margin-bottom: 20px;
  margin-top: -15px;
}
button.snipcart-add-item {
  border: 0;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}
.snipcart-modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 110 !important;
  background-color: #f0f5f6;
  // top: 140px !important;
  top: 90px !important;
}
.top-widget {
  width: 100%;
  height: 500px;
  background: green;
}
.coverflowsection {
  padding: 0 0 0 0;
  // height: 600px;
  // height: 510px;
  // height: 600px;
  height: 600px;
  height: 830px;
  margin-bottom: 80px;
  // background-color: #f05d5b;
  background-color: #F58E58;
  overflow: hidden;
  position: relative;
  h4 {
    color: #fff367;
  }
  p {
    color: white;
    width: 80%;
    margin: 10px auto 10px;
    text-align: center;
  }
}
@media only screen and (max-width: 960px) {
  .coverflowsection {
    // height: 660px;
        height: 710px
  }
}
@media only screen and (max-width: 640px) {
  .coverflowsection {
    // height: 660px;
        height: 800px
  }
}
@media only screen and (max-width: 480px) {
  .coverflowsection {
    height: 800px;
  }
}
.bottom-button {
  // position: absolute;
  // bottom: 0;
  // background: #FFF367;
  // width: 100%;
  // padding: 10px 0;
  position: absolute;
  bottom: 0;
  background: #fff367;
  width: 100%;
  padding: 10px 0;
  height: 120px;
  a {
    position: absolute;
    // width: 100%;
  }
}
.width-container {
  width: 100%;
  overflow: auto;
}
section {
  clear: both;
}
.shortcarousel {
  margin-bottom: 80px;
}
.description-para {
  color: white;
  margin: 12px auto 20px;
  width: 80%;
  text-align: center;
}

.quote-container {
  // position: relative;
  // height: 100%;
  // width: 100%;
  // padding-bottom: 80px;
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  // padding-bottom: 80px;
  text-align: center;

}
.quote-author {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff367;
}
.itemDescription{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff367b5;
    top: 0;
    opacity: 0;
    transition: all .5s ease;
.text-box{
      width: 80%;
      margin: 0 auto;
      font-weight: 100;
      font-size: 36px;
      margin-top: 100px;
}
}
.relative-pos{
  position: relative;
  overflow: hidden;  
    &:hover{
      .itemDescription{
        opacity: 1;
      }
    }
}


.tesstimonialItem{
  text-align:center;
  margin-top: 0px;
  width: 100% !important;
  
}



#mama-shop .carousel{
    margin-bottom: 20px;
}



.owl-item > div{
  width: 100%
}


#testimonials{
  .owl-carousel {
    margin-top: -10px;
  }
}


#testimonials{
  .quote-container {
    // height: 200px;
        min-height: 60px;
    position: relative;

    .md, .xs{
      position: absolute;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      left: 50%;
      width: 100%;
      font-size: 20px;
    }
}

}

ul.upserve-cats li{
  display: inline;
}


.filtree{
  width: 50%;
  float: left;
  height: 300px;
background: #ddd;
margin: 5px;
padding: 5px;
}
</style>