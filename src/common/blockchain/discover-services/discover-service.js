import DiscoverContract from '../../../embarkArtifacts/contracts/Discover'
import DiscoverServiceValidator from './discover-validator'

class DiscoverService {
  constructor(Validator) {
    this.validator = new Validator(this)

    if (!(this.validator instanceof DiscoverServiceValidator)) {
      throw new Error(
        'Discover Service Validator should be an instance of DiscoverValidator',
      )
    }
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
    return DiscoverContract.methods.safeMax().call()
  }

  // async isDAppExists(id) {
  //   return DiscoverContract.methods.existingIDs(id).call()
  // }
}

export default DiscoverService
