import categories from './categories'

describe('categories', () => {
  test('it should return the correct data structure of categories', () => {
    expect(categories).toEqual([
      {
        key: 'EXCHANGES',
        value: 'Exchanges',
      },
      {
        key: 'MARKETPLACES',
        value: 'Marketplaces',
      },
      {
        key: 'GAMES',
        value: 'Games',
      },
      {
        key: 'SOCIAL_NETWORKS',
        value: 'Social Networks',
      },
      {
        key: 'MEDIA',
        value: 'Media',
      },
      {
        key: 'UTILITIES',
        value: 'Utilities',
      },
      {
        key: 'OTHER',
        value: 'Other',
      },
      {
        key: 'COLLECTIBLES',
        value: 'Collectibles',
      },
    ])
  })
})
