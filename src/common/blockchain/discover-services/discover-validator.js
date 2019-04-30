const checkDappCorrectness = async function(dapp, id) {
  if (dapp.id != id) {
    throw new Error('Error fetching correct data')
  }
}

class DiscoverValidator {
  constructor(service) {
    this.service = service
  }

  async validateUpVoteEffect(id, amount) {
    const dapp = await this.service.getDAppById(id)
    await checkDappCorrectness(dapp, id)

    // TODO: should check if dapp.balance is a big number
    const safeMax = await this.service.safeMax()
    if (dapp.balance + amount > safeMax) {
      throw new Error('You cannot upvote by this much, try with a lower amount')
    }
  }

  async validateDownVoteCost(id) {
    const dapp = await this.service.getDAppById(id)
    await checkDappCorrectness(dapp, id)
  }

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

  async validateUpVoting(id, amount) {
    await this.validateUpVoteEffect(id, amount)

    if (amount <= 0) {
      throw new Error('You must send some SNT in order to upvote')
    }
  }

  async validateDownVoting(id, amount) {
    await this.validateDownVoteCost(id)

    const downVoteCost = await this.service.downVoteCost(id)
    if (downVoteCost != amount) {
      throw new Error('Incorrect amount: valid iff effect on ranking is 1%')
    }
  }

  async validateWithdrawing(id, amount) {
    const dapp = await this.service.getDAppById(id)
    await checkDappCorrectness(dapp, id)

    if (dapp.developer != this.service.sharedContext.account) {
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

    if (dapp.developer != this.service.sharedContext.account) {
      throw new Error('Only the developer can update the metadata')
    }
  }
}

export default DiscoverValidator
