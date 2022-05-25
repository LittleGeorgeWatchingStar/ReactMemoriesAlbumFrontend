import React from 'react';
import { Container } from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NarBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {

  return (
    //<GoogleOAuthProvider clientId="1050403164416-ki8svm29la83si7f00nccjb9jdtv4f1q.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxWidth="lg">
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/auth' exact element={<Auth/>} />
          </Routes>
          {/* <Home /> */}
        </Container>
      </BrowserRouter>
    //</GoogleOAuthProvider>
  );
};

export default App;
