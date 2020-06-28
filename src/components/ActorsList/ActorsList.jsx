import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import './ActorsList.scss';

const ActorsList = ({actors, getService}) => {
    if(!actors) return null;
    console.log('actors: ', actors);

    const elements = actors.map(({name, profile_path, character, id}) => {
        const personImage = getService.getPosterImage(profile_path);
        return (
            <Col tag="li" className="actors-list__item" md="3" key={id}>
                
                    <div className="actors-list__image">
                        <Link to={`/actors/${id}`} className="actors-list__link">
                            <img src={personImage} alt={name}/>
                        </Link>
                    </div>
                    <div className="actors-list__info">
                        <p className="actors-list__name">{name}</p>
                        <p className="actors-list__character">{character}</p>
                    </div>
            </Col>
        )
    });

    return (
        <section className="actors-list">
            <Container>
                <h2 className="actors-list__title">Actors</h2>
                <Row tag="ul" className="actors-list__list">
                    {elements}
                </Row>
            </Container>
        </section>
    );
}

export default ActorsList;