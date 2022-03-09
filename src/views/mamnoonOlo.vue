<template>
  <div class="mamnoon">
    <Nav3 />
    <div style="margin-left: 44px;">
      This page is for pickup orders only. For delivery, please visit 
      <a :href="'https://www.doordash.com/store/mamnoon-street-seattle-89822/'">Doordash.</a>
    </div>
    <UpserveOloTestingNewProcessing
      :title="'Mamnoon'"
      :oloEndpoint="'/order/oloorder'"
      :menuEndpoint="'/product/upserveolo'"
      :userData="user"
      :emailAddress="$store.state.currentUserEmail"
    />
    <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import UpserveOloTestingNewProcessing from "@/components/UpserveOloTestingNewProcessing";
import Nav3 from "@/components/Nav3";
export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    Nav3,
    UpserveOloTestingNewProcessing,
  },
  methods: {
    getUser() {
      let self = this;
      this.$http
        .get("/user/email/" + self.$store.state.currentUserEmail)
        .then(function(response) {
          let userInfo = response.data;
          // console.log(userInfo);
          self.user = userInfo;
          self.cardNumberInput = userInfo.user.giftcard;
          self.preferredGiftCard = userInfo.user.giftcard;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
.mamnoon {
  padding-top: 132px;
}

@media only screen and (max-width: 992px) {
  .mamnoon {
    padding-top: 112px;
  }
}
</style>
