import type { CarItem } from "../../types/item";
import type { pickedItemAction } from "./types";

const initialState: CarItem | null = null;


const pickedItemReducer = (state = initialState, action: pickedItemAction): CarItem | null => {
    switch (action.type) {
        case "SET_PICKED_ITEM":
            return action.payload;
        case "CLEAR_PICKED_ITEM":
            return null;
        default:
            return state;
    }
};
export default pickedItemReducer;