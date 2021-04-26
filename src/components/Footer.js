import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <Footer_Container>
            <MainContainer>
                <Col className="text-center py-3">
                    Copyright &copy; ProShop
                </Col>
            </MainContainer>
        </Footer_Container>
    )
}

export default Footer

const MainContainer = styled(Container)`

`
const Footer_Container = styled.footer`

`