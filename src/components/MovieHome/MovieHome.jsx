import React from 'react';
import './MovieHome.scss';
import {MovieSecondary, FirstSection} from '../';

const MovieHome = ({movie, crew, getService}) => {
    if(!movie) return null;

    const {backdrop_path, poster_path, original_title, status, overview, vote_average, runtime, budget, revenue} = movie;
    const background = getService.getBackgroundImage(backdrop_path);
    const image = getService.getPosterImage(poster_path);
    const rating = vote_average.toFixed(1) * 10;
    const directors = crew.filter(({job}) => job === 'Director');
    const time = (runtime / 60).toFixed(2).split('.');
    const [transformBudget] = (budget).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.');
    const [transformRevenue] = (revenue).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.');

    const params = {background, image, title: original_title, status, text: overview, rating}

    return (
        <>
            <FirstSection {...params}>
                <ul className="movie-info__directors">
                    <h3 className="movie-info__directors-title">Directors</h3>
                    {directors.map(({name, id}) => (
                        <li className="movie-info__director" key={id}>{name}</li>
                    ))}
                </ul>
                <span className="movie-info__icon">
                    <img src="/img/cinema.svg" alt="Movie icon"/>
                </span>
            </FirstSection>
            <MovieSecondary budget={transformBudget} revenue={transformRevenue} runtime={time}/>
        </>
    );
};

export default MovieHome;