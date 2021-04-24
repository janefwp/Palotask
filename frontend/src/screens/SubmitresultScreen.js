import React from 'react'
import { useSelector } from 'react-redux'
import { Button, ButtonGroup} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'

function SubmitresultScreen({history}) {

    const userInfo = useSelector(state=>state.userInfo)
    const {loading, error}= userInfo
    const handleClick=()=>{
        history.push('/')
    }

    return (        
        <div>
            {loading ? <Loader /> 
                : error ? <Message variant='danger'>{error}</Message>
                    : <Message >{'Your appointment has been submitted successfully !'}</Message>
            }
            {error ? <Button onClick={handleClick}>Try Again</Button> : <Button onClick={handleClick}>Book another</Button>}
            
        </div>
    )
}

export default SubmitresultScreen
