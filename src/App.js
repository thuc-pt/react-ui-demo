import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Footer />
      <Route path='/login' exact component={Login} />
      <Route path='/password' exact component={ForgotPassword} />
    </Router>
  );
}

export default App;
