import React, {useEffect} from 'react'
import { Form} from 'react-bootstrap'
import { useSelector, useDispatch} from 'react-redux'
import Hospital from '../components/Hospital'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {sortHospitals} from '../actions/appActions'


function HospitalScreen({history}) {
    const dispatch = useDispatch()
    const hospitalList = useSelector(state=>state.hospitalList)
    const illness= useSelector(state=>state.illnessInfo)
    const {illnessItem, severityLevel} =illness
    const { error, loading, hospitals} = hospitalList
    useEffect(() => {
        dispatch(sortHospitals(severityLevel, hospitals))
    }, [dispatch, loading])
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
