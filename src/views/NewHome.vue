<template>
  <div class="pt180" style="overflow-x:hidden;">
    <Nav3 />
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";

export default {
  components: {
    Nav3,
  },
};
</script>

<style scoped lang="scss">
.fix-top-nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  top: 44px;
}

.section.hero {
  width: 100%;
  height: 100vh;
}
.nav-acc-header {
  padding-top: 130px;
  transition: padding 0.5s ease;
  &.morePadding {
    padding-top: 300px;
  }
}

.pt180 {
  padding-top: 180px;
}

@media only screen and (max-width: 1080px) {
  .pt180 {
    padding-top: 0px;
  }

  .nav-acc-header {
    // padding-top: 90px;
    padding-top: 60px;
    transition: padding 0.5s ease;
    &.morePadding {
      padding-top: 250px;
    }
  }
}

@media only screen and (max-width: 1080px) {
  .container.mt-5 {
    padding-top: 100px;
  }
}

@media only screen and (max-width: 640px) {
  .container.mt-5.home-page {
    padding-top: 80px;
  }
}
</style>
