webpackJsonp([9],{495:function(t,e,r){var s,a;s=r(653);var i=r(708);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},518:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67);r.n(s);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(s.mapGetters)({about:"getAbout"})}},519:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67);r.n(s);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(s.mapGetters)({about:"getAbout"}),data:function(){return{footer_nav:[{url:"/about",title:"About Us"},{url:"#",title:"Sitemap"},{url:"#",title:"Privacy Policy"},{url:"/contact",title:"Contact"}]}}}},520:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(525),a=r.n(s),i=r(524),o=r.n(i),n=r(528),c=r.n(n),l=r(529),u=r.n(l),f=r(530),d=r.n(f),p=r(527),m=r.n(p);e.default={components:{FooterCopyright:a.a,FooterContact:o.a,FooterSocial:c.a,FooterSubscribe:u.a,FooterTwitter:d.a,FooterInstagram:m.a}}},521:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67);r.n(s);e.default={created:function(){try{this.$store.dispatch("receiveInstagram")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(s.mapGetters)({gallery:"getGallery"})}},522:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67);r.n(s);e.default={created:function(){try{this.$store.dispatch("receiveMySocials")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(s.mapGetters)({socials:"getSocials"})}},523:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67);r.n(s);e.default={created:function(){try{this.$store.dispatch("receiveTwitter")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(s.mapGetters)({socials:"getSocials"})}},524:function(t,e,r){var s,a;s=r(518);var i=r(537);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},525:function(t,e,r){var s,a;s=r(519);var i=r(536);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},526:function(t,e,r){var s,a;s=r(520);var i=r(531);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},527:function(t,e,r){var s,a;s=r(521);var i=r(535);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},528:function(t,e,r){var s,a;s=r(522);var i=r(533);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},529:function(t,e,r){var s,a,i=r(534);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},530:function(t,e,r){var s,a;s=r(523);var i=r(532);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"bounceInUp animated",staticStyle:{visibility:"visible","animation-duration":"2s","animation-name":"bounceInUp"},attrs:{"data-wow-duration":"2s"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row footer-widgets"},[r("div",{staticClass:"col-md-3 col-xs-12"},[r("footer-subscribe")],1),r("div",{staticClass:"col-md-3 col-xs-12"},[r("footer-twitter")],1),r("div",{staticClass:"col-md-3 col-xs-12"},[r("footer-instagram")],1),r("div",{staticClass:"col-md-3 col-xs-12"},[r("footer-contact"),r("footer-social")],1)]),r("footer-copyright")],1)])},staticRenderFns:[]}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-widget twitter-widget"},[t._m(0),r("ul",t._l(t.socials.twitter.msgs,function(e){return r("li",[r("p",[r("a",{attrs:{href:t.socials.twitter.url}},[t._v(t._s(t.socials.twitter.tag)+" ")]),t._v(" "+t._s(e.title))]),r("span",[r("i",{staticClass:"fa fa-clock-o"}),t._v(" "+t._s(e.date))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("Twitter "),r("i",{staticClass:"fa fa-twitter-square"}),t._v(" Feed"),r("span",{staticClass:"head-line"})])}]}},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-widget social-widget"},[t._m(0),r("ul",{staticClass:"social-icons"},t._l(t.socials.my,function(t,e){return r("li",[r("a",{class:e,attrs:{href:t.url}},[r("i",{class:["fa",t.icon]})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("Follow Us"),r("span",{staticClass:"head-line"})])}]}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"footer-widget mail-subscribe-widget"},[r("h4",[t._v("About"),r("span",{staticClass:"head-line"})]),r("p",[t._v("Learn about the project's history, meet the maintaining teams, and find out how to use the Feathers framework.")])]),r("div",{staticClass:"footer-widget mail-subscribe-widget"},[r("h4",[t._v("Get in touch"),r("span",{staticClass:"head-line"})]),r("p",[t._v("Join our mailing list to stay up to date and get notices about our new releases!")]),r("form",{staticClass:"subscribe"},[r("input",{attrs:{type:"text",placeholder:"mail@example.com"}}),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Send"}})])])])}]}},535:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-widget instagram-widget"},[t._m(0),r("ul",{staticClass:"instagram-list"},t._l(t.gallery.instagram,function(t){return r("li",[r("a",{staticClass:"lightbox",attrs:{href:t}},[r("img",{attrs:{src:t,alt:""}})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("Insta "),r("i",{staticClass:"fa fa-instagram"}),t._v(" Gram"),r("span",{staticClass:"head-line"})])}]}},536:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"copyright-section"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("p",[t._v(t._s(t.about.personal_data.copyright)+"    |    Designed With "),r("i",{staticClass:"fa fa-heart red"}),t._v(" By\n                "),r("a",{attrs:{target:"_blank",href:t.about.personal_data.designed_with_url}},[t._v(" "+t._s(t.about.personal_data.designed_with))])])]),r("div",{staticClass:"col-md-6"},[r("ul",{staticClass:"footer-nav"},[t._m(0),t._l(t.footer_nav,function(e){return r("li",[r("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/"}},[r("i",{staticClass:"fa fa-home"})])])}]}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-widget contact-widget"},[t._m(0),r("ul",[r("li",[t._m(1),t._v(" "+t._s(t.about.personal_data.contact.location)+" ")]),r("li",[t._m(2),t._v(" "+t._s(t.about.personal_data.contact.phone))]),r("li",[t._m(3),t._v(" "+t._s(t.about.personal_data.contact.email))]),r("li",[t._m(4),t._v(" "+t._s(t.about.personal_data.contact.website))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("Contact Us"),r("span",{staticClass:"head-line"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-map-marker"}),t._v(" Location:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-phone"}),t._v(" Phone Number:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-envelope-o"}),t._v(" Email:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-globe"}),t._v(" Website:")])}]}},538:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(178),a=r.n(s),i=r(67);r.n(i);e.default={created:function(){try{this.$store.dispatch("receiveCustomers")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},mounted:function(){try{this.iniSlider({id:"#customers",opts:{lazyLoad:!0,pagination:!0,autoPlay:2e3,stopOnHover:!0}})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(i.mapGetters)({customers:"getCustomers"}),methods:a()({},r.i(i.mapActions)(["iniSlider"]))}},539:function(t,e,r){var s,a;s=r(538);var i=r(540);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},540:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section section-customers"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-xs-12"},[r("div",{staticClass:"owl-carousel owl-carousel-featured",attrs:{id:"customers"}},t._l(t.customers,function(t){return r("div",{staticClass:"item"},[r("a",{attrs:{href:t.url}},[r("img",{attrs:{alt:"",src:t.img}})])])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-12"},[r("h2",{staticClass:"page-header"},[t._v("Our Happy Customers")])])}]}},541:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67);r.n(s);e.default={computed:r.i(s.mapGetters)({portfolio:"getPortfolio"})}},542:function(t,e,r){var s,a;s=r(541);var i=r(543);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},543:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row text-center"},[r("div",{staticClass:"col-lg-12"},[r("ul",{staticClass:"pagination"},[r("li",[r("a",{attrs:{href:t.portfolio.pager.prev_url}},[t._v("«")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),r("li",[r("a",{attrs:{href:t.portfolio.pager.next_url}},[t._v("»")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"active"},[r("a",{attrs:{href:"#"}},[t._v("1")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("2")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("4")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("5")])])}]}},587:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(67),a=(r.n(s),r(542)),i=r.n(a);e.default={components:{PortfolioPager:i.a},created:function(){try{this.$store.dispatch("receivePortfolioItems",{id:1,nCol:2})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:r.i(s.mapGetters)({portfolio:"getPortfolio"})}},607:function(t,e,r){var s,a;s=r(587);var i=r(625);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},625:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container portfolio-2-col"},[t._l(t.portfolio.items,function(e){return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 img-portfolio"},[r("a",{attrs:{href:e.item1.url}},[r("img",{staticClass:"img-responsive img-hover",attrs:{src:e.item1.img,alt:""}})]),r("h3",[r("a",{attrs:{href:e.item1.url}},[t._v(t._s(e.item1.title))])]),r("p",{domProps:{innerHTML:t._s(e.item1.content)}})]),r("div",{staticClass:"col-md-6 img-portfolio"},[r("a",{attrs:{href:e.item2.url}},[r("img",{staticClass:"img-responsive img-hover",attrs:{src:e.item2.img,alt:""}})]),r("h3",[r("a",{attrs:{href:e.item2.url}},[t._v(t._s(e.item2.title))])]),r("p",{domProps:{innerHTML:t._s(e.item2.content)}})])])}),r("hr"),r("portfolio-pager")],2)},staticRenderFns:[]}},653:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(180),a=r.n(s),i=r(179),o=r.n(i),n=r(526),c=r.n(n),l=r(607),u=r.n(l),f=r(539),d=r.n(f);e.default={components:{PageNavigation:a.a,PageBreadcrumbs:o.a,PageFooter:c.a,PortfolioCol2List:u.a,PortfolioCustomers:d.a},data:function(){return{title:"Two Column Portfolio",description:"Lorem ipsum dolor sit ame"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],script:[{src:"/js/owl-carousel/owl.carousel.js"}],link:[{rel:"stylesheet",href:"/js/owl-carousel/owl.carousel.css"},{rel:"stylesheet",href:"/js/owl-carousel/owl.theme.css"}]}}}},708:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("page-navigation",{attrs:{groupMenu:"portfolio"}}),r("page-breadcrumbs",{attrs:{title:t.title,description:t.description}}),r("div",[r("portfolio-col2-list"),r("portfolio-customers")],1),r("page-footer")],1)},staticRenderFns:[]}}});