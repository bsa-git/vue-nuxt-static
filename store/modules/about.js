const state = {};

const mutations = {

    RECEIVE_PERSONAL_DATA: function (state, personal_data) {
        // Clone the object passed, that there was no link between them
        state.personal_data = _.cloneDeep(personal_data);
    },

    RECEIVE_BUSINESS_DATA: function (state, business) {
        // Clone the object passed, that there was no link between them
        state.business = _.cloneDeep(business);
    },

    RECEIVE_SUBSCRIBE_DATA: function (state, subscribe) {
        // Clone the object passed, that there was no link between them
        state.subscribe = _.cloneDeep(subscribe);
    },

    RECEIVE_WIDGETS_DATA: function (state, widgets) {
        // Clone the object passed, that there was no link between them
        state.widgets = _.cloneDeep(widgets);
    },
};

export default {
    state,
    mutations
}

