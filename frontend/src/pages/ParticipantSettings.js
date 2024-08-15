import React, { useState } from 'react';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [theme, setTheme] = useState('light');
  const [privacy, setPrivacy] = useState('public');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value);
  };

  const handleSaveSettings = () => {
    // Save settings to the backend or local storage
    console.log('Settings saved:', { profile, notifications, theme, privacy });
  };

  return (
    <div className="page-content">
      <h1>Settings</h1>
      <div className="settings-section">
        <h2>Profile Settings</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
            />
          </label>
        </form>
      </div>

      <div className="settings-section">
        <h2>Notification Settings</h2>
        <form>
          <label>
            Email Notifications:
            <input
              type="checkbox"
              name="emailNotifications"
              checked={notifications.emailNotifications}
              onChange={handleNotificationsChange}
            />
          </label>
          <label>
            SMS Notifications:
            <input
              type="checkbox"
              name="smsNotifications"
              checked={notifications.smsNotifications}
              onChange={handleNotificationsChange}
            />
          </label>
        </form>
      </div>

      <div className="settings-section">
        <h2>Theme Settings</h2>
        <label>
          Theme:
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <div className="settings-section">
        <h2>Privacy Settings</h2>
        <label>
          Privacy:
          <select value={privacy} onChange={handlePrivacyChange}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>
      </div>

      <button className="save-settings-btn" onClick={handleSaveSettings}>
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
