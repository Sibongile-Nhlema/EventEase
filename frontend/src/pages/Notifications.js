
import React, { useState } from 'react';
import '../styles/Notifications.css';
import {
  registrationsData,
  remindersData,
  complaintsData,
  attendanceData,
  updatesData,
  cancellationsData
} from './mockData';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('Registrations');
  const [selectedRegistrations, setSelectedRegistrations] = useState([]);

  const handleSelectRegistration = (id) => {
    setSelectedRegistrations(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleBulkApprove = () => {
    console.log('Approved registrations:', selectedRegistrations);
  };

  const handleBulkDecline = () => {
    console.log('Declined registrations:', selectedRegistrations);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Registrations':
        return (
          <div>
            <h2>Registrations</h2>
            <button onClick={handleBulkApprove} disabled={selectedRegistrations.length === 0}>Approve Selected</button>
            <button onClick={handleBulkDecline} disabled={selectedRegistrations.length === 0}>Decline Selected</button>
            <table>
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Event</th>
                  <th>Participant</th>
                  <th>Status</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {registrationsData.map(registration => (
                  <tr key={registration.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRegistrations.includes(registration.id)}
                        onChange={() => handleSelectRegistration(registration.id)}
                      />
                    </td>
                    <td>{registration.event}</td>
                    <td>{registration.participant}</td>
                    <td>{registration.status}</td>
                    <td>{registration.registrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'reminders':
        return (
          <div>
            <h2>Reminders</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Email Sent</th>
                  <th>Sent Date</th>
                  <th>Issue</th>
                </tr>
              </thead>
              <tbody>
                {remindersData.map(reminder => (
                  <tr key={reminder.id}>
                    <td>{reminder.event}</td>
                    <td>{reminder.emailSent ? 'Yes' : 'No'}</td>
                    <td>{reminder.sentDate || 'N/A'}</td>
                    <td>{reminder.issue || 'None'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'complaints':
        return (
          <div>
            <h2>Complaints</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Participant</th>
                  <th>Complaint</th>
                  <th>Date</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {complaintsData.map(complaint => (
                  <tr key={complaint.id}>
                    <td>{complaint.event}</td>
                    <td>{complaint.participant}</td>
                    <td>{complaint.complaint}</td>
                    <td>{complaint.date}</td>
                    <td>{complaint.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'attendance':
        return (
          <div>
            <h2>Attendance</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Participant</th>
                  <th>Attended Date</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map(attendance => (
                  <tr key={attendance.id}>
                    <td>{attendance.event}</td>
                    <td>{attendance.participant}</td>
                    <td>{attendance.attendedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'updates':
        return (
          <div>
            <h2>Updates</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Updated By</th>
                  <th>Update Date</th>
                  <th>Changes</th>
                </tr>
              </thead>
              <tbody>
                {updatesData.map(update => (
                  <tr key={update.id}>
                    <td>{update.event}</td>
                    <td>{update.updatedBy}</td>
                    <td>{update.updateDate}</td>
                    <td>{update.changes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'cancellations':
        return (
          <div>
            <h2>Cancellations</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Cancelled By</th>
                  <th>Cancel Date</th>
                  <th>Participants Cancelled</th>
                </tr>
              </thead>
              <tbody>
                {cancellationsData.map(cancellation => (
                  <tr key={cancellation.id}>
                    <td>{cancellation.event}</td>
                    <td>{cancellation.cancelledBy}</td>
                    <td>{cancellation.cancelDate}</td>
                    <td>{cancellation.participantsCancelled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-content">
      <h1>Notifications</h1>

      <div className="tabs">
        <button className={activeTab === 'Registrations' ? 'active' : ''} onClick={() => setActiveTab('Registrations')}>Registrations</button>
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
