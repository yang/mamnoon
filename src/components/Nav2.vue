<template>
<div class="nav-wrap2">
    <div v-if="informationalWindowOpen === false && $route.name === 'home'" class="info-q" @click="informationalWindowOpen = true">
        <Star /> 
    </div>
<div class="fixed-nav">

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




</div>
</div>




    <div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header2">


   
<div class="profile-button">
<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47 24.5C47 37.4787 36.4787 48 23.5 48C10.5213 48 0 37.4787 0 24.5C0 11.5213 10.5213 1 23.5 1C36.4787 1 47 11.5213 47 24.5Z" fill="white"/>
<circle cx="23.5" cy="15.6875" r="8.8125" fill="#050000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8125 41.8156V35.25C8.8125 29.8422 13.1964 25.4583 18.6042 25.4583H27.4167C32.8244 25.4583 37.2083 29.8422 37.2083 35.25V41.8156C33.3739 45.0504 28.4198 47 23.0104 47C17.601 47 12.6469 45.0504 8.8125 41.8156Z" fill="#060000"/>
<circle cx="23.5" cy="25.5" r="21.5" stroke="black" stroke-width="2"/>
<path d="M23.5 22C27.0899 22 30 18.866 30 15H17C17 18.866 19.9101 22 23.5 22Z" fill="white"/>
</svg>
</div>


<button @click="toggleFullScreen" class="order-button2">
order <div class="arrow-right"></div>
</button>

          <!-- <NewAuth :authEmail="$auth._data" :authAuthenticated="$auth.isAuthenticated" class="logButton googleInheader" /> -->
    <div class="container">
<div class="full-width-logo">
<template v-if="$mq === 'sm'">

<!-- ss -->
<!-- {{$route.name}} -->

        <div v-if="!correctPages" class="burger" @click="toggleMenu()" style="width: 60px;text-align: right;height: 80px;">
        <Burger2 />
    </div>





    </template>
    <router-link to="/landingdrawer">
nadi mama

        </router-link>



 
 
  </div>
</div>

    </div>
    </div>




    <template v-if="$mq === 'lg'">
    <nav v-if="this.$route.name === 'home'||this.$route.name === 'landingdrawer'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header2">
        <div class="container">
          <scrollactive :offset="180" ref="scrollactive">   
             <ul id="menu">

<div class="inline-link"><li>

<a href="#ourrestaurants" class="scrollactive-item nav-item">our restaurants</a>

</li></div>


                 <template v-for="item in pageData">
                <div class="inline-link" v-if="item.tagname !== 'testimonials' && item.tagname !== 'planahead'&& item.tagname !== 'fullonlinemenu'&& item.tagname !== 'reservations'">
                    <li v-if="item.tagname">
                    
                        <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>
                
                    </li>
                </div>  
                </template> 
           <div class="inline-link">

                    <li>
              
                        <router-link to="/about">
                            about
                        </router-link>
                
                    </li>
                </div>   


           <div class="inline-link">

                    <li>
                        <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">
                            giftcards
</a>
                    </li>
                </div>   



            </ul>
            </scrollactive
          >
        </div>
    </nav>
</template>
<template v-if="$mq === 'sm'">
        <nav class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header2 mobile-nav" :class="{ expanded: mobNavExpanded }">
        <div class="container">
          <scrollactive :offset="100" ref="scrollactive">

             <ul id="menu" class="mobile-menu">

<div class="inline-link"><li><a href="#ourrestaurants" class="scrollactive-item nav-item">our restaurants</a></li></div>


                 <template v-for="item in pageData">
                <div class="inline-link" v-if="item.tagname !== 'testimonials' && item.tagname !== 'planahead'&& item.tagname !== 'fullonlinemenu'&& item.tagname !== 'reservations'">
                    <li v-if="item.tagname">
 <a :href="'#'+item.tagname" class="scrollactive-item nav-item">{{item.header}}</a>
                    </li>
                </div>  
                </template> 
           <div class="inline-link">

                    <li>
                        <router-link to="/about">
                            about
                        </router-link>
                    </li>

                                   <li>
                        <router-link to="/newsletterarchive">
                          newsletter archive
                        </router-link>
                    </li>




       

                    <li>
                        <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">
                            giftcards
</a>
                    </li>
               

                </div>   







                         <!-- <ul id="menu" class="mobile-menu">-->

                    <div  class="inline-link">

                <li v-if="this.$store.state.loggedIn">
                    <router-link to="/profile">
                  <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47 24.5C47 37.4787 36.4787 48 23.5 48C10.5213 48 0 37.4787 0 24.5C0 11.5213 10.5213 1 23.5 1C36.4787 1 47 11.5213 47 24.5Z" fill="white"/>
<circle cx="23.5" cy="15.6875" r="8.8125" fill="#050000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8125 41.8156V35.25C8.8125 29.8422 13.1964 25.4583 18.6042 25.4583H27.4167C32.8244 25.4583 37.2083 29.8422 37.2083 35.25V41.8156C33.3739 45.0504 28.4198 47 23.0104 47C17.601 47 12.6469 45.0504 8.8125 41.8156Z" fill="#060000"/>
<circle cx="23.5" cy="25.5" r="21.5" stroke="black" stroke-width="2"/>
<path d="M23.5 22C27.0899 22 30 18.866 30 15H17C17 18.866 19.9101 22 23.5 22Z" fill="white"/>
</svg>
                    </router-link>
                </li>

                
            </div>
    



            </ul>            
            </scrollactive>
        </div>
    </nav>

    </template>




