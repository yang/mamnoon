<template>

<div class="container">
<div class="row">
<div class="col-6">

       <h1>{{ loadedorderRendered.orderInfo.fulfillment_info.customer.first_name.replaceAll("nx ","") }} {{ loadedorderRendered.orderInfo.fulfillment_info.customer.last_name }}</h1>
        <b>{{ loadedorderRendered.email }}</b>
        <br><br>
       location: {{ loadedorderRendered.orderInfo.restaurant }}
     <br>


<!--accepted on upserve pos: {{ loadedorderRendered.orderAccepted}}-->
<!--<br>
order posted to nadimama: {{ loadedorderRendered.orderPosted}}-->

<br>

<br>

<b>tip: ${{loadedorderRendered.orderInfo.charges.tip.amount | showToFixed}}</b>

<br>
<b>tax: ${{loadedorderRendered.orderInfo.charges.taxes | showToFixed}}</b>
<br>
<b>total: ${{loadedorderRendered.orderInfo.charges.total | showToFixed}}</b>

<br>
<template v-if="loadedorderRendered.timeClosed">
status: <b>ticket closed</b>
</template>


<template v-if="loadedorderRendered.cancelled">
&nbsp;<b>(cancelled)</b>
</template>
<template v-else>

<template v-if="!loadedorderRendered.timeClosed && cancellable(loadedorderRendered.orderInfo.scheduled_time)">
<a @click="cancelPreorder(loadedorderRendered._id)">&nbsp;<u>cancel</u></a>
</template>
</template>

        <br /><br />
      <template v-if="currentView === loadedorderRendered.orderInfo.restaurant || currentView === 'empty'">
 

        <template v-if="hasTransmissionId(loadedorderRendered.payInfo)">
          gift card transaction
        </template>
        <template v-else>
          credit debit transaction
            <span v-if="loadedorderRendered.sandbox">(sandbox)</span>
        </template>
        <br />
        confirmation code: {{ loadedorderRendered.orderInfo.confirmation_code }} <br /><br />
        <template v-if="loadedorderRendered.orderInfo.preorder">
          <b>preorder</b>
        </template>
        <template v-else>
          <b>regular order</b>
        </template>

        <template v-if="loadedorderRendered.void">
          <h1>VOID</h1>
        </template>
        <template
          v-else-if="voidValid(order) && !hasTransmissionId(loadedorderRendered.payInfo)"
        >
          <button
            class="fl-right btn-nadi"
            v-if="!loadedorderRendered.void"
            @click="issueVoid(loadedorderRendered.payInfo.uniqueTransId, true)"
          >
            void
          </button>
          <h1 v-else>VOID</h1>
        </template>
        <template v-else>
          <i>&nbsp;(void unavailable)</i>
        </template>

        <br />
        <template v-if="loadedorderRendered.orderInfo.preorder">
          <br />
          scheduled time: {{ loadedorderRendered.orderInfo.scheduled_time | formatDate }}
        </template>
        <br />
        time placed: {{ loadedorderRendered.orderInfo.time_placed | formatDate }}
        <br />

        <template v-if="loadedorderRendered.timeClosed">
          time closed: {{ timeClosedMoment(loadedorderRendered.timeClosed) }}
        </template>
        <br /><br />
        <h2>${{ loadedorderRendered.orderInfo.charges.total | showToFixed }}</h2>
        <br />
      
  

      


    </template>

</div>




<div class="col-6">
<br>

        <ul class="no-left-pad">
          <li
            v-for="item in loadedorderRendered.orderInfo.charges.items"
            :key="item.cartId"
            style="margin-bottom:20px;"
          >


<!--return checkboxes-->
          <div v-if="returnMultiple" class="returnCheck" :id="'returnList-'+item.cartId" @click="
                    addToReturnList(
                      loadedorderRendered.payInfo.uniqueTransId,
                      item.price,
                      loadedorderRendered.orderInfo.charges.taxes /
                        loadedorderRendered.orderInfo.charges.preTotal,
                      item.cartId,
                      loadedorderRendered._id
                    )
                  "></div>
        <div v-if="returnMultiple" class="returnCheck remove" :id="'returnListRemove-'+item.cartId" @click="
                    removeFromReturnList(item.cartId)" style="display:none;"></div>
