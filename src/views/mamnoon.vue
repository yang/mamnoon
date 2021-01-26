<template>
  <div class="mamnoon">
    <Nav />
<UpserveOlo :title="'Mamnoon'" :oloEndpoint="'/oloorder'" :menuEndpoint="'/product/upserveolo'" :userData="user" :emailAddress="$store.state.currentUserEmail" />
  
  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import UpserveOlo from "@/components/UpserveOlo";
import Nav from "@/components/Nav";
export default {
  data(){
return {
user: null
}
  },
  components: {
    Nav,
    UpserveOlo
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
    /* padding-top: 120px; */
    padding-top: 92px;
}
</style>