<template>
    <div>    <div>
        <UserForm :emailAddress="$store.state.currentUserEmail"/>

        <template>
        <CreditSaveForm :emailAddress="$store.state.currentUserEmail" />

         </template>
        <GiftCardModule :emailAddress="$store.state.currentUserEmail" />

                <OrderHistory :currentUser="$store.state" />



                              <ReservationHistory :currentUser="$store.state" />
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

import OrderHistory from "@/components/OrderHistory";
import ReservationHistory from "@/components/ReservationHistory";


export default {
name: 'UserProfile',
  components: {
    TestimonialForm,
    EmailForm,
    UserForm,
    GiftCardModule,
    OrderHistory,
    CreditSaveForm,
    ReservationHistory
  },
methods: {
    hideUserModal () {
    this.$store.commit('hideUserModal')
    }
},
  created(){
    let recaptchaScriptModal = document.createElement('script')
      recaptchaScriptModal.setAttribute('src', 'https://assets.emergepay.chargeitpro.com/cip-hosted-modal.js')
      document.head.appendChild(recaptchaScriptModal)

      let recaptchaScriptJquery = document.createElement('script')
      recaptchaScriptJquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      document.head.appendChild(recaptchaScriptJquery)

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