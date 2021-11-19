<template>
  <div class="shop">
    <Nav3 />
  </div>
</template>
<script>
import SlideShow from "@/components/SlideShow";
import login from "@/components/auth/login";
import Products from "@/components/Products";
import Nav3 from "@/components/Nav3";
export default {
  components: {
    login,
    Products,
    SlideShow,
    Nav3
  }
};
</script>

<style>
.shop{
    padding-top: 120px;
}
</style>