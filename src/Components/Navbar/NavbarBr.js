import React, { useState } from "react";
import "./NavbarBr.css";
import {
  Col,
  Navbar,
  Nav,
  Image,
  Button,
  Modal,
  Form,
  Collapse
} from "react-bootstrap";

function NavbarBr(props) {
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [underline, setUnderline] = useState(false)

  const [keyCount, setKeyCount] = useState(300);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <div id="navbarBr">
      <Col lg={12} className="defCol">
        <Navbar expand="lg" className="headNav">
          <Col
            lg={{ span: 1 }}
            sm={2}
            xs={{ span: 3 }}
            className="logoImgMargin"
          >
            <Navbar.Brand href="/home">
              <Image
                src={require(`../../Images/brainster_space_logo.svg`)}
                thumbnail
              />
            </Navbar.Brand>
          </Col>
          {/* <Button className="btnNav d-none d-xs-block" variant="dark"><span>+</span> Приклучи се</Button> */}
          <Col
            lg={{ span: 7, order: 2 }}
            sm={{ span: 12, order: 12 }}
            xs={{ order: 11 }}
            className="defCol"
          >
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link
                  className="underlineHover"
                  activeClassName="active"
                  onClick={() => setOpen(!open)}
                  href="#SpaceBLog"
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Space Blog
                </Nav.Link>
                <Nav.Link 
                onClick={()=>setUnderline(!underline)}
                className={ underline === true ? "underlineActive" : "underlineHover"} 
                
                href="/Nastani">
                  Настани
                </Nav.Link>
                <Nav.Link className="underlineHover" href="/coworking">
                  Co-Working
                </Nav.Link>
                <Nav.Link className="underlineHover" href="/Academies">
                  Академии
                </Nav.Link>
                <Nav.Link className="underlineHover" href="/EventSpace">
                  Простор за Настани
                </Nav.Link>
                <Nav.Link className="underlineHover" href="/Партнерства">
                  Партнерства
                </Nav.Link>
                <Button
                  className="d-block d-sm-none  btnNavColapse"
                  onClick={handleShow}
                  variant="warning"
                >
                  <span>+</span> Приклучи се
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col
            lg={{ span: 3, order: 12 }}
            sm={{ span: 9, order: 2 }}
            xs={{ span: 7, order: 2 }}
            className="buttonNav"
          >
            <Button
              className="d-none d-sm-block  btnNav"
              onClick={handleShow}
              variant="dark"
            >

              <span>+</span> Приклучи се
            </Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>

        </Navbar>
        <Modal
          show={show}
          onHide={handleClose}
          {...props}
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
                    Предлог за Соработка (незадолжително)
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
        <Collapse in={open} className="navDown">
          <div id="example-collapse-text">
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
              <Navbar.Brand className="xs-d-none bottomBrand ">Филтрирај</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" className="SecondBtnToggle">
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <div className="lineThree"></div>
              </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto responsiveNav" >
                  <Nav.Link className="underlineHover" href="/SpaceBLog/all">Сите</Nav.Link>
                  <Nav.Link className="underlineHover" href="/SpaceBLog/Кариера">Кариера</Nav.Link>
                  <Nav.Link className="underlineHover" href="/SpaceBLog/Технологија">Технологија</Nav.Link>
                  <Nav.Link className="underlineHover" href="/SpaceBLog/Data_Science">Data Science</Nav.Link>
                  <Nav.Link className="underlineHover" href="/SpaceBLog/Маркетинг">Маркетинг</Nav.Link>
                  <Nav.Link className="underlineHover" href="/SpaceBLog/Дизајн">Дизајн</Nav.Link>
                  <Nav.Link className="underlineHover" href="/SpaceBLog/Impact">Impact</Nav.Link>
                  <Nav.Link className="underlineHover" href="/SpaceBLog/SpaceFamilly">#SpaceFamilly</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Collapse>
      </Col>
    </div>
  );
}
export default NavbarBr;
