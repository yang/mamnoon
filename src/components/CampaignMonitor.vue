<template>
  <div>
    <input v-model="emailAddress" type="email" placeholder="enter your email" class="lap-right-pad noselect" />
    <button class="no-button-style" @click="submitForm">
        <Send :sendText="subscribeText" />
    </button>
  </div>
</template>
<script>

import Send from '@/components/Send.vue'
export default {
    components: {
            Send
    },
  data() {
    return {
      id:'30FEA77E7D0A9B8D7616376B90063231D39C7C96A1D7376C38AE60E1910A82A10202394E8D6AA574431DCB69ECEA19B52C2754C5E2F6A48DEA4ACA3762773CE1',
      emailName: 'cm-wodku-wodku',
      emailAddress: '',
      subscribeText: 'send'
        }
        },
  methods: {
    submitEmail(secureUrl) {
      const params = {}
      params[this.emailName] = this.emailAddress
      // Warning: This response sometimes triggers a recapture if repeat requests are made from the same ip
      return fetch(secureUrl, {
        method: 'POST',
        body: new URLSearchParams(params),
        headers: new Headers({
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
      })
        .then(response => {
          this.subscribeText = 'thx!'
          this.starState = '#f58e58'
          setTimeout(() => {
            this.subscribeText = 'send'
            this.starState = '#f58e58'
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          this.subscribeText = 'error!'
         this.starState = '#F05D5B'
          setTimeout(() => {
            this.subscribeText = 'send'
            this.starState = '#f58e58'
          }, 5000)
        })
    },
    generateSecureSubscribeLink(email) {
      const params = {
        email: this.emailAddress,
        data: this.id
      }
      return fetch('http://createsend.com/t/getsecuresubscribelink', {
        method: 'POST',
        body: new URLSearchParams(params),
        headers: new Headers({
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
      })
        .then(response => response.text())
        .then(url => {
          this.submitEmail(url)
        })
        .catch(error => {
          console.log(error)
          this.subscribeText = 'error!'
          this.starState = '#F05D5B'
          setTimeout(() => {
            this.subscribeText = 'send'
             this.starState = '#f58e58'
          }, 5000)
        })
    },
    submitForm() {
      this.subscribeText = 'wait...'
      this.generateSecureSubscribeLink()
    }
  }
}
</script>
<style lang="scss">

.no-button-style{
    background: transparent;
    border: 0;
    transform: translate(-35px,-2px);
    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
}





.lap-right-pad{
    border: 0;
    color: #000;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: 500;
    letter-spacing: .25px;
    padding: 12px 35px 12px 10px;
    width: 240px;
    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
}

</style>

