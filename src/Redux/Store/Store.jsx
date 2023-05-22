import { combineReducers, legacy_createStore as createStore } from "redux";
import Reducers from "../Reducer/Reducer";

const rootReducer = combineReducers({ Reducers });

const store = createStore(rootReducer);

export default store;
