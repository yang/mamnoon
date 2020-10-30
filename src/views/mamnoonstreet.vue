<template>
  <div class="mamnoon-street">
    <Nav />
    <UpserveOloFilteringStreet :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import UpserveOloFilteringStreet from "@/components/UpserveOloFilteringStreet";
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    UpserveOloFilteringStreet
  }
};
</script>

<style>
.mamnoon-street{
    /* padding-top: 120px; */
    padding-top: 92px;
}
</style>