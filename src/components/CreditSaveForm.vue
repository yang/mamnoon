<template>
  <div>
    <div class="container pad-yellow-background module-header">saved credit cards for {{emailAddress}}</div>
    <div class="container pad-yellow-background">
      <div class="row no-lr-margin">
        <div class="col-sm-6 no-lr-pad">
          <div class="save-button" v-if="!updateDelivery">
            <button class="sm-button" @click="cippaybuttoncreditsave">add new card</button>
            <div class="bg-modal-2" v-if="showAddCardFormVisible"></div>
            <div class="modal-2" v-if="showAddCardFormVisible">
              <div class="modalheader">
                add new card
                <div class="closeM" @click="showAddCardFormVisible = false"><CloseModalSm /></div>
              </div>
              <div class="modal-body">
                <label>name:</label>
                <input v-model="ccBillingName" />
                <label>billing address:</label>
                <input v-model="ccBillingAddress" />
                <label>postal code:</label>
                <input v-model="ccBillingPostalCode" />
                <br><br><br>
              </div>
            </div>
          </div>
        </div>
      <template v-if="savedCards && savedCards.length > 0">
        <div id="credit-save-table" class="col-12 col-lg-12 creditcards-list no-lr-pad">
          <table class="w100">
            <th class="w100 no-bot-pad">
              <td>
                <div>
                  number
                </div>
              </td>
              <td>
                <div>
                  expires
                </div>
              </td>
              <td>
                <div>
                  actions
                </div>
              </td>
            </th>
            <tr class="w100" v-for="card in savedCards" v-bind:key="card">
              <td>
                <span>
                  <span v-if="card.approvalData.accountCardType === 'VS'" class="visa-xs"></span>
                  <span v-else-if="card.approvalData.accountCardType === 'MC'" class="mastercard-xs"></span>
                  <span v-else-if="card.approvalData.accountCardType === 'JC'" class="jcb-xs"></span>
                  <span v-else-if="card.approvalData.accountCardType === 'DN'" class="dinersclub-xs"></span>
                  <span v-else-if="card.approvalData.accountCardType === 'DC'" class="discover-xs"></span>
                  <span v-else-if="card.approvalData.accountCardType === 'AX'" class="amex-xs"></span>
                  <span class="desktop">ends in</span>  {{card.approvalData.maskedAccount.replace('************','')}}
                  <br>
                </span>
              </td>
              <td>
                {{card.approvalData.accountExpiryDate.slice(0,2)}}/{{card.approvalData.accountExpiryDate.slice(2,4)}}
              </td>

              <td>
                <button class="sm-button fl-right hide-mob" @click="removeCreditCard(card._id,card.email)">remove</button>&nbsp;&nbsp;&nbsp;
                <button class="sm-button fl-right mr-10" v-if="!card.primary" @click="primaryCreditCard(card._id,card.email)">primary</button>
                <button class="sm-button disabled-b fl-right" v-else disabled style="pointer-events:none;">(primary)</button>
              </td>
            </tr>
          </table>
        </div>
      </template>
      <template v-else>
        <button class="mt10 fw mt20 sm-button disabled" style="border:0;padding: 10px 0;" disabled>no saved cards</button>
      </template>
      </div>
      <div class="row" style="display:none;">
        <pre>
          {{user}}
        </pre>
      </div>
    </div>  
  </div>
</template>


