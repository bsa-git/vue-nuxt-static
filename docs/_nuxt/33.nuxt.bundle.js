webpackJsonp([33],{490:function(t,e,s){var r,i;r=s(648);var n=s(689);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=r},648:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67),i=(s.n(r),s(180)),n=s.n(i),o=s(179),a=s.n(o);e.default={components:{PageNavigation:n.a,PageBreadcrumbs:a.a},data:function(){return{title:"",description:""}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},created:function(){this.system.error?(this.title=this.system.error.statusCode?this.system.error.statusCode:this.system.error.name,this.description=this.system.error.message):this.title="No Error"},computed:s.i(r.mapGetters)({system:"getSystem"}),beforeDestroy:function(){this.$store.commit("CLEAR_ERROR")}}},689:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-navigation"),s("page-breadcrumbs",{attrs:{title:t.title,description:t.description}}),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"error-page text-center"},[t.system.error?s("h1",[t._v(t._s(t.system.error.statusCode))]):s("h3",[t._v("No Error")]),t.system.error?s("h3",[t._v(t._s(t.system.error.name))]):t._e(),t.system.error?s("p",[t._v(t._s(t.description))]):t._e(),s("br"),s("div",{staticClass:"text-center"},[s("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[t._v("Back To Home\n                            ")])],1)])])])])])],1)},staticRenderFns:[]}}});