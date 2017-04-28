import _testimonials from '~/store/data/testimonials';
import config from '~/config/index'

// Get env
const env = config.env;

const getTestimonials = function (cb) {
    if (env === 'testing') {
        cb(_testimonials);
    } else {
        cb(_testimonials);
    }

};

export default {
    getTestimonials
}

