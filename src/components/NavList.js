import React from "react";

const NavList = ({ movies }) => {
  let renderMoviesList = movies.map((movie) => {
    return <img key={movie.id} src={movie.image} alt={movie.title} />;
  });

  return <nav id="movie-list">{renderMoviesList}</nav>;
};

export default NavList;
