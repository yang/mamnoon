<template>
    <div class="container nav-acc-header pad-white-background">

    <button @click="toggleVegetarian">
        <span v-if="$store.state.vegetarian === true">
            show meat and veg options
            </span>
        <span v-else>
            only show vegetarian
            </span>
    </button>

</div>
</template>

<script type="text/javascript">
export default{
    methods: {
    toggleVegetarian () {
    this.$store.commit('toggleVegetarian')
    }
}
}
</script>