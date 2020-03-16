import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AddPatient from './addPatient';
import AddEmergencyContacts from './addEmergencyContacts';

const PatientForm = () => {
    return (
        <div className="content-wrapper">
            <h1>Add Patient</h1>
            <div>
                <Tabs defaultActiveKey="patient" id="uncontrolled-tab-example">
                    <Tab eventKey="patient" title="Patient Form">
                        <AddPatient />
                    </Tab>
                    <Tab eventKey="emergency-contact" title="Emergency Contact Form">
                        <AddEmergencyContacts />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default PatientForm;