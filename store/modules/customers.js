const state = {};

const mutations = {

    RECEIVE_CUSTOMERS: function (state, customers) {
        // Clone the object passed, that there was no link between them
        state.items = _.cloneDeep(customers);
    },

};

export default {
    state,
    mutations
}

