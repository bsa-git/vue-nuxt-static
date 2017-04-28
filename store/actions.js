//--- Mutation types ---//
import types from '~/store/mutation-types'
//--- API modules ---//
import about from '~/store/api/about'
import blog from '~/store/api/blog'
import customers from '~/store/api/customers'
import gallery from '~/store/api/gallery'
import slider from '~/store/api/slider'
import services from '~/store/api/services'
import team from '~/store/api/team'
import testimonials from '~/store/api/testimonials'
import socials from '~/store/api/socials'
import faq from '~/store/api/faq'
import welcome from '~/store/api/welcome'
import pricing from '~/store/api/pricing'
import portfolio from '~/store/api/portfolio'
//--- Plugins modules ---//
import contact_me from '~/static/js/validation/contact_me.js'
import config from '~/config/index'
///////////////////////////////////////////////////////////////
//--- System ---// 

const receiveError = function (store, error) {
    store.commit(types.SET_ERROR, error)
};

const delayPage = function (store) {
    setTimeout(function () {
        store.commit(types.DELAY_PAGE)
    }, 100)
};

const receiveConfig = function (store) {
    store.commit(types.RECEIVE_CONFIG, config)
};

const iniSlider = function (store, params) {// params = {id: "selector", opts: {...}}
    if ($(params.id).length === 0) {
        return
    }
    // Check the Jquery plugin (owlCarousel)
    if ($(params.id).owlCarousel) {
        // console.log('Is owlCarousel');
        $(params.id).owlCarousel(params.opts)
    } else {
        // Expect the appearance of the Jquery plugin (owlCarousel)
        const intervalID = setInterval(function () {
            if ($(params.id).owlCarousel) {
                // console.log('Is owlCarousel');
                $(params.id).owlCarousel(params.opts);
                clearInterval(intervalID)
            } else {
                // console.log('No owlCarousel')
            }
        }, 100)
    }
};

const iniBootstrapValidation = function (store, params) {// params = {id: "selector", opts: {...}}
    if ($(params.id).length === 0) {
        return
    }
    // Check the Jquery plugin (jqBootstrapValidation)
    if ($(params.id).jqBootstrapValidation) {
        // console.log('Is jqBootstrapValidation');
        contact_me(params.urlForm)
    } else {
        // Expect the appearance of the Jquery plugin (jqBootstrapValidation)
        const intervalID = setInterval(function () {
            if ($(params.id).jqBootstrapValidation) {
                // console.log('Is jqBootstrapValidation');
                contact_me(params.urlForm);
                clearInterval(intervalID)
            } else {
                // console.log('No jqBootstrapValidation')
            }
        }, 100)
    }
};

//--- About ---// 
const receivePersonalData = function (store) {
    about.getPersonalData(function (personal_data) {
        store.commit(types.RECEIVE_PERSONAL_DATA, personal_data)
    })
};

const receiveBusinessData = function (store) {
    about.getBusinessData(function (business) {
        store.commit(types.RECEIVE_BUSINESS_DATA, business)
    })
};

const receiveSubscribeData = function (store) {
    about.getSubscribeData(function (subscribe) {
        store.commit(types.RECEIVE_SUBSCRIBE_DATA, subscribe)
    })
};

const receiveWidgetsData = function (store) {
    about.getWidgetsData(function (widgets) {
        store.commit(types.RECEIVE_WIDGETS_DATA, widgets)
    })
};

//--- Blog ---// 
const receiveBlogPosts = function (store, id) {
    blog.getPosts(function (blog) {
        store.commit(types.RECEIVE_BLOG_POSTS, blog)
    }, id)
};

const receiveBlogPost = function (store, id) {
    blog.getPost(function (blog) {
        store.commit(types.RECEIVE_BLOG_POST, blog)
    }, id)
};

const receiveBlogCategories = function (store) {
    blog.getCategories(function (blog) {
        store.commit(types.RECEIVE_BLOG_CATEGORIES, blog)
    })
};

const receiveBlogPopular = function (store) {
    blog.getPopular(function (blog) {
        store.commit(types.RECEIVE_BLOG_POPULAR, blog)
    })
};

//--- Slider ---//
const receiveSlider = function (store) {
    slider.getSlider(function (slider) {
        store.commit(types.RECEIVE_SLIDER, slider)
    })
};

//--- Customers ---//
const receiveCustomers = function (store) {
    customers.getCustomers(function (customers) {
        store.commit(types.RECEIVE_CUSTOMERS, customers)
    })
};

//--- Gallery ---//
const receiveGallery = function (store) {
    gallery.getGallery(function (gallery) {
        store.commit(types.RECEIVE_GALLERY, gallery)
    })
};

const receiveInstagram = function (store) {
    gallery.getInstagram(function (gallery) {
        store.commit(types.RECEIVE_INSTAGRAM, gallery)
    })
};

