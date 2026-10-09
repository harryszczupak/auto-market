import type { favouriteAction, initialState as InitialState } from './types';

const initialState: InitialState = {
	ids: localStorage.getItem('ids') || '[]',
};

const favouriteReducer = (
	state: InitialState = initialState,
	action: favouriteAction,
): InitialState => {
	switch (action.type) {
		case 'ADD_FAVOURITE': {
			const ids: string[] = JSON.parse(state.ids);

			if (ids.includes(action.payload.ids)) {
				return state;
			}

			const updatedIds = [...ids, action.payload.ids];
			const updatedState = {
				...state,
				ids: JSON.stringify(updatedIds),
			};

			localStorage.setItem('ids', updatedState.ids);

			return updatedState;
		}

		case 'REMOVE_FAVOURITE': {
			const ids: string[] = JSON.parse(state.ids);

			const updatedIds = ids.filter((id) => id !== action.payload.ids);

			const updatedState = {
				...state,
				ids: JSON.stringify(updatedIds),
			};

			localStorage.setItem('ids', updatedState.ids);

			return updatedState;
		}

		default:
			return state;
	}
};

export default favouriteReducer;
