import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomoing} from '../api/tmdb-api'
import AddToPopularIcon from "../components/cardIcons/addToPopular";
const upcomingMoviesPage = (props) => {
     // eslint-disable-next-line react-hooks/rules-of-hooks
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomoing)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPopularIcon movie={movie} />
        
      }}
    />
);
};

export default upcomingMoviesPage;