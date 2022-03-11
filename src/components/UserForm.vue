<template>
  <div>
    <div class="container pad-yellow-background module-header">
      account info
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <br />
          <b>email:</b><br />
          <template v-if="user && user.user && user.user.email">
            {{ user.user.email }}
          </template>
          <br /><br />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="address" v-if="!updateDelivery">
            <!-- <b>delivery address:</b><br> -->
            <b>guest info:</b><br />
            <template v-if="user && user.user.deliveryAddress">
              {{ user.user.deliveryAddress.first_name }}&nbsp;
                {{ user.user.deliveryAddress.last_name }}<br />
              {{ user.user.deliveryAddress.phone }}<br />
            </template>
            <br /><br />
            <button class="sm-button" @click="updateDeliveryClick()">
              update guest info
            </button>
            <br /><br />
          </div>

          <form
            class="infoForm"
            @submit.prevent="checkForm"
            v-if="updateDelivery"
          >
            <!-- <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
  </p> -->

            <b>guest info:</b>
            <br />
            <p>
              <input
                id="name"
                v-model="deliveryAddress.first_name"
                type="text"
                name="name"
                placeholder="first name"
                class="add-name-field"
              />
              <br />
                        <input
                id="last_name"
                v-model="deliveryAddress.last_name"
                type="text"
                name="name"
                placeholder="last name"
                class="add-name-field"
              />
              <br />
              <input
                id="phone"
                v-model="deliveryAddress.phone"
                type="text"
                name="phone"
                placeholder="(555) 555-5555"
                class="add-phone-field"
              />
              <br />
              <!--
    <br>

    <input
      id="addressLine1"
      v-model="deliveryAddress.addressLine1"
      type="text"
      name="addressLine1"
      placeholder="add address line 1"
      class="add-addressLine1-field"
    >
    <br>
        <input
      id="addressLine2"
      v-model="deliveryAddress.addressLine2"
      type="text"
      name="addressLine2"
      placeholder="add address line 2"
      class="add-addressLine2-field"
    >
    <br>
    <input
      id="city"
      v-model="deliveryAddress.city"
      type="text"
      name="city"
      placeholder="add city"
      class="add-city-field"
    >
    <br>
      <input
      id="state"
      v-model="deliveryAddress.state"
      type="text"
      name="state"
      placeholder="add state"
      class="add-state-field"
    >
    <br>
      <input
      id="state"
      v-model="deliveryAddress.zip"
      type="text"
      name="zip"
      placeholder="add zip"
      class="add-zip-field"
    >
-->

              &nbsp;&nbsp;&nbsp;
              <br />
              <button
                class="sm-button add-delivery-address-button"
                type="submit"
                value="Submit"
              >
                submit
              </button>
              <button
                class="sm-button"
                v-if="updateDelivery"
                @click="updateDelivery = false"
              >
                cancel
              </button>
            </p>
          </form>

          <br /><br />
        </div>

        <div class="col-sm-6">
          <div class="address" v-if="!updateBilling">
            <b>billing address:</b> <br />
            <template v-if="user && user.user.billingAddress">
              {{ user.user.billingAddress.name }}<br />
              {{ user.user.billingAddress.addressLine1 }}<br />
              {{ user.user.billingAddress.addressLine2 }}<br />
              {{ user.user.billingAddress.city }}&nbsp;{{
                user.user.billingAddress.state
              }}&nbsp;{{ user.user.billingAddress.zip }}
            </template>
            <br /><br />
            <button class="sm-button" @click="updateBillingClick()">
              update billing address
            </button>
            <br /><br />
          </div>

          <form
            class="infoForm"
            @submit.prevent="checkFormBilling"
            v-if="updateBilling"
          >
            <b>billing address:</b>
            <br />

            <p>
              <input
                id="nameBilling"
                v-model="billingAddress.name"
                type="text"
                name="name"
                placeholder="add name"
                class="add-name-field"
              />
              <br />

              <input
                id="addressLine1Billing"
                v-model="billingAddress.addressLine1"
                type="text"
                name="addressLine1"
                placeholder="add address line 1"
                class="add-addressLine1-field"
              />
              <br />
              <input
                id="addressLine2Billing"
                v-model="billingAddress.addressLine2"
                type="text"
                name="addressLine2"
                placeholder="add address line 2"
                class="add-addressLine2-field"
              />
              <br />
              <input
                id="cityBilling"
                v-model="billingAddress.city"
                type="text"
                name="city"
                placeholder="add city"
                class="add-city-field"
              />
              <br />
              <!-- <input
                id="stateBilling"
                v-model="billingAddress.state"
                type="text"
                name="state"
                placeholder="add state"
                class="add-state-field"
              />
              <br /> -->




                <label class="smblk" for="state">state:</label>&nbsp;
               
 <!--    <div v-if="user && user.user && user.user.billingAddress && user.user.billingAddress.addressLine1 !== ''" style="margin-bottom: 10px;">{{user.user.billingAddress.addressLine1}}&nbsp;{{user.user.billingAddress.addressLine2}}</div>-->


