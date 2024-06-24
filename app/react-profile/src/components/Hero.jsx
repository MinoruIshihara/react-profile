import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Minoru Ishihara</h1>
        <p className="text-lg mb-8">エンジニア / 学生</p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          制作物
        </a>
      </div>
    </section>
  );
}

export default Hero;
