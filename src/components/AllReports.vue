<template>
  <div class="container pad-yellow-background pd50">
    <!-- Loop through multiple reports? Add filter functionality to pull in reports from 
      Gravity and DoorDash and combine information to display in Table Body -->

    <table class="table">
      <thead>
        <tr style="">
          <th scope="col">Location</th>
          <th scope="col">Sales</th>
          <th scope="col">Returns</th>
          <th scope="col">Net Total</th>
          <th scope="col">Average</th>
          <th scope="col">Device ID</th>
          <th scope="col">% Keyed</th>
          <th scope="col">Tips</th>
          <th scope="col">Error Charges</th>
          <th scope="col">Adjustments</th>
        </tr>
      </thead>
      <!-- Loop through the report to fill in this information -->
      <tbody>
        <tr style="text-align: left;">
          <td>Mamnoon</td>
          <td>$14,021.71</td>
          <td>$0.00</td>
          <td>$29,914.32</td>
          <td>$ -1.93</td>
          <td>{''}</td>
          <td>50%</td>
          <td>$902.00</td>
          <td>0</td>
          <td style="text-align: left;">None</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      dateNow: Date.now(),
      orderhistory: null,
      response: null,
      currentView: "empty",
    };
  },
  name: "Reports",
  props: ["currentUser"],
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
    isToday(input) {
      const today = new Date();
      const date = new Date(input);
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
  },
  mounted() {
    moment().valueOf();
    this.retrieveOrders();
  },
};
</script>

<style lang="scss">
.position-relative {
  h1 {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.no-left-pad {
  padding-left: 0;
}

pre.hidden {
  display: none;
}
.line-link {
  cursor: pointer;
}
</style>
