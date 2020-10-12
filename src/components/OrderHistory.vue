<template>
<div class="container pad-yellow-background pd50">
{{currentUser.currentUserEmail}}
<br>
order history:
<br>




<div v-for="order in orderhistory.user" :key="order._id">
<br>
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
        orderhistory: null
        }
    },
    name: 'OrderHistory',
    props: ['currentUser'],
    methods: {
retrieveOrders() {
    
    let self = this

this.$http.get(`https://young-hamlet-03679.herokuapp.com/order/${this.currentUser.currentUserEmail}`)
    .then(function (response) {
        console.log(response);

        self.orderhistory = response.data
    })
    }
    },
    mounted(){
        this.retrieveOrders()
    }

}

</script>



