import React from 'react';
import "../src/css/index.css"
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
