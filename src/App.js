import React from 'react';
import "../src/css/index.css"
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;