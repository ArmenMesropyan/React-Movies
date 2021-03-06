import React, {Component} from 'react';
import {BreadCrumbs, Spinner, MovieHome, TrailersList, ActorsList, ErrorMsg} from '../components';
import {GetService} from '../service';
import './Movie.scss';

export default class MoviePage extends Component {

    getService = new GetService();

    state = {
        movie: null,
        cast: null,
        crew: null,
        title: '',
        loading: false,
        error: false,
        trailers: null,
    }

    async setMovie() {
        try {
            const {match: {params: {moviesId}}} = this.props;
            const {title, ...movie} = await this.getService.getMovieById(moviesId);

            if (movie.status_message) this.setState({loading: false, error: true});

            const {cast, crew} = await this.getService.getMovieById(moviesId, '/credits');
            const {results: trailers} = await this.getService.getMovieById(moviesId, '/videos');
            this.setState({loading: false, movie, title, cast, crew, trailers});
        } catch (error) {
            this.setState({loading: false, error: true});
        }
    }
    
    componentDidMount() {
        this.setState({loading: true});
        this.setMovie();
    }

    render() {
        const {title, loading, movie, crew, trailers, cast, error} = this.state;
        const {match: {params: {moviesId}}} = this.props;

        if(error) return <ErrorMsg msg='There are no results :(' />

        return (
            <main className="movie">
                {loading ? <Spinner className="spinner"/>
                 :  <>
                        <BreadCrumbs title={title} movieId={moviesId}/>
                        <MovieHome movie={movie} getService={this.getService} crew={crew}/>
                        <TrailersList trailers={trailers}/>
                        <ActorsList actors={cast} getService={this.getService} movie={movie}/>
                    </>
                }
            </main>
        )
    }
}