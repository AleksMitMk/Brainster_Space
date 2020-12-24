import React, { Component } from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';
import './Partners.css';

class Partners extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Partners">
                <Col md={11} className="headCol">
                    <Row>
                        <Col md={{span: 6, offset: 3}} className="eduCompPart">
                            <div className="titlePart">
                                <h1 >Партнери</h1>
                                <h3>
                                  Имаш идеjа? Отворени сме за соработка</h3>
                            </div>
                            <div id="btnPartner">
    
                            <Button variant="dark"><i class="fas fa-arrow-right"></i> Види го просторот</Button>
                            </div>
                        </Col>
                       
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Partners;