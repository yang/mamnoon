<template>
  <div>


<div>


<VirtualRestaurantTemplate />

</div>
  <!-- {{$store.state.currentUserEmail}} -->


  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";



import GlobalFooter from "@/components/GlobalFooter";
import Borderline from "@/components/svgIcons/Borderline";




import MapPin from "@/components/svgIcons/MapPin"
import Clock from "@/components/svgIcons/Clock"
import Phone from "@/components/svgIcons/Phone"
import MbarLogo from "@/components/svgIcons/MbarLogo"
import AnarLogo from "@/components/svgIcons/AnarLogo"
import StreetLogo from "@/components/svgIcons/StreetLogo"
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo"


import VirtualRestaurantTemplate from "@/components/VirtualRestaurantTemplate"




export default {
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: `our restaurant`,
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama',
        meta: [
              { vmid: 'description', name: 'description', content: 'barbar' }
              ]
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
    VirtualRestaurantTemplate,
    Nav3,
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
        height: 750px;
    border-radius: 10px;
  .imgBox{
    width: 100%;
    height:300px;
    background-size: cover;
background-position: center center;
    border-radius: 10px 10px 0 0;
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
    margin: 23px 24px 0 0;
    
    text-align: center;
    padding: 5px 8px 5px;
        padding: 1px 20px 3px;
    font-size: 16px;
    font-weight: 500;
    background: #F15D58;
    color: white;

        font-size: 22px;
    font-weight: 500;

    &:hover{
         color: #fff;
     background: black;
     text-decoration: none;
    }

}

.right-icon-text{

      padding-left: 50px;
    position: relative;
    min-height: 50px;

    span{
      position: absolute;
    top: 50%;
    transform: translateY(-44%);
    }
  svg{
    width: 20px;
    position: initial;
    margin-right: 10px;
    position: absolute;
    height: 100%;
    // background: pink;
    left: 10px;
  }
}




</style>