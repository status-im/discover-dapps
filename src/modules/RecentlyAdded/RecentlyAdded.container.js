import { connect } from 'react-redux'
import RecentlyAdded from './RecentlyAdded'
import recentDapps from './RecentlyAdded.selector'

const mapStateToProps = state => ({
  dapps: recentDapps(state),
})

export default connect(mapStateToProps)(RecentlyAdded)
