<template>
  <div class="container pad-white-background">
     <a href="https://ecommerce.custcon.com/Recharge_Login.aspx?c=364cfc03-d428-44bf-b814-1efbdcaed08d" target="_blank"> update balance</a>
      <br /><br />
    lookup balance:
    <br />
    <input type="number" v-model="cardNumberInput" placeholder="0000 0000 0000 0000" />
    <button @click="lookupBalance">Check Balance</button>
    <br />
    <br />
    GIFTCARD BALANCE for {{ cardNumberInput }} :
    <h1>{{ currentBalance }}</h1>
    <br />
    <br />
    <input
      type="number"
      min="0.00"
      max="10000.00"
      step="0.01"
      v-model="amountUse"
      placeholder="withdraw balance"
    />
    <br />
    <br />
    <button @click="useBalance(amountUse)">Use {{ amountUse }} Balance</button>
    <br />
    <br />
    <h4 v-if="showInsufficientFunds === true" class="error">insufficient funds</h4>
  </div>
</template>


<script type="text/javascript">
export default {
  data() {
    return {
      currentBalance: "",
      amountUse: "",
      cardNumberInput: "",
      showInsufficientFunds: false
    };
  },
  methods: {
    async lookupBalance() {
      let giftcardLookup = await this.$http.post("/user/lookupgiftcard", {
        cardNumber: this.cardNumberInput
      });
      let giftcardResponse = giftcardLookup.data;
      // console.log(giftcardResponse)
      console.log(
        giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0]
      );
      this.currentBalance =
        giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0];
    },
    useBalance() {

      let self = this;

      // first check if the balance is available

      this.$http
        .post("/user/lookupgiftcard", {
          cardNumber: this.cardNumberInput
        })
        .then(function(response) {
          if (
            Number(
              response.data.resSendData.Responses[0].SvInquiry[0]
                .CurrentBalance[0]
            ) >= Number(self.amountUse)
          ) {
            self.showInsufficientFunds = false;
            self.$http
              .post("/user/usegiftcard", {
                cardNumber: self.cardNumberInput,
                useAmount: self.amountUse
              })
              .then(function(response) {
                self.currentBalance =
                  response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0];
              })
              .catch(function(error) {
                console.log(error);
              });
          } else {
            self.showInsufficientFunds = true;
            setTimeout(function() {
              self.showInsufficientFunds = false;
            }, 3000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>