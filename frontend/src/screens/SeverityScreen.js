import React from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import { saveIllnessseverity,listHospitals} from '../actions/appActions'
import { useDispatch } from 'react-redux'

function SeverityScreen({history}) {

    const dispatch= useDispatch()
    const handleClick=(e)=>{
        e.preventDefault()
        dispatch(saveIllnessseverity(e.target.value))
        dispatch(listHospitals())
        history.push('./hospitals')
    }
    return (
        <div>
           
            <h2>What is the severity?</h2>            
                <ButtonGroup 
                    aria-label="Basic example" 
                    className=" button-block" 
                    name="severity" 
                    onClick={handleClick}             
                >
                    <Button variant="outline-secondary" value={0}>🙂Level 0</Button>
                    <Button variant="outline-secondary" value={1}>😐Level 1</Button>
                    <Button variant="outline-secondary" value={2}>😖Level 2</Button>
                    <Button variant="outline-secondary" value={3}>😩Level 3</Button>
                    <Button variant="outline-secondary" value={4}>🤯Level 4</Button>
                </ButtonGroup>
                
        </div>
    )
}

export default SeverityScreen
