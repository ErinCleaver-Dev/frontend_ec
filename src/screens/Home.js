import React from 'react';
import styled from 'styled-components';
import products from '../products';
import {Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const Home = () => {
    return (
        <HomeContainer>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>

        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`

`