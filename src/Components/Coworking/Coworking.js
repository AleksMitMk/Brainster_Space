import React, { Component } from 'react';
import { Col, Row, Button, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import './Coworking.css';

class Coworking extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="coworking">
                <Col md={11} className="headCol">
                    <Row>
                    <Col md={7}>
                            <div><Image src={require(`../../Images/Za_Nas/coworking.jpg`)} fluid /></div>
                        </Col>
                        <Col md={5} className="eduCompPart">
                            <div className="titlePart lineThrough">
                                <h1 className="lineThrough">Coworking</h1>
                                <h5>Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office.
                                Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.
                                </h5>
                            </div>
                            <div className="btnEduComp lineThrough">
                                <OverlayTrigger
                                    trigger="click"
                                    key='bottom'
                                    placement='bottom'
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Title as="h3">Се извинуваме...</Popover.Title>
                                            <Popover.Content>
                                                <strong>Местата се распродадени</strong>
                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                   <Button className='nameColor'
                                    variant='dark'
                                >Резервирај место</Button>
                                </OverlayTrigger>
                            </div>
                        </Col>
                       
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Coworking;