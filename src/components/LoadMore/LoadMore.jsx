import React from 'react';
import {Container, Button} from 'reactstrap';
import './LoadMore.scss';

const LoadMore = ({onLoadMoreClick}) => (
    <section className="movies__load load-more">
        <Container>
            <Button className="load-more__button" onClick={onLoadMoreClick}>Load More</Button>
        </Container>
    </section>
)

export default LoadMore;