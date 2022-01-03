import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/movieContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import WriteReview from "../components/cardIcons/writeReview";
const FavoriteMoviesPage = () => {
  const {popular: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const popularMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = popularMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = popularMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      selectPopular={toDo}
      action={(movie) => {
        return (
          <>
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;