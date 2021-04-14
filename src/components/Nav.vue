<template>
<div class="nav-wrap">
    <div v-if="informationalWindowOpen === false && $route.name === 'home'" class="info-q" @click="informationalWindowOpen = true">
        <Star /> 
    </div>
<div class="fixed-nav" :class="{bugMessage: betaMode}">

<!--<div class="beta hide-on-mobile">
    our site is in beta mode. we would appreciate your feedback if you encounter any bugs. <a :href="`mailto:${feedbackEmail}?subject=Nadi%20Mama%20Bug%20Submission&body=-----please submit any information you can about the bug you encountered.----%0D%0A%0D%0A%0D%0A-----below is some session information to help us diagnose your bug issue----%0D%0A%0D%0Apage%20link:%20${location}%0D%0A%0D%0Auser%20agent:%20${userAgent},%20mobile:%20${isMobile}%20%20%0D%0A%0D%0A${JSON.stringify($store.state)}`">submit feedback</a>
</div>-->

<div class="beta">
    our site is in beta mode. if you encounter any bugs, please <a @click="sendState(randomId,$store.state,location,userAgent,isMobile)" :href="`mailto:${feedbackEmail}?subject=Nadi%20Mama%20Bug%20Submission&body=-----please submit any information you can about the bug you encountered.----%0D%0A%0D%0A%0D%0A-----below is some session information to help us diagnose your bug issue----%0D%0A%0D%0Apage%20link:%20${location}%0D%0A%0D%0Auser%20agent:%20${userAgent},%20mobile:%20${isMobile},%0D%0A%0D%0A%20bug%20id:%20${randomId}`"><u>submit feedback</u></a>!
</div>


<div v-if="informationalWindow && $route.name === 'home' && $store.state.isFirstTime === true" class="informational-window">
<div class="info-modal">
<!-- <button @click="endFirstTimeView">close</button> -->
<div class="topBlock" style="position: absolute;right: 10px;">
    <div @click="endFirstTimeView">
<CloseModalRed />
</div>
</div>



    <NadiIntro />
</div>
</div>



<div v-if="informationalWindowOpen && $route.name === 'home'" class="informational-window">
<div class="info-modal">
<!-- <button @click="endFirstTimeView">close</button> -->
<div class="topBlock" style="position: absolute;right: 10px;">
    <div @click="informationalWindowOpen = false">
<CloseModalRed />
</div>
</div>


    <NadiIntro />

</div>
</div>




    <div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header">
        <div v-if="showCartDropdown" class="hello logButton googleInHeader" style="right: 100px;">
            <CartDropdown />
         </div>

          <GoogleAuth class="logButton googleInHeader" />
    <div class="container">
<div class="full-width-logo">
<template v-if="$mq === 'sm'">

<!-- ss -->
<!-- {{$route.name}} -->

        <a v-if="correctPages" class="burger" @click="toggleMenu()">
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
    <nav v-if="this.$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header">
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
        <nav v-if="this.$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header mobile-nav" :class="{ expanded: mobNavExpanded }">
        <div class="container">
          <scrollactive :offset="100" ref="scrollactive">
                          <ul id="menu" class="mobile-menu">
               
               <template v-if="!isMobileUserAgent()">
                <div class="inline-link" v-for="item in pageData" :key="item.tagname">
                    <li v-if="item.tagname">
                        <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>
                    </li>
        
                </div>  
                    </template>

    <div v-if="this.$store.state.loggedIn" class="inline-link hide-on-desktop">
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
  <div v-if="showCartDropdown" class="inline-link">
    <li class="cursor-pointer">
<CartDropdown />
    </li>
    </div>
            </ul>            
            </scrollactive>
        </div>
    </nav>





        <nav v-if="$route.name === 'newsletterarchive'||$route.name === 'retail'||$route.name === 'profile'||$route.name === 'mamnoon'||$route.name === 'mamnoonff'||$route.name === 'mamnoonstreet'||$route.name === 'mbar'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header mobile-nav" :class="{ expanded: mobNavExpanded }">
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
  <div v-if="showCartDropdown" class="inline-link">
        <li class="cursor-pointer">
<CartDropdown />
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
import LogoMamnoon from "@/components/LogoMamnoon";
import Burger from "@/components/svgIcons/Burger";
import Star from "@/components/svgIcons/Star";
import GoogleAuth from "@/components/GoogleAuth";

import CartDropdown from "@/components/CartDropdown";
import NadiIntro from "@/components/NadiIntro";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";


