import { createSelector } from 'reselect'

const getDapps = state => state.dapps

const categorisedDapps = createSelector(
  [getDapps],
  dapps =>
    dapps.reduce((acc, current) => {
      if (acc.some(i => i.category === current.category)) {
        return acc.map(n =>
          n.category === current.category
            ? {
                ...n,
                dapps: [...n.dapps, current],
              }
            : n,
        )
      }

      return [...acc, { category: current.category, dapps: [current] }]
    }, []),
)

export default categorisedDapps
