import React, { useEffect, useState } from 'react';

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    // Fetch participants from the backend API
    fetch('/api/participants')
      .then(response => response.json())
      .then(data => setParticipants(data))
      .catch(error => console.error('Error fetching participants:', error));
  }, []);

  return (
    <div className="dashboard-content">
      <h1>Participants</h1>
      
      <table className="participants-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Location</th>
            <th>Occupation</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {participants.length > 0 ? (
            participants.map(participant => (
              <tr key={participant.id}>
                <td>{participant.name}</td>
                <td>{participant.email}</td>
                <td>{participant.phone}</td>
                <td>{participant.location}</td>
                <td>{participant.occupation}</td>
                <td>{participant.company}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No participants found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Participants;
