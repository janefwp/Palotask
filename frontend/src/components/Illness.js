import React from 'react'
import { useDispatch} from 'react-redux'
import { Card ,Row, Col, Button } from 'react-bootstrap'
import { saveIllnessItem  } from '../actions/appActions'


function Illness({ illness, history}) {

    const dispatch = useDispatch()
    const handleSubmit=()=>{
        console.log(illness)
        dispatch(saveIllnessItem(illness))
        history.push('/severity')
    }
    return (
        <Card className="my-3 p-3 rounded">    
            <Card.Body>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card.Title as="div">
                            <strong>{illness.name}</strong>
                        </Card.Title>
                    </Col >
                    
                    <Col xs lg="2">
                        <Button onClick={handleSubmit}>Choose</Button>
                    </Col>
                </Row>
        
            </Card.Body>
      
        </Card>
    )
}

export default Illness
