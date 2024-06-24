import React from 'react';
import Project from './Project';

function Projects() {
  const projects = [
    // ここに制作物の情報を配列で記述
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
