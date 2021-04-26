<template>
  <div class="mamnoon">
    <Nav />

<div>


 




<div v-if="ffdata" class="container pad ff">

<div class="row lower-margin">





<div class="col-md-8 offset-md-2 about">


<h1>mama</h1>

<p>“spread the love, spread the levant”</p>
 
<p>mama creates and enriches relationships with people from a broad spectrum of backgrounds through hospitality, beverage and food experiences rooted in refined Levantine traditions, crafted for modern healthy, compassionate and progressive communities.</p>

<h1>mbar</h1>
<span><a href="http://mbarseattle.com" target="_blank">mbarseattle.com</a></span>
<p>mbar fuses the best indoor & outdoor setting with the ultimate highly social evolution of Levantine hospitality, superlative cuisine and beverage experiences to create and enrich relationships with people from a broad spectrum of backgrounds in all seasons and weather.  mbar represents a viable modern alternative to traditional high-end fine dining by allowing guests to reach the heights of experience they wish without compunction – while sharing the space with others charting their own path in a common setting.</p>

<h1>mamnoon</h1>
<span><a href="http://mamnoonrestaurant.com" target="_blank">mamnoonrestaurant.com</a></span>
<p>mamnoon creates and enriches relationships with people from a broad spectrum of backgrounds through exemplary hospitality, beverage and food experiences rooted in refined Levantine traditions with an emphasis on creating shared social experiences through authenticity and intelligent evolution of Levantine and Persian cuisines.</p>

<h1>mamnoon street</h1>
<span><a href="http://mamnoonstreet.com" target="_blank">mamnoonstreet.com</a></span>
<p>mamnoon street brings the full spectrum of popular Levantine street foods to people from a broad spectrum of backgrounds through delicious,  fast, bespoke and high energy food and beverage experiences adapted to modern diverse urban settings.</p>



<h1>anar</h1>
<span><a href="https://anar.life/" target="_blank">anar.life</a></span>
<p>anar creates and enriches relationships with people who are seeking fast, beautiful & delicious,bites snacks and meals through spaces that escape the hustle of modern life without compromising health or moral food values.  anar instances the future of food by following time tested and proven traditions in Levantine and Persian cuisines while observing modern evidence-based research without compromising on flavor or warmth/intimacy of the experience.</p>
</div>

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
import AboutAlt from "@/components/AboutAlt";
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
    Borderline,
    AboutAlt
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


.about{
  h1{
        // display: inline;
  color: #F05D5B;
  text-align: left;
  margin: 30px 10px 0px auto; 
  }

  p{
    margin-top: 10px;
  }
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