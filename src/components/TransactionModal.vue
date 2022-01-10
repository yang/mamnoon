<template>

<div class="container">
<div class="row">
<div class="col-6">

       <h1>{{ loadedorder.orderInfo.fulfillment_info.customer.first_name }} {{ loadedorder.orderInfo.fulfillment_info.customer.last_name }}</h1>
        <b>{{ loadedorder.email }}</b>
        <br><br>
        {{ loadedorder.orderInfo.restaurant }}
        <br /><br />
      <template v-if="currentView === loadedorder.orderInfo.restaurant || currentView === 'empty'">
 

        <template v-if="hasTransmissionId(loadedorder.payInfo)">
          gift card transaction
        </template>
        <template v-else>
          credit debit transaction
            <span v-if="loadedorder.sandbox">(sandbox)</span>
        </template>
        <br />
        confirmation code: {{ loadedorder.orderInfo.confirmation_code }} <br /><br />
        <template v-if="loadedorder.orderInfo.preorder">
          <b>preorder</b>
        </template>
        <template v-else>
          <b>regular order</b>
        </template>

        <template v-if="loadedorder.void">
          <h1>VOID</h1>
        </template>
        <template
          v-else-if="voidValid(order) && !hasTransmissionId(loadedorder.payInfo)"
        >
          <button
            class="fl-right btn-nadi"
            v-if="!loadedorder.void"
            @click="issueVoid(loadedorder.payInfo.uniqueTransId, true)"
          >
            void
          </button>
          <h1 v-else>VOID</h1>
        </template>
        <template v-else>
          <i>&nbsp;(void unavailable)</i>
        </template>

        <br />
        <template v-if="loadedorder.orderInfo.preorder">
          <br />
          scheduled time: {{ loadedorder.orderInfo.scheduled_time | formatDate }}
        </template>
        <br />
        time placed: {{ loadedorder.orderInfo.time_placed | formatDate }}
        <br />

        <template v-if="loadedorder.timeClosed">
          time closed: {{ timeClosedMoment(loadedorder.timeClosed) }}
        </template>
        <br /><br />
        <h2>${{ loadedorder.orderInfo.charges.total | showToFixed }}</h2>
        <br />
      
  

      


    </template>

</div>




<div class="col-6">



<br>
<!--// items: {{ loadedorder.orderInfo.charges.items.length }}
// <br><br>-->
        <ul class="no-left-pad">
          <li
            v-for="item in loadedorder.orderInfo.charges.items"
            :key="item.cartId"
            style="margin-bottom:30px;"
          >
            <b>{{ item.quantity }} x</b> {{ item.name }}&nbsp;&nbsp;&nbsp;<b
              >${{ item.price.toFixed() / 100 }}</b
            >&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;
            <template v-if="item.returned">
              <span>(returned)</span>
            </template>
            <template v-else>
              <template v-if="loadedorder.payInfo.uniqueTransId">
                <span
                  class="line-link"
                  v-if="!loadedorder.void"
                  @click.once="
                    issueTokenizedReturn(
                      loadedorder.payInfo.uniqueTransId,
                      item.price,
                      loadedorder.orderInfo.charges.taxes /
                        loadedorder.orderInfo.charges.preTotal,
                      item.cartId,
                      loadedorder._id
                    )
                  "
                  ><u :id="'not-'+item.cartId">issue return</u>
                  <span style="display:none;" :id="'is-'+item.cartId">(returned)</span>
       
                  </span
                >
              </template>
            </template>
          </li>
        </ul>
        <br />





</div>
<div class="col-12">

    <button class="btn-nadi" @click="toggleOrder(loadedorder.orderInfo.id)">
          show/hide full order data
        </button>
<br>
        <pre :id="'order-' + loadedorder.orderInfo.id" class="hidden">{{ order }}</pre
        >

</div>


</div>

</div>

</template>


<script>


import moment from "moment";
import tz from "moment-timezone";


export default {
  data() {
    return {
      loadedorder: null,
      modalVisible: false,
      modalContent: {},
      dateNow: Date.now(),
      orderhistory: null,
      response: null,
      currentView: "empty",
    };
  },
  name: "OrderHistory",
  props: ["order"],
  filters: {
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
    issueTokenizedReturn(
      uniqueTransIdString,
      amount,
      taxRate,
      cartId,
      orderId
    ) {


          document.getElementById('not-' + cartId).style.display = 'none';   
          document.getElementById('is-' + cartId).style.display = 'block';



      let tax = amount * taxRate;
      let amountToCalcWithTax = amount + tax;

      console.log(amountToCalcWithTax);

      let amountDiv100 = amountToCalcWithTax / 100;
      let amountToSend = amountDiv100.toFixed(2).toString();

      console.log(amountDiv100.toFixed(2).toString());
      console.log(amountToSend);
      let self = this;
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

              // this.retrieveTodaysOrders();
              // this.updateLoadedOrder(this.order._id);
              self.updateLoadedOrder(self.order._id);

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

      let self = this;
      console.log(uniqueTransIdString);
      
      this.$http
        .post("/order/void-transid-mongo", {
          uniqueTransId: uniqueTransIdString,
          data,
        })
        .then((response) => {
          console.log(response);

          // location.reload();
          // this.retrieveTodaysOrders();
          self.updateLoadedOrder(self.order._id);

        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    }
  },
  created(){

console.log(this.order._id);
this.loadedorder = this.order;

// this.order = null;
// console.log(this.order)



  }
};





</script>

<style>

.not-returned span{
  display:none;
}



</style>