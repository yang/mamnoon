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
          <button @click="updateTockItem(tockMeal.title, 'title', index, tockMeal._id)">update title</button>
          <br />description:
          <br />
          <textarea class="tockEditField" type="text" v-model="tockMeal.description" />&nbsp;&nbsp;
          <button
            @click="updateTockItem(tockMeal.description, 'description', index, tockMeal._id)"
          >update</button>
          <br />image:
          <br />
          <img class="tockEditImage" :src="tockMeal.image" />
          <br />
          <input class="tockEditField" type="text" v-model="tockMeal.image" />
          <button @click="updateTockItem(tockMeal.image, 'image', index, tockMeal._id)">update</button>
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
      <!-- <div class="toggleVegContainer">
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
      </div> -->
      <div class="position-relative red-header">
        <h4 class="noselect">{{titleFromCMS}}</h4>
        <p style="text-align:left;margin-top: 20px;">{{descriptionFromCMS}}</p>
      
      
      
      {{familyMeals}}
      
      
      </div>

      <div id="container"></div>

      <div class="full-width-block">


 <ul class="dots">
  <li v-for="index in dotsLength" :key="index" @click="coverFlowTo(index)">
    <div class="whitedot noselect" v-if="index - 1 < coverFlowIndex">
      {{index}}
    </div>
    <div  class="yellowdot noselect" v-else-if="index - 1 === coverFlowIndex">
      {{index}}
    </div>
      <div class="blackdot noselect" v-else-if="index - 1 > coverFlowIndex">
      {{index}}
    </div> 

  </li>
</ul>


        <a class="left-button" onclick="coverflow().prev();">
          <Prev />
        </a>
        <a class="right-button" onclick="coverflow().next();">
          <Next />
        </a>


      <div v-if="title" class="title noselect">
          <!-- <a :href="link" target="_blank">{{title | truncate(60, '...')}}</a> -->

    <!-- {{coverFlowIndex}} -->
<!-- {{description | truncate(80, '...')}} -->
{{date}}
        </div>
        <!-- <div v-if="description" class="description noselect">{{description | truncate(80, '...')}}</div> -->
      

      <!-- <div :class="'index'+coverFlowIndex">
              {{coverFlowIndex}}
              
      </div> -->
      </div>

      <div class="bottom-button">
        <!-- <a class="left-button" onclick="coverflow().prev();">
          <Prev />
        </a>
        <a class="right-button" onclick="coverflow().next();">
          <Next />
        </a> -->

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
      familyMeals: null,
      coverFlowIndex: 0,
      dotsLength: 0,
      productsList: this.$store.state.inventory.tockMeals,
      date:
              this.$store.state.inventory.tockMeals.length > 0
          ? this.$store.state.inventory.tockMeals[0].date
          : "loading...",
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

    // if (this.$store.state.vegetarian === true) {
    //   const map1 = this.$store.state.inventory.tockMeals.filter(function (x) {
    //     if (x.veg === true) return x;
    //   });
    //   this.productsList = map1;
    //   this.title = map1[0].title;
    //   this.description = map1[0].description;
    //   this.link = map1[0].createdLink;
    //   this.delivery = map1[0].delivery;
    //   this.reset(map1);
    // } else {
    // if (this.$store.state.inventory.tockMeals[0]) {
    //   this.productsList = this.$store.state.inventory.tockMeals;
    //   this.title = this.$store.state.inventory.tockMeals[0].title;
    //   this.description = this.$store.state.inventory.tockMeals[0].description;
    //   this.link = this.$store.state.inventory.tockMeals[0].createdLink;
    //   this.delivery = this.$store.state.inventory.tockMeals[0].delivery;
    // }
    // // console.log(this.productsList)
    //   this.reset(this.productsList);
    // }




console.log(1234)
this.dumpAcf()


  },
  props: ["products", "titleFromCMS", "descriptionFromCMS"],
  // computed: {
  //   count() {
  //     return this.$store.state.inventory.tockMeals;
  //   },
  //   vegetarian() {
  //     return this.$store.state.vegetarian;
  //   },
  // },
//   watch: {
//     count(newCount, oldCount) {
// console.log('newCount')
//       console.log(newCount)
//       this.productsList = newCount;
//       this.title = newCount[0].title;
//       this.description = newCount[0].description;
//       this.date = newCount[0].date;
//       this.link = newCount[0].createdLink;
//       this.delivery = newCount[0].delivery;
//       this.reset(newCount);
//     },
//     vegetarian() {
//       if (this.$store.state.vegetarian === true) {
//         const map1 = this.$store.state.inventory.tockMeals.filter(function (x) {
//           if (x.veg === true) return x;
//         });
//         this.productsList = map1;

