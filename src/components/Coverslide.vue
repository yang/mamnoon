<template>
<div class="cover">


    <div class="bottom-button">
   
 <div class="tock-widget" style="">

      <div id="Tock_widget_container" data-tock-display-mode="Button" data-tock-color-mode="White" data-tock-locale="en-us" data-tock-timezone="America/Los_Angeles" class="no-touch"><div class="TockWidgetWrapper"><div class="TockButtonWidgetContainer"><div class="TockButton-buttonContainer"><div data-tock-reserve="true" class="TockButton-link"><div class="TockButton TockButton-white"><span class="TockWidget-B2">Book now</span></div></div></div><div class="TockLogo-container TockButton-iconWhite"><div class="TockLogo-rowContainer"><div class="TockButton-labelWhite"></div></div></div></div></div></div>
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