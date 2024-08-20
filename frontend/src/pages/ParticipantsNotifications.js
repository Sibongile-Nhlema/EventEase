import React, { useState, useEffect } from 'react';
import '../styles/participant-notifications.css';
import {
  registrationsData,
  complaintsData,
  attendanceData,
  updatesData,
  cancellationsData
} from '../data/mockData1';

const ParticipantsNotifications = () => {
  const [activeTab, setActiveTab] = useState('Registrations');
  const [data, setData] = useState({
    registrations: [],
    complaints: [],
    attendance: [],
    updates: [],
    cancellations: []
  });
  const [newComplaint, setNewComplaint] = useState({
    event: '',
    complaint: '',
    date: ''
  });

  useEffect(() => {
    // Simulate fetching data
    setData({
      registrations: registrationsData,
      complaints: complaintsData,
      attendance: attendanceData,
      updates: updatesData,
      cancellations: cancellationsData
    });
  }, []);

  const handleComplaintChange = (e) => {
    const { name, value } = e.target;
    setNewComplaint(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComplaint = (e) => {
    e.preventDefault();
    // Add new complaint to the mock data (for demo purposes)
    const newComplaintEntry = { id: data.complaints.length + 1, ...newComplaint };
    setData(prev => ({
      ...prev,
      complaints: [...prev.complaints, newComplaintEntry]
    }));
    // Clear form
    setNewComplaint({ event: '', complaint: '', date: '' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Registrations':
        return (
          <div>
            <h2>Registrations</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Status</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {data.registrations.map(registration => (
                  <tr key={registration.id}>
                    <td>{registration.event}</td>
                    <td>{registration.status}</td>
                    <td>{registration.registrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Complaints':
        return (
          <div>
            <h2>Complaints</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Complaint</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.complaints.map(complaint => (
                  <tr key={complaint.id}>
                    <td>{complaint.event}</td>
                    <td>{complaint.complaint}</td>
                    <td>{complaint.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2>Submit a Complaint</h2>
            <form onSubmit={handleSubmitComplaint}>
              <div>
                <label htmlFor="event">Event</label>
                <input
                  type="text"
                  id="event"
                  name="event"
                  value={newComplaint.event}
                  onChange={handleComplaintChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="complaint">Complaint</label>
                <textarea
                  id="complaint"
                  name="complaint"
                  value={newComplaint.complaint}
                  onChange={handleComplaintChange}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newComplaint.date}
                  onChange={handleComplaintChange}
                  required
                />
              </div>
              <button type="submit">Submit Complaint</button>
            </form>
          </div>
        );
      case 'Attendance':
        return (
          <div>
            <h2>Attendance</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Attended Date</th>
                </tr>
              </thead>
              <tbody>
                {data.attendance.map(attendance => (
                  <tr key={attendance.id}>
                    <td>{attendance.event}</td>
                    <td>{attendance.attendedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Updates':
        return (
          <div>
            <h2>Updates</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Update Date</th>
                  <th>Changes</th>
                </tr>
              </thead>
              <tbody>
                {data.updates.map(update => (
                  <tr key={update.id}>
                    <td>{update.event}</td>
                    <td>{update.updateDate}</td>
                    <td>{update.changes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Cancellations':
        return (
          <div>
            <h2>Cancellations</h2>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Cancel Date</th>
                </tr>
              </thead>
              <tbody>
                {data.cancellations.map(cancellation => (
                  <tr key={cancellation.id}>
                    <td>{cancellation.event}</td>
                    <td>{cancellation.cancelDate}</td>
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
      <div className="tabs">
        <button className={activeTab === 'Registrations' ? 'active' : ''} onClick={() => setActiveTab('Registrations')}>Registrations</button>
        <button className={activeTab === 'Complaints' ? 'active' : ''} onClick={() => setActiveTab('Complaints')}>Complaints</button>
        <button className={activeTab === 'Attendance' ? 'active' : ''} onClick={() => setActiveTab('Attendance')}>Attendance</button>
        <button className={activeTab === 'Updates' ? 'active' : ''} onClick={() => setActiveTab('Updates')}>Updates</button>
        <button className={activeTab === 'Cancellations' ? 'active' : ''} onClick={() => setActiveTab('Cancellations')}>Cancellations</button>
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default ParticipantsNotifications;
