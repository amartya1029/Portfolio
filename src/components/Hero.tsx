import React from 'react';
import { ChevronDown, Brain, Cpu, Glasses } from 'lucide-react';

const Hero = () => {
  const skills = [
    { icon: Brain, name: 'Machine Learning', description: 'Deep Neural Networks, Supervised Learning, NLP' },
    { icon: Cpu, name: 'Deep Learning', description: 'CNN, RNN, Transformers, Computer Vision' },
    { icon: Glasses, name: 'Augmented Reality', description: 'AR Development, 3D Modeling, Spatial Computing' }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Hello, I'm
          </span>
          <div className="mt-2 text-white neon-text">Amartya Nayan</div>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          AI/ML Engineer | Deep Learning Specialist | AR Developer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {skills.map((Skill, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <div className="flex justify-center mb-4">
                <Skill.icon size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{Skill.name}</h3>
              <p className="text-gray-400 text-sm">{Skill.description}</p>
            </div>
          ))}
        </div>

        <a href="#projects" className="inline-block animate-bounce mt-8 text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;