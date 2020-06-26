import React, {Component} from 'react';
import './MoviesList.scss';
import {Container, Row} from 'reactstrap';

export default class MoviesList extends Component {

    componentDidMount() {
        console.log('mount');
    }

    render() {
        return (
            <section className="movies-page__list movies-list">
                <Container>
                    <h2 className="movies-page__title">Popular Movies</h2>
                    <Row tag="ul" className="movies-list__list">
                        {/* {elements} */}
                    </Row>
                </Container>
            </section>
        )
    }
}