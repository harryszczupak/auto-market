export type sortVal = 'asc' | 'desc';

export type SortState = {
	sort: sortVal;
};
export type setSortAction = {
	type: 'SET_SORT';
	payload: {
		sort: sortVal;
	};
};
