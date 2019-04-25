import { connect } from 'react-redux'
import Vote from './Vote'
import { closeVoteAction } from './Vote.reducer'

const mapStateToProps = state => state.vote
const mapDispatchToProps = dispatch => ({
  onClickClose: () => dispatch(closeVoteAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vote)
