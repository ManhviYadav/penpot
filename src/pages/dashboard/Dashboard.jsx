import React from 'react';
import Sidebar from '../../layouts/Sidebar';
import ProgressCircle from '../../components/ui/ProgressCircle';
import './Dashboard.css';

const NotificationsPanel = () => {
  const notifications = [
    { id: 1, title: 'New Booking', message: 't', time: '2s ago' },
    { id: 2, title: 'Reminder', message: 'Pet checkup scheduled for tomorrow', time: '5m ago' },
    { id: 3, title: 'Update', message: 'System maintenance scheduled', time: '1h ago' }
  ];

  return (
    <div className="notifications-panel">
      
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      {/* Left Sidebar with padding */}
      <div className="dashboard-sidebar">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="dashboard-main">
        {/* Header with skeleton */}
        <div className="dashboard-header skeleton-section">
          <h1>A dashboard to hear<br />what pets don't say</h1>
        </div>

        {/* Cards Container */}
        <div className="cards-container">
          {/* Progress Card */}
          <div className="progress-card">
            <div className="text-group skeleton-section">
              <h3>Petcare Partner</h3>
              <h4>Onboarding</h4>
            </div>
            <div className="circle-area">
              <ProgressCircle percentage={80} />
              <p>Completed</p>
            </div>
          </div>

          {/* Empty Card Skeleton */}
          <div className="empty-card skeleton-section"></div>
        </div>
      </div>

      {/* Right Side Area */}
      <div className="dashboard-right">
        {/* Status skeleton */}
        <div className="status-section skeleton-section">
          <div className="status-content">
            <span className="status-dot"></span>
            <span className="status-text">Updated 2s ago</span>
          </div>
        </div>

        {/* Notifications skeleton */}
        <div className="notifications-section skeleton-section">
          <div className="notifications-header">
            <span>Notifications</span>
            <span className="notification-indicator"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 