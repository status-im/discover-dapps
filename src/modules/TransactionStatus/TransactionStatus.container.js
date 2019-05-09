import { connect } from 'react-redux'
import TransactionStatus from './TransactionStatus'
import {
  hideAction,
  onPublishedSuccessAction,
} from './TransactionStatus.recuder'

const mapStateToProps = state => state.transactionStatus
const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideAction()),
  onPublishSuccess: () => dispatch(onPublishedSuccessAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionStatus)
