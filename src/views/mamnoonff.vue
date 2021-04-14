<template>
  <div class="mamnoon">
    <Nav />

<div>


 




<div v-if="ffdata" class="container pad ff">

<div class="row lower-margin" v-if="ffdata">


<div class="col-md-4 mb20 offset-md-2"><img style="width: 100%;" :src="ffdata.header_image"></div>
<div class="col-md-4 mb20 pt20" v-html="ffdata.body_text">
</div>
</div>






<template v-for="item in ffdata.fine_foods">




<div class="row">
<div class="col-md-8 offset-md-2 overflow-x-hidden">
 
 
 <div class="border-red">
 

<div class="col-l">

  <img style="width: 100%;" :src="item.shop_item.image.sizes.medium_large">

</div>


<div class="col-r">
  <div>  
<h2>{{item.shop_item.name}}</h2>
<h3>{{item.shop_item.ingredients}}</h3>
<p>
{{item.shop_item.description}}
</p>
</div>
</div>


</div>

</div>

</div>







</template>














<div class="row">
<div class="mb20 col-md-8 offset-md-2 overflow-x-hidden">
<Borderline />
<h2>{{ffdata.locations_sub_header}}</h2>




<p class="list-of-links">
<template v-for="link in ffdata.locations_link_repeater">
{{link.name}} - <a :href="link.url" target="_blank">{{link.url}}</a><br />
</template>
</p>
<Borderline />
</div>
</div>



<div class="row pad-sm" v-if="ffdata.bottom_images">
<div class="mb20 col-md-8 offset-md-2">


<template v-for="image in ffdata.bottom_images">
<!-- <div class="col-md-4 mb20"> -->
  <div class="inblock-red" :style="{ backgroundImage: 'url(' + image.image + ')' }">
    _

    </div>
<!-- </div> -->
</template>
</div>
</div>






</div>

    <!-- <img style="width: 100%;" src="@/assets/img/mamnoonFF_NADI_2-01.png"> -->
</div>
  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import Borderline from "@/components/svgIcons/Borderline";


export default {
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Fine Foods',
      // all titles will be injected into this template
      titleTemplate: '%s | Nadi Mama'
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
    Nav,
    Borderline
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




}
  },
  mounted(){
    this.individualRestaurant()
  }
};











</script>

<style lang="scss">
.mamnoon{
  padding-top: 132px;
}

@media only screen and (max-width: 992px) {
  .mamnoon{
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

</style>