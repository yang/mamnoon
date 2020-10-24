<template>
<div class="container pad-yellow-background pd50">
<!-- {{currentUser.currentUserEmail}} -->
<br>
order history:
<br>
<!-- {{response}} -->
<!-- {{orderhistory}} -->
<div v-for="order in orderhistory.user" :key="order._id" class="position-relative">


<!-- {{order.orderInfo.externalTransactionId}} -->

<h1 v-if="order.void">VOID</h1>
<button v-if="!order.void" @click="issueVoid(order.orderInfo.uniqueTransId)">void</button>

<!-- &nbsp;&nbsp; -->
<!-- <button v-if="!order.void" @click="issueTokenizedReturn(order.orderInfo.uniqueTransId)">issue return</button> -->
<br>
transaction id:
<pre>
  <!-- {{order}} -->
{{order.orderInfo.externalTransactionId}}
{{order.uniqueTransId}}
</pre>
<ul>
<li v-for="item in order.payInfo.charges.items" :key="item.cartId">
{{item.name}}




</li>
</ul>
<br>

<hr>
</div>


</div>
</template>

<script>  

export default {
    data( ) {
    return {
        orderhistory: null,
        response: null
        }
    },
    name: 'OrderHistory',
    props: ['currentUser'],
    methods: {
    retrieveOrders() {
    let self = this
        this.$http.get(`/order/orderhistory/`).then(function (response) {
        self.orderhistory = response.data
    })
    },
        issueTokenizedReturn(uniqueTransIdString) {
      this.$http
        .post("/order/issue-tokenized-return", {
            uniqueTransId: uniqueTransIdString,
            amount: "0.01"
          }
          )
        .then((response) => {
console.log(response)
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },
    issueVoid(uniqueTransIdString) {

      console.log(uniqueTransIdString)
      this.$http
        .post("/order/issue-void", {
            uniqueTransId: uniqueTransIdString,
          }
          )
        .then((response) => {
        console.log(response)


      this.voidByTransId(uniqueTransIdString)

        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },
    voidByTransId(uniqueTransIdString){

      console.log(uniqueTransIdString)
      this.$http
        .post("/order/void-transid", {
            uniqueTransId: uniqueTransIdString,
          }
          )
        .then((response) => {
        console.log(response)


// location.reload();
this.retrieveOrders()

        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });



    }
    },
    mounted(){
        this.retrieveOrders()
    }

}

</script>

<style lang="scss">
.position-relative{


h1{
    position: absolute;
    right: 0;
    top: 0;
}
button{
    position: absolute;
 right: 0;
}




}



</style>



