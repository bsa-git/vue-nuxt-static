import _slider from '~/store/data/slider';
import config from '~/config/index'

// Get env
const env = config.env;

const getSlider = function (cb) {
    if (env === 'testing') {
        cb(_slider);
    } else {
        cb(_slider);
    }

};

export default {
    getSlider
}
