import transactionStatusInitialState from '../../common/data/transaction-status'
import reducerUtil from '../../common/utils/reducer'
import {
  setTransactionData,
  getTransactionData,
} from './TransactionStatus.utilities'

const HIDE = 'HIDE'
const ON_START_PROGRESS = 'ON_START_PROGRESS'
const ON_RECEIVE_TRANSACTION_HASH = 'ON_RECEIVE_TRANSACTION_HASH'
const ON_STATUS_CHECK = 'ON_STATUS_CHECK'

export const hideAction = () => ({
  type: HIDE,
  payload: null,
})

export const onStartProgressAction = dapp => ({
  type: ON_START_PROGRESS,
  payload: dapp,
})

export const onReceiveTransactionHashAction = hash => ({
  type: ON_RECEIVE_TRANSACTION_HASH,
  payload: hash,
})

// status 0/1/2 failed/success/pending
export const onStatusCheckAction = status => ({
  type: ON_STATUS_CHECK,
  payload: parseInt(status, 10),
})

const hide = state => {
  const transactionData = getTransactionData()
  let dappState
  if (transactionData !== '') {
    dappState = JSON.parse(transactionData)
    dappState.dappName = ''
    setTransactionData(JSON.stringify(dappState))
  } else {
    dappState.dappName = ''
  }
  return Object.assign({}, state, dappState)
}

const onStartProgress = (state, dapp) => {
  const dappState = {
    dappTransactionHash: '',
    dappName: dapp.name,
    dappImg: dapp.img,
    progress: true,
    published: false,
    failed: false,
  }
  setTransactionData(JSON.stringify(dappState))
  return Object.assign({}, state, dappState)
}

const onReceiveTransactionHash = (state, hash) => {
  const transactionData = getTransactionData()
  if (transactionData !== '') {
    const dappState = JSON.parse(transactionData)
    dappState.dappTransactionHash = hash
    setTransactionData(JSON.stringify(dappState))
  }
  return Object.assign({}, state, {
    dappTransactionHash: hash,
  })
}

const onStatusCheck = (state, status) => {
  const transactionData = getTransactionData()
  let dappState
  if (transactionData !== '') {
    dappState = JSON.parse(transactionData)
    switch (status) {
      case 0:
        dappState.progress = false
        dappState.published = false
        dappState.failed = true
        dappState.dappTransactionHash = ''
        break
      default:
      case 1:
        dappState.progress = false
        dappState.published = true
        dappState.failed = false
        dappState.dappTransactionHash = ''
        break
      case 2:
        dappState.progress = true
        dappState.published = false
        dappState.failed = false
        break
    }
    setTransactionData(JSON.stringify(dappState))
  } else {
    dappState = {
      dappTransactionHash: '',
      dappName: '',
      published: false,
      failed: false,
      progress: false,
    }
  }
  return Object.assign({}, state, dappState)
}

const map = {
  [HIDE]: hide,
  [ON_START_PROGRESS]: onStartProgress,
  [ON_RECEIVE_TRANSACTION_HASH]: onReceiveTransactionHash,
  [ON_STATUS_CHECK]: onStatusCheck,
}

export default reducerUtil(map, transactionStatusInitialState)
