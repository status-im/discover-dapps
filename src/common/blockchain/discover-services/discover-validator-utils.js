const discoverValidatorUtils = {
  async checkDappCorrectness(dapp, id) {
    if (dapp.id != id) {
      throw new Error('Error fetching correct data')
    }
  },
  async checkUpVotingAmount(amount, limit) {
    if (amount > limit) {
      throw new Error('You cannot upvote by this much, try with a lower amount')
    }
  },
}

export default discoverValidatorUtils
