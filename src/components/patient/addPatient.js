import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const PatientForm = () => {

    return (
        <div className="content-wrapper">
            <h2>Add Patient</h2>
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
                    
                        <Form.Group as={Col} controlId="formGridBirthday">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="date" />
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
                    <hr/>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridIdentification">
                            <Form.Label>Identification</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    
                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    
                        <Form.Group as={Col} controlId="formGridContact">
                            <Form.Label>Contact No.</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridMaritalStatus">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    
                        <Form.Group as={Col} controlId="formGridOccupation">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                    <hr />

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSSS">
                            <Form.Label>SSS No.</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPHIC">
                            <Form.Label>PHIC No.</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="with HMO?" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default PatientForm;