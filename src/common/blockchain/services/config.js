/* global web3 */
import Web3 from '../../../embarkArtifacts/modules/web3'

// Todo: Should be moved to .env
const RPC_URL = 'http://localhost:8545'

export default function() {
  web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
}
