<template>
<div>
<div class="container pad-yellow-background module-header">
dont use add a giftcard for {{emailAddress}}
  </div>
 <div class="container nav-acc-header pad-yellow-background">
<div class="row">
<div class="col-6 col-lg-3">
<form id="app" @submit.prevent="checkForm">

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <p>
    <label for="name">Number</label>
    <br>
    <input
      id="title"
      v-model="messageBody.number"
      type="text"
      name="title"
      class="cardnumber"
    >
  </p>
  <p>
    <button class="buttonStyle" type="submit" value="Submit">
        <Submit />
      </button>
  </p>

</form>

</div>
<div class="col-6 col-lg-9 giftcards-list">
giftcards: 
<br>
<ul v-if="giftcards">
<li class="giftcard-item" v-for="giftcarditem in giftcards.slice().reverse()" :key="giftcarditem._id">
<b>{{giftcarditem.number}}</b>&nbsp;&nbsp;&nbsp;&nbsp;
<button @click="removeGiftCard(giftcarditem._id,number)">remove</button>
</li>
</ul>
</div>
</div>
</div>
</div>
</template>
<script type="text/javascript">
import Submit from "@/components/svgIcons/Submit";
export default {
  components:{
    Submit
  },
name: 'giftcardform',
data () {
return {
    errors: [],
    giftcards: null,
    messageBody: {
      number: null,
      email: this.emailAddress
    }
    }
  },
props: ['emailAddress'],
methods: {
    async checkForm() {
      try {
        let response = await this.$http.post("/user/submitgiftcard", this.messageBody);
        // console.log(response.data.user.giftcards);
        console.log(response.data)
        this.giftcards = response.data.user.giftcards

        this.messageBody = {
          number: null
        }
         } catch (err) {
        console.log(err.response);
      }
    },
    async getGiftCards() {

      try {
        let response = await this.$http.get("/user/getgiftcards/" + this.emailAddress);


       console.log(response.data)

        this.giftcards = response.data.usergiftcards


 
         } catch (err) {
        console.log(err.response);
      }

    },
    async removeGiftCard(giftcardId,userEmail){

      console.log(giftcardId)


    try {
      let response = await this.$http.post('/api/user/deletegiftcard/', {
      giftcardId,
      userEmail
      }) 
     
      console.log(response)

    this.getGiftCards();
    } catch (err) {
               swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }

    },
    handler(){
     console.log('page refresh')
          }
},
mounted () {
  console.log('mounted')
  this.getGiftCards()
},

}
</script>

<style lang="scss">
li{
// font-size: 10px;

 p{
  margin-bottom: 0;
}
}



.giftcards-list{
ul{
  max-height: 400px;
  border: 1px solid black;
  overflow: scroll;
  width: 90%;
  margin-top: 20px;
  padding-bottom: 40px;
  padding-top: 20px;
}
}

.module-header{
  width: 100%;
  display: block;
  background:#F05D5B;
  text-align: center;
  color: #fff367;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 0;


  font-size:24px;
font-weight:500;
}


.buttonStyle{
    border: 0;
    background: transparent;
    outline: none;
}


.giftcard-item{
  // margin-bottom: 10px;
}

.cardnumber{
    padding: 10px 10px 14px 10px;
    border: 0;
    border-radius: 0;
    font-weight: bold;
}

</style>