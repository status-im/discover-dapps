import { connect } from 'react-redux'
import Footer from './Footer'
import { showSubmitAction } from '../Submit/Submit.reducer'

const mapDispatchToProps = dispatch => ({
  onClickSubmit: () => dispatch(showSubmitAction()),
})

export default connect(
  null,
  mapDispatchToProps,
)(Footer)
