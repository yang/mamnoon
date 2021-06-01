<template>
  <div class="mamnoon">
    <Nav />
<PackagesAdmin />
  
  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import PackagesAdmin from "@/components/PackagesAdmin";
import Nav from "@/components/Nav";
export default {
  data(){
return {
user: null
}
  },
  components: {
    Nav,
    PackagesAdmin
  }
};











</script>

<style>
.mamnoon{
  padding-top: 132px;
}

@media only screen and (max-width: 992px) {
  .mamnoon{
    padding-top: 112px;
}

}
</style>