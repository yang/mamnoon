<template>
  <div class="login">
    <Nav />
    <login />
  </div>
</template>
<script>
import SlideShow from "@/components/SlideShow";
import login from "@/components/auth/login";
import shop from "@/components/auth/shop";
import Products from "@/components/Products";
import Nav from "@/components/Nav";
export default {
  components: {
    login,
    Products,
    SlideShow,
    Nav,
    shop
  }
};
</script>
