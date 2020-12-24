import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./SpaceKitchen.css";

function SpaceKitchen() {
  return (
    <div className="spaceKitchen">
      <Col lg={11} className="space">
        <Row>
          <Col
            xs={{ span: 12, order: 12 }}
            sm={{ span: 12, order: 12 }}
            md={{ span: 12, order: 12 }}
            lg={{ span: 8, order: 1 }}
          >
            <Row>

            <div className="gridImages xs-d-none">
                <div className="imageSpace1 imgOne"></div>
                <div className="imageSpace2 imgTwo"></div>
                <div className="imageSpace3 imgTree"></div>
                <div className="imageSpace imgFour"></div>
            </div>
               
              <Col
                xs={{ span: 12, order: 1 }}
                sm={{ span: 6, order: 1 }}
                md={{ span: 6, order: 1 }}
               
                className="marginBottomPicture d-block d-lg-none"
              >
                <div className="non">
                  <Image
                    src={require(`../../../Images/Space_Kitchen_Galerija/IMG_7777.jpg`)}
                    fluid
                  />
                </div>
              {/* <div className="imageSpace1"></div> */}
              </Col>
              <Col
                xs={{ span: 12, order: 2 }}
                sm={{ span: 6, order: 3 }}
                md={{ span: 6, order: 3 }}
                className="d-block d-lg-none"
              >
                <div className="kitchenImg">
                  <Image
                    src={require(`../../../Images/Space_Kitchen_Galerija/IMG_7385.jpg`)}
                    fluid
                  />
                </div>
              {/* <div className="imageSpace2"></div> */}
              </Col>
              <Col
                xs={{ span: 12, order: 4 }}
                sm={{ span: 6, order: 4 }}
                md={{ span: 6, order: 4 }}
               className="d-block d-lg-none"
              >
                <div className="kitchenImg">
                  <Image
                    src={require(`../../../Images/Space_Kitchen_Galerija/IMG_7361.jpg`)}
                    fluid
                  />
                </div>
              {/* <div className="imageSpace3"></div> */}
              </Col>
              <Col
                xs={{ span: 12, order: 3 }}
                sm={{ span: 6, order: 2 }}
                md={{ span: 6, order: 2 }}
               className="d-block d-lg-none"
              >
                <div className="kitchenImg">
                  <Image
                    src={require(`../../../Images/Space_Kitchen_Galerija/IMG_7362.jpg`)}
                    fluid
                  />
                </div>
              {/* <div className="imageSpace"></div> */}
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 12, order: 1 }}
            lg={4}
            className="space"
          >
            <h1>Space Kitchen</h1>
            <p>
              Место каде сите настани започнуваат и завршуваат. Место каде
              нашиот тим готви и експериментира. Нашата кујна има само едно
              правило.
              <br />
              <br />
              Храната мора да биде вегетаријанска. Пијалок, кафе или мезе. Вие
              одберете вид на кетеринг ние ќе го обезбедиме.
            </p>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
export default SpaceKitchen;
