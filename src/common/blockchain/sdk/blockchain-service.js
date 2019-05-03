import EmbarkJS from '../../../embarkArtifacts/embarkjs'

class BlockchainService {
  constructor(sharedContext, contract, Validator) {
    this.contract = contract.address
    contract.setProvider(global.web3.currentProvider)

    this.sharedContext = sharedContext
    this.validator = new Validator(this)
  }

  async __unlockServiceAccount() {
    const accounts = await EmbarkJS.Blockchain.Providers.web3.getAccounts()
    // if (accounts.length > 0) {
    this.sharedContext.account = accounts[0]
    // } else {
    // const provider = global.web3.currentProvider
    // Check for undefined
    // console.log(await global.web3.eth.getAccounts())
    // const accounts = await EmbarkJS.enableEthereum()
    // if (accounts) {
    //   this.sharedContext.account = accounts[0]
    // }
    // global.web3.setProvider(provider)
    // }

    // throw new Error('Could not unlock an account or web3 is missing')
  }
}

export default BlockchainService
