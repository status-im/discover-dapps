import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Vote from './Vote'
import {
  closeVoteAction,
  switchToUpvoteAction,
  switchToUpDownvoteAction,
  onInputSntValueAction,
} from './Vote.reducer'

const mapStateToProps = state => state.vote
const mapDispatchToProps = dispatch => ({
  onClickClose: () => {
    window.history.back()
    dispatch(closeVoteAction())
  },
  onClickUpvote: () => dispatch(switchToUpvoteAction()),
  onClickDownvote: () => dispatch(switchToUpDownvoteAction()),
  onInputSntValue: sntValue => dispatch(onInputSntValueAction(sntValue)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Vote),
)