<!--return checkboxes-->







            <b>{{ item.quantity }} x</b> {{ item.name }}&nbsp;&nbsp;&nbsp;<b
              >${{ item.price.toFixed() / 100 }}</b
            >&nbsp;&nbsp;&nbsp;
            
            <br />

            <template v-if="item.modifiers.length > 0 ">
              <ul style="padding-left: 0;list-style-type:none;font-size:12px;">
              <li v-for="mod in item.modifiers">
              {{mod.name}} +${{mod.price/100}}
                </li>
              </ul>
            </template>
            
            &nbsp;&nbsp;&nbsp;
            
            <i v-if="item.instructions != ''"style="font-size:10px;display:block;">({{item.instructions}})</i>
          
            &nbsp;&nbsp; &nbsp;&nbsp;

            <template v-if="loadedorderRendered.orderPosted">



                  <template v-if="item.returned === true">

                          <template v-if="!loadedorderRendered.cancelled">
                            <span>(returned)</span>
                            </template>
                            <template v-else>
                            <span>  (returned)</span>
                            </template>

                  </template>
                  <template v-else>

                        <template v-if="loadedorderRendered.payInfo.uniqueTransId">
                          <span
                            class="line-link"
                            v-if="!loadedorderRendered.void && !returnMultiple"
                            @click.once="
                              issueTokenizedReturn(
                                loadedorderRendered.payInfo.uniqueTransId,
                                item.price,
                                loadedorderRendered.orderInfo.charges.taxes /
                                  loadedorderRendered.orderInfo.charges.preTotal,
                                item.cartId,
                                loadedorderRendered._id,
                                true
                              )
                            "
                            ><u :id="'not-'+item.cartId">issue return</u>
                            <span style="display:none;" :id="'is-'+item.cartId">(returned)</span></span>
                        </template>


                  </template>



            </template>

          </li>
        </ul>

        <br />


<!--<template v-if="loadedorderRendered.orderAccepted">
order has been accepted<br>
</template>-->



<template v-if="loadedorderRendered.orderAccepted">
<template v-if="loadedorderRendered.orderInfo.charges.items.length >1">
<template v-if="!loadedorderRendered.void">
<template v-if="checkForReturnable">

        <u v-if="returnMultiple" @click="toggleReturnMultiple()">cancel return multiple</u>
        <u v-else @click="toggleReturnMultiple()">return multiple</u>
        <br/>
       <u v-if="returnMultiple && returnList.length > 0" @click="returnMultipleItems()">return selected</u>

</template>
</template>
</template>
</template>

<br />

    <template v-if="loadedorderRendered.orderInfo.preorder">
    <span class="small-message grey">
<template v-if="!loadedorderRendered.orderPosted">
this preorder has not been posted yet. items cannot be voided or refunded until order is posted.
</template>
<!--{{returnList}}-->

        <br/>


    </span>
</template>
        <br/>





</div>
<div class="col-12">

    <button class="btn-nadi" @click="toggleOrder(loadedorderRendered.orderInfo.id)">
          <template v-if="toggleOrderState">hide</template><template v-else>show</template> full order data
        </button>
<br>





<div v-if="toggleOrderState" class="codeBox">
        <pre :id="'order-' + loadedorderRendered.orderInfo.id">{{ order }}</pre
        >
        </div>

</div>
</div>


</div>

</div>

</template>


<script>


import moment from "moment";
import tz from "moment-timezone";


