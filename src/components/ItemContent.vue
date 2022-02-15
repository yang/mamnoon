<template>
  <div>
    <div class="half-width2left">
      <div class="content-box">
        <div
          class="showBox"
          v-if="serve.images"
          v-bind:style="{
            backgroundImage:
              'url(' + serve.images.online_ordering_menu.main + ')',
          }"
        ></div>

        <div class="orderedOn" v-html="checkIfOrdered(serve.id)"></div>

        <div class="name">{{ checkIfGiftCard(serve.name) }}</div>
        <div v-if="serve.description" class="food-description">
          {{
            serve.description.replace("[LINEBREAK]", "") | truncate(60, "...")
          }}
        </div>
        <div class="food-price">
          <!-- ${{ serve.price_cents.toFixed(2)/100}}<span class="checkIfPackage" v-html="checkIfPackage(serve.id)"></span>  -->

          <!-- <br> -->

          ${{ formatPrice(serve.price_cents) }}
          <template v-if="checkIfPackage(serve.id)">
            <span v-if="notAvailableDayOf" class="checkIfPackage"
              >sold out</span
            >
            <template v-else>
              <span
                class="checkIfPackage"
                v-if="checkIfPackage(serve.id) !== 'false'"
                v-html="checkIfPackage(serve.id)"
              ></span>
            </template>
          </template>
        </div>
        <br />
      </div>
    </div>
    <div class="half-width2right">
      <template v-if="serve.images">
        <div
          v-if="serve.images.online_ordering_menu"
          class="backgroundImage"
          v-bind:style="{
            backgroundImage:
              'url(' + serve.images.online_ordering_menu.main + ')',
          }"
        ></div>
      </template>
      <template v-else>
        <div
          class="backgroundImage"
          v-bind:style="{
            height: '140px',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }"
        >
          <NadiIconSmX style="height:140px;" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import tz from "moment-timezone";
import NadiIconSmX from "@/components/svgIcons/NadiIconSmX";
export default {
  name: "ItemContent",
  props: ["serve", "orderHistoryList", "packages", "notAvailableDayOf"],
  components: {
    NadiIconSmX,
  },
  methods: {
    checkIfOrdered(itemid) {
      // console.log(itemid);
      if (this.orderHistoryList) {
        var result = this.orderHistoryList.find((obj) => {
          return obj.item === itemid;
        });

        // console.log(result);
        if (result !== undefined) {
          let order = moment(String(result.date));
          return (
            "ordered on " + order.tz("America/Los_Angeles").format("MM/DD")
          );
        }
      }
    },
    checkIfGiftCard(value) {
      if (value.includes("Gift Card")) {
        return "gift card";
      } else {
        return value;
      }
    },
    formatPrice(value) {
      let val = (value / 100).toFixed(2);
      return val
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        .replace(".00", "");
    },
    checkIfPackage(itemid) {
      if (this.packages) {
        let result = this.packages.find((pack) => {
          return pack.upserveId === itemid;
        });

        // console.log(result);
        if (result === undefined) {
          return false;
        } else {
          if (result.number > 0) {
            return result.number + " remain";
          } else {
            return "sold out";
          }

          // return result.number;
        }
      }
    },
  },
};
</script>
