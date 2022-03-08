<template>
  <div>
    <FavoriteItems
      :currentUser="$store.state"
      :email="$store.state.currentUserEmail"
    />
    <FavoriteOrders
      :currentUser="$store.state"
      :email="$store.state.currentUserEmail"
    />
    <PreviouslyOrdered
      :currentUser="$store.state"
      :email="$store.state.currentUserEmail"
    />
  </div>
</template>

<script>
import FavoriteItems from "@/components/FavoriteItems.vue";
import FavoriteOrders from "@/components/FavoriteOrders.vue";
import PreviouslyOrdered from "@/components/PreviouslyOrdered.vue";

export default {
  components: {
    FavoriteItems,
    FavoriteOrders,
    PreviouslyOrdered,
  },
  name: "OrderHistory",
  props: ["currentUser", "emailAddress", "email"],
};
</script>

<style lang="scss">
@import "@/assets/styles/css/orderhistory.scss";
</style>
