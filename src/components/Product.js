import React from 'react';
import styled from 'styled-components';
import {Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <ProductContainer className="my-3 p-3">
            <a href={`/product/{prodcut}`}>

            </a>
        </ProductContainer>
    )
}

export default Product

const ProductContainer = styled(Card)`
    
`
