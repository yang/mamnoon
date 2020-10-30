<template>
<div>
<div class="container pad-yellow-background module-header"> food order history</div>
<div class="container pad-yellow-background">
<!-- {{currentUser.currentUserEmail}} -->

<!-- {{response}} -->

<div id="order-history">
<table class="w100">
    <th class="w100"><td><div>date</div></td><td><div>items</div></td><td><div>actions</div></td></th>
<tr class="w100" v-for="order in orderhistory.user.slice().reverse()" :key="order._id">
<td><div>
{{order.payInfo.time_placed | formatDate}}
</div></td>
<td><div>
<ul>
<li v-for="item in order.payInfo.charges.items" :key="item.cartId">
{{item.name}}
</li>
</ul>
</div></td>
    <td><div>
<button class="fl-right" @click="reorder()">re order</button>
</div></td>
</tr>
</table>
</div>
</div>
</div>
</template>

<script>  

import moment from 'moment'

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
        reorder(){
            console.log('reorder')
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
 return moment(String(value)).format('MM/DD/YYYY hh:mm')
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
  td{
    width: 33.33%;
        // display: inline-block;
  }
}

tr{
        border-bottom: 1px solid black;
}

tr td{
    padding: 18px 10px 15px 10px;
    // height: 56px;
    margin-bottom: 0;
    display:table-cell;
    vertical-align:top;

&.primary{
    background: #bfebbf;

}

}
}

</style>


