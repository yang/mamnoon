<template>
  <div class="nadi">
  <Nav3 />





                               <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/11/MStreet-Environment-9131-scaled.jpg' + ')',
 'background-position': 'center', 'position': 'relative', 'height': '100vh', 'background-size': 'cover'}">
                        <!--<div class="container mobilePage pt132">-->
  



<div class="bottomAttach header black secPadMedAlt">
<img src="http://mamnoontogo.net/wp-content/uploads/2021/11/MStreet-Environment-9131-scaled.jpg" class="responsiveBannerImage">
                      <div class="container" style="position: relative;">

                                            <div class="row text-center">

                                            <div class="col-12 offset-0">
                                                <h1 class="subpage-header white-text mt0 text-left">
                                                    welcome to nadi mama: the online home for the mama family of restaurants.
                                                    </h1>



                                                    
                                                </div>
                                            </div>

                                    <div class="row text-center" >
                                        <div style="width: 100%">
                                            <router-link :to="'mamnoon'"> <MamnoonLogo :height="70" :marginLeft="0" :marginRight="20" :fill="'white'" />     </router-link>     
                                            <router-link :to="'mbar'"><MbarLogo :height="70" :marginLeft="20" :marginRight="20" :fill="'white'" /> </router-link>
                                            <router-link :to="'mamnoonstreet'"><StreetLogo :height="70" :marginLeft="20" :marginRight="20" :fill="'white'" /> </router-link>
                                            <router-link :to="'anar'"><AnarLogo :height="70" :marginLeft="20" :marginRight="0" :fill="'white'" />
                                            </router-link>
                                        </div>
                           

                                    </div>
       <div @click="scrollDown">
                                    <DownArrow />
                                  </div>  
                                </div>








</div>




                      <!--<br>-->
                       <!-- </div>-->
                      </section>






      <section class="topSection fh popup-background" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/12/mamnoon_la_dive_SQUARE.png' + ')'}">
                        <!--<div class="container mobilePage pt132">-->
  






<div class="bottomAttach black secPadMedAlt">
<div class="container">

<div class="row text-center">

</div>

<div class="block">
<div class="blockHeader">
pop-up at la dive!
</div>
<div class="blockDescription">
One day only! 721 e pike st, sunday december 12th noon to 4pm
</div>

<a class="blockButton" href="https://www.exploretock.com/mamnoonrestaurant?tock_source=tock&tock_medium=search_nav" target="_blank">order now</a>
</div>


</div>







</div>




                      <!--<br>-->
                       <!-- </div>-->
                      </section>

<!--<VideoComponent2 :src="'https://mamnoontogo.net/wp-content/uploads/2021/10/smaller-v1.mp4'" />-->


         <section class="topSection fh popup-background2" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/12/mamnoon_xmas_INVERT.jpg' + ')'}">
                        <!--<div class="container mobilePage pt132">-->
  






<div class="bottomAttach black secPadMedAlt">
<div class="container">

<div class="row text-center">

</div>

<div class="block">
<div class="blockHeader">
celebrate your holiday mamnoon style!
</div>
<div class="blockDescription">
<!-- One day only! 721 e pike st, sunday december 12th noon to 4pm -->
</div>

<a class="blockButton" href="https://www.exploretock.com/mamnoonrestaurant/" target="_blank">order now</a>
</div>


</div>







</div>




                      <!--<br>-->
                       <!-- </div>-->
                      </section>







   



         <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/11/mamnoon_ff_NOV_21_9.jpg' + ')',
 'background-position': 'center', 'position': 'relative', 'height': '90vh', 'background-size': 'cover','background-size': '80%',
    'background-repeat': 'no-repeat',
    'background-color': '#000'}">


<div class="bottomAttach secPadMedAlt">
<div class="container">

<div class="row text-center">

</div>

<div class="block whitebg">
<div class="blockHeader">
mamnoon fine foods
</div>
<div class="blockDescription">
available in fine retailers across the puget sound
</div>

<a class="blockButton inverse" href="anar">explore our products</a>
</div>


</div>







</div>











                      <!--<br>-->
                       <!-- </div>-->
                      </section>



         <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/11/Anar-Case-8406-scaled.jpg' + ')',
 'background-position': 'center', 'position': 'relative', 'height': '90vh', 'background-size': 'cover'}">
                        <!--<div class="container mobilePage pt132">-->
  



