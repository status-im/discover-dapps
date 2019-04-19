import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import reducer from './reducers'

export const history = createBrowserHistory({
  basename: '/discover-dapps/',
})

const composeWithDevTools =
  /* eslint-disable-next-line no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () =>
  createStore(
    reducer(history),
    {},
    composeWithDevTools(applyMiddleware(routerMiddleware(history))),
  )

export default configureStore
