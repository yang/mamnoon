<template>
  <div>
    <div class="tock-panel" v-if="tockPanelVisible">
      <button @click="freshTockPull()">wipe and refresh tock</button>

      <div class="tock-inner">
        <h1>current tock meals</h1>
        <div
          :key="tockMeal.title"
          v-for="(tockMeal, index) in this.$store.state.inventory.tockMeals"
        >
          link:
          <br />
          {{tockMeal.createdLink}}
          <br />title:
          <br />
          <input class="tockEditField" type="text" v-model="tockMeal.title" />&nbsp;&nbsp;
          <button @click="updateTockItem(tockMeal.title, 'title', index)">update title</button>
          <br />description:
          <br />
          <textarea class="tockEditField" type="text" v-model="tockMeal.description" />&nbsp;&nbsp;
          <button
            @click="updateTockItem(tockMeal.description, 'description', index)"
          >update</button>
          <br />image:
          <br />
          <img class="tockEditImage" :src="tockMeal.image" />
          <br />
          <input class="tockEditField" type="text" v-model="tockMeal.image" />
          <button @click="updateTockItem(tockMeal.image, 'image', index)">update</button>
          <div v-if="tockMeal.veg === true">vegetarian</div>
          <div else>meat</div>
          <div v-if="tockMeal.delivery === true">delivery</div>
          <div else>pickup</div>
          <br />
          <br />
        </div>
      </div>
    </div>
    <div>
      <div class="toggleVegContainer">
        <button
          class="toggleVeg"
          :class="{redBackground: $store.state.vegetarian}"
          @click="toggleVegetarian"
        >
          <div class="lrbutton" :class="{lrExpanded: $store.state.vegetarian}">
            <div v-if="$store.state.vegetarian === true">M</div>
            <div v-else>V</div>
          </div>
        </button>
      </div>
      <div class="position-relative">
        <h4 class="noselect">{{titleFromCMS}}</h4>
        <p style="text-align:left;margin-top: 20px;">{{descriptionFromCMS}}</p>
      </div>

      <div id="container"></div>

      <div class="full-width-block">
        <div v-if="title" class="title noselect">
          <a :href="link" target="_blank">{{title | truncate(60, '...')}}</a>
        </div>
        <div v-if="description" class="description noselect">{{description | truncate(80, '...')}}</div>
      </div>

      <div class="bottom-button">
        <a class="left-button" onclick="coverflow().prev();">
          <Prev />
        </a>
        <a class="right-button" onclick="coverflow().next();">
          <Next />
        </a>

        <a class="full-width" :href="link" target="_blank">
          <div class="outer">
            <transition name="fade">
              <template v-if="delivery">
                <DeliveryStar />
              </template>
              <template v-else>
                <PickupStar />
              </template>
            </transition>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import OrderStar from "@/components/svgIcons/OrderStar";
import PickupStar from "@/components/svgIcons/PickupStar";
import DeliveryStar from "@/components/svgIcons/DeliveryStar";

import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