//         this.title = map1[0].title;
//         this.description = map1[0].description;
//          this.date = map1[0].date;
//         this.link = map1[0].createdLink;
//         this.delivery = map1[0].delivery;
//         this.reset(map1);
//       } else {
//         this.productsList = this.$store.state.inventory.tockMeals;
//         this.title = this.$store.state.inventory.tockMeals[0].title;
//         this.description = this.$store.state.inventory.tockMeals[0].description;
//         this.date = this.$store.state.inventory.tockMeals[0].date;
//         this.link = this.$store.state.inventory.tockMeals[0].createdLink;
//         this.delivery = this.$store.state.inventory.tockMeals[0].delivery;
//         this.reset(this.productsList);
//       }
//     },
//   },
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
async dumpAcf(){

let responseAcf = await this.$http.get(`http://localhost:8888/wp-json/acf/v3/pages`)
// let responseAcf = await this.$http.get(`https://testsite.mamnoon.webfactional.com/wp-json/acf/v3/pages`)

let AcfBlock = responseAcf.data[0].acf.family_meal_calendar
console.log(AcfBlock)
// console.log(AcfBlock)
this.familyMeals = AcfBlock

},
coverFlowTo(index){
    console.log(index)
     coverflow().to(index-1);
   
    },
    async freshTockPull() {
      let responseTock = await this.$http.get(`/tock/tockmeals/${false}`);
      let inventoryTockAdd = responseTock.data.tockMeals;
      this.$store.commit("updateTockMeals", { inventoryTockAdd });

      let responseTockStreet = await this.$http.get(`/tock/tockmeals/${true}`);
      let inventoryTockAddStreet = responseTockStreet.data.tockMeals;
      this.$store.commit("updateTockMealsStreet", { inventoryTockAddStreet });
    },
    updateTockItem(text, item, index, _id) {
      let updateTockItem = {
        text,
        item,
        index,
        _id
      };
      this.$store.commit("updateTockItem", { updateTockItem });

      if (this.$store.state.vegetarian === true) {
        const map1 = this.$store.state.inventory.tockMeals.filter(function (x) {
          if (x.veg === true) return x;
        });
        this.productsList = map1;
        this.title = map1[0].title;
        this.description = map1[0].description;
        this.date = map1[0].date;
        this.link = map1[0].createdLink;
        this.delivery = map1[0].delivery;

        this.reset(map1);
      } else {
        this.productsList = this.$store.state.inventory.tockMeals;

        this.title = this.$store.state.inventory.tockMeals[0].title;
        this.description = this.$store.state.inventory.tockMeals[0].description;
        this.date = this.$store.state.inventory.tockMeals[0].date;
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
        this.date = map1[index].date;
        this.link = map1[index].createdLink;
        this.delivery = map1[index].delivery;
      } else {
        this.title = this.$store.state.inventory.tockMeals[index].title;
        this.date = this.$store.state.inventory.tockMeals[index].date;
        this.description = this.$store.state.inventory.tockMeals[
          index
        ].description;
        this.link = this.$store.state.inventory.tockMeals[index].createdLink;
        this.delivery = this.$store.state.inventory.tockMeals[index].delivery;
      }
    },
    reset(x) {


      console.log(x.length)
      let that = this;


      this.dotsLength = x.length

      // coverflow('container').fadeOut()
      // setTimeout(function(){
      coverflow("container").remove();
      // }, 1000);

      coverflow("container")
        .setup({
          width: "100%",
          item: 0,
          rotatedelay: 0,
          backgroundcolor: "#F58E58",
          reflectionopacity: 0,
          playlist: x,
          coverwidth: 400,
          coverheight: 400,
          fixedsize: false,
          textoffset: 50,
          coverangle: 5,
          coverdepth: 100,
          opacitydecrease: .9,
          focallength: 300,
          tweentime: 1
        })
        .on("ready", function () {


  var slides = document.getElementsByClassName("coverflow-cell");




  slides[0].innerHTML += "<div class='dialog cursor-pointer' style='font-size:24px;font-weight:500;color: #f05d5b;text-align:center;z-index: 100;position: absolute;left: 0;top: 0;width: 100%;background: #fff367;padding-bottom:5px;'><a href="+x[0].meal.createdLink+" target='_blank'>mamnoon</a></div>"
  slides[0].innerHTML += "<a class='cursor-pointer' href="+x[0].meal.createdLink+" target='_blank'><img style='width:100%;position: absolute;left: 0;top: 0;' src="+x[0].image+" /></a>"
  slides[0].innerHTML += "<div class='cursor-pointer bottom-rectangle'><div class='bottom-rectangle-text'><a href="+x[0].meal.createdLink+" target='_blank'>"+x[0].title+"</a></div></div>"


console.log('2345')
console.log(x[0])

  let dialog = document.getElementsByClassName("dialog");



  this.on("focus", function (index) {
            that.returnProducts(index);

  var slides = document.getElementsByClassName("coverflow-cell");


slides[index].innerHTML += "<div class='dialog cursor-pointer' style='font-size:24px;font-weight:500;color: #f05d5b;text-align:center;z-index: 100;position: absolute;left: 0;top: 0;width: 100%;background: #fff367;padding-bottom:5px;'><a href="+x[index].meal.createdLink+" target='_blank'>mamnoon</a></div>"
  slides[index].innerHTML += "<a class='cursor-pointer' href="+x[index].meal.createdLink+" target='_blank'><img style='width:100%;position: absolute;left: 0;top: 0;' src="+x[index].image+" /></a>"
  slides[index].innerHTML += "<div class='cursor-pointer bottom-rectangle'><div class='bottom-rectangle-text'><a href="+x[index].meal.createdLink+" target='_blank'>"+x[index].title+"</a></div></div>"
  
  // slides.style.opacity=1; 

  // slides[index].style.opacity=0; 

that.coverFlowIndex = index

      });
          this.on("click", function (index, link) {
            if (link) {
              window.open(link, "_blank");
            }
          });
        });



// console.log(x)
// var slides = document.getElementsByClassName("coverflow-cell");
// for (var i = 0; i < slides.length; i++) {
//   //  slides[i].prepend("<div>Headline:"+i+"</div>")

//    slides[i].innerHTML += "<div style='font-size:24px;font-weight:500;color: #f05d5b;text-align:center;z-index: 100;position: absolute;left: 0;top: 0;width: 100%;background: #fff367;'>mamnoon</div>"
// slides[i].innerHTML += "<img style='width:100%;position: absolute;left: 0;top: 0;' src="+x[i].image+" />"
//   //  slides[i].innerHTML += "<div style='font-size:24px;font-weight:500;color: #f05d5b;text-align:center;z-index: 100;position: absolute;left: 0;bottom: 0;width: 100%;background: #fff367;'>"+x[i].title+"</div>"
// }

    },
  },
};
</script>


