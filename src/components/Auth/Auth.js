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
import { signInWithGoogle } from "./Firebase";
import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const classes = useStyles();

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = (credentialResponse) => {
    // const res = await fetch('/api/google-login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    console.log(credentialResponse);

    // const data = credentialResponse;
    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful");
  };

  // const [loginData, setLoginData] = useState(
  //   localStorage.getItem('loginData')
  //     ? JSON.parse(localStorage.getItem('loginData'))
  //     : null
  // );

  const handleFailure = (result) => {
    console.log(result);
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
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
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <Button
                className={classes.buttonSubmit}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
          {/* <GoogleLogin
              clientId="1050403164416-ki8svm29la83si7f00nccjb9jdtv4f1q.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin> */}

          {/* <Button
                className={classes.buttonSubmit}
                color="primary"
                fullWidth
                onClick={() => googleSuccess()}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button> */}
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <h3>{localStorage.getItem("name")}</h3>
          <h3>{localStorage.getItem("email")}</h3>
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
