import React from 'react';
import Slider from 'react-slick';
import {Container} from 'reactstrap';
import './TrailersList.scss';

const TrailersList = ({trailers}) => {
    if(!trailers || !trailers.length) return null;
    console.log('trailers: ', trailers);

    const youtubeLinks = trailers.filter(item => item.site === 'YouTube')
                                 .map(({key}) => `https://www.youtube.com/watch?v=${key}`);
    console.log('youtubeLinks: ', youtubeLinks);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
    };

    return (
        <section className="trailers">
            <Container>
                <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
            </Container>
        </section>
    )
};

export default TrailersList;