import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const AddEmergencyContacts = () => {
    return (
        <div className="patient-form">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridMiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" placeholder="Middle Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridOccupation">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form.Row>
            
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
            
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Province</Form.Label>
                        <Form.Control />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridRelationship">
                        <Form.Label>Relationship to Patient</Form.Label>
                        <Form.Control />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control as="select">
                            <option>Single</option>
                            <option>Married</option>
                            <option>Widowed</option>
                            <option>Others</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddEmergencyContacts;
