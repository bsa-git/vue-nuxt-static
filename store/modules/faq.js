const state = {};

const mutations = {

    RECEIVE_FAQ: function (state, faq) {
        // Clone the object passed, that there was no link between them
        const cloneFaq = _.cloneDeep(faq);
        state.items = cloneFaq.items;
    },
};

export default {
    state,
    mutations
}
