<template>
<div>
  <div class="container">
 <button class="btn-nadi fl-right" @click="toggleMamnoonMenu()">toggle menu</button>
  <h1 class="red">{{pageTitle}} Packages</h1>  





<!--
  {{packageAdd}} -->
  <hr>



<template v-if="pageTitle === 'Mamnoon'">
    <router-link :to="'packages-street'">mamnoon street packages</router-link>






</template>
<template v-else>
    <router-link :to="'packages'">mamnoon packages</router-link>
</template>

<hr>

<!--<template v-if="packages">
{{packages.map(function(x){return x.upserveId})}}
</template>-->




<table class="packageTable" style="width: 100%;">
<tr>
<th>phone</th>
<th>email</th>
<th>name</th>

<th>time</th>
<th>date</th>
<th>items</th>

</tr>
<template v-for="order in preOrders">




<tr v-if="checkIfHasPackageId(packages,order.orderInfo.charges.items) && pageTitle === order.orderInfo.restaurant">
<td>
<div>
{{order.orderInfo.fulfillment_info.customer.phone}}
</div>
</td>
<td>
<div>
{{order.orderInfo.fulfillment_info.customer.email}}
</div>
</td>
<td>
<div>
{{order.orderInfo.fulfillment_info.customer.first_name}}&nbsp;{{order.orderInfo.fulfillment_info.customer.last_name}}
</div>
</td>
<td>
<div>
{{returnTime(order.orderInfo.scheduled_time)}}
</div>
</td>
<td>
<div>
{{returnDate(order.orderInfo.scheduled_time)}}
</div>
</td>
<td>
<!--{{order.orderInfo.charges.items.map(function(x){ return x.name })}}-->

<div v-for="item in order.orderInfo.charges.items">
{{item.name}}


<div v-for="mod in item.modifiers">
<span class="small-message">
{{mod.name}}
</span>

</div>

</div>


</td>
</tr>






</template>

</table>




      <hr />


<hr>



    </div>

<!---->

    <!---->
      <div class="container" v-if="mamnoonmenuexpanded" data="ise">
      <div class="packageList">

      


            <template v-for="section in upserveSections">
<div class="row">
            <h2 class="menu-header">         
{{section.name}}
</h2>
</div>
<div class="row">

<template v-for="id in section.item_ids">

<template v-for="item in upserve">

<template v-if="item.id === id">

<!--{{item}}-->




            <div class="packageTile">
            <div class="inside">
            <p>{{item.name}}</p>
<!--            // <p class="small-message grey">{{item.description}}</p>-->
 
            <template v-if="section.timing_mask && section.timing_mask.start_date && section.timing_mask.end_date">

            start time: {{section.timing_mask.start_time}}<br>
            end time: {{section.timing_mask.end_time}}<br>
            <template v-if="section.timing_mask.start_date">start date: {{section.timing_mask.start_date}}</template><br>
            <template v-if="section.timing_mask.end_date">end date: {{section.timing_mask.end_date}}</template><br>
        
        
                    <button class="btn-nadi" v-if="section.timing_mask.start_date && section.timing_mask.end_date" @click="useForPackage(item,section.timing_mask,pageTitle)">use for package</button>

            </template>
            <template v-else>
                    <span class="small-message">to add this as a package, please select a start and end date for the display group the item is under in upserve.</span>
            </template>


            </div>
            </div>



</template>
</template>


</template>

</div>





            </template>



           <!-- <template v-for="up in upserve">
            <div class="packageTile">
            <div class="inside">
            <h2>{{up.name}}</h2>
            <p class="small-message grey">{{up.description}}</p>
            <template v-if="up.images.online_ordering_menu && up.images.online_ordering_menu.main">
      <img class="packageImage" :src="up.images.online_ordering_menu.main" />
            </template>
  
            <button class="btn-nadi" @click="useForPackage(up)">use for package</button>
            </div>
            </div>


            </template>-->
  
          </div>
    </div>
<!--fff-->

<!--fff-->
















    <!--end-->
    <div class="container" v-if="packageAdd.name">
    <br>
      <h2 class="red">add a package:</h2>
      <hr />




<b>{{packageAdd.restaurant}}</b><br>


name: {{packageAdd.name}}
<br />
timing mask:<br>

