import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Router from './Router'
import {
  fetchHighestRankedAction,
  fetchRecentlyAddedAction,
} from '../Dapps/Dapps.reducer'

const mapDispatchToProps = dispatch => ({
  fetchHighestRanked: () => dispatch(fetchHighestRankedAction()),
  fetchRecentlyAdded: () => dispatch(fetchRecentlyAddedAction()),
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Router),
)
