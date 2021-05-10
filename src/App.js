import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { colors } from './util/styles';

export default function App() {
  return (
    <Router>
      <div className={`flex flex-col h-auto font-sans ${colors.content}`} id="page-wrapper">
        <Navbar styles={colors.nav} />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Footer styles={colors.footer} />
      </div>
    </Router>
  );
}
