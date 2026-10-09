export type initialState = {
	ids: string;
};
export type addFavouriteAction = {
	type: 'ADD_FAVOURITE';
	payload: {
		ids: string;
	};
};
export type removeFavouriteAction = {
	type: 'REMOVE_FAVOURITE';
	payload: {
		ids: string;
	};
};
export type favouriteAction = addFavouriteAction | removeFavouriteAction;
