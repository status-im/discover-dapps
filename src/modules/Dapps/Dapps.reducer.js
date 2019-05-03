import hardcodedDapps from '../../common/data/dapps'
import * as Categories from '../../common/data/categories'
import reducerUtil from '../../common/utils/reducer'

const ON_START_FETCH_HIGHEST_RANKED = 'ON_START_FETCH_HIGHEST_RANKED'
const ON_FINISH_FETCH_HIGHEST_RANKED = 'ON_FINISH_FETCH_HIGHEST_RANKED'
const ON_START_FETCH_RECENTLY_ADDED = 'ON_START_FETCH_RECENTLY_ADDED'
const ON_FINISH_FETCH_RECENTLY_ADDED = 'ON_FINISH_FETCH_RECENTLY_ADDED'

const ON_START_FETCH_BY_CATEGORY = 'ON_START_FETCH_BY_CATEGORY'
const ON_FINISH_FETCH_BY_CATEGORY = 'ON_FINISH_FETCH_BY_CATEGORY'

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

  appendItemsAndSort(items) {
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

    this.items.sort((a, b) => {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    })
    this.hasMore = addedItems !== 0
  }
}

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

export const fetchHighestRankedAction = () => {
  return dispatch => {
    dispatch(onStartFetchHighestRankedAction())
    setTimeout(() => {
      const result = hardcodedDapps
        .sort((a, b) => {
          return b.sntValue - a.sntValue
        })
        .slice(0, 50)
      dispatch(onFinishFetchHighestRankedAction(result))
    }, 100)
  }
}

export const fetchRecentlyAddedAction = () => {
  return dispatch => {
    dispatch(onStartFetchRecentlyAddedAction())
    setTimeout(() => {
      const result = hardcodedDapps
        .sort((a, b) => {
          return (
            new Date().getTime(b.dateAdded) - new Date(a.dateAdded).getTime()
          )
        })
        .slice(0, 20)
      dispatch(onFinishFetchRecentlyAddedAction(result))
    }, 100)
  }
}

export const fetchByCategoryAction = category => {
  return dispatch => {
    dispatch(onStartFetchByCategoryAction(category))
    setTimeout(() => {
      const filtered = hardcodedDapps
        .filter(dapp => dapp.category === category)
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
      dispatch(onFinishFetchByCategoryAction(category, filtered))
    }, 1000)
  }
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
      dappState.appendItemsAndSort(dapps)
    }
  })
  return Object.assign({}, state, {
    dappsCategoryMap,
  })
}

const map = {
  [ON_START_FETCH_HIGHEST_RANKED]: onStartFetchHightestRanked,
  [ON_FINISH_FETCH_HIGHEST_RANKED]: onFinishFetchHighestRanked,
  [ON_START_FETCH_RECENTLY_ADDED]: onStartFetchRecentlyAdded,
  [ON_FINISH_FETCH_RECENTLY_ADDED]: onFinishFetchRecentlyAdded,
  [ON_START_FETCH_BY_CATEGORY]: onStartFetchByCategory,
  [ON_FINISH_FETCH_BY_CATEGORY]: onFinishFetchByCategory,
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
  highestRanked: [],
  highestRankedFetched: null,
  recentlyAdded: [],
  recentlyAddedFetched: null,
  dappsCategoryMap,
}

export default reducerUtil(map, dappsInitialState)
