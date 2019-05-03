import voteInitialState from '../../common/data/vote'
import reducerUtil from '../../common/utils/reducer'

const SHOW_UP_VOTE = 'SHOW_UP_VOTE'
const SHOW_DOWN_VOTE = 'SHOW_DOWN_VOTE'
const CLOSE_VOTE = 'CLOSE_VOTE'
const SWITCH_TO_UPVOTE = 'SWITCH_TO_UPVOTE'
const SWITCH_TO_DOWNVOTE = 'SWITCH_TO_DOWNVOTE'
const ON_INPUT_SNT_VALUE = 'ON_INPUT_SNT_VALUE'
const UPDATE_AFTER_VOTING_VALUES = 'UPDATE_AFTER_VOTING_VALUES'

export const showUpVoteAction = dapp => ({
  type: SHOW_UP_VOTE,
  payload: dapp,
})

export const showDownVoteAction = dapp => ({
  type: SHOW_DOWN_VOTE,
  payload: dapp,
})

export const switchToUpvoteAction = () => ({
  type: SWITCH_TO_UPVOTE,
  payload: null,
})

export const switchToUpDownvoteAction = () => ({
  type: SWITCH_TO_DOWNVOTE,
  payload: null,
})

export const closeVoteAction = () => ({
  type: CLOSE_VOTE,
  payload: null,
})

export const onInputSntValueAction = sntValue => ({
  type: ON_INPUT_SNT_VALUE,
  payload: sntValue,
})

export const updateAfterVotingValuesAction = (rating, position) => ({
  type: UPDATE_AFTER_VOTING_VALUES,
  payload: {
    rating,
    position,
  },
})

export const fetchVoteRatingAction = (dapp, isUpvote, sntValue) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const state = getState()
      const voteState = state.vote
      if (voteState.dapp !== dapp) return
      if (voteState.isUpvote !== isUpvote) return
      if (isUpvote === true && voteState.sntValue !== sntValue.toString())
        return
      if (sntValue === 0) return

      const rating = dapp.sntValue + (isUpvote ? 1 : -1) * sntValue
      dispatch(updateAfterVotingValuesAction(rating, isUpvote ? 1 : 3))
    }, 1000)
  }
}

const showUpVote = (state, dapp) => {
  return Object.assign({}, state, {
    visible: true,
    dapp,
    sntValue: '0',
    isUpvote: true,
    afterVoteRating: null,
    afterVoteCategoryPosition: null,
  })
}

const showDownVote = (state, dapp) => {
  return Object.assign({}, state, {
    visible: true,
    dapp,
    sntValue: '0',
    isUpvote: false,
    afterVoteRating: null,
    afterVoteCategoryPosition: null,
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
    afterVoteCategoryPosition: null,
  })
}

const switchToDownvote = state => {
  return Object.assign({}, state, {
    isUpvote: false,
    afterVoteRating: null,
    afterVoteCategoryPosition: null,
  })
}

const onInputSntValue = (state, sntValue) => {
  return Object.assign({}, state, {
    sntValue,
  })
}

const updateAfterVotingValues = (state, payload) => {
  return Object.assign({}, state, {
    afterVoteRating: payload.rating,
    afterVoteCategoryPosition: payload.position,
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
