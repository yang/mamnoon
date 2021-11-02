


<template>


<div>



<video width="320" height="240" controls>
 <source :src="src" type="video/mp4">

Your browser does not support the video tag.
</video>

</div>
</template>


<script>
export default{
    name: 'VideoComponent',
props:['src']

}
</script>