import store from "../store";
import { GET_ALL_PATIENTS, GET_PATIENT } from './_types';

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
