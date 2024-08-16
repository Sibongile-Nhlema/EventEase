import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SignupLogin = () => {
  const { role } = useParams();
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/dashboard/${role}`);
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
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" required />
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

