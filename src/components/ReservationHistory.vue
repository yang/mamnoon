<template>
<div>
<div class="container pad-yellow-background module-header"> reservation history</div>
<div class="container pad-yellow-background">

<div id="order-history">

<table class="w100">
    <th class="w100">
       <td class="hide-mob"><div>restaurant</div></td>
        <td class="w-5 hide-mob"><div>date and time</div></td>
                <td class="w-5 hide-mob"><div># of guests</div></td>
        <td class="w-20"><div>items</div></td>
 
</th> 

<template v-if="reservations">
<tr class="w100" v-for="reservation in reservations" :key="reservation.date">
   <td class="hide-mob"><div>mbar</div></td>
        <td class="w-5 hide-mob"><div>{{reservation.date}}
            <br>
 {{reservation.reservationsList.roomsinfo.allInfo.arrival_time}}



            </div></td>
                    <td class="w-5 hide-mob"><div>

  {{reservation.reservationsList.roomsinfo.allInfo.max_guests}}
            </div></td>
<td class="hide-mob"><div>
            
                        


                        <!-- {{reservation.upserveInfo.upserveInfo}} -->
               <ul class="order-items">
<li v-for="item in reservation.upserveInfo.upserveInfo.items" :key="item.cartId">

{{item.name}}&nbsp;{{item.price}}
</li>
<li><br>
    <b>tip:</b> {{reservation.upserveInfo.upserveInfo.tip_amount}}</li>
<li><b>total:</b> {{reservation.upserveInfo.upserveInfo.amount}}</li>

</ul>
               
               
                
                </div></td>
  </tr>
</template>
<template v-if="reservationsmamnoon">
<tr class="w100" v-for="reservation in reservationsmamnoon" :key="reservation.date">
   <td class="hide-mob"><div>mamnoon</div></td>
        <td class="w-5 hide-mob"><div>{{reservation.date}}
            <br>
 {{reservation.reservationsList.roomsinfo.allInfo.arrival_time}}
            </div></td>
<td class="hide-mob"><div>
            
               <ul class="order-items">
<li v-for="item in reservation.upserveInfo.upserveInfo.items" :key="item.cartId">

{{item.name}}&nbsp;{{item.price}}
</li>
</ul>
               
               
                
                </div></td>
  </tr>
</template>

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
        reservationsmamnoon: null,
        reservations: null,
        response: null
        }
    },
    name: 'ReservationHistory',
    props: ['currentUser','emailAddress','email'],
    methods: {

    retrieveReservationsMamnoon() {
        // console.log('retrieve reservations')
    let self = this
        this.$http.get(`/reservation/retrievemamnoon/${this.email}`).then(function (response) {
// this.$http.get(`/order/email/${this.$auth._data.user.email}`).then(function (response) {



// console.log(response.data.reservations)

        self.reservationsmamnoon = response.data.reservations
    })
    },


    retrieveReservations() {
        // console.log('retrieve reservations'  )
    let self = this
        this.$http.get(`/reservation/retrieve/${this.email}`).then(function (response) {
// this.$http.get(`/order/email/${this.$auth._data.user.email}`).then(function (response) {



// console.log(response.data.reservations)

        self.reservations = response.data.reservations
    })
    },



        },
            filters: {
toFixed(value){
    return value.toFixed(2)
},
    formatDate(value) {
  if (value) {
        let order = moment(String(value));
        return order.tz('America/Los_Angeles').format('MM/DD');
  }
},
reverseArray(value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse();
},
showToFixed: function (value) {
    let decvalue = value/100

    return decvalue.toFixed(2)
}
  },


    
    mounted(){
   
        this.retrieveReservations()
           
        this.retrieveReservationsMamnoon()
    }

}

</script>



<style lang="scss">
  @import '@/assets/styles/css/reservationhistory.scss';
</style>


