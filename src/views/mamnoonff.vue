<template>
  <div class="mamnoon">
    <Nav />

<div>



<div class="container pad ff">

<div class="row">


<div class="col-md-4 mb20"><img style="width: 100%;" src="@/assets/img/logo1.png"></div>
<div class="col-md-8 mb20">

<p>
  At mamnoon we believe strongly in the value of food as an essential part of family and social interactions. We take great pride in the power of the intense flavors, colors, and vitality of the traditional Levantine cuisine: the heart of mamnoon. We want to shout from the rooftops about the strengths brought to us from Lebanon and Syria, as well as share them with our community. 
</p>
<p>
Our new products are prepared simply but with boundless expertise and passion. They celebrate a lifestyle that harmoniously blends long lasting traditions of culture and flavor with the convenience of the modern world. Our deep love of pure ingredients has helped us build a reputation for unforgettable dining experiences that are both delicious and healthy. 
</p>
<p>
Wassef and Racha Haroun established Mamnoon restaurant in 2012 and have solidified its reputation as a Seattle staple ever since. Their shared mission tells a story of Middle Eastern cuisine in an approachable, unique, and exciting way. Growing up in Lebanon and Syria, they are proud to showcase the unique flavors and hospitality they experienced by forging a path for Levantine cuisine in Seattle.
</p>
</div>

</div>


<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/hummus.png">
</div>
<div class="col-md-8 mb20">
<h2>hummus</h2>
<h3>(chickpea, tahini, lemon, garlic)</h3>
<p>
Our traditional Lebanese approach to hummus is a perfect, clean balance between citrus and tahini with just a hint of garlic to pull it all together. The creamy texture adds luxuriousness and lightness.
</p>
</div>
</div>



<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/labneh.png">
</div>
<div class="col-md-8 mb20">
<h2>labneh</h2>
<h3>(strained yogurt, nigella, dried mint, olive oil)</h3>
<p>
Yogurt just won the lottery and the result is our labneh! Tangy, rich, and slightly salted with the dried mint bringing an earthy uniqueness.
</p>
</div>
</div>




<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/baba.png">
</div>
<div class="col-md-8 mb20">
<h2>baba ganoush</h2>
<h3>(smoked eggplant, tahini, garlic)</h3>
<p>
With its custardy texture and smoky flavor our baba ganoush is a savory and smoky vegan dish laden with umami flavor. 
</p>
</div>
</div>



<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/muha.png">
</div>
<div class="col-md-8 mb20">
<h2>muhammara</h2>
<h3>(walnut, pepper paste, cumin, pomegranate molasses, bread crumbs)</h3>
<p>
Our muhammara is a flavor punch for your taste buds. The richness of the pepper paste and walnuts is cut with the tangy sweetness of the pomegranate molasses.
</p>
</div>
</div>




<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/fatoush1.png">
</div>
<div class="col-md-8 mb20">
<h2>fattoush dressing</h2>
<h3>(sumac, pomegranate molasses, champagne vinegar, olive oil)</h3>
<p>
This dressing gets its name from a Lebanese bread salad. Our tangy vinaigrette compliments juicy vegetables like cucumbers and radish and soaks beautifully into our pita chips.
</p>
</div>
</div>



<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/harra1.png">
</div>
<div class="col-md-8 mb20">
<h2>harra sauce</h2>
<h3>(fresno chili, garlic, smoked paprika, cumin)</h3>
<p>
Fresno chilis gives our hot sauce its slightly smokey and fruity flavor while the cumin adds some unique dusky notes.
</p>
</div>
</div>


<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/chips1.png">
</div>
<div class="col-md-8 mb20">
<h2>pita chips</h2>
<h3>(our house-made arabic bread crisped to perfection)</h3>
<p>
A crispy, slightly thicker pita chip is great for any dips or for soaking up dressing in a traditional Lebanese fattoush salad.
</p>
</div>
</div>



<div class="row pad-sm">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/collection.jpg">
</div>
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/foodsstack.jpg">
</div>
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/stackback.jpg">
</div>

</div>



<!-- 
<div class="row">
<div class="col-md-4 mb20">
  <img style="width: 100%;" src="@/assets/img/chips1.png">
</div>
<div class="col-md-8 mb20">
<h2>pita chips</h2>
<h3>(our house-made arabic bread crisped to perfection)</h3>
<p>

</p>
</div>
</div> -->


</div>

    <!-- <img style="width: 100%;" src="@/assets/img/mamnoonFF_NADI_2-01.png"> -->
</div>
  <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import UpserveOlo from "@/components/UpserveOlo";
import Nav from "@/components/Nav";
export default {
  data(){
return {
user: null
}
  },
  components: {
    Nav
  }
};











</script>

<style lang="scss">
.mamnoon{
    /* padding-top: 120px; */
    /* padding-top: 92px; */
padding-top: 112px;
    padding-top: 132px;
}

h1{
 color: #F05D5B;
 text-align: center;
 margin: 30px auto;
}


.pad{
    padding-top: 50px;
    padding-bottom: 50px;
}


.pad-sm{
    padding-top: 25px;
    padding-bottom: 25px;
}

.mb20{
  margin-bottom: 20px;
}


.ff{
  h2{
color: #F05D5B;
  }

  h3{
font-style: italic;
font-size: 1em;
font-weight: bold;
  }

  p{

  }
}

</style>