<template v-if="fullScreen">
<div class="cover">
  <div class="container mobilePage white-text">

 

<h1>good evening, Fatima!</h1>

Not you? Click here to sign in 
or create an account.

<br>
start your order:



<div class="select-dropdown" @click="toggleDropDown">choose a location &nbsp;<div class="arrow-down"></div></div>
   
   
   
   
   
   <transition name="slide">
    



<div class="dropdownDrawer" v-if="dropdown">
                  <div  v-for="item in pageData[0].restaurant_repeater" :key="item.acf_fc_layout"><!--begin big loop-->
                   <router-link :to="item.name.replaceAll(' ','')">
                   {{item.name}}
                   </router-link>
                    </div>
</div>

   </transition>



    </div>
</div>
</template>


</div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import Logo from "@/components/Logo";
import LogoMamnoon from "@/components/LogoMamnoon";
import Burger2 from "@/components/svgIcons/Burger2";
import Star from "@/components/svgIcons/Star";
import GoogleAuth from "@/components/GoogleAuth";
// import NewAuth from "@/components/NewAuth";

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
    Burger2,
    GoogleAuth,
    // NewAuth,
    NadiIntro
  },
  data () {
      return {
          dropdown: false,
             pageData: null,
          fullScreen: false,
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
    this.$route.name === 'about' ||
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


    toggleDropDown(){


this.dropdown = !this.dropdown;
    },
            async individualRestaurant(){
   




let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/virtual_restaurant/412`)
    // let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)



    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields
    this.pageData = AcfBlock.data.acf.restaurants
},
toggleFullScreen(){


    this.fullScreen = !this.fullScreen


},
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
//        async individualRestaurant(){
        
//         let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)



//         let AcfBlock = responseAcf
//         this.pageData = AcfBlock.data.acf.content_fields

// },
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
                font-size: 14px;
    }


text-align: center;
    @media only screen and (max-width: 640px) {
        font-size: 14px;
    }
    
}


.trans{
    color: transparent
}

.nadi-header2{
    background-color: #FFFFFF;
    border-bottom: 1px solid #DDDDDD;
    height: 92px;
}

.nadi-sub-header2{
background-color: #F58E58;
background-color: #F1765B;
background-color: #ffffff;
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

.nadi-sub-header2.mobile-nav{
    height: auto;
    padding: 20px 0;
}

ul#menu li a{
    color: #EE5E68;
    font-weight: 400;
    letter-spacing: 1px;
        // border-bottom: 2px solid black;
    // padding-bottom: 5px;
}

ul#menu li a:hover{
color: #FFF367;
text-decoration: none;
}

ul#menu li a.is-active{
  color: #FFF367;
      border-bottom: 2px solid black;
    padding-bottom: 5px;
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
    // top: 40px;
@media only screen and (max-width: 1080px) {
        // top: 20px;
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




.nadi-sub-header2.mobile-nav{
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
    // top: 112px;
    z-index: 100;
    padding-top: 15px !important;


    // background: pink;
    height: 100vh;

}




.mobile-nav li{
    margin-bottom: 5px;
}


.nav-wrap2{
    position: absolute;
    z-index: 100;
    position: fixed;
    z-index: 100;
    width: 100%;
    // top: 92px;
        // top: 112px;
                // top: 132px;
                    top: 92px;
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
 
        // width: 60%;
            width: 80vh;
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
    // width: 90%;
        // width: 80vh;
    // width: 90%;
    background: white;
    left: 50%;
    // height: 90vh;
    transform: translateX(-50%);
    padding: 10px;
        overflow: scroll;

            // height: 100vh;
}

// .navbar-expand-lg{
//     display: none;
// }

}


@media only screen and (min-width: 1400px) {

.info-modal{
    position: absolute;
    top: 10px;
    // width: 30%;
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



@media only screen and (max-width: 640px) {

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

            // height: 100vh;
}

// .navbar-expand-lg{
//     display: none;
// }

}


.profile-button{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    // background: black;
        position: absolute;
    right: 120px;
color: transparent;
font-size: 0;
}

.order-button2{
    background: white;
    color: #EE5E68;
    border: 2.5px solid #EE5E68;
    border-radius: 7px;
    width: 90px;
    float: right;
    height: 36px;
    transform: translateY(-4px);
    position: absolute;
    right: 20px;


    &:hover{
    background: #EE5E68;
    color: white;


.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  
  border-left: 10px solid white;
  display: inline-block;
  transform: translateY(1px);
  margin-left: 4px;
}


    }

}
.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  
  border-left: 10px solid #EE5E68;
  display: inline-block;
  transform: translateY(1px);
  margin-left: 4px;
}


.arrow-down {

  display: inline-block;
  transform: translateY(1px);

  width: 0; 
  height: 0; 
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  
  border-top: 10px solid #000;

}




.cover{
    background: #EE5E68;
    height: 100vh;
}


.select-dropdown{
background: white;
border: 2px solid black;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
color: black;
padding: 6px 10px;
font-weight: 500;
width: 200px;
margin: 20px 0 0;
cursor: pointer;

}


.dropdownDrawer{
    background: white;
    width: 200px;
border: 2px solid black;
border-top: 0;
padding: 6px 10px;

a{
    color: black;
    cursor: pointer;
}
}


</style>