export default {
  data() {
    return {
      checkForReturnable: false,
      returnMultiple: false,
      returnList: [],
      toggleOrderState: false,
      loadedorderRendered: null,
      loadedorder: null,
      modalVisible: false,
      modalContent: {},
      dateNow: Date.now(),
      orderhistory: null,
      response: null,
      currentView: "empty",
    };
  },
  name: "OrderHistory",
  props: ["order"],
  filters: {
    formatDate(value) {
      if (value) {
        let order = moment(String(value));
        return order.tz("America/Los_Angeles").format("LLLL");
      }
    },

    showToFixed: function(value) {
      let decvalue = value / 100;

      return decvalue.toFixed(2);
    },
  },

  methods: {
    returnMultipleItems(){

        for(let i in this.returnList){
              this.issueTokenizedReturn(
                      this.returnList[i].transId,
                      this.returnList[i].price,
                      this.returnList[i].taxDivPretotal,
                      this.returnList[i].cartId,
                      this.returnList[i].mongoId,
                      false
                    )
        }


          this.returnMultiple = false;
    },

    toggleReturnMultiple(){
      this.returnMultiple = !this.returnMultiple;
    },
    removeFromReturnList(cartId){


document.getElementById('returnList-' + cartId).style.display = 'block';   
document.getElementById('returnListRemove-' + cartId).style.display = 'none';

this.returnList = this.returnList.filter(x => x.cartId !== cartId);

},
addToReturnList(transId,price,taxDivPretotal,cartId,mongoId){


this.returnList.push({
transId,
price,
taxDivPretotal,
mongoId,
cartId
});

document.getElementById('returnList-' + cartId).style.display = 'none';   
document.getElementById('returnListRemove-' + cartId).style.display = 'block';


},
cancellable(scheduled_time){

if(moment(scheduled_time).valueOf() - moment().valueOf() < 2700000){
  return false
}else{
  return true
}






    },
cancelPreorder(id){


let self = this;

  this.$swal({ 
      title: "cancel this order?",
    showDenyButton: true,
    denyButtonText: `Cancel`,
    confirmButtonText: `Confirm`
  }).then((confirmed) => {
    if (confirmed) {

      if(confirmed.isConfirmed){
  

    self.$http
            .post(`/order/cancelpreorder/${id}`)
            .then((response) => {


  location.reload()

              console.log(response);
            })
            .catch((e) => {
              // this.errors.push(e);
              console.log("errors");
              console.log(e);
            });

    // self.retrieveTodaysOrders();









      }
    } else {
    }
  });









},

updateLoadedOrder(id){
let self = this;
    this.$http
            .get(`/order/loadorderbyid/${id}`)
            .then((response) => {
                self.loadedorder = response.data.user;




            })
            .catch((e) => {
              // this.errors.push(e);
              console.log("errors");
              console.log(e);
            });



},
hidetoggleOrder(){
this.toggleOrderState = false;
},

    toggleOrder(id) {

this.toggleOrderState = !this.toggleOrderState;

      let drawer = document.getElementById("order-" + id);

      // console.log(document.getElementById('order-'+id))

      if (drawer.classList.contains("hidden")) {
        // do some stuff

        drawer.classList.remove("hidden");
      } else {
        drawer.classList.add("hidden");
      }
    },
viewModal(order){


this.modalVisible = true;
this.modalContent = order;


},
    isToday(input){
    const today = new Date()
    const date = new Date(input)
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    },
    hasTransmissionId(order) {
      if (order.TransmissionID !== undefined) {
        // console.log(order.TransmissionID);

        return true;
      } else {
        return false;
      }
    },
    timeClosedMoment(timeClosed) {
      // return moment.unix(timeClosed).format('MMMM Do YYYY HH:mm A');

      return moment(timeClosed).format("MMMM Do YYYY HH:mm A");
    },

    voidValid(order) {



if(order.cancelled){
  return false
}else{

      // console.log('checking if valid order');
      // console.log(order.timeClosed === undefined);
      // console.log(order.timeClosed === null);

      // 1400000 is about 24 minutes
      if (
        Date.now() > order.timeClosed + 1400000 ||
        order.timeClosed === null
      ) {
        return false;
      } else {
        return true;
      }
    }

    },


    issueTokenizedReturn(
      uniqueTransIdString,
      amount,
      taxRate,
      cartId,
      orderId,
      ids
    ) {

if(ids){
          document.getElementById('not-' + cartId).style.display = 'none';   
          document.getElementById('is-' + cartId).style.display = 'block';

}

      let tax = amount * taxRate;
      let amountToCalcWithTax = amount + tax;

      console.log(amountToCalcWithTax);

      let amountDiv100 = amountToCalcWithTax / 100;
      let amountToSend = amountDiv100.toFixed(2).toString();

      console.log(amountDiv100.toFixed(2).toString());
      console.log(amountToSend);
      let self = this;
      this.$http
        .post("/order/issue-tokenized-return", {
          uniqueTransId: uniqueTransIdString,
          amount: amountToSend,
        })
        .then((response) => {
          console.log(response);

          this.$http
            .post("/order/update-refunded-items-mongo", {
              cartId: cartId,
              orderId: orderId,
            })
            .then((response) => {
              console.log(response);

              // this.retrieveTodaysOrders();
              // this.updateLoadedOrder(this.order._id);
              self.updateLoadedOrder(self.order._id);

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
    issueVoid(uniqueTransIdString, data) {
      console.log(uniqueTransIdString);
      this.$http
        .post("/order/issue-void", {
          uniqueTransId: uniqueTransIdString,
          data,
        })
        .then((response) => {
          console.log(response);

          this.voidByTransId(uniqueTransIdString, data);
        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    },
    voidByTransId(uniqueTransIdString, data) {

      let self = this;
      console.log(uniqueTransIdString);
      
      this.$http
        .post("/order/void-transid-mongo", {
          uniqueTransId: uniqueTransIdString,
          data,
        })
        .then((response) => {
          console.log(response);

          self.updateLoadedOrder(self.order._id);

        })
        .catch((e) => {
          // this.errors.push(e);
          console.log("errors");
          console.log(e);
        });
    }
  },
  created(){
    this.loadedorder = this.order;
    this.loadedorderRendered = this.order;

    let notReturnedItems = this.loadedorder.items.filter(x => !x.returned);

            console.log(notReturnedItems.length);

            if(notReturnedItems.length > 0){
this.checkForReturnable = true;
            }


  },
  watch: {
    loadedorder: {
      handler(val){
        this.loadedorderRendered = this.loadedorder


      },
      deep: true
    } 
  }
};

</script>

<style lang="scss">
.returnCheck{
  width: 20px;
  height: 20px;
  font-size: 0;
  background: white;
  border: 1px solid black;
  float: right;
  &.remove{
    background: black;
  }
}

.not-returned span{
  display:none;
}

.fullOrderModal{
  position: fixed;
  z-index: 10000;
  top: 100px;
  background: white;
  width: 100%;
  overflow: scroll;
  left: 0;
}

.codeBox{
  height: 200px;
  overflow:scroll;
  background: #ddd;
  margin-top:20px;
  padding: 20px;

}

u{
  cursor: pointer;
}
</style>