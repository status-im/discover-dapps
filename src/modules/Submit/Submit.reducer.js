import submitInitialState from '../../common/data/submit'
import reducerUtil from '../../common/utils/reducer'
import {
  onPublishedSuccessAction,
  onReceiveTransactionHashAction,
} from '../TransactionStatus/TransactionStatus.recuder'

import BlockchainTool from '../../common/blockchain'

const blockchainSDK = BlockchainTool.init()

const SHOW_SUBMIT = 'SHOW_SUBMIT'
const CLOSE_SUBMIT = 'CLOSE_SUBMIT'
const ON_INPUT_NAME = 'ON_INPUT_NAME'
const ON_INPUT_DESC = 'ON_INPUT_DESC'
const ON_INPUT_URL = 'ON_INPUT_URL'
const ON_SELECT_CATEGORY = 'ON_SELECT_CATEGORY'
const ON_IMG_READ = 'ON_IMG_READ'
const ON_IMG_ZOOM = 'ON_IMG_ZOOM'
const ON_IMG_MOVE_CONTROL = 'ON_IMG_MOVE_CONTROL'
const ON_IMG_MOVE = 'ON_IMG_MOVE'
const ON_IMG_CANCEL = 'ON_IMG_CANCEL'
const ON_IMG_DONE = 'ON_IMG_DONE'

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

export const onImgReadAction = imgBase64 => ({
  type: ON_IMG_READ,
  payload: imgBase64,
})

export const onImgZoomAction = zoom => ({
  type: ON_IMG_ZOOM,
  payload: zoom,
})

export const onImgMoveControlAction = move => ({
  type: ON_IMG_MOVE_CONTROL,
  payload: move,
})

export const onImgMoveAction = (x, y) => ({
  type: ON_IMG_MOVE,
  payload: { x, y },
})

export const onImgCancelAction = () => ({
  type: ON_IMG_CANCEL,
  payload: null,
})

export const onImgDoneAction = imgBase64 => ({
  type: ON_IMG_DONE,
  payload: imgBase64,
})

export const submitAction = dapp => {
  return async dispatch => {
    dispatch(closeSubmitAction())
    const createdDapp = await blockchainSDK.DiscoverService.createDApp(1, {
      name: dapp.name,
      url: dapp.url,
      desc: dapp.desc,
      category: dapp.category,
      image: dapp.img,
    })
    dispatch(onReceiveTransactionHashAction(createdDapp.tx))

    await blockchainSDK.utils.getTxStatus(createdDapp.tx)
    dispatch(onPublishedSuccessAction())
  }
}

export const statusCheckAction = hash => {
  return async dispatch => {
    await blockchainSDK.utils.getTxStatus(hash)
    dispatch(onPublishedSuccessAction())
  }
}

const showSubmit = state => {
  return Object.assign({}, state, {
    visible: true,
    img: '',
    imgControl: false,
    imgControlZoom: 0,
    imgControlMove: false,
    imgControlX: 0,
    imgControlY: 0,
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

const onImgRead = (state, imgBase64) => {
  return Object.assign({}, state, {
    img: imgBase64,
    imgControl: true,
    imgControlZoom: 0,
    imgControlMove: false,
    imgControlX: 0,
    imgControlY: 0,
  })
}

const onImgZoom = (state, zoom) => {
  return Object.assign({}, state, {
    imgControlZoom: zoom,
  })
}

const onImgMoveControl = (state, move) => {
  return Object.assign({}, state, {
    imgControlMove: move,
  })
}

const onImgMove = (state, payload) => {
  return Object.assign({}, state, {
    imgControlX: payload.x,
    imgControlY: payload.y,
  })
}

const onImgCancel = state => {
  return Object.assign({}, state, {
    img: '',
    imgControl: false,
  })
}

const onImgDone = (state, imgBase64) => {
  return Object.assign({}, state, {
    img: imgBase64,
    imgControl: false,
  })
}

const map = {
  [SHOW_SUBMIT]: showSubmit,
  [CLOSE_SUBMIT]: closeSubmit,
  [ON_INPUT_NAME]: onInputName,
  [ON_INPUT_DESC]: onInputDesc,
  [ON_INPUT_URL]: onInputUrl,
  [ON_SELECT_CATEGORY]: onSelectCategory,
  [ON_IMG_READ]: onImgRead,
  [ON_IMG_ZOOM]: onImgZoom,
  [ON_IMG_MOVE_CONTROL]: onImgMoveControl,
  [ON_IMG_MOVE]: onImgMove,
  [ON_IMG_CANCEL]: onImgCancel,
  [ON_IMG_DONE]: onImgDone,
}

export default reducerUtil(map, submitInitialState)