<select id="stateBilling" class="selectState" v-model="billingAddress.state">
	<option value="" placeholder="state"></option>
  <option value="AL">AL</option>
	<option value="AK">AK</option>
	<option value="AR">AR</option>	
	<option value="AZ">AZ</option>
	<option value="CA">CA</option>
	<option value="CO">CO</option>
	<option value="CT">CT</option>
	<option value="DC">DC</option>
	<option value="DE">DE</option>
	<option value="FL">FL</option>
	<option value="GA">GA</option>
	<option value="HI">HI</option>
	<option value="IA">IA</option>	
	<option value="ID">ID</option>
	<option value="IL">IL</option>
	<option value="IN">IN</option>
	<option value="KS">KS</option>
	<option value="KY">KY</option>
	<option value="LA">LA</option>
	<option value="MA">MA</option>
	<option value="MD">MD</option>
	<option value="ME">ME</option>
	<option value="MI">MI</option>
	<option value="MN">MN</option>
	<option value="MO">MO</option>	
	<option value="MS">MS</option>
	<option value="MT">MT</option>
	<option value="NC">NC</option>	
	<option value="NE">NE</option>
	<option value="NH">NH</option>
	<option value="NJ">NJ</option>
	<option value="NM">NM</option>			
	<option value="NV">NV</option>
	<option value="NY">NY</option>
	<option value="ND">ND</option>
	<option value="OH">OH</option>
	<option value="OK">OK</option>
	<option value="OR">OR</option>
	<option value="PA">PA</option>
	<option value="RI">RI</option>
	<option value="SC">SC</option>
	<option value="SD">SD</option>
	<option value="TN">TN</option>
	<option value="TX">TX</option>
	<option value="UT">UT</option>
	<option value="VT">VT</option>
	<option value="VA">VA</option>
	<option value="WA">WA</option>
	<option value="WI">WI</option>	
	<option value="WV">WV</option>
	<option value="WY">WY</option>
</select>









