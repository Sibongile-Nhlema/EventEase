import React from 'react';
import './styles/app.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import GetStarted from './pages/GetStarted';
import AdminPanel from './pages/AdminPanel';
import ParticipantPanel from './pages/ParticipantPanel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/participant/*" element={<ParticipantPanel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
