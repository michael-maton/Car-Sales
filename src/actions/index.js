export const ADD_PART = "ADD_PART";

export const addPart = (part) => {
    return({type: ADD_PART, payload: part})
};