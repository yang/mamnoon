<template>
  <div class="login">
    <Nav3 />
<!-- {{this.$store.state.orderCMR}} -->


<OrderConfirmationModal :orderConfirmationModal="orderConfirmationModal" :orderCMR="this.$store.state.orderCMR" />





  </div>
</template>
<script>
import OrderConfirmationModal from "@/components/OrderConfirmationModal";
import Nav3 from "@/components/Nav3";
export default {
    data(){
        return {
            orderConfirmationModal: true
        }
    },
  components: {
    Nav3,
    OrderConfirmationModal
  },
  mounted () {
//  this.$store.state.orderCMR = {};
// console.log(this.$store.state.orderCMR)
        // if(Object.entries(this.$store.state.orderCMR).length === 0){
        //     this.$router.push("/");
        // }
    
  }
};
</script>
