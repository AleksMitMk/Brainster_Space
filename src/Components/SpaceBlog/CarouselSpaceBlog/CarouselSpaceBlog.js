import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './CarouselSpaceBlog.css';

function CarouselSpaceBlog(props) {
    return (
        <div className="carouselSpaceBlog">
            <Carousel
                interval={7000}
                indicators={false}
                nextIcon={<svg className="bi bi-arrow-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd" />
                </svg>}
                prevIcon={<svg className="bi bi-arrow-left" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                </svg>}
            >
                {props.cards.map((el, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={require(`../../../Images/Space_Blog_Kartici/${i}.jpg`)}
                                alt="First slide"
                            />
                            <div className="black-overlay"></div>
                            <Carousel.Caption>
                                <div className="filterName">{el.branch}</div>
                                <h1>{el.title}</h1>
                                
                                <div className="position"><p>{el.text} </p><span>{i+1}/{props.cards.length}</span></div>
                                <Button variant="light" className="showMore">
                                    <i className="fas fa-arrow-right"></i>
                                Дознај повеќе</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}



            </Carousel>
        </div>
    )
}
export default CarouselSpaceBlog;