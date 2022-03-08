<template>
  <div>
    <div class="container pad-yellow-background module-header">previously ordered</div>
      <div class="container pad-yellow-background">
        <div id="order-history">
          <table class="w100">
            <th class="w100">
              <td class="hide-mob"><div>restaurant</div></td>
                <td class="w-5 hide-mob"><div>date</div></td>
                <td class="w-20"><div>items</div></td>
                <td><div class="text-right-mob"> price</div></td>
                <td class="hide-mob"><div>pay method</div></td>
                <td class="hide-mob w-5"><div style="text-align: right;">status</div></td>
                <td>
                  <div style="text-align: right;">actions</div>
                </td>
            </th>   
            <template v-if="orderhistory">
              <tr class="w100" v-for="order in orderhistory.user.slice().reverse()" :key="order._id">
                <td class="hide-mob">
                  <div>
                    <b> {{order.orderInfo.restaurant.toLowerCase()}}</b>
                  </div>
                </td>
                  <td class="w-5 hide-mob">
                    <div>
                      <span class="smblk">
                      {{order.orderInfo.time_placed | formatDate}}
                      </span>
                    </div>
                  </td>
                  <td class="w-20"><div>
                      <b class="mobile orderDetail"> {{order.orderInfo.restaurant.toLowerCase()}}</b> <i class="small-message grey orderDetail">{{order.orderInfo.time_placed | formatDate}}</i>
                      <ul class="order-items">
                        <li v-for="item in order.orderInfo.charges.items" :key="item.cartId">
                          {{item.quantity}} x
                          {{item.name}} <span class="smblk">(${{item.price_cents.toFixed(2)/100}})</span>
                          <div v-if="item.modifiers.length > 0"> 
                            <div class="small-message grey" v-for="mod in item.modifiers" v-bind:key="mod.id">
                              {{mod.name}} +${{mod.price | showToFixed}}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                <td>
                  <div class="text-right-mob">
                    <span class="smblk">
                      <div class="small-message grey">subtotal: ${{ order.orderInfo.charges.preTotal/100 | toFixed}}</div>
                      <div class="small-message grey">tax: ${{ order.orderInfo.charges.taxes/100 | toFixed}}</div>
                      <div class="small-message grey">tip: ${{ order.orderInfo.charges.tip.amount/100 | toFixed}}</div>
                        <b>total: ${{ order.orderInfo.charges.total/100 | toFixed}}</b>
                    </span>
                  </div>
                </td>
                <td class="hide-mob">
                  <div  v-if="order.payInfo && order.payInfo.TransmissionID">
                    gift card
                  </div>
                  <div v-else>
                    debit/credit
                  </div>
                </td> 
                <td class="hide-mob w-5">
                  <div style="text-align: right;">{{order.status}}</div>
                </td> 
                <td>
                  <div>
                    <button v-if="order.orderInfo.restaurant === 'Mamnoon' || order.orderInfo.restaurant === 'Mamnoon Street'" class="order-again-button" @click="reorder(order.orderInfo)">order again</button>
                  </div>
                </td>
              </tr>
            </template>
          </table>
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
    reorder(order){
      let storeCurrentOrder;
      let item = order.charges.items[0];
      let temp = this.$store.state.storeMamnoon.charges.items
      for(let item of temp){
        item['reorder'] = true;
      }
      if(order.restaurant === 'Mamnoon'){
          storeCurrentOrder = this.$store.state.storeMamnoon
      }else{
          storeCurrentOrder = this.$store.state.storeMamnoon
      }
      console.log('item', item)
      console.log('storeCurrentOrder.charges.items', storeCurrentOrder.charges.items)
      storeCurrentOrder.charges.items.push(item);
      this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	
      
      this.$store.commit("reordertrue");
      if(order.restaurant === 'Mamnoon'){
          this.$router.push("/mamnoon-olo");
          }else{
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
      let self = this;
      this.$http.get(`/order/email/${this.email}`).then(function (response) {
        self.orderhistory = response.data;
      });
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
    showToFixed: function (value) {
      let decvalue = value / 100;

      return decvalue.toFixed(2);
    },
  },

  mounted() {
    this.retrieveOrders();
  },
};
</script>

<style lang="scss">
  @import "@/assets/styles/css/orderhistory.scss";
</style>
