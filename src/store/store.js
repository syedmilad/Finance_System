import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";

import balanceReducer from "../reducers/balanceReducer";

const store = createStore(
  balanceReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;