<br>

              <input
                id="zipBilling"
                v-model="billingAddress.zip"
                type="text"
                name="zip"
                placeholder="add zip"
                class="add-zip-field"
              />

              &nbsp;&nbsp;&nbsp;
              <br />
              <button
                class="sm-button add-billing-address-button"
                type="submit"
                value="Submit"
              >
                submit
              </button>
              <button
                class="sm-button"
                v-if="updateBilling"
                @click="updateBilling = false"
              >
                cancel
              </button>
            </p>
          </form>

          <br /><br />
        </div>

        <div class="row" style="display:none;">
          <pre>
      {{ user }}
     </pre
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Submit from "@/components/svgIcons/Submit";
import Check from "@/components/svgIcons/Check";
import swal from "vue-sweetalert2";
export default {
  computed: {
    ccBillingNameValid() {
      if (this.ccBillingName == null) {
        return false;
      } else {
        return true;
      }
    },
    ccBillingAddressValid() {
      if (this.ccBillingAddress == null) {
        return false;
      } else {
        return true;
      }
    },
    ccBillingPostalCodeValid() {
      return /^\d{5}(-\d{4})?$/.test(this.ccBillingPostalCode);
    },
    ccSaveFieldsValid() {
      if (
        this.ccBillingNameValid &&
        this.ccBillingAddressValid &&
        this.ccBillingPostalCodeValid
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  components: {
    Check,
    Submit,
  },
  data() {
    return {
      savedCards: [],
      ccBillingName: null,
      ccBillingAddress: null,
      ccBillingPostalCode: null,
      user: {},
      updateBilling: false,
      updateDelivery: false,
      savedDeliveryAddress: {},
      savedBillingAddress: {},
      user: null,
      listBalance: "",
      currentBalance: "",
      amountUse: "",
      cardNumberInput: "",
      showInsufficientFunds: false,
      errors: [],
      giftcards: null,
      messageBody: {
        number: null,
        email: this.emailAddress,
      },
      deliveryAddress: {
        first_name: "",
        last_name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
      },
      billingAddress: {
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
      },
      preferredGiftCard: "",
    };
  },
  props: ["emailAddress"],
  methods: {
    updateBillingClick() {
      this.updateBilling = true;

      this.billingAddress.name = this.user.user.billingAddress.name;
      this.billingAddress.addressLine1 = this.user.user.billingAddress.addressLine1;
      this.billingAddress.addressLine2 = this.user.user.billingAddress.addressLine2;
      this.billingAddress.city = this.user.user.billingAddress.city;
      this.billingAddress.state = this.user.user.billingAddress.state;
      this.billingAddress.zip = this.user.user.billingAddress.zip;
    },
    updateDeliveryClick() {
      this.updateDelivery = true;


      this.deliveryAddress.first_name = this.user.user.deliveryAddress.first_name;
this.deliveryAddress.last_name = this.user.user.deliveryAddress.last_name;
      this.deliveryAddress.phone = this.user.user.deliveryAddress.phone;
      this.deliveryAddress.addressLine1 = this.user.user.deliveryAddress.addressLine1;
      this.deliveryAddress.addressLine2 = this.user.user.deliveryAddress.addressLine2;
      this.deliveryAddress.city = this.user.user.deliveryAddress.city;
      this.deliveryAddress.state = this.user.user.deliveryAddress.state;
      this.deliveryAddress.zip = this.user.user.deliveryAddress.zip;
    },
    async checkFormBilling() {
      this.updateBilling = false;
      try {
        let response = await this.$http.post("/user/submitbillingaddress", {
          email: this.emailAddress,
          billingAddress: this.billingAddress,
        });
        console.log(response);
        this.savedBillingAddress = response.data.user.billingAddress;
        // this.updateBilling = false
      } catch (err) {
        console.log(err.response);
      }
      this.getUser();
    },

    async checkForm() {
      this.updateDelivery = false;
      try {
        let response = await this.$http.post("/user/submitdeliveryaddress", {
          email: this.emailAddress,
          deliveryAddress: this.deliveryAddress,
        });
        this.savedDeliveryAddress = response.data.user.deliveryAddress;
      } catch (err) {
        console.log(err.response);
      }

      this.getUser();
    },

    getUser() {
      let self = this;
      this.$http
        .get("/user/email/" + this.emailAddress)
        .then(function(response) {
          let userInfo = response.data;
          // console.log(userInfo);
          self.user = userInfo;
          self.cardNumberInput = userInfo.user.giftcard;
          self.preferredGiftCard = userInfo.user.giftcard;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss">
  @import '@/assets/styles/css/userform.scss';
</style>
