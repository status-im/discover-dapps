import voteInitialState from '../../common/data/vote'
import reducerUtil from '../../common/utils/reducer'

const SHOW_UP_VOTE = 'SHOW_UP_VOTE'
const SHOW_DOWN_VOTE = 'SHOW_DOWN_VOTE'
const CLOSE_VOTE = 'CLOSE_VOTE'
const SWITCH_TO_UPVOTE = 'SWITCH_TO_UPVOTE'
const SWITCH_TO_DOWNVOTE = 'SWITCH_TO_DOWNVOTE'
const ON_INPUT_SNT_VALUE = 'ON_INPUT_SNT_VALUE'
const UPDATE_AFTER_VOTING_VALUES = 'UPDATE_AFTER_VOTING_VALUES'

const BlockchainSDK = { DiscoverService: {} }
BlockchainSDK.DiscoverService.upVoteEffect = (id, amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(amount)
    }, 1000)
  })
}
BlockchainSDK.DiscoverService.upVote = (id, amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('0xfae78787fa79')
    }, 1000)
  })
}
BlockchainSDK.DiscoverService.downVote = (id, amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('0xfae78787fa79')
    }, 1000)
  })
}

export const showUpVoteAction = dapp => {
  window.location.hash = 'vote'
  return {
    type: SHOW_UP_VOTE,
    payload: dapp,
  }
}

export const showDownVoteAction = dapp => {
  window.location.hash = 'vote'
  return {
    type: SHOW_DOWN_VOTE,
    payload: dapp,
  }
}

export const switchToUpvoteAction = () => ({
  type: SWITCH_TO_UPVOTE,
  payload: null,
})

export const switchToUpDownvoteAction = () => ({
  type: SWITCH_TO_DOWNVOTE,
  payload: null,
})

export const closeVoteAction = () => {
  window.history.back()
  return {
    type: CLOSE_VOTE,
    payload: null,
  }
}

export const onInputSntValueAction = sntValue => ({
  type: ON_INPUT_SNT_VALUE,
  payload: sntValue,
})

export const updateAfterVotingValuesAction = rating => ({
  type: UPDATE_AFTER_VOTING_VALUES,
  payload: rating,
})

export const fetchVoteRatingAction = (dapp, isUpvote, sntValue) => {
  return async (dispatch, getState) => {
    const state = getState()
    const voteState = state.vote
    if (voteState.dapp !== dapp) return
    if (voteState.isUpvote !== isUpvote) return
    if (isUpvote === true && voteState.sntValue !== sntValue.toString()) return
    if (sntValue === 0) return

    const rating = await BlockchainSDK.DiscoverService.upVoteEffect(
      dapp.id,
      sntValue,
    )
    // const rating = dapp.sntValue + (isUpvote ? 1 : -1) * sntValue
    dispatch(updateAfterVotingValuesAction(rating))
  }
}

export const upVoteAction = (dapp, amount) => {
  return async dispatch => {
    dispatch(closeVoteAction())
    const tx = await BlockchainSDK.DiscoverService.upVote(dapp.id, amount)
    console.log('upvote', tx)
  }
}

export const downVoteAction = (dapp, amount) => {
  return async dispatch => {
    dispatch(closeVoteAction())
    const tx = await BlockchainSDK.DiscoverService.downVote(dapp.id, amount)
    console.log('downvote', tx)
  }
}

const showUpVote = (state, dapp) => {
  return Object.assign({}, state, {
    visible: true,
    dapp,
    sntValue: '0',
    isUpvote: true,
    afterVoteRating: null,
  })
}

const showDownVote = (state, dapp) => {
  return Object.assign({}, state, {
    visible: true,
    dapp,
    sntValue: '0',
    isUpvote: false,
    afterVoteRating: null,
  })
}

const closeVote = state => {
  return Object.assign({}, state, {
    visible: false,
    dapp: null,
  })
}

const switchToUpvote = state => {
  return Object.assign({}, state, {
    isUpvote: true,
    afterVoteRating: null,
  })
}

const switchToDownvote = state => {
  return Object.assign({}, state, {
    isUpvote: false,
    afterVoteRating: null,
  })
}

const onInputSntValue = (state, sntValue) => {
  return Object.assign({}, state, {
    sntValue,
  })
}

const updateAfterVotingValues = (state, rating) => {
  return Object.assign({}, state, {
    afterVoteRating: rating,
  })
}

const map = {
  [SHOW_UP_VOTE]: showUpVote,
  [SHOW_DOWN_VOTE]: showDownVote,
  [CLOSE_VOTE]: closeVote,
  [SWITCH_TO_UPVOTE]: switchToUpvote,
  [SWITCH_TO_DOWNVOTE]: switchToDownvote,
  [ON_INPUT_SNT_VALUE]: onInputSntValue,
  [UPDATE_AFTER_VOTING_VALUES]: updateAfterVotingValues,
}

export default reducerUtil(map, voteInitialState)
