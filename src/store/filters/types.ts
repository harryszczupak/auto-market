export type FilterState = {
    brand: string;
    model: string;
    engine: string;
    search: string;
    year: string;
}
export type setFileterAction = {
    type: "SET_FILTER";
    payload: {
        name: keyof FilterState;
        value: string;
    };
}
export type clearFilterAction = {
    type: "CLEAR_FILTER";
}
export type FilterAction = setFileterAction | clearFilterAction;