<br>
pickup start time: {{packageAdd.timing_mask.start_time}}
<br>
pickup end time: {{packageAdd.timing_mask.end_time}}
<br>
<template v-if="packageAdd.timing_mask.start_date">start date: {{packageAdd.timing_mask.start_date}}</template><br>
<template v-if="packageAdd.timing_mask.end_date">end date: {{packageAdd.timing_mask.end_date}}</template><br>
      <br />
      <input
        id="name"
        v-model="packageAdd.name"
        type="text"
        name="name"
        placeholder="add name"
         @change="checkPackAdd"
                  style="display:none"
      />
            <div style="display:none">
      <br />
      upserve id: {{packageAdd.upserveId}}<br>
      <input
        id="upserveId"
        v-model="packageAdd.upserveId"
        type="text"
        name="upserveId"
        placeholder="add upserveId"
         @change="checkPackAdd"
         style="display:none"
      />
      </div>
    <br>
      quantity:<br>
      <input
        id="number"
        v-model="packageAdd.number"
        type="number"
        name="number"
        @change="checkPackAdd"
        placeholder="ie 10"
      />
      <br />
      <br />


staff notification email recipients:
  <br />

      
      
              <input
                  type="text"
              id="recipient"
                  name="recipient"
                 placeholder="add email recipient"
                  @change="emailErrorVisible(recipient)"
                v-model="recipient"
                />
<div class="small-message" v-if="emailErrorVisibleTf && !validEmail(recipient)">please enter a valid email</div>
<div class="small-message" v-if="emailErrorVisibleTf && !dnsCheck">invalid email domain</div>

      
      
      
      
      
      &nbsp;
      
      
            <button class="btn-nadi" v-if="validEmail(recipient) && dnsCheck" @click="addRecipient">add recipient</button>
      <button v-else class="btn-nadi disabled">add recipient</button>
   <br />
   <br />
   <div class="recipientList">
   <h5 v-if="packageAdd.recipients.length>0">recipient list:</h5>
<div v-for="(recipient,index) in packageAdd.recipients">
{{recipient}} <button class="btn-nadi" @click="removeRecipient(index)">x</button>
</span>
</div>

   </div>
   <br />
   
      <br />


      <button class="btn-nadi" :class="{disabled: !packageFilledOut }" @click="addPackage()">
        Add Package
      </button>
           
&nbsp;
      <button class="btn-nadi" @click="clearPackage()">
        Clear Package
      </button>

      <br><br>
    </div>
    <!--end-->




<!--beginning-->
    <div class="container">
        <div class="row">
    <template v-for="pa in packages">


 <div v-if="pageTitle === pa.restaurant" class="packageTile">
<div class="inside bigger">
<b>
{{pa.restaurant}}



</b>
<h5>{{pa.name}} ({{pa.number}} remain)</h5>
<b>start date:&nbsp;</b>{{pa.timing_mask.start_date}}&nbsp;<b>end date:&nbsp;</b>{{pa.timing_mask.end_date}}<br>
<b>pickup time range:</b> {{pa.timing_mask.start_time}}-{{pa.timing_mask.end_time}}<br>

<b>marketing link:</b>
<template v-if="origin === 'http://localhost:8080'">
http://localhost:8080/{{pa.restaurant.toLowerCase().replace(' ','')}}-olo?{{formattedLinkDate(pa.timing_mask.start_date)}}&packageId={{pa.upserveId}}{{returnendDate(pa.timing_mask.end_date)}}{{returnTimeRange(pa.timing_mask)}}
<a ref="mylink" rel="noopener noreferrer" :href="encodeURI('http://localhost:8080/' + pa.restaurant.toLowerCase().replace(' ','') + '-olo?' + formattedLinkDate(pa.timing_mask.start_date)+'&packageId='+pa.upserveId + returnendDate(pa.timing_mask.end_date)+returnTimeRange(pa.timing_mask))" target="_blank">



{{'http://localhost:8080/'+pa.restaurant.toLowerCase().replace(' ','')+'-olo?'+formattedLinkDate(pa.timing_mask.start_date)+'&packageId='+pa.upserveId+returnendDate(pa.timing_mask.end_date)+returnTimeRange(pa.timing_mask)}}

