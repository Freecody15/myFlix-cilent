import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    _id: '62b3d1d4b3f235ba56e0e7aa',
                    Title: 'Naruto Shippuden',
                    Description: 'Naruto Shippuden is the second series of Naruto anime that follows the titular hero on his quest to become Hokage. Unlike the first series, Naruto is now older and has new teachers to help him through his adventure',
                    Genre: {
                        Name: 'Animation',
                        Description: 'Animated Films are ones in which individual drawings, paintings, or illustrations are photographed frame by frame (stop-frame cinematography). Usually, each frame differs slightly from the one preceding it, giving the illusion of movement when frames are projected in rapid succession at 24 frames per second.'
                    },
                    Director: {
                        Name: 'Hayato Date',
                        Bio: 'Hayato Date, is a Japanese animation director most known for the anime adaptations of Saiyuki and Naruto.'
                    },
                    ImagePath: 'https://www.imdb.com/title/tt0988824/mediaviewer/rm1490944256/?ref_=tt_ov_i',
                    Featured: true
                },
                {
                    _id: '62b3d35dff5e76bbb9dc7725',
                    Title: 'Naruto',
                    Description: 'Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the villages leader and strongest ninji',
                    Genre: {
                        Name: 'Animation',
                        Description: 'Animated Films are ones in which individual drawings, paintings, or illustrations are photographed frame by frame (stop-frame cinematography). Usually, each frame differs slightly from the one preceding it, giving the illusion of movement when frames are projected in rapid succession at 24 frames per second.'
                    },
                    Director: {
                        Name: 'Hayato Date',
                        Bio: 'Hayato Date, is a Japanese animation director most known for the anime adaptations of Saiyuki and Naruto.'
                    },
                    ImagePath: 'https://www.imdb.com/title/tt0409591/mediaviewer/rm651630848/?ref_=tt_ov_i',
                    Featured: false
                },
                {
                    _id: '62b3d372ff5e76bbb9dc772a',
                    Title: 'Baki',
                    Description: "Five of the worlds most violent and brutal death row inmates are gathering to face Baki. Their objective is to taste defeat -- their unmatched strength and skill have led them to grow bored of life itself, and they now seek out Baki in the hopes that he can overwhelm and utterly crush them.",
                    Genre: {
                        Name: 'Animation',
                        Description: 'Animated Films are ones in which individual drawings, paintings, or illustrations are photographed frame by frame (stop-frame cinematography). Usually, each frame differs slightly from the one preceding it, giving the illusion of movement when frames are projected in rapid succession at 24 frames per second.'
                    },
                    Director: {
                        Name: 'Toshiki Hirano',
                        Bio: 'Hirano Toshihiro is a Japanese anime director, animator, and character designer. His wife is a fellow animator and manga artist Narumi Kakinouchi. Some of his works have appeared in the adult manga magazine Lemon People. He is representative of Toshiki Hirano Office Ltd.'
                    },
                    ImagePath: 'https://www.imdb.com/title/tt6357658/mediaviewer/rm2834215169/?ref_=tt_ov_i',
                    Featured: false
                },
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;


        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />))}
            </div>
        );
    }
}