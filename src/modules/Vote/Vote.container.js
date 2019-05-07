import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Vote from './Vote'
import {
  closeVoteAction,
  switchToUpvoteAction,
  switchToUpDownvoteAction,
  onInputSntValueAction,
  fetchVoteRatingAction,
} from './Vote.reducer'

const mapStateToProps = state => state.vote
const mapDispatchToProps = dispatch => ({
  onClickClose: () => dispatch(closeVoteAction()),
  onClickUpvote: () => dispatch(switchToUpvoteAction()),
  onClickDownvote: () => dispatch(switchToUpDownvoteAction()),
  onInputSntValue: sntValue => dispatch(onInputSntValueAction(sntValue)),
  fetchVoteRating: (dapp, isUpvote, sntValue) => {
    dispatch(fetchVoteRatingAction(dapp, isUpvote, sntValue))
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Vote),
)
