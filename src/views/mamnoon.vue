<template>
  <div class="mamnoon">
    <Nav />
    <UpserveOloFiltering />
  </div>
</template>
<script>
import UpserveOloFiltering from "@/components/UpserveOloFiltering";
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    UpserveOloFiltering
  }
};
</script>

<style>
.mamnoon{
    /* padding-top: 120px; */
    padding-top: 92px;
}
</style>