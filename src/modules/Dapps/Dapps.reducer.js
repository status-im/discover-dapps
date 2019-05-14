// import hardcodedDapps from '../../common/data/dapps'
import * as Categories from '../../common/data/categories'
import reducerUtil from '../../common/utils/reducer'
// import BlockchainTool from '../../common/blockchain'

const ON_FINISH_FETCH_ALL_DAPPS_ACTION = 'ON_FINISH_FETCH_ALL_DAPPS_ACTION'

const ON_START_FETCH_HIGHEST_RANKED = 'ON_START_FETCH_HIGHEST_RANKED'
const ON_FINISH_FETCH_HIGHEST_RANKED = 'ON_FINISH_FETCH_HIGHEST_RANKED'
const ON_START_FETCH_RECENTLY_ADDED = 'ON_START_FETCH_RECENTLY_ADDED'
const ON_FINISH_FETCH_RECENTLY_ADDED = 'ON_FINISH_FETCH_RECENTLY_ADDED'

const ON_START_FETCH_BY_CATEGORY = 'ON_START_FETCH_BY_CATEGORY'
const ON_FINISH_FETCH_BY_CATEGORY = 'ON_FINISH_FETCH_BY_CATEGORY'

const ON_ADD_NEW_DAPP = 'ON_ADD_NEW_DAPP'

const RECENTLY_ADDED_SIZE = 50
const HIGHEST_RANKED_SIZE = 50

// const BlockchainSDK = BlockchainTool.init()
const BlockchainSDK = { DiscoverService: {} }
BlockchainSDK.DiscoverService.getDApps = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(hardcodedDapps)
    }, 100)
  })
}

class DappsState {
  constructor() {
    this.items = []
    this.hasMore = true
    this.fetched = null
  }

  canFetch() {
    return this.hasMore && this.fetched !== true
  }

  setFetched(fetched) {
    this.fetched = fetched
  }

  appendItems(items) {
    const availableNames = new Set()
    let addedItems = 0
    for (let i = 0; i < this.items.length; i += 1)
      availableNames.add(this.items[i].name)
    for (let i = 0; i < items.length; i += 1) {
      if (availableNames.has(items[i].name) === false) {
        addedItems += 1
        this.items.push(items[i])
      }
    }

    // this.items.sort((a, b) => {
    //   return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    // })
    this.hasMore = addedItems !== 0
  }
}

export const onFinishFetchAllDappsAction = dapps => ({
  type: ON_FINISH_FETCH_ALL_DAPPS_ACTION,
  payload: dapps,
})

export const onStartFetchHighestRankedAction = () => ({
  type: ON_START_FETCH_HIGHEST_RANKED,
  payload: null,
})

export const onFinishFetchHighestRankedAction = highestRanked => ({
  type: ON_FINISH_FETCH_HIGHEST_RANKED,
  payload: highestRanked,
})

export const onStartFetchRecentlyAddedAction = () => ({
  type: ON_START_FETCH_RECENTLY_ADDED,
  payload: null,
})

export const onFinishFetchRecentlyAddedAction = recentlyAdded => ({
  type: ON_FINISH_FETCH_RECENTLY_ADDED,
  payload: recentlyAdded,
})

export const onStartFetchByCategoryAction = category => ({
  type: ON_START_FETCH_BY_CATEGORY,
  payload: category,
})

export const onFinishFetchByCategoryAction = (category, dapps) => ({
  type: ON_FINISH_FETCH_BY_CATEGORY,
  payload: { category, dapps },
})

const fetchAllDappsInState = async (dispatch, getState) => {
  const stateDapps = getState().dapps
  if (stateDapps.dapps === null) {
    let dapps = await BlockchainSDK.DiscoverService.getDApps()
    dapps = dapps.map(dapp => {
      return Object.assign(dapp.metadata, { sntValue: parseInt(dapp.rate, 10) })
    })
    dapps.sort((a, b) => {
      return b.sntValue - a.sntValue
    })

    dispatch(onFinishFetchAllDappsAction(dapps))
    return dapps
  }
  return stateDapps.dapps
}

export const fetchAllDappsAction = () => {
  return async (dispatch, getState) => {
    dispatch(onStartFetchHighestRankedAction())
    dispatch(onStartFetchRecentlyAddedAction())

    const dapps = await fetchAllDappsInState(dispatch, getState)

    const highestRanked = dapps.slice(0, HIGHEST_RANKED_SIZE)
    let recentlyAdded = [...dapps]
    recentlyAdded.sort((a, b) => {
      return new Date().getTime(b.dateAdded) - new Date(a.dateAdded).getTime()
    })
    recentlyAdded = recentlyAdded.slice(0, RECENTLY_ADDED_SIZE)

    dispatch(onFinishFetchHighestRankedAction(highestRanked))
    dispatch(onFinishFetchRecentlyAddedAction(recentlyAdded))
  }
}

// export const fetchHighestRankedAction = () => {
//   return dispatch => {
//     dispatch(onStartFetchHighestRankedAction())
//     setTimeout(() => {
//       const result = hardcodedDapps
//         .sort((a, b) => {
//           return b.sntValue - a.sntValue
//         })
//         .slice(0, 50)
//       dispatch(onFinishFetchHighestRankedAction(result))
//     }, 100)
//   }
// }

// export const fetchRecentlyAddedAction = () => {
//   return dispatch => {
//     dispatch(onStartFetchRecentlyAddedAction())
//     setTimeout(() => {
//       const result = hardcodedDapps
//         .sort((a, b) => {
//           return (
//             new Date().getTime(b.dateAdded) - new Date(a.dateAdded).getTime()
//           )
//         })
//         .slice(0, 20)
//       dispatch(onFinishFetchRecentlyAddedAction(result))
//     }, 100)
//   }
// }

