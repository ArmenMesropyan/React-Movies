import React, {Component} from 'react';
import './MoviesList.scss';
import {Container, Row, Col} from 'reactstrap';
import {GetService} from '../../service';

export default class MoviesList extends Component {

    state = {
        movies: null,
        currentPage: null,
        totalPages: null,
        loading: false,
        error: false,
    }

    getService = new GetService();

    setMovies = async() => {
        try {
            const {getMovies} = this.props;
            const {results, page, total_pages} = await getMovies();
            this.setState({
                movies: results,
                currentPage: page,
                totalPages: total_pages,
                loading: false,
            });
        } catch (error) {
            this.setState({loading: false, error: true});
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.setMovies();
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

    render() {
        const {movies, loading, error} = this.state;
        if(!movies || loading) return null;// Loading
        const elements = movies.map(this.getMoviesElements);
        return (
            <section className="movies-page__list movies-list">
                <Container>
                    <h2 className="movies-list__title">Popular Movies</h2>
                    <Row tag="ul" className="movies-list__list">
                        {elements}
                    </Row>
                </Container>
            </section>
        )
    }
}