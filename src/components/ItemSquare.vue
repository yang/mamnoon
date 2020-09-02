<template>
<div>



  {{data.name}}
  <!-- {{data.item_images[0].url}} -->
    {{data.price}}
<div v-if="data.images.online_ordering_menu" v-bind:style="{ height: '200px', backgroundSize: '100%', backgroundPosition: 'center center', backgroundImage: 'url(' + data.images.online_ordering_menu.main + ')' }">


</div>
</div>
</template>


<script>
export default {
    name: 'itemsquare',
    props: ['data']
}

</script>
