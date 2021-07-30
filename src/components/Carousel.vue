<template>
<div>
  <main>
    <!-- <div class=""> -->
      <!-- <div class="container"> -->
      <!-- <h2 class="intro-paragraph-header">Welcome!</h2> -->
      <!-- <p class="intro-paragraph">Nadi Mama is a one stop shop for all things The Mama Group has to offer. Order food, purchase retail items, make a reservation or simply stay up to date with our offerings.</p> -->
    <!-- </div> -->
    <!-- </div> -->
<div style="display:none;position: fixed;top:100px;z-index:10000;width: 100%;background: pink;">
{{visibility}}
</div>
  <div v-for="item in pageData" :key="item.acf_fc_layout">
  <template v-if="!isMobile()">
    <TestimonialsMain :visible="visibility.testimonials" v-if="item.acf_fc_layout === 'testimonials'" :showHide="item.showhide" :header="item.header" :description="item.description" :data="item.testimonials" :tag="item.tagname" />
    <CoverFlowCarousel :visible="visibility.planahead" v-if="item.acf_fc_layout === 'meal_calendar'" :header="item.header" :feature="item.feature" :descriptionbody="item.description" :data="item.meal_calendar" :tag="item.tagname" />
    <Reservations :visible="visibility.reservations" v-if="item.acf_fc_layout === 'reservations'" :header="item.header" :description="item.description" :data="item.reservations" :tag="item.tagname" />
  
  

<div class="container home-page" v-if="item.acf_fc_layout === 'a_la_carte'" style="display:none;">
<div class="row">
  <div class="col-md-12">

      <section id="temporary-grid" class="section hero is-primary is-fullheight position-relative mb-80">
<h4 data-v-5a4395df="" class="" style="margin-bottom:24px;">our restaurants</h4>
<p></p>


<div class="width-container">
  
  
  
  
  <div id="mamnoon-reserve" class="halfwidth-yellow1 wider temporary-grid">
  
  
  
  
  






  
  
  
<div style="width: 100%;margin:10px;">




<!-- <Plus /> -->

<!-- <Minus /> -->
  <div class="halfwidthclass smalled" style="height: 100px;position: relative;">
<svg class="fifty50" style="position: absolute; top: 50%; height: 40px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.96 18.05"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M93.38,7.52V7.46h0A7.38,7.38,0,0,0,81.83,1.65v0a2.19,2.19,0,0,0-4.29.49l1.08,1.24,0,4.13,0,9.74,1,.84a2.15,2.15,0,0,0,2.17-2V7.46A4.17,4.17,0,0,1,86,3.51a4.1,4.1,0,0,1,4.23,4.05V17.2l1,.84a2.15,2.15,0,0,0,2.16-2V7.73s0-.07,0-.1V7.52" class="cls-156"></path><path d="M146,7.52V7.46h0a7.39,7.39,0,0,0-11.55-5.81v0a2.19,2.19,0,0,0-4.29.49l1.09,1.24V7.46l0,9.74,1,.84a2.15,2.15,0,0,0,2.17-2V7.58a.49.49,0,0,1,0-.12,4.15,4.15,0,0,1,4.14-3.95,4.09,4.09,0,0,1,4.23,4.05V17.2l1,.84a2.15,2.15,0,0,0,2.16-2V7.73a.34.34,0,0,0,0-.1V7.52" class="cls-156"></path><path d="M45.83,18H37.65a9.18,9.18,0,0,1-6.86-3.83,8.28,8.28,0,0,1-1.59-5,8.87,8.87,0,0,1,9-8.79,9.76,9.76,0,0,1,5.16,1.51A2.59,2.59,0,0,1,45.67.37,2.56,2.56,0,0,1,48.3,2.91L47,4.26v9.65l1.26,1.56A2.56,2.56,0,0,1,45.83,18M43.92,7.23c-1.39-2.18-2.92-3.8-5.77-3.8A5.76,5.76,0,1,0,38.09,15h5.83Z" class="cls-156"></path><path d="M111.71,8.63a8.26,8.26,0,0,0-2.42-4.89,9,9,0,0,0-1.29-1,8.2,8.2,0,0,0-2.16-1A2.43,2.43,0,0,0,103.25,0l-1.31,1.33a8.43,8.43,0,0,0-5.55,3.18,8.13,8.13,0,0,0-1.76,5.08,8.64,8.64,0,0,0,.16,1.62,8.55,8.55,0,0,0,.8,2.26,8.45,8.45,0,0,0,2.5,2.88,8.19,8.19,0,0,0,2,1.09l.19.07.4.13a8.53,8.53,0,0,0,8.55-2.06,8.32,8.32,0,0,0,2.46-7m-14,1a5.5,5.5,0,1,1,5.5,5.41,5.45,5.45,0,0,1-5.5-5.41" class="cls-156"></path><path d="M129.93,8.63a8.26,8.26,0,0,0-2.42-4.89,8.45,8.45,0,0,0-1.29-1,8.2,8.2,0,0,0-2.16-1A2.43,2.43,0,0,0,121.47,0l-1.31,1.33a8.46,8.46,0,0,0-5.55,3.18,8.19,8.19,0,0,0-1.76,5.08,7.88,7.88,0,0,0,.17,1.62,8.19,8.19,0,0,0,.79,2.26,8.56,8.56,0,0,0,2.5,2.88,8.19,8.19,0,0,0,2,1.09l.19.07.4.13a8.53,8.53,0,0,0,8.55-2.06,8.32,8.32,0,0,0,2.46-7m-14,1a5.5,5.5,0,1,1,5.5,5.41,5.45,5.45,0,0,1-5.5-5.41" class="cls-156"></path><path d="M77,7.49v0h0C76.89,3.52,73.63.58,69.59.36a7.63,7.63,0,0,0-4.16,1.22,7.5,7.5,0,0,0-1.64,1.49A7.45,7.45,0,0,0,58,.36a7.32,7.32,0,0,0-4.15,1.29v0a2.18,2.18,0,0,0-4.28.49l1.08,1.24,0,13.87,1,.84a2.15,2.15,0,0,0,2.16-2V7.59A4.16,4.16,0,0,1,58,3.51a4.1,4.1,0,0,1,4.24,4.05s0,9.64,0,9.64l1,.84a2.15,2.15,0,0,0,2.17-2V7.59a4.17,4.17,0,0,1,8.34-.1l0,9.71,1,.84a2.15,2.15,0,0,0,2.17-2V7.49Z" class="cls-156"></path><path d="M27.41,7.49v0h0C27.32,3.52,24.06.58,20,.36a7.63,7.63,0,0,0-4.16,1.22,7.5,7.5,0,0,0-1.64,1.49A7.43,7.43,0,0,0,8.44.36,7.28,7.28,0,0,0,4.29,1.65v0a2.25,2.25,0,0,0-.62-1A2.17,2.17,0,0,0,2.17,0,2.14,2.14,0,0,0,0,2.09L1.08,3.33l0,13.87,1,.84a2.16,2.16,0,0,0,2.17-2V7.59A4.16,4.16,0,0,1,8.44,3.51a4.1,4.1,0,0,1,4.23,4.05s0,9.64,0,9.64l1,.84a2.15,2.15,0,0,0,2.16-2V7.59A4.16,4.16,0,0,1,20,3.51a4.12,4.12,0,0,1,4.19,4l0,9.71,1,.84a2.15,2.15,0,0,0,2.16-2V7.49Z" class="cls-156"></path></g></g></svg>
</div>

</div>

<div style="width: 100%;margin:15px 10px;">

<MapPin style="position: initial;margin-right: 10px;" class="mr6" />

1508 Melrose Ave, Seattle, WA 98122
</div>



<div style="width: 100%;margin:15px 10px;    margin-right: 6px;">

<Clock style="position: initial;margin-right: 10px;" class="mr6" /> <span v-if="valid">open</span><span v-else>closed</span>


</div>

<div style="width: 100%;margin:15px 10px;">
<Phone class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
1508 Melrose Ave, Seattle, WA 98122
  </div>
  <div style="width: 100%;margin:15px 10px 25px 10px;">
<Envelope class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
info@mamnoonrestaurant.com
  </div>

    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
  order online
</button>
      </div>
  
    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button @click="openSevenRooms('reservemamnoonbutton')">
  make a reservation
