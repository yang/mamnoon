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

open orders

</div>
<div class="thirds" v-bind:class="{ yellow: orderfilter === 'closed' }" @click="orderFilter('closed')">
closed orders



</div>
<div class="thirds" v-bind:class="{ yellow: orderfilter === '' }" @click="orderFilter('')">
all orders
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


    <h1><span class="fl-right">orders: {{ orderhistory.user.length }}</span>&nbsp;    

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
  methods: {
clearTheDate(){




this.$refs.myDatePicker.clearDate()
this.dateSelected = false;
  this.retrieveTodaysOrders();
},
selectTransactionDate(r){
console.log(r);

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


      console.log('retrieve todays orders');
      let self = this;
      this.$http.get(`/order/retrieveordersbydate/${moment(date).tz("America/Los_Angeles").toISOString()}`).then(function(response) {
        self.orderhistory = response.data;
      });


    },
    retrieveTodaysOrders() {
      console.log('retrieve todays orders');
      let self = this;
      this.$http.get(`/order/todaysorderhistory/`).then(function(response) {
        self.orderhistory = response.data;
      });

      // this.orderhistory = {user: [{"_id":"61ba3c3cf9eabb00164eb6d0","sandbox":true,"timeClosed":1639629704070,"email":"Zachspriggs@gmail.com","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"13.23","amountBalance":"","amountProcessed":"13.23","amountTaxed":"0.00","amountTipped":"0.00","approvalNumberResult":"305313","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"Zach spriggs","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"3ba498f2-089d-4e74-ac7d-2e2e567732d2","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"3b73ba6f9e604390879d74b523668beb-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639595048281,"tipSelected":0,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"Zach spriggs","billing_address":"4417 42nd Ave sw ","billing_address_city":"Seattle ","billing_address_state":"WA","billing_postal_code":"98116"},"id":"4djz29dajpp_3vobvdjxi57_y7gdkgvbzk","preorder":false,"scheduled_time":null,"time_placed":"2021-12-15T19:02:13.560Z","confirmation_code":"mamnoon-ckqszfwzdgn","charges":{"total":1323,"preTotal":1200,"fees":0,"taxes":123,"tip":{"amountOptions":[0,216,264,300,0],"amount":0,"payment_type":"Generic Online Ordering Integrated"},"items":[{"name":"Chicken Shawarma","cartId":"m685djwynni_epvjmb3e1y4_2mt1w1xdyor","item_id":"50da5101-7e68-4e44-bf30-1d4ee9644357","price":1200,"price_cents":1200,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"sides":[],"timing_mask":null,"images":{"online_ordering_menu":{"main":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"}},"item_object":{"id":"50da5101-7e68-4e44-bf30-1d4ee9644357","name":"Chicken Shawarma","price":"12.0","price_cents":1200,"description":"shawarma spiced chicken, fries, pickled pepper, pickled turnips, romaine, tomato, garlic sauce ","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"images":{"online_ordering_menu":{"main":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"}},"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[{"id":"fb29d10d-22e1-4556-ae14-e0ea8cdb065b","metadata":{"image_path":"v1596827949/wgz8xmudq2hnfurmbeu4.jpg","curated":false,"url":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"},"url":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"}],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T19:02:13.560Z","customer":{"email":"Zachspriggs@gmail.com","phone":"3604772535","first_name":"Zach","last_name":"Spriggs"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Generic Online Ordering Integrated","amount":1323}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"4djz29dajpp_3vobvdjxi57_y7gdkgvbzk","status":"Closed","orderPosted":false,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"61ba5d6af9eabb00164eb799","sandbox":true,"timeClosed":1639629474797,"email":"info@mamnoonrestaurant.com","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"20.95","amountBalance":"","amountProcessed":"25.13","amountTaxed":"0.00","amountTipped":"4.18","approvalNumberResult":"306173","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"Mamnoon LLC","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"e15a72d7-7e70-4cbd-a017-a7fbd053212b","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"a7e12a75e5d842a491d39f9a87f5840b-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639603551150,"tipSelected":2,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"Mamnoon LLC","billing_address":"1508 Melrose Ave","billing_address_city":"Seattle","billing_address_state":"WA","billing_postal_code":"98122"},"id":"twk0hh8rlt_3qw1hdqy4s2_653xs4lny6h","preorder":false,"scheduled_time":null,"time_placed":"2021-12-15T21:24:22.944Z","confirmation_code":"mamnoon-bzj2nod9uog","charges":{"total":2513,"preTotal":1900,"fees":0,"taxes":195,"tip":{"amountOptions":[0,342,418,475,0],"amount":418,"payment_type":"Nadi Mama"},"items":[{"name":"Lamb Shawarma ","cartId":"2atrnakcf1q_1uu2xxgfdse_d66kkre56g","item_id":"ceef0338-9454-409e-b9d9-79a1fe08b4a6","price":1400,"price_cents":1400,"quantity":1,"instructions":"","modifiers":[{"id":"44ccdbd5-c3c4-436f-ab18-9ef36962f4ee","modifier_group_id":"7f957234-df3f-4ff9-a145-8f09087a9873","price":100,"name":"+ HARRA"}],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"sides":[],"timing_mask":null,"images":{"online_ordering_menu":{"main":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"}},"item_object":{"id":"ceef0338-9454-409e-b9d9-79a1fe08b4a6","name":"Lamb Shawarma ","price":"14.0","price_cents":1400,"description":"shawarma spiced lamb, fries, romaine, pickled turnips, pickled peppers, tomato, garlic sauce","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"images":{"online_ordering_menu":{"main":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"}},"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[{"id":"18582065-70bd-44e0-911f-9f51d525c90c","metadata":{"image_path":"v1596829122/xqgerjkjqji4fcbwhiss.jpg","curated":false,"url":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"},"url":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"}],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}},{"name":"MINT LEMONADE ","cartId":"p8pg26kxi7_r1ympcu7l0o_1bpd0ykde2r","item_id":"7f90b6bc-b66c-447b-a668-f86aa48690a7","price":400,"price_cents":400,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":[],"sides":[],"timing_mask":null,"images":"","item_object":{"id":"7f90b6bc-b66c-447b-a668-f86aa48690a7","name":"MINT LEMONADE ","price":"4.0","price_cents":400,"description":"","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[],"modifier_group_ids":[],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T21:24:22.944Z","customer":{"email":"info@mamnoonrestaurant.com","phone":"2069069606","first_name":"jackie","last_name":"stovall"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Nadi Mama","amount":2513}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"twk0hh8rlt_3qw1hdqy4s2_653xs4lny6h","status":"Closed","orderPosted":false,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"61ba5f7bf9eabb00164eb79a","sandbox":true,"timeClosed":1639629474805,"email":"joe.waine@gmail.com","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"0.55","amountBalance":"","amountProcessed":"0.55","amountTaxed":"0.00","amountTipped":"0.00","approvalNumberResult":"306212","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"joseph p waine","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"d3b9df09-5a3e-4343-b0bc-0a8194d508e5","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"41529d1dd0544ac5850d7562015119cc-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639604077550,"tipSelected":4,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"joseph p waine","billing_address":"1745 12th Avenue South #2","billing_address_city":"Seattle","billing_address_state":"WA","billing_postal_code":"98222"},"id":"jula40uwkv_wo603ya8j6e_6fqmli0zki7","preorder":false,"scheduled_time":null,"time_placed":"2021-12-15T21:30:20.691Z","confirmation_code":"mamnoon-ibgeefq22r","charges":{"total":55,"preTotal":50,"fees":0,"taxes":5,"tip":{"amountOptions":[0,9,11,12.5,0],"amount":0,"payment_type":"Nadi Mama"},"items":[{"name":"Za'atar Mayo","cartId":"acd7ixpvag_efim2u30e4h_4ium96luvtd","item_id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","price":50,"price_cents":50,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":[],"sides":[],"timing_mask":null,"images":"","item_object":{"id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","name":"Za'atar Mayo","price":"0.5","price_cents":50,"description":"","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[],"modifier_group_ids":[],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T21:30:20.691Z","customer":{"email":"joe.waine@gmail.com","phone":"4254429308","first_name":"TEST","last_name":"ORDER"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Nadi Mama","amount":55}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"jula40uwkv_wo603ya8j6e_6fqmli0zki7","status":"Closed","orderPosted":false,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"61ba602df9eabb00164eb79b","sandbox":true,"timeClosed":1639629483309,"email":"JOE.WAINE@GMAIL.COM","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"0.55","amountBalance":"","amountProcessed":"0.55","amountTaxed":"0.00","amountTipped":"0.00","approvalNumberResult":"306218","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"joseph p waine","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"54e44432-3e8e-4146-8f3e-153212dc382d","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"2633f7146e7c4984976802962b2df877-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639604265385,"tipSelected":4,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"joseph p waine","billing_address":"1745 12th Avenue South #2","billing_address_city":"Seattle","billing_address_state":"WA","billing_postal_code":"98222"},"id":"vfxcv091ax_dfd9f2rlwyj_mf4xfto80up","preorder":true,"scheduled_time":"2021-12-15T21:45:00.000Z","time_placed":"2021-12-15T21:36:30.321Z","confirmation_code":"mamnoon-61s1ptxrhds","charges":{"total":55,"preTotal":50,"fees":0,"taxes":5,"tip":{"amountOptions":[0,9,11,12.5,0],"amount":0,"payment_type":"Nadi Mama"},"items":[{"name":"Za'atar Mayo","cartId":"l6sm24q4ub_vpw33tvcrfk_dqk4xg3tdna","item_id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","price":50,"price_cents":50,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":[],"sides":[],"timing_mask":null,"images":"","item_object":{"id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","name":"Za'atar Mayo","price":"0.5","price_cents":50,"description":"","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[],"modifier_group_ids":[],"side_ids":[],"tax_rate_ids":[],"timing_mask":null},"returned":true}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T21:36:30.321Z","customer":{"email":"JOE.WAINE@GMAIL.COM","phone":"4254429308","first_name":"TESTTEST","last_name":"ORDERORDER"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Nadi Mama","amount":55}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"vfxcv091ax_dfd9f2rlwyj_mf4xfto80up","status":"Closed","orderPosted":true,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"6030496198e9850017ca7aa8","email":"wassef@mamnoonrestaurant.com","payInfo":{"TransmissionID":["56333128"],"Header":[{"State":["Live"],"FmtType":["ClientWeb"],"FmtVer":["1.0.0"],"Client":["1047"],"Location":["99992"],"Terminal":[""],"RevenueCenter":["0"],"Server":["123"],"TransDate":["2021-02-19"],"TransTime":["23:27"],"POSSerial":["12345"],"Error":["0"]}],"Responses":[{"SvUse":[{"Serial":["30775381"],"CardNbr":["2104780246650418"],"CardStatus":["Active"],"PreviousBalance":["113.63"],"TransAmount":["-11.89"],"CurrentBalance":["101.74"],"ErrorID":["0"],"ErrorMessage":[""],"Lines":[{"Line":["","",""," * * * * * * * * * * * * * * *"," * * * * * * * * * * * * * * *","    Thank you for dining at","         API redemption","           02/19/2021"," * * * * * * * * * * * * * * *"," * * * * * * * * * * * * * * *","","","Card Number:             xxx0418","Last activity:        02/19/2021","Previous balance:        $113.63","Current purchase:        -$11.89","Remaining balance:       $101.74","","","Transaction #:          30775381","",""," * * * * * * * * * * * * * * *","","",""]}]}]}]},"orderInfo":{"timeStamp":1613776950947,"tipSelected":2,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon","billing":{"billing_name":"wassef haroun","billing_address":"1120 32nd ave S ","billing_postal_code":"98144"},"id":"c0d0sl1u38o_zaj0yhbjn3g_orv1hlds8br","preorder":true,"scheduled_time":"2021-02-20T01:15:00.000Z","time_placed":"2021-02-19T23:26:41.911Z","confirmation_code":"mamnoon-pco48orluud","charges":{"total":1189,"preTotal":900,"fees":0,"taxes":91,"tip":{"amountOptions":[0,162,198,225,0],"amount":198,"payment_type":"Generic Online Ordering Integrated"},"items":[{"name":"Za'atar Man'oushe ","cartId":"0l2xp6cam9yj_yqlqyit18ne_l1xhsofth89","item_id":"4965a936-7c93-4b47-b86b-d7d41adec278","price":900,"price_cents":900,"quantity":1,"instructions":"","modifiers":[],"sides":[],"timing_mask":{"id":"1c4875c6-e953-486b-b8d6-3287144e5534","start_time":"16:00","end_time":"19:30","rules":["tue","wed","thu","fri","sat"],"status":"enabled","owner_id":"ba115845-bb01-4cd1-8f33-8097d6d12db9"}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-02-19T23:26:41.911Z","customer":{"email":"wassef@mamnoonrestaurant.com","phone":"(206) 669 9011","first_name":"wassef haroun"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"Seattle","state":"WA","zip_code":"98144","address_line1":"1120 32nd ave S","address_line2":""}}},"payments":{"payments":[{"payment_type":"Generic Online Ordering Integrated","amount":1189}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"c0d0sl1u38o_zaj0yhbjn3g_orv1hlds8br","status":"Open","orderPosted":true,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":false,"__v":0}]}

    },
        retrieveOrders() {
      let self = this;
      this.$http.get(`/order/orderhistory/`).then(function(response) {
        self.orderhistory = response.data;



// console.log(JSON.stringify(self.orderhistory.user[262]))
// console.log(JSON.stringify(self.orderhistory.user[263]))
// console.log(JSON.stringify(self.orderhistory.user[264]))
// console.log(JSON.stringify(self.orderhistory.user[265]))




      });





// this.orderhistory = {user: [{"_id":"61ba3c3cf9eabb00164eb6d0","sandbox":true,"timeClosed":1639629704070,"email":"Zachspriggs@gmail.com","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"13.23","amountBalance":"","amountProcessed":"13.23","amountTaxed":"0.00","amountTipped":"0.00","approvalNumberResult":"305313","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"Zach spriggs","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"3ba498f2-089d-4e74-ac7d-2e2e567732d2","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"3b73ba6f9e604390879d74b523668beb-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639595048281,"tipSelected":0,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"Zach spriggs","billing_address":"4417 42nd Ave sw ","billing_address_city":"Seattle ","billing_address_state":"WA","billing_postal_code":"98116"},"id":"4djz29dajpp_3vobvdjxi57_y7gdkgvbzk","preorder":false,"scheduled_time":null,"time_placed":"2021-12-15T19:02:13.560Z","confirmation_code":"mamnoon-ckqszfwzdgn","charges":{"total":1323,"preTotal":1200,"fees":0,"taxes":123,"tip":{"amountOptions":[0,216,264,300,0],"amount":0,"payment_type":"Generic Online Ordering Integrated"},"items":[{"name":"Chicken Shawarma","cartId":"m685djwynni_epvjmb3e1y4_2mt1w1xdyor","item_id":"50da5101-7e68-4e44-bf30-1d4ee9644357","price":1200,"price_cents":1200,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"sides":[],"timing_mask":null,"images":{"online_ordering_menu":{"main":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"}},"item_object":{"id":"50da5101-7e68-4e44-bf30-1d4ee9644357","name":"Chicken Shawarma","price":"12.0","price_cents":1200,"description":"shawarma spiced chicken, fries, pickled pepper, pickled turnips, romaine, tomato, garlic sauce ","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"images":{"online_ordering_menu":{"main":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"}},"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[{"id":"fb29d10d-22e1-4556-ae14-e0ea8cdb065b","metadata":{"image_path":"v1596827949/wgz8xmudq2hnfurmbeu4.jpg","curated":false,"url":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"},"url":"https://res-2.cloudinary.com/upserve/image/upload/v1596827949/wgz8xmudq2hnfurmbeu4.jpg"}],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T19:02:13.560Z","customer":{"email":"Zachspriggs@gmail.com","phone":"3604772535","first_name":"Zach","last_name":"Spriggs"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Generic Online Ordering Integrated","amount":1323}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"4djz29dajpp_3vobvdjxi57_y7gdkgvbzk","status":"Closed","orderPosted":false,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"61ba5d6af9eabb00164eb799","sandbox":true,"timeClosed":1639629474797,"email":"info@mamnoonrestaurant.com","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"20.95","amountBalance":"","amountProcessed":"25.13","amountTaxed":"0.00","amountTipped":"4.18","approvalNumberResult":"306173","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"Mamnoon LLC","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"e15a72d7-7e70-4cbd-a017-a7fbd053212b","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"a7e12a75e5d842a491d39f9a87f5840b-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639603551150,"tipSelected":2,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"Mamnoon LLC","billing_address":"1508 Melrose Ave","billing_address_city":"Seattle","billing_address_state":"WA","billing_postal_code":"98122"},"id":"twk0hh8rlt_3qw1hdqy4s2_653xs4lny6h","preorder":false,"scheduled_time":null,"time_placed":"2021-12-15T21:24:22.944Z","confirmation_code":"mamnoon-bzj2nod9uog","charges":{"total":2513,"preTotal":1900,"fees":0,"taxes":195,"tip":{"amountOptions":[0,342,418,475,0],"amount":418,"payment_type":"Nadi Mama"},"items":[{"name":"Lamb Shawarma ","cartId":"2atrnakcf1q_1uu2xxgfdse_d66kkre56g","item_id":"ceef0338-9454-409e-b9d9-79a1fe08b4a6","price":1400,"price_cents":1400,"quantity":1,"instructions":"","modifiers":[{"id":"44ccdbd5-c3c4-436f-ab18-9ef36962f4ee","modifier_group_id":"7f957234-df3f-4ff9-a145-8f09087a9873","price":100,"name":"+ HARRA"}],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"sides":[],"timing_mask":null,"images":{"online_ordering_menu":{"main":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"}},"item_object":{"id":"ceef0338-9454-409e-b9d9-79a1fe08b4a6","name":"Lamb Shawarma ","price":"14.0","price_cents":1400,"description":"shawarma spiced lamb, fries, romaine, pickled turnips, pickled peppers, tomato, garlic sauce","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"images":{"online_ordering_menu":{"main":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"}},"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[{"id":"18582065-70bd-44e0-911f-9f51d525c90c","metadata":{"image_path":"v1596829122/xqgerjkjqji4fcbwhiss.jpg","curated":false,"url":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"},"url":"https://res-1.cloudinary.com/upserve/image/upload/v1596829122/xqgerjkjqji4fcbwhiss.jpg"}],"modifier_group_ids":["7f957234-df3f-4ff9-a145-8f09087a9873"],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}},{"name":"MINT LEMONADE ","cartId":"p8pg26kxi7_r1ympcu7l0o_1bpd0ykde2r","item_id":"7f90b6bc-b66c-447b-a668-f86aa48690a7","price":400,"price_cents":400,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":[],"sides":[],"timing_mask":null,"images":"","item_object":{"id":"7f90b6bc-b66c-447b-a668-f86aa48690a7","name":"MINT LEMONADE ","price":"4.0","price_cents":400,"description":"","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[],"modifier_group_ids":[],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T21:24:22.944Z","customer":{"email":"info@mamnoonrestaurant.com","phone":"2069069606","first_name":"jackie","last_name":"stovall"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Nadi Mama","amount":2513}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"twk0hh8rlt_3qw1hdqy4s2_653xs4lny6h","status":"Closed","orderPosted":false,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"61ba5f7bf9eabb00164eb79a","sandbox":true,"timeClosed":1639629474805,"email":"joe.waine@gmail.com","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"0.55","amountBalance":"","amountProcessed":"0.55","amountTaxed":"0.00","amountTipped":"0.00","approvalNumberResult":"306212","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"joseph p waine","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"d3b9df09-5a3e-4343-b0bc-0a8194d508e5","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"41529d1dd0544ac5850d7562015119cc-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639604077550,"tipSelected":4,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"joseph p waine","billing_address":"1745 12th Avenue South #2","billing_address_city":"Seattle","billing_address_state":"WA","billing_postal_code":"98222"},"id":"jula40uwkv_wo603ya8j6e_6fqmli0zki7","preorder":false,"scheduled_time":null,"time_placed":"2021-12-15T21:30:20.691Z","confirmation_code":"mamnoon-ibgeefq22r","charges":{"total":55,"preTotal":50,"fees":0,"taxes":5,"tip":{"amountOptions":[0,9,11,12.5,0],"amount":0,"payment_type":"Nadi Mama"},"items":[{"name":"Za'atar Mayo","cartId":"acd7ixpvag_efim2u30e4h_4ium96luvtd","item_id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","price":50,"price_cents":50,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":[],"sides":[],"timing_mask":null,"images":"","item_object":{"id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","name":"Za'atar Mayo","price":"0.5","price_cents":50,"description":"","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[],"modifier_group_ids":[],"side_ids":[],"tax_rate_ids":[],"timing_mask":null}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T21:30:20.691Z","customer":{"email":"joe.waine@gmail.com","phone":"4254429308","first_name":"TEST","last_name":"ORDER"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Nadi Mama","amount":55}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"jula40uwkv_wo603ya8j6e_6fqmli0zki7","status":"Closed","orderPosted":false,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"61ba602df9eabb00164eb79b","sandbox":true,"timeClosed":1639629483309,"email":"JOE.WAINE@GMAIL.COM","payInfo":{"accountCardType":"VS","accountEntryMethod":"Keyed","accountExpiryDate":"0422","amount":"0.55","amountBalance":"","amountProcessed":"0.55","amountTaxed":"0.00","amountTipped":"0.00","approvalNumberResult":"306218","avsResponseCode":"Y","avsResponseText":"Address: Match & 5 Digit Zip: Match","batchNumber":"1","billingName":"joseph p waine","cashier":"","cvvResponseCode":"N","cvvResponseText":"No Match","externalTransactionId":"54e44432-3e8e-4146-8f3e-153212dc382d","isPartialApproval":false,"maskedAccount":"************9016","resultMessage":"Approved","resultStatus":"true","transactionReference":"","transactionType":"CreditAuth","uniqueTransId":"2633f7146e7c4984976802962b2df877-a109feb7f21d4ec7ac9af5febaff7531"},"orderInfo":{"timeStamp":1639604265385,"tipSelected":4,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon Street","billing":{"billing_name":"joseph p waine","billing_address":"1745 12th Avenue South #2","billing_address_city":"Seattle","billing_address_state":"WA","billing_postal_code":"98222"},"id":"vfxcv091ax_dfd9f2rlwyj_mf4xfto80up","preorder":true,"scheduled_time":"2021-12-15T21:45:00.000Z","time_placed":"2021-12-15T21:36:30.321Z","confirmation_code":"mamnoon-61s1ptxrhds","charges":{"total":55,"preTotal":50,"fees":0,"taxes":5,"tip":{"amountOptions":[0,9,11,12.5,0],"amount":0,"payment_type":"Nadi Mama"},"items":[{"name":"Za'atar Mayo","cartId":"l6sm24q4ub_vpw33tvcrfk_dqk4xg3tdna","item_id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","price":50,"price_cents":50,"quantity":1,"instructions":"","modifiers":[],"modifier_group_ids":[],"sides":[],"timing_mask":null,"images":"","item_object":{"id":"92ada2d9-4742-4061-8f5f-2f2216bb7694","name":"Za'atar Mayo","price":"0.5","price_cents":50,"description":"","min_sides":0,"max_sides":0,"item_type":"normal","tax_inclusive":false,"tax_rate_id":"5ec9e534-4908-49bf-8b6f-887ffdd3eed5","item_images":[],"modifier_group_ids":[],"side_ids":[],"tax_rate_ids":[],"timing_mask":null},"returned":true}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-12-15T21:36:30.321Z","customer":{"email":"JOE.WAINE@GMAIL.COM","phone":"4254429308","first_name":"TESTTEST","last_name":"ORDERORDER"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"","state":"","zip_code":"","address_line1":"","address_line2":""}}},"payments":{"payments":[{"payment_type":"Nadi Mama","amount":55}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"vfxcv091ax_dfd9f2rlwyj_mf4xfto80up","status":"Closed","orderPosted":true,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":true,"readyEmailSent":true,"__v":0},{"_id":"6030496198e9850017ca7aa8","email":"wassef@mamnoonrestaurant.com","payInfo":{"TransmissionID":["56333128"],"Header":[{"State":["Live"],"FmtType":["ClientWeb"],"FmtVer":["1.0.0"],"Client":["1047"],"Location":["99992"],"Terminal":[""],"RevenueCenter":["0"],"Server":["123"],"TransDate":["2021-02-19"],"TransTime":["23:27"],"POSSerial":["12345"],"Error":["0"]}],"Responses":[{"SvUse":[{"Serial":["30775381"],"CardNbr":["2104780246650418"],"CardStatus":["Active"],"PreviousBalance":["113.63"],"TransAmount":["-11.89"],"CurrentBalance":["101.74"],"ErrorID":["0"],"ErrorMessage":[""],"Lines":[{"Line":["","",""," * * * * * * * * * * * * * * *"," * * * * * * * * * * * * * * *","    Thank you for dining at","         API redemption","           02/19/2021"," * * * * * * * * * * * * * * *"," * * * * * * * * * * * * * * *","","","Card Number:             xxx0418","Last activity:        02/19/2021","Previous balance:        $113.63","Current purchase:        -$11.89","Remaining balance:       $101.74","","","Transaction #:          30775381","",""," * * * * * * * * * * * * * * *","","",""]}]}]}]},"orderInfo":{"timeStamp":1613776950947,"tipSelected":2,"currentAmountToAddCustom":0,"sms":false,"restaurant":"Mamnoon","billing":{"billing_name":"wassef haroun","billing_address":"1120 32nd ave S ","billing_postal_code":"98144"},"id":"c0d0sl1u38o_zaj0yhbjn3g_orv1hlds8br","preorder":true,"scheduled_time":"2021-02-20T01:15:00.000Z","time_placed":"2021-02-19T23:26:41.911Z","confirmation_code":"mamnoon-pco48orluud","charges":{"total":1189,"preTotal":900,"fees":0,"taxes":91,"tip":{"amountOptions":[0,162,198,225,0],"amount":198,"payment_type":"Generic Online Ordering Integrated"},"items":[{"name":"Za'atar Man'oushe ","cartId":"0l2xp6cam9yj_yqlqyit18ne_l1xhsofth89","item_id":"4965a936-7c93-4b47-b86b-d7d41adec278","price":900,"price_cents":900,"quantity":1,"instructions":"","modifiers":[],"sides":[],"timing_mask":{"id":"1c4875c6-e953-486b-b8d6-3287144e5534","start_time":"16:00","end_time":"19:30","rules":["tue","wed","thu","fri","sat"],"status":"enabled","owner_id":"ba115845-bb01-4cd1-8f33-8097d6d12db9"}}]},"fulfillment_info":{"type":"pickup","estimated_fulfillment_time":"2021-02-19T23:26:41.911Z","customer":{"email":"wassef@mamnoonrestaurant.com","phone":"(206) 669 9011","first_name":"wassef haroun"},"instructions":"","no_tableware":false,"delivery_info":{"is_managed_delivery":false,"address":{"city":"Seattle","state":"WA","zip_code":"98144","address_line1":"1120 32nd ave S","address_line2":""}}},"payments":{"payments":[{"payment_type":"Generic Online Ordering Integrated","amount":1189}]}},"void":false,"uniqueTransId":"giftcard","upserveId":"c0d0sl1u38o_zaj0yhbjn3g_orv1hlds8br","status":"Open","orderPosted":true,"orderAccepted":true,"shippingOrder":false,"shipped":false,"shippingInfo":{"order":"empty"},"acceptanceEmailSent":false,"__v":0}]}








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

      console.log(amountToCalcWithTax);

      let amountDiv100 = amountToCalcWithTax / 100;
      let amountToSend = amountDiv100.toFixed(2).toString();

      console.log(amountDiv100.toFixed(2).toString());
      console.log(amountToSend);

      this.$http
        .post("/order/issue-tokenized-return", {
          uniqueTransId: uniqueTransIdString,
          amount: amountToSend,
        })
        .then((response) => {
          console.log(response);

          this.$http
            .post("/order/update-refunded-items-mongo", {
              cartId: cartId,
              orderId: orderId,
            })
            .then((response) => {
              console.log(response);

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
      console.log(uniqueTransIdString);
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
      console.log(uniqueTransIdString);
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

console.log(this.$refs);


    // console.log('moment');
    // console.log(moment().valueOf());
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
