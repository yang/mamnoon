<template>
<div>
<div class="position-relative">
<a class="left-button" onclick="coverflow().prev();"><Prev /></a>
<a class="right-button" onclick="coverflow().next();"><Next /></a>
<h4 class="noselect">family meal calendar</h4>

	</div>
<div v-if="title" class="title noselect">
<a :href="link" target="_blank">	
	<span v-if="delivery">[DELIVERY]</span><span v-else>[PICKUP]</span> {{title | truncate(40, '...')}}
</a>
</div>
<div v-if="description" class="description noselect">{{description | truncate(80, '...')}}</div>

<!-- <div v-if="link !== 'loading...'" class="link"><a target="_blank" :href="link">Order</a></div> -->
<!-- {{ $store.state.inventory.tockMeals }} -->
	<div id="container"></div>
    <div style="width:480px;">
		<!-- <div style="float:right;">Focused: <b id="focusindex">0</b> | Clicked: <b id="clickindex">0</b></div> -->



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
import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";



export default {
		name: 'coverflow',
		components:{
			OrderStar,
			Prev,
			Next
		},
		data(){
			return{
			productsList: this.$store.state.inventory.tockMeals,
			title: this.$store.state.inventory.tockMeals.length > 0 ? this.$store.state.inventory.tockMeals[0].title : 'loading...',
			description: this.$store.state.inventory.tockMeals.length > 0 ? this.$store.state.inventory.tockMeals[0].description : 'loading...',
			link: this.$store.state.inventory.tockMeals.length > 0 ? this.$store.state.inventory.tockMeals[0].createdLink : 'loading...',
			delivery: this.$store.state.inventory.tockMeals.length > 0 ? this.$store.state.inventory.tockMeals[0].delivery : 'loading...',
		}
		},
  mounted(){
	  this.reset();
	},
	  props: ['products'],
	   computed: {
    count () {
      return this.$store.state.inventory.tockMeals

    }
  },
	watch: {
    count (newCount, oldCount) {

	  this.productsList = newCount
	  this.title = newCount[0].title
	  this.description = newCount[0].description
	  this.link = newCount[0].createdLink
	  this.delivery = newCount[0].delivery
      this.reset();
    }
  },
created() {
  window.addEventListener("resize", this.myEventHandler);
},
destroyed() {
  window.removeEventListener("resize", this.myEventHandler);
},
  methods: {
	    myEventHandler(e) {
	//   this.reset();
	//   console.log('resize compoent')
  },
		returnProducts(index) {


this.title = this.$store.state.inventory.tockMeals[index].title
this.description = this.$store.state.inventory.tockMeals[index].description
this.link = this.$store.state.inventory.tockMeals[index].createdLink
this.delivery = this.$store.state.inventory.tockMeals[index].delivery

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
				playlist: this.$store.state.inventory.tockMeals,
				coverwidth: 240,
				coverheight: 200,
				fixedsize: false,
				textoffset: 50,
				coverangle: 50
			})
			.on('ready', function() {

				this.on('focus', function(index) {
					// document.getElementById('focusindex').innerHTML = index;
					that.returnProducts(index)
				});

				this.on('click', function(index, link) {
					document.getElementById('clickindex').innerHTML = index;
					
					console.log(link);
					if (link) {
						window.open(link, '_blank');
					}
				});

		});
	  }
  }
}
</script>


<style lang="scss">


.left-button{
cursor: pointer;
position: absolute;
left: 25%;
}





.right-button{
cursor: pointer;
position: absolute;
right: 25%;
}



@media only screen and (max-width: 768px) {
	.left-button{
		left: 5%;
	}

	.right-button{
		right: 5%;
	}
}

.position-relative{
	position: relative;
}

.coverflow-text{
	display: none;
}

.title,
.description,
.delivery,
.link{
color: white;
text-align: center;
width: 60%;
margin: 0 auto;


a{
color: white;

&:hover{
color: white;
text-decoration: underline;	
}
}
}


@media only screen and (max-width: 1080px) {
.title,
.description,
.delivery,
.link{
width: 80%;
}
}


.title{
    margin-bottom: 6px;
    // margin-top: 12px;
	margin-top: 22px;
    // font-size: 24px;
    font-size: 20px;

}

#container.coverflow,
#container.coverflow:focus,
#container.coverflow:active{
	outline: none;
	overflow: hidden;
    margin-top: 40px;
	.coverflow-wrap{
		transform: scale(1.75);
	}
}




@media only screen and (max-width: 1080px) {

#container.coverflow,
#container.coverflow:focus,
#container.coverflow:active{
	.coverflow-wrap{
		transform: scale(1.5);
	}
}

}




@media only screen and (max-width: 768px) {

#container.coverflow,
#container.coverflow:focus,
#container.coverflow:active{
	.coverflow-wrap{
		transform: scale(1);
	}
}

}



</style>