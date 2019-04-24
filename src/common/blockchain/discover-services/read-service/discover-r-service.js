import DiscoverService from '../discover-service'
import DiscoverReadServiceValidator from './validator'

class DiscoverReadService extends DiscoverService {
  constructor() {
    super(DiscoverReadServiceValidator)
  }
}

export default DiscoverReadService
