import { combineReducers, createStore } from 'redux';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';
import pickedItemReducer from './pickedItem/reducer';

const rootReducer = combineReducers({
	filter: filtersReducer,
	sort: sortReducer,
	pickedItem: pickedItemReducer,
});
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
