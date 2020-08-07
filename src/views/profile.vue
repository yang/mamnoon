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
  components: {

    Nav,
    UserProfile

  },
    mounted () {
    // console.log('loggin?')
    //   console.log(this.$store.state.loggedIn)
// this.$store.state.loggedIn
if(!this.$store.state.loggedIn){
      this.$router.push("/");
}


  },
};
</script>


<style>
.profile{
    padding-top: 120px;
    padding-bottom: 120px;
}
</style>