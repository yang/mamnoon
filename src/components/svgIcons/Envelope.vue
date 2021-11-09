<template>
<svg  :style="{'width': this.width ? this.width :'20px'}" width="43" height="33" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="38.8775" height="28.1581" rx="3" fill="transparent" :stroke="color" stroke-width="4"/>
<path d="M2.68033 8.57317L19.046 22.457C20.5387 23.7233 22.7286 23.7233 24.2213 22.457L40.5869 8.57317" :stroke="color" stroke-width="4"/>
</svg>
</template>


<script>
export default{
  props: ['color', 'width']
}

</script>


<style>
</style>




