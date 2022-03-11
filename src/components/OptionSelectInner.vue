<template>
  <div class="box-inner">
    <div
      v-if="
        currentItem.name === 'mamnoon @ home' ||
          currentItem.name === 'Street Combo' ||
          currentItem.name === 'Lunch Combo Special' ||
          currentItem.name === `Valentine's Day Kit For Two`
      "
      class="hide-on-mob square"
    >
      <div class="content">
        <div style="width:100%;position: relative;">
          <template
            v-if="
              currentItem.name === 'mamnoon @ home' ||
                currentItem.name === 'Street Combo' ||
                currentItem.name === 'Lunch Combo Special' ||
                currentItem.name === `Valentine's Day Kit For Two`
            "
          >
            <div style="position: absolute;top:0;width:100%">
              <NadiIconxx />
            </div>
            <div style="position: absolute;top:0;width:100%;">
              <div>
                <template v-for="(piece, i) in upserveList">
                  <template
                    v-if="
                      piece.name
                        .toLowerCase()
                        .replace(' ', '')
                        .replace('mamnoon', '') ===
                        mod.name
                          .toLowerCase()
                          .replace(' ', '')
                          .replace('mamnoon', '')
                    "
                  >
                    <template v-if="piece.images">
                      <div
                        class="square"
                        style="background-size: cover;background-position: center center"
                        :style="{
                          backgroundImage: `url(${piece.images.online_ordering_menu.main})`,
                        }"
                      >
                        <div class="content">.</div>
                      </div>
                    </template>
                  </template></template
                >
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="pad-10">
      <span class="title-bolder">
        <span v-if="mod.name === 'None'">no add-ons</span>
        <span v-else>{{ mod.name }}</span>
        <span class="italicize" v-if="mod.price > 0"
          >+${{ mod.price }}</span
        ></span
      >
      <br />
    </div>
    <div v-if="mod.name.includes(': choose 1')">
      <div v-for="(piece, i) in upserveList" :key="'E' + i">
        <div v-if="piece.name.toLowerCase() === mod.name">
          <div class="pad-10">
            <p>{{ piece.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt10">
      <div class="pad-10" style="padding-bottom: 10px;"></div>
    </div>
  </div>
</template>

<script>
import NadiIconxx from "@/components/svgIcons/NadiIconxx";
export default {
  name: "OptionSelectInner",
  props: ["currentItem", "upserveList", "mod"],
  components: {
    NadiIconxx,
  },
};
</script>
