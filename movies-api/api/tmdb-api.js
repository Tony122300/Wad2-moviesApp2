import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&primary_release_year=...&certification=....&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error;
        });
};