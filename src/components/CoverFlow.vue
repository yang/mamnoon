<template>
<div>



<div>
<h4>plan ahead - family meal calendar</h4>
	</div>





<!-- {{products.items}} -->



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
  	props: ['products'],
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
				backgroundcolor: '#F05D5B',
				// backgroundopacity: 0,
				// wmode: 'transparent',
				// gradientcolor: 'ff0000',
				// showduration: true,
				reflectionopacity: 0,
				playlist: this.products.items,
				coverwidth: 240,
				coverheight: 200,
				fixedsize: true,
				textoffset: 50,
				coverangle: 50
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
