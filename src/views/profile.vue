<template>
  <div class="profile">
    <Nav3 />
       <UserProfile />
 
  </div>
</template>
<script>

import Nav3 from "@/components/Nav3";
import UserProfile from "@/components/UserProfile";
export default {
      metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'profile',
      // all titles will be injected into this template
      titleTemplate: '%s | nadi mama'
  },
  components: {

    Nav3,
    UserProfile

  },
    mounted () {





// if(!this.$auth.isAuthenticated){
//       this.$router.push("/");
// }


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