import { createSelector } from 'reselect'
import moment from 'moment'

const getDapps = state => state.dapps

// TODO: add ranking logic here
const highestRankedDapps = createSelector(
  [getDapps],
  dapps => [...dapps].sort((a, b) => moment(b.dateAdded).diff(a.dateAdded)),
)

export default highestRankedDapps
