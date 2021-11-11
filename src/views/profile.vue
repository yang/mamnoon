<template>
  <div class="profile">
    <Nav />
       <UserProfile />
 
  </div>
</template>
<script>

import Nav from "@/components/Nav";
import UserProfile from "@/components/UserProfile";
export default {
      metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'profile',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  components: {

    Nav,
    UserProfile

  },
    mounted () {
if(!this.$store.state.loggedIn){
      this.$router.push("/");
}
  },
};
</script>

<style>
.profile{
    padding-top: 120px;
        padding-top: 150px;
    padding-bottom: 120px;
}
</style>