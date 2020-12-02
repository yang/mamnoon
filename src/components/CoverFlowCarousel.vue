<template>
    <section :id="tag" class="coverflowsection">
<div class="is-fullheight no-top-pad" id="cover-carousel">
<h4 class="noselect">{{header}}</h4>
    <p class="description-para hide-mobile" style="text-align:center;margin-top: 20px;">{{descriptionbody}}</p>
   <template v-if="upserveSections.length === 0">
     <div class="container text-center pt20 white-text" style="height: 550px;margin-top: 100px;position: relative;">
       <div class="loading-box">
       Loading...
       </div>
     </div>
     </template>
         <template v-else>
             <!-- <VueAspectRatio ar="6:7" width="100%" class="">   -->
        <carousel :items="1" :loop="false" :dots="true" :nav="false" v-if="upserveSections" style="height: 550px;margin-top: 16px;">
                                 <template class="subprev" slot="prev">
                <span class="prev">
                    <Prev />
            </span>
          </template>
            <!-- <template v-for="item in upserveSections" v-if="item.name === 'Feature - Tuesday'||item.name === 'Feature - Wednesday'||item.name === 'Feature - Thursday'||item.name === 'Feature - Friday'||item.name === 'Feature - Saturday'"> -->
            <template v-for="item in upserveSections">
            <div v-for="piece in item.item_ids" :key="piece">  
                    <template v-for="serve in upserve">
            <div v-if="serve.id === piece" class="inline-block full-height-slide" style="height:400px;">  
            <template v-if="serve.images">
     <div class="outside-slideshow">
<img v-if="serve.images.online_ordering_menu" :src="serve.images.online_ordering_menu.main" alt="" style="height: 100%;position: absolute;top: 0px;left: 0px;width: 100% !important;filter: blur(4px);transform: scale(1.5);opacity: .9;">


