import type { setSortAction, sortVal } from './types';

export const setSort = (sort: sortVal): setSortAction => ({
	type: 'SET_SORT' as const,
	payload: {
		sort,
	},
});