</a>
</template>
<template v-else>
<!--https://www.nadimama.com/{{pa.restaurant.toLowerCase().replace(' ','')}}-olo?{{formattedLinkDate(pa.timing_mask.start_date)}}&packageId={{pa.upserveId}}{{returnendDate(pa.timing_mask.end_date)}}{{returnTimeRange(pa.timing_mask)}}-->
<a ref="mylink" rel="noopener noreferrer" :href="encodeURI('https://www.nadimama.com/' + pa.restaurant.toLowerCase().replace(' ','') + '-olo?' + formattedLinkDate(pa.timing_mask.start_date)+'&packageId='+pa.upserveId + returnendDate(pa.timing_mask.end_date)+returnTimeRange(pa.timing_mask))" target="_blank">


{{'https://www.nadimama.com/'+pa.restaurant.toLowerCase().replace(' ','')+'-olo?'+formattedLinkDate(pa.timing_mask.start_date)+'&packageId='+pa.upserveId+returnendDate(pa.timing_mask.end_date)+returnTimeRange(pa.timing_mask)}}


</a>


</template>





    <div class="recipientList">
      <h5 v-if="pa.recipients.length>0">recipient list:</h5>
<div v-for="(recipient,index) in pa.recipients">
{{recipient}} 
</span>
</div>
   </div>

      <h1 v-if="pa.number === 0">sold out</h1>
      <button class="btn-nadi" @click="decrementPackage(pa._id)" v-if="pa.number > 0">
        decrease</button
      >&nbsp;
            <button class="btn-nadi" @click="incrementPackage(pa._id)">
        increase</button
      >&nbsp;
      <button class="btn-nadi" @click="deletePackage(pa._id)">delete package</button>
      <br /><br />
    </div>
        </div>
    </template>
</div></div>
<!--beginning-->




</div>

</template>
<script>
import Datepicker from "vuejs-datepicker";
import swal from "vue-sweetalert2";

import moment from 'moment'
import tz from 'moment-timezone'

