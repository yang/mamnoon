<template>
  <div class="container pad-yellow-background pd50">
    <!-- {{currentUser.currentUserEmail}} -->
    <br />




<div v-if="modalVisible" class="modalTransaction">


<div class="container">

<div class="fl-right" @click="hideTransactionModal()">




<CloseModalRed />



</div>



<TransactionModal :order="modalContent" />

</div>
</div>


    <br />
    <button @click="setCurrentView('Mamnoon')">mamnoon</button>&nbsp;&nbsp;
    <button @click="setCurrentView('Mamnoon Street')">mamnoon street</button>&nbsp;&nbsp;
    <button @click="setCurrentView('empty')">all</button>&nbsp;&nbsp;



    <button @click="showAllOrders()">show all</button>&nbsp;&nbsp;

 <button @click="showTodaysOrders()">show todays orders</button>&nbsp;&nbsp;
  
    <br />

    <br />
    <!-- {{response}} -->
    <h1>number of orders: {{ orderhistory.user.length }}</h1>
    <br />




    <div
      v-for="order in orderhistory.user.slice().reverse()"
      :key="order._id"
      class="position-relative"
    >



      <template v-if="currentView === order.orderInfo.restaurant || currentView === 'empty'">
    <div class="pointer" @click="viewModal(order)">
      

<div class="third">


       <h1 style="position:initial;font-weight: 600;"> {{firstLast(order.orderInfo.fulfillment_info.customer) | truncate(16, '...')}}</h1>






  










</div>
<div class="third">
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

        <br /><br />



</div>

<div class="fifth">
<h1 style="position:initial;font-weight: 600;">
        ${{ order.orderInfo.charges.total | showToFixed }}</h1>

   
   <span class="itemAmount">{{ order.orderInfo.charges.items.length }} item<span v-if="order.orderInfo.charges.items.length>1">s</span></span>
        <br />




</div>



</div>
      </template>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import tz from "moment-timezone";

import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalMed from "@/components/svgIcons/CloseModalMed";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";








import TransactionModal from "@/components/TransactionModal";

export default {
  data() {
    return {
      modalVisible: false,
      modalContent: {},
      dateNow: Date.now(),
      orderhistory: null,
      response: null,
      currentView: "empty",
    };
  },
  components:{
    TransactionModal,
 CloseModal,
CloseModalMed,
CloseModalRed,
CloseModalSm
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
    z-index: 1000;
    overflow: scroll;
    padding-bottom: 200px;
    padding-top: 40px;
}


.itemAmount{
      font-size: 2.2rem;
}

</style>
