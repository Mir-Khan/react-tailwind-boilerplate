import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Content from './components/Content';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen font-sans" id="page-wrapper">
        <Navbar />
        <Route path="/" component={Content} />
        <Footer />
      </div>
    </Router>
  );
}
