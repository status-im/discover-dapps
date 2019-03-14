import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import dapps from '../../modules/Dapps/Dapps.reducer'
import selectedCategory from '../../modules/CategorySelector/CategorySelector.reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    dapps,
    selectedCategory,
  })
