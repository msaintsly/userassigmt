import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="https://cdn.dribbble.com/userupload/17938001/file/original-19ddf530a7c9fb7012b6f1e5b0c9625a.jpg?resize=752x&vertical=center" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">Users List App</h1>
        </div>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-200">Home</a></li>
          <li><a href="#login" className="hover:text-blue-200">Login</a></li>
          <li><a href="#register" className="hover:text-blue-200">Register</a></li>
          <li><a href="#portfolio" className="hover:text-blue-200">Portfolio</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;