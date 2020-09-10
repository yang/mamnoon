<template>
  <div class="mamnoon-results">
    <Nav />
    <MamnoonResults />
  </div>
</template>
<script>
import MamnoonResults from "@/components/MamnoonResults.vue";
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    MamnoonResults
  }
};
</script>

<style>
.mamnoon{
    padding-top: 120px;
}
</style>