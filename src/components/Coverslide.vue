<template>
<div class="cover">
    <div class="header">
June 23
    </div>

        <img  src="demo/attic.jpg"/>
    <div class="bottom-button">
   
  info
<div id="Tock_widget_container" data-tock-display-mode="Button" data-tock-color-mode="Blue" data-tock-locale="en-us" data-tock-timezone="America/Los_Angeles"></div>
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
.header,
.bottom-button{
width: 100%;
height: 100px;
background: #f05d5b;
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