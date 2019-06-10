import {
  createStore as _createStore,
  applyMiddleware,
  compose as _compose
} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "@reducers";

const compose = __PROD__
  ? _compose
  : // tslint:disable-next-line no-var-requires
    require("redux-devtools-extension").composeWithDevTools;

export default function createStore(initialState) {
  if (initialState) {
    return _createStore(
      reducers,
      initialState,
      compose(applyMiddleware(thunkMiddleware))
    );
  }
  return _createStore(reducers, compose(applyMiddleware(thunkMiddleware)));
}
