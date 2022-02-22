<template>
    <div
      :key="componentKey"
      v-if="!$store.state.reorderTrue"
      id="upserveolo"
      :class="{ smallerBoxes: currentItem && returnCorrect }"
    >
      <!-- <div id="upserveolo"> -->
      <section>
        <div v-if="editInfoVisible === true" class="editInfoModalBg"></div>
        <div v-if="editInfoVisible === true" class="editInfoModal">
          <div
            class="
              container
              online-menu
              order-modal-width
              full-width-modal-header
            "
          >
            <div @click="editInfoVisible = false" class="close closeModal">
              <CloseModal />
            </div>
            <h4>edit info</h4>
          </div>
          <div class="cIEdit">
            <div class="address" v-if="!updateCI">
              <b>guest info:</b> <br />
              <template v-if="user && user.user && user.user.deliveryAddress">
                {{ user.user.deliveryAddress.name }}<br />
                {{ user.user.deliveryAddress.phone }}<br />
              </template>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
</template>

<br />
<button class="sm-button" @click="updateCI = true">update guest info</button>
<br />
