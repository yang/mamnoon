<template>
  <div
    class="container online-menu order-modal-width topCurves orderModalHeader"
    style="margin: 0;max-width: 100% !important;"
  >
    <template
      v-if="
        currentItem.name !== 'mamnoon @ home' ||
          currentItem.name !== 'Street Combo' ||
          currentItem.name !== 'Lunch Combo Special' ||
          currentItem.name === `Valentine's Day Kit For Two`
      "
    >
      <div
        class="item-image-container topCurves"
        v-if="currentItem.images"
        :style="{
          'background-image': currentItem.images.online_ordering_menu.main,
        }"
      >
        <div
          v-if="
            imageDimensions(currentItem.images.online_ordering_menu.main) > 1
          "
        >
          <img
            :src="currentItem.images.online_ordering_menu.main"
            style="width:100%"
          />
        </div>
        <div v-else>
          <img
            :src="currentItem.images.online_ordering_menu.main"
            style="width:100%"
          />
        </div>
      </div>
      <div
        class="item-image-container"
        v-else
        style="height: 70px;background: #ffffff;"
      ></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ModalImagePanel",
  props: ["currentItem"],
};
</script>
