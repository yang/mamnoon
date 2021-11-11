<template>
  <div class="profile">
    <Nav />
       <Transactions />
 
  </div>
</template>
<script>

import Nav from "@/components/Nav";
import Transactions from "@/components/Transactions";
export default {
          metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'transactions',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  components: {

    Nav,
    Transactions

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