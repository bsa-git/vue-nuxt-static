const state = {};

const mutations = {

    RECEIVE_SLIDER: function (state, slider) {
        // Clone the object passed, that there was no link between them
        const cloneSlider = _.cloneDeep(slider);
        state.items = cloneSlider.items;
    },
};

export default {
    state,
    mutations
}

