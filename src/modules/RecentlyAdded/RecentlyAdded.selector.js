import { createSelector } from 'reselect'
import moment from 'moment'

const getDapps = state => state.dapps

const recentDapps = createSelector(
  [getDapps],
  dapps => [...dapps].sort((a, b) => moment(b.dateAdded).diff(a.dateAdded)),
)

export default recentDapps
