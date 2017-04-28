import _socials from '~/store/data/socials';
import config from '~/config/index'

// Get env
const env = config.env;

const getMySocials = function (cb) {
    let socials;
    if (env === 'testing') {
        socials = _.pick(_socials, ['my']);
        cb(socials.my);
    } else {
        socials = _.pick(_socials, ['my']);
        cb(socials.my);
    }
};

const getShareSocials = function (cb) {
    let socials;
    if (env === 'testing') {
        socials = _.pick(_socials, ['share']);
        cb(socials.share);
    } else {
        socials = _.pick(_socials, ['share']);
        cb(socials.share);
    }
};

const getTwitter = function (cb) {
    let socials;
    if (env === 'testing') {
        socials = _.pick(_socials, ['twitter']);
        cb(socials.twitter);
    } else {
        socials = _.pick(_socials, ['twitter']);
        cb(socials.twitter);
    }
};

export default {
    getTwitter,
    getMySocials,
    getShareSocials,
}
