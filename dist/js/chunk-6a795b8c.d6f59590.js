(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a795b8c"],{7803:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("register")],1)},a=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container nav-acc-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},[r("form",{staticClass:"text-center border border-primary p-5",staticStyle:{"margin-top":"70px",height:"auto","padding-top":"100px !important"},on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.name,expression:"register.name"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"name",placeholder:"Name",required:""},domProps:{value:e.register.name},on:{input:function(t){t.target.composing||e.$set(e.register,"name",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"form-control mb-5",attrs:{type:"email",id:"email",placeholder:"Email",required:""},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control mb-5",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),r("p",[e._v(" Already have an account??"),r("router-link",{attrs:{to:"/"}},[e._v("click here")]),r("center",[r("button",{staticClass:"btn btn-primary btn-block w-75 my-4",attrs:{type:"submit"}},[e._v(" Sign in ")])])],1)])])])])},i=[],o=(r("96cf"),r("1da1")),c=r("1940"),l=r.n(c),u={data:function(){return{register:{name:"",email:"",password:""}}},methods:{registerUser:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$http.post("/user/register",this.register);case 3:t=e.sent,r=t.data.token,r?(localStorage.setItem("jwt",r),this.$router.push("/"),l()("Success","Registration Was successful","success")):l()("Error","Something Went Wrong","Error"),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),s=e.t0.response,409==s.status?l()("Error",s.data.message,"error"):l()("Error",s.data.err.message,"error");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}},m=u,p=(r("f1d9"),r("2877")),d=Object(p["a"])(m,n,i,!1,null,null,null),g=d.exports,v={components:{register:g}},f=v,h=Object(p["a"])(f,s,a,!1,null,null,null);t["default"]=h.exports},d7c7:function(e,t,r){},f1d9:function(e,t,r){"use strict";var s=r("d7c7"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-6a795b8c.d6f59590.js.map