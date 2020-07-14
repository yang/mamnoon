<template>
    <div class="fixed-profile">

            <div class="container nav-acc-header pad-white-background">
                <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button>
                <h1 v-if="$store.state.userInfo.user.email">
                    welcome back, {{ $store.state.userInfo.user.email | generateUsername() }}
                    <!-- {{ $store.state.userInfo.user.products }} -->
    </h1>
<div>

<TestimonialForm :emailAddress="$store.state.userInfo.user.email" />

</div>

    <!-- <button @click="toggleVegetarian">
        <span v-if="$store.state.vegetarian === true">
            show meat and veg options
            </span>
        <span v-else>
            only show vegetarian
            </span>
    </button> -->
    <br /><br />

    <!-- <addproduct :emailAddress="$store.state.userInfo.user.email" /> -->






        </div>
    </div>
</template>

<script>


// import addproduct from "@/components/auth/addproduct";

import TestimonialForm from "@/components/TestimonialForm";


export default{
name: 'UserProfile',
  components: {
    TestimonialForm 
  },
methods: {
    toggleVegetarian () {
    this.$store.commit('toggleVegetarian')
    },
    hideUserModal () {
    this.$store.commit('hideUserModal')
    }
}
}
</script>

<style lang="scss">
.fixed-profile{
    position: fixed;
    top: 142px;
    width: 100%;
    background: #FFF367;
    padding: 30px 0;
    z-index: 99;
}


.right-hide-modal{
    float: right;
}

.pad-white-background{
    background: rgb(255,255,255);
    padding: 20px 30px;
}

@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>