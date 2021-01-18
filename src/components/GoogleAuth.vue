<template>
  <div class="hello">
    <a
      type="primary"
      icon="fas fa-edit"
      @click="handleClickSignIn"
      v-if="!isSignIn"
      :disabled="!isInit"
    >
      sign in
    </a>
    <a
      type="primary"
      icon="fas fa-edit"
      @click="handleClickSignOut"
      v-if="isSignIn"
      :disabled="!isInit"
    >
      sign out
    </a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "GoogleAuth",
  props: {
    msg: String,
  },
  data() {
    return {
      isInit: false,
      isSignIn: false,
    };
  },
  methods: {
    handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          //on success
          // console.log("authCode", authCode);
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },
    showUserInfo(email) {
      let self = this;
      this.$http
        .get("/api/user/email/" + email)
        .then(function (response) {
          //  console.log(response)

          ////

          ////

          let currentUserInfo = response.data;
          console.log(currentUserInfo);
          self.$store.commit("updateCurrentUser", { currentUserInfo });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          var profile = GoogleUser.getBasicProfile();

          // console.log("Email: " + profile.getEmail());

          // console.log(this.$gAuth.isAuthorized)
          // console.log(profile)
          // this.showUserInfo(profile.getEmail())
          this.isSignIn = this.$gAuth.isAuthorized;

          this.$store.commit("logIn");

          let currentUserEmail = profile.getEmail();
          // console.log(profile)
          // console.log(currentUserEmail)
          this.$store.commit("setCurrentUserEmail", { currentUserEmail });
          location.reload()
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },

    handleClickSignOut() {
      localStorage.clear();
      this.$store.commit("logOut");
      this.$gAuth
        .signOut()
        .then(() => {
          //on success do something
          this.isSignIn = this.$gAuth.isAuthorized;
          // this.isSignIn = false
          // location.reload()
          // clear user current email and clear user info
          this.$store.commit("clearCurrentUser");

          if (this.$router.currentRoute.fullPath === "/") {
          } else {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          //on fail do something
          console.error(error);
        });
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },

  created() {
    let that = this;
    let checkGauthLoad = setInterval(function () {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
