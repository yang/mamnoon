<template>
  <div class="mamnoon-street">
    <Nav />
    <UpserveOlo :title="'Mamnoon Street'" :oloEndpoint="'/oloorderstreet'" :userData="user" :menuEndpoint="'/product/upserveolostreet'" :emailAddress="$store.state.currentUserEmail" />
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
.mamnoon-street{
    /* padding-top: 120px; */
    padding-top: 92px;
}
</style>