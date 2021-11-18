<template>

<div class="container">
<div class="row">
<div v-html="menu"></div>
</div></div>
</template>

<script>  


export default{
    data(){
        return {
     menu: ''
        }
    },
    mounted(){
        this.showMenus()
    },
    methods:{
        showMenus(){
let menu = document.getElementsByClassName('imp-wrapper-match2')
console.log(menu[0].innerHTML);
this.menu = menu[0].innerHTML;
        }
    }
}



</script>