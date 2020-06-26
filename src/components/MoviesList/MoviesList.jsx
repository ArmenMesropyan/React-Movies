import React, {Component} from 'react';
import './MoviesList.scss';
import {Container, Row, Col} from 'reactstrap';
import {GetService} from '../../service';
import {Spinner} from '../';

export default class MoviesList extends Component {

    state = {
        movies: null,
        currentPage: null,
        totalPages: null,
        loading: false,
        error: false,
        title: '',
    }

    getService = new GetService();

    async setMovies() {
        try {
            const {getMovies} = this.props;
            const {results, page, total_pages} = await getMovies();
            this.setState({
                movies: results,
                currentPage: page,
                totalPages: total_pages,
                loading: false,
                title: 'Popular Movies',
            });
        } catch (error) {
            this.setState({loading: false, error: true});
        }
    }

    async setMoviesByQuery(search) {
        try {
            const {results, page, total_pages} = await this.getService.getMoviesByQuery(search);
            this.setState({
                movies: results,
                currentPage: page,
                totalPages: total_pages,
                loading: false,
                title: 'Search Results',
            });
        } catch (error) {
            this.setState({loading: false, error: true});
        }
    }

    getMoviesElements = ({ id, poster_path, title }) => {
        const img = this.getService.getPosterImage(poster_path);
        return (
            <Col tag="li" className="movies-list__item" md="3" key={id}>
                <div className="movies-list__movie">
                    <img src={img} alt={title}/>
                </div>
            </Col>
        );
    }

    componentDidMount() {
        this.setState({loading: true});
        this.setMovies();
    }

    componentDidUpdate(lastProps) {
        if(lastProps === this.props) return;

        const {search} = this.props;
        this.setState({loading: true});

        if(!search) this.setMovies();
        else this.setMoviesByQuery(search);
    }

    render() {
        const {movies, loading, title, error} = this.state;
        console.log('loading: ', loading);
        if(loading || !movies) return <Spinner className="movies-list__spinner"/>;
        const elements = movies.map(this.getMoviesElements);
        return (
            <section className="movies-page__list movies-list">
                <Container>
                    <h2 className="movies-list__title">{title}</h2>
                    <Row tag="ul" className="movies-list__list">
                        {elements}
                    </Row>
                </Container>
            </section>
        )
    }
}