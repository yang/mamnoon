<template>
  <div class="mbar">
    <Nav3 />
    <UpserveOlo :title="'Mbar'" :oloEndpoint="'/oloordermbar'" :menuEndpoint="'/product/upserveolombar'" :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import UpserveOlo from "@/components/UpserveOlo";
import Nav3 from "@/components/Nav3";
export default {
  components: {
    Nav3,
    UpserveOlo
  }
};
</script>

<style>
.mbar{
    /* padding-top: 120px; */
    /* padding-top: 92px; */
    /* padding-top: 112px; */
    padding-top: 132px;
}
</style>