//--- Services ---// 
const receiveServicesHome = function (store) {
    services.getServicesHome(function (services) {
        store.commit(types.RECEIVE_SERVICES_HOME, services)
    })
};

const receiveServicesAccordion = function (store) {
    services.getServicesAccordion(function (services) {
        store.commit(types.RECEIVE_SERVICES_ACCORDION, services)
    })
};

const receiveServicesList = function (store) {
    services.getServicesList(function (services) {
        store.commit(types.RECEIVE_SERVICES_LIST, services)
    })
};

const receiveServicesPanels = function (store) {
    services.getServicesPanels(function (services) {
        store.commit(types.RECEIVE_SERVICES_PANELS, services)
    })
};

const receiveServicesTabs = function (store) {
    services.getServicesTabs(function (services) {
        store.commit(types.RECEIVE_SERVICES_TABS, services)
    })
};

const receiveServicesPurchase = function (store) {
    services.getServicesPurchase(function (services) {
        store.commit(types.RECEIVE_SERVICES_PURCHASE, services)
    })
};

//--- Team ---// 
const receiveTeamInfo = function (store) {
    team.getInfo(function (info) {
        store.commit(types.RECEIVE_TEAM_INFO, info)
    })
};

const receiveTeamMembers = function (store) {
    team.getMembers(function (members) {
        store.commit(types.RECEIVE_TEAM_MEMBERS, members)
    })
};

const receiveTeamSummary = function (store) {
    team.getSummary(function (summary) {
        store.commit(types.RECEIVE_TEAM_SUMMARY, summary)
    })
};

//--- Testimonials ---//
const receiveTestimonials = function (store) {
    testimonials.getTestimonials(function (testimonials) {
        store.commit(types.RECEIVE_TESTIMONIALS, testimonials)
    })
};

//--- Socials ---//
const receiveTwitter = function (store) {
    socials.getTwitter(function (twitter) {
        store.commit(types.RECEIVE_TWITTER, twitter)
    })
};

const receiveMySocials = function (store) {
    socials.getMySocials(function (my_socials) {
        store.commit(types.RECEIVE_MY_SOCIALS, my_socials)
    })
};

const receiveShareSocials = function (store) {
    socials.getShareSocials(function (share_socials) {
        store.commit(types.RECEIVE_SHARE_SOCIALS, share_socials)
    })
};

//--- Faq ---//
const receiveFaq = function (store) {
    faq.getFaq(function (faq) {
        store.commit(types.RECEIVE_FAQ, faq)
    })
};

//--- Welcome ---//
const receiveWelcome = function (store) {
    welcome.getWelcome(function (welcome) {
        store.commit(types.RECEIVE_WELCOME, welcome)
    })
};

//--- Pricing ---//
const receivePricing = function (store) {
    if (_.isEmpty(store.state.pricing)) {
        pricing.getPricing(function (pricing) {
            store.commit(types.RECEIVE_PRICING, pricing)
        })
    }

};

//--- Portfolio ---//
const receivePortfolioItems = function (store, params) { //params = { id: 1, nCol: 1 },
    portfolio.getPortfolioItems(function (portfolio) {
        store.commit(types.RECEIVE_PORTFOLIO_ITEMS, portfolio)
    }, params)
};

const receivePortfolioItem = function (store, id) {
    portfolio.getPortfolioItem(function (portfolio) {
        store.commit(types.RECEIVE_PORTFOLIO_ITEM, portfolio)
    }, id)
};

export default {
    //--- System --//
    receiveError,
    delayPage,
    receiveConfig,
    iniSlider,
    iniBootstrapValidation,
    //--- About ---// 
    receivePersonalData,
    receiveBusinessData,
    receiveSubscribeData,
    receiveWidgetsData,
    //--- Blog ---//
    receiveBlogPosts,
    receiveBlogPost,
    receiveBlogCategories,
    receiveBlogPopular,
    //--- Slider ---//
    receiveSlider,
    //--- Customers ---//
    receiveCustomers,
    //--- Gallery ---//
    receiveGallery,
    receiveInstagram,
    //--- Services ---//
    receiveServicesHome,
    receiveServicesAccordion,
    receiveServicesList,
    receiveServicesPanels,
    receiveServicesTabs,
    receiveServicesPurchase,
    //--- Team ---// 
    receiveTeamInfo,
    receiveTeamMembers,
    receiveTeamSummary,
    //--- Testimonials ---//
    receiveTestimonials,
    //--- Socials ---//
    receiveTwitter,
    receiveMySocials,
    receiveShareSocials,
    //--- Faq ---//
    receiveFaq,
    //--- Welcome ---//
    receiveWelcome,
    //--- Pricing ---//
    receivePricing,
    //--- Portfolio ---//
    receivePortfolioItems,
    receivePortfolioItem,
}


