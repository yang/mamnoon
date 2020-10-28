<template>

    <div>    <div>
        <!-- <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button> -->
        <div class="container nav-acc-header pad-yellow-background">
        {{$store.state.currentUserEmail}}
        <!-- <h1 v-if="$store.state.currentUserEmail === ''"> -->
        <!-- welcome back, {{ $store.state.userInfo.user.email | generateUsername() }} -->
        <!-- {{ $store.state.userInfo.user.email }} -->
        <!-- </h1> -->
        </div>
        <GiftCardModule />
        <GiftCardForm :emailAddress="$store.state.currentUserEmail" />
        <!-- <TestimonialForm :emailAddress="$store.state.currentUserEmail" /> -->
        <!-- {{$store.state}} -->

        
        <!-- <EmailForm :emailAddress="$store.state.currentUserEmail" /> -->
        <!-- <ToggleVegetarian /> -->
        <!-- <addproduct :emailAddress="$store.state.userInfo.user.email" /> -->
        <!-- order he -->
        <OrderHistory :currentUser="$store.state" />
          

        </div>
        <div>


        </div>
        </div>
</template>

<script type="text/javascript">
import EmailForm from "@/components/EmailForm";
import TestimonialForm from "@/components/TestimonialForm";

import GiftCardForm from "@/components/GiftCardForm";




import GiftCardModule from "@/components/GiftCardModule";
import ToggleVegetarian from "@/components/ToggleVegetarian";

import OrderHistory from "@/components/OrderHistory";



export default {
name: 'UserProfile',
  components: {
    TestimonialForm,
    GiftCardForm,
    EmailForm,
    GiftCardModule,
    ToggleVegetarian,
    OrderHistory
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
    padding: 20px 30px;
    margin-bottom: 20px;
}




@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>