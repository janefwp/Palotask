import React from 'react'
import { useDispatch} from 'react-redux'
import { Card ,Row, Col, Button } from 'react-bootstrap'
import { saveHospitalitem  } from '../actions/appActions'


function Hospital({ hospital, severity, history}) {
    const waititem=hospital.waitingList[severity]
    const patientCount=waititem.patientCount
    const averageProcessTime=waititem.averageProcessTime
    const waitingTime=patientCount*averageProcessTime
    const dispatch = useDispatch()
    const handleSubmit=()=>{
        console.log('handsubmit')
        dispatch(saveHospitalitem(hospital.id))
        history.push('/userInfoForm')
    }
    return (
        <Card className="my-3 p-3 rounded">    
            <Card.Body>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card.Title as="div">
                            <strong>{hospital.name}</strong>
                        </Card.Title>
                    </Col >
                    <Col md="auto" >
                        <Card.Text  as="div" >
                           <p>Wait time: {waitingTime} mins</p>      
                        </Card.Text>
                    </Col>
                    <Col xs lg="2">
                        <Button onClick={handleSubmit}>Choose</Button>
                    </Col>
                </Row>
        
            </Card.Body>
      
        </Card>
    )
}

export default Hospital