export const fetchByCategoryAction = category => {
  return async (dispatch, getState) => {
    dispatch(onStartFetchByCategoryAction(category))

    const dapps = await fetchAllDappsInState(dispatch, getState)
    const filteredByCategory = dapps.filter(dapp => dapp.category === category)
    const dappsCategoryState = getState().dapps.dappsCategoryMap.get(category)
    const from = dappsCategoryState.items.length
    const to = Math.min(from + 5, filteredByCategory.length)
    const dappsCategorySlice = filteredByCategory.slice(from, to)

    dispatch(onFinishFetchByCategoryAction(category, dappsCategorySlice))
  }
}

export const onAddNewDappAction = dapp => ({
  type: ON_ADD_NEW_DAPP,
  payload: dapp,
})

const onFinishFetchAllDapps = (state, dapps) => {
  return Object.assign({}, state, { dapps })
}

const onStartFetchHightestRanked = state => {
  return Object.assign({}, state, {
    highestRankedFetched: false,
  })
}

const onFinishFetchHighestRanked = (state, payload) => {
  return Object.assign({}, state, {
    highestRanked: payload,
    highestRankedFetched: true,
  })
}

const onStartFetchRecentlyAdded = state => {
  return Object.assign({}, state, {
    recentlyAddedFetched: false,
  })
}

const onFinishFetchRecentlyAdded = (state, payload) => {
  return Object.assign({}, state, {
    recentlyAdded: payload,
    recentlyAddedFetched: true,
  })
}

const onStartFetchByCategory = (state, payload) => {
  const dappsCategoryMap = new Map()
  state.dappsCategoryMap.forEach((dappState, category) => {
    dappsCategoryMap.set(category, dappState)
    if (category === payload) dappState.setFetched(true)
  })
  return Object.assign({}, state, {
    dappsCategoryMap,
  })
}

const onFinishFetchByCategory = (state, payload) => {
  const { category, dapps } = payload

  const dappsCategoryMap = new Map()
  state.dappsCategoryMap.forEach((dappState, category_) => {
    dappsCategoryMap.set(category_, dappState)
    if (category_ === category) {
      dappState.setFetched(false)
      dappState.appendItems(dapps)
    }
  })
  return Object.assign({}, state, {
    dappsCategoryMap,
  })
}

const insertDappIntoSortedArray = (source, dapp, cmp) => {
  for (let i = 0; i < source.length; i += 1) {
    if (cmp(source[i], dapp) === true) {
      source.splice(i, 0, dapp)
      break
    }
  }
}

const onAddNewDapp = (state, dapp) => {
  const dappsCategoryMap = new Map()
  const { dapps } = state
  let { highestRanked, recentlyAdded } = state

  insertDappIntoSortedArray(dapps, dapp, (target, dappItem) => {
    return target.sntValue < dappItem.sntValue
  })
  insertDappIntoSortedArray(highestRanked, dapp, (target, dappItem) => {
    return target.sntValue < dappItem.sntValue
  })
  highestRanked = state.highestRanked.splice(0, HIGHEST_RANKED_SIZE)
  insertDappIntoSortedArray(recentlyAdded, dapp, (target, dappItem) => {
    return (
      new Date().getTime(target.dateAdded) <
      new Date(dappItem.dateAdded).getTime()
    )
  })
  recentlyAdded = recentlyAdded.splice(0, RECENTLY_ADDED_SIZE)

  state.dappsCategoryMap.forEach((dappState, category_) => {
    dappsCategoryMap.set(category_, dappState)
  })
  const dappState = dappsCategoryMap.get(dapp.metadata.category)
  insertDappIntoSortedArray(dappState.items, dapp, (target, dappItem) => {
    return target.sntValue < dappItem.sntValue
  })

  return Object.assign({}, state, {
    dapps,
    highestRanked,
    recentlyAdded,
    dappsCategoryMap,
  })
}

const map = {
  [ON_FINISH_FETCH_ALL_DAPPS_ACTION]: onFinishFetchAllDapps,
  [ON_START_FETCH_HIGHEST_RANKED]: onStartFetchHightestRanked,
  [ON_FINISH_FETCH_HIGHEST_RANKED]: onFinishFetchHighestRanked,
  [ON_START_FETCH_RECENTLY_ADDED]: onStartFetchRecentlyAdded,
  [ON_FINISH_FETCH_RECENTLY_ADDED]: onFinishFetchRecentlyAdded,
  [ON_START_FETCH_BY_CATEGORY]: onStartFetchByCategory,
  [ON_FINISH_FETCH_BY_CATEGORY]: onFinishFetchByCategory,
  [ON_ADD_NEW_DAPP]: onAddNewDapp,
}

const dappsCategoryMap = new Map()
dappsCategoryMap.set(Categories.EXCHANGES, new DappsState())
dappsCategoryMap.set(Categories.MARKETPLACES, new DappsState())
dappsCategoryMap.set(Categories.COLLECTIBLES, new DappsState())
dappsCategoryMap.set(Categories.GAMES, new DappsState())
dappsCategoryMap.set(Categories.SOCIAL_NETWORKS, new DappsState())
dappsCategoryMap.set(Categories.UTILITIES, new DappsState())
dappsCategoryMap.set(Categories.OTHER, new DappsState())

const dappsInitialState = {
  dapps: null,
  highestRanked: [],
  highestRankedFetched: null,
  recentlyAdded: [],
  recentlyAddedFetched: null,
  dappsCategoryMap,
}

export default reducerUtil(map, dappsInitialState)
