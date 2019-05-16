import howToSubmitInitialState from '../../common/data/how-to-submit'
import reducerUtil from '../../common/utils/reducer'

const SHOW = 'HOW_TO_SHOW'
const HIDE = 'HOW_TO_HIDE'

export const showHowToSubmitAction = () => {
  window.location.hash = 'how-to-submit'
  return {
    type: SHOW,
    payload: null,
  }
}

export const hideHowToSubmitAction = () => {
  window.history.back()
  return {
    type: HIDE,
    payload: null,
  }
}

const show = state => {
  return Object.assign({}, state, {
    visible: true,
  })
}

const hide = state => {
  return Object.assign({}, state, {
    visible: false,
  })
}

const map = {
  [SHOW]: show,
  [HIDE]: hide,
}

export default reducerUtil(map, howToSubmitInitialState)
