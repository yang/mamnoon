<template>
  <div class="shop">
    <Nav />
  </div>
</template>
<script>
import SlideShow from "@/components/SlideShow";
import login from "@/components/auth/login";
import Products from "@/components/Products";
import Nav from "@/components/Nav";
export default {
  components: {
    login,
    Products,
    SlideShow,
    Nav
  }
};
</script>

<style>
.shop{
    padding-top: 120px;
}
</style>