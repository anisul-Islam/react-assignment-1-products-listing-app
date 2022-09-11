/* eslint-disable react/prop-types */
import React from 'react'
import Product from './Product'

import { Row, Col } from "react-bootstrap"

export default function Products({ products }) {
    return (
        <>
            <Row className='p-3'>
                {products.map((data) => {
                    return <Col lg={4} md={4} sm={6} className="mb-3 px-2">
                        <Product key={data.id} newData={data} />
                    </Col>
                })}
            </Row>

        </>
    )
}
