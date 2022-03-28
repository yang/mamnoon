<template>
  <div class="moreInfoClickModal">
    <button class="listIcon" @click="toggleExpand(true)">
      <ListIcon />
    </button>
    <div
      class="menuBarClickModal iconVersion"
      :class="{ expanded: expandedMenu }"
    >
      <div class="relative">
        <div class="inside">
          <button class="close-toggle" @click="toggleExpand(false)">
            <CloseModalRedSm2 />
          </button>
          <!-- <moreInfoClickModal /> -->

          <scrollactive :offset="200" ref="scrollactive">
            <template v-if="valid && !preOrderToggleState">
              <template v-for="(item, index) in upserveSections">
                <template v-if="noFiltering">
                  <template
                    v-if="
                      (item.timing_mask &&
                        currentlyAvailable(
                          item.timing_mask.start_time,
                          item.timing_mask.end_time,
                          item.timing_mask.rules,
                          nowDate,
                          nowTime
                        )) ||
                        !item.timing_mask
                    "
                  >
                    <div
                      class="block text-left mb10"
                      v-if="!hideIfExpired(item)"
                    >
                      <a
                        @click="toggleExpand(false)"
                        :index="index"
                        :href="
                          '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                        "
                        class="scrollactive-item nav-item inline"
                        >{{
                          item.name
                            .replace("- To Go", "")
                            .replace("To Go", "")
                            .replace(
                              " (some items change daily & may not be available if ordered in advance)",
                              ""
                            )
                            .trim()
                        }}</a
                      >

                      <template v-if="showScenarios">eee scenario 1</template>
                      {{ item.item_ids.length }}
                    </div>
                  </template>
                </template>
              </template>
            </template>

            <template v-if="!valid">
              <template v-for="(item, index) in upserveSections">
                <template v-if="noFiltering">
                  <div class="block text-left mb10" v-if="!hideIfExpired(item)">
                    <a
                      @click="toggleExpand(false)"
                      :index="index"
                      :href="
                        '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                      "
                      class="scrollactive-item nav-item inline"
                      >{{
                        item.name
                          .replace("- To Go", "")
                          .replace("To Go", "")
                          .replace(
                            " (some items change daily & may not be available if ordered in advance)",
                            ""
                          )
                          .trim()
                      }}</a
                    >

                    <template v-if="showScenarios">scenario 2</template>
                    {{ item.item_ids.length }}
                  </div>
                </template>
                <template v-else>
                  <template
                    v-if="
                      (item.timing_mask &&
                        currentlyAvailable(
                          item.timing_mask.start_time,
                          item.timing_mask.end_time,
                          item.timing_mask.rules,
                          selectedDate,
                          selectedTime
                        )) ||
                        !item.timing_mask
                    "
                  >
                    <div
                      class="block text-left mb10"
                      v-if="!hideIfExpired(item)"
                    >
                      <a
                        @click="toggleExpand(false)"
                        :index="index"
                        :href="
                          '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                        "
                        class="scrollactive-item nav-item inline"
                        >{{
                          item.name
                            .replace("- To Go", "")
                            .replace("To Go", "")
                            .replace(
                              " (some items change daily & may not be available if ordered in advance)",
                              ""
                            )
                            .trim()
                        }}</a
                      >

                      <template v-if="showScenarios">scenario 3</template>
                      {{ item.item_ids.length }}
                    </div>
                  </template>
                </template>
              </template>
            </template>

            <template v-if="preOrderToggleState">
              <template v-for="(item, index) in upserveSections">
                <template v-if="noFiltering">
                  <div class="block text-left mb10" v-if="!hideIfExpired(item)">
                    <a
                      @click="toggleExpand(false)"
                      :index="index"
                      :href="
                        '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                      "
                      class="scrollactive-item nav-item inline"
                      >{{
                        item.name
                          .replace("- To Go", "")
                          .replace("To Go", "")
                          .replace(
                            " (some items change daily & may not be available if ordered in advance)",
                            ""
                          )
                          .trim()
                      }}</a
                    >

                    <template v-if="showScenarios">scenario 4</template>
                    {{ item.item_ids.length }}
                  </div>
                </template>
                <template v-else>
                  <template
                    v-if="
                      item.timing_mask === null
                    "
                  >
                    <div
                      class="block text-left mb10"
                      v-if="!hideIfExpired(item)"
                    >
                      <a
                        @click="toggleExpand(false)"
                        :index="index"
                        :href="
                          '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                        "
                        class="scrollactive-item nav-item inline"
                        >{{
                          item.name
                            .replace("- To Go", "")
                            .replace("To Go", "")
                            .replace(
                              " (some items change daily & may not be available if ordered in advance)",
                              ""
                            )
                            .trim()
                        }}</a
                      >

                      <template v-if="showScenarios">scenario 5</template>
                      {{ item.item_ids.length }}
                    </div>
                  </template>
                  <template v-else>
                    <template
                      v-if="currentlyAvailable(
                            item.timing_mask.start_time,
                            item.timing_mask.end_time,
                            item.timing_mask.rules,
                            selectedDate,
                            selectedTime
                          )
                      "
                    >
                      <div
                        class="block text-left mb10"
                        v-if="!hideIfExpired(item)"
                      >
                        <a
                          @click="toggleExpand(false)"
                          :index="index"
                          :href="
                            '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                          "
                          class="scrollactive-item nav-item inline"
                          >{{
                            item.name
                              .replace("- To Go", "")
                              .replace("To Go", "")
                              .replace(
                                " (some items change daily & may not be available if ordered in advance)",
                                ""
                              )
                              .trim()
                          }}</a
                        >

                        <template v-if="showScenarios">scenario 6</template>
                        {{ item.item_ids.length }}
                      </div>
                    </template>
                  </template>
                </template>
              </template>
            </template>
          </scrollactive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListIcon from "@/components/svgIcons/ListIcon";
