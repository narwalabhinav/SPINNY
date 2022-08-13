import axios from "axios";
import {
  GET_IMAGES,
  LOAD_MORE,
  IMAGES_LOADING,
  IMAGES_LOADING_MORE,
} from "./types";
import { incrementPage, updateQuery } from "./searchbarActions";

export const getImages = (new_query) => (dispatch, getState) => {
  dispatch(updateQuery(new_query));
  dispatch(setImagesLoading());
  const { query, per_page } = getState().search;
  axios
    .get(
       `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16`
    )
    .then((res) => {
      dispatch({
        type: GET_IMAGES,
        payload: res.data,
      });
    })
    .catch((err) =>
      console.log(
        "Error happened during fetching!",
        err.response.data,
        err.response.status
      )
    );
};

export const loadMore = () => (dispatch, getState) => {
  dispatch(incrementPage());
  dispatch(setImagesLoadingMore());
  const { page_num, query, per_page } = getState().search;
  axios
    .get(
      `https://api.jikan.moe/v3/search/anime?q=${query}&limit=${per_page}&page=${page_num}`
    )
    .then((res) => {
      dispatch({
        type: LOAD_MORE,
        payload: res.data,
      });
    })
    .catch((err) =>
      console.log(
        "Error happened during fetching!",
        err.response.data,
        err.response.status
      )
    );
};

export const setImagesLoading = () => {
  return { type: IMAGES_LOADING };
};

export const setImagesLoadingMore = () => {
  return { type: IMAGES_LOADING_MORE };
};
