<template>
<div>



<div>
<h4>plan ahead - family meal calendar</h4>
	</div>
<div v-if="title" class="title">{{title}}</div>
<div v-if="description" class="description">{{description}}</div>
<!-- <div v-if="link !== 'loading...'" class="link"><a target="_blank" :href="link">Order</a></div> -->


<!-- {{ $store.state.inventory.tockMeals }} -->

<div :key="tock.titleNameCreated" v-for="tock in $store.state.inventory.tockMeals" style="display:none;">

	<a target="_blank" :href="tock.createdLink">
	{{tock.title}}
	</a>

	

</div>
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
        <div class="bottom-button">
	
				<!-- {{link.length}} -->
			<a :href="link" target="_blank">
        <div class="outer">
			
          <OrderStar />
          
          </div></a>

		
		  </div>

  </div>
</template>


<script>


import OrderStar from "@/components/svgIcons/OrderStar";




export default {
		name: 'coverflow',
		components:{
			OrderStar
		},
		data(){
			return{
			productsList: this.$store.state.inventory.tockMeals,
			title: this.$store.state.inventory.tockMeals.length > 0 ? this.$store.state.inventory.tockMeals[0].title : 'loading...',
			description: this.$store.state.inventory.tockMeals.length > 0 ? this.$store.state.inventory.tockMeals[0].title : 'loading...',
			link: this.$store.state.inventory.tockMeals.length > 0 ? this.$store.state.inventory.tockMeals[0].createdLink : 'loading...',

		}
		},
  mounted(){
	  this.reset();
	},
	  props: ['products'],
	   computed: {
    count () {
      return this.$store.state.inventory.tockMeals
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
	watch: {
    count (newCount, oldCount) {

	  this.productsList = newCount
	  this.title = newCount[0].title
	  this.description = newCount[0].title
	  this.link = newCount[0].createdLink
      this.reset();
    }
  },
  methods: {
		returnProducts(index) {

// console.log(this.title[index].title)

this.title = this.$store.state.inventory.tockMeals[index].title
this.description = this.$store.state.inventory.tockMeals[index].title
this.link = this.$store.state.inventory.tockMeals[index].createdLink

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
				// playlist: this.products.items,
				playlist: this.$store.state.inventory.tockMeals,
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
.description,
.link{
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