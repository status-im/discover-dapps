import { connect } from 'react-redux'
import DappListItem from './DappListItem'
import {
  showDownVoteAction,
  showUpVoteAction,
  switchToUpvoteAction,
  switchToUpDownvoteAction,
} from '../../../modules/Vote/Vote.reducer'

const mapDispatchToProps = dispatch => ({
  onClickUpVote: dapp => {
    window.location.hash = 'vote'
    dispatch(switchToUpvoteAction())
    dispatch(showUpVoteAction(dapp))
  },
  onClickDownVote: dapp => {
    window.location.hash = 'vote'
    dispatch(switchToUpDownvoteAction())
    dispatch(showDownVoteAction(dapp))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(DappListItem)
