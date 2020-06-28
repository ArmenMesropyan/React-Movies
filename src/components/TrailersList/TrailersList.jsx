import React from 'react';
import Slider from 'react-slick';
import {Container} from 'reactstrap';
import ReactPlayer from 'react-player'
import './TrailersList.scss';

const TrailersList = ({trailers}) => {
    if(!trailers || !trailers.length) return null;

    const youtubeLinks = trailers.filter(item => item.site === 'YouTube')
                                 .map(({key}) => ({link: `https://www.youtube.com/watch?v=${key}?enablejsapi=1&origin=http://localhost:3000`, key}));
    
    const elements = youtubeLinks.map(({link, key}) => (
        <li className="trailers__item" key={key}>
            <ReactPlayer url={link} className="trailers__video"/>
        </li>
    ))

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 2000,
    };

    return (
        <section className="trailers">
            <Container tag="ul" className="trailers__list">
                <h2 className="trailers__title">Trailers</h2>
                <Slider {...settings}>
                    {elements}
                </Slider>
            </Container>
        </section>
    )
};

export default TrailersList;