</button>
      </div>

      <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
view menus
</button>
      </div>
  
  
  
  
  
  
  </div>









    <div id="mamnoon-reserve" class="halfwidth-yellow1 wider temporary-grid">
  
  
  
  
  






  
  
  
<div style="width: 100%;margin:10px;">




<!-- <Plus /> -->

<!-- <Minus /> -->
  <div class="halfwidthclass smalled" style="height: 100px;position: relative;">
<svg class="fifty50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 324.07 113.99" xml:space="preserve" style="position: absolute; top: 50%; height: 80px;"><g><g class="st0"><path d="M328.75,157.62c0-0.01,0-0.01,0-0.02v-0.01c-0.11-5.12-4.27-8.92-9.42-9.21c-2.1-0.12-4.26,0.89-5.3,1.58
			c-0.79,0.54-1.5,1.19-2.09,1.93c-1.72-2.14-4.37-3.51-7.35-3.51c-1.9,0-3.74,0.57-5.29,1.67v-0.06c-0.35-1.26-1.38-2.07-2.7-2.07
			c-1.49,0-2.76,1.21-2.76,2.7l1.38,1.61l0.06,17.99l1.26,1.09c1.38,0,2.76-1.15,2.76-2.59v-10.98c0-2.87,2.41-5.29,5.29-5.29
			c2.99,0,5.39,2.27,5.39,5.26c0,0.04,0.04,12.5,0.04,12.5l1.27,1.09c1.38,0,2.76-1.15,2.76-2.59v-3.02v-7.96
			c0-2.87,2.41-5.29,5.29-5.29c2.93,0,5.24,2.26,5.33,5.16l0.05,12.6l1.26,1.09c1.38,0,2.76-1.15,2.76-2.59
			C328.74,168.73,328.74,157.63,328.75,157.62L328.75,157.62z" class="st1"></path></g></g><polygon points="373.67,40.27 373.67,166.4 408.35,102.91 " class="st2"></polygon><g><g><path d="M235.38,89.29v-6.57c-0.49,0.41-1,0.8-1.52,1.18v5.39H235.38z" class="st3"></path></g><g><path d="M269.8,58.34l0,30.92h1.52l0-30.91c0.02-7.12,5.94-12.92,13.19-12.92c3.99,0,7.56,1.75,9.98,4.5l1.03-1.11
			c-2.69-2.99-6.63-4.88-11.01-4.88C276.42,43.94,269.82,50.4,269.8,58.34z" class="st3"></path></g><g><path d="M131.39,89.3h1.52v-8.18c-0.53-0.52-1.03-1.07-1.52-1.63V89.3z" class="st3"></path></g><g><path d="M240.42,89.29h1.52V74.75c-0.46,0.85-0.97,1.67-1.52,2.46V89.29z" class="st3"></path></g><g><path d="M263.21,58.32l0,30.95h1.52l0-30.94c0-10.71,8.87-19.42,19.77-19.42c5.71,0,10.85,2.39,14.46,6.2l1.02-1.1
			c-3.88-4.05-9.39-6.59-15.49-6.59C272.76,37.41,263.21,46.79,263.21,58.32z" class="st3"></path></g><g><path d="M87.4,37.4c-6.88,0-13,3.22-16.9,8.21c0.29,0.46,0.57,0.93,0.83,1.41c3.59-4.91,9.45-8.13,16.07-8.13
			c10.9,0,19.77,8.71,19.77,19.42v30.98h1.52V58.31C108.69,46.78,99.14,37.4,87.4,37.4z" class="st3"></path></g><g><path d="M49.66,40.71c-9.9,0-17.98,7.91-18.01,17.63v30.95h1.52V58.34c0.02-8.9,7.42-16.14,16.49-16.14
			c9.08,0,16.46,7.24,16.46,16.14v30.95h1.52V58.34C67.64,48.62,59.57,40.71,49.66,40.71z" class="st3"></path></g><g><path d="M128.11,89.3h1.52V77.22c-0.55-0.79-1.06-1.61-1.52-2.46V89.3z" class="st3"></path></g><g><path d="M152.8,34.26c-6.23,0-11.99,2.01-16.65,5.4V8.58h-1.52c0,0-0.01,53.09-0.01,53.2
			c0,9.84,8.15,17.85,18.18,17.85c10.02,0,18.18-8.01,18.18-17.85s-8.15-17.85-18.18-17.85c-7.44,0-13.84,4.41-16.65,10.71v-3.6
			c3.57-5.32,9.7-8.83,16.65-8.83c10.99,0,19.94,8.78,19.94,19.58s-8.94,19.58-19.94,19.58c-10.99,0-19.94-8.78-19.94-19.58
			c0-0.06,0.01-53.2,0.01-53.2h-1.52c0,0-0.01,53.11-0.01,53.2c0,11.62,9.62,21.07,21.45,21.07c11.83,0,21.45-9.45,21.45-21.07
			c0-11.62-9.62-21.07-21.45-21.07c-6.71,0-12.72,3.05-16.65,7.81v-2.6c4.22-4.27,10.13-6.94,16.65-6.94
			c12.8,0,23.22,10.23,23.22,22.8c0,12.57-10.42,22.8-23.22,22.8s-23.22-10.23-23.22-22.8c0-0.06,0.01-53.2,0.01-53.2h-1.52
			c0,0-0.01,53.13-0.01,53.2c0,13.4,11.1,24.29,24.74,24.29c13.64,0,24.74-10.9,24.74-24.29s-11.1-24.29-24.74-24.29
			c-6.41,0-12.25,2.41-16.65,6.35v-2.27c4.55-3.62,10.35-5.8,16.65-5.8c14.61,0,26.5,11.67,26.5,26.02S167.41,87.8,152.8,87.8
			c-14.52,0-26.34-11.53-26.49-25.75l0.01-53.47h-1.52l-0.01,53.47V89.3h1.52V70.72c1.84,5.25,5.34,9.9,9.88,13.19
			c4.65,3.38,10.4,5.38,16.61,5.38c15.45,0,28.01-12.34,28.01-27.51C180.81,46.61,168.24,34.26,152.8,34.26z M152.8,45.42
			c9.19,0,16.66,7.34,16.66,16.36c0,9.02-7.47,16.36-16.66,16.36c-9.19,0-16.66-7.34-16.66-16.36c0-0.06,0-0.19,0-0.19
			C136.25,52.65,143.68,45.42,152.8,45.42z" class="st3"></path></g><g><path d="M284.5,34.25c-6.41,0-12.25,2.42-16.63,6.38c-0.9-0.42-1.91-0.65-2.97-0.65c-3.89,0-7.05,3.11-7.05,6.93
			c0,2.26,1.12,4.27,2.83,5.53c-0.49,1.9-0.75,3.88-0.75,5.93l0,30.89h1.52l0-30.88c0-1.77,0.22-3.49,0.61-5.15
			c0.12-0.49,0.25-0.98,0.39-1.46c-0.48-0.23-0.92-0.54-1.3-0.89c-1.09-0.99-1.78-2.41-1.78-3.98c0-3,2.48-5.44,5.54-5.44
			c0.63,0,1.23,0.11,1.79,0.3c0.51,0.17,0.98,0.41,1.4,0.72c0.36-0.36,0.73-0.7,1.12-1.04c4.07-3.55,9.42-5.71,15.28-5.71
			c6.52,0,12.41,2.72,16.58,7.07l1.02-1.1C297.67,37.12,291.42,34.25,284.5,34.25z" class="st3"></path></g><g><path d="M87.4,34.24c-7.57,0-14.36,3.39-18.87,8.69c0.33,0.39,0.65,0.79,0.96,1.21c4.23-5.13,10.69-8.41,17.91-8.41
			c12.71,0,23.05,10.16,23.05,22.64v30.91h1.52V58.37C111.97,45.07,100.95,34.24,87.4,34.24z" class="st3"></path></g><g><path d="M49.65,37.4c-11.74,0-21.29,9.38-21.29,20.91v30.98h1.52V58.31c0-10.71,8.87-19.42,19.77-19.42
			c10.9,0,19.77,8.71,19.77,19.42v30.98h1.52V58.31C70.94,46.78,61.39,37.4,49.65,37.4z" class="st3"></path></g><g><path d="M243.74,34.23c0,0,0.01,27.72,0.01,27.81c-0.15,14.22-11.97,25.75-26.49,25.75
			c-14.61,0-26.5-11.67-26.5-26.02c0-14.35,11.89-26.02,26.5-26.02c6.3,0,12.1,2.18,16.65,5.8v2.27c-4.4-3.94-10.24-6.35-16.65-6.35
			c-13.64,0-24.74,10.9-24.74,24.29c0,13.4,11.1,24.29,24.74,24.29c13.64,0,24.74-10.9,24.74-24.29c0-0.07-0.01-27.54-0.01-27.54
			h-1.52c0,0,0,27.48,0,27.54c0,12.57-10.42,22.8-23.22,22.8s-23.22-10.23-23.22-22.8c0-12.57,10.42-22.8,23.22-22.8
			c6.53,0,12.43,2.66,16.65,6.94v2.6c-3.94-4.76-9.94-7.81-16.65-7.81c-11.83,0-21.45,9.45-21.45,21.07s9.62,21.07,21.45,21.07
			c11.83,0,21.45-9.45,21.45-21.07c0-0.09-0.01-27.54-0.01-27.54h-1.52c0,0,0.01,27.48,0.01,27.54c0,10.8-8.94,19.58-19.94,19.58
			s-19.94-8.78-19.94-19.58c0-10.8,8.94-19.58,19.94-19.58c6.95,0,13.08,3.52,16.65,8.83v3.6c-2.81-6.3-9.22-10.71-16.65-10.71
			c-10.02,0-18.18,8.01-18.18,17.85c0,9.84,8.15,17.85,18.18,17.85c10.02,0,18.18-8.01,18.18-17.85c0-0.1-0.01-27.54-0.01-27.54
			h-1.52v5.43c-4.66-3.39-10.42-5.4-16.65-5.4c-15.45,0-28.01,12.34-28.01,27.51c0,15.17,12.57,27.51,28.01,27.51
			c6.22,0,11.96-2,16.61-5.38c1.56-1.13,2.98-2.43,4.27-3.85c-0.33,0.36-0.65,0.72-0.99,1.07v8.18h1.52v-9.81
			c-0.05,0.06-0.11,0.11-0.16,0.17c1.32-1.51,2.48-3.15,3.44-4.9c0.71-1.29,1.31-2.64,1.8-4.04v18.58h1.52V62.04l-0.01-27.81H243.74
			z M233.91,61.59c0,0.06,0,0.11,0,0.17c0,9.02-7.47,16.36-16.66,16.36s-16.66-7.34-16.66-16.36s7.47-16.36,16.66-16.36
			c9.12,0,16.55,7.24,16.65,16.17C233.91,61.58,233.91,61.59,233.91,61.59z" class="st3"></path></g><g><path d="M134.67,89.3h1.52v-5.39c-0.52-0.38-1.03-0.77-1.52-1.18V89.3z" class="st3"></path></g><g><path d="M266.51,58.35l0,30.92h1.52l0-30.91c0.02-8.9,7.42-16.14,16.49-16.14c4.84,0,9.19,2.06,12.2,5.32l1.03-1.11
			c-3.29-3.5-8-5.71-13.23-5.71C274.61,40.71,266.53,48.62,266.51,58.35z" class="st3"></path></g><g><path d="M87.41,40.71c-6.36,0-11.96,3.27-15.17,8.18c0.01,0.03,0.02,0.06,0.03,0.09
			c-3.74-8.65-12.47-14.74-22.63-14.74c-6.45,0-12.32,2.46-16.71,6.46c-0.91-0.42-1.92-0.66-2.98-0.66c-3.89,0-7.05,3.11-7.05,6.93
			c0,2.3,1.15,4.33,2.9,5.59c-0.47,1.87-0.73,3.82-0.73,5.82v30.91h1.52V66.55v-8.18c0-0.42,0.01-0.84,0.04-1.25
			c0.05-0.87,0.15-1.74,0.3-2.6c0.07-0.41,0.15-0.81,0.25-1.2l0,0v0c0.11-0.49,0.24-0.97,0.39-1.45l0,0
			c-0.46-0.22-0.89-0.5-1.27-0.83c-0.01-0.01-0.03-0.02-0.04-0.04c-1.12-1-1.84-2.43-1.84-4.04c0-3,2.48-5.44,5.54-5.44
			c0.64,0,1.24,0.11,1.81,0.31c0,0,0.01,0,0.01,0c0.01,0,0.02,0.01,0.03,0.01c0.49,0.17,0.94,0.41,1.36,0.71l1.11-1.05
			c4.08-3.59,9.47-5.79,15.37-5.79c12.71,0,23.05,10.16,23.05,22.64v30.91h1.52V58.36c0-1.58-0.18-3.12-0.48-4.62
			c0.3,1.49,0.47,3.02,0.48,4.59c0-0.01,0-0.02,0-0.03c0.04-7.1,5.95-12.87,13.19-12.87c7.26,0,13.17,5.79,13.17,12.92v30.95h1.52
			V58.34c0-7.94-6.59-14.41-14.69-14.41c-6.27,0-11.64,3.88-13.75,9.32c0.01,0.05,0.02,0.11,0.03,0.16c-0.33-1.53-0.79-3-1.4-4.41
			c0.23,0.54,0.45,1.1,0.64,1.66c2.8-5.03,8.24-8.46,14.48-8.46c9.08,0,16.46,7.24,16.46,16.14v30.95h1.52V58.34
			C105.39,48.62,97.33,40.71,87.41,40.71z M25.99,52.68c-0.03-0.02-0.05-0.04-0.13-0.09C25.85,52.58,25.93,52.64,25.99,52.68z" class="st3"></path></g><g><path d="M49.66,43.93c-8.09,0-14.69,6.46-14.71,14.41v30.95h1.52V58.34c0.02-7.12,5.94-12.92,13.19-12.92
			c7.26,0,13.17,5.79,13.17,12.92v30.95h1.52V58.34C64.35,50.39,57.76,43.93,49.66,43.93z" class="st3"></path></g></g></svg>
