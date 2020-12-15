<template>
    <section :id="tag" class="coverflowsection">


      <UpserveFeatured />
  <div>
   <div>
      <div class="position-relative red-header">
        <h4 class="noselect">{{header}}
        </h4>
   
        <p class="description-para" style="text-align:center;margin-top: 20px;">{{descriptionbody}}</p>
      
      
<!-- family meals:
      {{familyMeals}} -->
      
      
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


      <div class="title noselect">

{{date}}
        </div>

      </div>

      <div class="bottom-button">
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
  </section>
</template>


<script>
import OrderStar from "@/components/svgIcons/OrderStar";
import PickupStar from "@/components/svgIcons/PickupStar";
import DeliveryStar from "@/components/svgIcons/DeliveryStar";

import UpserveFeatured from "@/components/UpserveFeatured";


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
    UpserveFeatured
  },
  data() {
    return {
      familyMeals: null,
      coverFlowIndex: 0,
      dotsLength: 0,
      productsList: this.familyMeals,
      date: null,
      link: null,
      tockPanelVisible: false,
      delivery: true
    };
  },
  computed: {
    count() {
      return this.familyMeals;
    },
  },
  watch: {
    count(newCount, oldCount) {

      // this.productsList = newCount;
      // this.title = newCount[0].title;
      // this.description = newCount[0].description;
      this.date = newCount[0].meal.date;
      // this.link = newCount[0].createdLink;
      this.delivery = newCount[0].meal.delivery;
      this.reset(newCount);
    }
  },
  mounted() {
this.dumpAcf()




  },
  props: ["data","header","tag","descriptionbody"],
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
dumpAcf(){


// console.log(this.data)
// console.log(this.data[0].meal.date)


this.familyMeals = this.data
this.date = this.data[0].meal.date



},
coverFlowTo(index){
    // console.log(index)
     coverflow().to(index-1);
   
    },
    returnProducts(index) {
        this.title = this.familyMeals[index].meal.title;
        this.date = this.familyMeals[index].meal.date;
        this.description = this.familyMeals[
          index
        ].meal.description;
        // this.link = this.familyMeals[index].createdLink;
        this.delivery = this.familyMeals[index].meal.delivery;
   
    },
    reset(x) {



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

  slides[0].innerHTML += "<div class='dialog cursor-pointer' style=''><a href="+x[0].meal.createdLink+" target='_blank'>mamnoon</a></div>"
  slides[0].innerHTML += "<a class='cursor-pointer' href="+x[0].meal.createdLink+" target='_blank'><img src="+x[0].meal.image+" /></a>"
  slides[0].innerHTML += "<div class='cursor-pointer bottom-rectangle'><div class='bottom-rectangle-text'><a href="+x[0].meal.createdLink+" target='_blank'>"+x[0].meal.title+"</a></div></div>"

  let dialog = document.getElementsByClassName("dialog");

  // console.log(dialog)

  this.on("focus", function (index) {
            that.returnProducts(index);

  var slides = document.getElementsByClassName("coverflow-cell");

slides[index].innerHTML += "<div class='dialog cursor-pointer'Regence˜><a href="+x[index].meal.createdLink+" target='_blank'>mamnoon</a></div>"
slides[index].innerHTML += "<a class='cursor-pointer' href="+x[index].meal.createdLink+" target='_blank'><img src="+x[index].meal.image+" /></a>"
slides[index].innerHTML += "<div class='cursor-pointer bottom-rectangle'><div class='bottom-rectangle-text'><a href="+x[index].meal.createdLink+" target='_blank'>"+x[index].meal.title+"</a></div></div>"

that.coverFlowIndex = index

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
  left: 20%;
  width: auto;
      bottom: 130px;
}

.right-button {
  cursor: pointer;
  position: absolute;
  width: auto;
  right: 20%;
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



#container{
  height: 480px;
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


.dialog{
font-size:24px;
font-weight:500;
color: #f05d5b;
text-align:center;
z-index: 100;
position: absolute;
left: 0;
top: 0;
width: 100%;
background: #fff367;
padding-bottom:5px;
}


.coverflow-cell img{
  width: 400px;
  height: 400px;

  width:100%;
  position: absolute;
  left: 0;
  top: 0;
}



.coverflow .coverflow-cell{
      width: 400px;
    height: 400px;
    top: -200px;
    left: -200px;
}


.description-para {
  color: white;
  margin: 12px auto 20px;
  width: 80%;
  text-align: center;

@media only screen and (max-width: 992px) {
  width: 90%;
  font-size: 12px;
}

}

</style>