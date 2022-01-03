<template>
  <div class="profilef">
    <Nav3 />
       <Transactions2 />
 
  </div>
</template>
<script>

import Nav3 from "@/components/Nav3";
import Transactions2 from "@/components/Transactions2";
export default {
          metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'transactions',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  components: {

    Nav3,
    Transactions2

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