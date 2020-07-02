<template>
<div>



<div>
<h4>plan ahead - family meal calendar</h4>
	</div>









	<div id="container"></div>
    <!-- <div style="width:480px;">
		<div style="float:right;">Focused: <b id="focusindex">0</b> | Clicked: <b id="clickindex">0</b></div>
		<p>
			<a href="javascript:;" @click="coverflow().left();">Left</a> - <a href="javascript:;" @click="coverflow().right();">Right</a>
		</p>
		<p>
			<a href="javascript:;" @click="coverflow().prev();">Previous</a> - <a href="javascript:;" @click="coverflow().next();">Next</a>
		</p>
		<p>
			<input id="toval" value="0" size="1"> <a href="javascript:;" @click="coverflow().to(document.getElementById('toval').value);">To</a>
		</p>
	</div> -->
	
	<!-- <button @click="reset()">Reset</button> -->
	<!-- <button @click="coverflow().remove()">Remove</button> -->



  </div>
</template>


<script>






export default {
		name: 'coverflow',
  mounted(){
	  console.log(123)
	  this.reset();
  },
  methods: {
	  reset () {
		  console.log(123);
		  			coverflow('container').remove();
			
			//$('#container').coverflow({
			coverflow('container').setup({
				width: '100%',
				item: 1,
				rotatedelay: 2000,
				// mousewheel: false,
				// mode: 'flash',
				// backgroundcolor: '009900',
				// backgroundopacity: 0,
				// wmode: 'transparent',
				// gradientcolor: 'ff0000',
				// showduration: true,
				playlist: [
	{
		"title": "golden pebble road",
		"description": "",
		"image": "https://luwes.github.io/js-cover-flow/media/DSC00435.jpg",
		"link": "http://www.google.com/"
	},
	{
		"title": "luminous sky",
		"description": "another spectacular masterpiece of nature",
		"image": "https://luwes.github.io/js-cover-flow/media/DSC00358.jpg"
	},
	{
		"title": "volcano valley",
		"description": "",
		"image": "https://luwes.github.io/js-cover-flow/media/IMG_0044.jpg"
	},
	{
		"title": "sheep hill path",
		"description": "",
		"image": "https://luwes.github.io/js-cover-flow/media/DSC00435.jpg"
	},
	{
		"title": "saw tooth ridge",
		"description": "",
		"image": "https://luwes.github.io/js-cover-flow/media/DSC00736.jpg"
	},
	{
		"title": "winter long",
		"description": "what a massive and unbelievable winter we're having!",
		"image": "https://luwes.github.io/js-cover-flow/media/IMG_0028.jpg"
	},
	{
		"title": "unreachable peak",
		"description": "",
		"image": "https://luwes.github.io/js-cover-flow/media/DSC01313.jpg"
	}
],

				coverwidth: 180,
				coverheight: 150,
				fixedsize: true,
				textoffset: 50
			})
			.on('ready', function() {

				// this.on('focus', function(index) {
				// 	document.getElementById('focusindex').innerHTML = index;
				// });
				
				// this.on('click', function(index, link) {
				// 	document.getElementById('clickindex').innerHTML = index;
					
				// 	console.log(link);
				// 	if (link) {
				// 		window.open(link, '_blank');
				// 	}
				// });
			});
	  }
  }
}
</script>
