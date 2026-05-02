import React from 'react';
import AdminNavbar from './AdminNavbar';  

function AdminPortal() {
  return (
    <div>
      <AdminNavbar /> 
      <div className="admin-content">
        <h1>Welcome to the Admin Portal</h1>
        <p>Manage users, settings, and more here.</p>
      </div>
    </div>
  );
}

export default AdminPortal;