<div class="bottomAttach black secPadMedAlt">
<div class="container">

<div class="row text-center">

</div>

<div class="block">
<div class="blockHeader">
Anar is back
</div>
<div class="blockDescription">
check it out
now open monday-friday for lunch
</div>

<a class="blockButton" href="anar">order now</a>
</div>


</div>







</div>











                      <!--<br>-->
                       <!-- </div>-->
                      </section>

<GlobalFooter />
  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";

import VideoComponent2 from "@/components/VideoComponent2";


import MbarLogo from "@/components/svgIcons/MbarLogo"
import AnarLogo from "@/components/svgIcons/AnarLogo"
import StreetLogo from "@/components/svgIcons/StreetLogo"
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo"
import DownArrow from "@/components/svgIcons/DownArrow"

import GlobalFooter from "@/components/GlobalFooter"




export default {
    metaInfo() {
        return {
            title: `nadi mama`,
            meta: [
                { name: 'description', content: `welcome to nadi mama: the online home for the mama family of restaurants | levantine cuisine in seattle`},
                { property: 'og:title', content: `nadi mama`},
                { property: 'og:site_name', content: 'nadi mama'},
                { property: 'og:description', content: `welcome to nadi mama: the online home for the mama family of restaurants | levantine cuisine in seattle`},
                {property: 'og:url', content: 'https://nadimama.com/'},
                // {property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }    
            ]
        }},







  props: ['data'],
  data(){
return {
user: null,
pageData: null,
ffdata: null,
loaded: false
}
  },
  components: {
    DownArrow,
    Nav3,
    VideoComponent2,
    MbarLogo,
    AnarLogo,
    StreetLogo,
    MamnoonLogo,
    GlobalFooter

  },
  methods:{
    scrollDown(){

window.scrollTo(0, this.$el.clientHeight);
// console.log(pageHeight);
    }
  },

  mounted(){



   window.addEventListener('load', () => {
         // run after everything is in-place

this.loaded = true;

    })





  }
};











</script>

<style lang="scss">
.nadi{
  background-color: #F15D58;
  // padding-top: 132px;
  // padding-bottom: 100px;
}



h1{
 color: #F05D5B;
 text-align: center;
 margin: 30px auto;
}


.pad{
    padding-top: 50px;
    padding-bottom: 50px;
}


.pad-sm{
    padding-top: 25px;
    padding-bottom: 25px;
}

.mb20{
  margin-bottom: 20px;
}


.ff{
  h2{
color: #F05D5B;
  }

  h3{
font-style: italic;
font-size: 1em;
font-weight: bold;
  }

  p{

  }

  a{
    color: #F05D5B;
    text-decoration: underline;
  }
}



   @media only screen and (max-width: 992px) {

     .ff{
       padding-top: 0;
     }


.list-of-links{
  margin-top: 40px;
  a{
    display: block;
  }
}


   }



.ff h2{
  text-transform: lowercase;
  margin-bottom: 24px;
  font-size: 36px;
}



p.list-of-links{
font-size: 20px;
font-weight: bold;
line-height: 2;
a{
  font-style: italic;
}
}



.border-left{
border: 4px solid #F05D5B;
box-sizing: border-box;
padding: 0;
border-right: 0;
}
.border-right{
border: 4px solid #F05D5B;
box-sizing: border-box;
border-left: 0;
}



.border-red{
    border: 5px solid #F05D5B;
    margin-bottom: 50px;
    display: inline-block;
  .col-l {
    width: 50%;
    display: block;
    float: left;
  }
  .col-r {
    width: 50%;
    display: block;
    float: left;

div{
  padding: 40px;
} 
  }

}

.lower-margin{
  margin-bottom: 60px;
}


.pt20{
  padding-top: 20px;
}


