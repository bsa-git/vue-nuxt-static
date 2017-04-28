import _portfolio from '~/store/data/portfolio';
import config from '~/config/index'

// Get env
const env = config.env;

//=== API functions ==//

const getPortfolioItems = function (cb, params) {// params = { id: 1, nCol: 1 },
    let portfolio;
    if (env === 'testing') {
        // Change Portfolio items
        portfolio = _changePortfolioItems(params);
        cb(portfolio);
    } else {
        // Change Portfolio items
        portfolio = _changePortfolioItems(params);
        cb(portfolio);
    }
};

const getPortfolioItem = function (cb, id) {
    let portfolio;
    if (env === 'testing') {
        portfolio = _.pick(_portfolio, ['url', 'item']);
        cb(portfolio);
    } else {
        portfolio = _.pick(_portfolio, ['url', 'item']);
        cb(portfolio);
    }
};

// Change Portfolio items
const _changePortfolioItems = function (params) {// params = { id: 1, nCol: 1 },
    // Get Portfolio
    const portfolio = _.cloneDeep(_.pick(_portfolio, ['url', 'pager', 'items']));
    if (!_.isUndefined(params) && !_.isUndefined(params.nCol)) {
        const nCol = params.nCol;
        const col = _portfolio['col' + nCol];
        portfolio.pager.total = col.total;
        let total = col.total;
        // Limit the size of the collection (portfolio.items) to the value (col.total)
        portfolio.items = _.filter(portfolio.items, function (item) {
            const result = total > 0;
            total--;
            return result;
        });
        // Change img from collection of portfolio.items
        portfolio.items = _.forEach(portfolio.items, function (item) {
            item.img = col.img;

        });

        // Group array elements (portfolio.items)
        if (!_.isUndefined(col.groups)) {
            const newGroups = [];
            let indexItem = 0;
            let indexInGroup;
            portfolio.items = _.forEach(portfolio.items, function (item) {
                indexItem++;
                const nGroup = col.groups[indexItem];
                if (_.isUndefined(newGroups[nGroup - 1])) {
                    newGroups.push({});
                    indexInGroup = 0;
                }
                // Add item to group
                indexInGroup++;
                newGroups[nGroup - 1]['item' + indexInGroup] = item;
            });
            portfolio.items = newGroups;
        }
    }
    return portfolio;
};

export default {
    getPortfolioItems,
    getPortfolioItem,
}
