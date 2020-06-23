<template>
<div>


    <body>
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

			<script>
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
			</script>
		</div>

		<div ID="book">
			<div id="readme"></div>

			<h1>Examples</h1>
			<div id="examples" class="chapter">				
				Click here for some demos: <a href="demo.html" target="_blank">Demos</a>
			</div>
		</div>
		
		<div id="footer">
			Copyright &copy; 2013-2016 Martijn van der Lee. MIT Open Source license applies.
		</div>
	</body>



  </div>
</template>


<script>
export default{
mounted() {
			$(function() {
				function tabsToSpaces(line, tabsize) {
					var out		= '',
						tabsize = tabsize || 4,
						c;
					for (c in line) {
						var ch = line.charAt(c);
						if (ch === '\t') {
							do {
								out += ' ';
							} while (out.length % tabsize);
						} else {
							out += ch;
						}
					}
					return out;
				}

				function visualizeElement(element, type) {
					var code		= $(element).html().split('\n'),
						tabsize		= 4,
						minlength	= 2E53,
						l;

					// Convert tabs to spaces
					for (l in code) {
						code[l] = tabsToSpaces(code[l], tabsize);
					}


					// determine minimum length
					var minlength = 2E53;
					var first = 2E53;
					var last = 0;
					for (l in code) {
						if (/\S/.test(code[l])) {
							minlength = Math.min(minlength, /^\s*/.exec(code[l])[0].length);
							first = Math.min(first, l);
							last = Math.max(last, l);
						}
					}

					code = code.slice(first, last + 1);

					// strip tabs at start
					for (l in code) {
						code[l] = code[l].slice(minlength);
					}

					// recombine
					code = code.join('\n');

					var fragment = $('<pre class="prettyprint"><code/></pre>').text(code).insertAfter(element);
					$('<h3 class="clickable">'+type+'&hellip;</h3>').insertBefore(fragment).click(function() {
						fragment.slideToggle();
					});
				}

				// extract html fragments
				$('div.prettyprint, span.prettyprint').each(function() {
					visualizeElement(this, 'HTML');
				});

				// extract scripts
				$('script.prettyprint').each(function() {
					visualizeElement(this, 'Javascript');
				});

				// Include the readme
				var markdown = new Markdown.Converter();
				$.get('README.md', function(readme) {
					$('#readme').html(markdown.makeHtml(readme));
					$('#readme h1').each(function() {
						$(this).nextUntil('h1').wrapAll('<div class="chapter"/>');
					});
					$('#readme pre').addClass('prettyprint');
					prettyPrint();

					// build menu
					var menuitems = [];
					$('h1').each(function() {
						var text	= $(this).text(),
							id		= $(this).attr('id') || 'chapter '+text;
						$(this).attr('id', id);
						menuitems.push('<a href="#'+id+'">'+text+'</a>');
					});
					$(menu).html(menuitems.join(' &mdash; '));
				}, 'html');
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
