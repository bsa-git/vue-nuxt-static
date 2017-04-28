const state = {};

const mutations = {

    RECEIVE_TEAM_INFO: function (state, info) {
        // Clone the object passed, that there was no link between them
        state.info = _.cloneDeep(info);
    },

    RECEIVE_TEAM_MEMBERS: function (state, members) {
        // Clone the object passed, that there was no link between them
        state.members = _.cloneDeep(members);
    },

    RECEIVE_TEAM_SUMMARY: function (state, summary) {
        // Clone the object passed, that there was no link between them
        state.summary = _.cloneDeep(summary);
    },

};

export default {
    state,
    mutations
}
