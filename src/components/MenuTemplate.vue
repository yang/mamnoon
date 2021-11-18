<template>
<div>
<Nav2 />


<div id="menus" class="container pt180">
<h1>{{this.$route.params.id}} menu</h1>

<template v-if="$route.params.id == 'mamnoon'">

<div v-html="menuArray[0].innerHTML">
</div>

<div v-html="menuArray[1].innerHTML">
</div>

</template>



<template v-if="$route.params.id == 'mbar'">

<div v-html="menuArray[2].innerHTML">
</div>


</template>

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
     menuArray: []
        }
    },
    mounted(){
        this.showMenus()
    },
    methods:{
        showMenus(){
        this.menuArray = document.getElementsByClassName('imp-wrapper-match2')

console.log(this.menuArray);
// for(let i = 0;i<menus.length;i++){
//     console.log(menus[i])
// }

// this.menuArray = menus;




        }
    }
}



</script>


<style lang="scss">

.imp-description.xhcd-9kimp-description{
    // color: green !important;
}
</style>