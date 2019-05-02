import voteState from '../../common/data/vote'
import reducerUtil from '../../common/utils/reducer'

const SHOW_UP_VOTE = 'SHOW_UP_VOTE'
const SHOW_DOWN_VOTE = 'SHOW_DOWN_VOTE'
const CLOSE_VOTE = 'CLOSE_VOTE'
const SWITCH_TO_UPVOTE = 'SWITCH_TO_UPVOTE'
const SWITCH_TO_DOWNVOTE = 'SWITCH_TO_DOWNVOTE'
const ON_INPUT_SNT_VALUE = 'ON_INPUT_SNT_VALUE'

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

const showUpVote = (state, dapp) => {
  return Object.assign({}, state, {
    visible: true,
    dapp,
    sntValue: '0',
  })
}

const showDownVote = (state, dapp) => {
  return Object.assign({}, state, {
    visible: true,
    dapp,
    sntValue: '0',
  })
}

const closeVote = state => {
  return Object.assign({}, state, {
    visible: false,
  })
}

const switchToUpvote = state => {
  return Object.assign({}, state, {
    isUpvote: true,
  })
}

const switchToDownvote = state => {
  return Object.assign({}, state, {
    isUpvote: false,
  })
}

const onInputSntValue = (state, sntValue) => {
  return Object.assign({}, state, {
    sntValue,
  })
}

const map = {
  [SHOW_UP_VOTE]: showUpVote,
  [SHOW_DOWN_VOTE]: showDownVote,
  [CLOSE_VOTE]: closeVote,
  [SWITCH_TO_UPVOTE]: switchToUpvote,
  [SWITCH_TO_DOWNVOTE]: switchToDownvote,
  [ON_INPUT_SNT_VALUE]: onInputSntValue,
}

export default reducerUtil(map, voteState)
