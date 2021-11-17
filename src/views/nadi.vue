<template>
  <div class="nadi">
  <Nav2 />







                      <section class="topSection fh" v-bind:style="{ 'display': 'none', 'text-align':'center', 'background-position': 'center', 'position': 'relative' }">
                        <!--<div class="container mobilePage pt132">-->
  




<div class="container">

<div class="row text-center">
<h1 class="subpage-header white-text mb60 text-left">
welcome to nadi mama: the online home for the mama family of restaurants</h1>


https://mamnoontogo.net/wp-content/uploads/2021/10/smaller-v1.mp4

</div>


<div class="row text-center">



    <MbarLogo :fill="'white'" />
  <AnarLogo :fill="'white'" />
 <StreetLogo :fill="'white'" />
<MamnoonLogo :fill="'white'" />



</div>
</div>













                      <!--<br>-->
                       <!-- </div>-->
                      </section>
<VideoComponent2 :src="'https://mamnoontogo.net/wp-content/uploads/2021/10/smaller-v1.mp4'" />

         <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/11/123.jpeg' + ')',
 'background-position': 'center', 'position': 'relative', 'height': '90vh', 'background-size': 'cover'}">
                        <!--<div class="container mobilePage pt132">-->
  



<div class="bottomAttach black secPadMedAlt">
<div class="container">

<div class="row text-center">

</div>

<div class="block">
<div class="blockHeader">
thanksgiving mezze packs
</div>
<div class="blockDescription">
you handle the turkey, we'll take care of the rest!
</div>

<a class="blockButton" href="https://www.exploretock.com/mamnoonrestaurant?tock_source=tock&tock_medium=search_nav" target="_blank">order now</a>
</div>


</div>







</div>




                      <!--<br>-->
                       <!-- </div>-->
                      </section>



         <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/11/mamnoon_ALL_WEB_1_.jpg' + ')',
 'background-position': 'center', 'position': 'relative', 'height': '90vh', 'background-size': 'cover'}">
                        <!--<div class="container mobilePage pt132">-->
  



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



         <section class="topSection fh" v-bind:style="{ 'text-align':'center', 'background-image': 'url(' + 'http://mamnoontogo.net/wp-content/uploads/2021/11/Anar_Summer_Shoot66-scaled.jpg' + ')',
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
import Nav2 from "@/components/Nav2";

import VideoComponent2 from "@/components/VideoComponent2";


import MbarLogo from "@/components/svgIcons/MbarLogo"
import AnarLogo from "@/components/svgIcons/AnarLogo"
import StreetLogo from "@/components/svgIcons/StreetLogo"
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo"


import GlobalFooter from "@/components/GlobalFooter"

// import NewTemplate from "@/components/NewTemplate";



export default {
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'fine foods',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  props: ['data'],
  data(){
return {
user: null,
pageData: null,
ffdata: null
}
  },
  components: {
    Nav2,
    VideoComponent2,
    MbarLogo,
    AnarLogo,
    StreetLogo,
    MamnoonLogo,
    GlobalFooter

  },
  methods:{

  },

  mounted(){









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
  &.black{
    background: black; 
    background: #F15D58;
  }
}



.block{
text-align: left;
width: 300px;
color: white;
&.whitebg{


  background: white;
    padding: 22px 26px 28px;
  color: black;
  border-radius: 5px;
}

.blockHeader{
font-size: 24px;

font-weight:bold;
}
.blockDescription{
font-size: 16px;

font-weight:medium;
margin-bottom: 26px;
}
a.blockButton{

color: #F15D58;
background: white;


&.inverse{
  background: #F15D58;
color: white;
font-size: 18px;

&:hover{
  color: #F15D58;
background: white;
}
}

    display: block;
    border-radius: 5px;
    width: 100%;
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
  padding: 32px 0 38px;
}

</style>