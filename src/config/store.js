import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import history from './history'
import reducer from './rootReducer'

const initialState = { }

const createStoreWithMiddlewares = compose(
  applyMiddleware(routerMiddleware(history))
)(createStore)

const reducerWithRouter = connectRouter(history)(reducer)

const store = createStoreWithMiddlewares(
  reducerWithRouter, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {
  store,
  history
}
