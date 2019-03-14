import selector from './Dapps.selector'

describe('Dapp selector', () => {
  test('it should group the dapps by categories', () => {
    // Given state with dapps
    const state = {
      dapps: [
        {
          name: 'DAPP_1',
          category: 'CATEGORY_1',
        },
        {
          name: 'DAPP_2',
          category: 'CATEGORY_1',
        },
        {
          name: 'DAPP_3',
          category: 'CATEGORY_2',
        },
        {
          name: 'DAPP_4',
          category: 'CATEGORY_3',
        },
      ],
    }

    // We should get back the dapps organised by category
    expect(selector(state)).toEqual([
      {
        category: 'CATEGORY_1',
        dapps: [
          { name: 'DAPP_1', category: 'CATEGORY_1' },
          { name: 'DAPP_2', category: 'CATEGORY_1' },
        ],
      },
      {
        category: 'CATEGORY_2',
        dapps: [{ name: 'DAPP_3', category: 'CATEGORY_2' }],
      },
      {
        category: 'CATEGORY_3',
        dapps: [{ name: 'DAPP_4', category: 'CATEGORY_3' }],
      },
    ])
  })
})
