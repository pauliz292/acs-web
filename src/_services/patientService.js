import http from "./httpService";
import { apiUrl } from "../config.json";
import { boundGetAllPatients } from "../_actions/patientActions";

const apiEndpoint = apiUrl + "/patients";

export function getCars() {
    const patients = http.get(apiEndpoint);
    if (patients) {
        boundGetAllPatients(patients);
        return patients;
    }
}
