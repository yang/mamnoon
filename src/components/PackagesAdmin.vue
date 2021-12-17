<template>
  <div class="container pad-yellow-background pd50">
    <button @click="toggleMamnoonMenu()">toggle mamnoon menu</button>
    <br />
    <div class="col-4 mt-3 mr-2">
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
      <ul>
        <li v-for="up in upserve">
          {{ up.name }} &nbsp; {{ up.id }}
          <button @click="useForPackage(up)">use for package</button>
        </li>
      </ul>
    </div>
    <br />
    <div v-for="pa in packages">
      {{ pa }}
      <br /><br />

      <h1 v-if="pa.number === 0">sold out</h1>

      <button @click="decrementPackage(pa._id)" v-if="pa.number > 0">
        decrement</button
      >&nbsp;
      <button @click="deletePackage(pa._id)">delete package</button>
      <br /><br />
    </div>

    <div>
      add a package:
      <br />
      <br />

      <br />
      <input
        id="name"
        v-model="packageAdd.name"
        type="text"
        name="name"
        placeholder="add name"
      />
      <br />
      <br />
      <input
        id="upserveId"
        v-model="packageAdd.upserveId"
        type="text"
        name="upserveId"
        placeholder="add upserveId"
      />
      <br />
      <br />
      <datepicker
        v-model="packageAdd.orderDate"
        placeholder="Pick A Date"
      ></datepicker>
      <br />
      <input
        id="number"
        v-model="packageAdd.number"
        type="number"
        name="number"
        placeholder="ie 10"
      />
      <br />
      <br />

      <button @click="addPackage()">
        Add Package
      </button>

      <button @click="clearPackage()">
        Clear Package
      </button>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
  name: "PackagesAdmin",
  data() {
    return {
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
      },
      mamnoonToggled: false,
      streetToggled: false,
    };
  },
  methods: {
    clearPackage() {
      this.packageAdd.name = null;
      this.packageAdd.upserveId = null;
      this.packageAdd.orderDate = null;
      this.packageAdd.number = null;
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
      // this.packageAdd.orderDate = null;
      // this.packageAdd.number = null;

      this.toggleMamnoonMenu();
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
      console.log("retriev orders frome");
      let responseUpserve = await this.$http.get(`/package/retrieve`);
      this.packages = responseUpserve.data.packs;
    },
    checkForClash(packageAdd) {
      //   if(there is a this.checkForClash){

      //       return true;
      //   }else{
      //       return false;
      //   }

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
        return true;
      } else {
        return false;
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

    this.addPackage();
    this.upserves();
  },
};
</script>
