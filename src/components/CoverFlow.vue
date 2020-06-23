<template>
<div>



		<div id="preview">
			<div id="preview-coverflow">

				<div class="cover">

<a href="http://hotmail.com" target="_blank">hotmail</a>
					<button>1234</button>
					124456<img  src="demo/attic.jpg"/>
				</div>


				<div class="cover">
		<a href="http://hotmail.com" target="_blank">hotmail</a>
						<button>1234</button>
					124456<img  src="demo/attic.jpg"/>
				</div>


								<div class="cover">
									<a href="http://hotmail.com" target="_blank">hotmail</a>
										<button>1234</button>
					124456<img  src="demo/attic.jpg"/>
				</div>

								<div class="cover">
									<a href="http://hotmail.com" target="_blank">hotmail</a>
										<button>1234</button>
					124456<img  src="demo/attic.jpg"/>
				</div>

								<div class="cover">
									<a href="http://hotmail.com" target="_blank">hotmail</a>
										<button>1234</button>
					124456<img  src="demo/attic.jpg"/>
				</div>

								<div class="cover">
									<a href="http://hotmail.com" target="_blank">hotmail</a>
										<button>1234</button>
					124456<img  src="demo/attic.jpg"/>
				</div>

								<div class="cover">
									<a href="http://hotmail.com" target="_blank">hotmail</a>
										<button>1234</button>
					124456<img  src="demo/attic.jpg"/>
				</div>
			</div>
		</div>
  </div>
</template>


<script>

// hello
import coverflow from '../assets/js/jquery.coverflow.js'
// import interpolate from '../assets/js/interpolate.js'
import touchswipe from '../assets/js/jquery.touchSwipe.min.js'


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
