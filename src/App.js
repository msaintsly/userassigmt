import React from 'react';
import './output.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <UserCard />
    </div>
  );
}

export default App;