import React, { useRef } from 'react';
import { Col, Row, Button, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import './Coworking.css';


function Coworking() {
    const target = useRef(null);
    return (
        <div className="coworking" >
            <Col lg={11} sm={12} className="headCol">
                <Row>
                    <Col lg={{span: 7, order:2 }} sm={{ span: 12, order: 12}} xs={{span: 12, order: 12}}>
                        <div><Image src={require(`../../../Images/Za_Nas/coworking.jpg`)} fluid /></div>
                    </Col>
                    <Col lg={{span: 5, order:12 }} sm={{ span: 12, order: 2}} xs={{span: 12, order: 2}} className="eduCompPart">
                        <div className="titlePart lineThrough">
                            <div className="soldOut"><h4>Sold out</h4></div>
                            <h1 className="lineThrough">Coworking</h1>
                            <h5>Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office.
                            Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.
                                </h5>
                        </div>
                        <div className="btnEduComp lineThrough">
                            <OverlayTrigger
                                trigger="click"
                                key="bottom"
                                placement="bottom"
                                overlay={
                                    <Popover id={`popover-positioned-bottom`} target={target.current}>
                                        <Popover.Title as="h3">Се извинуваме...</Popover.Title>
                                        <Popover.Content>
                                            <strong>Местата се распродадени</strong>
                                        </Popover.Content>
                                    </Popover>
                                }
                            >
                                <Button className="nameColor" variant="dark" ref={target}>Резервирај место</Button>
                            </OverlayTrigger>
                        </div>
                    </Col>

                </Row>
            </Col>
        </div>
    );
}

export default Coworking;