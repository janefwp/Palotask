import React, { useState, useEffect } from 'react'
import {  Form, Button, ButtonGroup} from 'react-bootstrap'

import Hospital from '../components/Hospital'
import Paginate from '../components/Paginate'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listHospitals , listIllnesss, saveIllnessitem, saveIllnessseverity } from '../actions/appActions'



function HomeScreen({history}) {
    const dispatch = useDispatch()
    const hospitalList = useSelector(state=>state.hospitalList)
    const illnessList = useSelector(state=>state.illnessList)
    const { error:illerror, loading:illloading, illnesses, page: illpage, pages:illpages} = illnessList
    const { error:hoserror, loading:hosloading, hospitals, page:hospage, pages:hospages} = hospitalList

    const [hospitaldisplay,setHospitaldisplay]=useState(false)

    const [illnessId,setIllnessId]=useState(1);
    const [severityId,setSeverityId]=useState(0);
    const [illnessname, setIllnessname] = useState('Mortal Cold');
    useEffect(() => {
        dispatch(listIllnesss()) 
    }, [dispatch])

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(saveIllnessitem(illnessId))
        dispatch(saveIllnessseverity(severityId))
        dispatch(listHospitals())
        setHospitaldisplay(true)
    }

    const handleillnessChange=(e)=>{
        e.preventDefault();
        setIllnessId(e.target.value)
        setIllnessname(illnesses[e.target.value-1].illness.name)
        
    }
    const handleseverityChange =(e)=>{
        e.preventDefault();
        setSeverityId(e.target.value);
        
    }

    useEffect(() => {
        setHospitaldisplay(false)
    }, [illnessId, severityId])

    return (
        <div>
            <h1>Book Appointment</h1>
            {illloading ? <Loader /> 
                : illerror ? <Message variant='danger'>{illerror}</Message>
                    :
                    
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>What is your illness?</Form.Label>
                            <Form.Control
                            as="select"
                            name="illness"
                            onChange={handleillnessChange}
                            value={illnessId}
                            >
                            {
                                illnesses?.map((illness) => <option value={illness.illness.id} key={illness.illness.id}>{illness.illness.name}</option>)
                
                            }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>What is the severity?</Form.Label>
                            <br />
                            <ButtonGroup aria-label="Basic example" className=" button-block" name="severity" value={severityId} onClick={handleseverityChange}>
                                <Button variant="outline-secondary" value={0}>🙂Level 0</Button>
                                <Button variant="outline-secondary" value={1}>😐Level 1</Button>
                                <Button variant="outline-secondary" value={2}>😖Level 2</Button>
                                <Button variant="outline-secondary" value={3}>😩Level 3</Button>
                                <Button variant="outline-secondary" value={4}>🤯Level 4</Button>
                            </ButtonGroup>
                            
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form> 
            
            }
            <br />
            {!hospitaldisplay ? ''
            : hosloading ? <Loader /> 
                : hoserror ? <Message variant='danger'>{hoserror}</Message>
                    :
                    <Form>
                        <Form.Label>Our Sugguested Hospitals (Illness: {illnessname}, Severity:{severityId})</Form.Label>
                        {
                            hospitals.map(hospital=>(
                                <Hospital key={hospital.id} hospital={hospital} severity={severityId} history={history} />
                            ))
                        }            
                        <Paginate page={hospage} pages={hospages}/>
                    </Form>
                
            }

        </div>
    )
}

export default HomeScreen
