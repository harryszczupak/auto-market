import type { addFavouriteAction, removeFavouriteAction } from './types';
export const addFavourite = (ids: string): addFavouriteAction => {
	return {
		type: 'ADD_FAVOURITE' as const,
		payload: {
			ids: ids,
		},
	};
};
export const removeFavourite = (ids: string): removeFavouriteAction => {
    return {
        type: 'REMOVE_FAVOURITE' as const,
        payload: {
            ids: ids,
        },
    };
}
