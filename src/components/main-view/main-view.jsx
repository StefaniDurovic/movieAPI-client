import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [
            { _id: 1, Title: 'The Tree of Life', Description: 'The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents\' conflicting teachings.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_FMjpg_UX1000_.jpg'},
            { _id: 2, Title: 'Miss Sloane', Description: 'In the high-stakes world of political power-brokers, Elizabeth Sloane is the most sought after and formidable lobbyist in D.C. But when taking on the most powerful opponent of her career, she finds winning may come at too high a price.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Miss_Sloane.png'},
            { _id: 3, Title: 'A Most Violent Year', Description: 'In New York City 1981, an ambitious immigrant fights to protect his business and family during the most dangerous year in the city\'s history.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/0/09/A_Most_Violent_Year_poster.png'}
            ],
            selectedMovie: null
        }
        }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
        }

    render() {
        const { movies, selectedMovie } = this.state;

        if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie);}}/>;

        if (movies.length === 0){
            return <div className="main-view">The list is empty!</div>;
        } else {
            return (
            <div className="main-view">
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
            </div>
            );
        }
        }
}

export default MainView;