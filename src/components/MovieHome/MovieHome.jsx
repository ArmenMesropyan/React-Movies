import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './MovieHome.scss';
import {MovieSecondary} from '../';

const MovieHome = ({movie, crew, getService}) => {
    if(!movie) return null;

    const {backdrop_path, poster_path, original_title, status, overview, vote_average, runtime, budget, revenue} = movie;
    const background = getService.getBackgroundImage(backdrop_path);
    const image = getService.getPosterImage(poster_path);
    const rating = vote_average * 10;
    const directors = crew.filter(({job}) => job === 'Director');
    const time = (runtime / 60).toFixed(2).split('.');
    const [transformBudget] = (budget).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.');
    const [transformRevenue] = (revenue).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.');

    return (
        <>
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
                                <img src="/img/cinema.svg" alt="Movie icon"/>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>
            <MovieSecondary budget={transformBudget} revenue={transformRevenue} runtime={time}/>
        </>
    );
};

export default MovieHome;