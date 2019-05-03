import utils from './utils'
import SNTService from './sdk/snt-services/snt-service'
import DiscoverService from './sdk/discover-services/discover-service'

import BlockchainConfig from './sdk/config'

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
