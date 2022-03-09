<template>
  <div v-if="unableToProcessModal" class="order-confirmation-modal">
    <div class="container online-menu order-modal-width" style="padding: 10px;">
      <div class="close closeModal closeModalConfirmation">
        <router-link to="/">
          <CloseModal2 />
        </router-link>
      </div>
      <h4 class="order-conf-header">unable to process</h4>
    </div>
    <div class="container modal-body order-modal-width order-modal-body">
      <h2>
        there is something wrong on our end, and we are currently unable to
        process your order :(
      </h2>
      <div class="mb-15"><b>please try again later</b><br /></div>
      <div v-if="currentOrder.restaurant === 'Mamnoon'">
        <p>
          please use this link to complete your order:
          <a href="https://app.upserve.com/s/mamnoon-llc-seattle">order here</a>
        </p>
      </div>
      <div v-else-if="currentOrder.restaurant === 'Mamnoon Street'">
        <p>
          please use this link to complete your order:
          <a href="https://app.upserve.com/s/mamnoon-street-seattle"
            >order here</a
          >
        </p>
      </div>
      <div>
        <br />
        <br />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import CloseModal2 from "@/components/svgIcons/CloseModal2";
export default {
  name: "UnableToProcessModal",
  props: ["unableToProcessModal", "currentOrder"],
  components: {
    CloseModal2,
  },
  methods: {
    closeConfirmationModal() {
      this.unableToProcessModal = false;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/assets/styles/css/unabletoprocessmodal.scss';
</style>
