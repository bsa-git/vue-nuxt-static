import envConfig from '~/config/env/index'
import globalConfig from '~/config/global'

const config = _.merge(globalConfig, envConfig);

export default config


