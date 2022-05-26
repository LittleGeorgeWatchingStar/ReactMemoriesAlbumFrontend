import React, { useState } from "react";
import {
  Avatar,
  Container,
  Paper,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
//import GoogleLogin from 'react-google-login';
//import { GoogleLogin } from '@react-oauth/google';
//import { signInWithGoogle } from "./Firebase";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useStyles from "./styles";
import Input from "./Input";
//import Icon from "./icon";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from '../../actions/auth';

const initialState = { "firstName": "", "lastName": "", "email": "", "password": "", "confirmPassword": ""};

const Auth = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBq6G-u7Oq4tfbkl3fwp6zSSPsmKtARQeA",
    authDomain: "newmemories.firebaseapp.com",
    projectId: "newmemories",
    storageBucket: "newmemories.appspot.com",
    messagingSenderId: "1050403164416",
    appId: "1:1050403164416:web:bee8ef793b075ae97ae3e5",
    measurementId: "G-PBD1L0JDF4",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value});
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const handleLogin = async () => {
    let user = await signInWithPopup(auth, provider);

    console.log(user);

    try {
      dispatch({type: 'AUTHBYGOOGLE', data:{user} });
      navigate('/');
    } catch(error) {
       console.log(error);
    };
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.center}>
          <LockOutlinedIcon> </LockOutlinedIcon>
        </Avatar>
        <Typography className={classes.avatar} variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
              />
            )}
          </Grid>
          <Button
            className={classes.buttonSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          
          <Button
            className={classes.buttonSubmit}
            fullWidth
            variant="contained"
            onClick={handleLogin}
          >
            Sign in with Google
          </Button>
          {/* <h3>{localStorage.getItem("name")}</h3>
          <h3>{localStorage.getItem("email")}</h3> */}
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
