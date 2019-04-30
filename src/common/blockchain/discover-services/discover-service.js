import BlockchainService from '../blockchain-service'

import DiscoverValidator from './discover-validator'
import DiscoverContract from '../../../embarkArtifacts/contracts/Discover'

// TODO: Validators ? - YUP
// TODO: check for unlocked account: If it is not -> request unlocking - YUP
// TODO: Make transfer failed an Error object ?

class DiscoverService extends BlockchainService {
  constructor(sharedContext) {
    super(sharedContext, DiscoverContract.address, DiscoverValidator)
  }

  // TODO: Amount -> string/bigInt/number ?
  // TODO: Maybe we can get id from a DApp name ?
  // TODO: formatBigNumberToNumber

  // View methods
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
    try {
      const dappId = await DiscoverContract.methods.id2index(id).call()
      const dapp = await DiscoverContract.methods.dapps(dappId).call()

      return dapp
    } catch (error) {
      throw new Error('Searching DApp does not exists')
    }
  }

  async safeMax() {
    return DiscoverContract.methods.safeMax().call()
  }

  async isDAppExists(id) {
    return DiscoverContract.methods.existingIDs(id).call()
  }

  // Transaction methods
  async createDApp(id, amount, metadata) {
    await this.validator.validateDAppCreation(id, amount)

    const callData = DiscoverContract.methods
      .createDApp(id, amount, metadata)
      .encodeABI()

    await this.sharedContext.SNTService.approveAndCall(
      this.contract,
      amount,
      callData,
    )
  }

  async upVote(id, amount) {
    await this.validator.validateUpVoting(id, amount)

    const callData = DiscoverContract.methods.upvote(id, amount).encodeABI()
    await this.sharedContext.SNTService.approveAndCall(
      this.contract,
      amount,
      callData,
    )
  }

  async downVote(id, amount) {
    await this.validator.validateDownVoting(id, amount)

    const callData = DiscoverContract.methods.downvote(id, amount).encodeABI()
    await this.sharedContext.SNTService.approveAndCall(
      this.contract,
      amount,
      callData,
    )
  }

  async withdraw(id, amount) {
    await super.__unlockServiceAccount(this.service)
    await this.validator.validateWithdrawing(id, amount)

    try {
      await DiscoverContract.methods
        .withdraw(id, amount)
        .send({ from: this.sharedContext.account })
    } catch (error) {
      throw new Error('Transfer on withdraw failed')
    }
  }

  async setMetadata(id, metadata) {
    await super.__unlockServiceAccount(this.service)
    await this.validator.validateMetadataSet(id)

    await DiscoverContract.methods
      .setMetadata(id, metadata)
      .send({ from: this.sharedContext.account })
  }
}

export default DiscoverService
