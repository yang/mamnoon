<template>
  <div class="todaystransactions">
    <Nav4 />
       <Transactions2 />
 
  </div>
</template>
<script>

import Nav4 from "@/components/Nav4";
import Transactions2 from "@/components/Transactions2";
export default {
          metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'transactions',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  components: {

    Nav4,
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
.todaystransactions{
    padding-top: 120px;
    padding-bottom: 120px;
}
</style>