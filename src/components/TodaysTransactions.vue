<template>
  <div>
    <!--here-->
    <div class="nav-wrap2">
      <div class="fixed-nav">
        <div
          class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header2"
        >
          <div class="container">
            <!--here-->
            <DashBoardLogo v-if="currentView === 'empty'" />
            <MamnoonLogo
              :height="40"
              :marginTop="6"
              v-if="currentView === 'Mamnoon'"
            />
            <StreetLogo
              :height="40"
              :marginTop="6"
              v-if="currentView === 'Mamnoon Street'"
            />

            <a
              v-if="currentView === 'Mamnoon Street' || currentView === 'empty'"
              @click="setCurrentView('Mamnoon')"
              ><u>mamnoon</u></a
            >&nbsp;&nbsp;
            <a
              v-if="currentView === 'Mamnoon' || currentView === 'empty'"
              @click="setCurrentView('Mamnoon Street')"
              ><u>mamnoon street</u></a
            >&nbsp;&nbsp;
            <a
              v-if="
                currentView === 'Mamnoon Street' || currentView === 'Mamnoon'
              "
              @click="setCurrentView('empty')"
              ><u>both</u></a
            >&nbsp;&nbsp;

            <a @click="showTotals()"
              ><u
                ><span v-if="showDailyTotals">hide</span
                ><span v-else>show</span> sales</u
              ></a
            >

            <a @click="logUserOut()"><u>Logout</u></a> &nbsp;&nbsp;

            <!--    // <a  @click="showAllOrders()"><u>all orders</u></a>&nbsp;&nbsp;&nbsp;-->

            <a @click="showTodaysOrders()"><u>todays orders</u></a
            >&nbsp;&nbsp;&nbsp;

            <!---here-->
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div
              class="thirds"
              v-bind:class="{ yellow: orderfilter === 'open' }"
              @click="orderFilter('open')"
            >
              open orders ({{ openOrders }})
            </div>
            <div
              class="thirds"
              v-bind:class="{ yellow: orderfilter === 'closed' }"
              @click="orderFilter('closed')"
            >
              closed orders ({{ closedOrders }})
            </div>
            <div
              class="thirds"
              v-bind:class="{ yellow: orderfilter === '' }"
              @click="orderFilter('')"
            >
              all orders ({{ orderAmount }})
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--here-->

    <div class="container nav-acc-header dashboard">
      <div>
        <div v-if="modalVisible" class="modalTransaction">
          <div class="container">
            <div class="fl-right pointerClose" @click="hideTransactionModal()">
              <CloseModalRed />
            </div>

            <TransactionModal :order="modalContent" />
          </div>
        </div>

        <div class="datepicker fl-right" style="position:relative;">
          <button
            class="btn-nadi fl-right clearDateButton"
            v-if="dateSelected"
            @click="clearTheDate()"
          >
            x
          </button>
          <datepicker
            ref="myDatePicker"
            :clearable="true"
            @selected="selectTransactionDate"
            :placeholder="'click here to select date'"
          >
          </datepicker>
        </div>

        <h1 class="dashboardHeader">
          <span class="fl-right">
            <template v-if="this.orderfilter === 'open'">
              open orders ({{ openOrders }})
            </template>

            <template v-if="this.orderfilter === 'closed'">
              closed orders ({{ closedOrders }})
            </template>

            <template v-if="this.orderfilter === ''">
              all orders ({{ orderAmount }})
            </template> </span
          >&nbsp;
        </h1>
        <h1 class="dashboardHeader">
          <input
            type="text"
            v-model="search"
            class="nameSearch"
            placeholder="search"
          />
        </h1>

        <div v-if="showDailyTotals === true" class="dailyTotal">
          <download-csv
            class="btn-nadi csv-download"
            :data="json_data"
            name="filename.csv"
          >
            Download CSV
          </download-csv>

          <template
            v-if="currentView === 'Mamnoon Street' || currentView === 'empty'"
          >
            <b>mamnoon street totals:</b><br />pretotal: ${{
              totals.street.pretotal | showToFixed
            }}<br />
            tips: ${{ totals.street.tips | showToFixed }}<br />
          </template>
          <template v-if="currentView === 'Mamnoon' || currentView === 'empty'">
            <b>mamnoon totals:</b><br />pretotal: ${{
              totals.mamnoon.pretotal | showToFixed
            }}<br />
            tips: ${{ totals.mamnoon.tips | showToFixed }}<br />
          </template>

          <input
            style="padding: 2px 10px;margin: 10px 0;"
            v-model="sendEmail"
            placeholder="email"
          />
          <button
            style="margin-left:5px;"
            v-if="validEmail(sendEmail)"
            @click="sendTotals(totals, sendEmail)"
          >
            send</button
          ><button
            style="background-color: #ddd;color:#bbb;margin-left:5px;"
            v-else
            disabled
          >
            send
          </button>
        </div>
        <!--    // v-if="containsFirstName(order.orderInfo.fulfillment_info.customer) || containsLastName(order.orderInfo.fulfillment_info.customer)"-->
        <template v-if="orderhistory">
          <div
            v-if="userMatchesText(search, formattedOrder(order))"
            v-for="order in orderhistory.user.slice().reverse()"
            :key="order._id"
          >
            <!--here-->
            <!--// start filter-->
            <div v-if="showFilter(order.timeClosed)" class="position-relative">
              <!--here-->
              <template
                v-if="
                  currentView === order.orderInfo.restaurant ||
                    currentView === 'empty'
                "
              >
                <div class="pointer" @click="viewModal(order)">
                  <div class="third">
                    <h2 class="dashboardName">
                      {{
                        firstLast(order.orderInfo.fulfillment_info.customer)
                          | truncate(16, "...")
                      }}
                    </h2>
                  </div>
                  <div class="third">
                    <h2 class="dashboardName mob">
                      {{
                        firstLast(order.orderInfo.fulfillment_info.customer)
                          | truncate(16, "...")
                      }}
                    </h2>
                    <template v-if="currentView === 'empty'">
                      {{ order.orderInfo.restaurant }},
                    </template>
                    <template v-if="order.timeClosed">
                      <b>Closed</b>
                      <!--{{ timeClosedMoment(order.timeClosed) }}-->
                    </template>
                    <template v-else>
                      <b>Open</b>
                    </template>
                    <template v-if="order.orderInfo.preorder">
                      <br />
                      scheduled:
                      {{ order.orderInfo.scheduled_time | formatDate2 }}
                    </template>
                    <br />
                    Order Placed:
                    {{ order.orderInfo.time_placed | formatDate2 }}
                    <br />
                    <template v-if="order.void">
                      VOID
                    </template>
                    <template v-if="order.orderInfo.preorder">
                      <b>preorder</b> &nbsp;
                      <template v-if="order.cancelled">
                        (cancelled)
                      </template>
                    </template>
                    <br />
                  </div>
                  <div class="fifth">
                    <h1 style="position:initial;font-weight: 600;">
                      ${{ order.orderInfo.charges.total | showToFixed }}
                    </h1>

                    <span class="itemAmount"
                      >{{ order.orderInfo.charges.items.length }} item<span
                        v-if="order.orderInfo.charges.items.length > 1"
                        >s</span
                      ></span
                    >
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
import Datepicker from "vuejs-datepicker";