</div>

</div>

<div style="width: 100%;margin:15px 10px;">

<MapPin style="position: initial;margin-right: 10px;" class="mr6" />

1508 Melrose Ave, Seattle, WA 98122
</div>



<div style="width: 100%;margin:15px 10px;    margin-right: 6px;">

<Clock style="position: initial;margin-right: 10px;" class="mr6" /> <span>mamnoon, tue-sat, 11:30-2:30pm, 4:00-9:00pm
dinner menu begins at 5:00pm</span>


</div>

<div style="width: 100%;margin:15px 10px;">
<Phone class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
(206) 906-9606
  </div>
  <div style="width: 100%;margin:15px 10px 25px 10px;">
<Envelope class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
info@mamnoonrestaurant.com
  </div>

    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
  order online
</button>
      </div>
  
    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button @click="openSevenRooms('reservembarbutton')">

  
  make a reservation
</button>
      </div>

      <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
view menus
</button>
      </div>
  
  
  
  
  
  
  </div>












    <div id="mamnoon-reserve" class="halfwidth-yellow1 wider temporary-grid">
  
  
  
  
  






  
  
  
<div style="width: 100%;margin:10px;">




<!-- <Plus /> -->

<!-- <Minus /> -->
  <div class="halfwidthclass smalled" style="height: 100px;position: relative;">
