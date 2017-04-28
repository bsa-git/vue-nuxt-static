import _blog from '~/store/data/blog';
import config from '~/config/index'

// Get env
const env = config.env;

const getPosts = function (cb, id) {
    let blog;
    if (env === 'testing') {
        blog = _.pick(_blog, ['url', 'title1', 'title2', 'title3', 'posts', 'pager']);
        cb(blog);
    } else {
        blog = _.pick(_blog, ['url', 'title1', 'title2', 'title3', 'posts', 'pager']);
        cb(blog);
    }
};

const getPost = function (cb, id) {
    let blog;
    if (env === 'testing') {
        blog = _.pick(_blog, ['url', 'post']);
        cb(blog);
    } else {
        blog = _.pick(_blog, ['url', 'post']);
        cb(blog);
    }
};

const getCategories = function (cb) {
    let blog;
    if (env === 'testing') {
        blog = _.pick(_blog, ['categories']);
        cb(blog);
    } else {
        blog = _.pick(_blog, ['categories']);
        cb(blog);
    }
};

const getPopular = function (cb) {
    let blog;
    if (env === 'testing') {
        blog = _.pick(_blog, ['popular']);
        cb(blog);
    } else {
        blog = _.pick(_blog, ['popular']);
        cb(blog);
    }
};

export default {
    getPosts,
    getPost,
    getCategories,
    getPopular,
}

