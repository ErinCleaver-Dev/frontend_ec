import { Container, Row, Navbar, Nav } from 'react-bootstrap'
import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainContainer>
            <Header_Container>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Navbar.Brand href="/">Pro Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Header_Container>
        </MainContainer>
    )
}

export default Header

const MainContainer = styled.header`

`

const Header_Container = styled(Container)`

`