<template>
<div class="nav-wrap2">
    <div v-if="informationalWindowOpen === false && $route.name === 'home'" class="info-q" @click="informationalWindowOpen = true">
        <Star /> 
    </div>
<div class="fixed-nav" style="background:red">





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










          <!-- <NewAuth :authEmail="$auth._data" :authAuthenticated="$auth.isAuthenticated" class="logButton googleInheader" /> -->
    <div class="container">

<div class="full-width-logo left" style="text-align: center;">
    <div class="logo-box">
    <router-link to="/">
<svg id="nadiDesk" width="209" height="44" viewBox="0 0 209 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="209" height="44" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1918:29" transform="translate(-0.00125313) scale(0.00200501 0.00952381)"/>
</pattern>
<image id="image0_1918:29" width="500" height="105" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
</router-link>
</div>

 
  </div>
</div>

    </div>
    </div>











</div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import Logo from "@/components/Logo";
import LogoMamnoon from "@/components/LogoMamnoon";
import Burger2 from "@/components/svgIcons/Burger2";
import Star from "@/components/svgIcons/Star";
import GoogleAuth2 from "@/components/GoogleAuth2";
// import NewAuth from "@/components/NewAuth";

import CartDropdown from "@/components/CartDropdown";

import CloseModalRed from "@/components/svgIcons/CloseModalRed";





export default {
    components: {
    CloseModalRed,
    CartDropdown,
    Logo,
    Star,
    LogoMamnoon,
    Burger2,
    GoogleAuth2,
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

    cartItems(){

// if(this.title === "Mamnoon Street"){
//       return this.$store.state.storeStreet.charges.items.length;
// }

// if(this.title === "Mamnoon"){
//       return this.$store.state.storeMamnoon.charges.items.length;
// }

// if(this.title === "Mbar"){
//       return this.$store.state.storeMbar.charges.items.length;
// }

return this.$store.state.storeMamnoon.charges.items.length;

    },

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
    this.$route.name === 'finefoods' ||
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


            if(this.$store.state.storeRetail.charges.items.length > 0 || this.$store.state.storeMamnoon.charges.items.length > 0 || this.$store.state.storeMbar.charges.items.length > 0 || this.$store.state.storeStreet.charges.items.length > 0)  {
            return true
              }else{
            return false
              }
          }
      },
methods: {

goToPage(destination){

this.$router.push('/'+destination);
this.$forceUpdate();
},
    toggleDropDown(){


this.dropdown = !this.dropdown;
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



this.getUserAgent();



  }
  }

</script>


<style lang="scss">





.beta{
    border-top: 1px solid #eee;
    position: fixed;
    width: 100%;
    background: white;
    color:$nadi-red-color;
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
text-align: left;
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
color: #000000;
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

.full-width-logo.left{
    width: 100%;
    position: relative;
    text-align: left;




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




.full-width-logo.left{

    text-align: left;
    /* width: 60%; */
    width: 200px;
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
    // top: -224px;
    // top: -240px;

left:-100%;

    transition: all .5s ease;
        // height: 100vh;
                height: auto;


top: 92px;
// left: 0;
z-index: 100;
padding-top: 15px !important;
// height: 100vh;
height: 100vh;


}

.mobile-nav.expanded{
    top: 92px;
    left: 0;
    // top: 112px;
    z-index: 100;
    padding-top: 15px !important;


    // background: pink;
    height: 100vh;
        // height: auto;

}




.mobile-nav li{
    margin-bottom: 5px;
}


.nav-wrap2{
    position: absolute;
    z-index: 100;
    position: fixed;
    z-index: 100;
        z-index: 10000;
            z-index: 1000;
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
    background: transparent;
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
    background: transparent;
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
    // background: transparent;
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





.order-button2{
        display:none;
    background: white;
    color: #EE5E68;
    border: 2.5px solid #EE5E68;
    border-radius: 7px;
    width: 90px;
    float: right;
    height: 36px;
    transform: translateY(-4px);
    position: absolute;
    right: 80px;



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
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 200;
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

.red-background{
      background: #EE5E68;
}


	.st0-white-logo{fill:#FFFFFF;}




.cartContainer{
width: 35px;
height: 43px;
position: relative;
float: right;
}

.cartBackground{
width: 35px;
height: 43px;
position: absolute;
top: 0;
left: 0;
}


.cartItems{
width: 35px;
height: 43px;
position: absolute;
top: 0;
left: 0;
text-align: center;
font-weight: 600;
padding-top: 12px;
}



.st0nadiSm{
    fill:#F15D58;
}


.character-icon{
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: white;
    color: black;
    margin-top: 22px;
    line-height: 52px;
}


.dropdown3{
    background: #ffffff;
    position: absolute;
    width: 190px;
    top: 92px;
    top: 67px;
    left: -42px;



ul{
list-style-type: none;
    padding: 10px 25px;
margin-bottom: 0;

    li{
        height: 40px;
        line-height: 40px;
         a{
        color: $nadi-red-color !important;
        height: 40px;
        line-height: 40px;
        font-size: .8rem;
        font-weight: 400;
        &:hover{
         color: $nadi-red-color;
         text-decoration: underline;   
        }
    }}
}


}


.closeToggle{

position: absolute;
    left: 20px;
    right: auto;
    top: 50%;
    transform: translateY(-50%);

@media only screen and (max-width: 768px){
    position: absolute;
    right: 20px;
    left: auto;
    top: 50%;
    transform: translateY(-50%);
}





}


.newNav{
    height: 100vh;
    background: white;
    position: absolute;
    width: 100%;
    transform: translateX(-100%);
    overflow:hidden;
    ul#menu{
        margin-top: 20px;
    }

    a{
        font-size: 36px;
    }
transition: transform .25s ease;
    &.expanded{
         transform: translateX(0%);   
    }
}


.logo-box,
.menu-box{
    display: inline-block;
    float: left;
}


.menu-box{
    ul{
        margin-top: 12px !important;
        margin-left: 30px !important;
    }

    @media only screen and (max-width: 1080px){
        display:none;
    }
}
</style>





