import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import { dataReducer } from "./homepage/homepage.reducer";
// MiddleWare

const rootReducer = combineReducers({
  data: dataReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
