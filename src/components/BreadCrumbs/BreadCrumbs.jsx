import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import './BreadCrumbs.scss';

const BreadCrumbs = ({title, movieId}) => {
    return (
        <section className="movies__breadcrumbs breadcrumbs">
            <Container>
                <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumbs__item">
                        <Link to={`/movies/${movieId}`}>
                            / {title}
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default BreadCrumbs;