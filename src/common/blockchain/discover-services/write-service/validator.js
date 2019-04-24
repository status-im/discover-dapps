import DiscoverValidatorUtils from '../discover-validator-utils'
import DiscoverRServiceValidator from '../read-service/validator'

class DiscoverWriteServiceValidator extends DiscoverRServiceValidator {
  // TODO: Add SNT allowance checks
  async validateDAppCreation(id, amount) {
    const dappExists = await this.service.isDAppExists(id)
    if (dappExists) {
      throw new Error('You must submit a unique ID')
    }

    if (amount <= 0) {
      throw new Error(
        'You must spend some SNT to submit a ranking in order to avoid spam',
      )
    }

    const safeMax = await this.service.safeMax()
    if (amount > safeMax) {
      throw new Error('You cannot stake more SNT than the ceiling dictates')
    }
  }

  // TODO: Add SNT allowance checks
  async validateUpVoting(id, amount) {
    await super.validateUpVoteEffect(id, amount)

    if (amount <= 0) {
      throw new Error('You must send some SNT in order to upvote')
    }
  }

  // TODO: Add SNT allowance checks
  async validateDownVoting(id, amount) {
    await super.validateDownVoteCost(id)

    const downVoteCost = await this.service.downVoteCost(id)
    if (downVoteCost != amount) {
      throw new Error('Incorrect amount: valid iff effect on ranking is 1%')
    }
  }

  async validateWithdrawing(id, amount) {
    const dapp = await this.service.getDAppById(id)
    await DiscoverValidatorUtils.checkDappCorrectness(dapp, id)

    if (dapp.developer != this.service.account) {
      throw new Error('Only the developer can withdraw SNT staked on this data')
    }

    if (amount > dapp.available) {
      throw new Error(
        'You can only withdraw a percentage of the SNT staked, less what you have already received',
      )
    }
  }

  async validateMetadataSet(id) {
    const dapp = await this.service.getDAppById(id)

    if (dapp.developer != this.service.account) {
      throw new Error('Only the developer can update the metadata')
    }
  }

  // async validateReceiveApproval() {

  // }
}

export default DiscoverWriteServiceValidator
