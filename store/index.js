// Vue
import Vue from 'vue'
// Vuex
import Vuex from 'vuex'
// Config
import config from '~/config/index'
// Actions
import actions from '~/store/actions';
// Getters
import getters from '~/store/getters';
// Modules
import system from '~/store/modules/system';
import about from '~/store/modules/about';
import slider from '~/store/modules/slider';
import blog from '~/store/modules/blog';
import customers from '~/store/modules/customers';
import gallery from '~/store/modules/gallery';
import services from '~/store/modules/services';
import team from '~/store/modules/team';
import testimonials from '~/store/modules/testimonials';
import welcome from '~/store/modules/welcome';
import socials from '~/store/modules/socials';
import faq from '~/store/modules/faq';
import pricing from '~/store/modules/pricing';
import portfolio from '~/store/modules/portfolio';

Vue.use(Vuex);

// A Vuex instance is created by combining the modules, getters, actions
const store = new Vuex.Store({
    strict: config.env !== 'production',
    actions: actions,
    getters: getters,
    modules: {
        system: system,
        about: about,
        slider: slider,
        blog: blog,
        customers: customers,
        gallery: gallery,
        services: services,
        team: team,
        testimonials: testimonials,
        welcome: welcome,
        socials: socials,
        faq: faq,
        pricing: pricing,
        portfolio: portfolio,
    }
});

export default store


