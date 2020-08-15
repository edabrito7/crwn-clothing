import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-sagas';



import rootReducer from './root-reducer';


const sagaMiddleware = createSagaMiddleware();

const middelwares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middelwares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);



