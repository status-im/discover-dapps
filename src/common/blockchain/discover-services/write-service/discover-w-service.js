import DiscoverContract from '../../../../embarkArtifacts/contracts/Discover'

import DiscoverService from '../discover-service'
import DiscoverWServiceValidator from './validator'

// TODO: Validators ?
// TODO: check for unlocked account: If it is not -> request unlocking
// TODO: preOperation -> inherited method ?
const unlockAccount = async function(account) {
  return account
}

class DiscoverWriteService extends DiscoverService {
  constructor(unlockedAccount) {
    super(DiscoverWServiceValidator)
    this.account = unlockedAccount
  }

  async createDApp(id, amount, metadata) {
    await unlockAccount(this.account)
    await this.validator.validateDAppCreation(id, amount)
    try {
      await DiscoverContract.methods
        .createDApp(id, amount, metadata)
        .send({ from: this.account })
    } catch (error) {
      console.log(error)
      throw new Error('Transfer failed')
    }
  }

  async upVote(id, amount) {
    await unlockAccount(this.account)
    await this.validator.validateUpVoting(id, amount)

    try {
      await DiscoverContract.methods
        .upVote(id, amount)
        .send({ from: this.account })
    } catch (error) {
      throw new Error('Transfer failed')
    }
  }

  async downVote(id, amount) {
    await unlockAccount(this.account)
    await this.validator.validateDownVoting(id, amount)

    try {
      await DiscoverContract.methods
        .downVote(id, amount)
        .send({ from: this.account })
    } catch (error) {
      throw new Error('Transfer failed')
    }
  }

  async withdraw(id, amount) {
    await unlockAccount(this.account)
    await this.validator.validateWithdrawing(id, amount)

    try {
      await DiscoverContract.methods
        .withdraw(id, amount)
        .send({ from: this.account })
    } catch (error) {
      throw new Error('Transfer failed')
    }
  }

  async setMetadata(id, metadata) {
    await unlockAccount(this.account)
    await this.validator.validateMetadataSet(id)

    await DiscoverContract.methods
      .setMetadata(id, metadata)
      .send({ from: this.account })
  }

  // async receiveApproval(from, amount, token, data) {
  //   await unlockAccount(this.account);
  //   await this.validator.validateReceiveApproval();

  //   await DiscoverContract.methods.receiveApproval(from, amount, token, data, { from: this.account });
  // }
}

export default DiscoverWriteService
