<template>
  <div class="container">

  <h1 class="red">Mamnoon Packages</h1>
  <hr>
  <br>
    <button class="btn-nadi" @click="toggleMamnoonMenu()">toggle mamnoon menu</button>
    <br />
    <div class="col-4 mt-3 mr-2" style="display:none;">
      <span class=" mr-2 mt-3"><b>Mamnoon: </b></span>
      <div class="row mt-1">
        <button
          @click="toggleOnlineOrders('Mamnoon')"
          :style="{
            color: [mamnoonToggled ? 'black' : ''],
            'background-color': [mamnoonToggled ? '#f05d5b4a' : ''],
            'border-color': [mamnoonToggled ? 'red' : ''],
          }"
        >
          <span v-if="mamnoonToggled">
            turn on online ordering
          </span>
          <span v-else>
            turn off online ordering
          </span>
        </button>
      </div>
      <br />

      <span class=" mr-2 mt-2"><b>Mamnoon Street: </b></span>
      <div class="row mt-1">
        <button
          @click="toggleOnlineOrders('Mamnoon Street')"
          :style="{
            color: [streetToggled ? 'black' : ''],
            'background-color': [streetToggled ? '#f05d5b4a' : ''],
            'border-color': [streetToggled ? 'red' : ''],
          }"
        >
          <span v-if="streetToggled">
            turn on online ordering
          </span>
          <span v-else>
            turn off online ordering
          </span>
        </button>
      </div>
    </div>
    <br />
    <div v-if="mamnoonmenuexpanded">
      <div class="container">
      <div class="packageList">
        <template v-for="up in upserve">





<div class="packageTile">
<div class="inside">
<h2>{{up.name}}</h2>
<p>{{up.description}}</p>
<template v-if="up.images.online_ordering_menu && up.images.online_ordering_menu.main">
<img class="packageImage" :src="up.images.online_ordering_menu.main" />
</template>
<br>
<br>
          <button class="btn-nadi" @click="useForPackage(up)">use for package</button>
</div>
</div>

      
        </template>
      </div>
          </div>
    </div>
    <br />
    <div class="container">
        <div class="row">
    <template v-for="pa in packages">
 <div class="packageTile">
<div class="inside">

<h2>{{pa.name}}</h2>
<p>amount remaining: {{pa.number}}</p>
<template v-if="pa.object.images.online_ordering_menu && pa.object.images.online_ordering_menu.main">
<img class="packageImage" :src="pa.object.images.online_ordering_menu.main" />
</template><br>
{{pa.orderDate}}

<br>
link for marketing: <a ref="mylink" rel="noopener noreferrer" :href="'https://www.nadimama.com/mamnoontesting?' + formattedLinkDate(pa.orderDate)+'&packageId='+pa.upserveId" target="_blank">
https://www.nadimama.com/mamnoontesting?{{formattedLinkDate(pa.orderDate)}}&packageId={{pa.upserveId}}
</a>
<br>
    <div class="recipientList">
   
   <h5>recipient list:</h5>
<div v-for="(recipient,index) in pa.recipients">
{{recipient}} 
</span>
</div>

   </div>
<br>
      <h1 v-if="pa.number === 0">sold out</h1>

      <button class="btn-nadi" @click="decrementPackage(pa._id)" v-if="pa.number > 0">
        decrement</button
      >&nbsp;
      <button class="btn-nadi" @click="deletePackage(pa._id)">delete package</button>
      <br /><br />
    </div>
        </div>


    </template>
</div></div>
    <div class="container">
    <br>
      <h2 class="red">add a package:</h2>
      <hr />

      

name: {{packageAdd.name}}
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
      
      <br />
      date:<br>
      <datepicker
        v-model="packageAdd.orderDate"
        placeholder="Pick A Date"
         @selected="checkPackAdd"
         
      ></datepicker>
      <br />
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
   
   <h5>recipient list:</h5>
<div v-for="(recipient,index) in packageAdd.recipients">
{{recipient}} <button @click="removeRecipient(index)">x</button>
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
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";


import moment from 'moment'
import tz from 'moment-timezone'

export default {
  components: {
    Datepicker,
  },
  name: "PackagesAdmin",
  data() {
    return {
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
        recipients: [],
      },
      mamnoonToggled: false,
      streetToggled: false,
    };
  },




  methods: {
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
console.log(this.packageAdd.orderDate);
console.log(this.packageAdd.upserveId);
if(this.packageAdd.name !== null && this.packageAdd.number !== null && this.packageAdd.upserveId !== null && this.packageAdd.orderDate && this.packageAdd.recipients.length > 0){


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
      this.packageAdd.orderDate = null;
      this.packageAdd.number = null;
      this.packageAdd.recipients = [];
      this.packageAdd.object = {};
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


    useForPackage(up) {
      this.packageAdd.name = up.name;
      this.packageAdd.upserveId = up.id;
       this.packageAdd.object = up;
      // this.packageAdd.orderDate = null;
      // this.packageAdd.number = null;

      this.toggleMamnoonMenu();

      this.checkPackAdd();
    },
    async upserves() {
      let responseUpserve = await this.$http.get("/product/upserveolo");
      // console.log(responseUpserve)
      if (responseUpserve.data.body) {
        let upserveProducts = responseUpserve.data.body.items;
        this.upserve = upserveProducts;
      }
    },

    async retrievePackages() {
      // console.log("retriev orders frome");
      let responseUpserve = await this.$http.get(`/package/retrieve`);
      this.packages = responseUpserve.data.packs;
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
        this.packageAdd.orderDate = null;
        this.packageAdd.number = null;
         this.packageAdd.recipients = [];
        this.packageAdd.object = {};
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
        this.packageAdd.orderDate = null;
        this.packageAdd.number = null;
         this.packageAdd.recipients = [];
        this.packageAdd.object = {};
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
    async deletePackage(id) {
      console.log("retriev orders frome");
      console.log(id);
      let deletePack = await this.$http.post(`/package/deletepackage`, {
        _id: id,
      });

      let deletePackResponse = deletePack.data;

      console.log(deletePackResponse);
      this.retrievePackages();
    },
  },
  mounted() {
    this.retrievePackages();

    // this.addPackage();
    this.upserves();
  },
};
</script>


<style lang="scss">


.packageList{
list-style-type: none;
li{width: 50%;}
}
.packageImage{
width:100%;
margin-top: 10px;
   height: 200px;
    width: auto;
 @media only screen and (max-width: 1280px){
    height: 200px;
    width: auto;
  }

}

.packageTile{



  width: 33%;
  float:left;


  @media only screen and (max-width: 1280px){
     width: 100%;
  }


.inside{  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
  width: calc(100%-20px);
  height: 450px;


  @media only screen and (max-width: 1280px){
height: auto;
padding-bottom: 20px;
  }

  overflow:scroll;
  // position: relative;

  // button{
  //       position: absolute;
  //   bottom: 0;
  //   left: 0;
  // }
}


}


</style>