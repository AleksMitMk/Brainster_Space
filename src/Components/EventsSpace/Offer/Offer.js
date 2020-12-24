import React from 'react';
import { Col } from 'react-bootstrap';
import './Offer.css';

function Offer() {
    return (
        <div className="offer">
            <Col lg={11} className="offerCenter">
                <h1>Нудиме</h1>
                <div className="allBoxOffer">
                    <div className="offerBox">
                        <i className="fas fa-globe-europe fa-2x"></i>
                        <h3>Простор</h3>
                    </div>
                    <div className="offerBox">
                    <i className="fas fa-pager fa-2x"></i>
                        <h3>Space Kitchen</h3>
                    </div>
                    <div className="offerBox">
                        <i className="fas fa-globe fa-2x"></i>
                        <h3>Логистика</h3>
                    </div>
                    <div className="offerBox">
                    <i className="fas fa-microphone-alt fa-2x"></i>
                        <h3>Техничка Поддршка</h3>
                    </div>
                    <div className="offerBox ">
                    <i className="fas fa-volume-up fa-2x"></i>
                        <h3>Звук</h3>
                    </div>
                    <div className="offerBox ">
                    <i className="far fa-lightbulb fa-2x"></i>
                        <h3>Светло</h3>
                    </div>
                    <div className="offerBox">
                    <i className="fas fa-network-wired fa-2x"></i>
                        <h3>Помош при Организација</h3>
                    </div>
                    <div className="offerBox">
                    <i className="fas fa-camera fa-2x"></i>
                        <h3>Видео и Фотографија</h3>
                    </div>
                    <div className="offerBox">
                    <i className="fab fa-facebook fa-2x"></i>
                        <h3>Промоција на социјални мрежи</h3>
                    </div>
                </div>

            </Col>
        </div>
    )
}

export default Offer;