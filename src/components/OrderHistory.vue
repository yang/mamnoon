<template>
    <div id="upserveolo">
      <div class="container pad-yellow-background module-header">favorite items</div>
        <div class="container pad-yellow-background">
          <div class="row no-lr-margin" id="order-history" >
          <template v-for="item in result">
                  <div class="filtree-full-testing-favorites" @click="reorder(item)">
                    <div class="yellow-bg-test" >
                      <div class="half-width2left">
                        <div class="content-box">
                          <!-- <div class="showBox"  v-if="item.item_object.images" v-bind:style="{ backgroundImage: 'url(' + item.item_object.images.online_ordering_menu.main + ')' }"></div> -->
                            <div class="name">{{item.charges.items[0].name}}</div>
                              <div
                                  v-if="item.charges.items[0].item_object.description"
                                  class="food-description"
                                >{{item.charges.items[0].item_object.description.replace("[LINEBREAK]","") | truncate(60, '...')}}</div>
                            <div class="food-price">
                              ${{ formatPrice(item.charges.items[0].price_cents) }}<span class="checkIfPackage" ></span>   
                            </div>
                    <br />
                      </div>
                    </div>
                    <div class="half-width2right" v-if="item">
                      <img :src="item.charges.items[0].item_object.images.online_ordering_menu.main" class="backgroundImage"/>
                      </div> 
                  </div>
                </div>
        </template>
        </div>
    </div>


    <div id="upserveolo">
      <div class="container pad-yellow-background module-header">favorite orders</div>
        <div class="container pad-yellow-background">
          <div class="row no-lr-margin" id="order-history" >
          <template v-for="order in favOrders">

           
                  <div class="filtree-full-testing-favorites" @click="reorderFavoriteOrder(order.favoriteOrders)">
                    <div class="yellow-bg-test" >
                      <div class="half-width2left">
                        <div class="content-box">
                          <ul class="favOrderList">
                            <li>{{order.favoriteOrders[0].restaurant}}</li>
                        <li class="name" v-for="o, index in order.favoriteOrders">
                         {{o.quantity}} x {{o.name}}</li>
                         <li class="name">
                         <a class="" @click="reorderFavoriteOrder(order.favoriteOrders)"><u>order again</u></a>
                         </li>
                          </ul>

<!--<button class="fl-right sm-button mr-0" @click="reorderFavoriteOrder(order.favoriteOrders)">order again</button>-->

                            <!-- <div class="name">{{order[0].name}}</div> -->
                            <!-- <div class="name">{{order[1].name}}</div> -->
                              <!-- <div
                                  v-if="item.charges.items[0].item_object.description"
                                  class="food-description"
                                >{{item.charges.items[0].item_object.description.replace("[LINEBREAK]","") | truncate(60, '...')}}</div>
                            <div class="food-price">
                                  ${{ formatPrice(item.charges.items[0].price_cents) }}<span class="checkIfPackage" ></span> 
                            </div> -->
                    <br />
                      </div>
                    </div>
                    <div class="half-width2right" >
                      <!-- <img :src="item.charges.items[0].item_object.images.online_ordering_menu.main" class="backgroundImage"/> -->
                      </div> 
                  </div>
                </div>
        </template>
        </div>
      </div>
    </div>


<div class="container pad-yellow-background module-header">previously ordered</div>
<div class="container pad-yellow-background">

<div id="order-history">
<table class="w100">
    <th class="w100">
       <td class="hide-mob"><div>restaurant</div></td>
        <td class="w-5 hide-mob"><div>date</div></td>
        <td class="w-20"><div>items</div></td>
        <td><div class="text-right-mob"> price</div></td>
        <td class="hide-mob"><div>pay method</div></td>
        <!-- <td><div>delivery/pickup</div></td> -->
       <td class="hide-mob w-5"><div style="text-align: right;">status</div></td>

                <td><div style="text-align: right;">actions</div></td>
</th>   

<template v-if="orderhistory">
<tr class="w100" v-for="order in orderhistory.user.slice().reverse()" :key="order._id">
 <td class="hide-mob">
    <div>
    <b> {{order.orderInfo.restaurant.toLowerCase()}}</b>
    </div>
</td>
 <td class="w-5 hide-mob"><div>
    <span class="smblk">
{{order.orderInfo.time_placed | formatDate}}
</span>
</div></td>
 <td class="w-20"><div>
    <b class="mobile orderDetail"> {{order.orderInfo.restaurant.toLowerCase()}}</b> <i class="small-message grey orderDetail">{{order.orderInfo.time_placed | formatDate}}</i>
