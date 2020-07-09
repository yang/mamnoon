<template>
    <div class="fixed-profile">

              <div class="container nav-acc-header">
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
.fixed-profile{

    position: fixed;
    top: 142px;
    width: 100%;
    background: #ff002d80;
    padding: 30px 0;
        z-index: 99;


}


@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>