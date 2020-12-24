import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';
import './FirstSpacePart.css'
import { Link } from 'react-scroll';


function FirstSpacePart() {
    return (
        <div className="firstSpacePart">
            <Col lg={{ span: 11 }} className="firstSpace">
                <Row>
                    <Col lg={4} className="space">
                        <h1>Простор за настани</h1>
                        <p>Нашиот простор се прилагодува според потребите на вашиот настан.
                        Седум различни простории и Space Kitchen.
                            <br /><br />
                            Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настани кој го организирате.
                            <br /><br />
                            Организираме конференции до 150 учесници и обуки и предавања за групи од 20 учесници. Контактирај не
                            за да ви хостираме одличен настан.
                        </p>
                        <Link
                            activeClass="active"
                            to="event"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        ><Button className="d-none d-sm-block btnNav" variant="dark"><span>+</span> Букирај не</Button></Link>
                    </Col>
                    <Col lg={8}>
                        <Image src={require(`../../../Images/Za_Nas/prostor_za_nastani.jpg`)} fluid />
                    </Col>
                </Row>
            </Col>
        </div>
    )
}
export default FirstSpacePart;