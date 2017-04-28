import _faq from '~/store/data/faq';
import config from '~/config/index'

// Get env
const env = config.env;

const getFaq = function (cb) {
    if (env === 'testing') {
        cb(_faq);
    } else {
        cb(_faq);
    }
};

export default {
    getFaq,
}

