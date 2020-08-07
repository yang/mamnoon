<template>
    <div>
        <!-- <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button> -->
        <div class="container nav-acc-header pad-yellow-background">
        {{$store.state.currentUserEmail}}
        <!-- <h1 v-if="$store.state.currentUserEmail === ''"> -->
        <!-- welcome back, {{ $store.state.userInfo.user.email | generateUsername() }} -->
        <!-- <br/> -->
        <!-- {{ $store.state.userInfo.user.email }} -->
        <!-- </h1> -->
        <!-- <h1>welcome back</h1>  -->
        </div>
        <GiftCardModule />
        <!-- <TestimonialForm :emailAddress="$store.state.userInfo.user.email" /> -->
                <EmailForm :emailAddress="$store.state.userInfo.user.email" />
        <!-- <ContactUs /> -->
        <ToggleVegetarian />
        <!-- <addproduct :emailAddress="$store.state.userInfo.user.email" /> -->
     



    </div>
</template>

<script type="text/javascript">


// import addproduct from "@/components/auth/addproduct";
import EmailForm from "@/components/EmailForm";
import TestimonialForm from "@/components/TestimonialForm";
import GiftCardModule from "@/components/GiftCardModule";
import ToggleVegetarian from "@/components/ToggleVegetarian";
import ContactUs from "@/components/ContactUs";




// svgs



export default {
name: 'UserProfile',
  components: {
    TestimonialForm,
    EmailForm,
    GiftCardModule,
    ToggleVegetarian,
    ContactUs
  },
methods: {
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
    background: #ffffff;
    padding: 30px 0;
    z-index: 99;
    height: 100vh;
}


.right-hide-modal{
    float: right;
    margin-right: 20px;
}

.pad-yellow-background{
    background: #fff367;
    // border: 1px solid black;
    padding: 20px 30px;
    margin-bottom: 20px;
    // border-radius: 10px;
}




@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>