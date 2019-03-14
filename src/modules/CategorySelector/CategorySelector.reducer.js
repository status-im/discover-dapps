import reducerUtil from '../../common/utils/reducer'

const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

export const selectCategory = category => ({
  type: UPDATE_CATEGORY,
  payload: category,
})

const initialState = null

const categoryChange = (_, category) => category

const map = {
  [UPDATE_CATEGORY]: categoryChange,
}

export default reducerUtil(map, initialState)
