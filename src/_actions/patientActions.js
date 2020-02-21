import store from "../store";

// ACTION -> DESCRIPTION OF TASK RETURNS OBJ
export const GET_ALL_PATIENTS = 'GET_ALL_PATIENTS';

const getAllPatients = patients => {
    return{
        type: GET_ALL_PATIENTS,
        payload: patients
    };
}

// DISPATCH ACTION
export const boundGetAllPatients = patients => 
    store.dispatch(getAllPatients(patients));
