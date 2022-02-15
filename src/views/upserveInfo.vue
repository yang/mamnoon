<template>
  <div class="profile">
    <div class="container">
      upserve info
      <div v-for="up in upserveProducts">
        <!-- <b>{{up.reservationsList.roomsinfo.allInfo.first_name}} {{up.reservationsList.roomsinfo.allinfo.last_name}}</b> -->
        <br />
        <br />
        <pre
          >{{ up }}
</pre
        >
        <br />
        <br />

        <h1>
          {{ up.reservationsList.roomsinfo.allInfo.first_name }}
          {{ up.reservationsList.roomsinfo.last }}
        </h1>
        cc name: {{ up.upserveInfo.upserveInfo.cc_name }} <br /><br />
        table_number(s):
        {{ up.reservationsList.roomsinfo.allInfo.table_numbers }} <br /><br />
        duration: {{ up.reservationsList.roomsinfo.allInfo.duration }}

        <template v-if="up.reservationsList.roomsinfo.allInfo.email !== ''">
          <br /><br />
          email: {{ up.reservationsList.roomsinfo.allInfo.email }}
        </template>
        <template v-if="up.reservationsList.roomsinfo.allInfo.phone !== ''">
          <br /><br />
          phone:
          {{
            up.reservationsList.roomsinfo.phone
              .replaceAll(" ", "")
              .replaceAll("+1", "")
              .replaceAll("-", "")
          }}
        </template>
        <br /><br />
        food and drinks ordered:<br />

        <div v-for="item in up.upserveInfo.upserveInfo.items">
          {{ item.name }}, ${{ item.price }}
        </div>

        <br />
        ${{ up.upserveInfo.upserveInfo.amount }}
        <br />
        ${{ up.upserveInfo.upserveInfo.tip_amount }}
        <br />

        reservation date: {{ up.reservationsList.roomsinfo.allInfo.date }}<br />
        max guests: {{ up.reservationsList.roomsinfo.allInfo.max_guests }}<br />
        booked by: {{ up.reservationsList.roomsinfo.allInfo.booked_by }}<br />
        shift category: {{ up.reservationsList.roomsinfo.allInfo.shift_category
        }}<br />
        arrival time: {{ up.reservationsList.roomsinfo.allInfo.arrival_time
        }}<br />
        vip? {{ up.reservationsList.roomsinfo.allInfo.is_vip }}

        <hr />
        <br /><br />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      upserveProducts: null,
    };
  },
  methods: {
    async upserves() {
      console.log("doing this");
      let responseUpserve = await this.$http.get(
        `/reservation/dateoverlaplive`,
        {
          params: {
            date: "20210422",
          },
        }
      );
      this.upserveProducts = responseUpserve.data;
    },
  },
  mounted() {
    this.upserves();
  },
};
</script>

<style>
.profile {
  padding-top: 120px;
  padding-top: 150px;
  padding-bottom: 120px;
}
</style>
