<template>
<button class="sm-button full-width-button" @click="cippaybuttoncreditsave">add new card</button>
</template>


<script type="text/javascript">
import swal from "vue-sweetalert2";
export default {
  data() {
    return {
      showAddCardFormVisible: false,
      savedCards:null,
    ccBillingName: null,
    ccBillingAddress: null,
    ccBillingPostalCode: null,
      user: {},
      updateBilling: false,
      updateDelivery: false,
      savedDeliveryAddress: {},
      savedBillingAddress: {},
      user: null,
      listBalance: "",
      currentBalance: "",
      amountUse: "",
      cardNumberInput: "",
      showInsufficientFunds: false,
      errors: [],
      giftcards: null,
      messageBody: {
        number: null,
        email: this.emailAddress
    },

  preferredGiftCard: ""
    }
    },
props: ['emailAddress'],
  methods: {
    async checkAndSend(email,approvalData){
      console.log('check credit card')
    try {
      let response = await this.$http.post('/credit/checkcreditcard/',{
        email,
        approvalData
      }) 
     if(response.data && response.data.user && response.data.user.length > 0){
      swal("this card has already been saved to your account");
               this.ccBillingPostalCode = null
               this.ccBillingAddress = null
               this.ccBillingName = null
                this.showAddCardFormVisible = false

      }else{
    this.sendApprovalDataToMongo(email, approvalData)
      }
      } catch (err) {
               swal("Error", "Something Went Wrong", "error");
        console.log(err);
      }
    },
  sendApprovalDataToMongo(email, approvalData){
      console.log('send approval ')
      console.log(email, approvalData)
    let infoForPay = {
          approvalData: approvalData,
         email: email
        }
    let infoForPayStringify = infoForPay      
     this.$http
        .post("/credit/creditsavemongo", infoForPayStringify)
        .then((response) => {
            this.ccBillingPostalCode = null
            this.ccBillingAddress = null
            this.ccBillingName = null
            this.showAddCardFormVisible = false
            this.setPrimaryIfOnlyOne(email)
            this.getCreditCards();
        })
        .catch((e) => {
          console.log("errors");
          console.log(e);
        });
  },



    cippaybuttoncreditsave() {

      let self = this;
      this.getCreditSaveToken().then(function (transactionToken) {
        emergepay.open({
          transactionToken: transactionToken,
          onTransactionSuccess: function (approvalData) {
            console.log("Approval Data", approvalData);
            emergepay.close();
            console.log('proceeed with order now you have a transaction');




          },
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);
            console.log('proceeed with order now you have a transaction');
            // console.log('transasction success')

          },
          onTransactionCancel: function () {
            console.log("transaction cancelled!");
          },
        });
      });
    },
    getCreditSaveToken() {
      let self = this;
      let dataToSend = {
      billing:{
        billing_name: this.ccBillingName,
        billing_address: this.ccBillingAddress,
        billing_postal_code: this.ccBillingPostalCode
      }
      }


      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "https://nadi-mama-backend.herokuapp.com/order/start-credit-save",
          //url: "http://localhost:4000/order/start-credit-save",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(dataToSend),
        })
          .done(function (data) {
            if (data.transactionToken) resolve(data.transactionToken);
            else reject("Error getting transaction token");
          })
          .fail(function (err) {
            reject(err);
          });
      });
    },


  },
  mounted() {
    this.getUser()

  },
};
</script>


<style lang="scss">
  @import '@/assets/styles/css/creditsaveform2.scss';
</style>


