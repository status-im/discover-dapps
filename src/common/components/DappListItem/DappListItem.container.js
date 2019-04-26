import { connect } from 'react-redux'
import DappListItem from './DappListItem'
import {
  showDownVoteAction,
  showUpVoteAction,
} from '../../../modules/Vote/Vote.reducer'
import { toggleProfileModalAction } from '../../../modules/Profile/Profile.reducer'

const mapDispatchToProps = dispatch => ({
  onClickUpVote: () => dispatch(showUpVoteAction()),
  onClickDownVote: () => dispatch(showDownVoteAction()),
  onToggleProfileModal: data => dispatch(toggleProfileModalAction(data)),
})

export default connect(
  null,
  mapDispatchToProps,
)(DappListItem)
