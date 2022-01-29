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
   <scrollactive :offset="200" ref="scrollactive" v-on:itemchanged="onItemChanged">   
          <swiper id="swiperMenu" ref="mySwiperRef" class="swiper" :options="swiperOption">
 <template v-if="valid && !preOrderToggleState">

  <template v-for="(item, index) in upserveSections">
    <template v-if="noFiltering && item.name !== 'featured item'">
        <template v-if="item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,nowDate,nowTime) ||!item.timing_mask">
                  
                  <swiper-slide :id="item.id">
                       <a :index="index" :indexId="item.id" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}

                      </a>
          </swiper-slide>
        </template>
    </template>
  </template>

</template>
 <template v-if="!valid">

 
  <template v-for="(item, index) in upserveSections">
  <template v-if="noFiltering && item.name !== 'featured item'">
      <swiper-slide :id="item.id">
      <a :index="index" :indexId="item.id" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item">
     {{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}


     </a>
     </swiper-slide>
  </template>
  <template v-else>
    <template v-if="item.name !== 'featured item' && item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,selectedDate,selectedTime) ||!item.timing_mask">
   <swiper-slide :id="item.id">
      <a :index="index" :indexId="item.id" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item">
    {{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}



    </a>
       </swiper-slide>
    </template>
  </template>

</template>

</template>
<template v-if="preOrderToggleState">

  <template v-for="(item, index) in upserveSections">
 <template v-if="noFiltering && item.name !== 'featured item'">
  <template v-if="item.timing_mask === item.timing_mask">
        <swiper-slide :id="item.id">
      <a :index="index" :indexId="item.id" :id="item.id"  :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item">
     {{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}

     </a>
     </swiper-slide>
  </template>
</template>
<template v-else>
  <template v-if="item.name !== 'featured item'">
  <template v-if="item.timing_mask === null">
         <swiper-slide :id="item.id">
      <a :index="index" :indexId="item.id" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item">
    {{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}

     </a>
    </swiper-slide>
  </template>
  <template v-else>
    <template v-if="currentlyAvailable(item.timing_mask.start_time, item.timing_mask.end_time, item.timing_mask.rules, selectedDate, selectedTime)">
        <swiper-slide :id="item.id">
        <a :index="index" :indexId="item.id" :href="'#'+item.name.replace(/[^0-9a-zA-Z]/g, '').trim()" class="scrollactive-item nav-item">
       {{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}
      
       </a>
      </swiper-slide>
      </template>
  </template>
</template>
</template>
         </template>
            </template>


   </swiper>
   </scrollactive>   
                   </div>
            </div>
        </div> 
</template>


<script>
import moment from 'moment'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/swiper.min.css'
// import  MoreInfo from "@/components/MoreInfo";
export default {
      components: {
      Swiper,
      SwiperSlide,
      // MoreInfo
    },
    data(){
return{
          swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
}
    },
    name: 'slidernav',
    props: ['valid','preOrderToggleState','upserveSections','noFiltering','nowDate','nowTime','futureDay','futureTimes','selectedDate','selectedTime'],
    methods:{
  onItemChanged(event, currentItem, lastActiveItem) {
    if(currentItem){


// slide to the index of the id where it matches with the current item id
let indexId = currentItem.getAttribute('indexId')
let child = document.getElementById(indexId);
let parent = child.parentNode;

      this.$refs.mySwiperRef.$swiper.slideTo(Array.prototype.indexOf.call(parent.children, child), 300);
    }
  },
            left(){
        this.$refs.mySwiperRef.$swiper.slidePrev()
      },
      right(){
      this.$refs.mySwiperRef.$swiper.slideNext()
      },
        currentlyAvailable(startTime,endTime,rules,futureDay,futureTime){




    let weekday = ['mon','tue','wed','thu','fri','sat','sun']

            if(!futureDay && !futureTime){
                let currentDate = new Date();   
                let startDate = new Date(currentDate.getTime());

                startDate.setHours(startTime.split(":")[0]);
                startDate.setMinutes(startTime.split(":")[1]);

                let endDate = new Date(currentDate.getTime());
                endDate.setHours(endTime.split(":")[0]);
                endDate.setMinutes(endTime.split(":")[1]);

                if(rules.includes(weekday[currentDate.getDay()])){
                    return startDate < currentDate && endDate > currentDate
                }
            }

    if(futureDay && !futureTime){
      if(rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())){
        return true
      }
    }
    if(futureDay && futureTime){

    let currentDate = Date.parse(futureTime.time) 
    let startDate2 = new Date(currentDate);
    let startDate3 = moment(startDate2)._i
    startDate3.setHours(startTime.split(":")[0]);
    startDate3.setMinutes(startTime.split(":")[1]);
    let endDate2 = new Date(currentDate);
    let endDate3 = moment(endDate2)._i
    endDate3.setHours(endTime.split(":")[0]);
    endDate3.setMinutes(endTime.split(":")[1]);
    let validTime = startDate3 < currentDate && endDate3 > currentDate
    let validDay = rules.includes(futureDay.dayLabel.substring(0,3).toLowerCase())

    if(validTime && validDay){
      return true
    }else{
      return false
    }
}


}
    }
}
</script>



<style lang="scss">
.menuBar{



// position: sticky;
top: 132px;
width: 100%;
background: #ffffff;
color: #F05D5B;
z-index: 99;
overflow:hidden;

    // margin-left: -15px;
    /* margin-right: -15px; */
    // width: calc(100% + 30px);

   @media only screen and (max-width: 992px) {
      // top: 0;
      top: 112px;
    }
 
 .relative{
   position: relative;
 }

.inside{

    width: calc(100% - 40px);
    // background: green;
    float: right;


a.scrollactive-item.nav-item{
  color: #F05D5B;
  font-size: 14px;
    margin-right: 10px;
  // border-bottom: 1px solid transparent;

    padding-bottom: 3px;
line-height: 30px;
  &:hover{
    text-decoration: none;
  }

transition: all .25s ease;
   text-transform: lowercase;
&.is-active{
    // font-weight: 700;
    border-bottom: 2px solid #F05D5B;

}

}
}

}

// .swiper-slide-active{
//   background: #F05D5B;

//      margin-left: 0px;
//      margin-right: 10px;
//      a{
//        margin-right: 0;
//      }

//    a.scrollactive-item.nav-item{
//      margin-left: 10px;
//      margin-right: 10px;
//        color: white !important;
//    }
// }



// .scrollactive-item.nav-item.is-active{
//   text-decoration: underline;
// }

.inside{
  // border-bottom: 1px solid #ddd;
.scrollactive-nav{
  text-align: center;
  padding: 6px 0;
}
}


.menuBar .relative .inside{
  .swiper-slide{
    width: auto !important;
  }

  .scrollactive-nav{
        width: calc( 100% - 60px);
  }


.inside-left{
  cursor: pointer;
  position: absolute;
  left: 0;
  width: 30px;
  left: 40px;
}
.inside-right{
    cursor: pointer;
position: absolute;
right: 0;
width: 30px;
// background:pink;


.icono-arrow4-left{
    margin-left: 5px;

}

}

}






#swiperMenu{

.swiper-wrapper{
  padding-left: 0px;
}



}


#swiperMenu.morePadding{

.swiper-wrapper{
  padding-left: 20px;
}



}





.moreInfo{


    background: white;
    position: absolute;
    left: 0;
    height: 40px;
    width: 40px;
    text-align: center;


}


#swiperMenu{


.swiper-slide.swiper-slide-active:first-child{
  margin-left: 0 !important
}

}


.swiper-slide{
      margin: 0 5px;
}


</style>