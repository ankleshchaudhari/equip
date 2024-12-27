import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Clear any local storage or tokens here if needed
    localStorage.removeItem('token');
    onLogout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