<style lang="scss">
.left-button {
  cursor: pointer;
  position: absolute;
  left: 30%;
  width: auto;
      bottom: 130px;
}

.right-button {
  cursor: pointer;
  position: absolute;
  width: auto;
  right: 30%;
      bottom: 130px;
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
    // transform: scale(1.75);
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
  // border: 1px solid #f05d5b;
}

.bottom-button a.full-width {
  width: 100%;
}

.full-width-block {
  width: 100%;
  // background: white;
  min-height: 170px;
  // border: 1px solid #f05d5b;
  margin-top: 0;
  position: relative;
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



ul.dots{
    margin: 0 auto;
    text-align: center;
    width: 100%;
    margin-top: -24px;
        margin-top: -50px;
        z-index: 60;
    position: absolute;
    margin-bottom: 0;
    padding-left: 0;
}

ul.dots li{
    display: inline-block;
cursor: pointer;
    list-style-type: none;
}



ul.dots li div{
  border-radius: 10px;
  background: white;
    // background: transparent;
  width: 20px;
  height: 20px;
  margin: 10px;
  color: transparent;
  // border: 2px solid yellow;
}


.whitedot{
  background: white !important;
}
.yellowdot{
  background: yellow !important;
  pointer-events: none;
}



.description,
.title,
.title a{
// color: #fff !important;
    color: #fff367 !important;
    font-weight: 500 !important;
    font-size: 24px;
}



.red-header{
  background-color: #F05D5B;
  padding: 20px 0 15px;
}


#container.coverflow, #container.coverflow:focus, #container.coverflow:active{
  margin-top: 0 !important;
  background-color: transparent !important;
}


a.left-button svg,
a.right-button svg {
    width: 40px;
    height: 40px;
}


.cursor-pointer{
  cursor: pointer;

  a{
    text-decoration: none;
    color: #f05d5b;
    &:hover{
          text-decoration: none;
    color: #f05d5b;
    cursor: pointer;
    }
  }
}


.bottom-rectangle{
  font-size:24px;
  font-weight:500;
  color: #f05d5b;
  text-align:center;
  z-index: 100;
  position: absolute;
  left: 0;bottom: 0;
  width: 100%;
  background: #fff367;
}



.bottom-rectangle-text{
  font-size: 20px;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
}

</style>