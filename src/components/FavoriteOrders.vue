<template>
  <div id="upserveolo">
    <div class="container pad-yellow-background module-header">
      favorite orders
    </div>
    <div class="container pad-yellow-background">
      <div class="row no-lr-margin" id="order-history">
        <template v-for="order in favOrders">
          <div
            class="filtree-full-testing-favorites"
            @click="reorderFavoriteOrder(order.favoriteOrders)"
            v-bind:key="order.id"
          >
            <div class="yellow-bg-test">
              <div class="half-width2left">
                <div class="content-box">
                  <ul class="favOrderList">
                    <li>{{ order.favoriteOrders[0].restaurant }}</li>
                    <li
                      class="name"
                      v-for="(o, index) in order.favoriteOrders"
                      v-bind:key="index"
                    >
                      {{ o.quantity }} x {{ o.name }}
                    </li>
                    <li class="name">
                      <a class=""><u>order again</u></a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
              <div class="half-width2right">
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    let image = "item.item_object.images.online_ordering_menu.main";
    return {
      orderhistory: null,
      response: null,
      favOrders: [],
      image: image,
    };
  },
  name: "OrderHistory",
  props: ["currentUser", "emailAddress", "email"],
  methods: {
    reorderFavoriteOrder(order) {
      let storeCurrentOrder;
      let temp = this.$store.state.storeMamnoon.charges.items;
      if (order[0].restaurant === "Mamnoon") {
        storeCurrentOrder = this.$store.state.storeMamnoon;
      } else {
        storeCurrentOrder = this.$store.state.storeMamnoon;
      }
      storeCurrentOrder.charges.items = order;

      for (let item of temp) {
        console.log("item :>> ", item);
        item["reorder"] = true;
        storeCurrentOrder.charges.items.push(item);
      }
      temp = [];
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });
      console.log("storeCurrentOrder :>> ", storeCurrentOrder);
      this.$store.commit("reordertrue");
      if (order[0].restaurant === "Mamnoon") {
        this.$router.push("/mamnoon-olo");
      } else {
        this.$router.push("/mamnoonstreet-olo");
      }
    },
    getFavoriteOrders(array3) {
      let favoriteOrders = [];
      let temp = [];
      let favOrders = [];
      for (let i in array3) {
        if (array3[i].charges.items.length > 1) {
          array3[i].charges.items[0].restaurant = array3[i].restaurant;
          favoriteOrders.push(array3[i].charges.items);
        }
      }

      let orderTotal = 0;
      // console.log(`favoriteOrders`, favoriteOrders)
      for (let i = 0; i < favoriteOrders.length; i++) {
        temp.push({
          favoriteOrders: favoriteOrders[i],
        });
      }
      this.favOrders = temp
        .sort((a, b) =>
          a.price_cents > b.price_cents
            ? 1
            : b.price_cents > a.price_cents
            ? -1
            : 0
        )
        .slice(temp.length - 3, temp.length)
        .reverse();

      return favOrders;
    },
    formatPrice(value) {
      let val = (value / 100).toFixed(2);
      return val
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        .replace(".00", "");
    },
    retrieveOrders() {
      // console.log('retrieve orders from end')
      let self = this;
      this.$http.get(`/order/email/${this.email}`).then(function(response) {
        self.orderhistory = response.data;
        // console.log(`self.orderhistory`, self.orderhistory)
        let array2 = response.data.user.map((items) => items.orderInfo);
        let array3 = array2.flat();

        self.getFavoriteOrders(array3);
      });
    },
    getFavoriteItems(array3) {
      for (let i in array3) {
        array3[i].charges.items.cartId = null;
      }
      let filteredArray = array3.filter(
        (x) => x.charges?.items[0]?.price > 299
      );
      let inputArray = filteredArray;
      const uniqueArrayWithCounts = inputArray.reduce((accum, val) => {
        // const dupeIndex = accum.findIndex(arrayItem => arrayItem.name === val.name);
        const dupeIndex = accum.findIndex(
          (arrayItem) =>
            arrayItem.charges.items[0].item_id === val.charges.items[0].item_id
        );
        if (dupeIndex == -1) {
          // Not found, so initialize.
          accum.push({
            qty: 1,
            ...val,
          });
        } else {
          // Found, so increment counter.
          accum[dupeIndex].qty++;
        }
        return accum;
      }, []);
      this.result = uniqueArrayWithCounts
        .sort((a, b) => (a.qty > b.qty ? 1 : b.qty > a.qty ? -1 : 0))
        .slice(uniqueArrayWithCounts.length - 3, uniqueArrayWithCounts.length)
        .reverse();
      return this.result;
    },
  },
  filters: {
    toFixed(value) {
      return value.toFixed(2);
    },
    formatDate(value) {
      if (value) {
        let order = moment(String(value));
        return order.tz("America/Los_Angeles").format("MM/DD");
      }
    },
    reverseArray(value) {
      // slice to make a copy of array, then reverse the copy
      return value.slice().reverse();
    },
    showToFixed: function(value) {
      let decvalue = value / 100;

      return decvalue.toFixed(2);
    },
  },

  mounted() {
    this.retrieveOrders();
    this.printStore();
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/css/orderhistory.scss";
</style>
