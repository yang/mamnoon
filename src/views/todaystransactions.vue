<template>
  <div class="todaystransactions">
    <TodaysTransactions />
  </div>
</template>
<script>
// import Transactions2 from "@/components/Transactions2";
import TodaysTransactions from "@/components/TodaysTransactions";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "transactions",
    // all titles will be injected into this template
    titleTemplate: "%s | nadi mama",
  },
  components: {
    TodaysTransactions,
  },
  //     mounted () {
  // if(!this.$store.state.loggedIn){
  //       this.$router.push("/");
  // }
  //   },
};
</script>

<style lang="scss">
.todaystransactions {
  padding-top: 140px;
  padding-bottom: 120px;

  .container.dashboard {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
