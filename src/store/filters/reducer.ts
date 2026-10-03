import type { FilterState,FilterAction } from "./types";
const initialState: FilterState = {
    brand: "",
    model: "",
    engine: "",
    search: "",
    year: "",
}
const filtersReducer = (state: FilterState = initialState, action: FilterAction) => { 
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "CLEAR_FILTER":
            return initialState;
        default:
            return state;
    }
}
export default filtersReducer;