webpackJsonp([10],{488:function(t,e,a){var s,r;s=a(646);var n=a(715);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},518:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({about:"getAbout"})}},519:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receivePersonalData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({about:"getAbout"}),data:function(){return{footer_nav:[{url:"/about",title:"About Us"},{url:"#",title:"Sitemap"},{url:"#",title:"Privacy Policy"},{url:"/contact",title:"Contact"}]}}}},520:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(525),r=a.n(s),n=a(524),i=a.n(n),o=a(528),c=a.n(o),l=a(529),u=a.n(l),d=a(530),f=a.n(d),p=a(527),m=a.n(p);e.default={components:{FooterCopyright:r.a,FooterContact:i.a,FooterSocial:c.a,FooterSubscribe:u.a,FooterTwitter:f.a,FooterInstagram:m.a}}},521:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receiveInstagram")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({gallery:"getGallery"})}},522:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receiveMySocials")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({socials:"getSocials"})}},523:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receiveTwitter")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({socials:"getSocials"})}},524:function(t,e,a){var s,r;s=a(518);var n=a(537);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},525:function(t,e,a){var s,r;s=a(519);var n=a(536);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},526:function(t,e,a){var s,r;s=a(520);var n=a(531);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},527:function(t,e,a){var s,r;s=a(521);var n=a(535);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},528:function(t,e,a){var s,r;s=a(522);var n=a(533);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},529:function(t,e,a){var s,r,n=a(534);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},530:function(t,e,a){var s,r;s=a(523);var n=a(532);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bounceInUp animated",staticStyle:{visibility:"visible","animation-duration":"2s","animation-name":"bounceInUp"},attrs:{"data-wow-duration":"2s"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row footer-widgets"},[a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-subscribe")],1),a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-twitter")],1),a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-instagram")],1),a("div",{staticClass:"col-md-3 col-xs-12"},[a("footer-contact"),a("footer-social")],1)]),a("footer-copyright")],1)])},staticRenderFns:[]}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget twitter-widget"},[t._m(0),a("ul",t._l(t.socials.twitter.msgs,function(e){return a("li",[a("p",[a("a",{attrs:{href:t.socials.twitter.url}},[t._v(t._s(t.socials.twitter.tag)+" ")]),t._v(" "+t._s(e.title))]),a("span",[a("i",{staticClass:"fa fa-clock-o"}),t._v(" "+t._s(e.date))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Twitter "),a("i",{staticClass:"fa fa-twitter-square"}),t._v(" Feed"),a("span",{staticClass:"head-line"})])}]}},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget social-widget"},[t._m(0),a("ul",{staticClass:"social-icons"},t._l(t.socials.my,function(t,e){return a("li",[a("a",{class:e,attrs:{href:t.url}},[a("i",{class:["fa",t.icon]})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Follow Us"),a("span",{staticClass:"head-line"})])}]}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"footer-widget mail-subscribe-widget"},[a("h4",[t._v("About"),a("span",{staticClass:"head-line"})]),a("p",[t._v("Learn about the project's history, meet the maintaining teams, and find out how to use the Feathers framework.")])]),a("div",{staticClass:"footer-widget mail-subscribe-widget"},[a("h4",[t._v("Get in touch"),a("span",{staticClass:"head-line"})]),a("p",[t._v("Join our mailing list to stay up to date and get notices about our new releases!")]),a("form",{staticClass:"subscribe"},[a("input",{attrs:{type:"text",placeholder:"mail@example.com"}}),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Send"}})])])])}]}},535:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget instagram-widget"},[t._m(0),a("ul",{staticClass:"instagram-list"},t._l(t.gallery.instagram,function(t){return a("li",[a("a",{staticClass:"lightbox",attrs:{href:t}},[a("img",{attrs:{src:t,alt:""}})])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Insta "),a("i",{staticClass:"fa fa-instagram"}),t._v(" Gram"),a("span",{staticClass:"head-line"})])}]}},536:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright-section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("p",[t._v(t._s(t.about.personal_data.copyright)+"    |    Designed With "),a("i",{staticClass:"fa fa-heart red"}),t._v(" By\n                "),a("a",{attrs:{target:"_blank",href:t.about.personal_data.designed_with_url}},[t._v(" "+t._s(t.about.personal_data.designed_with))])])]),a("div",{staticClass:"col-md-6"},[a("ul",{staticClass:"footer-nav"},[t._m(0),t._l(t.footer_nav,function(e){return a("li",[a("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"fa fa-home"})])])}]}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-widget contact-widget"},[t._m(0),a("ul",[a("li",[t._m(1),t._v(" "+t._s(t.about.personal_data.contact.location)+" ")]),a("li",[t._m(2),t._v(" "+t._s(t.about.personal_data.contact.phone))]),a("li",[t._m(3),t._v(" "+t._s(t.about.personal_data.contact.email))]),a("li",[t._m(4),t._v(" "+t._s(t.about.personal_data.contact.website))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Contact Us"),a("span",{staticClass:"head-line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-map-marker"}),t._v(" Location:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-phone"}),t._v(" Phone Number:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-envelope-o"}),t._v(" Email:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-globe"}),t._v(" Website:")])}]}},582:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(178),r=a.n(s),n=a(67);a.n(n);e.default={data:function(){return{urlForm:"bin/contact_me.php"}},mounted:function(){try{this.urlForm;this.iniBootstrapValidation({id:"#contactForm",urlForm:this.urlForm})}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},methods:r()({},a.i(n.mapActions)(["iniBootstrapValidation"]))}},583:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(67);a.n(s);e.default={created:function(){try{this.$store.dispatch("receivePersonalData"),this.$store.dispatch("receiveSubscribeData")}catch(t){this.$store.commit("SET_ERROR",t),this.$router.replace("/error")}},computed:a.i(s.mapGetters)({about:"getAbout"})}},601:function(t,e,a){var s,r;s=a(582);var n=a(635);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},602:function(t,e,a){var s,r;s=a(583);var n=a(631);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},603:function(t,e,a){var s,r,n=a(629);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,t.exports=s},629:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"-6px","margin-top":"35px"}},[a("iframe",{attrs:{width:"100%",height:"400px",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed"}})],1)},staticRenderFns:[]}},631:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"Contact-Info"},[a("h2",{staticClass:"page-header"},[t._v("Contact Details")]),a("div",{staticClass:"tex-contact"},[a("div",{domProps:{innerHTML:t._s(t.about.subscribe.about_us)}})]),a("div",{staticClass:"block-contact"},[a("p",[t._v("Address :")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-map-marker"}),a("span",[t._v(" "+t._s(t.about.personal_data.contact.location))])])])]),a("div",{staticClass:"block-contact"},[a("p",[t._v("Phone :")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-phone"}),a("span",[t._v(" "+t._s(t.about.personal_data.contact.phone))])]),a("li",[a("i",{staticClass:"fa fa-fax"}),a("span",[t._v(" "+t._s(t.about.personal_data.contact.fax))])])])]),a("div",{staticClass:"block-contact"},[a("p",[t._v("Email :")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope"}),a("span",[t._v(" "+t._s(t.about.personal_data.contact.email))])])])]),a("div",{staticClass:"block-contact"},[a("p",[t._v("Website :")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-globe"}),a("span",[t._v(" "+t._s(t.about.personal_data.contact.website))])])])])])])},staticRenderFns:[]}},635:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-8"},[a("h2",{staticClass:"page-header"},[t._v("Send us a Message")]),a("form",{attrs:{name:"sentMessage",id:"contactForm",novalidate:""}},[a("div",{staticClass:"control-group form-group"},[a("div",{staticClass:"controls"},[a("label",[t._v("Full Name:")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"name",required:"","data-validation-required-message":"Please enter your name."}}),a("p",{staticClass:"help-block"})])]),a("div",{staticClass:"control-group form-group"},[a("div",{staticClass:"controls"},[a("label",[t._v("Phone Number:")]),a("input",{staticClass:"form-control",attrs:{type:"tel",id:"phone",required:"","data-validation-required-message":"Please enter your phone number."}})])]),a("div",{staticClass:"control-group form-group"},[a("div",{staticClass:"controls"},[a("label",[t._v("Email Address:")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"email",required:"","data-validation-required-message":"Please enter your email address."}})])]),a("div",{staticClass:"control-group form-group"},[a("div",{staticClass:"controls"},[a("label",[t._v("Message:")]),a("textarea",{staticClass:"form-control",staticStyle:{resize:"none"},attrs:{id:"message",required:"","data-validation-required-message":"Please enter your message",maxlength:"999"}})])]),a("div",{attrs:{id:"success"}}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Send Message")])])])}]}},646:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(180),r=a.n(s),n=a(179),i=a.n(n),o=a(526),c=a.n(o),l=a(601),u=a.n(l),d=a(602),f=a.n(d),p=a(603),m=a.n(p);e.default={components:{PageNavigation:r.a,PageBreadcrumbs:i.a,PageFooter:c.a,ContactForm:u.a,ContactInfo:f.a,ContactMap:m.a},data:function(){return{title:"Contact",description:"Our contact information"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],script:[{src:"/js/jquery-plugins/jqBootstrapValidation.js"}]}}}},715:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-navigation"),a("page-breadcrumbs",{attrs:{title:t.title,description:t.description}}),a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("contact-form"),a("contact-info")],1)]),a("contact-map")],1),a("page-footer")],1)},staticRenderFns:[]}}});