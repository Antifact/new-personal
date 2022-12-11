import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <div className='content-wrapper'>
            <Routes>
              <Route 
              path='/'
              element= { <Home /> } />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
