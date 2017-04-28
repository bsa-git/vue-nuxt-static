import _pricing from '~/store/data/pricing';
import config from '~/config/index'

// Get env
const env = config.env;

const getPricing = function (cb) {
    if (env === 'testing') {
        cb(_pricing);
    } else {
        cb(_pricing);
    }
};

export default {
    getPricing,
}
