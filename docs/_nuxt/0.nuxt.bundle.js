webpackJsonp([0],{493:function(t,e,s){var a,i;a=s(651);var r=s(712);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},518:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({about:"getAbout"})}},519:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({about:"getAbout"}),data:function(){return{footer_nav:[{url:"/about",title:"About Us"},{url:"#",title:"Sitemap"},{url:"#",title:"Privacy Policy"},{url:"/contact",title:"Contact"}]}}}},520:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(525),i=s.n(a),r=s(524),n=s.n(r),o=s(528),c=s.n(o),l=s(529),d=s.n(l),u=s(530),f=s.n(u),m=s(527),p=s.n(m);e.default={components:{FooterCopyright:i.a,FooterContact:n.a,FooterSocial:c.a,FooterSubscribe:d.a,FooterTwitter:f.a,FooterInstagram:p.a}}},521:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveInstagram")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({gallery:"getGallery"})}},522:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveMySocials")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({socials:"getSocials"})}},523:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveTwitter")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({socials:"getSocials"})}},524:function(t,e,s){var a,i;a=s(518);var r=s(537);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},525:function(t,e,s){var a,i;a=s(519);var r=s(536);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},526:function(t,e,s){var a,i;a=s(520);var r=s(531);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},527:function(t,e,s){var a,i;a=s(521);var r=s(535);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},528:function(t,e,s){var a,i;a=s(522);var r=s(533);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},529:function(t,e,s){var a,i,r=s(534);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},530:function(t,e,s){var a,i;a=s(523);var r=s(532);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"bounceInUp animated",staticStyle:{visibility:"visible","animation-duration":"2s","animation-name":"bounceInUp"},attrs:{"data-wow-duration":"2s"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row footer-widgets"},[s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-subscribe")],1),s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-twitter")],1),s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-instagram")],1),s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-contact"),s("footer-social")],1)]),s("footer-copyright")],1)])},staticRenderFns:[]}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget twitter-widget"},[t._m(0),s("ul",t._l(t.socials.twitter.msgs,function(e){return s("li",[s("p",[s("a",{attrs:{href:t.socials.twitter.url}},[t._v(t._s(t.socials.twitter.tag)+" ")]),t._v(" "+t._s(e.title))]),s("span",[s("i",{staticClass:"fa fa-clock-o"}),t._v(" "+t._s(e.date))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Twitter "),s("i",{staticClass:"fa fa-twitter-square"}),t._v(" Feed"),s("span",{staticClass:"head-line"})])}]}},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget social-widget"},[t._m(0),s("ul",{staticClass:"social-icons"},t._l(t.socials.my,function(t,e){return s("li",[s("a",{class:e,attrs:{href:t.url}},[s("i",{class:["fa",t.icon]})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Follow Us"),s("span",{staticClass:"head-line"})])}]}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"footer-widget mail-subscribe-widget"},[s("h4",[t._v("About"),s("span",{staticClass:"head-line"})]),s("p",[t._v("Learn about the project's history, meet the maintaining teams, and find out how to use the Feathers framework.")])]),s("div",{staticClass:"footer-widget mail-subscribe-widget"},[s("h4",[t._v("Get in touch"),s("span",{staticClass:"head-line"})]),s("p",[t._v("Join our mailing list to stay up to date and get notices about our new releases!")]),s("form",{staticClass:"subscribe"},[s("input",{attrs:{type:"text",placeholder:"mail@example.com"}}),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Send"}})])])])}]}},535:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget instagram-widget"},[t._m(0),s("ul",{staticClass:"instagram-list"},t._l(t.gallery.instagram,function(t){return s("li",[s("a",{staticClass:"lightbox",attrs:{href:t}},[s("img",{attrs:{src:t,alt:""}})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Insta "),s("i",{staticClass:"fa fa-instagram"}),t._v(" Gram"),s("span",{staticClass:"head-line"})])}]}},536:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copyright-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("p",[t._v(t._s(t.about.personal_data.copyright)+"    |    Designed With "),s("i",{staticClass:"fa fa-heart red"}),t._v(" By\n                "),s("a",{attrs:{target:"_blank",href:t.about.personal_data.designed_with_url}},[t._v(" "+t._s(t.about.personal_data.designed_with))])])]),s("div",{staticClass:"col-md-6"},[s("ul",{staticClass:"footer-nav"},[t._m(0),t._l(t.footer_nav,function(e){return s("li",[s("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"/"}},[s("i",{staticClass:"fa fa-home"})])])}]}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget contact-widget"},[t._m(0),s("ul",[s("li",[t._m(1),t._v(" "+t._s(t.about.personal_data.contact.location)+" ")]),s("li",[t._m(2),t._v(" "+t._s(t.about.personal_data.contact.phone))]),s("li",[t._m(3),t._v(" "+t._s(t.about.personal_data.contact.email))]),s("li",[t._m(4),t._v(" "+t._s(t.about.personal_data.contact.website))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Contact Us"),s("span",{staticClass:"head-line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-map-marker"}),t._v(" Location:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-phone"}),t._v(" Phone Number:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-envelope-o"}),t._v(" Email:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-globe"}),t._v(" Website:")])}]}},538:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(178),i=s.n(a),r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receiveCustomers")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},mounted:function(){try{this.iniSlider({id:"#customers",opts:{lazyLoad:!0,pagination:!0,autoPlay:2e3,stopOnHover:!0}})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({customers:"getCustomers"}),methods:i()({},s.i(r.mapActions)(["iniSlider"]))}},539:function(t,e,s){var a,i;a=s(538);var r=s(540);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},540:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section section-customers"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"owl-carousel owl-carousel-featured",attrs:{id:"customers"}},t._l(t.customers,function(t){return s("div",{staticClass:"item"},[s("a",{attrs:{href:t.url}},[s("img",{attrs:{alt:"",src:t.img}})])])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-12"},[s("h2",{staticClass:"page-header"},[t._v("Our Happy Customers")])])}]}},562:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(178),i=s.n(a),r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receiveSlider")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},mounted:function(){try{this.iniSlider({id:"#osahan-slider",opts:{slideSpeed:300,autoPlay:!0,pagination:!0,singleItem:!0}})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({slider:"getSlider"}),methods:i()({},s.i(r.mapActions)(["iniSlider"]))}},563:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveTeamInfo")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({team:"getTeam"})}},564:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveTeamMembers")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({team:"getTeam"})}},565:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveTeamSummary")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({team:"getTeam"})}},566:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67),i=(s.n(a),s(568)),r=s.n(i),n=s(569),o=s.n(n),c=s(570),l=s.n(c);e.default={components:{TeamInfo:r.a,TeamMembers:o.a,TeamSummary:l.a}}},567:function(t,e,s){var a,i;a=s(562);var r=s(572);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},568:function(t,e,s){var a,i;a=s(563);var r=s(575);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},569:function(t,e,s){var a,i;a=s(564);var r=s(573);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},570:function(t,e,s){var a,i;a=s(565);var r=s(574);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},571:function(t,e,s){var a,i;a=s(566);var r=s(576);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},572:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"osahan-slider"}},t._l(t.slider.items,function(e){return s("div",{staticClass:"item"},[s("img",{staticClass:"slider-img",attrs:{src:e.img.src,title:e.img.title,alt:e.img.alt}}),s("div",{staticClass:"carousel-text"},[s("div",{staticClass:"line"},[s("img",{attrs:{src:e.body.img_src,title:e.body.img_title,alt:"item.body.img_alt"}}),s("h1",{domProps:{innerHTML:t._s(e.body.title)}}),s("p",{domProps:{innerHTML:t._s(e.body.description)}}),s("div",{staticClass:"carousel-btns"},[s("a",{staticClass:"btn btn-default btn-lg",attrs:{href:e.body.read_more_url}},[t._v("Read More")]),s("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:e.body.live_demo_url}},[t._v("Live Demo")])])])])])}))},staticRenderFns:[]}},573:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"members"},t._l(t.team.members,function(e){return s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"member-block"},[s("p",[t._v(t._s(e.about))]),s("img",{attrs:{alt:e.img_alt,src:e.img_src}}),s("div",{staticClass:"details"},[s("h6",[t._v(t._s(e.name))]),s("span",{staticClass:"small-text"},[t._v(t._s(e.position))]),s("div",{staticClass:"social-widget"},[s("ul",{staticClass:"social-icons"},t._l(e.social_icons,function(t){return s("li",[s("a",{class:t.class,attrs:{href:t.url}},[s("i",{class:["fa",t.icon]})])])}))])])])])}))])},staticRenderFns:[]}},574:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"counters"},[s("div",{staticClass:"row"},t._l(t.team.summary,function(e){return s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"counter-block"},[s("i",{class:["fa",e.icon]}),s("h2",[t._v(t._s(e.sum))]),s("p",[t._v(t._s(e.title))])])])}))])},staticRenderFns:[]}},575:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intro"},[s("h1",[t._v(t._s(t.team.info.title))]),s("p",{domProps:{innerHTML:t._s(t.team.info.description)}})])},staticRenderFns:[]}},576:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section section-team"},[s("div",{staticClass:"spacer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-5"},[s("team-info")],1),s("div",{staticClass:"col-sm-6 col-sm-offset-1"},[s("team-summary")],1)]),s("team-members")],1)])])},staticRenderFns:[]}},636:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveBlogPosts",1)}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({blog:"getBlog"})}},637:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveGallery")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({gallery:"getGallery"})}},638:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveServicesHome")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({services:"getServices"})}},639:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(178),i=s.n(a),r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receiveTestimonials")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},mounted:function(){try{this.iniSlider({id:"#testimonials",opts:{slideSpeed:300,autoPlay:!0,navigation:!1,pagination:!0,singleItem:!0}})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({testimonials:"getTestimonials"}),methods:i()({},s.i(r.mapActions)(["iniSlider"]))}},640:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveWelcome")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({welcome:"getWelcome"})}},651:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(180),i=s.n(a),r=s(179),n=s.n(r),o=s(526),c=s.n(o),l=s(676),d=s.n(l),u=s(539),f=s.n(u),m=s(677),p=s.n(m),v=s(678),_=s.n(v),h=s(567),y=s.n(h),b=s(571),g=s.n(b),C=s(679),R=s.n(C),$=s(680),E=s.n($);e.default={components:{PageNavigation:i.a,PageBreadcrumbs:n.a,PageFooter:c.a,HomeBlog:d.a,HomeCustomers:f.a,HomeGallery:p.a,HomeService:_.a,HomeSlider:y.a,HomeTeam:g.a,HomeTestimonials:R.a,HomeWelcome:E.a},data:function(){return{title:"VueNuxt",description:"Universal Vue.js Applications"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],script:[{src:"/js/owl-carousel/owl.carousel.js"}],link:[{rel:"stylesheet",href:"/js/owl-carousel/owl.carousel.css"},{rel:"stylesheet",href:"/js/owl-carousel/owl.theme.css"}]}}}},676:function(t,e,s){var a,i;a=s(636);var r=s(710);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},677:function(t,e,s){var a,i;a=s(637);var r=s(702);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},678:function(t,e,s){var a,i;a=s(638);var r=s(698);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},679:function(t,e,s){var a,i;a=s(639);var r=s(701);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},680:function(t,e,s){var a,i;a=s(640);var r=s(693);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},693:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section welcome-panel"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},t._l(t.welcome.items,function(e){return s("div",{staticClass:"col-md-4"},[s("div",{class:["panel","panel-"+e.class]},[s("div",{staticClass:"panel-heading"},[s("h4",[s("i",{class:["fa","fa-fw",e.icon]}),t._v(" "+t._s(e.head))])]),s("div",{staticClass:"panel-body"},[s("p",{domProps:{innerHTML:t._s(e.body)}}),s("a",{class:["btn","btn-"+e.class],attrs:{href:e.url,target:"_blank"}},[t._v("Learn More")])])])])}))])])},staticRenderFns:[]}},698:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section service"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title text-center"},[s("span",[t._v(t._s(t.services.home.title2))]),s("h1",[t._v(t._s(t.services.home.title1))]),s("p",[t._v(t._s(t.services.home.title3))])]),s("div",{staticClass:"row"},t._l(t.services.home.items,function(e){return s("div",{staticClass:"col-md-3 col-sm-6 service-box service-center flipInY animated",style:{visibility:"visible","animation-duration":e.duration,"animation-name":"flipInY"},attrs:{"data-wow-duration":e.duration}},[s("div",{staticClass:"service-icon"},[s("i",{class:["fa",e.icon]})]),s("div",{staticClass:"service-content"},[s("h4",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.description))])])])}))])])},staticRenderFns:[]}},701:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section testimonials"},[s("div",{staticClass:"container text-center"},[s("div",{staticClass:"title text-center"},[s("span",[t._v(t._s(t.testimonials.title2))]),s("h1",[t._v(t._s(t.testimonials.title1))]),s("p",[t._v(t._s(t.testimonials.title3))])]),s("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"testimonials"}},t._l(t.testimonials.items,function(e){return s("div",{staticClass:"item"},[s("p",{staticClass:"s-12 m-12 l-8 center",domProps:{innerHTML:t._s(e.author_text)}}),s("div",{staticClass:"testimonial-author"},[s("span",[t._v(t._s(e.author_name))]),t._v(" - "+t._s(e.author_position))])])}))])])},staticRenderFns:[]}},702:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section gallery"},[s("div",{staticClass:"title text-center"},[s("span",[t._v(t._s(t.gallery.title2))]),s("h1",[t._v(t._s(t.gallery.title1))]),s("p",[t._v(t._s(t.gallery.title3))])]),s("div",{staticClass:"container gal-container"},t._l(t.gallery.items,function(e){return s("div",{staticClass:"col-md-6 col-sm-12 co-xs-12 gal-item"},[s("div",{staticClass:"box"},[s("a",{attrs:{href:e.url,"data-toggle":"modal","data-target":"#"+e.id}},[s("img",{attrs:{src:e.img}})]),s("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0,!0),s("div",{staticClass:"modal-body"},[s("img",{attrs:{src:e.img}})]),s("div",{staticClass:"col-md-12 description"},[s("h4",{domProps:{innerHTML:t._s(e.description)}})])])])])])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}]}},710:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section section-blog"},[s("div",{staticClass:"spacer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title text-center"},[s("span",[t._v(t._s(t.blog.title2))]),s("h1",[t._v(t._s(t.blog.title1))]),s("p",[t._v(t._s(t.blog.title3))])]),s("div",{staticClass:"row"},t._l(t.blog.posts,function(e){return s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"blog-post post-image"},[s("a",{staticClass:"blog-title",attrs:{href:e.url}},[s("img",{staticClass:"img-responsive",attrs:{src:e.img,alt:""}}),t._v(" "+t._s(e.title)+"\n                        ")]),s("span",{staticClass:"small-text blog-time"},[t._v(t._s(e.date))]),s("p",{domProps:{innerHTML:t._s(e.content)}})])])})),s("div",{staticClass:"text-center blog-btns"},[s("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:t.blog.url}},[t._v("view blog")])])])])])},staticRenderFns:[]}},712:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-navigation"),s("page-breadcrumbs",{attrs:{title:t.title,description:t.description}}),s("div",[s("div",{attrs:{id:"carousel"}},[s("home-slider")],1),s("home-welcome"),s("home-service"),s("home-gallery"),s("home-team"),s("home-blog"),s("home-testimonials"),s("home-customers")],1),s("page-footer")],1)},staticRenderFns:[]}}});