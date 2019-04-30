import EmbarkJS from '../../embarkArtifacts/embarkjs'

class BlockchainService {
  constructor(sharedContext, contractAddress, Validator) {
    this.contract = contractAddress
    this.sharedContext = sharedContext
    this.validator = new Validator(this)
  }

  async __unlockServiceAccount() {
    try {
      const accounts = await EmbarkJS.Blockchain.Providers.web3.getAccounts()
      if (accounts.length > 0) {
        this.sharedContext.account = accounts[0]
      }

      this.sharedContext.account = (await EmbarkJS.enableEthereum())[0]
    } catch (error) {
      throw new Error('Could not unlock an account or web3 is missing')
    }
  }
}

export default BlockchainService
