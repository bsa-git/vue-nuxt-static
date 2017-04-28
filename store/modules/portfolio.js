const state = {};

const mutations = {

    RECEIVE_PORTFOLIO_ITEMS: function (state, portfolio) {
        // Clone the object passed, that there was no link between them
        const clonePortfolio = _.cloneDeep(portfolio);
        state.url = clonePortfolio.url;
        state.pager = clonePortfolio.pager;
        state.items = clonePortfolio.items;
    },

    RECEIVE_PORTFOLIO_ITEM: function (state, portfolio) {
        // Clone the object passed, that there was no link between them
        const clonePortfolio = _.cloneDeep(portfolio);
        state.url = clonePortfolio.url;
        state.item = clonePortfolio.item;
    },
};

export default {
    state,
    mutations
}
