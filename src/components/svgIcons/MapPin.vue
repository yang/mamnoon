<template>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  :style="{'width': this.width ? this.width :'20px'}">>
  <title>
    map pin
  </title>
  <path :fill="color" d="M10 0a7.65 7.65 0 0 0-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 0 0-8-8zm0 11.25A3.25 3.25 0 1 1 13.25 8 3.25 3.25 0 0 1 10 11.25z"/>
</svg>








</template>


<script>
export default{
  props: ['color', 'width']
}

</script>


<style>
</style>




