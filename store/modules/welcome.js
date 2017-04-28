const state = {};

const mutations = {

    RECEIVE_WELCOME: function (state, welcome) {
        // Clone the object passed, that there was no link between them
        const cloneWelcome = _.cloneDeep(welcome);
        state.items = cloneWelcome.items;
    },
};

export default {
    state,
    mutations
}
