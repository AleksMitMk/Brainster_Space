import React from 'react';
import './SpaceCards.css';
import { Col, Card, Button, Row } from 'react-bootstrap';

function SpaceCards(props) {
    return (
        <div className="spaceCards">
            <Col sm={11} md={11} lg={11} className="spaceCenter ">
                <Row>
                    {props.cards.map((el, i) => {
                        return (
                            <Col lg={4} md={6} sm={12} xs={12} key={i}>
                                <a href="https://medium.com/wearelaika/brainster-space-the-new-home-of-the-local-tech-community-in-skopje-ffe97b564152" target="_blank" rel="noopener noreferrer">
                                    <Card >
                                        <div className="hover03 column">
                                            <div>
                                                <figure>
                                                    <Card.Img variant="top" src={require(`../../../Images/Space_Blog_Kartici/${i}.jpg`)} />

                                                </figure>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <div>
                                                <Card.Title>{el.title}</Card.Title>
                                                <Card.Text>{el.text}</Card.Text>

                                            </div>
                                            <div className="bottomBtnBranch">
                                                <div className="filterName">{el.branch}</div>
                                                <Button variant="outline-dark" className="cicleBtn"><i className="fas fa-arrow-right"></i></Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        )
                    })}

                </Row>
            </Col>

        </div>
    )
}
export default SpaceCards;