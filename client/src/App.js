import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Detail/Detail';
import FormPage from './components/FormPage/FormPage';

function App() {

  return (
    <div className="App">
      <Route exact path="/home"  render={() => <Home />} />
      <Route exact path="/" render={() => <LandingPage />} />
      <Route path="/home/:id" render={() => <Detail />} />
      <Route path="/about" render={() => <About />}/>
      <Route path="/form" render={() => <FormPage />} />
    </div>
  );
}

export default App;
