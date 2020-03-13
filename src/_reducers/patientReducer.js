import { GET_ALL_PATIENTS } from "../_actions/_types";

const initialState = {
    patients: []
}

export function patientReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PATIENTS:
            return {
                ...state,
                patients: action.payload
            }
        default:
            return state;
    }
}