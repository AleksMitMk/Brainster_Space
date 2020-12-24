import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Partners.css';

class Partners extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Partners" id="partner">
                <Col md={11} className="headCol">
                    <Row>
                        <Col lg={{span: 6, offset: 3}}  sm={{span: 9}}className="eduCompPart">
                            <div className="titlePart">
                                <h1 >Партнери</h1>
                                <h3>
                                  Имаш идеjа? Отворени сме за соработка</h3>
                            </div>
                            <div id="btnPartner">
    
                            <Button variant="dark"><a href="/EventSpace"><i className="fas fa-arrow-right"></i> Види го просторот</a></Button>
                            </div>
                        </Col>
                       
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Partners;