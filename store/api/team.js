import _team from '~/store/data/team';
import config from '~/config/index'

// Get env
const env = config.env;

const getInfo = function (cb) {
    let team;
    if (env === 'testing') {
        team = _.pick(_team, ['info']);
        cb(team.info);
    } else {
        team = _.pick(_team, ['info']);
        cb(team.info);
    }

};

const getSummary = function (cb) {
    let team;
    if (env === 'testing') {
        team = _.pick(_team, ['summary']);
        cb(team.summary);
    } else {
        team = _.pick(_team, ['summary']);
        cb(team.summary);
    }

};

const getMembers = function (cb) {
    let team;
    if (env === 'testing') {
        team = _.pick(_team, ['members']);
        cb(team.members);
    } else {
        team = _.pick(_team, ['members']);
        cb(team.members);
    }

};

export default {
    getInfo,
    getSummary,
    getMembers,
}
