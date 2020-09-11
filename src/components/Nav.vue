<template>
<div class="nav-wrap">
<div class="fixed-nav">
    <div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header">
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
          <GoogleAuth class="logButton googleInHeader" />
    <div class="container">
<div class="full-width-logo">
<template v-if="$mq === 'sm'">
    <a v-if="$route.name === 'home'" class="burger" @click="toggleMenu()">
        <Burger />
    </a>

    <a v-if="$route.name === 'shop'" class="burger" @click="toggleMenu()">
        <Burger />
    </a>

    <a v-if="$route.name === 'profile'" class="burger" @click="toggleMenu()">
        <Burger />
    </a>


    </template>
            <router-link to="/">
       
     <Logo />
        </router-link>

  </div>
</div>

    </div>
    </div>
    <template v-if="$mq === 'lg'">
    <nav v-if="$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header">
        <div class="container">
          <scrollactive :offset="180" ref="scrollactive">   
             <ul id="menu">
                <div class="inline-link" v-for="item in pageData" :key="item.tagname">
                    <li v-if="item.tagname">
                        <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>
                    </li>
                </div>   
            </ul>
            </scrollactive
          >
        </div>
    </nav>
</template>
<template v-if="$mq === 'sm'">
        <nav v-if="$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header mobile-nav" :class="{ expanded: mobNavExpanded }">
        <div class="container">
          <scrollactive :offset="100" ref="scrollactive">
                          <ul id="menu" class="mobile-menu">
                <div class="inline-link" v-for="item in pageData" :key="item.tagname">
                    <li v-if="item.tagname">
                        <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>
                    </li>
        
                </div>  

                            <div v-if="this.$store.state.loggedIn" class="inline-link">
                <li>
                    <router-link to="/profile">
                        profile
                    </router-link>
                </li>
            </div>

<div class="inline-link">
           <li class="cursor-pointer" @click="toggleMenu()">
                        <GoogleAuth />
                    </li>
                </div>


            </ul>            
            </scrollactive>
        </div>
    </nav>




        <nav v-if="$route.name === 'shop'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header mobile-nav" :class="{ expanded: mobNavExpanded }">
        <div class="container">
          <scrollactive :offset="100" ref="scrollactive">
                          <ul id="menu" class="mobile-menu">


                    <div v-if="this.$store.state.loggedIn" class="inline-link">
                <li>
                    <router-link to="/profile">
                        profile
                    </router-link>
                </li>
            </div>

<div class="inline-link">
           <li class="cursor-pointer" @click="toggleMenu()">
                        <GoogleAuth />
                    </li>
                </div>


            </ul>            
            </scrollactive>
        </div>
    </nav>



        <nav v-if="$route.name === 'profile'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header mobile-nav" :class="{ expanded: mobNavExpanded }">
        <div class="container">
          <scrollactive :offset="100" ref="scrollactive">
                          <ul id="menu" class="mobile-menu">
                                   <div class="inline-link">
                <li>
                    <router-link to="/shop">
                    shop
                    </router-link>
                </li>
            </div>  
<div class="inline-link">
           <li class="cursor-pointer" @click="toggleMenu()">
                        <GoogleAuth />
                    </li>
                </div>

            </ul>            
            </scrollactive>
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
        let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
        let AcfBlock = responseAcf
        this.pageData = AcfBlock.data.acf.content_fields

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
    /* top: -154px; */
        top: -194px;
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
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 92px;
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