export default {
    components: {
    CloseModalRed,
    CartDropdown,
    Logo,
    Star,
    LogoMamnoon,
    Burger,
    GoogleAuth,
    NadiIntro
  },
  data () {
      return {
          informationalWindowOpen: false,
          betaMode: true,
          isMobile: false,
          informationalWindow: true,
          location: window.location.href,
          userAgent: null,
          feedbackEmail: 'joe.waine@gmail.com',
          pageData: null,
          mobNavExpanded: false,
          logtext: '',
            user: {}
      }
  },
      computed:{
          correctPages(){

if(this.$route.name === 'home' ||
    this.$route.name === 'retail' ||
    this.$route.name === 'mamnoon' ||
    this.$route.name === 'mamnoonstreet' ||
    this.$route.name === 'mbar' ||
    this.$route.name === 'profile' ||
    this.$route.name === 'featured' ||
    this.$route.name === 'onlinemenu' ||
    this.$route.name === 'reservations' ||
    this.$route.name === 'mamnoonff' ||
    this.$route.name === 'newsletterarchive'){
        return true
    }else{
        return false
    }




          },
          randomId(){
                    return Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29) + "_" + Math.random().toString(36).substr(2, 29)
          },
          showCartDropdown(){


            if(this.$store.state.storeCurrentOrderUpdateRetail.charges.items.length > 0 || this.$store.state.storeCurrentOrderUpdateMamnoon.charges.items.length > 0 || this.$store.state.storeCurrentOrderUpdateMbar.charges.items.length > 0 || this.$store.state.storeCurrentOrderUpdateStreet.charges.items.length > 0)  {
            return true
              }else{
            return false
              }
          }
      },
methods: {

 isMobileUserAgent() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },

    
    sendState(randomId,storeState,location,userAgent,isMobile){

      this.$http.post("/sendbugstate",{
          randomId,
          storeState,
          location,
          userAgent,
          isMobile
      })
      .then((response) => {
          console.log('bug email sent')
      }).catch((e) => {
          console.log("errors");
          console.log(e);
        });





    },
endFirstTimeView(){

this.informationalWindow = false
this.$store.commit('endFirstTime')

},
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
    },
    getUserAgent(){
        navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
this.userAgent = navigator.sayswho


// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    this.isMobile = true;
}




    }
  },
  created() {
      this.store = this.$store.state

  },
    mounted() {
      this.individualRestaurant();


this.getUserAgent();

  }
  }

</script>


<style lang="scss">





.beta{
    position: fixed;
    width: 100%;
    background: white;
    color:#F05D5B;
    top: 0;
    z-index: 1000;
    padding: 5px;

    font-size: 20px;
    
    
    @media only screen and (max-width: 1080px) {
            width: 100%;
                font-size: 10px;
    }


text-align: center;
    @media only screen and (max-width: 640px) {
        font-size: 8px;
    }
    
}


.trans{
    color: transparent
}

.nadi-header{
    background-color: #F05D5B;
    height: 92px;
}

.nadi-sub-header{
background-color: #F58E58;
background-color: #F1765B;
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
// font-size: 20px;
font-size: 16px;
text-align: center;
padding: 0 10px;
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
    /* z-index: 100; */
        z-index: 101;


&.bugMessage{
    top: 40px;
@media only screen and (max-width: 1080px) {
        top: 20px;
}
}
}




.scrollactive-nav{
    margin: 0 auto;
}

.full-width-logo{
    width: 100%;
    position: relative;
    text-align: center;




}

@media only screen and (max-width: 768px) {
.full-width-logo{



}
}


@media only screen and (max-width: 1080px) {
    .hide-on-mobile,
    .googleInHeader{
    display: none;
}
}


@media only screen and (max-width: 992px) {

.inline-link.hide-on-mobile,
.hide-on-mobile,
.googleInHeader{
    display: none;
}

}


@media only screen and (max-width: 992px) {

.inline-link.hide-on-mobile,
.hide-on-mobile,
.googleInHeader{
    display: none;
}

}


@media only screen and (max-width: 768px) {




.full-width-logo{

    // text-align: left;
    /* width: 60%; */
    width: 100%;
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
    // top: -194px;
    top: -224px;
    top: -240px;
    transition: all .5s ease;
}


.mobile-nav.expanded{
    top: 92px;
    top: 112px;
    z-index: 100;
    padding-top: 15px !important;
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
        top: 112px;
                top: 132px;
}
.burger{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

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
    background: #f58e58;
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
    background: #f58e58;
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



.no-button-style{
    background: transparent;
    outline: none;
    border: 0;
}



.topBlock{
display: block;
text-align: right;
padding: 0 10px;
cursor: pointer;
}


.informational-window{

    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    height: 100vh;

}


.info-modal{
    position: absolute;
    top: 20px;
 
        width: 60%;
    background: white;
    left: 50%;
    // height: 90vh;
    transform: translateX(-50%);
    padding: 10px;
        overflow: scroll;
}


@media only screen and (max-width: 992px) {

.info-modal{
    position: absolute;
    top: 10px;
    width: 90%;
    background: white;
    left: 50%;
    // height: 90vh;
    transform: translateX(-50%);
    padding: 10px;
        overflow: scroll;
}

// .navbar-expand-lg{
//     display: none;
// }

}


.info-q{
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    right: 5px;
    z-index: 102;
    // background: #f58e58;
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    // padding-top: 6px;
    text-align: center;
    border-radius: 25px;
    cursor: pointer;
}


.navbar{
    padding: .5rem 1rem .5rem 1rem !important;
}

</style>