import CloseModalRedSm2 from "@/components/svgIcons/CloseModalRedSm2";
import moment from "moment";
import tz from "moment-timezone";

export default {
  name: "moreInfoClickModal",
  components: {
    ListIcon,
    CloseModalRedSm2,
  },
  data() {
    return {
      expandedMenu: false,
      showScenarios: false,
    };
  },
  name: "slidernav",
  props: [
    "valid",
    "preOrderToggleState",
    "upserveSections",
    "upserveList",
    "noFiltering",
    "nowDate",
    "nowTime",
    "futureDay",
    "futureTime",
    "selectedDate",
    "selectedTime",
  ],
  methods: {
    hideIfExpired(item) {
      if (item.timing_mask && item.timing_mask.end_date) {
        // console.log('2');
        // console.log(item.timing_mask.end_date);
        // console.log('mom');
        // console.log(moment().tz('America/Los_Angeles').format('YYYY-MM-DD'));
        if (
          item.timing_mask.end_date ===
          moment()
            .tz("America/Los_Angeles")
            .format("YYYY-MM-DD")
        ) {
          return true;
        }
      }
    },
    toggleExpand(e) {
      this.expandedMenu = e;
    },

    currentlyAvailable(startTime, endTime, rules, futureDay, futureTime) {
      let weekday = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

      if (!futureDay && !futureTime) {
        let currentDate = new Date();
        let startDate = new Date(currentDate.getTime());

        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);

        let endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);

        if (rules.includes(weekday[currentDate.getDay()])) {
          return startDate < currentDate && endDate > currentDate;
        }
      }

      if (futureDay && !futureTime) {
        if (rules.includes(futureDay.dayLabel.substring(0, 3).toLowerCase())) {
          return true;
        }
      }
      if (futureDay && futureTime) {
        let currentDate = Date.parse(futureTime.time);
        let startDate2 = new Date(currentDate);
        let startDate3 = moment(startDate2)._i;
        startDate3.setHours(startTime.split(":")[0]);
        startDate3.setMinutes(startTime.split(":")[1]);
        let endDate2 = new Date(currentDate);
        let endDate3 = moment(endDate2)._i;
        endDate3.setHours(endTime.split(":")[0]);
        endDate3.setMinutes(endTime.split(":")[1]);
        let validTime = startDate3 < currentDate && endDate3 > currentDate;
        let validDay = rules.includes(
          futureDay.dayLabel.substring(0, 3).toLowerCase()
        );

        if (validTime && validDay) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/css/moreinfo.scss";
</style>