export default {
  name: "coverflow",
  components: {
    OrderStar,
    PickupStar,
    DeliveryStar,
    Prev,
    Next,
  },
  data() {
    return {
      productsList: this.$store.state.inventory.tockMeals,
      title:
        this.$store.state.inventory.tockMeals.length > 0
          ? this.$store.state.inventory.tockMeals[0].title
          : "loading...",
      description:
        this.$store.state.inventory.tockMeals.length > 0
          ? this.$store.state.inventory.tockMeals[0].description
          : "loading...",
      link:
        this.$store.state.inventory.tockMeals.length > 0
          ? this.$store.state.inventory.tockMeals[0].createdLink
          : "loading...",
      delivery:
        this.$store.state.inventory.tockMeals.length > 0
          ? this.$store.state.inventory.tockMeals[0].delivery
          : "loading...",
      tockPanelVisible: false,
    };
  },
  mounted() {
    if (this.$store.state.vegetarian === true) {
      const map1 = this.$store.state.inventory.tockMeals.filter(function (x) {
        if (x.veg === true) return x;
      });
      this.productsList = map1;
      this.title = map1[0].title;
      this.description = map1[0].description;
      this.link = map1[0].createdLink;
      this.delivery = map1[0].delivery;

      this.reset(map1);
    } else {


    if (this.$store.state.inventory.tockMeals[0]) {
      this.productsList = this.$store.state.inventory.tockMeals;
      this.title = this.$store.state.inventory.tockMeals[0].title;
      this.description = this.$store.state.inventory.tockMeals[0].description;
      this.link = this.$store.state.inventory.tockMeals[0].createdLink;
      this.delivery = this.$store.state.inventory.tockMeals[0].delivery;

    }

      this.reset(this.productsList);




    }
  },
  props: ["products", "titleFromCMS", "descriptionFromCMS"],
  computed: {
    count() {
      return this.$store.state.inventory.tockMeals;
    },
    vegetarian() {
      return this.$store.state.vegetarian;
    },
  },
  watch: {
    count(newCount, oldCount) {
      this.productsList = newCount;
      this.title = newCount[0].title;
      this.description = newCount[0].description;
      this.link = newCount[0].createdLink;
      this.delivery = newCount[0].delivery;
      this.reset(newCount);
    },
    vegetarian() {
      if (this.$store.state.vegetarian === true) {
        const map1 = this.$store.state.inventory.tockMeals.filter(function (x) {
          if (x.veg === true) return x;
        });
        this.productsList = map1;

        this.title = map1[0].title;
        this.description = map1[0].description;
        this.link = map1[0].createdLink;
        this.delivery = map1[0].delivery;
        this.reset(map1);
      } else {
        this.productsList = this.$store.state.inventory.tockMeals;
        this.title = this.$store.state.inventory.tockMeals[0].title;
        this.description = this.$store.state.inventory.tockMeals[0].description;
        this.link = this.$store.state.inventory.tockMeals[0].createdLink;
        this.delivery = this.$store.state.inventory.tockMeals[0].delivery;
        this.reset(this.productsList);
      }
    },
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
    if (window.location.search === "?showTock") {
      this.tockPanelVisible = true;
    } else {
      this.tockPanelVisible = false;
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    async freshTockPull() {
      let responseTock = await this.$http.get(`/tock/tockmeals/${false}`);
      let inventoryTockAdd = responseTock.data.tockMeals;
      this.$store.commit("updateTockMeals", { inventoryTockAdd });

      let responseTockStreet = await this.$http.get(`/tock/tockmeals/${true}`);
      let inventoryTockAddStreet = responseTockStreet.data.tockMeals;
      this.$store.commit("updateTockMealsStreet", { inventoryTockAddStreet });
    },
    updateTockItem(text, item, index) {
      let updateTockItem = {
        text,
        item,
        index,
      };
      this.$store.commit("updateTockItem", { updateTockItem });

      if (this.$store.state.vegetarian === true) {
        const map1 = this.$store.state.inventory.tockMeals.filter(function (x) {
          if (x.veg === true) return x;
        });
        this.productsList = map1;
        this.title = map1[0].title;
        this.description = map1[0].description;
        this.link = map1[0].createdLink;
        this.delivery = map1[0].delivery;

        this.reset(map1);
      } else {
        this.productsList = this.$store.state.inventory.tockMeals;

        this.title = this.$store.state.inventory.tockMeals[0].title;
        this.description = this.$store.state.inventory.tockMeals[0].description;
        this.link = this.$store.state.inventory.tockMeals[0].createdLink;
        this.delivery = this.$store.state.inventory.tockMeals[0].delivery;
        this.reset(this.productsList);
      }
      // big thing
    },
    toggleVegetarian() {
      this.$store.commit("toggleVegetarian");
    },
    returnProducts(index) {
      if (this.$store.state.vegetarian === true) {
        const map1 = this.$store.state.inventory.tockMeals.filter(function (x) {
          if (x.veg === true) return x;
        });
        this.productsList = map1;
        this.title = map1[index].title;
        this.description = map1[index].description;
        this.link = map1[index].createdLink;
        this.delivery = map1[index].delivery;
      } else {
        this.title = this.$store.state.inventory.tockMeals[index].title;
        this.description = this.$store.state.inventory.tockMeals[
          index
        ].description;
        this.link = this.$store.state.inventory.tockMeals[index].createdLink;
        this.delivery = this.$store.state.inventory.tockMeals[index].delivery;
      }
    },
    reset(x) {
      let that = this;

      // coverflow('container').fadeOut()
      // setTimeout(function(){
      coverflow("container").remove();
      // }, 1000);

      coverflow("container")
        .setup({
          width: "100%",
          item: 0,
          rotatedelay: 0,
          backgroundcolor: "#F05D5B",
          reflectionopacity: 0,
          playlist: x,
          coverwidth: 240,
          coverheight: 200,
          fixedsize: false,
          textoffset: 50,
          coverangle: 50,
        })
        .on("ready", function () {
          this.on("focus", function (index) {
            that.returnProducts(index);
          });
          this.on("click", function (index, link) {
            if (link) {
              window.open(link, "_blank");
            }
          });
        });
    },
  },
};
</script>


<style lang="scss">
.left-button {
  cursor: pointer;
  position: absolute;
  left: 5%;
  width: auto;
  top: 30px;
}

.right-button {
  cursor: pointer;
  position: absolute;
  right: 5%;
  width: auto;
  top: 30px;
}

@media only screen and (max-width: 768px) {
  .left-button {
    left: 5%;
  }

  .right-button {
    right: 5%;
  }
}

.position-relative {
  position: relative;
}

.coverflow-text {
  display: none;
}

.title,
.description,
.delivery,
.link {
  color: white;
  text-align: center;
  width: 60%;
  margin: 0 auto;

  a {
    color: white;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
}

@media only screen and (max-width: 1080px) {
  .title,
  .description,
  .delivery,
  .link {
    width: 80%;
  }
}

.title {
  margin-bottom: 6px;
  // margin-top: 12px;
  margin-top: 22px;
  // font-size: 24px;
  font-size: 20px;
}

#container.coverflow,
#container.coverflow:focus,
#container.coverflow:active {
  outline: none;
  overflow: hidden;
  // margin-top: 40px;
  margin-top: 20px;
  .coverflow-wrap {
    transform: scale(1.75);
  }
}

@media only screen and (max-width: 1080px) {
  #container.coverflow,
  #container.coverflow:focus,
  #container.coverflow:active {
    .coverflow-wrap {
      transform: scale(1.5);
    }
  }
}

