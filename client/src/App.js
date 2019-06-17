import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar"
import './App.css';

function App() {
  return (
    <Router>
    <Navbar/>
    <Header/>
    </Router>
  );
}

export default App;
