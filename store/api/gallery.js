import _gallery from '~/store/data/gallery';
import config from '~/config/index'

// Get env
const env = config.env;

const getGallery = function (cb) {
    let gallery;
    if (env === 'testing') {
        gallery = _.pick(_gallery, ['title1', 'title2', 'title3', 'items']);
        cb(gallery);
    } else {
        gallery = _.pick(_gallery, ['title1', 'title2', 'title3', 'items']);
        cb(gallery);
    }
};

const getInstagram = function (cb) {
    let gallery;
    if (env === 'testing') {
        gallery = _.pick(_gallery, ['instagram']);
        cb(gallery);
    } else {
        gallery = _.pick(_gallery, ['instagram']);
        cb(gallery);
    }
};

export default {
    getGallery,
    getInstagram
}

