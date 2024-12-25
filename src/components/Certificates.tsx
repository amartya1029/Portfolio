import React, { useState } from 'react';
import { Award, Plus } from 'lucide-react';
import AddItemModal from './AddItemModal';

const Certificates = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificates, setCertificates] = useState([
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1496469888073-80de7e952517',
      link: 'https://example.com'
    },
    {
      title: 'Machine Learning Engineering',
      issuer: 'Stanford Online',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      link: 'https://example.com'
    }
  ]);

  const handleAddCertificate = (data: any) => {
    setCertificates([...certificates, data]);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Certificates
            </span>
          </h2>
          <div className="space-x-4">
            <button
              onClick={() => setShowCertificates(!showCertificates)}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showCertificates ? 'Hide Certificates' : 'Show Certificates'}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Plus size={24} />
            </button>
          </div>
        </div>

        {showCertificates && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <Award className="text-purple-400 mb-2" size={24} />
                    <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCertificate}
        type="certificate"
      />
    </section>
  );
};

export default Certificates;