<ul class="order-items">
<li v-for="item in order.orderInfo.charges.items" :key="item.cartId">
    {{item.quantity}} x
{{item.name}} <span class="smblk">(${{item.price_cents.toFixed(2)/100}})</span>


<div v-if="item.modifiers.length > 0"> 
<div class="small-message grey" v-for="mod in item.modifiers">
{{mod.name}} +${{mod.price | showToFixed}}
</div>
</div>
</li>
</ul>
</div></td>



<td>
    <div class="text-right-mob">
        <span class="smblk">
<div class="small-message grey">subtotal: ${{ order.orderInfo.charges.preTotal/100 | toFixed}}</div>
<div class="small-message grey">tax: ${{ order.orderInfo.charges.taxes/100 | toFixed}}</div>
<div class="small-message grey">tip: ${{ order.orderInfo.charges.tip.amount/100 | toFixed}}</div>
    <b>total: ${{ order.orderInfo.charges.total/100 | toFixed}}</b>
    </span>
    </div></td>
<td class="hide-mob">
    
    <div  v-if="order.payInfo && order.payInfo.TransmissionID">
<!-- {{order.payInfo}} -->
gift card
   </div>
       <div v-else>
debit/credit
   </div>
   </td> 

<!-- <td><div>
{{order.orderInfo.fulfillment_info.type}}
   </div></td>  -->
<td class="hide-mob w-5"><div style="text-align: right;">
{{order.status}}
   </div></td> 

    <td><div>


      <!-- {{order.orderInfo.restaurant}} -->

<button v-if="order.orderInfo.restaurant === 'Mamnoon' || order.orderInfo.restaurant === 'Mamnoon Street'" class="fl-right sm-button mr-0" @click="reorder(order.orderInfo)">order again</button>


<!-- <pre>{{order.orderInfo}}</pre> -->
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
      let image = "item.item_object.images.online_ordering_menu.main"
    return {
        orderhistory: null,
        response: null,
        result: [],
        favOrders: [],
        image: image
        }
    },
    name: 'OrderHistory',
    props: ['currentUser','emailAddress'],
    methods: {
      printStore() {
        console.log('this.$store.state', this.$store.state);
      },
      reorderFavoriteOrder(order){
          let storeCurrentOrder
          if(order[0].restaurant === 'Mamnoon'){
              storeCurrentOrder = this.$store.state.storeCurrentOrderUpdateMamnoon

          }else{
              storeCurrentOrder = this.$store.state.storeCurrentOrderUpdateMamnoon
          }
          // storeCurrentOrder.charges.items = order;

console.log('order');
          console.log(order);

          this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	
          
          this.$store.commit("reordertrue");
          if(order[0].restaurant === 'Mamnoon'){
              this.$router.push("/mamnoontesting");
              }else{
              this.$router.push("/mamnoonstreettesting");
          }
        },
        reorder(order){
          let storeCurrentOrder = order;
          this.$store.commit("upserveOrderCurrentOrder", { storeCurrentOrder });	
          
          
          this.$store.commit("reordertrue");
          if(order.restaurant === 'Mamnoon'){
              this.$router.push("/mamnoontesting");
              }else{
              this.$router.push("/mamnoonstreettesting");
          }
        },
        formatPrice(value) {
        let val = (value/100).toFixed(2)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(".00","");
    },
      retrieveOrders() {
          // console.log('retrieve orders from end')
        let self = this
          this.$http.get(`/order/email/${this.currentUser.currentUserEmail}`).then(function (response) {
        self.orderhistory = response.data
        // console.log(`self.orderhistory`, self.orderhistory)
        let array2 = response.data.user.map(items => items.orderInfo)
        let array3 = array2.flat();

        self.getFavoriteItems(array3);
        self.getFavoriteOrders(array3);
      })
    },

    getFavoriteOrders(array3){
        let favoriteOrders = [];
        let temp = [];
        let favOrders = [];
        for(let i in array3){
          if(array3[i].charges.items.length > 1){
            array3[i].charges.items[0].restaurant = array3[i].restaurant
            favoriteOrders.push(array3[i].charges.items)
          }
        }

        let orderTotal = 0;
        // console.log(`favoriteOrders`, favoriteOrders)
        for(let i = 0; i < favoriteOrders.length; i++){
          temp.push({
            favoriteOrders: favoriteOrders[i]
          })
        }
        this.favOrders = temp.sort((a,b) => (a.price_cents > b.price_cents) ? 1 : ((b.price_cents > a.price_cents) ? -1 : 0)).slice(temp.length-3, temp.length).reverse();

        return favOrders;
    },
    getFavoriteItems(array3) {
        for(let i in array3){
            array3[i].charges.items.cartId = null;
        }
        let filteredArray = array3.filter(x=>x.charges?.items[0]?.price>299);
        let inputArray = filteredArray;
        const uniqueArrayWithCounts = inputArray.reduce((accum, val) => {
          // const dupeIndex = accum.findIndex(arrayItem => arrayItem.name === val.name);
        const dupeIndex = accum.findIndex(arrayItem => arrayItem.charges.items[0].item_id === val.charges.items[0].item_id);
          if (dupeIndex == -1) {
            // Not found, so initialize.
            accum.push({
              qty: 1,
              ...val
            });
          } else {
            // Found, so increment counter.
            accum[dupeIndex].qty++;
          }
          return accum;
        }, []);
        this.result = uniqueArrayWithCounts.sort((a,b) => (a.qty > b.qty) ? 1 : ((b.qty > a.qty) ? -1 : 0)).slice(uniqueArrayWithCounts.length-3, uniqueArrayWithCounts.length).reverse();
        return this.result;
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
        this.retrieveOrders()
        this.printStore()
    }

}

