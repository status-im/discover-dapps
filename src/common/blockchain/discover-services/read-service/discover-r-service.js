import DiscoverContract from '../../../../embarkArtifacts/contracts/Discover'
import DiscoverRServiceValidator from './validator'

class DiscoverReadService {
  constructor() {
    this.validator = new DiscoverRServiceValidator(this)
  }

  // TODO: Amount -> string/bigInt/number ?
  // TODO: Maybe we can get id from a DApp name ?
  // TODO: formatBigNumberToNumber
  // TODO: validators - YUP
  async upVoteEffect(id, amount) {
    const dapp = await this.getDAppById(id)
    await this.validator.validateUpVoteEffect(dapp, id, amount)

    return DiscoverContract.methods.upvoteEffect(id, amount).call()
  }

  async downVoteCost(id) {
    const dapp = await this.getDAppById(id)
    await this.validator.validateDownVoteCost(dapp, id)

    return DiscoverContract.methods.upvoteEffect(id).call()
  }

  async getDAppById(id) {
    const dappId = await DiscoverContract.methods.id2index(id).call()
    return DiscoverContract.methods.dapps(dappId).call()
  }

  async safeMax() {
    console.log(DiscoverContract)
    debugger
    return DiscoverContract.safeMax()
  }

  async isDAppExists(id) {
    return DiscoverContract.methods.existingIDs(id).call()
  }
}

export default DiscoverReadService
