import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Vote from './Vote'
import { closeVoteAction } from './Vote.reducer'

const mapStateToProps = state => state.vote
const mapDispatchToProps = dispatch => ({
  onClickClose: () => {
    window.history.back()
    dispatch(closeVoteAction())
  },
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Vote),
)
