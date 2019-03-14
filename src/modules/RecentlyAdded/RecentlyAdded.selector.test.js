import moment from 'moment'
import recentDapps from './RecentlyAdded.selector'

describe('recentDapps', () => {
  test('it should return the dapps ordered by most recently added', () => {
    // Given a state with multiple dapps
    const today = moment().format()
    const yesterday = moment()
      .subtract(1, 'days')
      .format()

    const state = {
      dapps: [
        {
          name: 'DAPP_1',
          dateAdded: yesterday,
        },
        {
          name: 'DAPP_2',
          dateAdded: today,
        },
      ],
    }

    // We expect to get the apps ordered by the dateAdded
    expect(recentDapps(state)).toEqual([
      {
        name: 'DAPP_2',
        dateAdded: today,
      },
      {
        name: 'DAPP_1',
        dateAdded: yesterday,
      },
    ])
  })
})