<!-- <img v-if="serve.images.online_ordering_menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAKHmlDQ1BJQ0MgUHJvZmlsZQAASImFlgdUVNcWhs+90xtthqH3DtLbANJ7k15FZRhg6A5DFbEhwQhEEBERUAISqoLRUGNBRLEQBBSwByQIKDFYABWV3IEkGt9b7+1Z5+5v/XP2PnvunbXuDwCpkMnhxMECAMQnJHO9HW1kA4OCZXG/ATyQARSgCsyYrCSOtaenG0Di7/zvWBwFEC/f1uT1+s/v/2cIhUcksQCAQhBmsDjcZISLEfZNS+bweAZhGhcZCuEPPGavMm9iQAtbY8XVPb7etggzAMCTmUwuGwCiHaLLprLYSB9iOMI6CeHRCQjz+luwopiIRryD8LrIuJR0AEi8eXTi47ciOkkHYVWkloNwIG+2sC/6s/91Vtg/ZzGZ7H84Pi6F9ddv5N0dckSCnw+SxZElCSKBFogDKSAdyAIO4IKtiBKNKBHIc/jvdYzVOltkJwdsQyqiARtEgWSk3uGLXj6rnZJBGmAieyIQxQ352PKe6VrL1/TVrhD9xmctsRsAk1xEZH/WmAoAdD4FgLr4WVN4hYxTCMD5QVYKN3VNQ/MuGEAE/IAGxIA0UED+M5pADxgBM2AF7IEL8AC+IAhsBixk3nhkqjSQCfaAHJAHCsFhUAYqwQlQD06BM6AdnAOXwFVwEwyCEfAAjIMp8BzMg0WwDEEQDqJAVEgMkoGUIA1ID2JAFpA95AZ5Q0FQKMSGEqAUKBPaC+VBRVAZVAU1QD9CndAl6Do0BN2DJqBZ6BX0HkbBZJgGS8HKsDbMgK1hV9gX3gSz4UQ4A86GD8ClcDV8Em6DL8E34RF4HH4OL6AAioSio+RQmigGyhblgQpGRaK4qJ2oXFQJqhrVjOpC9aFuo8ZRc6h3aCyaipZFa6LN0E5oPzQLnYjeic5Hl6Hr0W3oXvRt9AR6Hv0JQ8FIYjQwphhnTCCGjUnD5GBKMLWYVswVzAhmCrOIxWLpWBWsMdYJG4SNwW7H5mOPYVuw3dgh7CR2AYfDieE0cOY4DxwTl4zLwR3FncRdxA3jpnBv8SS8DF4P74APxifgs/Al+Eb8Bfwwfhq/TBAgKBFMCR6EcMI2QgGhhtBFuEWYIiwTBYkqRHOiLzGGuIdYSmwmXiE+JL4mkUjyJBOSFymatJtUSjpNukaaIL0jC5HVybbkEHIK+QC5jtxNvkd+TaFQlClWlGBKMuUApYFymfKY8paPyqfF58wXzreLr5yvjW+Y7wU/gV+J35p/M38Gfwn/Wf5b/HMCBAFlAVsBpsBOgXKBToExgQVBqqCuoIdgvGC+YKPgdcEZIZyQspC9ULhQttAJoctCk1QUVYFqS2VR91JrqFeoUzQsTYXmTIuh5dFO0QZo88JCwgbC/sLpwuXC54XH6Si6Mt2ZHkcvoJ+hj9Lfi0iJWItEiOwXaRYZFlkSlRC1Eo0QzRVtER0RfS8mK2YvFit2UKxd7JE4Wlxd3Es8Tfy4+BXxOQmahJkESyJX4ozEfUlYUl3SW3K75AnJfskFKWkpRymO1FGpy1Jz0nRpK+kY6WLpC9KzMlQZC5lomWKZizLPZIVlrWXjZEtle2Xn5STlnORS5KrkBuSW5VXk/eSz5FvkHykQFRgKkQrFCj0K84oyiu6KmYpNiveVCEoMpSilI0p9SkvKKsoByvuU25VnVERVnFUyVJpUHqpSVC1VE1WrVe+oYdUYarFqx9QG1WF1Q/Uo9XL1WxqwhpFGtMYxjaF1mHUm6xLWVa8b0yRrWmumajZpTmjRtdy0srTatV5oK2oHax/U7tP+pGOoE6dTo/NAV0jXRTdLt0v3lZ66HkuvXO+OPkXfQX+Xfof+SwMNgwiD4wZ3DamG7ob7DHsMPxoZG3GNmo1mjRWNQ40rjMcYNIYnI59xzQRjYmOyy+ScyTtTI9Nk0zOmf5hpmsWaNZrNrFdZH7G+Zv2kubw507zKfNxC1iLU4nuLcUs5S6ZlteUTKwWrcKtaq2lrNesY65PWL2x0bLg2rTZLtqa2O2y77VB2jna5dgP2QvZ+9mX2jx3kHdgOTQ7zjoaO2x27nTBOrk4HncacpZxZzg3O8y7GLjtcel3Jrj6uZa5P3NTduG5d7rC7i/sh94cblDYkbGj3AB7OHoc8HnmqeCZ6/uyF9fL0Kvd66q3rnend50P12eLT6LPoa+Nb4PvAT9Uvxa/Hn98/xL/BfynALqAoYDxQO3BH4M0g8aDooI5gXLB/cG3wwkb7jYc3ToUYhuSEjG5S2ZS+6fpm8c1xm89v4d/C3HI2FBMaENoY+oHpwaxmLoQ5h1WEzbNsWUdYz8OtwovDZyPMI4oipiPNI4siZ9jm7EPs2SjLqJKouWjb6LLolzFOMZUxS7EesXWxK3EBcS3x+PjQ+M4EoYTYhN6t0lvTtw5xNDg5nPFE08TDifNcV25tEpS0KakjmYa8SPtTVFO+SZlItUgtT32b5p92Nl0wPSG9f5v6tv3bpjMcMn7Yjt7O2t6TKZe5J3Nih/WOqp3QzrCdPbsUdmXvmtrtuLt+D3FP7J5fsnSyirLe7A3Y25Utlb07e/Ibx2+acvhyuDlj+8z2VX6L/jb624H9+vuP7v+UG557I08nryTvQz4r/8Z3ut+VfrdyIPLAQIFRwfFCbGFC4ehBy4P1RYJFGUWTh9wPtRXLFucWvzm85fD1EoOSyiPEIylHxkvdSjuOKh4tPPqhLKpspNymvKVCsmJ/xdKx8GPDx62ON1dKVeZVvv8++vu7VY5VbdXK1SUnsCdSTzyt8a/p+4HxQ0OteG1e7ce6hLrxeu/63gbjhoZGycaCJrgppWn2ZMjJwVN2pzqaNZurWugteafB6ZTTz34M/XH0jOuZnrOMs80/Kf1U0UptzW2D2ra1zbdHtY93BHUMdbp09nSZdbX+rPVz3Tm5c+Xnhc8XXCBeyL6wcjHj4kI3p3vuEvvSZM+WngeXAy/f6fXqHbjieuXaVYerl/us+y5eM7927rrp9c4bjBvtN41utvUb9rf+YvhL64DRQNst41sdgyaDXUPrhy4MWw5fum13++od5zs3RzaMDI36jd4dCxkbvxt+d+Ze3L2X91PvLz/Y/RDzMPeRwKOSx5KPq39V+7Vl3Gj8/ITdRP8TnycPJlmTz39L+u3DVPZTytOSaZnphhm9mXOzDrODzzY+m3rOeb48l/O74O8VL1Rf/PSH1R/984HzUy+5L1de5b8We133xuBNz4LnwuPF+MXlpdy3Ym/r3zHe9b0PeD+9nPYB96H0o9rHrk+unx6uxK+scJhc5qoVQCELjowE4FUdAJQgxDsMIl5o45r/+svPQF84m78ZNFV95iCXNY+2GkYA1FkB4LcbADfEoxxHlhLCZCR78iyiFYD19f9Zf0VSpL7e2hlkLmJN3q6svJYCANcFwEfuysrysZWVjzXIsPcA6E78v7N9xWvekBdYxH+exvCoX3on+DrWfOMX9+TrDHgTG4Cv859BL8YUR/rntgAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAAAFqADAAQAAAABAAAAEwAAAABBU0NJSQAAAFNjcmVlbnNob3SNOxOvAAAB1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xOTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrI6awnAAAAMElEQVQ4EWN8Fxf/n4EGgIkGZoKNHDUYHrKjQTEaFPAQgDNGU8VoUMBDAM4YeqkCABdVAtCcSWeTAAAAAElFTkSuQmCC
" class="lazy" v-bind:data-src="serve.images.online_ordering_menu.main" style="height: 100%;position: absolute;top: 0px;left: 0px;width: 100% !important;filter: blur(4px);transform: scale(1.5);opacity: .9;"
/> -->


