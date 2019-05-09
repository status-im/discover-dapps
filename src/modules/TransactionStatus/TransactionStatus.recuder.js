import transactionStatusInitialState from '../../common/data/transaction-status'
import reducerUtil from '../../common/utils/reducer'
import {
  setTransactionData,
  getTransactionData,
} from './TransactionStatus.utilities'

const HIDE = 'HIDE'
const ON_START_PROGRESS = 'ON_START_PROGRESS'
const ON_RECEIVE_TRANSACTION_HASH = 'ON_RECEIVE_TRANSACTION_HASH'
const ON_PUBLISHED_SUCCESS = 'ON_PUBLISHED_SUCCESS'

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

export const onPublishedSuccessAction = () => ({
  type: ON_PUBLISHED_SUCCESS,
  payload: null,
})

const hide = state => {
  return Object.assign({}, state, {
    dappName: '',
  })
}

const onStartProgress = (state, dapp) => {
  const dappState = {
    dappTransactionHash: '',
    dappName: dapp.name,
    dappImg: dapp.img,
    progress: true,
    published: false,
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

const onPublishedSuccess = state => {
  const transactionData = getTransactionData()
  if (transactionData !== '') {
    const dappState = JSON.parse(transactionData)
    dappState.dappTransactionHash = ''
    setTransactionData(JSON.stringify(dappState))
  }
  return Object.assign({}, state, {
    progress: false,
    published: true,
  })
}

const map = {
  [HIDE]: hide,
  [ON_START_PROGRESS]: onStartProgress,
  [ON_RECEIVE_TRANSACTION_HASH]: onReceiveTransactionHash,
  [ON_PUBLISHED_SUCCESS]: onPublishedSuccess,
}

export default reducerUtil(map, transactionStatusInitialState)
