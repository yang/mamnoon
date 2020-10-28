<template>
<div class="container pad-yellow-background pd50">
<!-- {{currentUser.currentUserEmail}} -->
<br>
food order history:
<br>
<!-- {{response}} -->
<div v-for="order in orderhistory.user" :key="order._id">
<button class="fl-right" @click="reorder()">re order</button>
<br>
{{order.payInfo.time_placed}}
<ul>
<li v-for="item in order.payInfo.charges.items" :key="item.cartId">
{{item.name}}
</li>
</ul>
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
    mounted(){
        this.retrieveOrders()
    }

}

</script>



<style lang="scss">
.fl-right{
    float: right;
}
</style>


