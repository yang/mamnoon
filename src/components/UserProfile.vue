<template>
    <div>
    <h1 v-if="$store.state.userInfo.user.email">welcome back, {{ $store.state.userInfo.user.email | generateUsername() }}</h1>
    <button @click="toggleVegetarian">
        <span v-if="$store.state.vegetarian === true">
            show meat and veg options
            </span>
        <span v-else>
            only show vegetarian
            </span>


            </button>
    <br /><br />
    </div>
</template>

<script>
export default{
name: 'UserProfile',
methods: {
    toggleVegetarian () {
    this.$store.commit('toggleVegetarian')
    }
}
}
</script>

<style lang="scss">

</style>