<div class="top-bar">
  <!-- {{item.name.replace('Feature - ', '')}} -->
    {{serve.name}}
  </div>
  <img v-if="serve.images.online_ordering_menu" :src="serve.images.online_ordering_menu.main" alt="" style="height: 329px;margin: 5px auto;position: absolute;z-index: 10;left: 50%;transform: translate(-50%, 0);top: 53px;">




<!-- <img v-if="serve.images.online_ordering_menu" src="data:image/png;base64,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AAABAAAAEwAAAABBU0NJSQAAAFNjcmVlbnNob3SNOxOvAAAB1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xOTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrI6awnAAAAMElEQVQ4EWN8Fxf/n4EGgIkGZoKNHDUYHrKjQTEaFPAQgDNGU8VoUMBDAM4YeqkCABdVAtCcSWeTAAAAAElFTkSuQmCC
" class="lazy" v-bind:data-src="serve.images.online_ordering_menu.main" style="height: 329px;margin: 5px auto;position: absolute;z-index: 10;left: 50%;transform: translate(-50%, 0);top: 53px;"> -->



<NadiIcon style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -57%);"  v-else />
 <div
                                v-if="serve.description"
                                class="food-description bottom-bar">
                                <span class="desc-desk">
                                {{serve.description}}
                                </span>

                                <span class="desc-mob">
                                {{serve.description | truncate(90, '...')}}
                                </span>
                                </div>
                    </div>
                </template>
        
                         
                        
                         </div>
                    </template>
         </div>
          </template>
                    <template class="subnext" slot="next">
            <span class="next">
              <Next />
            </span>
          </template>
            </carousel>
              <!-- </VueAspectRatio>   -->
</template>




</div>
  <div>
   <div>
      <div class="bottom-button" style="text-align: center;">
         <router-link to="/mamnoon">
                <OrderStar /> 
                </router-link>
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





import NadiIcon from "@/components/svgIcons/NadiIcon";

import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import VueAspectRatio from "vue-aspect-ratio";


