//--- System ---//

const getSystem = function (state) {
    return state.system;
};

const getShowPage = function (state) {
    return state.system.showPage;
};

const getConfig = function (state) {
    return state.system.config;
};

//--- About ---//
const getAbout = function (state) {
    return state.about;
};

//--- Blog ---//
const getBlog = function (state) {
    return state.blog;
};

//--- Slider ---//
const getSlider = function (state) {
    return state.slider;
};

//--- Customers ---//
const getCustomers = function (state) {
    return state.customers.items;
};

//--- Gallery ---//
const getGallery = function (state) {
    return state.gallery;
};

//--- Services ---//
const getServices = function (state) {
    return state.services;
};

//--- Team ---//
const getTeam = function (state) {
    return state.team;
};

//--- Testimonials ---//
const getTestimonials = function (state) {
    return state.testimonials;
};

//--- Welcome --//
const getWelcome = function (state) {
    return state.welcome;
};

//--- Socials ---//
const getSocials = function (state) {
    return state.socials;
};

//--- Faq --//
const getFaq = function (state) {
    return state.faq;
};

//--- Pricing --//
const getPricing = function (state) {
    return state.pricing;
};

//--- Portfolio ---//
const getPortfolio = function (state) {
    return state.portfolio;
};

export default {
    //--- System ---//
    getSystem,
    getShowPage,
    getConfig,
    //--- About ---//
    getAbout,
    //--- Blog ---//
    getBlog,
    //--- Slider ---//
    getSlider,
    //--- Customers ---//
    getCustomers,
    //--- Gallery ---//
    getGallery,
    //--- Services ---//
    getServices,
    //--- Team ---//
    getTeam,
    //--- Testimonials ---//
    getTestimonials,
    //--- Welcome --//
    getWelcome,
    //--- Socials ---//
    getSocials,
    //--- Faq --//
    getFaq,
    //--- Pricing --//
    getPricing,
    //--- Portfolio ---//
    getPortfolio,
}


