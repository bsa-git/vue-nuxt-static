const state = {};

const mutations = {

    SET_ERROR(state, error) {
        state.error = {
            statusCode: error.statusCode,
            name: error.name,
            message: error.message,
            stack: error.stack
        }
    },

    CLEAR_ERROR(state) {
        state.error.statusCode = 0;
        state.error.name = '';
        state.error.message = '';
        state.error.stack = '';
    },

    DELAY_PAGE(state) {
        state.showPage = true
    },

    RECEIVE_CONFIG(state, config) {
        state.config = config
    },
};

export default {
    state,
    mutations
}