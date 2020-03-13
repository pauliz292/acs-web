import React from 'react';
import { useSelector } from 'react-redux';

const PatientsTable = () => {

    const patients = useSelector(state => state.patientReducer.patients);
    const setGender = sex => {return sex === 1 ? "Male" : "Female"};

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Occupation</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient, i) => (
                    <tr key={patient.id}>
                        <td>{i + 1}</td>
                        <td>{patient.name}</td>
                        <td>{setGender(patient.sex)}</td>
                        <td>{patient.occupation}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PatientsTable;
