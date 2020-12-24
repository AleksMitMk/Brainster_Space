import React, { useState } from 'react';
import { Button, Modal, Image, Col, Row } from 'react-bootstrap';
import './FooterBr.css';

function FooterBr() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="footerBr">
            <div className="footer">
                <Row>
                    <Col className="social" lg={{ span: 2, order: 2 }} sm={{ span: 4, order: 2 }} xs={{ span: 12, order: 12 }}>
                        <ul className="links">
                            <h5>Корисни линкови</h5>
                            <li onClick={handleShow}>Контакт</li>
                            <li><a href="https://www.wearelaika.com/" target="_blank" rel="noopener noreferrer">Отворени позиции</a></li>
                            <li><a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152" target="_blank" rel="noopener noreferrer">Галеријa</a></li>
                            <li><a href="/Nastani" rel="noopener noreferrer">Календар</a></li>
                        </ul>


                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Контакт</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <i className="fas fa-at"></i> Емаил: <a href="https://brainster.co/#">anja@brainster.co</a> <br />
                                <i className="fas fa-tty"></i> Телефон: 070 233 414
                    </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}> Close </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col className="social" lg={{ span: 3, order: 2, offset: 0 }} sm={{ span: 4, order: 2, offset: 1 }} xs={{ span: 12, order: 12 }}>
                        <div className="net">
                            <h5>Социјални мрежи</h5>
                            <ul>
                                <li className="facebook"><a href="https://www.facebook.com"><i className="fab fa-facebook-f fa-2x"></i></a></li>
                                <li className="linkedin"><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
                                <li className="instagram"><a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 5 }} sm={{ span: 2, offset: 1 }} xs={{ span: 12, order: 2 }} className="logoBottom">
                        <Image src={require(`../../Images/brainster_space_logo.svg`)} thumbnail />
                    </Col>
                </Row>
            </div>
            <div className="copyright">
                <p>COPYRIGHT&copy;Brainster Space. All Rights Reserved</p>
            </div>
        </div>
    )
}
export default FooterBr;