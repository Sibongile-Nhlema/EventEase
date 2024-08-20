import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/SignupLogin.css';

const SignupLogin = () => {
  const { role } = useParams();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(`http://your-api-url/${role}/${isSignUp ? 'signup' : 'login'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to authenticate');
      }

      // On successful response, handle authentication (e.g., save token)
      const data = await response.json();
      localStorage.setItem('userToken', data.token); // Save JWT token to localStorage
      navigate(`/dashboard/${role}`); // Redirect to the appropriate dashboard
    } catch (error) {
      alert(error.message);
    }
  };

  return (
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
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
        </button>
      </section>
    </div>
  );
};

export default SignupLogin;
