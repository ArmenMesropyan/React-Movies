import React, {Component} from 'react';
import {Spinner, FirstSection} from '../components';
import {GetService} from '../service';
import './Movie.scss';

export default class MoviePage extends Component {

    getService = new GetService();

    state = {
        background: null,
        image: null,
        name: '',
        biography: '',
        birthday: '',
        birthPlace: '',
        popularity: 0,
    }

    async setActor() {
        try {
            const {match: {params: {actorId}}} = this.props;
            const { biography, name, place_of_birth, profile_path, popularity, birthday } = await this.getService.getActorById(actorId);

            const images = await this.getService.getImageByQuery(place_of_birth);
            const image = this.getService.getPosterImage(profile_path);
            const background = images.hits[0].largeImageURL;
            const [, month, day, year] = new Date(birthday).toString().split(' ');
            const formatBirthday = `${day} ${month} ${year}`;

            this.setState({
                loading: false,
                background,
                name,
                image,
                biography,
                birthday: formatBirthday,
                birthPlace: place_of_birth,
                popularity,
            });
        } catch (error) {
            console.log(error);
            this.setState({loading: false, error: true});
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.setActor();
    }

    render() {
        const {background, loading, error} = this.state;
        console.log('background: ', background);
        // background, image, title, status = '', text, rating, children
        return (
            <main className="actor">
                {loading ? <Spinner className="actor__spinner"/>
                 :  <>
                        <FirstSection />
                    </>
                }
            </main>
        )
    }
}