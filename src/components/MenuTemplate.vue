<template>
<div>
<Nav2 />


<div id="menus" class="container pt180">
<h1>{{this.$route.params.id}} menu</h1>



<div class="category" @click="filterCategories(category.id)">all</div>
<template v-for="category in categories">
<div class="category" @click="filterCategories(category.id)">{{category.name}}</div>
</template>



<template v-for="item in menus">

<div v-if="currentCategory === ''">

{{item.name}}<br>
{{item.price}}<br>
{{item.description}}<br>
</div>


<div v-if="item.category_id === currentCategory">

{{item.name}}<br>
{{item.price}}<br>
{{item.description}}<br>
</div>
</template>

<br>
<!--menus: <pre>{{menus}}</pre>-->


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
currentCategory: '',
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
        filterCategories(id){
            this.currentCategory = id
        },
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


.category{
    cursor: pointer;
    font-weight: bold;
        display: inline-block;
        margin: 10px;
    &:hover{
        color: red;
    }
}
</style>