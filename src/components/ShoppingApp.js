import React from 'react';
import Products from './Products';
import ProductFilters from './ProductFilters';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ShoppingApp extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={3}>
                        <ProductFilters />
                    </Col>
                    <Col xs={12} md={9}>
                        <Products />
                    </Col>
                </Row>
            </Grid>
        )
    }
}



