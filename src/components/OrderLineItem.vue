<template>
  <div class="mt5 inline-flex" style="cursor:pointer;">
    <div class="roundSquareBox">
      <div v-if="order.quantity < 10" class="quantity">
        <div style="position: relative;">
          <LittleStar style="position: absolute;top: -8px;left: -30px;" />
          <div class="starCount">x{{ order.quantity }}</div>
          </div>
      </div>
        <div v-else class="quantity">
        <div style="position: relative;">
        <LittleStar style="position: absolute;top: -10px;left: -30px;" />
        <div class="starCount biggerNumber">x{{ order.quantity }}</div>
        </div>
      </div>

      <div
        class="roundSquareImageContainer"
        v-if="order.images"
        :style="{
          backgroundImage: `url(${order.images.online_ordering_menu.main})`,
        }"
      ></div>
      <div class="roundSquareImageContainer" v-else>
        <NadiIconSmXSidebar />
      </div>
    </div>
    <div class="textInfo">
      <div class="itemTitle">
        {{ checkIfGiftCard(order.name) }}

        <div class="" v-if="order.modifiers.length > 0">
          <div
            v-if="order.name === 'Lunch Combo Special'"
            class="small-message grey"
          >
            +{{ order.modifiers.length }} selections
          </div>
          <div v-else class="small-message grey">
            +{{ order.modifiers.length }} items
          </div>
          <!--
                <template v-if="order.name !== 'Lunch Combo Special'" v-for="(item, index) in order.modifiers">
                <div class="small-message grey" v-if="index <= 1">+{{item.name.replace("add","")}} <span style="font-weight: 100" v-if="index === 1&& order.modifiers.length - 2 >0">(+{{order.modifiers.length -2 }} more)</span></div>
                </template>-->

          <!--<div class="small-message grey" v-for="(mod, i) in order.modifiers">
                <span v-if="mod.name !== 'None'">{{mod.name}} <b v-if="mod.price > 0">+${{mod.price | showToFixed}}</b> <span style="color:$nadi-red-color;font-weight:500;" v-if="i === 1 && order.modifiers.length>2">(+{{ order.modifiers.length - 2}} more)</span></span>
                </div>-->
        </div>
        <div v-if="order.instructions !== ''" class="order-instructions">
          {{ order.instructions | truncate(16, "...") }}
        </div>
        <div class="itemPrice">${{ formatWithAddons(order) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import NadiIconSmXSidebar from "@/components/svgIcons/NadiIconSmXSidebar";

import LittleStar from "@/components/svgIcons/LittleStar";

export default {
  name: "OrderLineItem",
  props: ["order"],
  components: {
    NadiIconSmXSidebar,
    LittleStar,
  },
};
</script>
