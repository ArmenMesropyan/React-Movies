import React, {Component} from 'react';
import {BreadCrumbs, Spinner, MovieHome} from '../components';
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
    }

    async setMovie() {
        try {
            const {match: {params: {moviesId}}} = this.props;
            const {title, ...movie} = await this.getService.getMovieById(moviesId);
            const {cast, crew} = await this.getService.getMovieById(moviesId, '/credits');
            this.setState({loading: false, movie, title, cast, crew});
        } catch (error) {
            this.setState({loading: false, error: true});
        }
    }
    
    componentDidMount() {
        this.setState({loading: true});
        this.setMovie();
    }

    render() {
        const {title, loading, movie, crew, error} = this.state;
        const {match: {params: {moviesId}}} = this.props;

        return (
            <main className="movie">
                {loading ? <Spinner className="movie__spinner"/>
                 :  <>
                        <BreadCrumbs title={title} movieId={moviesId}/>
                        <MovieHome movie={movie} getService={this.getService} crew={crew}/>
                    </>
                }
            </main>
        )
    }
}