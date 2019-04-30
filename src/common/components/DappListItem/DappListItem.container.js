import { connect } from 'react-redux'
import DappListItem from './DappListItem'
import {
  showDownVoteAction,
  showUpVoteAction,
} from '../../../modules/Vote/Vote.reducer'

const mapDispatchToProps = dispatch => ({
  onClickUpVote: () => {
    window.location.hash = 'vote'
    dispatch(showUpVoteAction())
  },
  onClickDownVote: () => {
    window.location.hash = 'vote'
    dispatch(showDownVoteAction())
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(DappListItem)
