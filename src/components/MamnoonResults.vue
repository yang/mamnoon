<template>
<div>
<br><br><br><br>
{{storeStore}}
</div>
</template>


<script>
export default {
    name: 'mamnoonresults',
    data(){
    return {
        storeStore: this.$store.state.storeCurrentOrder
        }
    }
}

</script>
