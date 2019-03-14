import { connect } from 'react-redux'
import Filtered from './Filtered'
import filteredDapps from './Filtered.selector'

const mapStateToProps = state => ({
  dapps: filteredDapps(state),
})

export default connect(mapStateToProps)(Filtered)
