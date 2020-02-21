import { GET_ALL_PATIENTS } from "../_actions/patientActions";

const initialState = {
    patients: []
}

export function patientReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PATIENTS:
            console.log(action.payload);
            return {
                ...state,
                patients: action.payload
            }
        default:
            return state;
    }
}