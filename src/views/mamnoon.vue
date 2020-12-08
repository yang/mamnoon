<template>
  <div class="mamnoon">
    <Nav />
<UpserveOlo :title="'Mamnoon'" :oloEndpoint="'/oloorder'" :menuEndpoint="'/product/upserveolo'" :emailAddress="$store.state.currentUserEmail" />
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
.mamnoon{
    /* padding-top: 120px; */
    padding-top: 92px;
}
</style>