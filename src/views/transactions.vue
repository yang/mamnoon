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
    padding-bottom: 120px;
}
</style>