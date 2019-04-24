import { connect } from 'react-redux'
import DappListItem from './DappListItem'
import {
  showDownVoteAction,
  showUpVoteAction,
} from '../../../modules/Vote/Vote.reducer'

const mapDispatchToProps = dispatch => ({
  onClickUpVote: () => dispatch(showUpVoteAction()),
  onClickDownVote: () => dispatch(showDownVoteAction()),
})

export default connect(
  null,
  mapDispatchToProps,
)(DappListItem)
