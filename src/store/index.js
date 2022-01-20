import {applyMiddleware, combineReducers, createStore} from "redux";
import movieReducer from "./movieReducer";
import createSagaMiddleware from 'redux-saga'
import { movieWatcher } from "../saga/movieSaga";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    movieReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(movieWatcher)