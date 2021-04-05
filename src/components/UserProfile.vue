<template>

    <div>    <div>
        <!-- <button class="btn btn-primary right-hide-modal" @click="hideUserModal">hide</button> -->
        <UserForm :emailAddress="$store.state.currentUserEmail"/>
     
        <template v-if="$store.state.currentUserEmail === 'joe.waine@gmail.com'">
        <CreditSaveForm :emailAddress="$store.state.currentUserEmail" />
         </template>
        <GiftCardModule :emailAddress="$store.state.currentUserEmail" />
        <!-- <TestimonialForm :emailAddress="$store.state.currentUserEmail" /> -->

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
import UserForm from "@/components/UserForm";
import TestimonialForm from "@/components/TestimonialForm";

import CreditSaveForm from "@/components/CreditSaveForm";

import GiftCardModule from "@/components/GiftCardModule";
import ToggleVegetarian from "@/components/ToggleVegetarian";

import OrderHistory from "@/components/OrderHistory";



export default {
name: 'UserProfile',
  components: {
    TestimonialForm,
    EmailForm,
    UserForm,
    GiftCardModule,
    ToggleVegetarian,
    OrderHistory,
    CreditSaveForm
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
    // background: #fff367;
    padding: 20px 30px;
    margin-bottom: 20px;
}




@media only screen and (max-width: 1080px) {
  .fixed-profile{
    top: 92px;
}  
}

</style>