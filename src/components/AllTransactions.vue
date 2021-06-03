<template>
<div class="container pad-yellow-background pd50">
<!-- {{currentUser.currentUserEmail}} -->

<br>
<!-- {{response}} -->
<h1>number of orders: {{orderhistory.user.length}}</h1>
<br>
<br>
order history:
<hr>
<br>
<div v-for="order in orderhistory.user.slice().reverse()" :key="order._id" class="position-relative">
  confirmation code: {{order.orderInfo.confirmation_code}}

<!-- {{order.payInfo.externalTransactionId}} -->
<br>
<!-- preorder? {{order.orderInfo.preorder}} -->
<template v-if="order.orderInfo.preorder">
<br>
scheduled time: {{order.orderInfo.scheduled_time}}
</template>
<br>
time placed: {{order.orderInfo.time_placed}}
<br>
${{order.orderInfo.charges.total | showToFixed}}
<br>
<h1 v-if="order.void">VOID</h1>
<!-- <pre> -->
<!-- {{order.payInfo}} -->
<!-- </pre> -->


<template v-if="order.payInfo.data">
<button class="fl-right" v-if="!order.void" @click="issueVoid(order.payInfo.data.uniqueTransId,true)">void</button>
</template>

<template v-if="order.payInfo.uniqueTransId">
<button class="fl-right" v-if="!order.void" @click="issueVoid(order.payInfo.uniqueTransId,false)">void</button>
</template>



<br>
<b>{{order.email}}</b>
&nbsp;&nbsp;
<br>customer name: {{order.orderInfo.fulfillment_info.customer.first_name}}
<br>
<br>
<button @click="toggleOrder(order.orderInfo.id)">show/hide full order data</button>

<pre :id="'order-' + order.orderInfo.id" class="hidden">
  {{order}}
</pre>
<br>

<!-- <template v-if="order.payInfo.externalTransactionId">
debit/credit purchase (id: {{order.payInfo.externalTransactionId}})
</template>
<template v-else>
giftcard purchase
</template> -->
<br>  
<ul class="no-left-pad">
<li v-for="item in order.orderInfo.charges.items" :key="item.cartId" style="margin-bottom:30px;">
<b>{{item.quantity}} x</b> {{item.name}}&nbsp;&nbsp;&nbsp;<b>${{item.price.toFixed()/100}}</b>&nbsp;&nbsp;&nbsp;
<br>  
&nbsp;&nbsp;
&nbsp;&nbsp;
  <template v-if="item.returned">
  <span>(returned)</span>
  </template>
  <template v-else>
<span class="line-link" v-if="!order.void" @click="issueTokenizedReturn(order.payInfo.uniqueTransId,item.price,order.orderInfo.charges.taxes/order.orderInfo.charges.preTotal,item.cartId,order._id)"><u>issue return</u></span>
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


let drawer = document.getElementById('order-'+id)


// console.log(document.getElementById('order-'+id))

if (drawer.classList.contains('hidden')) {
    // do some stuff

    drawer.classList.remove("hidden");
}else{
    drawer.classList.add("hidden");
}



},
    retrieveOrders() {
    let self = this
        this.$http.get(`/order/orderhistory/`).then(function (response) {
        self.orderhistory = response.data
    })
    },
        issueTokenizedReturn(uniqueTransIdString,amount,taxRate,cartId,orderId) {

// console.log(taxRate);


let tax = amount * taxRate

let amountToCalcWithTax = amount + tax


console.log(amountToCalcWithTax);

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
    issueVoid(uniqueTransIdString,data) {

      console.log(uniqueTransIdString)
      this.$http
        .post("/order/issue-void", {
            uniqueTransId: uniqueTransIdString,
            data
          }
          )
        .then((response) => {
        console.log(response)


      this.voidByTransId(uniqueTransIdString,data)

        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },
    voidByTransId(uniqueTransIdString,data){

      console.log(uniqueTransIdString)
      this.$http
        .post("/order/void-transid", {
            uniqueTransId: uniqueTransIdString,
            data
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


pre.hidden{
  display: none;
}
.line-link{
  cursor: pointer;

}
</style>



