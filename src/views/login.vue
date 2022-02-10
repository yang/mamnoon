<template>
  <div class="login">
    <Nav3 />
    <login />
  </div>
</template>
<script>

import login from "@/components/auth/login";
import Products from "@/components/Products";
import Nav3 from "@/components/Nav3";
export default {
        metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'log in',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  components: {
    login,
    Products,
    
    Nav3
  }
};
</script>
