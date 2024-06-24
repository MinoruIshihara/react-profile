import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Minoru Ishihara</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
