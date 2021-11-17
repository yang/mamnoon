<template>
  <div class="restaurants">
    <Nav2 />

<div>

<div class="container">

<div class="row text-center">
<h1 class="subpage-header white-text text-center mb60">a mama restaurant for every occasion.</h1>

</div>
</div>

<div class="container pb100">


<div class="row">

<template v-for="restaurant in this.$store.state.pageData[0].restaurant_repeater">





<div class="col-md-6">

<div class="restaurantBox">

<div class="imgBox" :style="{'background-image': `url(${restaurant.background_image.sizes.medium_large})`}">


.

</div>
<div class="restaurantContent">


<div class="restaurantName">
<template v-if="restaurant.name === 'mbar'">
<MbarLogo :height="90" :marginLeft="6"/>
</template>
<template v-else-if="restaurant.name === 'mamnoon street'">


<StreetLogo :height="90" :marginLeft="6"/>
</template>
<template v-else-if="restaurant.name === 'mamnoon'">
<MamnoonLogo :height="90" :marginLeft="6"/>
</template>
<template v-else-if="restaurant.name === 'anar'">

<AnarLogo :height="90" :marginLeft="6"/>
</template>
<template v-else>
{{restaurant.name}}
</template>
</div>

<div class="infoIconLine2 top"><div class="leftIcon">




<MapPin style="position: initial;margin-right: 10px;" class="mr6 centeredSvg" />

</div><div class="rightIcon">



<template v-for="address in restaurant.address">

<template v-for="line in address">

<a :href="line.line_group.url" target="_blank" class="linkBlack">{{line.line_group.text}}</a><br>


</template>
</template>






</div></div>


<div class="infoIconLine2"><div class="leftIcon">


<Clock :color="'black'" style="position: initial;margin-right: 10px;" class="mr6 centeredSvg" />




</div><div class="rightIcon"><span>

<template v-for="hour in restaurant.hours">
<template v-for="line in hour">
{{line.line}}<br>
</template>
</template>




</span></div></div>



<div class="infoIconLine2"><div class="leftIcon">

<Phone class="mr6 centeredSvg" style="position: initial;width: 20px;margin-right: 10px;" />
</div><div class="rightIcon"><a :href="`tel:+1${restaurant.phone_number.replace(/[^0-9.]/g, '')}`" target="_blank" class="linkBlack">{{restaurant.phone_number}}</a></div></div>

















<div style="">


<template v-for="link in restaurant.tile_list_links">

<div class="listLinks">
<a class="listLink" :href="link.link">{{link.title}} &#x203A;</a>

</div>
</template>



<div class="bottomLinks">
<template v-for="link in restaurant.tile_bottom_buttons">


<a class="bottomButton" :href="link.link">{{link.title}}</a>


</template>
</div>
</div>


</div>




<!--<pre>
{{restaurant}}

</pre>-->
</div>
</div>

</template>


</div>

</div>
 




    <!-- <img style="width: 100%;" src="@/assets/img/mamnoonFF_NADI_2-01.png"> -->
</div>
  <!-- {{$store.state.currentUserEmail}} -->

  <GlobalFooter />
  </div>
</template>
<script>
import Nav2 from "@/components/Nav2";



import GlobalFooter from "@/components/GlobalFooter";
import Borderline from "@/components/svgIcons/Borderline";




import MapPin from "@/components/svgIcons/MapPin"
import Clock from "@/components/svgIcons/Clock"
import Phone from "@/components/svgIcons/Phone"
import MbarLogo from "@/components/svgIcons/MbarLogo"
import AnarLogo from "@/components/svgIcons/AnarLogo"
import StreetLogo from "@/components/svgIcons/StreetLogo"
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo"


export default {
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'our restaurants',
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
    GlobalFooter, 
    Borderline,
    MamnoonLogo,
    StreetLogo,
    AnarLogo,
    MbarLogo,
    MapPin,
    Clock,
    Phone
  },
  methods:{
      async individualRestaurant(){
   
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields

    for(var item in AcfBlock.data.acf.content_fields){
      // console.log(item)

      // console.log(AcfBlock.data.acf.content_fields[item].acf_fc_layout)

      let acf = AcfBlock.data.acf.content_fields
      if(acf[item].acf_fc_layout === 'fine foods'){
        this.ffdata = acf[item]
      }

    }


   await this.getB() 

},
getB(){
  console.log('done');

// window.scrollTop(0,100);
console.log(document);


}
  },

  mounted(){
    this.individualRestaurant()








  }
};











</script>

<style lang="scss">
.restaurants{
  background-color: #F15D58;
  padding-top: 132px;
  // padding-bottom: 100px;
}

@media only screen and (max-width: 992px) {
  .restaurants{
    padding-top: 112px;
}

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
    height: 800px;
  .imgBox{
    width: 100%;
    height:300px;
    background-size: cover;
background-position: center center;
  }


}


.restaurantContent{
  padding: 20px 20px 20px;
}

.restaurantName{
  display: block;
  // height: 100px;
  
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



.infoIconLine2{

 
width: 100%;
margin: 6px 0;
display: inline-block;

 &.top{
    margin-top: 0;
  }
}

.listLinks{
  padding-left: 10px;
}


.listLink{
  display: block;
  color: black;
  font-weight: 500;

&:hover{
  color: black;
}


}

.bottomLinks{
  padding-left: 10px;
}

.bottomButton{    display: inline-block;
    border-radius: 5px;
    // width: 100%;
    margin: 23px 10px 0 0;
    text-align: center;
    padding: 5px 8px 5px;
    font-size: 16px;
    font-weight: 500;
    background: #F15D58;
    color: white;
    &:hover{
         color: #fff;
     background: black;
     text-decoration: none;
    }

}






</style>