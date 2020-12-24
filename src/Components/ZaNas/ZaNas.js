import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './ZaNas.css';

function ZaNas() {
    return (
        <div className="zaNas">
                <Col md={11} className="headCol">
                    <h2>За Нас</h2>
                    <Row>
                        <Col md={4}>
                            <a href="https://brainster.co" target="_blank">
                            <Card >
                            <div className="hover03 column">
                                <div>
                                    <figure>
                                        <Card.Img variant="top" src={require(`../../Images/Za_Nas/edukacija1.jpg`)} />
                                    </figure>
                                </div>
                            </div>
                                <Card.Body>
                                    <Card.Title>Едукација</Card.Title>
                                    <Card.Text>
                                        Научи практични вештини за рансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот sKill
                                        set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараа
                                        на реалните потреби на денешницата.
                                    </Card.Text>
                                    <Button variant="outline-dark"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        
                        <Col md={4}>
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../Images/Za_Nas/nastani.jpg`)} />
                                        </figure>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Настани</Card.Title>
                                    <Card.Text>
                                        Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании.
                                        Идеата е да нашата tech заедницата расте, се инспирира и креира преку овие настани. 
                                        
                                        </Card.Text>
                                        <Button variant="outline-dark"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../Images/Za_Nas/coworking.jpg`)} />
                                        </figure>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Coworking</Card.Title>
                                    <Card.Text>
                                         Биди дел од tech заединцата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office.
                                         Прикачи го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кој да ги дели своите канцеларии.
                                        </Card.Text>
                                        <Button variant="outline-dark"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../Images/Za_Nas/prostor_za_nastani.jpg`)} />
                                        </figure>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Простории за настани</Card.Title>
                                    <Card.Text>
                                         Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно
                                         ги одбира и курира сите настани.
                                        </Card.Text>
                                        <Button variant="outline-dark"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../Images/partnerstva_so_tech_komp.jpg`)} />
                                        </figure>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Партнерства со Tech компании</Card.Title>
                                    <Card.Text>
                                         Целта и идејата е креирање на tech заедницата која ќе се негува, расте и креира подобро утро за сите настан.
                                         Преку директно и индиректно поврзување на tech талентите со компаниите.
                                        </Card.Text>
                                        <Button variant="outline-dark"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../Images/IMG_7397.jpg`)} />
                                        </figure>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Иновации за компании</Card.Title>
                                    <Card.Text>
                                         Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. 
                                         Подгответе ја вашата компанија за дигитална трансформација. 
                                        </Card.Text>
                                    <Button variant="outline-dark"><i className="fas fa-arrow-right"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Col>
        </div>
    )
}
export default ZaNas;