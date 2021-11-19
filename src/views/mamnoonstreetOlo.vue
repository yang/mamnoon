<template>
  <div class="mamnoon-street">
    <Nav3 />
    <UpserveOloTesting :title="'Mamnoon Street'" :oloEndpoint="'/oloorderstreet'" :userData="user" :menuEndpoint="'/product/upserveolostreet'" :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import UpserveOloTesting from "@/components/UpserveOloTesting";
import Nav3 from "@/components/Nav3";
export default {
    data(){
return {
user: null
}
  },
  components: {
    Nav3,
    UpserveOloTesting
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
.mamnoon-street{
    /* padding-top: 120px; */
    /* padding-top: 92px; */
padding-top: 132px;
}
</style>