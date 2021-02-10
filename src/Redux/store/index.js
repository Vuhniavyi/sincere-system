import { createStore } from "redux";
import { userReducer } from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(userReducer, composeWithDevTools());
