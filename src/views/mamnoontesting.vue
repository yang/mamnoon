<template>
  <div class="mamnoon">
    <Nav />
<!-- <UpserveOloTestingNewProcessing :title="'Mamnoon Street'" :oloEndpoint="'/oloorderstreet'" :menuEndpoint="'/product/upserveolo'" :userData="user" :emailAddress="$store.state.currentUserEmail" /> -->
    <UpserveOloTestingNewProcessing :title="'Mamnoon'" :oloEndpoint="'/oloorder'" :menuEndpoint="'/product/upserveolo'" :userData="user" :emailAddress="$store.state.currentUserEmail" />


  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import UpserveOloTestingNewProcessing from "@/components/UpserveOloTestingNewProcessing";
import Nav from "@/components/Nav";
export default {
  data(){
return {
user: null
}
  },
  components: {
    Nav,
    UpserveOloTestingNewProcessing
  },
  methods:{
  getUser() {
let self = this
      this.$http
        .get("/user/email/" + self.$store.state.currentUserEmail)
        .then(function (response) {
          let userInfo = response.data;
          // console.log(userInfo);
          self.user = userInfo
self.cardNumberInput = userInfo.user.giftcard
self.preferredGiftCard = userInfo.user.giftcard
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getUser()

  }
};











</script>

<style>
.mamnoon{
  padding-top: 132px;
}

@media only screen and (max-width: 992px) {
  .mamnoon{
    padding-top: 112px;
}

}
</style>