@media only screen and (max-width: 768px) {
  #container.coverflow,
  #container.coverflow:focus,
  #container.coverflow:active {
    .coverflow-wrap {
      transform: scale(1);
    }
  }
}

.toggleVeg {
  position: absolute;
  right: 10px;
  top: 0;
  position: absolute;
  top: 0;
  z-index: 90;
}

.toggleVegContainer {
  position: absolute;
  right: 10px;
  bottom: 156px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "V";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  content: "M";
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.toggleVeg {
  width: 62px;
  // text-align: left;
  padding: 0;
  border: 0;
  background-color: #6bf7a3;
  border-radius: 15px;

  border: 2px solid transparent;
  border: 1px solid #f05d5b;
  &.redBackground {
    background-color: #f05d5b;
  }

  &:active,
  &:focus {
    outline: none;
  }

  .lrbutton {
    width: 30px;
    background: #fff367;
    border-radius: 15px;
    transition: all 0.5s ease;
    border: 2px solid transparent;

    &.lrExpanded {
      margin-left: 30px;
    }
  }
}

.bottom-button {
  border: 1px solid #f05d5b;
}

.bottom-button a.full-width {
  width: 100%;
}

.full-width-block {
  width: 100%;
  background: white;
  min-height: 170px;
  border: 1px solid #f05d5b;
  margin-top: 30px;

  .description,
  .title,
  .title a,
  a.link {
    color: #f05d5b;
  }
}

.tock-panel {
  border: 1px solid blue;
  padding: 10px;
  position: fixed;
  z-index: 100;
  top: 3%;
  background: #ffffffc7;
  left: 5%;
  width: 90%;
}

.tock-inner {
  overflow: scroll;
  overflow-y: scroll;
  position: relative;
  height: 100vh;
  padding-bottom: 200px;
}

.tockEditField {
  width: 50%;
}

.tockEditImage {
  width: 300px;
  margin-bottom: 20px;
}
</style>