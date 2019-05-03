import broadcastContractFn from '../helpers'

import * as ipfsSDK from '../../ipfs'
import BlockchainService from '../blockchain-service'

import DiscoverValidator from './discover-validator'
import DiscoverContract from '../../../../embarkArtifacts/contracts/Discover'

class DiscoverService extends BlockchainService {
  constructor(sharedContext) {
    super(sharedContext, DiscoverContract, DiscoverValidator)
  }

  // TODO: Amount -> string/bigInt/number ?
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

  // Todo: Should be implemented
  // async getDApps() {
  //   const dapps = []
  //   const dappsCount = await DiscoverContract.methods.getDAppsCount().call()

  //   for (let i = 0; i < dappsCount; i++) {
  //     const dapp = await DiscoverContract.methods.dapps(i).call()
  //   }
  // }

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
  async createDApp(amount, metadata) {
    const dappMetadata = JSON.parse(JSON.stringify(metadata))
    const dappId = global.web3.keccak256(JSON.stringify(dappMetadata))

    await this.validator.validateDAppCreation(dappId, amount)

    dappMetadata.image = await ipfsSDK.uploadImage(dappMetadata.image)
    const metadataHash = await ipfsSDK.uploadMetadata(
      JSON.stringify(dappMetadata),
    )

    const callData = DiscoverContract.methods
      .createDApp(dappId, amount, metadataHash)
      .encodeABI()

    return this.sharedContext.SNTService.approveAndCall(
      this.contract,
      amount,
      callData,
    )
  }

  async upVote(id, amount) {
    await this.validator.validateUpVoting(id, amount)

    const callData = DiscoverContract.methods.upvote(id, amount).encodeABI()
    return this.sharedContext.SNTService.approveAndCall(
      this.contract,
      amount,
      callData,
    )
  }

  async downVote(id, amount) {
    await this.validator.validateDownVoting(id, amount)

    const callData = DiscoverContract.methods.downvote(id, amount).encodeABI()
    return this.sharedContext.SNTService.approveAndCall(
      this.contract,
      amount,
      callData,
    )
  }

  async withdraw(id, amount) {
    await super.__unlockServiceAccount()
    await this.validator.validateWithdrawing(id, amount)

    try {
      return broadcastContractFn(
        DiscoverContract.methods.withdraw(id, amount).send,
        this.sharedContext.account,
      )
    } catch (error) {
      throw new Error(`Transfer on withdraw failed. Details: ${error.message}`)
    }
  }

  // Todo: Should we upload the metadata to IPFS
  async setMetadata(id, metadata) {
    await super.__unlockServiceAccount()
    await this.validator.validateMetadataSet(id)

    try {
      return broadcastContractFn(
        DiscoverContract.methods.setMetadata(id, metadata).send,
        this.sharedContext.account,
      )
    } catch (error) {
      throw new Error(`Uploading metadata failed. Details: ${error.message}`)
    }
  }
}

export default DiscoverService
