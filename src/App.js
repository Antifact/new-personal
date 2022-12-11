import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <div className='content-wrapper'>
            <Routes>

              <Route path='/' element= { <Home /> } />

              <Route path='/about' element= { <About /> } />

            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
