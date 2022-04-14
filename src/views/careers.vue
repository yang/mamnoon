<template>
  <div>
    <div>
      <Nav3 />
    </div>
    <div class="careers">
      <Careers />
    </div>
  </div>
</template>
<script>
import Careers from "@/components/CareersPage";
import Nav3 from "@/components/Nav3";
export default {
  metaInfo: {
    title: "careers",
    // all titles will be injected into this template
    titleTemplate: "%s | nadi mama",
  },
  components: {
    Nav3,
    Careers,
  },
};
</script>
