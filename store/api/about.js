import _about from '~/store/data/about'
import config from '~/config/index'

// Get env
const env = config.env;

const getPersonalData = function (cb) {
    const about = _.pick(_about, ['personal_data']);
    cb(about.personal_data);
};

const getBusinessData = function (cb) {
    let about;
    if (env === 'testing') {
        about = _.pick(_about, ['business']);
        cb(about.business);
    } else {
        about = _.pick(_about, ['business']);
        cb(about.business);
    }
};

const getSubscribeData = function (cb) {
    let about;
    if (env === 'testing') {
        about = _.pick(_about, ['subscribe']);
        cb(about.subscribe);
    } else {
        about = _.pick(_about, ['subscribe']);
        cb(about.subscribe);
    }
};

const getWidgetsData = function (cb) {
    let about;
    if (env === 'testing') {
        about = _.pick(_about, ['widgets']);
        cb(about.widgets);
    } else {
        about = _.pick(_about, ['widgets']);
        cb(about.widgets);
    }

};

export default {
    getPersonalData,
    getBusinessData,
    getSubscribeData,
    getWidgetsData
}
