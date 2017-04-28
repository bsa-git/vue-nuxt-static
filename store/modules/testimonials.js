const state = {};

const mutations = {

    RECEIVE_TESTIMONIALS: function (state, testimonials) {
        // Clone the object passed, that there was no link between them
        const cloneTestimonials = _.cloneDeep(testimonials);
        state.items = cloneTestimonials.items;
        state.title1 = cloneTestimonials.title1;
        state.title2 = cloneTestimonials.title2;
        state.title3 = cloneTestimonials.title3;
    },

};

export default {
    state,
    mutations
}

