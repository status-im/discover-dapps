import DiscoverValidator from '../discover-validator'
import DiscoverValidatorUtils from '../discover-validator-utils'

class DiscoverReadServiceValidator extends DiscoverValidator {
  async validateUpVoteEffect(id, amount) {
    const dapp = await this.service.getDAppById()
    await DiscoverValidatorUtils.checkDappCorrectness(dapp, id)

    // TODO: should check if dapp.balance is a big number
    const safeMax = await this.service.safeMax()
    await DiscoverValidatorUtils.checkUpVotingAmount(
      dapp.balance + amount,
      safeMax,
    )
  }

  async validateDownVoteCost(id) {
    const dapp = await this.service.getDAppById()
    await DiscoverValidatorUtils.checkDappCorrectness(dapp, id)
  }
}

export default DiscoverReadServiceValidator
