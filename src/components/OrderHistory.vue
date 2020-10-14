<template>
<div class="container pad-yellow-background pd50">
{{currentUser.currentUserEmail}}
<br>
order history:
<br>
{{response}}


{{orderhistory}}
<!-- <div v-for="order in orderhistory.user" :key="order._id">
<br>
<ul>
<li v-for="item in order.payInfo.charges.items" :key="item.cartId">
{{item.name}}
</li>
</ul>
<hr>
</div> -->

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
this.$http.get(`/order/email/`).then(function (response) {
        console.log(response);

        self.orderhistory = response.data
    })
    },
    testServer(){


 let self = this
this.$http.post(`/testserve/`,{name:'joseph'})
// this.$http.post(`http://localhost:4000/testserve/`,{name:'joseph'})
// this.$http.get(`https://young-hamlet-03679.herokuapp.com/order/`)
    .then(function (response) {
        console.log(response);


self.response = response
        // self.orderhistory = response.data
    })



    }
    },
    mounted(){
        this.retrieveOrders()
        this.testServer()
    }

}

</script>



