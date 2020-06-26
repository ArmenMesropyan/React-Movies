import React, {Component} from 'react';
import './Home.scss';
import {Container} from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <section className="movies-page__first first-section" style={{
                background: 
                `linear-gradient(rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(http://image.tmdb.org/t/p/w1280/oCFbh4Mrd0fuGanCgIF6sG27WGD.jpg) center top / cover, rgb(28, 28, 28)`
                
            }}>
                <Container>
                    <div className="first-section__text">
                        <h2 className="first-section__title">Test</h2>
                        <p className="first-section__overview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsum error, ipsa ullam cum provident. Non praesentium magni vitae qui inventore, assumenda tempora at adipisci aut optio, id, tenetur consequatur.</p>
                    </div>
                </Container>
            </section>
        )
    }
}