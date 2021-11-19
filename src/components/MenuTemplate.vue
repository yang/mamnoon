<template>
<div>
<Nav2 />


<div id="menus" class="container pt180">
<h1>{{this.$route.params.id}} menu</h1>
categories: <pre>{{categories}}</pre>
menus: <pre>{{menus}}</pre>
<!--
<template v-if="$route.params.id == 'mamnoon'">

<div v-html="menuArray[0].innerHTML">
</div>

<div v-html="menuArray[1].innerHTML">
</div>

<div v-html="menuArray[2].innerHTML">
</div>

<div v-html="menuArray[3].innerHTML">
</div>

<div v-html="menuArray[4].innerHTML">
</div>

</template>



<template v-if="$route.params.id == 'mbar'">

<div v-html="menuArray[5].innerHTML">
</div>


</template>-->

</div>


</div>
</template>

<script>  

import Nav2 from "@/components/Nav2";

export default{
    components:{
Nav2
    },
    data(){
        return {

     categories: [],
     menus: []

        }
    },
    mounted(){
        // this.showMenus()
             this.showMenus2()
             this.showCategories()


for(let i in this.$store.state.pageData[0].restaurant_repeater){

    if(this.$route.params.id.replace(' ','') === this.$store.state.pageData[0].restaurant_repeater[i].name.replace(' ','')){
 this.showMenus2(this.$route.params.id.replace(' ',''))
this.showCategories(this.$route.params.id.replace(' ',''))


    }
}


    },
    methods:{

        async showMenus2(restName){
      let responseUpserve = await this.$http.get(`/product/menu${restName}`);
//    console.log(responseUpserve);
this.menus = responseUpserve.data.body.objects;
    },
            async showCategories(restName){
  
      let responseUpserve = await this.$http.get(`/product/menu${restName}categories`);
   console.log(responseUpserve);
this.categories = responseUpserve.data.body.objects;



    },

        }
    
}



</script>


<style lang="scss">

.imp-description.xhcd-9kimp-description{
    // color: green !important;
}
</style>