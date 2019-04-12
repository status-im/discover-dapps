import { createSelector } from 'reselect'
import moment from 'moment'

const getDapps = state => state.dapps

const recentDapps = createSelector(
  [getDapps],
  dapps =>
    [...dapps].filter(dapp => {
      return (
        moment(dapp.dateAdded).toISOString() >
        moment()
          .subtract(21, 'days')
          .utc()
          .toISOString()
      )
    }),
)

export default recentDapps
