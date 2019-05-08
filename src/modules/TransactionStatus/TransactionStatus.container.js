import { connect } from 'react-redux'
import TransactionStatus from './TransactionStatus'
import { hideAction } from './TransactionStatus.recuder'

const mapStateToProps = state => state.transactionStatus
const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionStatus)
