import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/rules">Rules</a></li>
        <li><a href="/create">Create Rule</a></li>
        <li><a href="/edit">Edit Rule</a></li>
        <li><a href="/report">Generate Report</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;