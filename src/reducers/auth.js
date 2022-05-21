import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null}, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.data);
      console.log(action?.data.user.user);
    //   console.log(action?.data.user.user.displayName);
    //   console.log(action?.data.user.user.email);
    //   console.log(action?.data.user.user.photoURL);
    //   console.log(action?.data.user.user.accessToken);

      localStorage.setItem("profile", JSON.stringify({ ...action?.data.user.user }));
      return {...state, authData: action?.data.user.user };
    case LOGOUT:
        localStorage.clear(); 
        return {...state, authData: null }; 
    default:
      return state;
  }
};

export default authReducer;