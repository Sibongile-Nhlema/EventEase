import React, { useState } from 'react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('events');

  const renderContent = () => {
    switch (activeTab) {
      case 'events':
        return <div>Manage event notifications here.</div>;
      case 'reminders':
        return <div>Manage reminders here.</div>;
      case 'complaints':
        return <div>Manage complaints here.</div>;
      case 'attendance':
        return <div>View who has attended here.</div>;
      case 'updates':
        return <div>Manage updates here.</div>;
      case 'cancellations':
        return <div>Manage cancellations here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-content">
      <h1>Notifications</h1>

      <div className="tabs">
        <button className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>Events</button>
        <button className={activeTab === 'reminders' ? 'active' : ''} onClick={() => setActiveTab('reminders')}>Reminders</button>
        <button className={activeTab === 'complaints' ? 'active' : ''} onClick={() => setActiveTab('complaints')}>Complaints</button>
        <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>Attendance</button>
        <button className={activeTab === 'updates' ? 'active' : ''} onClick={() => setActiveTab('updates')}>Updates</button>
        <button className={activeTab === 'cancellations' ? 'active' : ''} onClick={() => setActiveTab('cancellations')}>Cancellations</button>
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Notifications;
