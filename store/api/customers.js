import _customers from '~/store/data/customers';
import config from '~/config/index'

// Get env
const env = config.env;


const getCustomers = function (cb) {
    if (env === 'testing') {
        cb(_customers);
    } else {
        cb(_customers);
    }

};

export default {
    getCustomers
}
