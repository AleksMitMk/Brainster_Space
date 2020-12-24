import React, { Component } from 'react';
import { Col, Row, Image, Button } from 'react-bootstrap';
import './Education.css';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edu: true,
            eduName: 'Едукација',
            eduText: 'Дали си подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.',
            img: `Za_Nas/edukacija1.jpg`,
            compName: 'Компании',
            compText: 'Компаниите имаат можност да ги надоградуваат своите тимови, а со тоа да го подобрат перформансот на својата компанија. \n Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно, Обуки, семинари, курсеви или Team building. \n Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи и адаптира, сподели својата експертиза со денешните потреби на компаниите.',

        }
    }

    toggleEdu() {
        console.log('edu')
        this.setState({
            edu: true,
            img: 'Za_Nas/edukacija1.jpg'
        })
    }
    toggleComp() {
        console.log('const')
        this.setState({
            edu: false,
            img: '7707.jpg'
        })
    }

    render() {
        return (
            <div className="education">
                <Col md={11} className="headCol">
                    <Row>
                        <Col md={5} className="eduCompPart">
                            <div className="titlePart">
                                <h1>{this.state.edu ? `${this.state.eduName}` : `${this.state.compName}`}</h1>
                                <h5>{this.state.edu ? `${this.state.eduText}` : `${this.state.compText}`}</h5>
                            </div>
                            <div className="btnEduComp">
                                <Button className={this.state.edu ? ' ' : 'nameColor '}
                                variant={this.state.edu ? 'warning' : 'dark'} 
                                size="lg" 
                                onClick={() => { this.toggleEdu() }}>Академии</Button>
                                <Button className={this.state.edu ? 'nameColor ' : '  '}
                                variant={this.state.edu ? 'dark' : 'warning'} 
                                size="lg" 
                                onClick={() => { this.toggleComp() }}>За Компании</Button>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div><Image src={require(`../../Images/` + `${this.state.img}`)} fluid /></div>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Education;