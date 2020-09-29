import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { logger } from "redux-logger";

export let store = createStore(rootReducer, applyMiddleware(logger));
