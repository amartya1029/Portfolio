import React, { useState } from 'react';
import { ExternalLink, Github, Plus } from 'lucide-react';
import AddItemModal from './AddItemModal';

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      title: 'AI Image Recognition',
      description: 'Deep learning model for real-time object detection using CNN',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com',
      link: 'https://example.com'
    },
    {
      title: 'AR Navigation App',
      description: 'Augmented reality indoor navigation system',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      technologies: ['Unity', 'ARKit', 'C#'],
      github: 'https://github.com',
      link: 'https://example.com'
    }
  ]);

  const handleAddProject = (data: any) => {
    setProjects([...projects, { ...data, github: 'https://github.com' }]);
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Projects
            </span>
          </h2>
          <div className="space-x-4">
            <button
              onClick={() => setShowProjects(!showProjects)}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showProjects ? 'Hide Projects' : 'Show Projects'}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Plus size={24} />
            </button>
          </div>
        </div>
        
        {showProjects && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddProject}
        type="project"
      />
    </section>
  );
};

export default Projects;