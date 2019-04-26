import profileState from '../../common/data/profile'
import reducerUtil from '../../common/utils/reducer'
import { history } from '../../common/redux/store'

const DESKTOP_NAVIGATE = 'DESKTOP_NAVIGATE'
const MOBILE_NAVIGATE = 'MOBILE_NAVIGATE'

export const toggleProfileModalAction = dapp => {
  const { innerWidth } = window
  if (innerWidth <= 1024) {
    history.push(
      `/${dapp.name
        .toLowerCase()
        .trim()
        .replace(' ', '-')}`,
      dapp,
    )
    return {
      type: MOBILE_NAVIGATE,
      payload: dapp,
    }
  } else {
    return {
      type: DESKTOP_NAVIGATE,
      payload: dapp,
    }
  }
}

const toggleProfileModal = (state, payload) => {
  return Object.assign({}, state, {
    visible: !state.visible,
    dapp: payload,
  })
}

const navigateProfile = (state, payload) => {
  return Object.assign({}, state, {
    visible: false,
    dapp: payload,
  })
}
const map = {
  [DESKTOP_NAVIGATE]: toggleProfileModal,
  [MOBILE_NAVIGATE]: navigateProfile,
}

export default reducerUtil(map, profileState)
