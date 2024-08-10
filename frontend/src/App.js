import React from 'react';
import './styles/app.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

