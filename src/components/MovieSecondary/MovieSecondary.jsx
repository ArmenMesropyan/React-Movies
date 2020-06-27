import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './MovieSecondary.scss'

const MovieSecondary = ({budget, revenue, runtime: [hours, minutes]}) => (
    <section className="movie__secondary secondary">
        <Container>
            <Row tag="ul" className="secondary__list">
                <Col tag="li" md="4" className="secondary__runtime">
                    <i className="fa fa-clock secondary__runtime-icon"></i>
                    {`Running time: ${hours}h ${minutes}m`}
                </Col>
                <Col tag="li" md="4" className="secondary__budget">
                    <i className="fa fa-money-bill-alt secondary__budget-icon"></i>
                    {`Budget: $ ${budget}`}
                </Col>
                <Col tag="li" md="4" className="secondary__revenue">
                    <i className="fa fa-dollar-sign secondary__revenue-icon"></i>
                    {`Revenue: $ ${revenue}`}
                </Col>
            </Row>
        </Container>
    </section>
)

export default MovieSecondary;