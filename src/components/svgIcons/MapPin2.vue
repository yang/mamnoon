<template>

<div class="mapPin">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 33 42" style="enable-background:new 0 0 33 42;margin-bottom: 10px;" xml:space="preserve" :width="this.width ? this.width :'20px'">

<path :fill="color" d="M16.4,0C7.4,0,0,7.4,0,16.4c0,3.7,1.2,7.1,3.3,9.8l0,0L16.1,42l12.1-14c2.9-3,4.7-7,4.7-11.5
	C32.9,7.4,25.5,0,16.4,0z M22.6,19.2v3.4h-3.4l-2.8,2.8l-2.8-2.8H10v-3.7l-2.4-2.4L10,14v-4h4l2.4-2.4l2.4,2.4h3.7v3.7l2.8,2.8
	L22.6,19.2z"/>
</svg>


</div>
</template>


<script>
export default{
  props: ['color', 'width']
}

</script>


<style lang="scss">

.mapPin{
   @media only screen and (max-width: 768px) {
	display: inline-block;
	margin-right: 10px;
    }
}


</style>