<script type="text/javascript">
import Submit from "@/components/svgIcons/Submit";
import Check from "@/components/svgIcons/Check";
import swal from "vue-sweetalert2";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";
export default {
  computed:{
    ccBillingNameValid(){
      if(this.ccBillingName == null){
        return false
      }else{
        return true
      }
    },
    ccBillingAddressValid(){
      if(this.ccBillingAddress == null){
        return false
      }else{
        return true
      }
    },
    ccBillingPostalCodeValid(){

      return /^\d{5}(-\d{4})?$/.test(this.ccBillingPostalCode);

 
    },
    ccSaveFieldsValid(){

      if(this.ccBillingNameValid && this.ccBillingAddressValid && this.ccBillingPostalCodeValid){
        return true
      }else{
        return false
      }



    },
       debouncedOnSubmit() {
   const submit = this.showAddCardForm
   return debounce(submit, 1000)
 },
    showAddCardForm(){
      if(this.showAddCardFormVisible === true){
        this.showAddCardFormVisible = false
      }else{
        this.showAddCardFormVisible = true
      }
    }
  },
  components: {
    Check,
    Submit,
CloseModalSm
  },
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
deliveryAddress: {
  name: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zip: ''
},
billingAddress: {
  name: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zip: ''
},
  preferredGiftCard: ""
    }
    },
props: ['emailAddress'],
  methods: {



    async primaryCreditCardTrue(id){

    try {

        let response = await this.$http.post("/credit/primarycreditcardtrue", {
          id
        });
console.log('response from true')
console.log(response)
         } catch (err) {
        console.log(err.response);
      }

 this.getCreditCards();

    },
    async primaryCreditCard(id,email){

    try {

        let response = await this.$http.post("/credit/primarycreditcardfalse", {
          id,
          email
        });
console.log('response from false')
console.log(response)
        this.primaryCreditCardTrue(id)

         } catch (err) {
        console.log(err.response);
      }






},
        async removeCreditCard(creditCardId,email){



    try {
      let response = await this.$http.post('/credit/deletecreditcard/', {
      creditCardId
      }) 
     
      console.log(response)
            this.setPrimaryIfOnlyOne(email)
 this.getCreditCards();
    } catch (err) {
               swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
      

    
    },
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
    setPrimaryIfOnlyOne(email){
      console.log('spio1')
        let self = this;
        let emailBody = {
          email
        }
      this.$http
        .post("/credit/setprimaryifonlyone", emailBody)
        .then((response) => {

          console.log(response)
          self.getCreditCards();
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

console.log('store card name and information')

    self.checkAndSend(self.emailAddress,approvalData)


   self.getCreditCards()
          },
          onTransactionFailure: function (failureData) {
            console.log("Failure Data", failureData);

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
          url: `${self.$http.defaults.baseURL}/order/start-credit-save`,
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
    async checkFormBilling() {
          this.updateBilling = false
        try {
        let response = await this.$http.post("/user/submitbillingaddress", {
          email: this.emailAddress,
          billingAddress: this.billingAddress
          });
 console.log(response)
          this.savedBillingAddress = response.data.user.billingAddress
          // this.updateBilling = false

       
         } catch (err) {
        console.log(err.response);
      }
        this.getUser()
    },

async checkForm() {
 this.updateDelivery = false
        try {
        let response = await this.$http.post("/user/submitdeliveryaddress", {
          email: this.emailAddress,
          deliveryAddress: this.deliveryAddress
          });
this.savedDeliveryAddress = response.data.user.deliveryAddress
         } catch (err) {
        console.log(err.response);
      }

 this.getUser()
    },


        getUser() {
let self = this
      this.$http
        .get("/user/email/" + this.emailAddress)
        .then(function (response) {
          let userInfo = response.data;
          // console.log(userInfo);
          self.user = userInfo
self.cardNumberInput = userInfo.user.giftcard
self.preferredGiftCard = userInfo.user.giftcard
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getCreditCards() {
      // console.log('get credit cards')
      try {
        let response = await this.$http.get("/credit/getcreditcards/" + this.emailAddress);
        // console.log(response.data)
        this.savedCards = response.data.usercreditcards
 
         } catch (err) {
        console.log(err.response);
      }

    },



  },
  mounted() {
    this.getUser()
        this.getCreditCards()

  },
};
</script>


<style lang="scss">
  @import '@/assets/styles/css/creditsaveform.scss';
</style>


