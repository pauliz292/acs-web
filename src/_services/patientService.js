import http from "./httpService";
import { apiUrl } from "../config.json";
import { boundGetAllPatients } from "../_actions/patientActions";

const apiEndpoint = apiUrl + "/patient" + "/list";

export function getPatients() {
    http.get(apiEndpoint)
    .then((res) => {
        let patients = res.data;
        if (patients) {
            boundGetAllPatients(patients);
            return patients;
        }
    });
}
