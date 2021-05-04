import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Content from './components/Content';
import Navbar from './components/Navbar';
import { colors } from './util/styles';

export default function App() {
  return (
    <Router>
      <div className={`flex flex-col h-screen font-sans ${colors.content}`} id="page-wrapper">
        <Navbar styles={colors.nav} />
        <Route path="/" component={Content} />
        <Footer styles={colors.footer}/>
      </div>
    </Router>
  );
}
