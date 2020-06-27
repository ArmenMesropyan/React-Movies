import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './MovieHome.scss';

const MovieHome = ({movie, crew, getService}) => {
    if(!movie) return null;
    console.log('movie: ', movie);

    const {backdrop_path, poster_path, original_title, status, overview, vote_average} = movie;
    const background = getService.getBackgroundImage(backdrop_path);
    const image = getService.getPosterImage(poster_path);
    const rating = vote_average * 10;
    const directors = crew.filter(({job}) => job === 'Director');
    console.log('directors: ', directors);

    return (
        <section className="movie__info movie-info" style={{
            background: 
                `linear-gradient(rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${background}) center top / cover, rgb(28, 28, 28)`
        }}>
            <Container>
                <Row tag="ul" className="movie-info__list">
                    <Col tag="li" md="4" className="movie-info__img">
                        <img src={image} alt={original_title}/>
                    </Col>
                    <Col tag="li" md="8" className="movie-info__info">
                        <h1 className="movie-info__title">{original_title}</h1>
                        <p className="movie-info__status">{status}</p>
                        <p className="movie-info__overview">{overview}</p>
                        <h3 className="movie-info__rate-title">IMDB Rating</h3>
                        <div className="movie-info__rate">
                            <meter id="rate" value={rating} min="0" max="100">{`${rating}%`}</meter>
                            <label htmlFor="rate">{`${rating}%`}</label>
                        </div>
                        <ul className="movie-info__directors">
                            <h3 className="movie-info__directors-title">Directors</h3>
                            {directors.map(({name, id}) => (
                                <li className="movie-info__director" key={id}>{name}</li>
                            ))}
                        </ul>
                        <span className="movie-info__icon">
                            <img src="/img/cinema.svg"/>
                        </span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MovieHome;