import moment from "moment";
import tz from "moment-timezone";

import CloseModal from "@/components/svgIcons/CloseModal";
import CloseModalMed from "@/components/svgIcons/CloseModalMed";
import CloseModalRed from "@/components/svgIcons/CloseModalRed";
import CloseModalSm from "@/components/svgIcons/CloseModalSm";

import DashBoardLogo from "@/components/svgIcons/DashBoardLogo";

import Nav4 from "@/components/Nav4";

import TransactionModal from "@/components/TransactionModal";
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo";

import StreetLogo from "@/components/svgIcons/StreetLogo";

export default {
  data() {
    return {
      json_data: [],
      totals: [
        {
          street: {
            pretotal: 0,
            tips: 0
          }
        },
        {
          mamnoon: {
            pretotal: 0,
            tips: 0
          }
        }
      ],
      // totals: {
      //   street: {
      //     pretotal: 0,
      //     tips: 0
      //   },
      //   mamnoon: {
      //     pretotal: 0,
      //     tips: 0
      //   }
      // },
      orderAmount: 0,
      openOrders: 0,
      closedOrders: 0,
      dateSelected: false,
      orderfilter: "",
      sendEmail: "",
      showDailyTotals: false,
      search: "",
      modalVisible: false,
      modalContent: {},
      dateNow: Date.now(),
      orderhistory: null,
      response: null,
      currentView: "empty"
    };
  },
  components: {
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
    }
  },
  watch: {
    totals: {
      handler(val) {
        this.json_data = [];

        for (const [key, value] of Object.entries(this.totals)) {
          this.json_data.push({
            name: key,
            pretotal: this.showToFixed(value.pretotal),
            tips: this.showToFixed(value.tips),
            date: moment(this.$refs.myDatePicker._data.selectedDate).format(
              "YYYY-MM-DD"
            )
          });
        }

        // console.log(this.totals)
      },
      deep: true
    }
  },
  methods: {
    selectTransactionDate(e){
// console.log(moment(e).tz("America/Los_Angeles").toISOString());


this.retrieveOrdersByDate(e);


    },
    formattedOrder(order) {
      let formattedorder = order;
      let orderToLowerCase = order;
      let emptArry = [];

      for (let i in orderToLowerCase.orderInfo.charges.items) {
        for (const [key, value] of Object.entries(
          orderToLowerCase.orderInfo.charges.items[i]
        )) {
          if (typeof value === "string") {
            // console.log(value.toLowerCase())
            orderToLowerCase.orderInfo.charges.items[i][
              key
            ] = value.toLowerCase();
          }
        }
      }

      // console.log(orderToLowerCase);
      formattedorder.items = order.orderInfo.charges.items;
      // formattedorder.items = orderToLowerCase;

      // console.log(formattedorder);
      return formattedorder;
    },
    showToFixed: function(value) {
      let decvalue = value / 100;

      return decvalue.toFixed(2);
    },
    userMatchesText(text, user) {
      if (user === null) {
        return false;
      } else {
        if (typeof user === "string") return user.includes(text);
        return Object.values(user).some(val => this.userMatchesText(text, val));
      }
    },
    renderPanels() {
      if (this.orderhistory && this.orderhistory.user) {
        if (this.$store.state.dashboard === "empty") {
          this.openOrders = this.orderhistory.user.filter(
            order => order.status === "Open"
          ).length;
          this.closedOrders = this.orderhistory.user.filter(
            order => order.status === "Closed"
          ).length;
          this.orderAmount = this.orderhistory.user.length;
        } else {
          this.openOrders = this.orderhistory.user
            .filter(
              order =>
                order.orderInfo.restaurant === this.$store.state.dashboard
            )
            .filter(order => order.status === "Open").length;
          this.closedOrders = this.orderhistory.user
            .filter(
              order =>
                order.orderInfo.restaurant === this.$store.state.dashboard
            )
            .filter(order => order.status === "Closed").length;
          this.orderAmount = this.orderhistory.user.filter(
            order => order.orderInfo.restaurant === this.$store.state.dashboard
          ).length;
        }
      }
    },
    calculateTotals() {
      if (this.orderhistory && this.orderhistory.user) {
        this.totals = {
          street: {
            pretotal: 0,
            tips: 0
          },
          mamnoon: {
            pretotal: 0,
            tips: 0
          }
        };

        let closedOutOrders = this.orderhistory.user.filter(
          order => order.status === "Closed"
        );

        let mamnoonpretotal = 0;
        let mamnoontips = 0;
        let streetpretotal = 0;
        let streettips = 0;

        for (let i = 0; i < closedOutOrders.length; i++) {
          if (closedOutOrders[i].orderInfo.restaurant === "Mamnoon Street") {
            // console.log(closedOutOrders[i].orderInfo.charges.preTotal);
            streetpretotal =
              streetpretotal + closedOutOrders[i].orderInfo.charges.preTotal;
            streettips =
              streettips + closedOutOrders[i].orderInfo.charges.tip.amount;
          } else {
            // console.log(closedOutOrders[i].orderInfo.charges.preTotal);
            mamnoonpretotal =
              mamnoonpretotal + closedOutOrders[i].orderInfo.charges.preTotal;
            mamnoontips =
              mamnoontips + closedOutOrders[i].orderInfo.charges.tip.amount;
          }
        }

        this.totals.mamnoon.pretotal = mamnoonpretotal;
        this.totals.mamnoon.tips = mamnoontips;

        this.totals.street.pretotal = streetpretotal;
        this.totals.street.tips = streettips;
      }

      // console.log(mamnoonpretotal);
      // console.log(mamnoontips);
      // console.log(streetpretotal);
      // console.log(streettips);

      // this.totals.mamnoon.pretotal = mamnoonpretotal;
      // this.totals.mamnoon.tips = mamnoontips;

      // this.totals.street.pretotal = streetpretotal;
      // this.totals.street.tips = streettips;
    },
  clearTheDate() {
    this.$refs.myDatePicker.clearDate();
    this.dateSelected = false;
    this.retrieveTodaysOrders();
  },
  cancelPreorder(id) {
    let self = this;
    this.$swal({
      title: "cancel this order?",
      showDenyButton: true,
      denyButtonText: `Cancel`,
      confirmButtonText: `Confirm`
    }).then(confirmed => {
      if (confirmed) {
        if (confirmed.isConfirmed) {
          self.$http
            .post(`/order/cancelpreorder/${id}`)
            .then(response => {
              // console.log(response);
            })
            .catch(e => {
              // this.errors.push(e);
              // console.log("errors");
              // console.log(e);
            });

          self.retrieveTodaysOrders();
        }
      }
    });
  },
  cancelPreorder(id) {
    let self = this;

    this.$swal({
      title: "cancel this order?",
      showDenyButton: true,
      denyButtonText: `Cancel`,
      confirmButtonText: `Confirm`
    }).then(confirmed => {
      if (confirmed) {
        if (confirmed.isConfirmed) {
          self.$http
            .post(`/order/cancelpreorder/${id}`)
            .then(response => {
              console.log(response);
            })
            .catch(e => {
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
  showFilter(f) {
    if (f && this.orderfilter === "closed") {
      return true;
    } else if (!f && this.orderfilter === "open") {
      return true;
    } else if (this.orderfilter === "") {
      return true;
    } else {
      return false;
    }
  },
  orderFilter(param) {
    this.orderfilter = param;
  },
  validEmail: function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  sendTotals(dailyTotal, sendEmail) {
    this.$http
      .post("/order/sendtotals", {
        email: sendEmail,
        dailyTotal
      })
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        // this.errors.push(e);
        console.log("errors");
        console.log(e);
      });

    this.sendEmail = "";
  },
  showTotals() {
    this.showDailyTotals = !this.showDailyTotals;

    this.calculateTotals();
  },
  dailyTotal(orders) {
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

    for (let i = 0; i < orders.user.length; i++) {
      if (orders.user[i].orderInfo.restaurant === "Mamnoon Street") {
        totals.street.pretotal =
          totals.street.pretotal + orders.user[i].orderInfo.charges.preTotal;
        totals.street.tips =
          totals.street.tips + orders.user[i].orderInfo.charges.tip.amount;
      } else {
        totals.mamnoon.pretotal =
          totals.street.pretotal + orders.user[i].orderInfo.charges.preTotal;
        totals.mamnoon.tips =
          totals.street.tips + orders.user[i].orderInfo.charges.tip.amount;
      }
    }
    return totals;
  },
  logUserOut() {
    localStorage.removeItem("jwt");
    this.$router.push("/");
  },
  containsLastName(params) {
    if (this.search === "") {
      return true;
    } else {
      if (params.last_name) {
        if (
          params.last_name
            .replaceAll(" ", "")
            .includes(this.search.replaceAll(" ", ""))
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  containsFirstName(params) {
    if (this.search === "") {
      return true;
    } else {
      if (params.first_name) {
        if (
          params.first_name
            .replaceAll(" ", "")
            .includes(this.search.replaceAll(" ", ""))
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  firstLast(name) {
    return name.first_name.replace("nx ","") + " " + name.last_name.replace("nx ", "");
  },
  hideTransactionModal() {
    this.modalVisible = false;
  },
  viewModal(order) {
    this.modalVisible = true;
    this.modalContent = order;
  },
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

    let dashboardChoose = param;

    this.$store.commit("dashboardChoose", { dashboardChoose });

    this.renderPanels();
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
  retrieveOrdersByDate(date) {
    let self = this;
    this.$http
      .get(
        `/order/retrieveordersbydate/${moment(date)
          .tz("America/Los_Angeles")
          .toISOString()}`
      )
      .then(function(response) {
        self.orderhistory = response.data;
        self.calculateTotals();
      });
  },
  retrieveTodaysOrders() {

    console.log('retrieve today');
    let self = this;
    this.$http.get(`/order/todaysorderhistory/`).then(function(response) {

      console.log(response);
      self.orderhistory = response.data;
      self.calculateTotals();
    });
  },
  retrieveOrders() {
    let self = this;
    this.$http.get(`/order/orderhistory/`).then(function(response) {
      self.orderhistory = response.data;
      self.calculateTotals();
    });
  },

  showAllOrders() {
    this.retrieveOrders();
    this.setCurrentView("empty");
  },

  showTodaysOrders() {
    this.retrieveTodaysOrders();
  },
  issueTokenizedReturn(uniqueTransIdString, amount, taxRate, cartId, orderId) {
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
        amount: amountToSend
      })
      .then(response => {
        // console.log(response);

        this.$http
          .post("/order/update-refunded-items-mongo", {
            cartId: cartId,
            orderId: orderId
          })
          .then(response => {
            // console.log(response);

            this.retrieveTodaysOrders();
          })
          .catch(e => {
            // this.errors.push(e);
            // console.log("errors");
            // console.log(e);
          });
      })
      .catch(e => {
        // this.errors.push(e);
        // console.log("errors");
        // console.log(e);
      });
  },
  issueVoid(uniqueTransIdString, data) {
    // console.log(uniqueTransIdString);
    this.$http
      .post("/order/issue-void", {
        uniqueTransId: uniqueTransIdString,
        data
      })
      .then(response => {
        // console.log(response);

        this.voidByTransId(uniqueTransIdString, data);
      })
      .catch(e => {
        // this.errors.push(e);
        // console.log("errors");
        // console.log(e);
      });
  },
  voidByTransId(uniqueTransIdString, data) {
    // console.log(uniqueTransIdString);
    this.$http
      .post("/order/void-transid-mongo", {
        uniqueTransId: uniqueTransIdString,
        data
      })
      .then(response => {
        // console.log(response);

        // location.reload();
        this.retrieveTodaysOrders();
      })
      .catch(e => {
        // this.errors.push(e);
        // console.log("errors");
        // console.log(e);
      });
  }},
  mounted() {
    this.setCurrentView(this.$store.state.dashboard);
    this.retrieveTodaysOrders();

    let self = this;

    this.$nextTick(function() {
      window.setInterval(() => {
        if (self.orderhistory) {
          self.renderPanels();
        }
      }, 1000);
    });
  }
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

.modalTransaction {
  position: fixed;
  width: 100%;
  height: 100vh;
  // background: green;
  background: white;
  top: 92px;
  left: 0;
  // z-index: 10000;
  z-index: 1000;
  overflow: scroll;
  padding-bottom: 200px;
  padding-top: 40px;
}

.itemAmount {
  font-size: 2.2rem;
}

.pointerClose {
  cursor: pointer;
}

.dailyTotal {
  text-align: right;
  margin: 10px;
}

.btn-nadi.flex {
  display: flex;
  width: 200px;
}

a {
  cursor: pointer;
}

.row .thirds {
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
  &:hover {
    background-color: #ffff49;
  }

  cursor: pointer;
  &:first-child,
  &:nth-child(2) {
    border-right: 0;
  }
}

.text-white {
  color: #ffffff;
}

.datepicker input {
  padding: 10px;
  margin-left: 10px;
  position: relative;
}

.clearDateButton {
  position: absolute;
  right: 5px;
  z-index: 10;
  top: 6px;
}

.dashboardHeader {
}

.dashboardName {
  position: initial;
  font-weight: 600;
  &.mob {
    display: none;
  }
}

.nameSearch {
  padding: 0 10px;
}

.pointer {
  transition: all 0.5s ease;
  &:hover {
    background-color: #ffff49;
  }
}
@media only screen and (max-width: 992px) {
  .container.nav-acc-header.dashboard {
    padding-left: 0;
    padding-right: 0;
  }

  .pointer {
    .third:first-child {
      display: none;
    }
    .third:nth-child(2) {
      width: 70%;
    }
    .fifth {
      width: 30%;
    }
  }

  .dashboardName {
    display: none;
    &.mob {
      display: block;
    }
  }

  .dashboardHeader {
    width: 100%;
    margin-top: 5px;
    display: block;
    input {
      width: 100%;
    }
    .fl-right {
      float: none;
    }
  }
}

@media only screen and (max-width: 768px) {
  .container.nav-acc-header.dashboard {
    padding-left: 0;
    padding-right: 0;
  }
}

@media only screen and (max-width: 640px) {
  .container.nav-acc-header.dashboard {
    padding-left: 0;
    padding-right: 0;
  }
}

@media only screen and (max-width: 320px) {
  .container.nav-acc-header.dashboard {
    padding-left: 0;
    padding-right: 0;
  }
}

.csv-download {
  width: 200px;
  /* float: right; */
  clear: both;
  display: block;
  text-align: center;
  cursor: pointer;
}
</style>
