import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { CounterReducer } from "../reducers/CounterReducer";
import thunk from "redux-thunk";
import { ApiReducers } from "../reducers/ApiReducers";

const reducers = combineReducers({
  counter: CounterReducer,
  dataApi: ApiReducers,
});
/*
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(reducers, enhancer);

export default store;