</script>



<style lang="scss">
.fl-right{
    float: right;
}

.menu-line-testing {
  border-bottom: 0 solid #ddd;
  padding: 10px 0 6px;
  margin: 6px 0;
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

.yellow-bg-test{
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: calc(100% - 5px);
  display: flex;
  align-items: center;
  margin: 5px;
  .content-box{
      background: transparent;
  }
}
.half-width2left {
  width: 65%;
  float: left;
  height: 140px;
  overflow: hidden;
}

.half-width2right {
  width: 35%;
  float: left;
  height: 140px;
  overflow: hidden;
}


.content-box .name,
.content-box .food-description,
.menu-header{
text-transform: lowercase;
}

table td{
    display:table-cell;
    vertical-align:top;
}

li {
  border-bottom:  0 !important;
  position: relative;
}

.content{
    position: absolute;
    width: 400px;
    height: 400px;
    color: transparent;
    background-size: 100%;
    left: 50%;
    transform: translateX(-50%);
    // top: 30px;
    top: 20px;
  }


table td div{
    height:100%;
}

.w100{
  width: 100%;
    display: inline-table;
}

.filtree-full-testing-favorites {
  width: calc(33% - 0px);
  float: left;
  height: 168px;
  background: transparent;
  padding: 0px;
  overflow: hidden;
  margin: 1px;
  padding-bottom: 5px;
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

.content-box .name{
      font-size: .9rem;
    font-weight: 600;
}

.content-box .name,
.content-box .food-description,
.menu-header{
text-transform: lowercase;
}

.name{
      font-size: .9rem;
    font-weight: 600;
}

tr{
        border-bottom: 1px solid #cacaca;
}

tr td{
    
    padding: 18px 5px 10px 0px;
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
    border-bottom: 0;
}

.mr-0{
    margin-right: 0;
}


@media only screen and (max-width: 768px) {

.hide-mob{
display: none !important;

}


.filtree-full-testing-favorites {
  width: 100%;
  float: left;
  height: 140px;
  background: transparent;
  padding: 0px;
  overflow: hidden;
  margin: 1px;
  padding-bottom: 5px;
}

.text-right-mob{
  text-align: right !important;
}

}


.pad-yellow-background{
    // background: #fff367;
    padding: 20px 30px;
    margin-bottom: 20px;
}

.container.pad-yellow-background{
  padding-left: 0 !important;
  padding-right: 0 !important;


@media only screen and (max-width: 768px) {

  padding-left: 15px !important;
  padding-right: 15px !important;


}

}


.giftcard-item.w100 td:first-child{
    padding-left: 0;
}



#order-history tr:last-child {
    border-bottom: 0;
}

.w-20{
    width: 20% !important;
}

.w-5{
    width: 5% !important;
}

.small-message{
    color: $nadi-red-color;
    color: #f58e58;
    font-size: .9rem;
    font-style: italic;

    &.grey{
      color: #343a40;
      font-size: .8rem;
    }
}



@media only screen and (max-width: 768px) {
.w-20{
    width: 30% !important;
}
}

.orderDetail{
        display: none;
    }

@media only screen and (max-width: 768px) {

.orderDetail{
        display: inline;
    }
}

.backgroundImage {
    background-position: center center;
    background-size: cover;
    height: 100%;
}


.favOrderList{
  list-style-type: none;
  padding-left: 0;
  font-weight: 400;
}

</style>