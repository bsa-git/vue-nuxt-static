webpackJsonp([15],{499:function(t,e,a){var s,i;s=a(657);var r=a(690);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},518:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({about:"getAbout"})}},519:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({about:"getAbout"}),data:function(){return{footer_nav:[{url:"/about",title:"About Us"},{url:"#",title:"Sitemap"},{url:"#",title:"Privacy Policy"},{url:"/contact",title:"Contact"}]}}}},520:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(525),i=a.n(s),r=a(524),n=a.n(r),o=a(528),c=a.n(o),l=a(529),u=a.n(l),d=a(530),f=a.n(d),p=a(527),_=a.n(p);e.default={components:{FooterCopyright:i.a,FooterContact:n.a,FooterSocial:c.a,FooterSubscribe:u.a,FooterTwitter:f.a,FooterInstagram:_.a}}},521:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receiveInstagram")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({gallery:"getGallery"})}},522:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receiveMySocials")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({socials:"getSocials"})}},523:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receiveTwitter")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({socials:"getSocials"})}},524:function(t,e,a){var s,i;s=a(518);var r=a(537);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},525:function(t,e,a){var s,i;s=a(519);var r=a(536);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},526:function(t,e,a){var s,i;s=a(520);var r=a(531);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},527:function(t,e,a){var s,i;s=a(521);var r=a(535);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},528:function(t,e,a){var s,i;s=a(522);var r=a(533);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},529:function(t,e,a){var s,i,r=a(534);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},530:function(t,e,a){var s,i;s=a(523);var r=a(532);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bounceInUp animated",staticStyle:{visibility:"visible","animation-duration":"2s","animation-name":"bounceInUp"},attrs:{"data-wow-duration":"2s"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row footer-widgets"},[a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-subscribe")],1),a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-twitter")],1),a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-instagram")],1),a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-contact"),a("footer-social")],1)]),a("footer-copyright")],1)])},staticRenderFns:[]}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget twitter-widget"},[t._m(0),a("ul",t._l(t.socials.twitter.msgs,function(e){return a("li",[a("p",[a("a",{attrs:{href:t.socials.twitter.url}},[t._v(t._s(t.socials.twitter.tag)+" ")]),t._v(" "+t._s(e.title))]),a("span",[a("i",{staticClass:"fa fa-clock-o"}),t._v(" "+t._s(e.date))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Twitter "),a("i",{staticClass:"fa fa-twitter-square"}),t._v(" Feed"),a("span",{staticClass:"head-line"})])}]}},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget social-widget"},[t._m(0),a("ul",{staticClass:"social-icons"},t._l(t.socials.my,function(t,e){return a("li",[a("a",{class:e,attrs:{href:t.url}},[a("i",{class:["fa",t.icon]})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Follow Us"),a("span",{staticClass:"head-line"})])}]}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"footer-widget mail-subscribe-widget"},[a("h4",[t._v("About"),a("span",{staticClass:"head-line"})]),a("p",[t._v("Learn about the project's history, meet the maintaining teams, and find out how to use the Feathers framework.")])]),a("div",{staticClass:"footer-widget mail-subscribe-widget"},[a("h4",[t._v("Get in touch"),a("span",{staticClass:"head-line"})]),a("p",[t._v("Join our mailing list to stay up to date and get notices about our new releases!")]),a("form",{staticClass:"subscribe"},[a("input",{attrs:{type:"text",placeholder:"mail@example.com"}}),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Send"}})])])])}]}},535:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget instagram-widget"},[t._m(0),a("ul",{staticClass:"instagram-list"},t._l(t.gallery.instagram,function(t){return a("li",[a("a",{staticClass:"lightbox",attrs:{href:t}},[a("img",{attrs:{src:t,alt:""}})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Insta "),a("i",{staticClass:"fa fa-instagram"}),t._v(" Gram"),a("span",{staticClass:"head-line"})])}]}},536:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright-section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("p",[t._v(t._s(t.about.personal_data.copyright)+"    |    Designed With "),a("i",{staticClass:"fa fa-heart red"}),t._v(" By\n                "),a("a",{attrs:{target:"_blank",href:t.about.personal_data.designed_with_url}},[t._v(" "+t._s(t.about.personal_data.designed_with))])])]),a("div",{staticClass:"col-md-6"},[a("ul",{staticClass:"footer-nav"},[t._m(0),t._l(t.footer_nav,function(e){return a("li",[a("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"fa fa-home"})])])}]}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget contact-widget"},[t._m(0),a("ul",[a("li",[t._m(1),t._v(" "+t._s(t.about.personal_data.contact.location)+" ")]),a("li",[t._m(2),t._v(" "+t._s(t.about.personal_data.contact.phone))]),a("li",[t._m(3),t._v(" "+t._s(t.about.personal_data.contact.email))]),a("li",[t._m(4),t._v(" "+t._s(t.about.personal_data.contact.website))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Contact Us"),a("span",{staticClass:"head-line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-map-marker"}),t._v(" Location:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-phone"}),t._v(" Phone Number:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-envelope-o"}),t._v(" Email:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-globe"}),t._v(" Website:")])}]}},657:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67),i=(a.n(s),a(180)),r=a.n(i),n=a(179),o=a.n(n),c=a(526),l=a.n(c);e.default={components:{PageNavigation:r.a,PageBreadcrumbs:o.a,PageFooter:l.a},data:function(){return{title:"Pricing Table",description:"Our pricing information"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},fetch:function(t){var e=t.store,a=t.error;try{e.dispatch("receivePricing")}catch(t){a(t)}},computed:a.i(s.mapGetters)({pricing:"getPricing"})}},690:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-navigation"),a("page-breadcrumbs",{attrs:{title:t.title,description:t.description}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row pricing-page"},t._l(t.pricing.items,function(e){return a("div",{staticClass:"col-md-4"},[a("div",{class:["panel","text-center",e.panel_class]},[a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v(t._s(e.title))])]),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"plan-price"},[a("div",{staticClass:"price-value"},[t._v(t._s(e.price_value)),a("span",[t._v(".00")])]),a("div",{staticClass:"interval"},[t._v("per month")])])]),a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[a("strong",[t._v(t._s(e.user))]),t._v(" User")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v(t._s(e.projects))]),t._v(" Projects")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v(t._s(e.email_accounts))]),t._v(" Email Accounts")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v(t._s(e.disk_space))]),t._v(" Disk Space")]),a("li",{staticClass:"list-group-item"},[a("strong",[t._v(t._s(e.monthly_bandwidth))]),t._v(" Monthly Bandwidth\n                        ")]),a("li",{staticClass:"list-group-item"},[a("a",{class:["btn",e.btn_class],attrs:{href:"#"}},[t._v("Sign Up!")])])])])])}))]),a("page-footer")],1)},staticRenderFns:[]}}});