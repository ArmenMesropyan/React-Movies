import React, {Component} from 'react';
import './Home.scss';
import {Container} from 'reactstrap';
import {GetService} from '../../service';
import {Spinner, ErrorMsg} from '../';

export default class Home extends Component {
    state = {
        background: null,
        title: '',
        overview: '',
        loading: false,
        error: false,
    }

    getService = new GetService();

    async setMovies() {
        try {
            const {getMovies} = this.props;
            const {results} = await getMovies();

            const randomNum = Math.floor(Math.random() * 20);
            const {title, overview, backdrop_path} = results[randomNum];
            const background = this.getService.getBackgroundImage(backdrop_path);

            this.setState({loading: false, title, overview, background});
        } catch (error) {
            this.setState({error: true, loading: false});
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.setMovies();
    }

    render() {
        const {background, title, overview, loading, error} = this.state;
        console.log('error: ', error);

        if(error) return <ErrorMsg msg='Oops... Something goes wrong!'/>

        if(loading) return <Spinner className="first-section__spinner"/>

        return (
            <section className="movies-page__first first-section" style={{
                background: 
                `linear-gradient(rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${background}) center top / cover, rgb(28, 28, 28)`
                
            }}>
                <Container>
                    <div className="first-section__text">
                        <h2 className="first-section__title">{title}</h2>
                        <p className="first-section__overview">{overview}</p>
                    </div>
                </Container>
            </section>
        )
    }
}