<svg class="fifty50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="282.6px" height="57.6px" viewBox="0 0 282.6 57.6" xml:space="preserve" style="overflow: visible;"><defs></defs><g id="Layer_2_2_"><g id="Layer_1-2_1_"><path d="M167.8,13.7L167.8,13.7L167.8,13.7c-0.1-7.3-6-13-13.2-13c-2.7,0-5.2,0.8-7.4,2.3V3c-0.4-1.7-2-2.9-3.8-2.9
			c-2.1,0-3.8,1.7-3.9,3.8l2,2.3l0,7.5l0.1,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6l0-15.4l0-0.2c0.2-4,3.4-7.1,7.4-7.2
			c4.1-0.1,7.5,3.1,7.6,7.2c0,0.1,0,0.1,0,0.2l0,17.5l1.8,1.5c2,0,3.7-1.6,3.9-3.6V14.1l0-0.2L167.8,13.7" class="st0-street"></path><path d="M261.8,13.7L261.8,13.7L261.8,13.7c-0.1-7.3-6-13-13.2-13c-2.7,0-5.2,0.8-7.4,2.3V2.9c-0.4-1.7-2-2.9-3.8-2.9
			c-2.1,0-3.8,1.7-3.9,3.8l2,2.3l0,7.5l0.1,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6l0-15.4l0-0.2c0.2-4,3.4-7.1,7.4-7.2
			c4.1-0.1,7.5,3.1,7.6,7.2c0,0.1,0,0.1,0,0.2l0,17.5l1.8,1.5c2,0,3.7-1.6,3.9-3.6l0-15.1l0-0.2L261.8,13.7" class="st0-street"></path><path d="M82.9,32.8l-14.6,0c-4.8,0-9.5-3.2-12.3-7c-1.9-2.7-2.9-5.9-2.8-9.1c0-8.8,7.2-16,16-16c3.3,0,6.5,1,9.2,2.8
			c1.1-2.4,3.8-3.4,6.2-2.3c1.7,0.7,2.7,2.4,2.8,4.2l-2.3,2.5l0,17.6l2.3,2.8C87.4,30.6,85.4,32.7,82.9,32.8 M79.6,13.1
			C77,9.2,74.3,6.2,69.2,6.2c-5.8,0-10.5,4.7-10.4,10.5c0,5.7,4.6,10.3,10.3,10.4l10.4,0V13.1z" class="st0-street"></path><path d="M200.6,15.7c-0.7-5.9-4.8-10.8-10.5-12.6c-0.6-2-2.6-3.3-4.6-3l-2.3,2.4c-7.5,1-13.1,7.5-13.1,15
			c0,1,0.1,2,0.3,3c0.7,3.7,2.8,7.1,5.9,9.3c1.1,0.8,2.3,1.5,3.6,2l0.3,0.1l0.7,0.2c5.4,1.7,11.3,0.3,15.3-3.7
			C199.6,25.1,201.2,20.4,200.6,15.7 M175.6,17.5c0-5.4,4.4-9.8,9.8-9.8c5.4,0,9.8,4.4,9.8,9.8c0,5.4-4.4,9.8-9.8,9.8
			C180,27.4,175.6,23,175.6,17.5C175.6,17.5,175.6,17.5,175.6,17.5" class="st0-street"></path><path d="M233.2,15.7c-0.7-5.9-4.8-10.8-10.5-12.6c-0.6-2-2.6-3.3-4.6-3l-2.3,2.4c-7.5,1-13,7.4-13,15c0,1,0.1,2,0.3,3
			c0.3,1.4,0.8,2.8,1.4,4.2c1.1,2.1,2.6,3.8,4.5,5.2c1.1,0.8,2.3,1.5,3.6,2l0.3,0.1l0.7,0.2c5.4,1.7,11.3,0.3,15.3-3.7
			C232.2,25.1,233.8,20.4,233.2,15.7 M208.2,17.6c0-5.4,4.4-9.8,9.8-9.8c5.4,0,9.8,4.4,9.8,9.8c0,5.4-4.4,9.8-9.8,9.8
			C212.6,27.4,208.2,23,208.2,17.6C208.2,17.6,208.2,17.6,208.2,17.6" class="st0-street"></path><path d="M138.6,13.6L138.6,13.6L138.6,13.6c-0.1-7.2-6-12.5-13.2-12.9c-4,0-7.9,1.8-10.4,4.9
			c-2.5-3.1-6.3-4.9-10.3-4.9c-2.7,0-5.2,0.8-7.4,2.3V3c-0.4-1.7-2-2.9-3.8-2.9c-2.1,0-3.8,1.7-3.9,3.8l2,2.3l0,25.1l1.8,1.5
			c2,0,3.7-1.6,3.9-3.6V13.8c0-4.1,3.3-7.4,7.4-7.4c4.1-0.1,7.5,3.1,7.6,7.2c0,0.1,0,0.1,0,0.2l0.1,17.5l1.8,1.5
			c2,0,3.7-1.6,3.9-3.6V25V13.8c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.2,7.5,7.2l0.1,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6L138.6,13.6
			L138.6,13.6z" class="st0-street"></path><path d="M50,13.6L50,13.6L50,13.6C49.9,6.4,44,1.1,36.8,0.7c-4,0-7.9,1.8-10.4,4.9c-2.5-3.1-6.3-5-10.3-5
			c-2.7,0-5.2,0.8-7.4,2.3l0-0.1C8.3,1.2,6.8,0,5,0C2.9,0,1.1,1.7,1.1,3.8l2,2.3l0,25.2l1.8,1.5c2,0,3.7-1.6,3.9-3.6l0-15.4
			c0-4.1,3.3-7.4,7.4-7.4c4.1-0.1,7.4,3.1,7.5,7.2c0,0.1,0,0.1,0,0.2l0.1,17.5l1.8,1.5c2,0,3.7-1.6,3.9-3.6V25V13.8
			c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.2,7.5,7.2l0.1,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6L50,13.6L50,13.6z" class="st0-street"></path><path d="M166.8,13.7L166.8,13.7L166.8,13.7c-0.1-7.3-6-13-13.2-13c-2.7,0-5.2,0.8-7.4,2.3V2.9c-0.4-1.7-2-2.9-3.8-2.9
			c-2.1,0-3.8,1.7-3.9,3.8l2,2.3l0,7.5l0.1,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6V13.8l0-0.2c0.2-4,3.4-7.1,7.4-7.2
			c4.1-0.1,7.5,3.1,7.6,7.2c0,0.1,0,0.1,0,0.2l0,17.5l1.8,1.5c2,0,3.7-1.6,3.9-3.6l-0.1-15.1l0-0.2L166.8,13.7" class="st1-street"></path><path d="M260.8,13.7L260.8,13.7L260.8,13.7c-0.1-7.3-6-13-13.2-13c-2.7,0-5.2,0.8-7.4,2.3V2.9c-0.4-1.7-2-2.9-3.8-2.9
			c-2.1,0-3.8,1.7-3.9,3.8l2,2.3l0,7.5l0,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6l0-15.4l0-0.2c0.2-4,3.4-7.1,7.4-7.2
			c4.1-0.1,7.5,3.1,7.6,7.2c0,0.1,0,0.1,0,0.2l0,17.5l1.8,1.5c2,0,3.7-1.6,3.9-3.6V14.1l0-0.2L260.8,13.7" class="st1-street"></path><path d="M81.9,32.8l-14.6,0c-4.8,0-9.5-3.2-12.3-7c-1.9-2.7-2.9-5.9-2.8-9.1c0-8.8,7.2-16,16-16c3.3,0,6.5,1,9.2,2.7
			c1.1-2.4,3.8-3.4,6.2-2.3c1.7,0.7,2.7,2.4,2.8,4.2l-2.3,2.4v17.6l2.3,2.8C86.3,30.6,84.4,32.6,81.9,32.8 M78.5,13.2
			C76,9.2,73.3,6.3,68.2,6.3c-5.8,0-10.5,4.7-10.4,10.5c0,5.7,4.6,10.3,10.3,10.4l10.4,0L78.5,13.2z" class="st1-street"></path><path d="M199.5,15.7c-0.7-5.9-4.8-10.8-10.4-12.6c-0.6-2-2.6-3.3-4.6-3l-2.3,2.4c-7.5,1-13.1,7.4-13.1,15
			c0,1,0.1,2,0.3,3c0.7,3.7,2.8,7.1,5.9,9.3c1.1,0.8,2.3,1.5,3.6,2l0.3,0.1l0.7,0.2c5.4,1.7,11.3,0.2,15.3-3.8
			C198.5,25.1,200.1,20.4,199.5,15.7 M174.5,17.6c0-5.4,4.4-9.8,9.8-9.8c5.4,0,9.8,4.4,9.8,9.8c0,5.4-4.4,9.8-9.8,9.8
			C178.9,27.4,174.5,23,174.5,17.6C174.5,17.6,174.5,17.6,174.5,17.6" class="st1-street"></path><path d="M232.1,15.7c-0.5-4.4-3-8.3-6.6-10.8c-1.2-0.8-2.5-1.4-3.8-1.8c-0.6-2-2.6-3.3-4.6-3l-2.3,2.4
			c-7.5,1-13.1,7.4-13.1,15c0,1,0.1,2,0.3,3c1,5.1,4.6,9.4,9.5,11.3l0.3,0.1l0.7,0.2c5.4,1.7,11.3,0.3,15.3-3.7
			C231.1,25.1,232.7,20.4,232.1,15.7 M207.1,17.6c0-5.4,4.4-9.8,9.8-9.8c5.4,0,9.8,4.4,9.8,9.8c0,5.4-4.4,9.8-9.8,9.8
			C211.5,27.4,207.1,23,207.1,17.6C207.1,17.6,207.1,17.6,207.1,17.6" class="st1-street"></path><path d="M137.6,13.7L137.6,13.7L137.6,13.7c-0.1-7.2-6-12.5-13.2-12.9c-4,0-7.9,1.8-10.4,4.9
			c-2.5-3.1-6.3-4.9-10.3-4.9c-2.7,0-5.2,0.8-7.4,2.3V3c-0.4-1.7-2-2.9-3.8-2.9c-2.1,0-3.8,1.7-3.9,3.8l2,2.3l0.1,25.1l1.8,1.5
			c2,0,3.7-1.6,3.9-3.6V13.8c0-4.1,3.3-7.4,7.4-7.4c4.1-0.1,7.5,3.1,7.6,7.2c0,0.1,0,0.1,0,0.2l0.1,17.5l1.8,1.5
			c2,0,3.7-1.6,3.9-3.6v-4.2V13.8c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.2,7.5,7.2l0.1,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6L137.6,13.7
			L137.6,13.7z" class="st1-street"></path><path d="M49,13.7L49,13.7L49,13.7C48.8,6.5,43,1.2,35.8,0.8c-4-0.1-7.9,1.7-10.4,4.9c-2.5-3.1-6.3-4.9-10.3-4.9
			c-2.7,0-5.2,0.8-7.4,2.3l0-0.1C7.5,2.2,7.1,1.6,6.6,1.1C5-0.4,2.5-0.3,1,1.3C0.4,2,0,2.9,0,3.9l2,2.3L2,31.4l1.8,1.5
			c2,0,3.7-1.6,3.9-3.6l0-15.4c0-4.1,3.3-7.4,7.4-7.4c4.1-0.1,7.5,3.1,7.6,7.2c0,0.1,0,0.1,0,0.2l0.1,17.5l1.8,1.5
			c2,0,3.7-1.6,3.9-3.6V25V13.8c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.2,7.5,7.3l0.1,17.7l1.8,1.5c2,0,3.7-1.6,3.9-3.6L49,13.7L49,13.7
			z" class="st1-street"></path><path d="M212.9,40.8c-1.4,0.8-2.8,1.6-4.1,2.5c2.2,0.8,9.1,6.3,8.8,8.3c-0.3,0.4-1,0.5-1.4,0.1
			c-2-3.3-6.9-5.5-10.7-6.4c-0.9,1.8-0.8,6-1.1,8.3c-0.6,0.2-1.2,0-1.7-0.4c-1.4-3.8-0.1-8.4,1.1-11.8c0.8-2.6,1.9-5.1,3.2-7.5
			c0.7-1.3,1.4-2.6,1.6-2.9c-1.6,0-3.3,0.1-4.9,0.2c-4.1,7.7-7.8,15.5-9.4,25.2c-2.4,0-2.3-2.9-2-4.4c0.3-2.3,0.9-4.6,1.7-6.8
			c1.5-4.6,3.3-9.1,5.6-13.3c-3.6,0.6-6.8,1.8-9.4,2.4c-0.3,0-0.6-0.3-0.8-0.5c0.5,2.6-2.4,8.9-5.9,12c-0.5,0.5-1,0.9-1.5,1.3
			c-1.2,0.3-2.4-0.4-2.7-1.6c-0.1-0.4-0.1-0.8,0-1.2c3.7-3.5,6.3-6.5,6.8-11.8c-0.5-0.5-1.8-0.2-2.3-0.1c-5,1.1-10.1,4.8-13.4,7.9
			c-1.8,1.7-3.3,3.1-3.5,5.5c1.8,1.3,4,1.5,6.8,1.7c3.3,0.1,6.7,0.5,10,1.1c1,0.1,2.1,0.5,2.9,1.1c1,0.7,3,2.3,1.8,3.9
			c-1.3,1.5-6.2,3.2-9.6,3.7c-6,0.9-12.4,0-12.6-4.7c0.1-0.4,2.5-1.2,3.2-0.7c-0.1,0.8-1.1,1.3-1.1,1.9c0.7,0.7,1.5,1.2,2.5,1.4
			c2.4,0.6,5,0.6,7.4,0c0.7-0.2,1.4-0.4,2-0.6c2.1-0.7,4-1.7,5.8-3c-4.3-1.9-13.4-0.6-18.4-2.4c-1.5-0.5-3.2-2.9-3.2-5.3
			c0-2.5,1.3-3.7,3.2-5.3c1.2-1,2.8-2.3,4.2-3.3c3-2.1,6.9-4.6,10.9-5.5c0.6-0.1,1.1-0.2,1.7-0.3c1.9,0.9,3.3,1.5,4.6,3.3
			c0.3-0.2,0.6-0.4,0.9-0.5c5.8-3,12.3-4.5,18.8-4.6c0.8,0.2,1.4,0.9,1.7,1.7c0.9-0.3,4.2-1.2,4.9-1.4c3.7-0.7,6.9-0.1,8.8,1.6
			c0.8,0.8,1.7,2.4,1.2,3.5c0.6-0.8,1-1.6,1.6-2.5c0.2-0.4,0.3-0.5,0.6-1.1c-0.5,0-1.5,0.4-2,0.4c-0.7-0.5-1-1.2-1.1-2
			c1.8,0.1,6.7-1.3,7.3-1.5c3.2-0.9,6.5-1.4,9.8-1.7c1.1,0,1.1,1.2,1.4,1.7c0.6-0.2,4.6-1.5,5.6-1.8c2.4-0.6,8.5-2.2,11.2-1.9
			c0.7,0.4,1.1,2.1,2,2.5c-0.1,0.6,0.2,0.7-0.1,1.2c-4.8,0.3-8.7,0.3-13.6,1.2c-2.2,3.5-4.2,7.2-5.9,11c0.6-0.4,6.1-1.5,12.3-2.4
			c0.4-0.1,0.2,0.4,0.4,0.7c0.7,0.8,2.1,0.9,1.5,2.7c-3.7,0.2-8.4,0.9-12.4,1.3c-0.7,0.1-2.4,0.2-3,0.3c-0.7,1.8-1.3,3.7-1.7,5.6
			c3.6-0.5,10.1-0.8,13.4-1.5c0.9-0.1,1.9,0.3,2.4,1.1c0.2,0.4,0.3,0.8,0.3,1.2c0,0.4-0.2,0.3-0.4,0.4c-5,0.4-16.1,1.1-18.9,1.4
			c-0.3-1.9-0.5-2,0.1-2.1c0.2,0,0.5,0,0.5-0.3c0.4-1.4,1.3-4.3,1.7-5.7c0,0-0.1,0.3-0.3,0.3c-3.5,0-9.8,1.5-14.4,2.2
			c-0.5,1.6-0.9,3.2-1.2,4.8c2.3-0.5,8.6-1.6,10.1-1.9c0.5-0.1,2.3,1.2,2.7,1.8c0.2,0.4,0.1,0.9-0.1,1.3c-5.4,0-10.8,0.5-16.2,1.5
			c-0.5-1.2-0.5-1.1-0.8-1.9c0.4-0.1,1.3-0.3,1.6-0.4c0-1.6,0.2-3.2,0.5-4.8c-1.1,0.2-1-1-1.1-1.6c0.8-0.3,1.6-0.5,1.6-0.5
			s1.9-4.6,3.7-8C220.9,36.6,213.2,40.6,212.9,40.8z M238.9,38.8c1.4-3.8,3.2-7.4,5.4-10.7c-0.9,0.2-1.8,0.4-2.6,0.7
			c0-0.4,0-0.5,0-0.8c-3.8-0.3-7.6,0-11.3,0.8c-2.5,3.9-4.7,8.1-6.3,12.4c3.5-1.1,7.1-2,10.8-2.7c1.1-0.2,2.2-0.5,2.8,1.4
			C238,38.4,238.8,39.2,238.9,38.8L238.9,38.8z M219.2,33.5c1.2-0.5,2.1-1.5,2.6-2.6c-0.8-0.2-1.6-0.2-2.3-0.2
			c-2.4,0-4.8,0.4-7.1,1.1c-1.3,2.5-3.8,6.3-5,8.8C210.5,39,218.7,33.9,219.2,33.5z" class="st3-street"></path><path d="M259.3,41.1c2.7-6.1,8.8-14.7,9.5-16c0.2-0.1-5.6,1.1-8.5,2c-0.4-1-0.2-0.8-0.7-2.2
			c8.3-3.2,19.1-5.6,20.5-4.9c0.8,0.3,3.1,1.5,2.3,4c-2.1-0.1-7.3,0.1-8.9,0.6c-2.9,2.7-11.2,15.8-12.7,19.8
			c-0.6,1.5-1.1,3.1-1.4,4.7c-2.4,0.1-1.9-3.2-1.6-3.8C258.2,43.9,258.7,42.5,259.3,41.1z" class="st3-street"></path></g></g></svg>
