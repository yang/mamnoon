<template>
<div>



		<div id="preview">
			<div id="preview-coverflow">
				<img class="cover" src="demo/attic.jpg"/>
				<img class="cover" src="demo/aurora.jpg"/>
				<img class="cover" src="demo/barbecue.jpg"/>
				<img class="cover" src="demo/blackswan.jpg"/>
				<img class="cover" src="demo/chess.jpg"/>
				<img class="cover" src="demo/fire.jpg"/>
				<img class="cover" src="demo/keyboard.jpg"/>
				<img class="cover" src="demo/locomotive.jpg"/>
				<img class="cover" src="demo/diveevo.jpg"/>
				<img class="cover" src="demo/person.jpg"/>
				<img class="cover" src="demo/rose.jpg"/>
				<img class="cover" src="demo/seagull.jpg"/>
				<img class="cover" src="demo/solarpower.jpg"/>
			</div>

	
		</div>





  </div>
</template>


<script>


import coverflow from '../assets/js/coverflow.js'
import interpolate from '../assets/js/interpolate.js'
import touchswipe from '../assets/js/touchswipe.js'
import reflection from '../assets/js/reflection.js'

export default{
	name: 'coverflow',
	mounted() {
			$(function() {
				if ($.fn.reflect) {
					$('#preview-coverflow .cover').reflect();	// only possible in very specific situations
				}

				$('#preview-coverflow').coverflow({
					index:			6,
					density:		2,
					innerOffset:	50,
					innerScale:		.7,
					animateStep:	function(event, cover, offset, isVisible, isMiddle, sin, cos) {
						if (isVisible) {
							if (isMiddle) {
								$(cover).css({
									'filter':			'none',
									'-webkit-filter':	'none'
								});
							} else {
								var brightness	= 1 + Math.abs(sin),
									contrast	= 1 - Math.abs(sin),
									filter		= 'contrast('+contrast+') brightness('+brightness+')';
								$(cover).css({
									'filter':			filter,
									'-webkit-filter':	filter
								});
							}
						}
					}
				});
			});

	}
}
</script>
<style lang="scss">
				#preview {
					padding-bottom: 100px;
				}
				#preview-coverflow .cover {
					cursor:		pointer;
					width:		320px;
					height:		240px;
					box-shadow:	0 0 4em 1em white;
				}
</style>
