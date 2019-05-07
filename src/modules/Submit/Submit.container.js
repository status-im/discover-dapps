import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Submit from './Submit'

import {
  closeSubmitAction,
  onInputNameAction,
  onInputUrlAction,
  onInputDescAction,
} from './Submit.reducer'

const mapStateToProps = state => state.submit
const mapDispatchToProps = dispatch => ({
  onClickClose: () => dispatch(closeSubmitAction()),
  onInputName: name => dispatch(onInputNameAction(name)),
  onInputDesc: name => dispatch(onInputDescAction(name)),
  onInputUrl: name => dispatch(onInputUrlAction(name)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Submit),
)
