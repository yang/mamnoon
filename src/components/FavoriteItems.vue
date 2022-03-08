<template>
  <div id="upserveolo">
    <div class="container pad-yellow-background module-header">
      favorite items
    </div>
    <div class="container pad-yellow-background">
      <div class="row no-lr-margin" id="order-history">
        <template v-for="item in result">
          <div
            class="filtree-full-testing-favorites"
            @click="reorder(item)"
            v-bind:key="item.id"
          >
            <div class="yellow-bg-test">
              <div class="half-width2left">
                <div class="content-box">
                  <div class="name">{{ item.charges.items[0].name }}</div>
                  <div
                    v-if="item.charges.items[0].item_object.description"
                    class="food-description"
                  >
                    {{
                      item.charges.items[0].item_object.description.replace(
                        "[LINEBREAK]",
                        ""
                      ) | truncate(60, "...")
                    }}
                  </div>
                  <div class="food-price">
                    ${{ formatPrice(item.charges.items[0].price_cents)
                    }}<span class="checkIfPackage"></span>
                  </div>
                  <br />
                </div>
              </div>
              <div class="half-width2right" v-if="item">
                <img
                  :src="
                    item.charges.items[0].item_object.images
                      .online_ordering_menu.main
                  "
                  class="backgroundImage"
                />
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
      result: [],
      image: image,
    };
  },
  name: "OrderHistory",
  props: ["currentUser", "emailAddress", "email"],
  methods: {
    reorder(order) {
      let storeCurrentOrder;
      let item = order.charges.items[0];
      let temp = this.$store.state.storeMamnoon.charges.items;
      for (let item of temp) {
        item["reorder"] = true;
      }
      if (order.restaurant === "Mamnoon") {
        storeCurrentOrder = this.$store.state.storeMamnoon;
      } else {
        storeCurrentOrder = this.$store.state.storeMamnoon;
      }
      console.log("item", item);
      console.log(
        "storeCurrentOrder.charges.items",
        storeCurrentOrder.charges.items
      );
      storeCurrentOrder.charges.items.push(item);
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });

      this.$store.commit("reordertrue");
      if (order.restaurant === "Mamnoon") {
        this.$router.push("/mamnoon-olo");
      } else {
        this.$router.push("/mamnoonstreet-olo");
      }
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

        self.getFavoriteItems(array3);
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
