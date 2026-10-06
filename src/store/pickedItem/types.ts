import type { CarItem } from '../../types/item';

export type setItemAction = {
	type: 'SET_PICKED_ITEM';
	payload: CarItem;
};
export type clearItemAction = {
	type: 'CLEAR_PICKED_ITEM';
};
export type pickedItemAction = setItemAction | clearItemAction;
