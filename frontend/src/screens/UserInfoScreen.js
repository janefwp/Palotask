import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Form, Button} from 'react-bootstrap'
import { saveUserformInfo, saveUserInfotoDatabase } from '../actions/appActions'

function UserInfoScreen({history}) {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState]= useState('')
    const [zip, setZip]= useState('')
    const illnessInfo = useSelector(state => state.illnessInfo) 
    const {illnessId, severityLevel, hospitalId} = illnessInfo
    const dispatch= useDispatch()
    const handleSubmit=(e)=>{
        dispatch(saveUserInfotoDatabase({
            firstname,
            lastname,
            email,
            address,
            city,
            state,
            zip,
            illnessId,
            severityLevel,
            hospitalId
        }))

        dispatch(saveUserformInfo({
            firstname,
            lastname,
            email,
            address,
            city,
            state,
            zip
        }))
        history.push('/submitresult')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>Please add your information</h1>
                <Form.Row>
                    <Form.Group as={Col} controlId="inlineFormInputName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type='type'
                            placeholder='First Name'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="inlineFormInputName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
             
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder="1234 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
           
  
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" 
                                    defaultValue="Choose..." 
                                    onChange={(e) => setState(e.target.value)}>
                            <option>Choose...</option>
                            <option>New South Wales</option>
                            <option>Victoria</option>
                            <option>Queensland</option>
                            <option>South Australia</option>
                            <option>Western Australia</option>
                            <option>Tasmania</option>
                            <option>Northern Territory</option>
                            <option>Australian Capital Territory</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control 
                            type='number'
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserInfoScreen
