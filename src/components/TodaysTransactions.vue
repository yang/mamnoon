<template>
<div>
<!--here-->
<div class="nav-wrap2">

<div class="fixed-nav">

    <div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header2">
    <div class="container">

<!--here-->
      <DashBoardLogo v-if="currentView === 'empty'" />
      <MamnoonLogo :height="80" v-if="currentView === 'Mamnoon'" />
  <StreetLogo :height="80" v-if="currentView === 'Mamnoon Street'" />


    <a v-if="currentView === 'Mamnoon Street'|| currentView === 'empty'" @click="setCurrentView('Mamnoon')"><u>mamnoon</u></a>&nbsp;&nbsp;
    <a v-if="currentView === 'Mamnoon'|| currentView === 'empty'" @click="setCurrentView('Mamnoon Street')"><u>mamnoon street</u></a>&nbsp;&nbsp;
    <a v-if="currentView === 'Mamnoon Street'|| currentView === 'Mamnoon'" @click="setCurrentView('empty')"><u>both</u></a>&nbsp;&nbsp;


 <a @click="showTotals()"><u><span v-if="showDailyTotals">hide</span><span v-else>show</span> sales</u></a>



           <a  @click="logUserOut"><u>Logout</u></a>  &nbsp;&nbsp;

    <a  @click="showAllOrders()"><u>all orders</u></a>&nbsp;&nbsp;&nbsp;

 <a  @click="showTodaysOrders()"><u>todays orders</u></a>&nbsp;&nbsp;&nbsp;


<!---here-->


</div>




    </div>
<div class="container">
<div class="row">



<div class="thirds" v-bind:class="{ yellow: orderfilter === 'open' }" @click="orderFilter('open')">

open orders ({{openOrders}})

</div>
<div class="thirds" v-bind:class="{ yellow: orderfilter === 'closed' }" @click="orderFilter('closed')">
closed orders ({{closedOrders}})



</div>
<div class="thirds" v-bind:class="{ yellow: orderfilter === '' }" @click="orderFilter('')">
all orders ({{orderAmount}})
</div>

</div>
</div>
    </div>











</div>

<!--here-->



      <div class="container nav-acc-header pad-yellow-background">
  <div class="container pad-yellow-background">



<div v-if="modalVisible" class="modalTransaction">
<div class="container">
<div class="fl-right pointerClose" @click="hideTransactionModal()">
<CloseModalRed />



</div>



<TransactionModal :order="modalContent" />

</div>
</div>


<div class="datepicker fl-right" style="position:relative;">
<button class="btn-nadi fl-right clearDateButton" v-if="dateSelected" @click="clearTheDate()">x</button>
<datepicker ref="myDatePicker" :clearable="true" @selected="selectTransactionDate" :placeholder="'click here to select date'">
</datepicker> </div>


    <h1><span class="fl-right">orders: <template v-if="orderhistory">{{ orderhistory.user.length }}</template></span>&nbsp;    

<input type="text" v-model="search" placeholder="search by name"/>  </h1>





<div v-if="showDailyTotals === true" class="dailyTotal">


<template v-if="currentView === 'Mamnoon Street'|| currentView ==='empty'">
<b>mamnoon street totals:</b><br>pretotal: ${{ dailyTotal(orderhistory).street.pretotal | showToFixed}}<br>
tips: ${{ dailyTotal(orderhistory).street.tips | showToFixed}}<br>
</template>
<template v-if="currentView === 'Mamnoon'|| currentView ==='empty'">
<b>mamnoon totals:</b><br>pretotal: ${{ dailyTotal(orderhistory).mamnoon.pretotal | showToFixed}}<br>
tips: ${{ dailyTotal(orderhistory).mamnoon.tips | showToFixed}}<br>
</template>

<input style="padding: 2px 10px;margin: 10px 0;" v-model="sendEmail" placeholder="email" />
<button style="margin-left:5px;"  v-if="validEmail(sendEmail)" @click="sendTotals(dailyTotal(orderhistory),sendEmail)">send</button><button style="background-color: #ddd;color:#bbb;margin-left:5px;"  v-else disabled>send</button>
</div>











<template v-if="orderhistory">
      <div
    v-if="containsFirstName(order.orderInfo.fulfillment_info.customer) || containsLastName(order.orderInfo.fulfillment_info.customer)"
      v-for="order in orderhistory.user.slice().reverse()"
      :key="order._id"
    >

<!--here-->
<!--// start filter-->
<div v-if="showFilter(order.timeClosed)" class="position-relative">
<!--here-->
      <template v-if="currentView === order.orderInfo.restaurant || currentView === 'empty'">
    <div class="pointer"> 
<div class="third">
       <h2 style="position:initial;font-weight: 600;"> {{firstLast(order.orderInfo.fulfillment_info.customer) | truncate(16, '...')}}</h2>
</div>
<div class="third">
        {{ order.orderInfo.restaurant }}<br>
        <template v-if="order.timeClosed">
         <b>Closed</b>
          <!--{{ timeClosedMoment(order.timeClosed) }}-->
        </template>
        <template v-else>
        <b>Open</b>
        </template>
        <template v-if="order.orderInfo.preorder">
          <br>
          scheduled: {{ order.orderInfo.scheduled_time | formatDate2 }}
        </template>
        <br />
        Order Placed: {{ order.orderInfo.time_placed | formatDate2 }}
        <br />
        <template v-if="order.void">
          VOID
        </template>
     
<template v-if="order.orderInfo.preorder">


<b>preorder</b> 




<template v-if="order.cancelled">
(cancelled)
</template>
<template v-else>

<template v-if="cancellable(order.orderInfo.scheduled_time)">
<a @click="cancelPreorder(order._id)">&nbsp;<u>cancel</u></a>
</template>
</template>


</template>
<br><br>
<a class="btn-nadi text-white" @click="viewModal(order)">view</a>
</div>
<div class="fifth">
<h1 style="position:initial;font-weight: 600;">
        ${{ order.orderInfo.charges.total | showToFixed }}</h1>

   <span class="itemAmount">{{ order.orderInfo.charges.items.length }} item<span v-if="order.orderInfo.charges.items.length>1">s</span></span>
        <br />
</div>
</div>

      </template>

<!--here-->
<!--// end filter-->
</div>
<!--here-->

    </div>
</template>



  </div>
  </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

import moment from "moment";
import tz from "moment-timezone";

import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalMed from "@/components/svgIcons/CloseModalMed";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";


import DashBoardLogo from "@/components/svgIcons/DashBoardLogo";



import Nav4 from "@/components/Nav4";

import TransactionModal from "@/components/TransactionModal";
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo"

import StreetLogo from "@/components/svgIcons/StreetLogo"

