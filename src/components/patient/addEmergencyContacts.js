import React, { useRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const AddEmergencyContacts = () => {
    let emergencyContacts = [];

    // input {ref} declaration
    let inputFirstName = useRef("");
    let inputMiddleName = useRef("");
    let inputLastName = useRef("");
    let inputEmail = useRef("");
    let inputContact = useRef("");
    let inputOccupation = useRef("");
    let inputAddress = useRef("");
    let inputRelation = useRef(""); 
    let inputMaritalStatus = useRef("");

    const onSubmit = e => {
        e.preventDefault();
        let name = inputFirstName.current.value + inputMiddleName.current.value + 
            inputLastName.current.value;
        let emergencyContact = {
            "Name": name,
            "RelationShipToPatient": inputRelation.current.value,
            "PhoneNo": inputContact.current.value,
            "Email": inputEmail.current.value,
            "Address": inputAddress.current.value,
            "MaritalStatus": inputMaritalStatus.current.value,
            "Occupation": inputOccupation.current.value
        };
        emergencyContacts.push(emergencyContact);
        console.log(emergencyContacts);
    }

    return (
        <div className="patient-form">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control ref={inputFirstName} type="text" placeholder="First Name" />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridMiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control ref={inputMiddleName} type="text" placeholder="Middle Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control ref={inputLastName} type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={inputEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control ref={inputContact} type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridOccupation">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control ref={inputOccupation} type="text" />
                    </Form.Group>
                </Form.Row>
            
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control ref={inputAddress} placeholder="1234 Main St" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridRelationship">
                        <Form.Label>Relationship to Patient</Form.Label>
                        <Form.Control ref={inputRelation} />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control ref={inputMaritalStatus} as="select">
                            <option>Single</option>
                            <option>Married</option>
                            <option>Widowed</option>
                            <option>Others</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddEmergencyContacts;
