import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AuthReducer } from "./Authentication/reducer";
import { reducer as MatchesReducer } from "./Matches/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({AuthReducer,MatchesReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
