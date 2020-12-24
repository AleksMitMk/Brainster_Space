import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './EventsHome.css';

function EventsHome() {
    return (
        <div className="EventsHome">
                <Col lg={11} className="headCol">
                    <h2>Настани</h2>
                    <Row>
                        <Col lg={4} md={6} xs={12}>
                            <a href="https://brainster.co" target="_blank" rel="noopener noreferrer">
                            <Card >
                            <div className="hover03 column">
                                <div>
                                    <figure>
                                        <Card.Img variant="top" src={require(`../../../Images/Nastani/IMG_7481.jpg`)} />
                                    </figure>
                                </div>
                            </div>
                                <Card.Body>
                                    <Card.Title>Codeworks</Card.Title>
                                    <Card.Text>
                                       Вистинскиот настан за сите tech таленти кои сакаат да кодираат и научат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите со 
                                       IT компаниите. Deep Dive Intensive Seminar Ексклузивни семинари кои комбинираат три различни техники на учење.
                                    </Card.Text>
                                    <Button variant="outline-dark" className="cicleBtn"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        
                        <Col lg={4} md={6} xs={12}>
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../../Images/Nastani/instruktori.jpg`)} />
                                        </figure>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Deep Dive into Marketing</Card.Title>
                                    <Card.Text>
                                        Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш
                                        и предвидиш современите промени, предизвици и идните трендови во областа во маркетингот.
                                        
                                        </Card.Text>
                                        <Button variant="outline-dark" className="cicleBtn"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../../Images/Nastani/Hristijan-Nosecka.jpg`)} />
                                        </figure>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Deep Dive into Science</Card.Title>
                                    <Card.Text>
                                        Deep Dive into Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги 
                                        совладаш и предвидиш современите промени, предизвици и идните трендови во областа на Data Science.
                                    </Card.Text>
                                        <Button variant="outline-dark" className="cicleBtn"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={8} id="btnCalendar">
                            <Button variant="dark"><a href="/Nastani"><i className="far fa-calendar-alt"></i> Календар на настани</a></Button>
                        </Col>
                    </Row>
                </Col>
        </div>
    )
}
export default EventsHome;