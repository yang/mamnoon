<template>
  <div class="mamnoon">
    <Nav />

<h1>  Mamnoon Fine Foods  (coming soon)</h1>
  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import UpserveOlo from "@/components/UpserveOlo";
import Nav from "@/components/Nav";
export default {
  data(){
return {
user: null
}
  },
  components: {
    Nav
  }
};











</script>

<style>
.mamnoon{
    /* padding-top: 120px; */
    padding-top: 92px;
}

h1{
 color: #F05D5B;
 text-align: center;
 margin: 30px auto;
}
</style>