<template>
  <div>
    <div class="container pad-yellow-background module-header">your giftcard</div>

    <div class="container pad-yellow-background pd50">
      
      
      <!-- {{cardNumberInput}}
      <input
      type="number"
      min="0.00"
      max="10000.00"
      step="0.01"
      v-model="amountUse"
      placeholder="withdraw balance"
      />
      <br />
      <button @click="useBalance(amountUse)">Use {{ amountUse }} Balance</button> -->

  
      <div class="button-panel top">

      <div class="button-box text-left">
<div class="thick-grey">check your balance</div>
      <br />
      <input
        type="number"
        v-model="cardNumberInput"
        class="placeholder"
        placeholder="enter your giftcard number"
      />
      <button class="buttonStyle" @click="lookupBalance">
        <Check />
      </button>
      </div>
      <div class="button-box text-left moneytotal pl50">
       <!-- GIFTCARD BALANCE for {{ cardNumberInput }} : -->
      <input
        type="number"
        class="placeholder-balance"
        placeholder="--.--"
        :value="currentBalance"
      />
      </div>

      </div>
  
  
      <div class="button-panel bottom">

      <div class="button-box">

    <h4 v-if="showInsufficientFunds === true" class="error">insufficient funds</h4>
<br>
    <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">    <BuyNewCard /></a>


      </div>
      <div class="button-box">
        <a
          href="https://ecommerce.custcon.com/Recharge_Login.aspx?c=364cfc03-d428-44bf-b814-1efbdcaed08d"
          target="_blank"
        >
          <UpdateBalance />
        </a>
      </div>

      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
import UpdateBalance from "@/components/svgIcons/UpdateBalance";
import Submit from "@/components/svgIcons/Submit";
import BuyNewCard from "@/components/svgIcons/BuyNewCard";
import Check from "@/components/svgIcons/Check";

export default {
  components: {
    UpdateBalance,
    BuyNewCard,
    Check
  },
  data() {
    return {
      currentBalance: "",
      amountUse: "",
      cardNumberInput: "",
      showInsufficientFunds: false,
    };
  },
  methods: {










    async lookupBalance() {
      console.log('lookup balance')
      let giftcardLookup = await this.$http.post("/user/lookupgiftcard", {
        cardNumber: this.cardNumberInput,
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
console.log('use balance')
      this.$http
        .post("/user/lookupgiftcard", {
          cardNumber: this.cardNumberInput,
        })
        .then(function (response) {
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
                useAmount: self.amountUse,
              })
              .then(function (response) {
                self.currentBalance =
                  response.data.resSendData.Responses[0].SvUse[0].CurrentBalance[0];
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            self.showInsufficientFunds = true;
            setTimeout(function () {
              self.showInsufficientFunds = false;
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>


<style lang="scss">
.container.pad-yellow-background.module-header,
.module-header {
  width: 100%;
  display: block;
  background: #f05d5b !important;
  text-align: center;
  color: #fff367;
  padding: 15px;
  font-weight: 500;
  margin-bottom: 0;
}

.buttonStyle {
  border: 0;
  background: transparent;
  outline: none;
  padding-left: 0;
  padding-right: 0;
}

.buttonStyle:active,
.buttonStyle:visited,
.buttonStyle:focus {
  outline: none;
}

.placeholder {
  padding: 10px 10px 14px 10px;
  border: 0;
  border-radius: 0;
  font-weight: bold;
  // width: 250px;
      width: 300px;
}

.currBalance {
  padding: 20px;
  background: white;
  font-weight: bold;
}

.placeholder-balance {
    pointer-events: none;
    border: 0;
    width: 144px;
    padding: 10px 8px 10px 15px;
    font-size: 30px;
    font-weight: bold;
    color: black;

}

.button-panel {
  width: 100%;
&.bottom{
  width: 50%;
  margin: 0 auto;
}

&.top{
  width: 80%;
  margin: 0 auto;
}


  .button-box {


    width: 50%;
    display: inline-block;
    text-align: center;

    &.text-left{
      text-align: left;
    }

  }
}


.placeholder::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
 color: #f58e58;
opacity: 1; /* Firefox */
}
.placeholder:-ms-input-placeholder,
.placeholder::-ms-input-placeholder { /* Microsoft Edge */
  color: #f58e58;
}



.thick-grey{
  color: #49494a;
font-size: 18px;
font-weight: 600;
}

.container.pad-yellow-background.pd50,
.pd50{
  padding: 50px;
}


.pl50{
  padding-left: 50px;
}




@media only screen and (max-width: 1080px) {


.button-panel {
  width: 100%;
&.bottom{
  width: 100%;
  margin: 0 auto;
}

&.top{
  width: 100%;
  margin: 0 auto;
}


  .button-box {


    width: 100%;
    display: inline-block;
    text-align: center;

    &.text-left{
      text-align: left;
    }

  }
}


.placeholder {
  width: 220px;
  margin: 0 auto;
  text-align: center !important;
}

.button-panel .button-box.text-center{
    text-align: center !important;
}



.button-panel .button-box.text-left{
   text-align: center !important;
}


.container.pad-yellow-background.pd50,
.pd50{
  padding: 50px 15px;
}


.moneytotal{
  padding-top: 40px;
}

.pl50{
  padding-left: 0;
}

}



@media only screen and (max-width: 480px){
.placeholder {
    width: 160px;

}
}
</style>