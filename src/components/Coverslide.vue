<template>
<div class="cover">
    <div class="header">
June 23
    </div>

        <img  src="demo/attic.jpg"/>
    <div class="bottom-button">
   
   <div class="tock-widget" style="position: absolute;right: 0;top: 50%;transform: translateY(-50%);">

      <div id="Tock_widget_container" data-tock-display-mode="Button" data-tock-color-mode="White" data-tock-locale="en-us" data-tock-timezone="America/Los_Angeles" class="no-touch"><div class="TockWidgetWrapper"><div class="TockButtonWidgetContainer"><div class="TockButton-buttonContainer"><div data-tock-reserve="true" class="TockButton-link"><div class="TockButton TockButton-white"><span class="TockWidget-B2">Book now</span></div></div></div><div class="TockLogo-container TockButton-iconWhite"><div class="TockLogo-rowContainer"><svg width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 20a9.92 9.92 0 0 0 5.989-2.001L12.9 14.894a5.657 5.657 0 0 1-2.9.798c-3.152 0-5.715-2.577-5.715-5.744A5.75 5.75 0 0 1 8.57 4.386V0C3.726.697 0 4.884 0 9.948 0 15.5 4.477 20 10 20zM18.01 15.968A10.04 10.04 0 0 0 20 9.948C20 4.884 16.274.697 11.43 0v4.386a5.75 5.75 0 0 1 3.492 8.477l3.088 3.105z" fill="currentColor"></path></svg><div class="TockButton-labelWhite"><span class="TockWidget-C1">Powered by Tock</span></div></div></div></div></div></div>
    </div>
   
   
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


</style>