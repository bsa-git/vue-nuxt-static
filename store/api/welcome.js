import _welcome from '~/store/data/welcome';
import config from '~/config/index'

// Get env
const env = config.env;

const getWelcome = function (cb) {
    if (env === 'testing') {
        cb(_welcome);
    } else {
        cb(_welcome);
    }
};

export default {
    getWelcome,
}
