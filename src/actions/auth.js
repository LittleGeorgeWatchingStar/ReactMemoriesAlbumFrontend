import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signIn(formData);

    console.log(data);

    dispatch({ type: AUTH, data });
    // log in the user;


    //navigate('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData);
        const { data } = await api.signUp(formData);

        console.log(data);
  
        dispatch({ type: AUTH, data });
      // sign up the user;
      //navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };