<template>
  <div>
    <input
      v-model="emailAddress"
      type="email"
      placeholder="enter your email"
      class="lap-right-pad noselect formInput"
    />
    <button class="signup-button" @click="submitForm">
      {{ subscribeText }}
    </button>
  </div>
</template>
<script>
export default {
  name: "CampaignMonitor",
  data() {
    return {
      id:
        "30FEA77E7D0A9B8D7616376B90063231122D972D702C45A0B0908F0B799A85F020393B617D255EDE0CCB8A42B8C75FE29A68A679D39C64E66764C801A0E74F3E",
      emailName: "cm-wkithd-wkithd",
      emailAddress: "",
      subscribeText: "sign up",
    };
  },
  methods: {
    submitEmail(secureUrl) {
      const params = {};
      params[this.emailName] = this.emailAddress;

      console.log("params");
      console.log(params);
      // Warning: This response sometimes triggers a recapture if repeat requests are made from the same ip
      return fetch(secureUrl, {
        method: "POST",
        body: new URLSearchParams(params),
        headers: new Headers({
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        }),
      })
        .then((response) => {
          console.log(response);
          this.subscribeText = " thx!";
          this.starState = "#f58e58";
          this.emailAddress = "";

          setTimeout(() => {
            this.subscribeText = "send";
            this.starState = "#f58e58";
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
          this.subscribeText = "error!";
          this.starState = "$nadi-red-color";
          setTimeout(() => {
            this.subscribeText = "send";
            this.starState = "#f58e58";
          }, 5000);
        });
    },
    generateSecureSubscribeLink(email) {
      const params = {
        email: this.emailAddress,
        data: this.id,
      };
      console.log(params);
      // return fetch('https://createsend.com/t/getsecuresubscribelink', {
      return fetch("https://createsend.com//t/getsecuresubscribelink", {
        method: "POST",
        body: new URLSearchParams(params),
        headers: new Headers({
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        }),
      })
        .then((response) => response.text())
        .then((url) => {
          this.submitEmail(url);
        })
        .catch((error) => {
          console.log(error);
          this.subscribeText = "error!";
          this.starState = "$nadi-red-color";
          setTimeout(() => {
            this.subscribeText = "send";
            this.starState = "#f58e58";
          }, 5000);
        });
    },
    submitForm() {
      this.subscribeText = "wait..";
      this.generateSecureSubscribeLink();
    },
  },
};
</script>
<style lang="scss">
.no-button-style {
  background: transparent;
  border: 0;
  transform: translate(-35px, -2px);
  width: 0;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}

.signup-button {
  margin-left: 20px;
  padding: 1px 20px 3px;
  font-size: 22px;
  font-weight: 500;
  & {
    @extend %nadi-tertiary-button;
  }
}

.lap-right-pad {
  border: 0;
  color: #000;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0.25px;
  padding: 6px 35px 6px 10px;
  // width: 240px;
  width: 70%;
  width: 50%;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}

.w-80-button {
  width: 80px;
}

.formInput {
  border-radius: 5px;
}
</style>
