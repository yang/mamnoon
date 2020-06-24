<template>
<div class="cover">
    <div class="header">
June 23
    </div>

        <img  src="demo/attic.jpg"/>
    <div class="bottom-button">
            <a href="https://www.exploretock.com/mamnoonrestaurant/" target="_blank"><OrderStar/></a>
    </div>
    </div>
</template>




<script>  

import OrderStar from '@/components/svgIcons/OrderStar.vue'
export default{
name: 'coverslide',
components: {
    OrderStar
}
}

</script>

<style lang="scss">
.header{
width: 100%;
height: 100px;
background: #f05d5b;
color: yellow;
text-align: center;
}


.bottom-button{
        background: #FFF367;
}


.bottom-button{
width: 100%;
height: 100px;
  background: #FFF367;
color: yellow;
text-align: center;
}


.widgethover{
background: #2e22e8;width: 100px;height: 100px;

&:hover{
    background: pink;
}
}


</style>