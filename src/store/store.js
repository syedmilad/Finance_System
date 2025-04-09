import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";

import balanceReducer from "../reducers/balanceReducer";

const store = createStore(
  balanceReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