</div>

</div>

<div style="width: 100%;margin:15px 10px;">

<MapPin style="position: initial;margin-right: 10px;" class="mr6" />

1508 Melrose Ave, Seattle, WA 98122
</div>



<div style="width: 100%;margin:15px 10px;    margin-right: 6px;">

<Clock style="position: initial;margin-right: 10px;" class="mr6" /> <span v-if="valid">open</span><span v-else>closed</span>


</div>

<div style="width: 100%;margin:15px 10px;">
<Phone class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
1508 Melrose Ave, Seattle, WA 98122
  </div>
  <div style="width: 100%;margin:15px 10px 25px 10px;">
<Envelope class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
info@mamnoonrestaurant.com
  </div>

    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
  order online
</button>
      </div>
  
    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
  make a reservation
</button>
      </div>

      <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
view menus
</button>
      </div>
  
  
  
  
  
  
  </div>












    <div id="mamnoon-reserve" class="halfwidth-yellow1 wider temporary-grid">
  
  
  
  
  






  
  
  
<div style="width: 100%;margin:10px;">




<!-- <Plus /> -->

<!-- <Minus /> -->
  <div class="halfwidthclass smalled" style="height: 100px;position: relative;">
<svg class="fifty50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 282.05 114.97" xml:space="preserve"><g><g class="st0"><path d="M328.75,145.89c0-0.01,0-0.01,0-0.02v-0.01c-0.11-5.12-4.27-8.92-9.42-9.21c-2.1-0.12-4.26,0.89-5.3,1.58
			c-0.79,0.54-1.5,1.19-2.09,1.93c-1.72-2.14-4.37-3.51-7.35-3.51c-1.9,0-3.74,0.57-5.29,1.67v-0.06c-0.35-1.26-1.38-2.07-2.7-2.07
			c-1.49,0-2.76,1.21-2.76,2.7l1.38,1.61l0.06,17.99l1.26,1.09c1.38,0,2.76-1.15,2.76-2.59v-10.98c0-2.87,2.41-5.29,5.29-5.29
			c2.99,0,5.39,2.27,5.39,5.26c0,0.04,0.04,12.5,0.04,12.5l1.27,1.09c1.38,0,2.76-1.15,2.76-2.59v-3.02v-7.96
			c0-2.87,2.41-5.29,5.29-5.29c2.93,0,5.24,2.26,5.33,5.16l0.05,12.6l1.26,1.09c1.38,0,2.76-1.15,2.76-2.59
			C328.74,157,328.74,145.91,328.75,145.89L328.75,145.89z" class="st1"></path></g></g><polygon points="373.67,28.54 373.67,154.67 408.35,91.18 " class="st2"></polygon><g><g><path d="M142.9,50.19L142.9,50.19c-0.12-13.88-11.66-25.14-25.82-25.14c-4.82,0-9.33,1.3-13.19,3.57
			c-0.56,0.29-1.2,0.46-1.88,0.48c-1,0.02-1.92-0.27-2.62-0.8C98.3,27.48,96.96,27,95.5,27c-3.52,0-6.45,2.8-6.45,6.26
			c0,1.22,0.37,2.36,1,3.32c0.71,1.26,1.17,2.7,1.22,4.23c0,0-0.01,44.23-0.01,44.25c0,2.75,2.28,4.99,5.08,4.99
			c2.8,0,5.08-2.24,5.08-4.99c0-0.09-0.02-34.88-0.02-34.88h0c0.13-8.38,7.11-15.16,15.67-15.16c8.56,0,15.55,6.78,15.67,15.16h0
			c0,0,0,34.83,0,34.88c0,2.75,2.28,4.99,5.08,4.99c2.8,0,5.08-2.24,5.08-4.99C142.91,85.03,142.9,50.19,142.9,50.19z" class="st3"></path></g><g><g><path d="M77.33,50.19C77.19,36.77,65.18,25.05,51.5,25.05c-14.18,0-26.16,11.5-26.29,25.15
				c0,0,0.01,34.85,0.01,34.87c0,2.75,2.28,4.99,5.08,4.99c2.8,0,5.08-2.24,5.08-4.99c0-0.08-0.02-34.88-0.02-34.88h0
				c0.13-8.38,7.11-15.16,15.67-15.16c8.56,0,15.55,6.78,15.67,15.16h0c0,0,0,34.83,0,34.88c0,2.66,2.59,4.99,5.54,4.99
				c2.8,0,5.08-2.24,5.08-4.99C77.33,85.03,77.33,50.19,77.33,50.19z" class="st3"></path></g></g><g><g><path d="M208.89,50.19c-0.14-13.42-12.15-25.14-25.84-25.14c-14.18,0-26.16,11.5-26.29,25.15
				c0,0,0.01,34.85,0.01,34.87c0,2.75,2.28,4.99,5.08,4.99c2.8,0,5.08-2.24,5.08-4.99c0-0.08-0.02-34.88-0.02-34.88h0
				c0.13-8.38,7.11-15.16,15.67-15.16c8.56,0,15.55,6.78,15.67,15.16l0,0c0,0,0,34.83,0,34.88c0,2.66,2.59,4.99,5.54,4.99
				c2.8,0,5.08-2.24,5.08-4.99C208.89,85.03,208.89,50.19,208.89,50.19z" class="st3"></path></g></g><g><g><path d="M261.51,28.36c-3.79-2.15-8.19-3.38-12.87-3.38c-4.82,0-9.33,1.3-13.19,3.57c-0.56,0.29-1.2,0.46-1.88,0.48
				c-1,0.02-1.92-0.27-2.62-0.8c-1.07-0.81-2.42-1.29-3.87-1.29c-3.52,0-6.45,2.8-6.45,6.26c0,1.22,0.37,2.36,1,3.32
				c0.71,1.26,1.17,2.7,1.22,4.23c0,0-0.01,44.23-0.01,44.26c0,2.75,2.28,4.99,5.08,4.99c2.8,0,5.08-2.24,5.08-4.99
				c0-0.09-0.02-34.88-0.02-34.88h0c0.13-8.38,7.11-15.16,15.67-15.16c2.89,0,5.6,0.77,7.92,2.12l0,0c0.76,0.45,1.66,0.71,2.61,0.71
				c2.81,0,5.08-2.23,5.08-4.99c0-1.72-0.89-3.24-2.24-4.14" class="st3"></path></g></g><g><path d="M61.9,61.16C61.9,61.16,61.9,61.16,61.9,61.16L61.9,61.16c-0.01-3.44-1.75-6.27-3.99-6.67
			c-0.08-0.01-0.17-0.03-0.25-0.04c-2.83-0.37-5.95-0.25-9.11,0.45c-2.94,0.65-5.58,1.73-7.77,3.09c-0.14,0.09-0.3,0.18-0.39,0.25
			c-0.37,0.28-0.58,0.72-0.58,1.19l0,1.74l0,0l0,1.74c0,0.47,0.21,0.92,0.58,1.19c0.13,0.09,0.24,0.16,0.39,0.25
			c2.19,1.36,4.83,2.43,7.77,3.08c3.16,0.7,6.27,0.82,9.1,0.44c0.09-0.01,0.17-0.02,0.25-0.04C60.15,67.43,61.89,64.6,61.9,61.16
			L61.9,61.16C61.9,61.16,61.9,61.16,61.9,61.16z" class="st4"></path></g><g><path d="M193.43,61.12C193.43,61.12,193.43,61.12,193.43,61.12L193.43,61.12c-0.01-3.44-1.75-6.27-3.99-6.67
			c-0.08-0.01-0.17-0.03-0.25-0.04c-2.83-0.37-5.95-0.25-9.11,0.45c-2.94,0.65-5.58,1.73-7.77,3.09c-0.14,0.09-0.3,0.18-0.39,0.25
			c-0.36,0.28-0.58,0.72-0.58,1.19l0,1.74l0,0l0,1.74c0,0.47,0.21,0.92,0.58,1.19c0.13,0.09,0.24,0.16,0.39,0.25
			c2.19,1.36,4.83,2.43,7.77,3.08c3.16,0.7,6.27,0.82,9.1,0.44c0.09-0.01,0.17-0.02,0.25-0.04
			C191.67,67.39,193.41,64.56,193.43,61.12L193.43,61.12C193.43,61.12,193.43,61.12,193.43,61.12z" class="st4"></path></g></g></svg>
