<template>
  <div class="hello">
      <!-- is signed in? : {{ isSignIn }}
      <br /><br /><br /> -->
      <!-- <button
        type="primary"
        icon="fas fa-edit"
        @click="handleClickLogin"
        :disabled="!isInit"
      >get authCode</button>&nbsp;&nbsp;&nbsp; -->
      <a
        type="primary"
        icon="fas fa-edit"
        @click="handleClickSignIn"
        v-if="!isSignIn"
        :disabled="!isInit"
      >sign in with google</a>
      <a
        type="primary"
        icon="fas fa-edit"
        @click="handleClickSignOut"
        v-if="isSignIn"
        :disabled="!isInit"
      >sign out</a>
      <!-- <button
        type="primary"
        icon="fas fa-edit"
        @click="handleClickDisconnect"
        :disabled="!isInit"
      >disconnect</button> -->
      <!-- <i class="fas fa-edit"></i>
      <p>isInit: {{isInit}}</p>
      <p>isSignIn: {{isSignIn}}</p> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "GoogleAuth",
  props: {
    msg: String
  },
  data() {
    return {
      isInit: false,
      isSignIn: false
    };
  },
  methods: {
    handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then(authCode => {
          //on success
          console.log("authCode", authCode);
        })
        .catch(error => {
          //on fail do something
          console.error(error);
        });
    },
    async showUserInfo(email){
      console.log(email['Au'])
      let response = await this.$http.get('/user/email/' + email['Au']) 

      let currentUserInfo = response.data
      this.$store.commit('updateCurrentUser', { currentUserInfo })
  },
    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {


          //logs


  var profile = GoogleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());


          //logs


          this.showUserInfo(GoogleUser.getBasicProfile())
          this.isSignIn = this.$gAuth.isAuthorized;

          this.$store.commit('logIn')

        })
        .catch(error => {
          //on fail do something
          console.error(error);
        });
    },

    handleClickSignOut() {
        localStorage.clear()
        this.$store.commit('logOut')
      this.$gAuth
        .signOut()
        .then(() => {
          //on success do something
          this.isSignIn = this.$gAuth.isAuthorized;
          console.log("isSignIn", this.$gAuth.isAuthorized);
        })
        .catch(error => {
          //on fail do something
          console.error(error);
        });

    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    }
  },

  created() {
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
