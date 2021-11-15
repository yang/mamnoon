


<template>


<div>

<video-bg :sources="[`${src}`]">
  <!-- If you want to add content here, a slot is waiting! -->



</video-bg>


           <div class="vidContBg"> </div>


                                <div class="vidCont"> 


                                <div class="vidContInterior"> 


                                <div class="container">

                                    <div class="row text-center">

                                    <div class="col-10 offset-1">
                                    <h1 class="subpage-header white-text mb60 text-left">
                                    welcome to nadi mama: the online home for the mama family of restaurants</h1>
                                    </div></div>

                                    <div class="row text-center">
                                    <div class="col-3">
    <MbarLogo :fill="'white'" /></div>
    <div class="col-3"><AnarLogo :fill="'white'" /></div>
  <div class="col-3">  <StreetLogo :fill="'white'" /></div>
   <div class="col-3"> <MamnoonLogo :fill="'white'" /></div>
                                    </div>
                                </div>

<div @click="scrollDown">
                                <DownArrow />
                                </div>
                                </div>
                                </div>


</div>
</template>


<script>


import MbarLogo from "@/components/svgIcons/MbarLogo"
import AnarLogo from "@/components/svgIcons/AnarLogo"
import StreetLogo from "@/components/svgIcons/StreetLogo"
import MamnoonLogo from "@/components/svgIcons/MamnoonLogo"


import DownArrow from "@/components/svgIcons/DownArrow"

export default{
    name: 'VideoComponent2',
    components:{
        MbarLogo,
        AnarLogo,
        StreetLogo,
        MamnoonLogo,
        DownArrow
    },
props:['src', 'logo'],
methods:{
    scrollDown(){

window.scrollTo(0, this.$el.clientHeight);
// console.log(pageHeight);
    }
}

}
</script>


<style lang="scss">
.logoVideo{

    position: absolute;
    top: 50%;
    z-index: 98;
    left: 50%;
    transform: translateX(-50%);
}



.restaurantLogo2{


width: 300px;
    margin: 0 auto;
    text-align: center;
    height: 100%;

    width: 100%;

svg{

      width: 500px;
      width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}


}


.vidContBg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   background-color: #290000;
//   mix-blend-mode: difference;
        opacity: .8;
}



.vidCont{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}

.vidContInterior{
   


    position: relative;
    height: 100%;
    // background: green;


.container{
position: ABSOLUTE;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

}


</style>