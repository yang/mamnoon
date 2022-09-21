<!-- @format -->

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
        </scrollactive>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/css/slidernav.scss";
</style>
