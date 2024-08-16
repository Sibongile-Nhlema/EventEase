import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [timeZone, setTimeZone] = useState('UTC');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleTimeZoneChange = (e) => {
    setTimeZone(e.target.value);
  };

  const handleSaveSettings = () => {
    // Save settings to the backend or local storage
    console.log('Settings saved:', { profile, theme, language, timeZone });
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-content">
        <div className="settings-section profile-section">
          <h2>Profile</h2>
          <form className="settings-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                name="password"
                value={profile.password}
                onChange={handleProfileChange}
                placeholder="Enter a new password"
              />
            </div>
          </form>
        </div>

        <div className="settings-section display-section">
          <h2>Display</h2>
          <form className="settings-form">
            <div className="form-group">
              <label htmlFor="theme">Theme:</label>
              <select
                id="theme"
                value={theme}
                onChange={handleThemeChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="language">Language:</label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timeZone">Time Zone:</label>
              <select
                id="timeZone"
                value={timeZone}
                onChange={handleTimeZoneChange}
              >
                <option value="UTC">UTC</option>
                <option value="GMT">GMT</option>
                <option value="CST">CST</option>
                <option value="EST">EST</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <button className="save-settings-btn" onClick={handleSaveSettings}>
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
