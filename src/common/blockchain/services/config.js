/* global web3 */
import Web3 from 'web3'

// Todo: Should be moved to .env
const RPC_URL = 'https://ropsten.infura.io/v3/b1a4c62c0f2240ffb40025517aa98106'

export default function() {
  web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
}
