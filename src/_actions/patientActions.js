import store from "../store";

// ACTION -> DESCRIPTION OF TASK RETURNS OBJ
export const GET_ALL_PATIENTS = 'GET_ALL_PATIENTS';
export const GET_PATIENT = 'GET_PATIENT';

const getAllPatients = patients => {
    return{
        type: GET_ALL_PATIENTS,
        payload: patients
    };
}

const getPatient = patient => {
    return{
        type: GET_PATIENT,
        payload: patient
    };
}

// DISPATCH ACTION
export const boundGetAllPatients = patients => 
    store.dispatch(getAllPatients(patients));

export const boundGetPatient = patient => 
    store.dispatch(getPatient(patient));
