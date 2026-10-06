import type { setSortAction, SortState } from './types';
const initialState: SortState = {
	sort: 'asc',
};
const sortReducer = (
	state: SortState = initialState,
	action: setSortAction,
) => {
	switch (action.type) {
		case 'SET_SORT':
			return {
				...state,
				sort: action.payload.sort,
			};
		default:
			return state;
	}
};
export default sortReducer;