.inblock-red{
border: 5px solid #F05D5B;
display: inline-block;
// width: 50%;
float: left;
color: transparent;
background-size: cover;
background-position: center center;

 width: 50%;
    padding-bottom: 50%;

&:first-child{
 border-right: 0px;

}

}







   @media only screen and (max-width: 1220px) {

.border-red{
  .col-r {
    div{
    padding: 10px 20px;
  } 
}
}



}

   @media only screen and (max-width: 992px) {


.border-red{
  border: 4px solid #F05D5B;
  margin-bottom: 50px;
  .col-l {
width: 100%;
display: inline-block;
  }
  .col-r {
width: 100%;
display: inline-block;

div{
  padding: 40px;
} 
  }

}

.ff{
  padding-top:20px;
}

   }




.overflow-x-hidden{
  overflow-x: hidden;
}



.restaurantBox{
  background: white;
margin-bottom: 50px;
    height: 680px;
  .imgBox{
    width: 100%;
    height:300px;
    background-size: cover;
background-position: center center;
  }


}


.restaurantContent{
  padding: 40px 20px 20px;
}

.restaurantName{
  display: block;
  height: 100px;
  
}


.mb60{
  margin-bottom: 60px;
}


.subpage-header{
  font-size: 32px;
  line-height: 46px;

     @media only screen and (max-width: 992px) {
font-size: 18px;
line-height: 24px;
     }

      @media only screen and (max-width: 640px) {
margin-bottom: 10px !important;

margin-top: 10px !important;
      
    }




    line-height: 46px;
    width: 840px;
    font-size: 23.9px;
    margin: 0 auto 20px auto;

     @media only screen and (max-width: 992px) {
width: 100%
     }
  }


.pb100{
  padding-bottom: 100px;
}


.mb100{
  margin-bottom: 100px;
}
.mb120{
  margin-bottom: 120px;
}
.mt0{
margin-top: 0;
}

.infoIconLine2{
width: 100%;
margin: 6px 0;
display: inline-block;
}



.text-left{
  text-align: left;
}



.bottomAttach{
  position: absolute;
  bottom: 0;
  width: 100%;
     background: black; 
  &.black{
    background: black; 
    background: #F15D58;
  }



&.header{
      @media only screen and (max-width: 640px) {


height: calc(100vh - 92px);
padding-top: 0 !important;
      
    }
}
}


.block{
text-align: left;
width: 400px;
color: white;
&.whitebg{

    width: min-content;
  background: white;
    padding: 21px 21px 26px;
  color: black;
  border-radius: 5px;

  .blockHeader{
    color: #F15D58;
    margin-bottom: 10px;
  }


.blockButton{
      padding: 5px 10px 7px;
}


}

.blockHeader{
font-size: 24px;

font-weight:bold;
}
.blockDescription{
font-size: 16px;

font-weight:medium;
margin-bottom: 26px;
    margin-bottom: 20px;
        margin-bottom: 50px;

}
a.blockButton{

color: #F15D58;
background: white;


&.inverse{
  background: #F15D58;
color: white;
font-size: 18px;

&:hover{
  color: #FFFFFF;
background: black;
}
}

    display: block;
    border-radius: 5px;
    width: 100%;
    width: 300px;
    margin: 0 0;
    text-align: center;
    padding: 3px 10px 5px;
    font-size: 22px;
    font-weight: 500;
cursor:pointer;
    &:hover{
background: black;
color: white;
text-decoration: none;
    }

}



    @media only screen and (max-width: 640px) {


width: 100%;
      
    }


}


.secPadMedAlt{
  // padding: 32px 0 38px;
    padding: 32px 0 78px;

    padding: 28px 0 40px; 
}



.responsiveBannerImage{
  display:none;
   @media only screen and (max-width: 640px) {
// margin-top:92px;
display:block;
width: 100%;
      
    }
}





  

.popup-background{

 background-position: top center;
 position: relative; 
 height: 90vh; 
 background-size: cover;
 background-size: 30%;
 background-color: rgb(0, 0, 0);
 background-repeat: 'no-repeat'





}

   @media only screen and (max-width: 992px) {
     .popup-background{
 background-position:top center;
 background-size: 70%;      
     }
    }




    .popup-background2{

 background-position: center center;
 position: relative; 
 height: 90vh; 
 background-size: cover;
 background-size: 30%;
 background-color: rgb(0, 0, 0);
 background-repeat: 'no-repeat'





}

   @media only screen and (max-width: 992px) {
     .popup-background2{
 background-position:top center;
 background-size: 70%;      
     }
    }



</style>