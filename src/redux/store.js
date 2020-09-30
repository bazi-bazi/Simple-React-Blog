import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
