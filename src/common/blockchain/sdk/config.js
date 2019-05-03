import Web3 from '../../../embarkArtifacts/modules/web3'

// Should be moved to .env
const RPC_URL = 'http://localhost:8545'

export default function() {
  global.web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
}
