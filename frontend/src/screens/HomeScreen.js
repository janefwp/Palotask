import React, { useEffect } from 'react'
import { Form} from 'react-bootstrap'
import Illness from '../components/Illness'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listIllnesss } from '../actions/appActions'



function HomeScreen({history}) {
    const dispatch = useDispatch()
    const illnessList = useSelector(state=>state.illnessList)
    const { error, loading, illnesses} = illnessList

    useEffect(() => {
        dispatch(listIllnesss()) 
    }, [dispatch])

    return (
        <div>
            <h1>Book An Appointment</h1>
            {loading ? <Loader /> 
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <Form>
                        <Form.Label><h2>What is your illness?</h2></Form.Label>
                        {
                            illnesses.map(illness=>(
                                <Illness key={illness.illness.id} illness={illness.illness} history={history} />
                            ))
                        }            
                    </Form>
            
            }
           
        </div>
    )
}

export default HomeScreen
