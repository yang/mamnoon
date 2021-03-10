<template>
  <div class="mamnoon">
    <Nav />

<div>


 




<div class="container pad ff">


<div class="row">


<div class="col-md-12 mb20">
  <h1>Mamnoon Fine Foods</h1>
</div>

</div>


<div class="row">


<div class="col-md-4 mb20"><img style="width: 100%;" :src="ffdata.header_image"></div>
<div class="col-md-8 mb20" v-html="ffdata.body_text">
</div>
</div>



<template v-for="item in ffdata.fine_foods">




<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" :src="item.shop_item.image.sizes.medium_large">
</div>
<div class="col-md-8 mb20">
<h2>{{item.shop_item.name}}</h2>
<h3>{{item.shop_item.ingredients}}</h3>
<p>
{{item.shop_item.description}}
</p>
</div>
</div>







</template>




<div class="row">
<div class="col-md-8 mb20">
<h2>{{ffdata.locations_sub_header}}</h2>





<p class="list-of-links">
<template v-for="link in ffdata.locations_link_repeater">
{{link.name}} - <a :href="link.url" target="_blank">{{link.url}}</a><br />
</template>
</p>
</div>
</div>



<div class="row pad-sm" v-if="ffdata.bottom_images">
<template v-for="image in ffdata.bottom_images">
<div class="col-md-4 mb20">
  <img style="width: 100%;" :src="image.image">
</div>
</template>

</div>






</div>

    <!-- <img style="width: 100%;" src="@/assets/img/mamnoonFF_NADI_2-01.png"> -->
</div>
  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import UpserveOlo from "@/components/UpserveOlo";
import Nav from "@/components/Nav";
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
    Nav
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
    /* padding-top: 120px; */
    /* padding-top: 92px; */
padding-top: 112px;
    padding-top: 132px;
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



</style>