<template>
  <div>
    <div class="container pad-yellow-background module-header" style="display:none;">your giftcard</div>
    <div class="container pad-yellow-background pd50" style="display:none;">
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
    <a target="_blank" href="https://ecommerce.custcon.com/Purchase/Select?c=364cfc03-d428-44bf-b814-1efbdcaed08d">buy new card</a>
      </div>
      <div class="button-box">
        <a
          href="https://ecommerce.custcon.com/Recharge_Login.aspx?c=364cfc03-d428-44bf-b814-1efbdcaed08d"
          target="_blank"
        >update balance
        </a>
      </div>

      </div>
    </div>
<div>
<div class="container pad-yellow-background module-header">
add a giftcard for {{emailAddress}}
  </div>
 <div class="container nav-acc-header pad-yellow-background overflow-x-hidden">
<div class="row">
<div class="col-12 col-lg-12">
<form id="app" @submit.prevent="checkForm">
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <p>
    <input
      id="title"
      v-model="messageBody.number"
      type="number"
      name="title"
      placeholder="add giftcard"
      class="add-giftcard-field"
    >
    &nbsp;&nbsp;&nbsp;
    <button class="sm-button add-giftcard-button" type="submit" value="Submit">
   submit
      </button>
    <a href="https://ecommerce.custcon.com/Recharge/account?c=364cfc03-d428-44bf-b814-1efbdcaed08d" target="_blank" class="sm-button add-giftcard-button update-balance">
  update card balance
      </a>
  </p>
</form>
</div>
</div>
<div class="row">
<div id="gift-card-table" class="col-12 col-lg-12 giftcards-list">

<table class="w100" v-if="giftcards">


<th class="w100"><td><div>number</div></td><td><div>balance</div></td><td><div class="text-right-mob" style="text-align: right;padding-right: 10px;">actions</div></td></th>
    <tr class="giftcard-item w100" v-for="(giftcarditem, index) in giftcards" :key="giftcarditem._id">
      <td :class="{primary: giftcarditem.number === cardNumberInput}"><div><b>{{giftcarditem.number}}</b></div></td>
     <td :class="{primary: giftcarditem.number === cardNumberInput}"><div>
        <button class="sm-button" v-if="!giftcarditem.balance" @click="lookupAddBalance(giftcarditem.number,index)"><span class="hide-mob">view&nbsp;</span>balance</button>
        <span v-else>{{giftcarditem.balance}}</span>
      </div></td>
 <td :class="{primary: giftcarditem.number === cardNumberInput}">
<div>

        <!-- {{giftcarditem}} -->
        <button class="sm-button fl-right hide-mob" @click="removeGiftCard(giftcarditem._id,number)">remove</button>
        &nbsp;&nbsp;&nbsp;
        <button class="sm-button fl-right mr-10" v-if="giftcarditem.number !== preferredGiftCard" @click="primaryGiftCard(giftcarditem,index)">set primary</button>
        <button v-else class="sm-button disabled-b fl-right" disabled>(primary)</button>

      </div></td>
    </tr>
</table>
</div>
</div>
</div>
</div>
  </div>
</template>


<script type="text/javascript">
import Submit from "@/components/svgIcons/Submit";
import Check from "@/components/svgIcons/Check";
import swal from "vue-sweetalert2";
export default {
  components: {
    Check,
    Submit
  },
  data() {
    return {
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

  computed: {
    // a computed getter
    giftcardArray: function () {
      let result = this.giftcards.map(({ number }) => number)
        return result
      }
  },
  watch: {	
    giftcards(oldgiftcards, newgiftcards){
      this.giftcards = oldgiftcards
    },
    cardNumberInput(oldcardNumberInput, newcardNumberInput){
// console.log(oldNumberInput)
// console.log(newcardNumberInput)
// console.log(this.cardNumberInput)

this.lookupBalance()

    }
  },
props: ['emailAddress'],
  methods: {
async primaryGiftCard(giftcarditem,index){
  giftcarditem.email = this.emailAddress
    try {

        let response = await this.$http.post("/user/primarygiftcard", giftcarditem);
        this.cardNumberInput = response.data.doc.giftcard
        this.preferredGiftCard = response.data.doc.giftcard
        this.lookupBalance()


         } catch (err) {
        console.log(err.response);
      }





},
    async checkForm() {



if(this.messageBody.number != null){

let msgString = this.messageBody.number.toString();
var n = this.giftcardArray.includes(msgString);

console.log(n)




if(!n){
    var regex = /^\d{16}$/;
    if(regex.test(this.messageBody.number) === false){
   


       this.$swal({ 
           text: 'must be 16 digits'
          });


    }else{


      try {
        let response = await this.$http.post("/user/submitgiftcard", this.messageBody);
         this.giftcards = response.data.user.giftcards
        this.messageBody = {
          number: null
        }
         } catch (err) {
        console.log(err.response);
      }

     
    }
    }else{
        this.$swal({ 
           text: 'you have already added this number your list'
          });
          
          this.messageBody.number = null
    }
}else{
  console.log(null)
}
    
    },
    async getGiftCards() {
      try {
        let response = await this.$http.get("/user/getgiftcards/" + this.emailAddress);
        // console.log(response.data)
        this.giftcards = response.data.usergiftcards
 
         } catch (err) {
        console.log(err.response);
      }

    },
    async removeGiftCard(giftcardId,userEmail){

    console.log(giftcardId)

    try {
      let response = await this.$http.post('/user/deletegiftcard/', {
      giftcardId,
      userEmail
      }) 
     
      console.log(response)

    this.getGiftCards();
    } catch (err) {



        this.$swal({ 
           text: 'Error'
          });
               
        console.log(err.response);
      }
      
      this.cardNumberInput = ''
    
    },
    handler(){
     console.log('page refresh')
          },
    async lookupBalance() {
      let giftcardLookup = await this.$http.post("/user/lookupgiftcard", {
        cardNumber: this.cardNumberInput,
      });
      let giftcardResponse = giftcardLookup.data;

      this.currentBalance =
        giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0];
    },
    async lookupAddBalance(number,index) {

      // this.giftcards[index].balance = number

      let giftcardLookup = await this.$http.post("/user/lookupgiftcard", {
        cardNumber: number
      });
     let giftcardResponse = giftcardLookup.data;
    this.$set(this.giftcards[index], 'balance', giftcardResponse.resSendData.Responses[0].SvInquiry[0].CurrentBalance[0])




    },
    useBalance() {
      let self = this;
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



    }




  },
  mounted() {
    this.lookupBalance()
    this.getGiftCards()
    this.getUser()

  },
};
</script>


<style lang="scss">
  @import '@/assets/styles/css/giftcardmodule.scss';
</style>


