<template>
<div class="container pad-yellow-background pd50">
<!-- {{currentUser.currentUserEmail}} -->
<br>
order history:
<hr>
<br>
<!-- {{response}} -->

<div v-for="order in orderhistory.user.slice().reverse()" :key="order._id" class="position-relative">
  {{order.orderInfo.confirmation_code}}

<!-- {{order.payInfo.externalTransactionId}} -->
<br>
preorder? {{order.orderInfo.preorder}}
<br>
{{order.orderInfo.scheduled_time}}
<br>
{{order.orderInfo.time_placed}}
<br>
${{order.orderInfo.charges.total | showToFixed}}
<br>
<h1 v-if="order.void">VOID</h1>
<button class="fl-right" v-if="!order.void" @click="issueVoid(order.payInfo.uniqueTransId)">void</button>
<br>
<b>{{order.email}}</b>


<button @click="toggleOrder(order.orderInfo.id)">show/hide full order data</button>

<pre :id="'order-' + order.orderInfo.id" style="display:none;">
  {{order.orderInfo}}
</pre>

<br>customer name: {{order.orderInfo.fulfillment_info.customer.first_name}}
<br>
<template v-if="order.payInfo.externalTransactionId">
debit/credit purchase (id: {{order.payInfo.externalTransactionId}})
</template>
<template v-else>
giftcard purchase
</template>
<br>  
<ul class="no-left-pad">
<li v-for="item in order.orderInfo.charges.items" :key="item.cartId" style="margin-bottom:30px;">
<b>{{item.quantity}} x</b> {{item.name}}&nbsp;&nbsp;&nbsp;<b>${{item.price.toFixed()/100}}</b>&nbsp;&nbsp;&nbsp;
  <template v-if="item.returned">
  <span>(returned)</span>
  </template>
  <template v-else>
<span class="line-link" v-if="!order.void" @click="issueTokenizedReturn(order.payInfo.uniqueTransId,item.price,item.cartId,order._id)"><u>issue return</u></span>
  </template>



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
    filters: {
    showToFixed: function (value) {
    let decvalue = value/100

    return decvalue.toFixed(2)
}
    },
    methods: {
toggleOrder(id){

console.log(document.getElementById('order-'+id))





},
    retrieveOrders() {
    let self = this
        this.$http.get(`/order/orderhistory/`).then(function (response) {
        self.orderhistory = response.data
    })
    },
        issueTokenizedReturn(uniqueTransIdString,amount,cartId,orderId) {




let tax = amount * 0.101

let amountToCalcWithTax = amount + tax

let amountDiv100 = amountToCalcWithTax/100
let amountToSend = amountDiv100.toFixed(2).toString()

console.log(amountDiv100.toFixed(2).toString())

console.log(amountToSend)

      this.$http
        .post("/order/issue-tokenized-return", {
            uniqueTransId: uniqueTransIdString,
            amount: amountToSend
          }
          )
        .then((response) => {
            console.log(response)

                this.$http
                  .post("/order/update-refunded-items", {
                      cartId: cartId,
                      orderId: orderId
                    }
                    )
                  .then((response) => {
                    console.log(response)

                    this.retrieveOrders()

                  })
                  .catch((e) => {
                    // this.errors.push(e);
                    console.log("errors");
                    console.log(e);
                  });

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

}



.no-left-pad{
  padding-left: 0;
}

</style>



