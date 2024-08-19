import React from 'react';
import Header from '../components/Header';
import '../styles/SignUp.css'; // Assuming the CSS file is named SignUp.css

const SignUp = () => {
  return (
    <div className="SignUp-content">
      <Header />
      <h1>Register Page</h1>
      <form>
        {/* Replace with actual form fields and handling */}
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;