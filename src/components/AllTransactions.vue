<template>
<div class="container pad-yellow-background pd50">
<!-- {{currentUser.currentUserEmail}} -->
<br>
order history:
<br>
<!-- {{response}} -->


<!-- {{orderhistory}} -->


<div v-for="order in orderhistory.user" :key="order._id">
<br>
transaction id:
<pre>
{{order.orderInfo.externalTransactionId}}
</pre>
<ul>
<li v-for="item in order.payInfo.charges.items" :key="item.cartId">
{{item.name}}




</li>
</ul>
<br>
<button @click="issueTokenizedReturn(order.orderInfo.uniqueTransId)">issue return</button>
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
        .post("/issue-tokenized-return", {
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
    }
    },
    mounted(){
        this.retrieveOrders()
    }

}

</script>



