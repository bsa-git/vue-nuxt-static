const state = {};

const mutations = {

    RECEIVE_MY_SOCIALS: function (state, my_socials) {
        // Clone the object passed, that there was no link between them
        state.my = _.cloneDeep(my_socials);
    },

    RECEIVE_SHARE_SOCIALS: function (state, share_socials) {
        // Clone the object passed, that there was no link between them
        state.share = _.cloneDeep(share_socials);
    },

    RECEIVE_TWITTER: function (state, twitter) {
        // Clone the object passed, that there was no link between them
        state.twitter = _.cloneDeep(twitter);
    },
};

export default {
    state,
    mutations
}

