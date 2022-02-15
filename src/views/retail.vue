<template>
  <div class="mamnoon">
    <Nav3 />
    <UpserveOloRetail
      :title="'Mamnoon'"
      :oloEndpoint="'/oloorderretail'"
      :menuEndpoint="'/product/upserveolo'"
      :emailAddress="$store.state.currentUserEmail"
    />
  </div>
</template>
<script>
import UpserveOloRetail from "@/components/UpserveOloRetail";
import Nav3 from "@/components/Nav3";
export default {
  components: {
    Nav3,
    UpserveOloRetail,
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
