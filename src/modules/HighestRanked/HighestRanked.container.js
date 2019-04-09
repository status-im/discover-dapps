import { connect } from 'react-redux'
import HighestRanked from './HighestRanked'
import highestRankedDapps from './HighestRanked.selector'

const mapStateToProps = state => ({
  dapps: highestRankedDapps(state),
})

export default connect(mapStateToProps)(HighestRanked)
