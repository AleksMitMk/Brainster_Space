import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Overlay.css';

function Overlay() {
    return (
        <Col md={12}>
            <div >
                <Row className="overlay">
                    <div className="img">
                    <h1>Центар за Учење, Кариера и Иновација</h1>
                        {/* <Col md={{ span: 8, offset: 2 }}>
                            <div className="title">
                                
                            </div>
                        </Col> */}
                    </div>
                </Row>
            </div>
        </Col>

    )
}
export default Overlay;