import React from 'react';
import { Link } from 'react-router-dom';

export function FavoriteMovies(favoriteMoviesList) {
    return ( 
        <div>
            <h2>Favorite movies</h2>
            {favoriteMoviesList.map ((movie) => {
                return (
                    <div key={movies._id}>
                        <img src={movies.ImagePath}/>
                        <Link to={`/movies/${movies._id}`}>
                            <h4>{movies.Title}</h4>
                        </Link>
                        <button variant="success" onClick={() => onRemoveFavorite(movies._id)}>Remove from list</button>
                    </div>
                )
            }
            )}
        </div>
     );
}

