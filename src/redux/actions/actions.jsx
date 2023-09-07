import axios from "axios";
import { ActionTypes } from "../../constants/actionTypes";
import { options } from "../../constants/constants";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

export const getMovies = () => {
  return async function (dispatch) {
    const res = await axios.get("/movie/popular?language=en", options);

    dispatch({
      type: ActionTypes.SET_MOVIES,
      payload: res.data,
    });
  };
};

export const getGenres = () => (dispatch) => {
  axios
    .get("/genre/movie/list?language=en", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};
