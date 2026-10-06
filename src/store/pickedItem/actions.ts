import type { clearItemAction, setItemAction } from './types';
import type { CarItem } from '../../types/item';
export const setItem = (item: CarItem): setItemAction => ({
	type: 'SET_PICKED_ITEM' as const,
	payload: item,
});

export const clearItem = (): clearItemAction => ({
    type: 'CLEAR_PICKED_ITEM' as const,
});
