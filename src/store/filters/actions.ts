import type { FilterAction, FilterState } from "./types";
export const setFilter = (name: keyof FilterState, value: string):FilterAction => {
    return {
        type: "SET_FILTER",
        payload: {
            name,
            value
        },
    };
}
export const clearFilter = () => {
    return {
        type: "CLEAR_FILTER",
    } as const
}