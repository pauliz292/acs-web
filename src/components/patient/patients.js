import React from 'react';
import PatientsTable from './patientsTable';

export default function Patients() {
    return (
        <div className="content-wrapper">
            <h1>Patient List</h1>
            <div className="col-md-12 main-content">
                <PatientsTable />
            </div>
        </div>
    )
}
