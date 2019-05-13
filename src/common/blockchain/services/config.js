/* global web3 */
import Web3 from '../../../embarkArtifacts/modules/web3'

// Todo: Should be moved to .env
const RPC_URL = 'https://ropsten.infura.io/v3/8675214b97b44e96b70d05326c61fd6a'

export default function() {
  web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
}
