import { connect } from 'react-redux'
import TransactionStatus from './TransactionStatus'
import { hideAction } from './TransactionStatus.recuder'
import { statusCheckAction } from '../Submit/Submit.reducer'

const mapStateToProps = state => state.transactionStatus
const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideAction()),
  statusCheck: hash => dispatch(statusCheckAction(hash)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionStatus)
