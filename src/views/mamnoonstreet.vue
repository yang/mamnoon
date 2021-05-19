<template>
  <div class="mamnoon-street">
    <Nav />
    <UpserveOloTesting :title="'Mamnoon Street'" :oloEndpoint="'/oloorderstreet'" :userData="user" :menuEndpoint="'/product/upserveolostreet'" :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import UpserveOloTesting from "@/components/UpserveOloTesting";
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    UpserveOloTesting
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