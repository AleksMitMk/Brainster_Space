import React, {useState} from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './ZaNas.css';
import { Link } from 'react-scroll';

function ZaNas() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [keyCount, setKeyCount] = useState(300);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    

    return (
        <div className="zaNas">
                <Col lg={11} sm={12} className="headCol">
                    <h2>За Нас</h2>
                    <Row>
                        <Col lg={4} sm={6} xs={12}>
                            <a href="https://brainster.co" target="_blank" rel="noopener noreferrer">
                            <Card >
                            <div className="hover03 column">
                                <div>
                                    <figure>
                                        <Card.Img variant="top" src={require(`../../../Images/Za_Nas/edukacija1.jpg`)} />
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
                        
                        <Col lg={4} sm={6} xs={12}>
                            <a href="/Nastani" rel="noopener noreferrer">
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../../Images/Za_Nas/nastani.jpg`)} />
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
                            </a>
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <a href="#Coworking">
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../../Images/Za_Nas/coworking.jpg`)} />
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
                            </a>
                        </Col>
                  
                        <Col lg={4} sm={6} xs={12}>
                            <a href="/EventSpace">
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../../Images/Za_Nas/prostor_za_nastani.jpg`)} />
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
                            </a>
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                        <Link
                            activeClass="active"
                            to="partner"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../../Images/partnerstva_so_tech_komp.jpg`)} />
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
                            </Link>
                        </Col>
                        
                        <Col lg={4} sm={6} xs={12} onClick={handleShow}>
                            <a href="#Inovations">
                            <Card >
                                <div className="hover03 column">
                                    <div>
                                        <figure>
                                            <Card.Img variant="top" src={require(`../../../Images/IMG_7397.jpg`)} />
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
                            </a>
                        </Col>
                    </Row>

                </Col>
                <Modal
          show={show}
          onHide={handleClose}
          
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <h2>Приклучи се</h2>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={12}
                  xs={12}
                  controlId="validationCustom01"
                >
                  <Form.Label className="label">
                    Име и презиме (задолжително)
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Внесете Име и Презиме"
                  />
                  <Form.Control.Feedback type="invalid">
                    Внесете Име и Презиме!
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group
                  as={Col}
                  md={12}
                  xs={12}
                  controlId="validationCustom02"
                >
                  <Form.Label className="label">
                    Име на Компанија (незадолжително)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Внесете име на Вашата Компанија"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={12}
                  xs={12}
                  controlId="validationCustomTelephone"
                >
                  <Form.Label className="label">
                    Емаил адреса (задолжително)
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Внесете Емаил адреса"
                    aria-describedby="inputGroupPrepend"
                  />
                  <Form.Control.Feedback type="invalid">
                    Внесете Телефонски Број
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={12}
                  xs={12}
                  controlId="validationCustomTelephone"
                >
                  <Form.Label className="label">
                    Телефонски Број (задолжително)
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Внесете Телефонски Број"
                    aria-describedby="inputGroupPrepend"
                  />
                  <Form.Control.Feedback type="invalid">
                    Внесете Телефонски Број
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={12}
                  xs={12}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="label">
                    Потреби на компанијата (незадолжително)
                  </Form.Label>
                  <Form.Control
                    onKeyUp={(e) =>
                      setKeyCount(300 - Number(e.currentTarget.value.length))
                    }
                    as="textarea"
                    rows="5"
                    maxLength="300"
                    placeholder="Во 300 карактери, опишете зошто сакате да соработуваме"
                  />
                  <Form.Control.Feedback id="count" type="valid">
                    {keyCount}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                  ИСКЛУЧИ
                </Button>
                <Button type="submit" className="btnSubm" variant="dark">
                  <i className="fas fa-arrow-right "></i> ИСПРАТИ ФОРМА
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
        </div>
    )
}
export default ZaNas;