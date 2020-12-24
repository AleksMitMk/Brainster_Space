import React, { Component } from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';
import './SpaceEvent.css';

class SpaceEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="SpaceEvent">
                <Col md={11} className="headCol">
                    <Row>
                        <Col md={5} className="eduCompPart">
                            <div className="titlePart">
                                <h1 >Простор за настани</h1>
                                <h5>
                                    Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата
                                    која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан 
                                    ќе се организира во нашиот Brainster Space.
                                </h5>
                            </div>
                            <div id="btnEvent">
    
                            <Button variant="dark"><i class="fas fa-arrow-right"></i> Види го просторот</Button>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div><Image src={require(`../../Images/Za_Nas/prostor_za_nastani.jpg`)} fluid /></div>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default SpaceEvent;