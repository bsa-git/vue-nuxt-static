const state = {};

const mutations = {

    RECEIVE_SERVICES_HOME: function (state, services) {
        // Clone the object passed, that there was no link between them
        state.home = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_ACCORDION: function (state, services) {
        // Clone the object passed, that there was no link between them
        state.accordion = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_LIST: function (state, services) {
        // Clone the object passed, that there was no link between them
        state.list = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_PANELS: function (state, services) {
        // Clone the object passed, that there was no link between them
        state.panels = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_TABS: function (state, services) {
        // Clone the object passed, that there was no link between them
        state.tabs = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_PURCHASE: function (state, services) {
        // Clone the object passed, that there was no link between them
        state.purchase = _.cloneDeep(services);
    },

};

export default {
    state,
    mutations
}

