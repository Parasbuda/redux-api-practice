import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import rootReducer from "./rootReducer"
import thunk from "redux-thunk"

const middleware = [logger,thunk]

export const store=createStore(rootReducer,applyMiddleware(...middleware))