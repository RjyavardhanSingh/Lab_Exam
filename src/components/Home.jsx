import React from 'react';
import { Link } from 'react-router-dom';

function Home({ onLogout }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">MyApp</div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:underline">Home</Link></li>
            <li><Link to="/profile" className="text-white hover:underline">Profile</Link></li>
            <li><button onClick={onLogout} className="text-white hover:underline">Logout</button></li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Home Page</h2>
        <p className="text-lg">This is a protected page accessible after login.</p>
      </div>
    </div>
  );
}

export default Home;