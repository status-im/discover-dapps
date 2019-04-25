import { connect } from 'react-redux'
import Filtered from './Filtered'
// import filteredDapps from './Filtered.selector'

// dapps: filteredDapps(state),
const mapStateToProps = state => ({
  dapps: state.dapps,
})

export default connect(mapStateToProps)(Filtered)