</div>

</div>

<div style="width: 100%;margin:15px 10px;">

<MapPin style="position: initial;margin-right: 10px;" class="mr6" />

1508 Melrose Ave, Seattle, WA 98122
</div>



<div style="width: 100%;margin:15px 10px;    margin-right: 6px;">

<Clock style="position: initial;margin-right: 10px;" class="mr6" /> <span v-if="valid">open</span><span v-else>closed</span>


</div>

<div style="width: 100%;margin:15px 10px;">
<Phone class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
1508 Melrose Ave, Seattle, WA 98122
  </div>
  <div style="width: 100%;margin:15px 10px 25px 10px;">
<Envelope class="mr6" style="position: initial;width: 20px;margin-right: 10px;" />
info@mamnoonrestaurant.com
  </div>

    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
  order online
</button>
      </div>
  
    <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
  make a reservation
</button>
      </div>

      <div style="width: 100%;margin:15px 0px;text-align: center;">
<button>
view menus
</button>
      </div>
  
  
  
  
  
  
  </div>
  
  
  
  
  
  
  
</div>
<div class="width-container"><div>
  
  
  

  
  
  
  
  </div>
  
  
  
 </div>
      </section>
</div>
  </div>
</div>


    <OnlineShopUpserve :visible="visibility.onlineshop" v-if="item.acf_fc_layout === 'online_shop'" :header="item.header" :description="item.description" :data="item.online_shop" :tag="item.tagname" />
  
  
  

  
  
  
  
   <FineFoods :visible="visibility.finefoods" v-if="item.acf_fc_layout === 'fine foods'" :header="item.header" :description="item.description" :data="item.fine_foods" :tag="item.tagname" />
    <ALaCarte :visible="visibility.alacarte" v-if="item.acf_fc_layout === 'a_la_carte'" :header="item.header" :description="item.description" :data="item.service" :tag="item.tagname" />
    <Newsletter :visible="visibility.newsletter" v-if="item.acf_fc_layout === 'newsletter'" :header="item.header" :body="item.description" :tag="item.tagname" />
  </template>
  <template v-else>


