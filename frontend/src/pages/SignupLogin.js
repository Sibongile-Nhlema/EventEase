import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/SignupLogin.css';
import Header from '../components/Header';

const SignupLogin = () => {
  const { role } = useParams();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Additional state for participant fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const body = {
      email,
      password,
      ...(role === 'participant' && isSignUp && {
        name,
        phone,
        location,
        occupation,
        company,
      }),
    };

    const url = `http://localhost:5000/api/signup-login/${role}${isSignUp ? '' : '/login'}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to authenticate');
      }

      const data = await response.json();

      if (isSignUp) {
        alert('Registration successful! Redirecting to your dashboard...');
      } else {
        localStorage.setItem('userToken', data.token); // Save JWT token to localStorage
      }

      // Redirect based on role
      if (role === 'organizer') {
        navigate('/admin/dashboard');
      } else if (role === 'participant') {
        navigate('/participant/dashboard');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="signup-login-page">
        <header className="signup-login-header">
          <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
          <p>{role === 'organizer' ? 'Organizer' : 'Participant'} Registration or Login</p>
        </header>
        <section className="form-section">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            {role === 'participant' && isSignUp && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          </form>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </section>
      </div>
    </div>
  );
};

export default SignupLogin;
