import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // const { data } = await api.fetchPosts();

    // dispatch({ type: FETCH_ALL, payload: data });
    // log in the user;
    navigate('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
      // const { data } = await api.fetchPosts();
  
      // dispatch({ type: FETCH_ALL, payload: data });
      // sign up the user;
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };