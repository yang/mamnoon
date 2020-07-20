<template>
    <div class="fixed-profile">
        <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button>
        <div class="container nav-acc-header pad-white-background">
        <h1 v-if="$store.state.userInfo.user.email">
        welcome back, {{ $store.state.userInfo.user.email | generateUsername() }}
        <!-- {{ $store.state.userInfo.user.products }} -->
        </h1>
        </div>
        <GiftCardModule />
        <TestimonialForm :emailAddress="$store.state.userInfo.user.email" />
        <ToggleVegetarian />
        <!-- <addproduct :emailAddress="$store.state.userInfo.user.email" /> -->
     
    </div>
</template>

<script type="text/javascript">


// import addproduct from "@/components/auth/addproduct";

import TestimonialForm from "@/components/TestimonialForm";
import GiftCardModule from "@/components/GiftCardModule";
import ToggleVegetarian from "@/components/ToggleVegetarian";


export default{
name: 'UserProfile',
  components: {
    TestimonialForm,
    GiftCardModule,
    ToggleVegetarian 
  },
methods: {

    hideUserModal () {
    this.$store.commit('hideUserModal')
    }
},
mounted(){
    console.log(this.$store.state)
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
    margin-right: 20px;
}

.pad-white-background{
    background: rgb(255,255,255);
    padding: 20px 30px;
    margin-bottom: 20px;
}

@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>