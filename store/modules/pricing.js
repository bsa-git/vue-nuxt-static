
// initial state
const state = {};

const mutations = {

    RECEIVE_PRICING: function (state, pricing) {
        // Clone the object passed, that there was no link between them
        const clonePricing = _.cloneDeep(pricing);
        state.items = clonePricing.items;
    },
};

export default {
    state,
    mutations
}

