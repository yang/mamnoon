<template>
  <div v-if="orderConfirmationModal" class="order-confirmation-modal">
    <div class="container online-menu order-modal-width" style="padding: 10px;">
      <!-- <div @click="closeConfirmationModal()" class="close closeModal"> -->
      <div class="close closeModal closeModalConfirmation">
        <router-link to="/">
          <CloseModal2 />
        </router-link>
      </div>
      <h4 class="order-conf-header">order confirmation</h4>
    </div>
    <div class="container modal-body order-modal-width order-modal-body">
      <h2 v-if="orderCMR.preorder">your order has been scheduled.</h2>
      <div class="mb-15" v-if="orderCMR.preorder">
        it will be ready on <b>{{ orderCMR.scheduled_time | formatDate }}</b
        ><br />
      </div>
      <h2 v-else>thank you for your order.</h2>
      <h6>if you do not receive a confirmation email, please check your spam folder</h6>
      <div>
        <b>{{ orderCMR.fulfillment_info.customer.email }}</b> <br />
        <b>{{ orderCMR.fulfillment_info.customer.phone }}</b>
        <ul class="no-left-pad" v-if="orderCMR.charges.items">
          <li
            class="modal-item"
            v-for="item in orderCMR.charges.items"
            :key="item.name"
          >
            {{ item.name }}
          </li>
        </ul>
        {{ retail }}
        <b v-if="retail"
          >tip: ${{ orderCMR.charges.tip.amount.toFixed(2) / 100 }}</b
        >

        <br />

        <b>taxes: ${{ orderCMR.charges.taxes.toFixed(2) / 100 }}</b>
        <br />

        <b>total: ${{ orderCMR.charges.total.toFixed(2) / 100 }}</b>
        <br /><b v-if="orderCMR.charges.shipping > 0"
          >shipping: ${{ orderCMR.charges.shipping }}</b
        >
        <br />
        <br />
        <hr />

        <span v-if="orderCMR.giftcardbalance"
          >current giftcard balance: {{ orderCMR.giftcardbalance }}</span
        >
        <span v-else>credit transaction</span>

        <!-- <div v-if="orderCMR.giftcardBalance">
current giftcard balance: ${{orderCMR.giftcardBalance}}
</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CloseModal2 from "@/components/svgIcons/CloseModal2";
import moment from "moment";
import tz from "moment-timezone";
export default {
  name: "OrderConfirmationModal",
  props: ["orderConfirmationModal", "orderCMR", "retail"],
  components: {
    CloseModal2,
  },
  methods: {
    closeConfirmationModal() {
      this.orderConfirmationModal = false;
      this.orderCMR = "";
    },
  },
  filters: {
    formatDate(value) {
      if (value) {
        let order = moment(String(value));
        return order
          .tz("America/Los_Angeles")
          .format("LLLL")
          .replace(", 2020", ", at");
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/assets/styles/css/orderconfirmationmodal.scss';
</style>
