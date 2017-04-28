import env from '~/env'
import development from '~/config/env/development'
import production from '~/config/env/production'
import testing from '~/config/env/testing'

const app_env = env && env.env ? env.env : 'development';

const config = {
    development: development,
    production: production,
    testing: testing
};

const envResult = _.merge(config[app_env], env);

export default envResult


