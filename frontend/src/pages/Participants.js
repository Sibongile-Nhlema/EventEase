import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [displayedParticipants, setDisplayedParticipants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch participants from the backend API.
    fetch('/api/participants')
      .then(response => response.json())
      .then(data => {
        setParticipants(data);
        setDisplayedParticipants(data.slice(0, itemsPerPage));
      })
      .catch(error => console.error('Error fetching participants:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterParticipants(e.target.value);
  };

  const filterParticipants = (term) => {
    const filtered = participants.filter(participant => {
      const name = participant.name ? participant.name.toLowerCase() : '';
      const email = participant.email ? participant.email.toLowerCase() : '';
      const phone = participant.phone ? participant.phone.toLowerCase() : '';
      const location = participant.location ? participant.location.toLowerCase() : '';
      const occupation = participant.occupation ? participant.occupation.toLowerCase() : '';
      const company = participant.company ? participant.company.toLowerCase() : '';

      return (
        name.includes(term.toLowerCase()) ||
        email.includes(term.toLowerCase()) ||
        phone.includes(term.toLowerCase()) ||
        location.includes(term.toLowerCase()) ||
        occupation.includes(term.toLowerCase()) ||
        company.includes(term.toLowerCase())
      );
    });
    setDisplayedParticipants(filtered.slice(0, itemsPerPage));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedParticipants(participants.slice(startIndex, endIndex));
  };

  const totalPages = Math.ceil(participants.length / itemsPerPage);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Participants</h1>
      
      <div className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, email, phone number, location, occupation, or company"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="input-group-append">
            <span className="input-group-text"><i className="bi bi-search"></i></span>
          </div>
        </div>
      </div>
      
      <table className="table table-striped">
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
          {displayedParticipants.length > 0 ? (
            displayedParticipants.map(participant => (
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
              <td colSpan="6" className="text-center">No participants found.</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page - 1)}>Previous</button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">Page {page} of {totalPages}</span>
          </li>
          <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Participants;
