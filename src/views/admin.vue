<template>
  <div class="mamnoon">
    <Nav />
<Admin :title="'Mamnoon'" :oloEndpoint="'/oloorder'" :menuEndpoint="'/product/upserveolo'" :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import Admin from "@/components/Admin";
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    Admin
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