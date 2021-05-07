<template>
    <div class="menuBar">
   <div class="relative">
      <div class="inside">
   <scrollactive :offset="200" ref="scrollactive">   
 <template v-if="valid && !preOrderToggleState">

  <template v-for="item in upserveSections">
    <template v-if="noFiltering">
        <template v-if="item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,nowDate,nowTime) ||!item.timing_mask">
                      <a :href="'#'+item.name.replace('- To Go', '').replace('To Go', '').replace('@', '').trim()" class="scrollactive-item nav-item">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
        </template>
    </template>
  </template>

</template>
 <template v-if="!valid">

 
<template v-for="item in upserveSections">
  <template v-if="noFiltering">
      <a :href="'#'+item.name.replace('- To Go', '').replace('To Go', '').replace('@', '').trim()" class="scrollactive-item nav-item">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
  </template>
  <template v-else>
    <template v-if="item.name !== 'featured item' && item.timing_mask && currentlyAvailable(item.timing_mask.start_time,item.timing_mask.end_time,item.timing_mask.rules,selectedDate,selectedTime) ||!item.timing_mask">
      <a :href="'#'+item.name.replace('- To Go', '').replace('To Go', '').replace('@', '').trim()" class="scrollactive-item nav-item">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
    </template>
  </template>

</template>

</template>
<template v-if="preOrderToggleState">

    <template v-for="item in upserveSections">
 <template v-if="noFiltering && item.name !== 'featured item'">
  <template v-if="item.timing_mask === item.timing_mask">
      <a :href="'#'+item.name.replace('- To Go', '').replace('To Go', '').replace('@', '').trim()" class="scrollactive-item nav-item">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
  </template>
</template>
<template v-else>
  <template v-if="item.timing_mask === null">
     <a :href="'#'+item.name.replace('- To Go', '').replace('To Go', '').replace('@', '').trim()" class="scrollactive-item nav-item">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
  </template>
  <template v-else>
    <template v-if="currentlyAvailable(item.timing_mask.start_time, item.timing_mask.end_time, item.timing_mask.rules, selectedDate, selectedTime)">
         <a :href="'#'+item.name.replace('- To Go', '').replace('To Go', '').replace('@', '').trim()" class="scrollactive-item nav-item">{{item.name.replace('- To Go', '').replace('To Go', '').replace(' (some items change daily & may not be available if ordered in advance)','').trim()}}</a>
      </template>
  </template>

</template>
         </template>
            </template>


   </scrollactive>   
                   </div>
            </div>
        </div> 
</template>


<script>


export default {
    name: 'slidernav',
    props: ['valid','preOrderToggleState','upserveSections','noFiltering','nowDate','nowTime','futureDay','futureTime'],
    methods:{
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



position: sticky;
top: 132px;
width: 100%;
background: #ffffff;
color: #F05D5B;
z-index: 99;
overflow:hidden;
   @media only screen and (max-width: 992px) {
      // top: 0;
      top: 112px;
    }
 
 .relative{
   position: relative;
 }

.inside{




a.scrollactive-item.nav-item{
  color: #F05D5B;
  font-size: 14px;
    margin-right: 10px;
  border-bottom: 1px solid transparent;

    padding-bottom: 3px;
line-height: 30px;
  &:hover{
    text-decoration: none;
  }

transition: all .25s ease;
&.is-active{

      border-bottom: 1px solid #F05D5B;
    padding-bottom: 3px;
}

}
}

}





// .scrollactive-item.nav-item.is-active{
//   text-decoration: underline;
// }

.inside{
  border-bottom: 1px solid #ddd;
.scrollactive-nav{
  text-align: center;
  padding: 6px 0;
}
}

</style>