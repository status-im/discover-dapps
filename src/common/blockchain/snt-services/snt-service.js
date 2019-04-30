import BlockchainService from '../blockchain-service'

import SNTValidator from './snt-validator'
import SNTToken from '../../../embarkArtifacts/contracts/SNT'

class SNTService extends BlockchainService {
  constructor(sharedContext) {
    super(sharedContext, SNTToken.address, SNTValidator)
  }

  async allowance(from, to) {
    return SNTToken.methods.allowance(from, to).call()
  }

  async balanceOf(account) {
    return SNTToken.methods.balanceOf(account).call()
  }

  async controller() {
    return SNTToken.methods.controller().call()
  }

  async transferable() {
    return SNTToken.methods.transfersEnabled().call()
  }

  async approveAndCall(spender, amount, callData) {
    await super.__unlockServiceAccount(this.service)
    await this.validator.validateApproveAndCall(spender, amount)

    await SNTToken.methods
      .approveAndCall(spender, amount, callData)
      .send({ from: this.sharedContext.account })
  }

  // This is for testing purpose only
  async generateTokens() {
    await super.__unlockServiceAccount(this.service)

    await SNTToken.methods
      .generateTokens(this.sharedContext.account, 10000)
      .send()
  }
}

export default SNTService
