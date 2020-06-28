import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './FirstSection.scss';

const FirstSection = ({background, image, title, status = '', text, rating, children}) => {
    return (
        <section className="first-section" style={{
            background: 
                `linear-gradient(rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${background}) center top / cover, rgb(28, 28, 28)`
        }}>
            <Container>
                <Row tag="ul" className="first-section__list">
                    <Col tag="li" md="4" className="first-section__img">
                        <img src={image} alt='First section background image'/>
                    </Col>
                    <Col tag="li" md="8" className="first-section__info">
                        <h1 className="first-section__title">{title}</h1>
                        <p className="first-section__status">{status}</p>
                        <p className="first-section__overview">{text}</p>
                        <h3 className="first-section__rate-title">IMDB Rating</h3>
                        <div className="first-section__rate">
                            <meter id="rate" value={rating} min="0" max="100">{`${rating}%`}</meter>
                            <label htmlFor="rate">{`${rating}%`}</label>
                        </div>
                        {children}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FirstSection;