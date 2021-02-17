<template>
  <div class="mamnoon">
    <Nav />
<UpserveOloRetail :title="'Mamnoon'" :oloEndpoint="'/oloorderretail'" :menuEndpoint="'/product/upserveolo'" :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import UpserveOloRetail from "@/components/UpserveOloRetail";
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    UpserveOloRetail
  }
};
</script>

<style>
.mamnoon{
    /* padding-top: 120px; */
    /* padding-top: 92px; */
padding-top: 112px;
}
</style>