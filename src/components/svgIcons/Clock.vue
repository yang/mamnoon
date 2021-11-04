<template>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" :style="{'width': this.width ? this.width :'20px'}">
<title>clock</title>
<path :fill="color" d="M12.727 4.477h-1.5v8.349l5.419 2.576 0.644-1.355-4.563-2.169v-7.401z"></path>
<path :fill="color" d="M12 0.75c-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25 11.25-5.037 11.25-11.25-5.037-11.25-11.25-11.25zM12 21.75c-5.385 0-9.75-4.365-9.75-9.75s4.365-9.75 9.75-9.75 9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"></path>
</svg>


</template>


<script>
export default{
  props: ['color', 'width']
}

</script>


<style>
</style>