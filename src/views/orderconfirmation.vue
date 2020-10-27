<template>
  <div class="login">
    <Nav />
<!-- {{this.$store.state.orderConfirmationModalResponse}} -->


<OrderConfirmationModal :orderConfirmationModal="orderConfirmationModal" :orderConfirmationModalResponse="this.$store.state.orderConfirmationModalResponse" />





  </div>
</template>
<script>
import OrderConfirmationModal from "@/components/OrderConfirmationModal";
import Nav from "@/components/Nav";
export default {
    data(){
        return {
            orderConfirmationModal: true
        }
    },
  components: {
    Nav,
    OrderConfirmationModal
  },
  mounted () {
//  this.$store.state.orderConfirmationModalResponse = {};
// console.log(this.$store.state.orderConfirmationModalResponse)
        if(Object.entries(this.$store.state.orderConfirmationModalResponse).length === 0){
            this.$router.push("/mamnoon");
        }
    
  }
};
</script>
