<template>
  <div class="menuBar">
    <div class="relative">
      <div class="inside">
        <div class="inside-left" @click="left()">
          <i class="icono-arrow4-right"></i>
        </div>
        <div class="inside-right" @click="right()">
          <i class="icono-arrow4-left"></i>
        </div>
        <scrollactive
          :offset="200"
          ref="scrollactive"
          v-on:itemchanged="onItemChanged"
        >
          <swiper
            id="swiperMenu"
            ref="mySwiperRef"
            class="swiper"
            :options="swiperOption"
          >
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
                    <swiper-slide v-if="!hideIfExpired(item)" :id="item.id">
                      <a
                        :index="index"
                        :indexId="item.id"
                        :href="
                          '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                        "
                        class="scrollactive-item nav-item"
                        >{{
                          item.name
                            .replace("- To Go", "")
                            .replace("To Go", "")
                            .replace(
                              " (some items change daily & may not be available if ordered in advance)",
                              ""
                            )
                            .trim()
                        }}
                      </a>
                    </swiper-slide>
                  </template>
                </template>
              </template>
            </template>
            <template v-if="!valid">
              <template v-for="(item, index) in upserveSections">
                <template v-if="noFiltering">
                  <swiper-slide v-if="!hideIfExpired(item)" :id="item.id">
                    <a
                      :index="index"
                      :indexId="item.id"
                      :href="
                        '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                      "
                      class="scrollactive-item nav-item"
                    >
                      {{
                        item.name
                          .replace("- To Go", "")
                          .replace("To Go", "")
                          .replace(
                            " (some items change daily & may not be available if ordered in advance)",
                            ""
                          )
                          .trim()
                      }}
                    </a>
                  </swiper-slide>
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
                    <swiper-slide v-if="!hideIfExpired(item)" :id="item.id">
                      <a
                        :index="index"
                        :indexId="item.id"
                        :href="
                          '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                        "
                        class="scrollactive-item nav-item"
                      >
                        {{
                          item.name
                            .replace("- To Go", "")
                            .replace("To Go", "")
                            .replace(
                              " (some items change daily & may not be available if ordered in advance)",
                              ""
                            )
                            .trim()
                        }}
                      </a>
                    </swiper-slide>
                  </template>
                </template>
              </template>
            </template>
            <template v-if="preOrderToggleState">
              <template v-for="(item, index) in upserveSections">
                <template v-if="noFiltering">
                  <template v-if="item.timing_mask === item.timing_mask">
                    <swiper-slide v-if="!hideIfExpired(item)" :id="item.id">
                      <a
                        :index="index"
                        :indexId="item.id"
                        :id="item.id"
                        :href="
                          '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                        "
                        class="scrollactive-item nav-item"
                      >
                        {{
                          item.name
                            .replace("- To Go", "")
                            .replace("To Go", "")
                            .replace(
                              " (some items change daily & may not be available if ordered in advance)",
                              ""
                            )
                            .trim()
                        }}
                      </a>
                    </swiper-slide>
                  </template>
                </template>
                <template v-else>
                  <template v-if="true === true">
                    <template v-if="item.timing_mask === null">
                      <swiper-slide v-if="!hideIfExpired(item)" :id="item.id">
                        <a
                          :index="index"
                          :indexId="item.id"
                          :href="
                            '#' + item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                          "
                          class="scrollactive-item nav-item"
                        >
                          {{
                            item.name
                              .replace("- To Go", "")
                              .replace("To Go", "")
                              .replace(
                                " (some items change daily & may not be available if ordered in advance)",
                                ""
                              )
                              .trim()
                          }}
                        </a>
                      </swiper-slide>
                    </template>
                    <template v-else>
                      <template v-if="true === true">
                        <template
                          v-if="
                            currentlyAvailable(
                              item.timing_mask.start_time,
                              item.timing_mask.end_time,
                              item.timing_mask.rules,
                              selectedDate,
                              selectedTime
                            )
                          "
                        >
                          <swiper-slide
                            v-if="!hideIfExpired(item)"
                            :id="item.id"
                          >
                            <a
                              :index="index"
                              :indexId="item.id"
                              :href="
                                '#' +
                                  item.name.replace(/[^0-9a-zA-Z]/g, '').trim()
                              "
                              class="scrollactive-item nav-item"
                            >
                              {{
                                item.name
                                  .replace("- To Go", "")
                                  .replace("To Go", "")
                                  .replace(
                                    " (some items change daily & may not be available if ordered in advance)",
                                    ""
                                  )
                                  .trim()
                              }}
                            </a>
                          </swiper-slide>
                        </template>
                      </template>
                    </template>
                  </template>
                </template>
              </template>
            </template>
          </swiper>
        </scrollactive>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
// import  MoreInfo from "@/components/MoreInfo";
export default {
  components: {
    Swiper,
    SwiperSlide,
    // MoreInfo
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  name: "slidernav",
  props: [
    "valid",
    "preOrderToggleState",
    "upserveSections",
    "noFiltering",
    "nowDate",
    "nowTime",
    "futureDay",
    "futureTimes",
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
    onItemChanged(event, currentItem, lastActiveItem) {
      if (currentItem) {
        // slide to the index of the id where it matches with the current item id
        let indexId = currentItem.getAttribute("indexId");
        let child = document.getElementById(indexId);
        let parent = child.parentNode;

        this.$refs.mySwiperRef.$swiper.slideTo(
          Array.prototype.indexOf.call(parent.children, child),
          300
        );
      }
    },
    left() {
      this.$refs.mySwiperRef.$swiper.slidePrev();
    },
    right() {
      this.$refs.mySwiperRef.$swiper.slideNext();
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
  @import '@/assets/styles/css/slidernav.scss';
</style>
