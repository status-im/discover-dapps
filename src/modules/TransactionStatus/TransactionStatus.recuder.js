import transactionStatusInitialState from '../../common/data/transaction-status'
import reducerUtil from '../../common/utils/reducer'

const HIDE = 'HIDE'

export const hideAction = () => ({
  type: HIDE,
  payload: null,
})

const hide = state => {
  return Object.assign({}, state, {
    dappName: '',
  })
}

const map = {
  [HIDE]: hide,
}

export default reducerUtil(map, transactionStatusInitialState)
