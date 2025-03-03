import React from 'react';
import RandomVerse from './components/RandomVerse';
import SpecificVerse from './components/SpecificVerse';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Bible Verse App</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
};

export default App;
