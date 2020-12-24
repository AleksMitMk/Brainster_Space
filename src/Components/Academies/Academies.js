import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Academies.css';
import AcademyCards from './AcademyCards/AcademyCards';

function Academies(){
    return(
        <div className="akademies">
             <Col lg={{ span:11}} className="firstSpace">
                <Row>
                    <Col lg={4} className="space">
                        <h1>Академии</h1>
                        <h5>Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на денешницата преку интерактивна настава и практична работа на реални проекти.
                            <br/><br/>
                            Инструктори кои се докажани експерти во својата област. Преку нив можеш да ги научиш и предвидиш
                            предизвиците на иднината на работење и да се поврзеш со сегашните и идните врвни професионалци и компании
                            <br/><br/>
                           Академиите ќе ти го отворат патот кон кариера каква што посакуваш.
                        </h5>
                        
                    </Col>
                    <Col lg={8} className="opacity">
                        <div className="academyImage"></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                    <AcademyCards/>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}
export default Academies;