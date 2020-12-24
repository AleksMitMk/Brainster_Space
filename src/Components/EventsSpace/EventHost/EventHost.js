import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "./EventHost.css";

function EventHost() {
  return (
    <div className="eventHost" id="event">
      <Col lg={11} className="eventCenter">
        <Row>
          <Col
          
            xs={{ span: 12, order: 8 }}
            sm={{ span: 6, order: 8 }}
            md={{ span: 6, order: 4 }}
            lg={{span:3, order:1}}
            className="hostText"
          >
            <div className="info">
              <h2>Event Host</h2>
              <h5>Ања Макеска</h5>
              <h5>anja@brainster.com</h5>
              <h5>+389 (0)70 233 414</h5>
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 6, order: 1 }}
            md={{ span: 4, order: 2}}
            lg={{ span: 4, offset: 5, order: 5 }}
          >
            <Image
              src={require(`../../../Images/Space_Kitchen_Galerija/anja.jpg`)}
              fluid
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
}
export default EventHost;
