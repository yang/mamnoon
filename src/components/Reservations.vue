<template>
  <section id="reservations" class="section hero is-primary is-fullheight position-relative mb-80">
        <h4>reservations</h4>
<p class="description-para noselect">order now Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque.</p>
<div class="width-container">
<div v-for="item in data" :key="item.restaurant_title">
  <Mbar v-if="item.restaurant_title === 'mbar'" />
  <Mamnoon v-else-if="item.restaurant_title === 'mamnoon'" />
</div>


  
</div>
</section>
</template>

<script>



import carousel from "vue-owl-carousel";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";



import Mbar from "@/components/svgIcons/Mbar";
import Mamnoon from "@/components/svgIcons/Mamnoon";


export default {
    components:{
        carousel,
        Next,
        Prev,
        Mbar,
        Mamnoon
    },
    name: 'reservations',
    props: ['data']
}
</script>



<style lang="scss">

#reservations .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f1765b;
  }
  &:nth-child(even) {
    background: #f58e58;
  }
}

.quote-container {
  // position: relative;
  // height: 100%;
  // width: 100%;
  // padding-bottom: 80px;
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  // padding-bottom: 80px;
  text-align: center;

}


#reservations .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f1765b;
  }
  &:nth-child(even) {
    background: #f58e58;
  }
}


#reservations .owl-stage .owl-item:nth-child(odd) {
    background: #f1765b !important;
  }


#reservations .owl-stage .owl-item:nth-child(even) {
    background: #f58e58 !important;
  }

.owl-stage {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.owl-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto !important;
}
#reservations .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#reservations .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#reservations .owl-item > div > div {
  text-align: left;
}
.xs {
  // font-size: 16px;
  font-size: 18px;
}
.sm {
  // font-size: 22px;
  font-size: 18px;
}
.md {
  // font-size: 18px;
  // font-size: 38px;


font-size: 18px;

}
.lg {
  font-size: 64px;
}

.height-100{
  height: 100px;
}


#reservations .quote-container .md{
  position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100%;
    font-size: 20px;
}




#reservations .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f1765b;
  }
  &:nth-child(even) {
    background: #f58e58;
  }
}
.owl-stage {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.owl-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto !important;
}
#reservations .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#reservations .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#reservations .owl-item > div > div {
  text-align: left;
}
.xs {
  // font-size: 16px;
  font-size: 18px;
}
.sm {
  // font-size: 22px;
  font-size: 18px;
}
.md {
  // font-size: 18px;
  // font-size: 38px;


font-size: 18px;

}
.lg {
  font-size: 64px;
}



#reservations{
  .owl-carousel {
    margin-top: -10px;
  }
}


#reservations{
  .quote-container {
    // height: 200px;
        min-height: 60px;
    position: relative;

    .md, .xs{
      position: absolute;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      left: 50%;
      width: 100%;
      font-size: 20px;
    }
}

}

</style>

