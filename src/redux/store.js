import { createStore, applyMiddleware } from "redux";
import { blogReducer } from "./reducers/blogReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export let store = createStore(
  blogReducer,
  composeWithDevTools(applyMiddleware(logger))
);
