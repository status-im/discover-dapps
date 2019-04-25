import { connect } from 'react-redux'
import Vote from './Vote'

const mapStateToProps = state => state.vote
// const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps)(Vote)