<!-- mobile featured.  -->
     <template v-if="item.acf_fc_layout === 'meal_calendar'">
        <router-link class="orange-button" to="/featured">featured</router-link>
      </template>
<!-- mobile reservations. -->

      <template v-if="item.acf_fc_layout === 'reservations'">
        <router-link class="orange-button" to="/reservations">reservations</router-link>
      </template>

<!-- mobile online shop. -->
      <template v-if="item.acf_fc_layout === 'online_shop'">
        <router-link class="orange-button" to="/retail">retail items</router-link>
      </template>
<!-- mobile find foods. -->
      <template v-if="item.acf_fc_layout === 'fine foods'">
        <router-link class="orange-button" to="/mamnoonff">fine foods</router-link>
      </template>
<!-- mobile a la cart. -->
      <template v-if="item.acf_fc_layout === 'a_la_carte'">
        <router-link class="orange-button" to="/onlinemenu">online menu</router-link>
      </template>
<!-- mobile newsletter. -->
      <template v-if="item.acf_fc_layout === 'newsletter'">
        <router-link class="orange-button" to="/newsletterarchive">newsletter archive</router-link>
      </template>
<!-- about. -->
      <template v-if="item.acf_fc_layout === 'about'">
        <router-link class="orange-button" to="/about">about</router-link>
      </template>




  </template>
  </div>

  <template v-if="isMobile()">
 <router-link class="orange-button" to="/about">about</router-link>

  </template>





  </main>
  </div>
</template>

<script type="text/javascript">

import carousel from "vue-owl-carousel";
import Order from "@/components/svgIcons/Order";
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";
import Mamnoon from "@/components/svgIcons/Mamnoon";
import Mbar from "@/components/svgIcons/Mbar";
import ShowAll from "@/components/svgIcons/ShowAll";
import MamnoonSVG from "@/components/svgIcons/MamnoonSVG";
import Newsletter from "@/components/Newsletter";
import CoverFlowCarousel from "@/components/CoverFlowCarousel";
import UpserveFiltering  from "@/components/UpserveFiltering";
import TestimonialsMain from "@/components/TestimonialsMain";
import Reservations from "@/components/Reservations";
import ALaCarte from "@/components/ALaCarte";
import OnlineShop from "@/components/OnlineShop";
import FineFoods from "@/components/FineFoods";
import OnlineShopUpserve from "@/components/OnlineShopUpserve";

import Phone from "@/components/svgIcons/Phone";
import Clock from "@/components/svgIcons/Clock";
import MapPin from "@/components/svgIcons/MapPin";



import Plus from "@/components/svgIcons/Plus";

import Minus from "@/components/svgIcons/Minus";
import Envelope from "@/components/svgIcons/Envelope";


export default {
  components: {
    Plus,
    Minus,
    Envelope,
    Phone,
    Clock,
    MapPin,
    FineFoods,
    ALaCarte,
    carousel,
    Order,
    Next,
    Prev,
    Newsletter,
    CoverFlowCarousel,
    Mbar,
    Mamnoon,
    MamnoonSVG,
    ShowAll,
    UpserveFiltering,
    TestimonialsMain,
    Reservations,
    OnlineShop,
    OnlineShopUpserve
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    names() {
      return this.$store.state.names;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      pageData: null,
      testimonials: null,
      inventory: this.$store.state.inventory,
      blockedBody: this.apiData,
      upserve: null,
      upserveCategories: [],
      currentlyFiltered: [],
      visibility: {
        testimonials: false,
        planahead: false,
        reservations: false,
        shop: false,
        finefoods: false,
        fullonlinemenu: false,
        newsletter: false
      

      }
    };
  },
  props: ['apiData', 'blok'],
  methods: {
        openSevenRooms(e){
      document.getElementById(e).click();

      console.log('console log mbar')
      console.log(e)
    },
 isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return false
   } else {
     return false
   }
 },
visibilityChanged (isVisible, entry) {
  this.isVisible = isVisible
  ///console.log(entry.target.id)
  //console.log(entry.isIntersecting)
///console.log(entry)

// this.visibility[entry.target.id] = true


this.visibility[entry.target.id] = entry.isIntersecting


},

  async individualRestaurant(){
   
    let responseAcf = await this.$http.get(`https://mamnoontogo.net/wp-json/acf/v3/restaurant/188`)
    let AcfBlock = responseAcf
    this.pageData = AcfBlock.data.acf.content_fields

},
    filterByCat(cat){
      this.currentlyFiltered = []
      for(let i = 0;i<this.upserve.length;i++){
        if(this.upserve[i].category === cat){
        this.currentlyFiltered.push(this.upserve[i])
        }
      }
    },
    dayChange(e) {
      this.currentDay = e + 1;
    },
    toggle: function(event) {
      if (event.target.classList.contains("is-open")) {
        this.$store.commit("decrement");


        
        event.target.classList.remove("is-open");
      } else {
        event.target.classList.add("is-open");
        this.$store.commit("increment");
      }
    },
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    increment2(name) {
      this.$store.commit("increment2", { name });
    },
    removeFromCart(price) {
      this.$store.commit("removeFromCart", { price });
    },
    confirmOrder(timeslot) {
      if (event.target.classList.contains("reserved")) {
        this.$store.commit("unreserveFamilyMeal", { timeslot });

      } else {
        this.$store.commit("reserveFamilyMeal", { timeslot });
      }
    },
    changedAlert() {
      console.log("changed");
    }
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    this.currentDay = dd;
  },
  mounted(){
    this.individualRestaurant()
        // this.upserves()
  }
};

