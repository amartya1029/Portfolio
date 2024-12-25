import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
              Portfolio
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
            <a href="#projects" className="text-white hover:text-purple-400 transition-colors">Projects</a>
            <a href="#certificates" className="text-white hover:text-purple-400 transition-colors">Certificates</a>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-white hover:text-purple-400">
              <Mail size={24} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-white hover:text-purple-400">Home</a>
            <a href="#projects" className="block text-white hover:text-purple-400">Projects</a>
            <a href="#certificates" className="block text-white hover:text-purple-400">Certificates</a>
            <a href="#contact" className="block text-white hover:text-purple-400">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;