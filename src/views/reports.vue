<template>
  <div class="profile">
    <Nav3 />
       <Reports />
 
  </div>
</template>
<script>

import Nav3 from "@/components/Nav3";
import Reports from "@/components/Reports";
export default {
          metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'reports',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  components: {

    Nav3,
    Reports

  },
//     mounted () {
// if(!this.$store.state.loggedIn){
//       this.$router.push("/");
// }
//   },
};
</script>

<style>
.profile{
    padding-top: 120px;
        padding-top: 150px;
    padding-bottom: 120px;
}
</style>