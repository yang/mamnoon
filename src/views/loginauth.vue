<template>
  <div class="login">
    <Nav />
    <login />
  </div>
</template>
<script>
import SlideShow from "@/components/SlideShow";
import login from "@/components/auth/login";
import Products from "@/components/Products";
import Nav from "@/components/Nav";
export default {
        metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Log In',
      // all titles will be injected into this template
      titleTemplate: '%s | Nadi Mama'
  },
  components: {
    login,
    Products,
    SlideShow,
    Nav
  }
};
</script>
