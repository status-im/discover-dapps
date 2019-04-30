import SNTService from './snt-services/snt-service'
import DiscoverService from './discover-services/discover-service'

const init = async function() {
  try {
    const sharedContext = {
      account: '',
    }

    sharedContext.SNTService = new SNTService(sharedContext)
    sharedContext.DiscoverService = new DiscoverService(sharedContext)

    return {
      SNTService: sharedContext.SNTService,
      DiscoverService: sharedContext.DiscoverService,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export default { init }