export default {
  data() {
    return {
      orderAmount:0,
      openOrders:0,
      closedOrders: 0,
      dateSelected: false,
      orderfilter: '',
      sendEmail: '',
      showDailyTotals: false,
      search: '',
      modalVisible: false,
      modalContent: {},
      dateNow: Date.now(),
      orderhistory: null,
      response: null,
      currentView: "empty",
    };
  },
  components:{
    Datepicker,
    DashBoardLogo,
    Nav4,
    TransactionModal,
    CloseModal,
    CloseModalMed,
    CloseModalRed,
    CloseModalSm,
    MamnoonLogo,
    StreetLogo
  },
  name: "OrderHistory",
  props: ["currentUser"],
  filters: {
    formatDate2(value) {
      if (value) {
        let order = moment(String(value));
        return order.tz("America/Los_Angeles").format("lll");
      }
    },
        formatDate(value) {
      if (value) {
        let order = moment(String(value));
        return order.tz("America/Los_Angeles").format("LLLL");
      }
    },

    showToFixed: function(value) {
      let decvalue = value / 100;

      return decvalue.toFixed(2);
    },
  },


watch:{
    orderhistory:{
handler(val){
console.log('12');








this.openOrders = this.orderhistory.user.filter(order => order.status === "Open").length;
this.closedOrders = this.orderhistory.user.filter(order => order.status === "Closed").length;


console.log(this.orderhistory.user.filter(order => order.status === "Open").length);
console.log(this.orderhistory.user.filter(order => order.status === "Closed").length);
this.orderAmount = this.orderhistory.user.length;

          }, deep: true
    }



},
  methods: {
clearTheDate(){

this.$refs.myDatePicker.clearDate()
this.dateSelected = false;
  this.retrieveTodaysOrders();

},
selectTransactionDate(r){

this.retrieveOrdersByDate(r);
// this.$refs.myDatePicker.clearDate()
this.dateSelected = true;


},
    cancellable(scheduled_time){

if(moment(scheduled_time).valueOf() - moment().valueOf() < 2700000){
  return false
}else{
  return true
}






    },
cancelPreorder(id){


let self = this;

  this.$swal({ 
      title: "cancel this order?",
    showDenyButton: true,
    denyButtonText: `Cancel`,
    confirmButtonText: `Confirm`
  }).then((confirmed) => {
    if (confirmed) {

      if(confirmed.isConfirmed){
  

    self.$http
            .post(`/order/cancelpreorder/${id}`)
            .then((response) => {
              console.log(response);
            })
            .catch((e) => {
              // this.errors.push(e);
              console.log("errors");
              console.log(e);
            });

    self.retrieveTodaysOrders();









      }
    } else {
    }
  });









},
showFilter(f){




if(f && this.orderfilter === 'closed'){
return true;
}else if(!f && this.orderfilter === 'open'){
  return true;
}else if(this.orderfilter === ''){
  return true;
}else{
  return false;
}


},
    orderFilter(param){
this.orderfilter = param;
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendTotals(dailyTotal,sendEmail){


    this.$http
            .post("/order/sendtotals", {
              email: sendEmail,
              dailyTotal
            })
            .then((response) => {
              console.log(response);

            })
            .catch((e) => {
              // this.errors.push(e);
              console.log("errors");
              console.log(e);
            });


this.sendEmail = '';
    },
    showTotals(){
      this.showDailyTotals = !this.showDailyTotals
    },
    dailyTotal(orders){


      let totals = {
          street: {
            pretotal: 0,
            tips: 0
          },
          mamnoon: {
            pretotal: 0,
            tips: 0
          }
      };


      for(let i = 0; i < orders.user.length; i++){

        if(orders.user[i].orderInfo.restaurant === 'Mamnoon Street'){

        totals.street.pretotal = totals.street.pretotal + orders.user[i].orderInfo.charges.preTotal;
        totals.street.tips =  totals.street.tips + orders.user[i].orderInfo.charges.tip.amount;

        }else{
        totals.mamnoon.pretotal = totals.street.pretotal + orders.user[i].orderInfo.charges.preTotal;
        totals.mamnoon.tips =  totals.street.tips + orders.user[i].orderInfo.charges.tip.amount;

        }
      }
      return totals;

    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
containsLastName(params){
if(this.search===''){
  return true
}else{

  if(params.last_name){


if(params.last_name.replaceAll(" ","").includes(this.search.replaceAll(" ",""))){
  return true
}else{
  return false
}
  }
}
},
containsFirstName(params){
if(this.search===''){
  return true
}else{
  if(params.first_name){
if(params.first_name.replaceAll(" ","").includes(this.search.replaceAll(" ",""))){
  return true
}else{
  return false
}
  }
}
},
    firstLast(name){
        return name.first_name + ' ' + name.last_name;
    },
hideTransactionModal(){
this.modalVisible = false;
},
viewModal(order){


this.modalVisible = true;
this.modalContent = order;


},
    isToday(input){
    const today = new Date()
    const date = new Date(input)
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    },
    hasTransmissionId(order) {
      if (order.TransmissionID !== undefined) {
        // console.log(order.TransmissionID);

        return true;
      } else {
        return false;
      }
    },
    timeClosedMoment(timeClosed) {
      // return moment.unix(timeClosed).format('MMMM Do YYYY HH:mm A');

      return moment(timeClosed).format("MMMM Do YYYY HH:mm A");
    },

    voidValid(order) {
      // 1400000 is about 24 minutes
      if (
        Date.now() > order.timeClosed + 1400000 ||
        order.timeClosed === undefined
      ) {
        return false;
      } else {
        return true;
      }
    },

    setCurrentView(param) {
      this.currentView = param;
    },
    toggleOrder(id) {
      let drawer = document.getElementById("order-" + id);

      // console.log(document.getElementById('order-'+id))

      if (drawer.classList.contains("hidden")) {
        // do some stuff

        drawer.classList.remove("hidden");
      } else {
        drawer.classList.add("hidden");
      }
    },
    retrieveOrdersByDate(date){


   
      let self = this;
      this.$http.get(`/order/retrieveordersbydate/${moment(date).tz("America/Los_Angeles").toISOString()}`).then(function(response) {
        self.orderhistory = response.data;
      });


    },
    retrieveTodaysOrders() {
   
      let self = this;
      this.$http.get(`/order/todaysorderhistory/`).then(function(response) {
        self.orderhistory = response.data;

      });

    },
        retrieveOrders() {
      let self = this;
      this.$http.get(`/order/orderhistory/`).then(function(response) {
        self.orderhistory = response.data;








      });







    },

    showAllOrders(){
this.retrieveOrders();

    },

        showTodaysOrders(){
this.retrieveTodaysOrders();
    },
    issueTokenizedReturn(
      uniqueTransIdString,
      amount,
      taxRate,
      cartId,
      orderId
    ) {
      let tax = amount * taxRate;
      let amountToCalcWithTax = amount + tax;

      // console.log(amountToCalcWithTax);

      let amountDiv100 = amountToCalcWithTax / 100;
      let amountToSend = amountDiv100.toFixed(2).toString();

      // console.log(amountDiv100.toFixed(2).toString());
      // console.log(amountToSend);

      this.$http
        .post("/order/issue-tokenized-return", {
          uniqueTransId: uniqueTransIdString,
          amount: amountToSend,
        })
        .then((response) => {
          // console.log(response);

          this.$http
            .post("/order/update-refunded-items-mongo", {
              cartId: cartId,
              orderId: orderId,
            })
            .then((response) => {
              // console.log(response);

              this.retrieveTodaysOrders();
            })
            .catch((e) => {
              // this.errors.push(e);
              console.log("errors");
              console.log(e);
            });
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },
    issueVoid(uniqueTransIdString, data) {
      // console.log(uniqueTransIdString);
      this.$http
        .post("/order/issue-void", {
          uniqueTransId: uniqueTransIdString,
          data,
        })
        .then((response) => {
          console.log(response);

          this.voidByTransId(uniqueTransIdString, data);
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },
    voidByTransId(uniqueTransIdString, data) {
      // console.log(uniqueTransIdString);
      this.$http
        .post("/order/void-transid-mongo", {
          uniqueTransId: uniqueTransIdString,
          data,
        })
        .then((response) => {
          console.log(response);

          // location.reload();
          this.retrieveTodaysOrders();
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },
  },
  mounted() {


    moment().valueOf();

    this.retrieveTodaysOrders();
  },
};
</script>

<style lang="scss">
.position-relative {
  h1 {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.no-left-pad {
  padding-left: 0;
}

pre.hidden {
  display: none;
}
.line-link {
  cursor: pointer;
}

.modalTransaction{
    position: fixed;
    width: 100%;
    height: 100vh;
    // background: green;
    background: white;
    top: 92px;
    left: 0;
    z-index: 10000;
    overflow: scroll;
    padding-bottom: 200px;
    padding-top: 40px;
}


.itemAmount{
      font-size: 2.2rem;
}


.pointerClose{
  cursor: pointer;
}


.dailyTotal{
  text-align: right;
  margin: 10px;
}



.btn-nadi.flex{
  display:flex;
  width: 200px;
}


a{
  cursor:pointer;
}


.row .thirds{
  width: 33.33%;
  text-align: center;
  padding: 10px 0;
  // height: 40px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background-color: white;
border-top: 0;
font-weight: bold;
font-size: 18px;
&.yellow,
&:hover{
  background-color: yellow;


}



cursor:pointer;
  &:first-child,
    &:nth-child(2){
    border-right: 0;
  }
}


.text-white{
  color: #ffffff;
}

.datepicker input{
  padding: 10px;
  margin-left: 10px;
  position: relative;
}

.clearDateButton{
  position: absolute;
  right: 5px;
  z-index: 10;
  top: 6px;
  }





</style>
