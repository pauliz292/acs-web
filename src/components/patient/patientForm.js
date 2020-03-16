import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AddPatient from './addPatient';
import AddEmergencyContacts from './addEmergencyContacts';

const PatientForm = () => {
    let [ patient, setPatient ] = useState();
    let [ emergencyContacts, setEmergencyContacts ] = useState([]);

    const getPatient = patient => {
        setPatient(patient);
    }

    const getEmergencyContacts = contacts => {
        setEmergencyContacts(emergencyContacts => 
            [...emergencyContacts, contacts]
        );
    }

    useEffect(() => {
        if (!patient) { return; }

        let newPatient = Object.assign(patient, {"EmergencyContacts": emergencyContacts });
        console.log(newPatient);
        
    }, [patient, emergencyContacts])

    return (
        <div className="content-wrapper">
            <h1>Add Patient</h1>
            <div>
                <Tabs defaultActiveKey="patient" id="uncontrolled-tab-example">
                    <Tab eventKey="patient" title="Patient Form">
                        <AddPatient getPatient={getPatient} />
                    </Tab>
                    <Tab eventKey="emergency-contact" title="Emergency Contact Form">
                        <AddEmergencyContacts getEmergencyContacts={getEmergencyContacts} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default PatientForm;