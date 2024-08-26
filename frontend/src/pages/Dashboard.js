import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <main className="dashboard-main">
          {/* MongoDB Embedded Dashboard */}
          <iframe
            style={{
              background: '#F1F5F4',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
              width: '100vw',
              height: '100vh',
            }}
            src="https://charts.mongodb.com/charts-bugtrackerdata-opggjra/embed/dashboards?id=66cceb17-08dc-4e86-8835-6f2d6e6a844d&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
            title="MongoDB Embedded Dashboard"
          ></iframe>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
