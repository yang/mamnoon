<template>
<div>
<div class="container pad-yellow-background module-header"> food order history</div>
<div class="container pad-yellow-background">
<!-- {{currentUser.currentUserEmail}} -->

<!-- {{response}} -->

<div id="order-history">
<table class="w100">
    <th class="w100">
        <td><div>date</div></td>
        <td><div>items</div></td>
        <td><div>price</div></td>

        <td><div>pay method</div></td>
        <td><div>delivery/pickup</div></td>
        <td><div>status</div></td>
        <!-- <td><div>actions</div></td> -->
</th>   


<tr class="w100" v-for="order in orderhistory.user.slice().reverse()" :key="order._id">
  <td><div>
    <span class="smblk">
{{order.orderInfo.time_placed | formatDate}}
</span>
</div></td>
 <td><div>
<ul class="order-items">
<li v-for="item in order.orderInfo.charges.items" :key="item.cartId">
    {{item.quantity}} x
{{item.name}} <span class="smblk">(${{item.price_cents.toFixed(2)/100}})</span>
</li>
</ul>




</div></td>
<td><div>
        <span class="smblk">
    ${{ order.orderInfo.charges.total.toFixed(2)/100}}
    </span>
    </div></td>
<td>
    
    <div v-if="order.payInfo.TransmissionID">
<!-- {{order.payInfo}} -->
gift card
   </div>
       <div v-else>
debit/credit
   </div>
   </td> 

<td><div>
{{order.orderInfo.fulfillment_info.type}}
   </div></td> 

<td><div>
{{order.status}}
   </div></td> 

    <!-- <td><div>
<button class="fl-right sm-button mr-0" @click="reorder(order.orderInfo)">re order</button>
</div></td> -->
</tr>
</table>
</div>
</div>
</div>
</template>

<script>  

import moment from 'moment'
import tz from 'moment-timezone'

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
        reorder(order){

            let storeCurrentOrder = order

// this.$store.commit("orderFromTransactionHistory", { orderFromTransactionHistory });
   this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	


            console.log(order)
          this.$router.push("/mamnoon");



        },
    retrieveOrders() {
    let self = this
        this.$http.get(`/order/email/${this.currentUser.currentUserEmail}`).then(function (response) {
        self.orderhistory = response.data
    })
    },
        },
            filters: {
    formatDate(value) {
  if (value) {
        let order = moment(String(value));
        return order.tz('America/Los_Angeles').format('MM/DD/YYYY');
  }
},
reverseArray(value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse();
}
    },


    
    mounted(){
        this.retrieveOrders()
    }

}

</script>



<style lang="scss">
.fl-right{
    float: right;
}


#order-history{
table{
    border-collapse:collapse;
    padding:0;
    display: table
}

table th,table tr{
    // display:table-cell;
    vertical-align:top;
}



table td{
    display:table-cell;
    vertical-align:top;
}

table td div{
    height:100%;
}

.w100{
  width: 100%;
    display: inline-table;
}

.w100{

  td.sm-cell{
    width: 5%;
        // display: inline-block;
  }

  td.lg-cell{
    width: 25%;
        // display: inline-block;
  }


  td{
    width: 15%;
        // display: inline-block;
  }
}

tr{
        border-bottom: 1px solid black;
}

tr td{
    
    padding: 18px 10px 10px 0px;
    // height: 56px;
    margin-bottom: 0;
    display:table-cell;
    vertical-align:top;

&.primary{
    background: #bfebbf;

}
&:last-child{
padding-right: 0;



}

}
}

.smblk{
    color: #000;
    font-size: .9rem;
}


ul.order-items{
    padding-left: 0;
    color: #000;
    font-size: .9rem;
    list-style: none;
}

.mr-0{
    margin-right: 0;
}

</style>


