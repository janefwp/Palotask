import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Form, Button, ButtonGroup, ToggleButtonGroup} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'

function SubmitresultScreen({history}) {

    const illnessInfo = useSelector(state=>state.illnessInfo)
    const {loading, error}= illnessInfo
    const handleClick=()=>{
        history.push('/')
    }

    return (        
        <div>
            {loading ? <Loader /> 
                : error ? <Message variant='danger'>{error}</Message>
                    : <Message >{'Submit success'}</Message>
            }
            {error ? <Button onClick={handleClick}>Try Again</Button> : <Button onClick={handleClick}>Book another</Button>}
            
        </div>
    )
}

export default SubmitresultScreen
