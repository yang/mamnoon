(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8211d86"],{"14f2":function(r,e,a){},"6ec9":function(r,e,a){"use strict";var o=function(){var r=this,e=r.$createElement,a=r._self._c||e;return r.orderConfirmationModal?a("div",{staticClass:"order-confirmation-modal"},[a("div",{staticClass:"container online-menu order-modal-width",staticStyle:{padding:"10px"}},[a("div",{staticClass:"close closeModal closeModalConfirmation"},[a("router-link",{attrs:{to:"/"}},[a("CloseModal2")],1)],1),a("h4",{staticClass:"order-conf-header"},[r._v("order confirmation")])]),a("div",{staticClass:"container modal-body order-modal-width order-modal-body"},[r.orderCMR.preorder?a("h2",[r._v("your order has been scheduled.")]):r._e(),r.orderCMR.preorder?a("div",{staticClass:"mb-15"},[r._v("it will be ready on "),a("b",[r._v(r._s(r._f("formatDate")(r.orderCMR.scheduled_time)))]),a("br")]):a("h2",[r._v("thank you for your order.")]),a("div",[a("b",[r._v(r._s(r.orderCMR.fulfillment_info.customer.email))]),r._v(" "),a("br"),a("b",[r._v(r._s(r.orderCMR.fulfillment_info.customer.phone))]),r.orderCMR.charges.items?a("ul",{staticClass:"no-left-pad"},r._l(r.orderCMR.charges.items,(function(e){return a("li",{key:e.name,staticClass:"modal-item"},[r._v(" "+r._s(e.name)+" ")])})),0):r._e(),r._v(" "+r._s(r.retail)+" "),r.retail?a("b",[r._v("tip: $"+r._s(r.orderCMR.charges.tip.amount.toFixed(2)/100))]):r._e(),a("br"),a("b",[r._v("taxes: $"+r._s(r.orderCMR.charges.taxes.toFixed(2)/100))]),a("br"),a("b",[r._v("total: $"+r._s(r.orderCMR.charges.total.toFixed(2)/100))]),a("br"),r.orderCMR.charges.shipping>0?a("b",[r._v("shipping: $"+r._s(r.orderCMR.charges.shipping))]):r._e(),a("br"),a("br"),a("hr"),r.orderCMR.giftcardbalance?a("span",[r._v("current giftcard balance: "+r._s(r.orderCMR.giftcardbalance))]):a("span",[r._v("credit transaction")])])])]):r._e()},t=[],n=(a("ac1f"),a("5319"),function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",[a("svg",{attrs:{id:"closemodalredBig23",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44.11 44.11"}},[a("defs"),a("title",[r._v("Close Modal")]),a("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[a("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[a("polygon",{staticClass:"cls-1closeModalRedModal",attrs:{points:"44.11 38.71 27.46 22.05 44.11 5.4 38.71 0 22.05 16.65 5.4 0 0 5.4 16.65 22.05 0 38.71 5.4 44.11 22.05 27.46 38.71 44.11 44.11 38.71"}})])])])])}),i=[],s={name:"CloseModal"},d=s,l=(a("acae"),a("2877")),c=Object(l["a"])(d,n,i,!1,null,null,null),f=c.exports,m=a("c1df"),u=a.n(m),_=(a("7f45"),{name:"OrderConfirmationModal",props:["orderConfirmationModal","orderCMR","retail"],components:{CloseModal2:f},methods:{closeConfirmationModal:function(){this.orderConfirmationModal=!1,this.orderCMR=""}},filters:{formatDate:function(r){if(r){var e=u()(String(r));return e.tz("America/Los_Angeles").format("LLLL").replace(", 2020",", at")}}}}),C=_,v=(a("fb9c"),Object(l["a"])(C,o,t,!1,null,"3f742957",null));e["a"]=v.exports},"812a":function(r,e,a){},acae:function(r,e,a){"use strict";var o=a("14f2"),t=a.n(o);t.a},c76b:function(r,e,a){"use strict";a.r(e);var o=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",{staticClass:"login"},[a("Nav3"),a("OrderConfirmationModal",{attrs:{orderConfirmationModal:r.orderConfirmationModal,orderCMR:this.$store.state.orderCMR}})],1)},t=[],n=a("6ec9"),i=a("0caa"),s={data:function(){return{orderConfirmationModal:!0}},components:{Nav3:i["a"],OrderConfirmationModal:n["a"]},mounted:function(){}},d=s,l=a("2877"),c=Object(l["a"])(d,o,t,!1,null,null,null);e["default"]=c.exports},fb9c:function(r,e,a){"use strict";var o=a("812a"),t=a.n(o);t.a}}]);
//# sourceMappingURL=chunk-f8211d86.d581529b.js.map