import submitInitialState from '../../common/data/submit'
import reducerUtil from '../../common/utils/reducer'

const SHOW_SUBMIT = 'SHOW_SUBMIT'
const CLOSE_SUBMIT = 'CLOSE_SUBMIT'
const ON_INPUT_NAME = 'ON_INPUT_NAME'
const ON_INPUT_DESC = 'ON_INPUT_DESC'
const ON_INPUT_URL = 'ON_INPUT_URL'
const ON_SELECT_CATEGORY = 'ON_SELECT_CATEGORY'

export const showSubmitAction = () => {
  window.location.hash = 'submit'
  return {
    type: SHOW_SUBMIT,
    payload: null,
  }
}

export const closeSubmitAction = () => {
  window.history.back()
  return {
    type: CLOSE_SUBMIT,
    payload: null,
  }
}

export const onInputNameAction = name => ({
  type: ON_INPUT_NAME,
  payload: name,
})

export const onInputDescAction = desc => ({
  type: ON_INPUT_DESC,
  payload: desc.substring(0, 140),
})

export const onInputUrlAction = url => ({
  type: ON_INPUT_URL,
  payload: url,
})

export const onSelectCategoryAction = category => ({
  type: ON_SELECT_CATEGORY,
  payload: category,
})

const showSubmit = state => {
  return Object.assign({}, state, {
    visible: true,
  })
}

const closeSubmit = state => {
  return Object.assign({}, state, {
    visible: false,
  })
}

const onInputName = (state, name) => {
  return Object.assign({}, state, {
    name,
  })
}

const onInputDesc = (state, desc) => {
  return Object.assign({}, state, {
    desc,
  })
}

const onInputUrl = (state, url) => {
  return Object.assign({}, state, {
    url,
  })
}

const onSelectCategory = (state, category) => {
  return Object.assign({}, state, {
    category,
  })
}

const map = {
  [SHOW_SUBMIT]: showSubmit,
  [CLOSE_SUBMIT]: closeSubmit,
  [ON_INPUT_NAME]: onInputName,
  [ON_INPUT_DESC]: onInputDesc,
  [ON_INPUT_URL]: onInputUrl,
  [ON_SELECT_CATEGORY]: onSelectCategory,
}

export default reducerUtil(map, submitInitialState)
