import React from 'react'
import { Navbar, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



function Header() {

    return (
        <header>
           <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/">Hospital Appointment System</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
