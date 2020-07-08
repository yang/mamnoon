<template>
<div>
<div class="position-relative">



    <button class="toggleVeg" @click="toggleVegetarian">
        <span v-if="$store.state.vegetarian === true">
            M + V
            </span>
        <span v-else>
            V
            </span>


            </button>


<a class="left-button" onclick="coverflow().prev();"><Prev /></a>
<a class="right-button" onclick="coverflow().next();"><Next /></a>
<h4 class="noselect">family meal calendar, {{vegetarian}}</h4>
	</div>
<div v-if="title" class="title noselect">
<a :href="link" target="_blank">	
	<span v-if="delivery">[DELIVERY]</span><span v-else>[PICKUP]</span> {{title}}
</a>
</div>
<div v-if="description" class="description noselect">{{description | truncate(80, '...')}}</div>

	<div id="container"></div>
    <div style="width:480px;">

	</div>

        <div class="bottom-button">
	

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

		if(this.$store.state.vegetarian === true){
			const map1 = this.$store.state.inventory.tockMeals.filter(function(x){
			if(x.veg === true)
			return x
			});
			this.productsList = map1
			this.title = map1[0].title
			this.description = map1[0].description
			this.link = map1[0].createdLink
			this.delivery = map1[0].delivery
			
			this.reset(map1)
		}else{
			this.productsList = this.$store.state.inventory.tockMeals

			this.title = this.$store.state.inventory.tockMeals[0].title
			this.description = this.$store.state.inventory.tockMeals[0].description
			this.link = this.$store.state.inventory.tockMeals[0].createdLink
			this.delivery = this.$store.state.inventory.tockMeals[0].delivery

			this.reset(this.productsList)
		}

	},
	  props: ['products'],
	   computed: {
    count () {
      return this.$store.state.inventory.tockMeals

	},
	vegetarian () {
		return this.$store.state.vegetarian
	}
  },
	watch: {
    count (newCount, oldCount) {

	  this.productsList = newCount
	  this.title = newCount[0].title
	  this.description = newCount[0].description
	  this.link = newCount[0].createdLink
	  this.delivery = newCount[0].delivery
	  this.reset(newCount);
	  
	},
	vegetarian() {

		if(this.$store.state.vegetarian === true){

			const map1 = this.$store.state.inventory.tockMeals.filter(function(x){
			if(x.veg === true)
			return x
			});
			this.productsList = map1

			this.title = map1[0].title
			this.description = map1[0].description
			this.link = map1[0].createdLink
			this.delivery = map1[0].delivery
			this.reset(map1)

		}else{

			this.productsList = this.$store.state.inventory.tockMeals
			this.title = this.$store.state.inventory.tockMeals[0].title
			this.description = this.$store.state.inventory.tockMeals[0].description
			this.link = this.$store.state.inventory.tockMeals[0].createdLink
			this.delivery = this.$store.state.inventory.tockMeals[0].delivery
			this.reset(this.productsList)
		}
	
	}
  },
created() {
  window.addEventListener("resize", this.myEventHandler);
},
destroyed() {
  window.removeEventListener("resize", this.myEventHandler);
},
  methods: {
	      toggleVegetarian () {
    this.$store.commit('toggleVegetarian')
    },
		returnProducts(index) {
		if(this.$store.state.vegetarian === true){
			const map1 = this.$store.state.inventory.tockMeals.filter(function(x){
			if(x.veg === true)
			return x
			});
			this.productsList = map1
			this.title = map1[index].title
			this.description = map1[index].description
			this.link = map1[index].createdLink
			this.delivery = map1[index].delivery
			}else{
			this.title = this.$store.state.inventory.tockMeals[index].title
			this.description = this.$store.state.inventory.tockMeals[index].description
			this.link = this.$store.state.inventory.tockMeals[index].createdLink
			this.delivery = this.$store.state.inventory.tockMeals[index].delivery
		}
},
	  reset (x) {
		let that = this
			coverflow('container').remove();
			coverflow('container').setup({
				width: '100%',
				item: 0,
				rotatedelay: 0,
				backgroundcolor: '#F05D5B',
				reflectionopacity: 0,
				playlist: x,
				coverwidth: 240,
				coverheight: 200,
				fixedsize: false,
				textoffset: 50,
				coverangle: 50
			})
			.on('ready', function() {
				this.on('focus', function(index) {
					that.returnProducts(index)
				});
				this.on('click', function(index, link) {
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
    top: -2px;
}





.right-button{
cursor: pointer;
position: absolute;
right: 25%;
    top: -2px;
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

.toggleVeg{
	position: absolute;
	right: 10px;
	top: 0;
}

</style>