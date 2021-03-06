import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

// import axios from 'axios';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData);
    //const data  = await api.signIn(formData);

    // const {data} = await axios({
    //     method: 'post',
    //     url: 'http://localhost:6500/users/signin',
    //     data: formData,
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });

    const {data} = await api.signin(formData);

    console.log(data);

    dispatch({ type: AUTH, data });
    // // log in the user;


    navigate('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData);

        // const {data} = await axios({
        //     method: 'post',
        //     url: 'http://localhost:6500/users/signup',
        //     data: formData,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
        
        // sign up the user;
        const {data} = await api.signin(formData);
  
         dispatch({ type: AUTH, data });
    
       navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };