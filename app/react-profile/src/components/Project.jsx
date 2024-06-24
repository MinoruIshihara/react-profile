import React from 'react';

function Project({ project }) {
  return (
    <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>
    </div>
  );
}

export default Project;
