export const ADD_PART = "ADD_PART";
export const REMOVE_PART = "REMOVE_PART";

export const addPart = (part) => {
    return({type: ADD_PART, payload: part})
};
export const removePart = (part) => {
    return({type: REMOVE_PART, payload: part})
};