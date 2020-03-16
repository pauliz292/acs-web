import React, { useRef } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const AddPatient = props => {
    const setGender = gender => {return gender === "Male" ? 1 : 2 }

    // input boxes {ref} declaration
    let inputFirstName = useRef("");
    let inputMiddleName = useRef("");
    let inputLastName = useRef("");
    let inputEmail = useRef("");
    let inputBirthday = useRef("");
    let inputAddress = useRef("");
    let inputIdentification = useRef("");
    let inputGender = useRef("");
    let inputContact = useRef("");
    let inputMaritalStatus = useRef("");
    let inputOccupation = useRef("");
    let inputSSS = useRef("");
    let inputPHIC = useRef("");

    const onSubmit = e => {
        e.preventDefault();
        let genderValue = setGender(inputGender.current.value);
        let patient = {
            "FirstName": inputFirstName.current.value,
            "MiddleName": inputMiddleName.current.value,
            "LastName": inputLastName.current.value,
            "Sex": genderValue,
            "Identification": inputIdentification.current.value,
            "SocialSecurity": inputSSS.current.value,
            "PhoneNo": inputContact.current.value,
            "Email": inputEmail.current.value,
            "Address": inputAddress.current.value,
            "MaritalStatus": inputMaritalStatus.current.value,
            "Occupation": inputEmail.current.value,
        }
        props.getPatient(patient);
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
                
                    <Form.Group as={Col} controlId="formGridBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control ref={inputBirthday} type="date" />
                    </Form.Group>
                </Form.Row>
            
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control ref={inputAddress} placeholder="1234 Main St" />
                </Form.Group>
                <hr/>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridIdentification">
                        <Form.Label>Identification</Form.Label>
                        <Form.Control ref={inputIdentification} />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control ref={inputGender} as="select">
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridContact">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control ref={inputContact} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridMaritalStatus">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control ref={inputMaritalStatus} as="select">
                            <option>Single</option>
                            <option>Married</option>
                            <option>Widowed</option>
                            <option>Others</option>
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridOccupation">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control ref={inputOccupation} />
                    </Form.Group>
                </Form.Row>
                <hr />

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSSS">
                        <Form.Label>SSS No.</Form.Label>
                        <Form.Control ref={inputSSS} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPHIC">
                        <Form.Label>PHIC No.</Form.Label>
                        <Form.Control ref={inputPHIC} />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="with HMO?" />
                </Form.Group>
            
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddPatient;