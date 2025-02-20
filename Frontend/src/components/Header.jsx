import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-2xl font-bold">Order Management</Link>
        <Link to="/admin" className="text-white">Admin Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;