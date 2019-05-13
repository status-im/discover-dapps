import utils from './utils'
import SNTService from './services/contracts-services/snt-service/snt-service'
import DiscoverService from './services/contracts-services/discover-service/discover-service'

import BlockchainConfig from './services/config'

const init = function() {
  try {
    BlockchainConfig()

    const sharedContext = {
      account: '',
    }

    sharedContext.SNTService = new SNTService(sharedContext)
    sharedContext.DiscoverService = new DiscoverService(sharedContext)

    return {
      SNTService: sharedContext.SNTService,
      DiscoverService: sharedContext.DiscoverService,
      utils,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export default { init, utils }
