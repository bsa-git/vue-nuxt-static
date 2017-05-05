webpackJsonp([24],{512:function(t,e,r){var s,o;s=r(670);var i=r(684);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},538:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(178),o=r.n(s),i=r(67);r.n(i);e.default={created:function(){try{this.$store.dispatch("receiveCustomers")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},mounted:function(){try{this.iniSlider({id:"#customers",opts:{lazyLoad:!0,pagination:!0,autoPlay:2e3,stopOnHover:!0}})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(i.mapGetters)({customers:"getCustomers"}),methods:o()({},r.i(i.mapActions)(["iniSlider"]))}},539:function(t,e,r){var s,o;s=r(538);var i=r(540);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},540:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section section-customers"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-xs-12"},[r("div",{staticClass:"owl-carousel owl-carousel-featured",attrs:{id:"customers"}},t._l(t.customers,function(t){return r("div",{staticClass:"item"},[r("a",{attrs:{href:t.url}},[r("img",{attrs:{alt:"",src:t.img}})])])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-12"},[r("h2",{staticClass:"page-header"},[t._v("Our Happy Customers")])])}]}},541:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67);r.n(s);e.default={computed:r.i(s.mapGetters)({portfolio:"getPortfolio"})}},542:function(t,e,r){var s,o;s=r(541);var i=r(543);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},543:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row text-center"},[r("div",{staticClass:"col-lg-12"},[r("ul",{staticClass:"pagination"},[r("li",[r("a",{attrs:{href:t.portfolio.pager.prev_url}},[t._v("«")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),r("li",[r("a",{attrs:{href:t.portfolio.pager.next_url}},[t._v("»")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"active"},[r("a",{attrs:{href:"#"}},[t._v("1")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("2")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("4")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("5")])])}]}},587:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67),o=(r.n(s),r(542)),i=r.n(o);e.default={components:{PortfolioPager:i.a},created:function(){try{this.$store.dispatch("receivePortfolioItems",{id:1,nCol:2})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(s.mapGetters)({portfolio:"getPortfolio"})}},607:function(t,e,r){var s,o;s=r(587);var i=r(625);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},625:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container portfolio-2-col"},[t._l(t.portfolio.items,function(e){return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 img-portfolio"},[r("a",{attrs:{href:e.item1.url}},[r("img",{staticClass:"img-responsive img-hover",attrs:{src:e.item1.img,alt:""}})]),r("h3",[r("a",{attrs:{href:e.item1.url}},[t._v(t._s(e.item1.title))])]),r("p",{domProps:{innerHTML:t._s(e.item1.content)}})]),r("div",{staticClass:"col-md-6 img-portfolio"},[r("a",{attrs:{href:e.item2.url}},[r("img",{staticClass:"img-responsive img-hover",attrs:{src:e.item2.img,alt:""}})]),r("h3",[r("a",{attrs:{href:e.item2.url}},[t._v(t._s(e.item2.title))])]),r("p",{domProps:{innerHTML:t._s(e.item2.content)}})])])}),r("hr"),r("portfolio-pager")],2)},staticRenderFns:[]}},670:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(607),o=r.n(s),i=r(539),n=r.n(i);e.default={components:{PortfolioCol2List:o.a,PortfolioCustomers:n.a},data:function(){return{title:"Two Column Portfolio",description:"Lorem ipsum dolor sit ame"}},head:function(){return{script:[{src:"/js/owl-carousel/owl.carousel.js"}],link:[{rel:"stylesheet",href:"/js/owl-carousel/owl.carousel.css"},{rel:"stylesheet",href:"/js/owl-carousel/owl.theme.css"}]}},created:function(){this.$parent.title=this.title,this.$parent.description=this.description}}},684:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("portfolio-col2-list"),r("portfolio-customers")],1)},staticRenderFns:[]}}});