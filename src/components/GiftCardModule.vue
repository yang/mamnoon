<template>
<div>
<div class="container pad-yellow-background module-header">
  your giftcard
  </div>

  <div class="container pad-yellow-background">

    lookup balance:
    <br />
    <input type="number" v-model="cardNumberInput" class="placeholder" placeholder="enter your giftcard number" />
    <button class="buttonStyle" @click="lookupBalance">    <Check /></button>
    <br />
    <br />
    GIFTCARD BALANCE for {{ cardNumberInput }} :

      <input type="number" class="placeholder-balance" placeholder="--.--" :value="currentBalance" />
    <br />
    <!-- <input -->
      <!-- type="number" -->
      <!-- min="0.00" -->
      <!-- max="10000.00" -->
      <!-- step="0.01" -->
      <!-- v-model="amountUse" -->
      <!-- placeholder="withdraw balance" -->
    <!-- /> -->
    <!-- <br /> -->
    <!-- <button @click="useBalance(amountUse)">Use {{ amountUse }} Balance</button> -->
    <br />
    <br />
    <h4 v-if="showInsufficientFunds === true" class="error">insufficient funds</h4>
    <br/>
    <br/>
    <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">    <BuyNewCard /></a>

<br /> <br />

     <a href="https://ecommerce.custcon.com/Recharge_Login.aspx?c=364cfc03-d428-44bf-b814-1efbdcaed08d" target="_blank">    <UpdateBalance /></a>
      <br /><br />
  </div>









  </div>
</template>


<script type="text/javascript">



import UpdateBalance from "@/components/svgIcons/UpdateBalance";
import Submit from "@/components/svgIcons/Submit";
import BuyNewCard from "@/components/svgIcons/BuyNewCard";
import Check from "@/components/svgIcons/Check";


export default {
  components:{
  UpdateBalance,
   BuyNewCard,
   Check
  },
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


<style>
.container.pad-yellow-background.module-header,
.module-header{
  width: 100%;
  display: block;
  background:#F05D5B !important;
  text-align: center;
  color: #fff367;
  padding: 15px;
  font-weight: 500;
  margin-bottom: 0;
}


.buttonStyle{

    border: 0;
    background: transparent;
    outline: none;
    padding-left: 0;
    padding-right: 0;

}


.buttonStyle:active,
.buttonStyle:visited,
.buttonStyle:focus{
outline: none;

}



.placeholder{
  padding: 10px 10px 14px 10px;
    border: 0;
    border-radius: 0;
    font-weight: bold;
    width: 250px;
}


.currBalance{
  padding: 20px;
  background: white;
  font-weight: bold;
}



.placeholder-balance{
  pointer-events: none;
  border: 0;
  width: 130px;
    padding: 20px;
    font-size: 30px;

}
</style>