</script>


<style lang="scss">
.reserved {
  background: red;
}
.not-available {
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}
.order-button {
  width: 33.33%;
  padding: 20px 0;
}
h4 {
  text-align: center;
}
.is-fullheight,
.is-fullheight2,
.familymeal,
.narrow {
  background-color: #f05d5b;
  h4 {
    color: #fff367;    font-weight: bold;
  }
}
.section.hero.familymeal {
  width: 88%;
  margin: 0 auto;
}
.is-fullheight [id^="carousel_prev_"] {
  position: absolute;
  top: 14px;
  //  top: 110px;
  left: 20%;
    left: 30%;
        left: 35%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    left: 5%;
  }
}
.is-fullheight [id^="carousel_next_"] {
  position: absolute;
  top: 14px;
    //  top: 110px;
  right: 20%;
    right: 30%;
        right: 35%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    right: 5%;
  }
}



.is-fullheight,
.is-fullheight2 {
  padding: 20px 0 0 0;
  // overflow: hidden;
}
.familymeal {
  padding: 0 0 0 0;
}
.order-bottom {
  background: #fff367;
  padding: 10px 0;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: lowercase;
}
.order-bottom.order-top {
  background: #f58e58;
  min-height: 90px;
  text-align: center;
}
.order-panel {
  padding: 10px 0;
}
#mama-dummy-button {
  width: 70px;
  margin: 0 auto;
}
.carousel {
  margin-bottom: 80px;
}
#testimonials .owl-item {
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 10px;
  &:nth-child(odd) {
    background: #f58e58;
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
#testimonials .owl-item .l-col {
  padding: 20px;
  text-align: left;
  padding-top: 15px;
  width: 100%;
  float: left;
}
#testimonials .owl-item .r-col {
  padding: 0px;
  // width: 50%;
  float: left;
  img {
    width: 100%;
  }
}
#testimonials .owl-item > div > div {
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
  font-size: 18px;
}
.lg {
  font-size: 64px;
}
.days {
  margin: 10px auto 5px;
  width: 80%;
}
.days span {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 30px;
  cursor: pointer;
}
.month {
  color: white;
  display: inline-block;
  font-style: italic;
  margin-left: 5px;
  margin-right: 5px;
  // line-height: 30px;
  cursor: pointer;
}
.insideHeader {
  margin-bottom: 20px;
  margin-top: -15px;
}
button.snipcart-add-item {
  border: 0;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}
.snipcart-modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 110 !important;
  background-color: #f0f5f6;
  // top: 140px !important;
  top: 90px !important;
    top: 0 !important;
}
.top-widget {
  width: 100%;
  height: 500px;
  background: green;
}
.coverflowsection {
  padding: 0 0 20px 0;
  margin-bottom: 80px;
  background-color: #f05d5b;
  overflow: hidden;
  position: relative;
  h4 {
    color: #fff367;
    font-weight: bold;
  }
  p {
    color: white;
    width: 80%;
    margin: 10px auto 10px;
    text-align: center;
  }

    // margin-top: 90px;

    width: 70%;

    margin-left: auto;
    margin-right: auto;

}
@media only screen and (max-width: 960px) {
  .coverflowsection {
        // height: 660px;
        // height: 880px;
           width: 100%;
  }
}
@media only screen and (max-width: 640px) {
  .coverflowsection {
      // height: 660px;
      // height: 800px
      //  height: 880px;
  }
}
@media only screen and (max-width: 480px) {
  .coverflowsection {

      // height: 880px;
      // height: 804px;
  }
}
.bottom-button {

  // position: absolute;
  // bottom: 0;
  // background: #FFF367;
  // width: 100%;
  // padding: 10px 0;

  position: absolute;
  bottom: 0;
  background: #fff367;
  width: 100%;
  padding: 10px 0;
  // height: 120px;
  height: 110px;
  a {
    position: absolute;
    // width: 100%;
  }
  display: none;
}
.width-container {
  width: 100%;
  overflow: auto;
}
section {
  clear: both;
}
.shortcarousel {
  margin-bottom: 80px;
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
.quote-author {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff367;
}
.itemDescription{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff367b5;
    top: 0;
    opacity: 0;
    transition: all .5s ease;
.text-box{
      width: 80%;
      margin: 0 auto;
      font-weight: 100;
      font-size: 36px;
      margin-top: 100px;
}
}
.relative-pos{
  position: relative;
  overflow: hidden;  
    &:hover{
      .itemDescription{
        opacity: 1;
      }
    }
}


.tesstimonialItem{
  text-align:center;
  margin-top: 0px;
  width: 100% !important;
  
}



#mama-shop .carousel{
    margin-bottom: 20px;
}



.owl-item > div{
  width: 100%
}


#testimonials{
  .owl-carousel {
    margin-top: -10px;
  }
}


#testimonials{
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
      color: #f05d5b;
    }
}

}

ul.upserve-cats li{
  display: inline;
}

.filtree-half{

    width: 50%;
    float: left;
    // height: 300px;
    // height: 220px;
    height: 140px;
    background: transparent;
    // margin: 5px;
    padding: 0px;
    overflow: hidden;

@media only screen and (max-width: 768px) {
  width: 100%
}


.grey-bg{
    //  padding: 5px;
      // background: #fff367;
            background: #ffffff;
            // padding: 10px 5px;
      
}
}
.filtree{
//   width: 50%;
//   float: left;
//   height: 300px;
// background: #ddd;
// margin: 5px;
// padding: 5px;


width: 30%;
    float: left;
    height: 300px;
    background: #ddd;
    margin: 5px;
    padding: 5px;
    overflow: hidden;



@media only screen and (max-width: 1080px) {
width: 50%
}


@media only screen and (max-width: 768px) {

width: 100%





}



}




@media only screen and (max-width: 1200px) {

.coverflowsection{

    // height: 814px;
}
}

@media only screen and (max-width: 768px) {





.coverflowsection,
.mb-80{
  margin-bottom: 40px;
}
}




@media only screen and (max-width: 768px) {


.coverflowsection{

    // height: 745px;
}



}

.intro-paragraph-header{
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #f05d5b;
}

.intro-paragraph{
      font-size: 14px;
    color: #f05d5b;
}
.rollbar{
  position: fixed;
    width: 100%;
    min-height: 90px;
    background: green;
    top: 142px;
    left: 0;
    z-index: 100;
    padding: 10px 0; 
}

@media only screen and (max-width: 1080px) {
.rollbar{
    top: 92px;

}
}

@media only screen and (max-width: 992px) {


.rollbar{
    top: 92px;

}

}


.orange-button{
      padding: 14px 20px;
  // padding:20px;
  background: #f58e58;
  display: block;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  transition: all .5s ease;
  &:hover{
    text-decoration: none;
  }
}



// .container.mt-5{
//     margin-top: 3rem!important;
//     padding-top: 100px;

// }


.halfwidth-yellow1{
  &.temporary-grid{
    height: 600px;
  }
}


#temporary-grid{
  svg{
    // transform: translate(0,0);
    text-align: left;
        width: auto;


        &.fifty50{
          transform: translate(-50%,-50%);
        }
  }


  .halfwidth-yellow1{
    text-align: left;
    padding: 20px;
  }


  button{
    border: 3px solid black;
    background-color: transparent;
    color: black;
    text-align: center;
    width: 70%;
    padding: 7px 0 8px 0;
    font-size: 22px;
    margin: 0 auto;

  }
}


</style>