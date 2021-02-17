<template>
  <div class="mbar">
    <Nav />
    <UpserveOlo :title="'Mbar'" :oloEndpoint="'/oloordermbar'" :menuEndpoint="'/product/upserveolombar'" :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import UpserveOlo from "@/components/UpserveOlo";
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    UpserveOlo
  }
};
</script>

<style>
.mbar{
    /* padding-top: 120px; */
    /* padding-top: 92px; */
padding-top: 112px;
}
</style>

