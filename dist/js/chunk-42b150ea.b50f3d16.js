(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b150ea"],{"07a7":function(t,e,n){"use strict";var i=n("1872"),a=n.n(i);a.a},1872:function(t,e,n){},d5a4:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mamnoon"},[n("Nav3"),n("FeaturedMobile")],1)},a=[],r=(n("4d90"),n("0caa")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",[n("div",{staticClass:"container mt-5 mobilePage"},[n("div",{staticStyle:{display:"none",position:"fixed",top:"100px","z-index":"10000",width:"100%",background:"pink"}},[t._v(" "+t._s(t.visibility)+" ")]),t._l(t.pageData,(function(e){return n("div",{key:e.acf_fc_layout},["meal_calendar"===e.acf_fc_layout?n("CoverFlowCarousel",{attrs:{visible:t.visibility.planahead,header:e.header,feature:e.feature,descriptionbody:e.description,data:e.meal_calendar,tag:e.tagname}}):t._e()],1)}))],2)])])},o=[],c=(n("96cf"),n("1da1")),u=n("6591"),l={components:{CoverFlowCarousel:u["a"]},computed:{count:function(){return this.$store.state.count},names:function(){return this.$store.state.names},cart:function(){return this.$store.state.cart}},data:function(){return{pageData:null,testimonials:null,inventory:this.$store.state.inventory,blockedBody:this.apiData,upserve:null,upserveCategories:[],currentlyFiltered:[],visibility:{testimonials:!1,planahead:!1,reservations:!1,shop:!1,finefoods:!1,fullonlinemenu:!1,newsletter:!1}}},props:["apiData","blok"],methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},visibilityChanged:function(t,e){this.isVisible=t,this.visibility[e.target.id]=e.isIntersecting},individualRestaurant:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://mamnoontogo.net/wp-json/acf/v3/restaurant/188");case 2:n=e.sent,i=n,t.pageData=i.data.acf.content_fields;case 5:case"end":return e.stop()}}),e)})))()},filterByCat:function(t){this.currentlyFiltered=[];for(var e=0;e<this.upserve.length;e++)this.upserve[e].category===t&&this.currentlyFiltered.push(this.upserve[e])},dayChange:function(t){this.currentDay=t+1},toggle:function(t){t.target.classList.contains("is-open")?(this.$store.commit("decrement"),t.target.classList.remove("is-open")):(t.target.classList.add("is-open"),this.$store.commit("increment"))},increment:function(){this.$store.commit("increment")},decrement:function(){this.$store.commit("decrement")},increment2:function(t){this.$store.commit("increment2",{name:t})},removeFromCart:function(t){this.$store.commit("removeFromCart",{price:t})},confirmOrder:function(t){event.target.classList.contains("reserved")?this.$store.commit("unreserveFamilyMeal",{timeslot:t}):this.$store.commit("reserveFamilyMeal",{timeslot:t})},changedAlert:function(){console.log("changed")}},created:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0");this.currentDay=e},mounted:function(){this.individualRestaurant()}},d=l,m=(n("07a7"),n("2877")),f=Object(m["a"])(d,s,o,!1,null,null,null),h=f.exports,p={name:"SlideShow",components:{FeaturedMobile:h,Nav3:r["a"]},data:function(){return{story:{content:{body:[]}}}},created:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0");this.currentDay=e}},v=p,g=Object(m["a"])(v,i,a,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-42b150ea.b50f3d16.js.map