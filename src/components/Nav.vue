<template>
<div class="nav-wrap">
<div class="fixed-nav">
    <div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header">



        <!-- <template v-if="this.$store.state.loggedIn">
    <button v-if="$route.name != 'login'" @click="logUserOut()" class="logButton">log out</button>
        </template>
        <template v-else>
<button v-if="$route.name != 'login'" @click="logUserOut()" class="logButton">log in</button>
    <router-link v-if="$route.name != 'login'" class="logButton" to="/login">log in</router-link>
        </template> -->




<div v-if="this.$store.state.loggedIn" class="hello logButton googleInHeader" style="right:190px">
        <router-link to="/profile">
       
       profile
        </router-link>
</div>


<div class="hello logButton googleInHeader" style="right:100px">
        <router-link to="/shop">
       
      shop
        </router-link>
</div>



    <!-- <template v-if="!this.$store.state.userProfileModalVisible">

<button v-if="this.$store.state.loggedIn" class="logButton2" @click="showUserModal">U</button>



    </template> -->


<GoogleAuth class="logButton googleInHeader" />
    <div class="container">
<div class="full-width-logo">
<template v-if="$mq === 'sm'">
    <a v-if="$route.name === 'home'" class="burger" @click="toggleMenu()">
        <Burger />
    </a>
    </template>
            <router-link to="/">
       
     <Logo />
        </router-link>

  </div>
</div>

    </div>
    <template v-if="$mq === 'lg'">
    <nav v-if="$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header">
        <div class="container">
          <scrollactive
           :offset="180"
            ref="scrollactive"
            >   
             <ul id="menu">
                 <div class="inline-link" v-for="item in pageData" :key="item.tagname">
<li v-if="item.tagname">

        <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>

</li>
                   </div>   
            </ul></scrollactive
          >
        </div>
    </nav>
</template>


</div>    

<template v-if="$mq === 'sm'">
        <nav v-if="$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header mobile-nav" :class="{ expanded: mobNavExpanded }">
        <div class="container">
          <scrollactive
           :offset="100"
            ref="scrollactive"
            >    <ul id="menu" class="mobile-menu">
                <li v-for="offering in store.inventory.offerings" @click="toggleMenu()" v-bind:key="offering.title">
                    <a :href="'#'+offering.category" class="scrollactive-item nav-item">{{offering.header}}</a>
                    </li>
                    <li class="cursor-pointer" @click="toggleMenu()">
                        <GoogleAuth />
                    </li>
            </ul></scrollactive
          >
        </div>
    </nav>

    <div>
        <div class="container">


        </div>
    </div>

    </template>
</div>
</template>


<script>
import VueJwtDecode from "vue-jwt-decode";

import Logo from "@/components/Logo";
import Burger from "@/components/svgIcons/Burger";
import GoogleAuth from "@/components/GoogleAuth";


export default {
    components: {
    Logo,
    Burger,
    GoogleAuth
  },
  data () {
      return {
          pageData: null,
          mobNavExpanded: false,
          logtext: '',
            user: {}
      }

  },
  methods: {
       async individualRestaurant(){

    // let responseAcf = await this.$http.get(`https://testsite.mamnoon.webfactional.com/wp-json/acf/v3/restaurant/188`)
        // let responseAcf = await this.$http.get(`http://testsite.mamnoon.webfactional.com/wp-json/acf/v3/restaurant/188`)
let responseAcf = {
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



    // this.pageData = AcfBlock.data.acf.content_fields

        this.pageData = responseAcf.acf.content_fields

},
    showUserModal () {
    this.$store.commit('showUserModal')
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$store.commit('logOut')
    //   this.$router.push("/");
    },
    toggleMenu(){
        this.mobNavExpanded = !this.mobNavExpanded;
     this.$store.commit('hideUserModal')
        // console.log(this)
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;


      console.log(decoded)
    }
  },
  created() {
      this.store = this.$store.state

  },
    mounted() {
      this.individualRestaurant();

  }
  }

</script>


<style>


.trans{
    color: transparent
}

.nadi-header{
    background-color: #F05D5B;
    height: 92px;
}



.nadi-sub-header{
background-color: #F58E58;
height: 50px;
}




ul#menu{
    margin: -4px auto 0;
    padding-left: 0;
}

ul#menu li {
display:inline;
font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
font-weight: bold;
font-size: 20px;
text-align: center;
padding: 0 20px;

color: #ffffff;
}



ul#menu.mobile-menu li {
display:block;
list-style-type: none;
}


.nadi-sub-header.mobile-nav{
    height: auto;
    padding: 20px 0;
}




ul#menu li a{
color: #ffffff;
}


ul#menu li a:hover{
color: #FFF367;
text-decoration: none;
}



ul#menu li a.is-active{
  color: #FFF367;
}

ul#menu li.active{
    color: #FFF367;
}

.fixed-nav{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}


.scrollactive-nav{
    margin: 0 auto;
}

.full-width-logo{
    width: 100%;
    position: relative;
    text-align: center;
}

@media only screen and (max-width: 992px) {


.googleInHeader{
    display: none;
}

}


@media only screen and (max-width: 768px) {




.full-width-logo{

    text-align: left;
}
}



.full-width-logo .collapse{
position: absolute;
right: 0;
}




.nadi-sub-header.mobile-nav{
    position: fixed;
    width: 100%;
    top: -154px;
    transition: all .5s ease;
}


.mobile-nav.expanded{
    top: 92px;
}




.mobile-nav li{
    margin-bottom: 5px;
}


.nav-wrap{
    position: absolute;
    z-index: 100;
}
.burger{
    position: absolute;
    right: 0;
    top: 20px;
}




@media only screen and (max-width: 576px) {
  
  
  
  .navbar .container {
        max-width: 98;
    }
}



.logButton{
    position: absolute;
    right: 0;
    height: 100%;
    border: 0;
    background: #F1765B;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 0 25px;
    line-height: 90px;
    text-decoration: none;
    cursor: pointer;
    z-index: 100;
}


.logButton2{
    position: absolute;
right: 120px;
    height: 100%;
    border: 0;
    background: #F1765B;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 0 25px;
    line-height: 90px;
    text-decoration: none;
    cursor: pointer;
    z-index: 100;
}




.cursor-pointer{
    cursor: pointer;
}




.googleInHeader a{
    color: white;
}


.logButton a:hover{
    text-decoration: none;
    color: #fff367;

}


.inline-link{display: inline}
</style>