export default {
  name: "coverflow",
  components: {
    OrderStar,
    PickupStar,
    DeliveryStar,
    Prev,
    Next,
    UpserveFeatured,
    VueAspectRatio,
    carousel,
    NadiIcon
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
      delivery: true,
            upserve: [],
      upserveSections: [],
      structureForCover: [],
      helpArray: []
    };
  },
  computed: {
    count() {
      return this.familyMeals;
    },
    upserveSectionsComputed(){
            let helpArray = []
              
for(let i; i < this.upserveSections.length; i++){
  if(this.upserveSections[i].name === 'Feature - Tuesday'|| this.upserveSections[i].name === 'Feature - Wednesday'|| this.upserveSections[i].name === 'Feature - Thursday'|| this.upserveSections[i].name === 'Feature - Friday'|| this.upserveSections[i].name === 'Feature - Saturday'){
    for(let j;j<this.upserveSections[i].item_ids.length;j++){
    for(let k;k<this.upserve.length;k++){
//serv
if(this.upserve[k].name === this.upserveSections[i].name){
helpArray.push({
  dayName: this.upserveSections[i].name,
  mealItem: this.upserve[k]
})
}
}
}
}
}
      return helpArray

    }
  },
  watch: {
       upserveSections(){
for(let i = 0; i < this.upserveSections.length; i++){ 
  // if(this.upserveSections[i].name === 'Feature - Tuesday' || this.upserveSections[i].name === 'Feature - Wednesday' || this.upserveSections[i].name === 'Feature - Thursday' || this.upserveSections[i].name === 'Feature - Friday' || this.upserveSections[i].name === 'Feature - Saturday'){

 if(this.upserveSections[i].name === 'Mezze - To Go'){

    for(let j = 0;j<this.upserveSections[i].item_ids.length;j++){
    for(let k = 0;k<this.upserve.length;k++){
  
    if(this.upserve[k].id === this.upserveSections[i].item_ids[j]){

      this.helpArray.push({
        dayName: this.upserveSections[i].name,
        mealItem: this.upserve[k]
    })
    }
    }
    }
  }
}
console.log(this.helpArray)
    },
    count(newCount, oldCount) {


    // console.log('newCount')
    // console.log(newCount)

    }
  },
  mounted() {
    this.dumpAcf()
    this.upserves();

    this.streetupserves();


  window.scrollTo(0, 0);
  window.addEventListener("scroll", this.lazyLoad);

  },
  props: ["data","header","tag","descriptionbody"],
  methods: {


  lazyLoad: function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    if (active === false) {
      active = true;
      setTimeout(() => {
        lazyImages.forEach(function (lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImages = lazyImages.filter(function (image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              window.removeEventListener("scroll", this.lazyLoad);
            }
          }
        });
        active = false;
      }, 200)

    }
  },

        async upserves() {
      let responseUpserve = await this.$http.get(
        "/product/upserveolo"
      );
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = this.upserve.concat(upserveProducts);
  this.upserveSections = responseUpserve.data.body.sections;
    },
        async streetupserves() {
      let responseUpserve = await this.$http.get(
        "/product/upserveolostreet"
      );
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = this.upserve.concat(upserveProducts);
 this.upserveSections = responseUpserve.data.body.sections;
    },
dumpAcf(){
  this.familyMeals = this.helpArray
},
    returnProducts(index) {
        this.title = this.familyMeals[index].mealItem.name;
        this.date = this.familyMeals[index].mealItem.name.replace('Feature - ', '');
        this.description = this.familyMeals[
          index
        ].mealItem.description;
   
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
  background: #fff367 !important;
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


.full-height-slide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


#cover-carousel{

  // height: 710px;

// height: 674px;
height: 704px;
.owl-carousel, .owl-item{
  // height: 500px;

      height: 550px;
}

.owl-item > div {
    width: 100%;
    height: 550px;
    pointer-events: none;
    
}

.owl-theme .owl-dots .owl-dot span{
      width: 20px;
    height: 20px;
    margin: 5px 7px;
    background: #ffffff;
    display: block;
    -webkit-backface-visibility: visible;
    transition: opacity 200ms ease;
    border-radius: 30px;
}

.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 0;
}



.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    background: orange;
}


// li:nth-child(-n+5) {
//     color: green;   
// }


.owl-stage{
    height: 500px;
    height: 506px;
        height: 516px;

}


.owl-dots .owl-dot {
display: none;
outline: none;
}



.owl-dots .owl-dot:nth-child(-n+7) {
display: inline;
}

}


#cover-carousel{
  .owl-carousel .owl-item img {
    display: block;
    width: auto !important;
}
}




.top-bar{

 position: absolute;
 top: 0;
 width: 500px;
 background: #fff367;
 color: #f05d5b;
 margin: 0 auto;
 padding: 10px;
 text-align: center;
 font-weight: 500;
}

.bottom-bar{
padding: 10px;
position: absolute;
bottom: 0;
width: 500px;
background: #fff367;
color: #f05d5b;
font-size: 14px;
height: 83px;
text-align: center;
}

.white-text{
  color: #ffffff;
}



.outside-slideshow{
 height: 512px;
 position: relative;
 width: 500px;
//  margin: 0 auto;
//  background: black;
background: #8c8c8c;
 overflow:hidden;
 height: 482px;
     margin: 10px auto 0;
}


  .desc-desk{
            display: block;
  }
          .desc-mob{
            display: none;
          }



@media only screen and (max-width: 640px) {


    .desc-desk{
            display: none;
  }
          .desc-mob{
            display: block;
          }

.outside-slideshow,
.bottom-bar,
.top-bar{


 width: 100%

}


}




.loading-box{
    width: 500px;
    color: #FFFFFF;
    height: 500px;
    background: #F05D5B;
    padding-top: 240px;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50px);
}




@media only screen and (max-width: 992px) {
.hide-mobile{
  display: none;
}
}


</style>