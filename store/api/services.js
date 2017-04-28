import _services from '~/store/data/services';
import config from '~/config/index'

// Get env
const env = config.env;

const getServicesHome = function (cb) {
    let services;
    if (env === 'testing') {
        services = _.pick(_services, ['home']);
        cb(services.home);
    } else {
        services = _.pick(_services, ['home']);
        cb(services.home);
    }
};

const getServicesAccordion = function (cb) {
    let services;
    if (env === 'testing') {
        services = _.pick(_services, ['accordion']);
        cb(services.accordion);
    } else {
        services = _.pick(_services, ['accordion']);
        cb(services.accordion);
    }
};

const getServicesList = function (cb) {
    let services;
    if (env === 'testing') {
        services = _.pick(_services, ['list']);
        cb(services.list);
    } else {
        services = _.pick(_services, ['list']);
        cb(services.list);
    }
};

const getServicesPanels = function (cb) {
    let services;
    if (env === 'testing') {
        services = _.pick(_services, ['panels']);
        cb(services.panels);
    } else {
        services = _.pick(_services, ['panels']);
        cb(services.panels);
    }
};

const getServicesTabs = function (cb) {
    let services;
    if (env === 'testing') {
        services = _.pick(_services, ['tabs']);
        cb(services.tabs);
    } else {
        services = _.pick(_services, ['tabs']);
        cb(services.tabs);
    }
};

const getServicesPurchase = function (cb) {
    let services;
    if (env === 'testing') {
        services = _.pick(_services, ['purchase']);
        cb(services.purchase);
    } else {
        services = _.pick(_services, ['purchase']);
        cb(services.purchase);
    }
};

export default {
    getServicesHome,
    getServicesAccordion,
    getServicesList,
    getServicesPanels,
    getServicesTabs,
    getServicesPurchase,
}
