import EmbarkJS from '../embarkjs'
let SafeMathJSONConfig = {
  contract_name: {
    deploy: false,
    className: 'SafeMath',
    args: [],
    code:
      '604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820cc322d28e39f3539a0f8a1bd6b9c6fb6b5030f8cf86cee0b71dc22cf23e6bdd20029',
    runtimeBytecode:
      '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820cc322d28e39f3539a0f8a1bd6b9c6fb6b5030f8cf86cee0b71dc22cf23e6bdd20029',
    realRuntimeBytecode:
      '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820',
    linkReferences: {},
    swarmHash:
      'cc322d28e39f3539a0f8a1bd6b9c6fb6b5030f8cf86cee0b71dc22cf23e6bdd2',
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
      '/Users/lyubo/Desktop/Projects/Status/status-instructions/discover-dapps/.embark/contracts/utils/SafeMath.sol',
    originalFilename: 'contracts/utils/SafeMath.sol',
    path:
      '/Users/lyubo/Desktop/Projects/Status/status-instructions/discover-dapps/contracts/utils/SafeMath.sol',
    gas: 'auto',
    type: 'file',
    _gasLimit: 6000000,
    error: false,
  },
  code:
    '604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820cc322d28e39f3539a0f8a1bd6b9c6fb6b5030f8cf86cee0b71dc22cf23e6bdd20029',
  runtime_bytecode:
    '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820cc322d28e39f3539a0f8a1bd6b9c6fb6b5030f8cf86cee0b71dc22cf23e6bdd20029',
  real_runtime_bytecode:
    '73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820',
  swarm_hash:
    'cc322d28e39f3539a0f8a1bd6b9c6fb6b5030f8cf86cee0b71dc22cf23e6bdd2',
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
