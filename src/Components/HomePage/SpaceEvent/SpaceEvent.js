import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';
import './SpaceEvent.css';

function SpaceEvent() {

    return (
        <div className="SpaceEvent">
            <Col lg={11} sm={12} className="headCol">
                <Row>
                    <Col lg={5} md={12} className="eduCompPart">
                        <div className="titlePart">
                            <h1 >Простор за настани</h1>
                            <h5>
                                Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата
                                која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан
                                ќе се организира во нашиот Brainster Space.
                                </h5>
                        </div>
                        <div id="btnEvent">

                            <Button variant="dark"><a href="/EventSpace"><i className="fas fa-arrow-right"></i> Види го просторот</a></Button>
                        </div>
                    </Col>
                    <Col lg={7} md={12}>
                        <div><Image src={require(`../../../Images/Za_Nas/prostor_za_nastani.jpg`)} fluid /></div>
                    </Col>
                </Row>
            </Col>
        </div>
    );
}


export default SpaceEvent;