<template>
  <div class="mamnoon">
    <Nav />

<div>


    <img style="width: 100%;" src="@/assets/img/mamnoonFF_NADI_2-01.png">
</div>
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
    /* padding-top: 92px; */
padding-top: 112px;
    padding-top: 132px;
}

h1{
 color: #F05D5B;
 text-align: center;
 margin: 30px auto;
}
</style>