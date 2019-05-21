import EmbarkJS from '../embarkjs'
let SafeMathJSONConfig = {
  contract_name: {
    className: 'SafeMath',
    args: [],
    code:
      '604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820a1fb6134b7aa8478932c2e50b064f92dd42f9d1e18dfc5590fe931f0efa5c6960029',
    runtimeBytecode:
      '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820a1fb6134b7aa8478932c2e50b064f92dd42f9d1e18dfc5590fe931f0efa5c6960029',
    realRuntimeBytecode:
      '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820',
    linkReferences: {},
    swarmHash:
      'a1fb6134b7aa8478932c2e50b064f92dd42f9d1e18dfc5590fe931f0efa5c696',
    gasEstimates: {
      creation: {
        codeDepositCost: '15200',
        executionCost: '116',
        totalCost: '15316',
      },
      internal: {
        'add(uint256,uint256)': 'infinite',
        'div(uint256,uint256)': 'infinite',
        'mul(uint256,uint256)': 'infinite',
        'sub(uint256,uint256)': 'infinite',
      },
    },
    functionHashes: {},
    abiDefinition: [],
    filename:
      'E:/Status/projects/StatusDiscoverDapps/.embark/contracts/utils/SafeMath.sol',
    originalFilename: 'contracts/utils/SafeMath.sol',
    path: 'E:/Status/projects/StatusDiscoverDapps/contracts/utils/SafeMath.sol',
    gas: 'auto',
    type: 'file',
    deploy: true,
    _gasLimit: 6000000,
    error: false,
    deploymentAccount: '0x65767f95799109BA028e0397aDD89b0eF637E444',
    realArgs: [],
    address: '0x34b9FD9AE351096365647A497B6A80fd11ECf82d',
    deployedAddress: '0x34b9FD9AE351096365647A497B6A80fd11ECf82d',
  },
  address: '0x34b9FD9AE351096365647A497B6A80fd11ECf82d',
  code:
    '604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820a1fb6134b7aa8478932c2e50b064f92dd42f9d1e18dfc5590fe931f0efa5c6960029',
  runtime_bytecode:
    '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820a1fb6134b7aa8478932c2e50b064f92dd42f9d1e18dfc5590fe931f0efa5c6960029',
  real_runtime_bytecode:
    '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820',
  swarm_hash:
    'a1fb6134b7aa8478932c2e50b064f92dd42f9d1e18dfc5590fe931f0efa5c696',
  gas_estimates: {
    creation: {
      codeDepositCost: '15200',
      executionCost: '116',
      totalCost: '15316',
    },
    internal: {
      'add(uint256,uint256)': 'infinite',
      'div(uint256,uint256)': 'infinite',
      'mul(uint256,uint256)': 'infinite',
      'sub(uint256,uint256)': 'infinite',
    },
  },
  function_hashes: {},
  abi: [],
}
let SafeMath = new EmbarkJS.Blockchain.Contract(SafeMathJSONConfig)
export default SafeMath
