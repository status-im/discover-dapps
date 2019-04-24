// import DiscoverContract from '../../../embarkArtifacts/contracts/Discover';
import EmbarkJS from '../../embarkArtifacts/embarkjs'

import DiscoverReadService from './discover-services/read-service/discover-r-service'
import DiscoverWriteService from './discover-services/write-service/discover-w-service'

const ReadOnlyServices = {
  DiscoverService: new DiscoverReadService(),
}

// TODO: ask Andy what kind of wallets is going to be used
const init = async function() {
  try {
    const account = await EmbarkJS.enableEthereum()

    const discoverService = new DiscoverWriteService(account)

    return { DiscoverService: discoverService, ...ReadOnlyServices }
  } catch (error) {
    // TODO: Should handle it in an elegant way
    throw new Error(error.message)
  }
}

export default { init, ...ReadOnlyServices }
