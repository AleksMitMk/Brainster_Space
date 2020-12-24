import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import './OurSpace.css'

function OurSpace() {

    let space = [
        { img: "2", title: "Brainster" },
        { img: "C31", title: "Конференциска сала" },
        { img: "C32", title: "Сала со бина" },
        { img: "C3EXIBITION_1", title: "Адаптибилна училница" },
        { img: "C21", title: "Училница" },
        { img: "C11", title: "Училница" },
        { img: "HOLKONSEDENJE", title: "Хол" },
        { img: "C14", title: "Канцелариски простор" },
        { img: "KITCHEN_03", title: "Space Kitchen" }
    ]

    return (
        <div className="ourSpace">
            <Col lg={{ span: 11 }} className="firstSpace">
                <Row>
                    <Col sm={12} md={12} lg={3} className="space">
                        <div className="textTitleSpace"><h1>Нашите простории</h1></div>
                        <p>Комплетно адаптибилни. Една сала за 150 ученици или три помали сали за групи од по 50 учесника.
                            Училници за од 25 до 40 учесника. Избор од две локации.
                            <br /><br />
                            Пулт за прием. И најважното место за networking- Brainster Kitchen.
                            <br /><br />
                            Како го замислувате вашиот следен настан?
                        </p>
                    </Col>
                    <Col sm={12} lg={9}>
                        <Row>
                            {space.map((el, i) => {
                                return (
                                    <Col sm={6} md={6} lg={4} key={i} className="bild">
                                        <div className="imgDef"><Image src={require(`../../../Images/Renderi/${el.img}.jpg`)} fluid /></div>
                                        <p>{el.title}</p>
                                    </Col>
                                )
                            })}

                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}
export default OurSpace;