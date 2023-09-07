import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const state = useSelector((store) => store.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    dispatch(getMovies());

    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
