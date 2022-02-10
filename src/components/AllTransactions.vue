<template>
  <div class="container pad-yellow-background pd50">
    <!-- {{currentUser.currentUserEmail}} -->
    <br />

    <br />
    <button @click="setCurrentView('Mamnoon')">mamnoon</button>
    <button @click="setCurrentView('Mamnoon Street')">mamnoon street</button>
    <button @click="setCurrentView('empty')">all</button>
    <br />

    <br />
    <!-- {{response}} -->
    <h1>number of orders: {{ orderhistory.user.length }}</h1>
    <br />
    <br />
    order history:
    <hr />

    <br />
    <div
      v-for="order in orderhistory.user.slice().reverse()"
      :key="order._id"
      class="position-relative"
    >
      <!-- {{order.orderino}} -->
      <!-- <template v-if="isToday(order.orderInfo.timeStamp) === true "> -->
      <template
        v-if="
          currentView === order.orderInfo.restaurant || currentView === 'empty'
        "
      >
        {{ isToday(order.orderInfo.timeStamp) }}

        <template v-if="hasTransmissionId(order.payInfo)">
          <b>gift card transaction</b>
        </template>
        <template v-else>
          <b
            >credit debit transaction
            <span v-if="order.sandbox">(sandbox)</span></b
          >
        </template>
        <br />
        confirmation code: {{ order.orderInfo.confirmation_code }} <br /><br />
        <template v-if="order.orderInfo.preorder">
          <b>preorder</b>
        </template>
        <template v-else>
          <b>regular order</b>
        </template>

        <template v-if="order.void">
          <h1>VOID</h1>
        </template>
        <template
          v-else-if="voidValid(order) && !hasTransmissionId(order.payInfo)"
        >
          <button
            class="fl-right"
            v-if="!order.void"
            @click="issueVoid(order.payInfo.uniqueTransId, true)"
          >
            void
          </button>
          <h1 v-else>VOID</h1>
        </template>
        <template v-else>
          <i>(void unavailable)</i>
        </template>

        <br />
        <template v-if="order.orderInfo.preorder">
          <br />
          scheduled time: {{ order.orderInfo.scheduled_time | formatDate }}
        </template>
        <br />
        time placed: {{ order.orderInfo.time_placed | formatDate }}
        <br />

        <template v-if="order.timeClosed">
          time closed: {{ timeClosedMoment(order.timeClosed) }}
        </template>
        <br /><br />
        ${{ order.orderInfo.charges.total | showToFixed }}
        <br />
        {{ order.orderInfo.restaurant }}
        <br />
        item amount: {{ order.orderInfo.charges.items.length }}
        <br />

        <br />
        <b>{{ order.email }}</b>
        &nbsp;&nbsp;
        <br />guest name:
        {{ order.orderInfo.fulfillment_info.customer.first_name }}
        <br />
        <br />
        <button @click="toggleOrder(order.orderInfo.id)">
          show/hide full order data
        </button>

        <pre :id="'order-' + order.orderInfo.id" class="hidden">{{
          order
        }}</pre>
        <br />

        <br />
        <ul class="no-left-pad">
          <li
            v-for="item in order.orderInfo.charges.items"
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
              <template v-if="order.payInfo.uniqueTransId">
                <span
                  class="line-link"
                  v-if="!order.void"
                  @click.once="
                    issueTokenizedReturn(
                      order.payInfo.uniqueTransId,
                      item.price,
                      order.orderInfo.charges.taxes /
                        order.orderInfo.charges.preTotal,
                      item.cartId,
                      order._id
                    )
                  "
                  ><u>issue return</u></span
                >
              </template>
            </template>
          </li>
        </ul>
        <br />

        <hr />
      </template>
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import moment from "moment";
import tz from "moment-timezone";

export default {
  data() {
    return {
      dateNow: Date.now(),
      orderhistory: null,
      response: null,
      currentView: "empty",
    };
  },
  name: "OrderHistory",
  props: ["currentUser"],
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
    isToday(input) {
      const today = new Date();
      const date = new Date(input);
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
    hasTransmissionId(order) {
      if (order.TransmissionID !== undefined) {
        console.log(order.TransmissionID);

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
    retrieveOrders() {
      let self = this;
      this.$http.get(`/order/orderhistory/`).then(function(response) {
        self.orderhistory = response.data;
      });
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

              this.retrieveOrders();
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
          this.retrieveOrders();
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

    this.retrieveOrders();
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
</style>
