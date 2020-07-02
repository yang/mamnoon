<template>
<div>



<div>
<h4>plan ahead - family meal calendar</h4>
	</div>

<div class="title">{{title}}</div>
<div class="description">{{description}}</div>
<a v-key="tock" v-for="tock in $store.state.inventory.tockMeals" :href="'https://www.exploretock.com/mamnoonrestaurant/experience/' + tock.createdLink">
{{tock.titleNameCreated}}
</a><br>
	<div id="container"></div>
    <div style="width:480px;display:none;">
		<div style="float:right;">Focused: <b id="focusindex">0</b> | Clicked: <b id="clickindex">0</b></div>
		<!-- <p>
			<a href="javascript:;" @click="coverflow().left();">Left</a> - <a href="javascript:;" @click="coverflow().right();">Right</a>
		</p>
		<p>
			<a href="javascript:;" @click="coverflow().prev();">Previous</a> - <a href="javascript:;" @click="coverflow().next();">Next</a>
		</p>
		<p>
			<input id="toval" value="0" size="1"> <a href="javascript:;" @click="coverflow().to(document.getElementById('toval').value);">To</a>
		</p> -->
	</div>
	
	<!-- <button @click="reset()">Reset</button> -->
	<!-- <button @click="coverflow().remove()">Remove</button> -->




  <!-- <section :id="offering.category" v-for="(offering,index) in inventory.offerings" v-bind:key="offering.title" class="section hero is-primary is-fullheight" v-bind:class="{familymeal : index === 0}"> -->





  </div>
</template>


<script>






export default {
		name: 'coverflow',
		data(){
			return{
			productsList: this.products.items,
			title: this.products.items[0].title,
			description: this.products.items[0].description
		}
		},
  mounted(){
	  this.reset();
  },
  	props: ['products'],
  methods: {
	  returnProducts(index) {
// console.log(this.title[index].title)

this.title = this.products.items[index].title
this.description = this.products.items[index].description




// this.title = this.title[index]
	  },
	  reset () {


		let that = this
			coverflow('container').remove();
			
			//$('#container').coverflow({
			coverflow('container').setup({
				width: '100%',
				item: 0,
				rotatedelay: 0,
				backgroundcolor: '#F05D5B',
				reflectionopacity: 0,
				playlist: this.products.items,
				coverwidth: 240,
				coverheight: 200,
				fixedsize: false,
				textoffset: 50,
				coverangle: 50
			})
			.on('ready', function() {

				this.on('focus', function(index) {
					document.getElementById('focusindex').innerHTML = index;
					that.returnProducts(index)
				});
		});
	  }
  }
}
</script>


<style lang="scss">
.coverflow-text{
	display: none;
}

.title,
.description{
color: white;
text-align: center;
width: 80%;
margin: 0 auto;
}
.title{
	font-weight: bold;
	margin-bottom: 6px;
	margin-top: 12px;
}

#container.coverflow,
#container.coverflow:focus,
#container.coverflow:active{
	outline: none;
}
</style>