import { combineReducers,createStore } from "redux";
import filtersReducer from "./filters/reducer";


const rootReducer = combineReducers({
    filter:filtersReducer
})
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;