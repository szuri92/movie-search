import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRootSaga from './saga'
import reducers from './reducers'

const sagaMiddleWare = createSagaMiddleware()

export default createStore(reducers, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(createRootSaga)
