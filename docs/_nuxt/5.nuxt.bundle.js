webpackJsonp([5],{498:function(t,e,s){var r,i;r=s(656);var a=s(691);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},518:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({about:"getAbout"})}},519:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({about:"getAbout"}),data:function(){return{footer_nav:[{url:"/about",title:"About Us"},{url:"#",title:"Sitemap"},{url:"#",title:"Privacy Policy"},{url:"/contact",title:"Contact"}]}}}},520:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(525),i=s.n(r),a=s(524),o=s.n(a),n=s(528),c=s.n(n),l=s(529),d=s.n(l),u=s(530),f=s.n(u),p=s(527),m=s.n(p);e.default={components:{FooterCopyright:i.a,FooterContact:o.a,FooterSocial:c.a,FooterSubscribe:d.a,FooterTwitter:f.a,FooterInstagram:m.a}}},521:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receiveInstagram")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({gallery:"getGallery"})}},522:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receiveMySocials")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({socials:"getSocials"})}},523:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receiveTwitter")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({socials:"getSocials"})}},524:function(t,e,s){var r,i;r=s(518);var a=s(537);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},525:function(t,e,s){var r,i;r=s(519);var a=s(536);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},526:function(t,e,s){var r,i;r=s(520);var a=s(531);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},527:function(t,e,s){var r,i;r=s(521);var a=s(535);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},528:function(t,e,s){var r,i;r=s(522);var a=s(533);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},529:function(t,e,s){var r,i,a=s(534);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},530:function(t,e,s){var r,i;r=s(523);var a=s(532);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"bounceInUp animated",staticStyle:{visibility:"visible","animation-duration":"2s","animation-name":"bounceInUp"},attrs:{"data-wow-duration":"2s"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row footer-widgets"},[s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-subscribe")],1),s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-twitter")],1),s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-instagram")],1),s("div",{staticClass:"col-md-3 col-xs-12"},[s("footer-contact"),s("footer-social")],1)]),s("footer-copyright")],1)])},staticRenderFns:[]}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget twitter-widget"},[t._m(0),s("ul",t._l(t.socials.twitter.msgs,function(e){return s("li",[s("p",[s("a",{attrs:{href:t.socials.twitter.url}},[t._v(t._s(t.socials.twitter.tag)+" ")]),t._v(" "+t._s(e.title))]),s("span",[s("i",{staticClass:"fa fa-clock-o"}),t._v(" "+t._s(e.date))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Twitter "),s("i",{staticClass:"fa fa-twitter-square"}),t._v(" Feed"),s("span",{staticClass:"head-line"})])}]}},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget social-widget"},[t._m(0),s("ul",{staticClass:"social-icons"},t._l(t.socials.my,function(t,e){return s("li",[s("a",{class:e,attrs:{href:t.url}},[s("i",{class:["fa",t.icon]})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Follow Us"),s("span",{staticClass:"head-line"})])}]}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"footer-widget mail-subscribe-widget"},[s("h4",[t._v("About"),s("span",{staticClass:"head-line"})]),s("p",[t._v("Learn about the project's history, meet the maintaining teams, and find out how to use the Feathers framework.")])]),s("div",{staticClass:"footer-widget mail-subscribe-widget"},[s("h4",[t._v("Get in touch"),s("span",{staticClass:"head-line"})]),s("p",[t._v("Join our mailing list to stay up to date and get notices about our new releases!")]),s("form",{staticClass:"subscribe"},[s("input",{attrs:{type:"text",placeholder:"mail@example.com"}}),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Send"}})])])])}]}},535:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget instagram-widget"},[t._m(0),s("ul",{staticClass:"instagram-list"},t._l(t.gallery.instagram,function(t){return s("li",[s("a",{staticClass:"lightbox",attrs:{href:t}},[s("img",{attrs:{src:t,alt:""}})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Insta "),s("i",{staticClass:"fa fa-instagram"}),t._v(" Gram"),s("span",{staticClass:"head-line"})])}]}},536:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copyright-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("p",[t._v(t._s(t.about.personal_data.copyright)+"    |    Designed With "),s("i",{staticClass:"fa fa-heart red"}),t._v(" By\n                "),s("a",{attrs:{target:"_blank",href:t.about.personal_data.designed_with_url}},[t._v(" "+t._s(t.about.personal_data.designed_with))])])]),s("div",{staticClass:"col-md-6"},[s("ul",{staticClass:"footer-nav"},[t._m(0),t._l(t.footer_nav,function(e){return s("li",[s("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"/"}},[s("i",{staticClass:"fa fa-home"})])])}]}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-widget contact-widget"},[t._m(0),s("ul",[s("li",[t._m(1),t._v(" "+t._s(t.about.personal_data.contact.location)+" ")]),s("li",[t._m(2),t._v(" "+t._s(t.about.personal_data.contact.phone))]),s("li",[t._m(3),t._v(" "+t._s(t.about.personal_data.contact.email))]),s("li",[t._m(4),t._v(" "+t._s(t.about.personal_data.contact.website))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",[t._v("Contact Us"),s("span",{staticClass:"head-line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-map-marker"}),t._v(" Location:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-phone"}),t._v(" Phone Number:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-envelope-o"}),t._v(" Email:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-globe"}),t._v(" Website:")])}]}},551:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receiveShareSocials")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({socials:"getSocials"})}},556:function(t,e,s){var r,i;r=s(551);var a=s(561);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},561:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"social-widget portfolio-share",staticStyle:{"margin-top":"19px"}},[s("h4",{staticStyle:{margin:"0 0 7px"}},[t._v(" Share This:")]),s("ul",{staticClass:"social-icons"},t._l(t.socials.share,function(t,e){return s("li",[s("a",{class:e,attrs:{href:t.url}},[s("i",{class:["fa",t.icon]})])])}))])},staticRenderFns:[]}},562:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(178),i=s.n(r),a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receiveSlider")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},mounted:function(){try{this.iniSlider({id:"#osahan-slider",opts:{slideSpeed:300,autoPlay:!0,pagination:!0,singleItem:!0}})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({slider:"getSlider"}),methods:i()({},s.i(a.mapActions)(["iniSlider"]))}},567:function(t,e,s){var r,i;r=s(562);var a=s(572);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},572:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"osahan-slider"}},t._l(t.slider.items,function(e){return s("div",{staticClass:"item"},[s("img",{staticClass:"slider-img",attrs:{src:e.img.src,title:e.img.title,alt:e.img.alt}}),s("div",{staticClass:"carousel-text"},[s("div",{staticClass:"line"},[s("img",{attrs:{src:e.body.img_src,title:e.body.img_title,alt:"item.body.img_alt"}}),s("h1",{domProps:{innerHTML:t._s(e.body.title)}}),s("p",{domProps:{innerHTML:t._s(e.body.description)}}),s("div",{staticClass:"carousel-btns"},[s("a",{staticClass:"btn btn-default btn-lg",attrs:{href:e.body.read_more_url}},[t._v("Read More")]),s("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:e.body.live_demo_url}},[t._v("Live Demo")])])])])])}))},staticRenderFns:[]}},590:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(67);s.n(r);e.default={created:function(){try{this.$store.dispatch("receivePortfolioItem",1)}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(r.mapGetters)({portfolio:"getPortfolio"})}},591:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(178),i=s.n(r),a=s(67);s.n(a);e.default={created:function(){try{this.$store.dispatch("receivePortfolioItems",{id:1,nCol:0})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},mounted:function(){try{this.iniSlider({id:"#customers",opts:{items:4,lazyLoad:!0,pagination:!0,autoPlay:2e3,stopOnHover:!0}})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:s.i(a.mapGetters)({portfolio:"getPortfolio"}),methods:i()({},s.i(a.mapActions)(["iniSlider"]))}},610:function(t,e,s){var r,i;r=s(590);var a=s(620);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},611:function(t,e,s){var r,i;r=s(591);var a=s(616);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},616:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section section-customers"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"owl-carousel owl-carousel-featured",attrs:{id:"customers"}},t._l(t.portfolio.items,function(t){return s("div",{staticClass:"item"},[s("a",{attrs:{href:t.url}},[s("img",{attrs:{alt:"",src:t.img}})])])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-12"},[s("h2",{staticClass:"page-header"},[t._v("Related Projects")])])}]}},620:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticStyle:{margin:"0 0 8px"}},[t._v(t._s(t.portfolio.item.details.title))]),s("div",{domProps:{innerHTML:t._s(t.portfolio.item.details.text)}}),s("h3",{staticStyle:{margin:"17px 0 8px"}},[t._v(t._s(t.portfolio.item.details2.title))]),s("ul",[s("li",[s("strong",[t._v("Client:")]),t._v(" "+t._s(t.portfolio.item.details2.client))]),s("li",[s("strong",[t._v("Status:")]),t._v(" "+t._s(t.portfolio.item.details2.status))]),s("li",[s("strong",[t._v("Skills:")]),t._v(" "+t._s(t.portfolio.item.details2.skills))])])])},staticRenderFns:[]}},656:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(180),i=s.n(r),a=s(179),o=s.n(a),n=s(526),c=s.n(n),l=s(567),d=s.n(l),u=s(610),f=s.n(u),p=s(556),m=s.n(p),_=s(611),v=s.n(_);e.default={components:{PageNavigation:i.a,PageBreadcrumbs:o.a,PageFooter:c.a,PortfolioSlider:d.a,PortfolioItemContent:f.a,PortfolioSocial:m.a,PortfolioRelatedProjects:v.a},data:function(){return{title:"Portfolio Item",description:"Lorem ipsum dolor sit ame"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],script:[{src:"/js/owl-carousel/owl.carousel.js"}],link:[{rel:"stylesheet",href:"/js/owl-carousel/owl.carousel.css"},{rel:"stylesheet",href:"/js/owl-carousel/owl.theme.css"}]}}}},691:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-navigation",{attrs:{groupMenu:"portfolio"}}),s("page-breadcrumbs",{attrs:{title:t.title,description:t.description}}),s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("portfolio-slider")],1),s("div",{staticClass:"col-md-4"},[s("portfolio-item-content"),s("portfolio-social")],1)])]),s("portfolio-related-projects")],1),s("page-footer")],1)},staticRenderFns:[]}}});