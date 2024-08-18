// src/pages/notifications/mockData.js
export const registrationsData = [
  { id: 1, event: 'Annual Conference', participant: 'John Doe', status: 'Pending', registrationDate: '2024-08-15' },
  { id: 2, event: 'Tech Meetup', participant: 'Jane Smith', status: 'Pending', registrationDate: '2024-08-16' },
  // Add more mock data as needed
];

export const remindersData = [
  { id: 1, event: 'Annual Conference', emailSent: true, sentDate: '2024-08-15', issue: null },
  { id: 2, event: 'Tech Meetup', emailSent: false, sentDate: null, issue: 'Email server down' },
  // Add more mock data as needed
];

export const complaintsData = [
  { id: 1, event: 'Annual Conference', participant: 'John Doe', complaint: 'Venue was too small', date: '2024-08-15', company: 'Company A' },
  { id: 2, event: 'Tech Meetup', participant: 'Jane Smith', complaint: 'Technical issues', date: '2024-08-16', company: 'Company B' },
  // Add more mock data as needed
];

export const attendanceData = [
  { id: 1, event: 'Annual Conference', participant: 'John Doe', attendedDate: '2024-08-15' },
  { id: 2, event: 'Tech Meetup', participant: 'Jane Smith', attendedDate: '2024-08-16' },
  // Add more mock data as needed
];

export const updatesData = [
  { id: 1, event: 'Annual Conference', updatedBy: 'Admin', updateDate: '2024-08-15', changes: 'Updated venue details' },
  { id: 2, event: 'Tech Meetup', updatedBy: 'Admin', updateDate: '2024-08-16', changes: 'Changed start time' },
  // Add more mock data as needed
];

export const cancellationsData = [
  { id: 1, event: 'Annual Conference', cancelledBy: 'Admin', cancelDate: '2024-08-15', participantsCancelled: 5 },
  { id: 2, event: 'Tech Meetup', cancelledBy: 'Admin', cancelDate: '2024-08-16', participantsCancelled: 2 },
  // Add more mock data as needed
];