export default {
  components: {
    Datepicker,
  },
  name: "PackagesAdmin",
  data() {
    return {
      pageTitle: '',
      preOrders: null,
      upserveSections: [],
      origin: '',
      emailErrorVisibleTf: false,
       dnsCheck: false,
      recipient: '',
      packageFilledOut: false,
      datePicked: null,
      mamnoonmenuexpanded: false,
      upserve: null,
      packages: null,
      packageAdd: {
        name: null,
        upserveId: null,
        orderData: null,
        number: null,
        soldOut: false,
        object: {},
        timing_mask: {},
        recipients: [],
        endDate: null,
        startTime: null,
        endTime: null
      },
      mamnoonToggled: false,
      streetToggled: false,
    };
  },




  methods: {


returnTime(time){
return  moment(time).format('LT')
},

returnDate(date){



return  moment(date).format('dddd MMM Do')

},
checkIfHasPackageId(packages,items){


let arr1 = packages.map(function(x){return x.upserveId});

let arr2 = items.map(function(x){return x.item_id});


return arr1.some(r=> arr2.indexOf(r) >= 0)



},
   returnendDate(endDate){
if(endDate){



  
  return `&endDate=${this.formattedLinkDate(endDate)}`
}else{
  return ``;
}
    },

   returnTimeRange(timing_mask){
if(timing_mask){

  
  return `&startTime=${encodeURIComponent(timing_mask.start_time)}&endTime=${encodeURIComponent(timing_mask.end_time)}`
}else{
  return ``;
}
    },


    formatDate(date){
      return moment(date).format('MM-DD-YYYY')
    },
        validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
        emailValidFromServer(email){
console.log('valid from server')
console.log('valid from server')
console.log('valid from server')
console.log('valid from server')



if(this.validEmail(email)){
            let self = this
                this.$http.get(`/emailverified/${email}`).then(function (response) {
                  console.log(response.data.data);

                    if(response.data.data.dnsCheck === 'true'){
                        self.dnsCheck = true;
                    }else{
                        self.dnsCheck = false;
                    }

            })
  


    }

    },
emailErrorVisible(emailEntry){


this.emailErrorVisibleTf = true;





this.emailValidFromServer(emailEntry);








},

    removeRecipient(index){


this.packageAdd.recipients.splice(index, 1);
this.checkPackAdd();

    },
    addRecipient(){


          this.packageAdd.recipients.push(this.recipient);
          this.recipient = '';
          this.emailErrorVisibleTf = false;
this.checkPackAdd();
    },
checkPackAdd(){


console.log(this.packageAdd.name);
console.log(this.packageAdd.number);
console.log(this.packageAdd.timing_mask.start_date);
console.log(this.packageAdd.upserveId);
console.log(this.packageAdd.endDate);
if(this.packageAdd.name !== null && this.packageAdd.number !== null && this.packageAdd.upserveId !== null && this.packageAdd.timing_mask.start_date && this.packageAdd.recipients.length > 0){


  this.packageFilledOut = true;

}else{
    this.packageFilledOut = false;
}


},
    formattedLinkDate(date){
return moment(date).format('YYYY-MM-DD');
    },
    clearPackage() {
      this.packageAdd.name = null;
      this.packageAdd.upserveId = null;
      this.packageAdd.timing_mask.start_date = null;
      this.packageAdd.number = null;
      this.packageAdd.recipients = [];
      this.packageAdd.object = {};
      this.packageAdd.timing_mask = {};
      this.packageAdd.endDate = null;
    },
    toggleMamnoonMenu() {
      this.mamnoonmenuexpanded = !this.mamnoonmenuexpanded;
    },

    async toggleOnlineOrders(restName) {
        console.log(`restaurant name is: ${restName}`)
        if(restName === "Mamnoon"){
            this.mamnoonToggled = !this.mamnoonToggled;
        } else {
            this.streetToggled = !this.streetToggled;
        }
        let self = this;
        this.$http.get(`/order/acceptingOrdersBoolean/${restName.replace(" ","")}`).then(function (response) {
              // self.orderHistory = response.data
              // console.log("acceptingOrdersBooleanStreet")
            console.log(response.data);

            if(response.data.result === "success" && restName === "Mamnoon"){
                console.log('Mamnoon olo is toggled');

            }else{
                console.log("Mamnoon Street olo is toggled");
            }
        })
    },


    useForPackage(up,timingMask,pageTitle) {


// console.log(up);
console.log(timingMask.start_date);
console.log(timingMask.end_date);
console.log(timingMask.start_time);
console.log(timingMask.end_time);
console.lo

console.log(this.packageAdd);






      this.packageAdd.name = up.name;
      this.packageAdd.upserveId = up.id;
       this.packageAdd.object = up;
       this.packageAdd.timing_mask = timingMask;
       this.packageAdd.restaurant = pageTitle;
  
      // this.packageAdd.timing_mask.start_date = null;
      // this.packageAdd.number = null;

      this.toggleMamnoonMenu();

      this.checkPackAdd();
    },
    async upserves() {
      let responseUpserve = await this.$http.get("/product/upserveolo");
      // console.log(responseUpserve)

      if (responseUpserve.data.body) {


        // console.log(responseUpserve.data.body.sections);


        this.upserveSections = responseUpserve.data.body.sections;

        let upserveProducts = responseUpserve.data.body.items;
        this.upserve = upserveProducts;
      }
    },


async upserveMongo(){


// console.log('upserveMongo');
// console.log('upserveMongo');
// console.log('upserveMongo');

      let self = this
      // let responseUpserve = await this.$http.get(`product/upserve_mongo/${self.title.toLowerCase().replace(' ','')}`);
  // let responseUpserve = await this.$http.get(`product/upserve_mongo/mamnoon`);

let routeString = '';
if(window.location.pathname==='/packages-street'){
routeString = 'mamnoonstreet';
}else{
routeString = 'mamnoon';
}
  let responseUpserve = await this.$http.get(`product/upserve_mongo/${routeString}`);


if(responseUpserve.data.doc[0].menu){

      let upserveProducts = responseUpserve.data.doc[0].menu.items;
      let filter = upserveProducts;

        console.log(filter)



      this.upserve = upserveProducts;
      this.upserveList = upserveProducts;
      this.upserveSections = responseUpserve.data.doc[0].menu.sections;

      this.upserveTaxRate = Number(responseUpserve.data.doc[0].menu.tax_rates.filter(x=>x.name === "Sales Tax")[0].percentage_rate)

      this.modifierGroups = responseUpserve.data.doc[0].menu.modifier_groups;
      this.modifiers =responseUpserve.data.doc[0].menu.modifiers;
      this.modifierItems = responseUpserve.data.doc[0].menu.modifiers;
}
},




    async upservesStreet() {
      let responseUpserve = await this.$http.get("/product/upserveolo");
      // console.log(responseUpserve)

      if (responseUpserve.data.body) {


        // console.log(responseUpserve.data.body.sections);


        this.upserveSections = responseUpserve.data.body.sections;

        let upserveProducts = responseUpserve.data.body.items;
        this.upserve = upserveProducts;
      }
    },


    async retrievePackages() {
      // console.log("retriev orders frome");
      let responseUpserve = await this.$http.get(`/package/retrieve`);
      this.packages = responseUpserve.data.packs;
    },


    async retrievePreorders() {
      console.log("retriev orders frome");
      let responseUpserve = await this.$http.get(`/order/retrievepreorders`);
      console.log(responseUpserve);


      this.preOrders = responseUpserve.data.preorder.sort((a, b) => (moment(a.orderInfo.scheduled_time).unix() > moment(b.orderInfo.scheduled_time).unix()) ? 1 : -1);

    },



    checkForClash(packageAdd) {
      //   if(there is a this.checkForClash){

      //       return true;
      //   }else{
      //       return false;
      //   }
if(this.packages){
      let clashes = this.packages.filter(
        (packages) => packages.upserveId === packageAdd.upserveId
      );
      console.log(clashes);

      if (clashes.length >= 1) {
        alert("already a package for this item.");
        this.packageAdd.name = null;
        this.packageAdd.upserveId = null;
        this.packageAdd.number = null;
         this.packageAdd.recipients = [];
        this.packageAdd.object = {};
        this.packageAdd.timing_mask = {};
         this.packageAdd.restaurant = null;
        return true;
      } else {
        return false;
      }

    }
    },
    async addPackage() {
      if (!this.checkForClash(this.packageAdd)) {
        console.log("retriev orders frome");

        let addPack = await this.$http.post(
          `/package/addpackage`,
          this.packageAdd
        );

        let addPackResponse = addPack.data;
        console.log(addPackResponse);

        this.retrievePackages();

        this.packageAdd.name = null;
        this.packageAdd.upserveId = null;
        this.packageAdd.number = null;
         this.packageAdd.recipients = [];
        this.packageAdd.object = {};
        this.packageAdd.timing_mask = {};
         this.packageAdd.restaurant = null;
      }
    },
    async decrementPackage(id) {
      console.log("retriev orders frome");
      console.log(id);
      let decrementPack = await this.$http.post(`/package/decrementpackage`, {
        _id: id,
      });

      let decrementPackResponse = decrementPack.data;
      console.log(decrementPackResponse);
      this.retrievePackages();
    },

    async incrementPackage(id) {
      console.log("retriev orders frome");
      console.log(id);
      let incrementPack = await this.$http.post(`/package/incrementpackage`, {
        _id: id,
      });

      let incrementPackResponse = incrementPack.data;
      console.log(incrementPackResponse);
      this.retrievePackages();
    },



    async deletePackage(id) {





let self = this;

  this.$swal({ 
      title: "delete this package?",
    showDenyButton: true,
    denyButtonText: `Cancel`,
    confirmButtonText: `Confirm`
  }).then((confirmed) => {
    if (confirmed) {

      if(confirmed.isConfirmed){
  


   self.$http
            .post(`/package/deletepackage`,{
                _id: id,
            })
            .then((response) => {
    let deletePackResponse = response.data;

      console.log(deletePackResponse);
      this.retrievePackages();


            })
            .catch((e) => {
              // this.errors.push(e);
              console.log("errors");
              console.log(e);
            });





      }
    } else {
    }
  });








    },
  },
  mounted() {






if(window.location.pathname==='/packages-street'){


this.pageTitle = 'Mamnoon Street'

}else{
this.pageTitle = 'Mamnoon'
}


this.origin = window.location.origin;


console.log(this);
    this.retrievePackages();


    this.retrievePreorders();


    // this.addPackage();


    this.upserveMongo();




  },
};
</script>


<style lang="scss">
  @import '@/assets/styles/css/packagesadmin.scss';
</style>