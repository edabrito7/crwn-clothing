import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import rootReducer from './root-reducer';



const middelwares = [thunk,logger];

export const store = createStore(rootReducer, applyMiddleware(...middelwares));


export const persistor = persistStore(store);



