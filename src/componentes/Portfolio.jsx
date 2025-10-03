import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';

const projects = [
  {
    title: 'C Designs',
    description:
      'Ecommerce de productos personalizados. Desarrollo UX/UI completo: identidad visual, prototipos en Figma, implementación con React. Integración de formularios, carruseles y diseño responsivo.',
    tech: ['Figma', 'React', 'HTML/CSS', 'JavaScript'],
    link: '', // opcional: demo
    repo: '', // opcional: GitHub
  },
  {
    title: 'Chiche Retro Shop',
    description:
      'Tienda ficticia con estética noventosa tipo teletienda. Proyecto educativo en React. UI retro, layout animado, slide automático e interfaz visual coherente con branding ficticio.',
    tech: ['React', 'CSS Modules', 'Tailwind'],
    link: '',
    repo: '',
  },
  {
    title: 'Estampas DTF',
    description:
      'Diseño de estampas originales para impresión directa (DTF) aplicadas a remeras, tote bags y otros productos. Incluye generación de mockups para presentación comercial.',
    tech: ['Illustrator', 'Photoshop'],
    link: '',
    repo: '',
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 scroll-mt-16"
      style={{
        backgroundColor: 'var(--color-night)',
        color: 'var(--custom-gray)',
      }}
    >
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2
          className="text-4xl font-extrabold mb-12 flex items-center gap-3 border-b-2 pb-2"
          style={{
            borderColor: 'var(--secondary-color)',
            color: 'var(--secondary-color)',
          }}
        >
          <FaFolderOpen className="text-3xl" />
          Proyectos
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] border border-[#2a2f3f] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-custom-gray">{project.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-secondary">
                {project.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-[#2a2f3f] px-2 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Opcional: enlaces */}
              {(project.link || project.repo) && (
                <div className="mt-4 text-sm flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary underline hover:text-white"
                    >
                      Ver demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary underline hover:text-white"
                    >
                      Ver repositorio
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
