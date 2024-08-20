import React from 'react';
import './styles/app.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import GetStarted from './pages/GetStarted';
import AdminPanel from './pages/AdminPanel';
import ParticipantPanel from './pages/ParticipantPanel';
import SignupLogin from './pages/SignupLogin'; // Import the SignupLogin component
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
          <Route path="/signup-login/:role" element={<SignupLogin />} /> {/* Updated route for SignupLogin */}
          
          {/* Admin Panel Routes */}
          <Route path="/admin/*" element={<AdminPanel />} />
          
          {/* Participant Panel Routes */}
          <Route path="/participant/*" element={<ParticipantPanel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
