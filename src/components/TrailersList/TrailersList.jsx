import React from 'react';

const TrailersList = ({trailers}) => {
    if(!trailers || !trailers.length) return null;
    console.log('trailers: ', trailers);

    const youtubeLinks = trailers.filter(item => item.site === 'YouTube')
                                 .map(({key}) => `https://www.youtube.com/watch?v=${key}`);
    console.log('youtubeLinks: ', youtubeLinks);

    return (
        <div>Trailers</div>
    )
};

export default TrailersList;