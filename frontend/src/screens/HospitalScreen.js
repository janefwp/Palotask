import React from 'react'
import { Form} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Hospital from '../components/Hospital'
import Loader from '../components/Loader'
import Message from '../components/Message'


function HospitalScreen({history}) {

    const hospitalList = useSelector(state=>state.hospitalList)
    const illness= useSelector(state=>state.illnessInfo)
    const {illnessItem, severityLevel} =illness
    const { error, loading, hospitals} = hospitalList

    return (
        <div>
            { loading ? <Loader /> 
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <Form>
                        <Form.Label><h2>Our Sugguested Hospitals (Illness: {illnessItem.name}, Severity:{severityLevel})</h2></Form.Label>
                        {
                            hospitals.map(hospital=>(
                                <Hospital key={hospital.id} hospital={hospital} severity={severityLevel} history={history} />
                            ))
                        }
                    </Form>

            }
            
        </div>
    )
}

export default HospitalScreen
