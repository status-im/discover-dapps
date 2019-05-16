import voteInitialState from '../../common/data/vote'
import reducerUtil from '../../common/utils/reducer'
import { showAlertAction } from '../Alert/Alert.reducer'
import {
  onStartProgressAction,
  onReceiveTransactionInfoAction,
  checkTransactionStatusAction,
} from '../TransactionStatus/TransactionStatus.recuder'

const SHOW_UP_VOTE_AFTER_CHECK = 'VOTE_SHOW_UP_VOTE_AFTER_CHECK'
const SHOW_DOWN_VOTE_AFTER_CHEECK = 'VOTE_SHOW_DOWN_VOTE_AFTER_CHEECK'
const CLOSE_VOTE = 'VOTE_CLOSE_VOTE'
const SWITCH_TO_UPVOTE = 'VOTE_SWITCH_TO_UPVOTE'
const SWITCH_TO_DOWNVOTE = 'VOTE_SWITCH_TO_DOWNVOTE'
const ON_INPUT_SNT_VALUE = 'VOTE_ON_INPUT_SNT_VALUE'
const UPDATE_AFTER_VOTING_VALUES = 'VOTE_UPDATE_AFTER_VOTING_VALUES'

const BlockchainSDK = { DiscoverService: {} }
BlockchainSDK.DiscoverService.upVoteEffect = (id, amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(amount)
    }, parseInt(Math.random() * 1000, 10))
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

export const showUpVoteActionAfterCheck = dapp => {
  window.location.hash = 'vote'
  return {
    type: SHOW_UP_VOTE_AFTER_CHECK,
    payload: dapp,
  }
}

export const showDownVoteActionAfterCheck = dapp => {
  window.location.hash = 'vote'
  return {
    type: SHOW_DOWN_VOTE_AFTER_CHEECK,
    payload: dapp,
  }
}

export const showUpVoteAction = dapp => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.transactionStatus.progress) {
      dispatch(
        showAlertAction(
          'There is an active transaction. Please wait for it to finish and then you could be able to vote',
        ),
      )
    } else dispatch(showUpVoteActionAfterCheck(dapp))
  }
}

export const showDownVoteAction = dapp => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.transactionStatus.progress) {
      dispatch(
        showAlertAction(
          'There is an active transaction. Please wait for it to finish and then you could be able to vote',
        ),
      )
    } else dispatch(showDownVoteActionAfterCheck(dapp))
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
    let rating
    try {
      rating = await BlockchainSDK.DiscoverService.upVoteEffect(
        dapp.id,
        sntValue,
      )
    } catch (e) {
      return
    }
    rating = parseInt(rating, 10)

    const state = getState()
    const voteState = state.vote
    if (voteState.dapp !== dapp) return
    if (voteState.isUpvote !== isUpvote) return
    if (isUpvote === true && voteState.sntValue !== sntValue.toString()) return
    if (sntValue === 0) return
    // const rating = dapp.sntValue + (isUpvote ? 1 : -1) * sntValue
    dispatch(updateAfterVotingValuesAction(rating))
  }
}

export const upVoteAction = (dapp, amount) => {
  return async dispatch => {
    dispatch(closeVoteAction())
    dispatch(
      onStartProgressAction(dapp.name, dapp.image, `↑ Upvote by ${amount} SNT`),
    )
    try {
      const tx = await BlockchainSDK.DiscoverService.upVote(dapp.id, amount)
      dispatch(onReceiveTransactionInfoAction(dapp.id, tx))
      dispatch(checkTransactionStatusAction(tx))
    } catch (e) {
      dispatch(showAlertAction('There was an error, please try again'))
    }
  }
}

export const downVoteAction = (dapp, amount) => {
  return async dispatch => {
    dispatch(closeVoteAction())
    dispatch(
      onStartProgressAction(
        dapp.name,
        dapp.image,
        `↓ Downvote by ${amount} SNT`,
      ),
    )
    try {
      const tx = await BlockchainSDK.DiscoverService.downVote(dapp.id, amount)
      dispatch(onReceiveTransactionInfoAction(dapp.id, tx))
      dispatch(checkTransactionStatusAction(tx))
    } catch (e) {
      dispatch(showAlertAction('There was an error, please try again'))
    }
  }
}

const showUpVoteAfterCheck = (state, dapp) => {
  return Object.assign({}, state, {
    visible: true,
    dapp,
    sntValue: '0',
    isUpvote: true,
    afterVoteRating: null,
  })
}

const showDownVoteAfterCheck = (state, dapp) => {
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
  [SHOW_UP_VOTE_AFTER_CHECK]: showUpVoteAfterCheck,
  [SHOW_DOWN_VOTE_AFTER_CHEECK]: showDownVoteAfterCheck,
  [CLOSE_VOTE]: closeVote,
  [SWITCH_TO_UPVOTE]: switchToUpvote,
  [SWITCH_TO_DOWNVOTE]: switchToDownvote,
  [ON_INPUT_SNT_VALUE]: onInputSntValue,
  [UPDATE_AFTER_VOTING_VALUES]: updateAfterVotingValues,
}

export default reducerUtil(map, voteInitialState)
