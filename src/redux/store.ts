import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { addUserReducer } from './reducers/addUserReducer'

export let store = createStore(addUserReducer,applyMiddleware(thunk))