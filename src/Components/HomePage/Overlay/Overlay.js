import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Overlay.css';

function Overlay() {
    return (
        <Col md={12}>
            <div >
                <Row className="FirstOverlay">
                    <div id="img">
                        <h1>Центар за Учење, Кариера и Иновација</h1>
                    </div>
                </Row>
            </div>
        </Col>

    )
}
export default Overlay;