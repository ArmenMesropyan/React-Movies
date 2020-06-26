import React from 'react';
import {Container, Row, Col} from 'reactstrap'; 
import './Header.scss';

const Header = () => {
    return (
        <header className="main__header main-header">
            <Container tag="nav" className="main-header__nav">
                <Row tag="ul" className="main-header__list">
                    <Col tag="li" className="main-header__item main-header__item_logo">
                        <a href="/">
                            <img src="/logo.png" alt="Movies DB"/>
                        </a>
                    </Col>
                    <Col tag="li" className="main-header__item main-header__item_links">
                        <ul className="main-header__links">
                            <li className="main-header__link main-header__link_tmdb">
                                <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="The Movies Database Link"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;