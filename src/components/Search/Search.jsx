import React from 'react';
import './Search.scss';
import {Container} from 'reactstrap';

const Search = ({onInputChange}) => {
    return (
        <section className="movies-page__search search-panel">
            <Container>
                <fieldset className="search-panel__fieldset">
                    <i className="fa fa-search search-panel__icon"></i>
                    <label htmlFor="search" className="visually-hidden">Search</label>
                    <input type="text" className="search-panel__input" id="search" placeholder="Search" onChange={onInputChange}/>
                </fieldset>
            </Container>
        </section>
    )
}

export default Search;