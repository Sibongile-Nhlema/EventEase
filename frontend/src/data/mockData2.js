// src/mockData.js

export const mockData = {
    events: [
      { month: 'January', count: 12 },
      { month: 'February', count: 19 },
      { month: 'March', count: 3 },
      { month: 'April', count: 5 },
      { month: 'May', count: 2 },
      { month: 'June', count: 3 },
      { month: 'July', count: 7 },
    ],
    signups: [
      { category: 'New Sign-Ups', count: 200 },
      { category: 'Registrations', count: 150 },
    ],
    reminders: [
      { type: 'Email Reminders', count: 120 },
      { type: 'SMS Reminders', count: 80 },
    ],
    attendance: [
      { event: 'Event A', attendees: 80 },
      { event: 'Event B', attendees: 60 },
      { event: 'Event C', attendees: 40 },
    ],
    financial: {
      revenue: [500, 600, 700, 800, 900, 1000, 1100],
      expenses: [300, 400, 350, 450, 500, 600, 650],
    },
    feedback: [
      { rating: 5, count: 50 },
      { rating: 4, count: 30 },
      { rating: 3, count: 15 },
      { rating: 2, count: 5 },
      { rating: 1, count: 0 },
    ],
    locations: {
      countries: [
        { country: 'Kenya', count: 15 },
        { country: 'Malawi', count: 10 },
        { country: 'South Africa', count: 20 },
      ],
    },
    companies: {
      companies: [
        { company: 'New Horizons', participants: 50 },
        { company: 'Tiger Brands', participants: 80 },
        { company: 'Unilever', participants: 100 },
      ],
    },
  };
  