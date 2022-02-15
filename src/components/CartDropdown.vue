<template>
  <div>
    <div @click="toggleDropdown()">
      carts
    </div>
    <div v-if="dropdownVisible" class="dropdownCarts">
      <div class="closeCartMenu" @click="toggleDropdown()">
        <CloseModalRed2 />
      </div>
      <ul>
        <li v-if="$store.state.storeRetail.charges.items.length > 0">
          <router-link to="/retail">
            retail ({{ $store.state.storeRetail.charges.items.length }})
          </router-link>
        </li>
        <li v-if="$store.state.storeMamnoon.charges.items.length > 0">
          <router-link to="/mamnoon">
            mamnoon ({{ $store.state.storeMamnoon.charges.items.length }})
          </router-link>
        </li>
        <li v-if="$store.state.storeMbar.charges.items.length > 0">
          <router-link to="/mbar">
            mbar ({{ $store.state.storeMbar.charges.items.length }})
          </router-link>
        </li>
        <li v-if="$store.state.storeStreet.charges.items.length > 0">
          <router-link to="/mamnoonstreet">
            mamnoon street ({{ $store.state.storeStreet.charges.items.length }})
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CloseModalRed2 from "@/components/svgIcons/CloseModalRed2";

export default {
  components: {
    CloseModalRed2,
  },
  data() {
    return {
      dropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
  },
};
</script>

<style lang="scss">
  @import '@/assets/styles/css/cartdropdown.scss';
</style>
