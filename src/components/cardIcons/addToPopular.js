import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/movieContext";
import IconButton from "@material-ui/core/IconButton";
import PopularIcon from "@material-ui/icons/Popular";

const AddToPopularIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPopular = (e) => {
    e.preventDefault();
    context.addToPopular(movie);
  };
  return (
    <IconButton aria-label="add to popular" onClick={handleAddToPopular}>
      <PopularIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPopularIcon;
