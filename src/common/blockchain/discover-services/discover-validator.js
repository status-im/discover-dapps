class DiscoverValidator {
  constructor(service) {
    this.service = service
  }

  async validateUpVoteEffect(id, amount) {}

  async validateDownVoteCost(id) {}
}

export default DiscoverValidator
