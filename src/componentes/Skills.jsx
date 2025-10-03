import React, { useState } from 'react';
import { FaFigma, FaReact, FaHtml5, FaJs, FaIndustry, FaBrain } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { TbUxCircle, TbLayoutBoardSplit } from 'react-icons/tb';
import { GiAbstract019 } from 'react-icons/gi';

const skillsData = [
  { name: "Figma", icon: <FaFigma />, detail: "Prototipado interactivo y diseño UI eficiente." },
  { name: "Illustrator", icon: <SiAdobeillustrator />, detail: "Diseño vectorial y composición gráfica." },
  { name: "Photoshop", icon: <SiAdobephotoshop />, detail: "Edición avanzada de imágenes y mockups." },
  { name: "HTML/CSS", icon: <FaHtml5 />, detail: "Maquetado responsivo con buenas prácticas." },
  { name: "JavaScript", icon: <FaJs />, detail: "Interactividad, lógica y dinamismo web." },
  { name: "React", icon: <FaReact />, detail: "Interfaces modernas, componentes y hooks." },
  { name: "UX Research", icon: <TbUxCircle />, detail: "Investigación de usuarios, entrevistas y análisis." },
  { name: "Wireframing", icon: <TbLayoutBoardSplit />, detail: "Estructuras de navegación e interacción." },
  { name: "Diseño de estampas", icon: <GiAbstract019 />, detail: "Diseño aplicado a productos textiles." },
  { name: "Control de calidad industrial", icon: <FaIndustry />, detail: "Supervisión técnica en procesos de producción." },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 scroll-mt-16"
      style={{
        backgroundColor: 'var(--color-night)',
        color: 'var(--custom-gray)',
      }}
    >
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2
          className="text-4xl font-extrabold mb-10 flex items-center gap-3 border-b-2 pb-3"
          style={{
            borderColor: 'var(--secondary-color)',
            color: 'var(--secondary-color)',
          }}
        >
          <FaBrain className="text-4xl" /> Habilidades
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <button
              key={index}
              onClick={() => handleToggle(index)}
              className="relative rounded-xl h-36 p-4 border border-[#2a2f3f] bg-[#1a1f2e] shadow-md hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              aria-expanded={activeIndex === index}
              aria-label={`Más sobre ${skill.name}`}
            >
              {/* Front View (icon + title) */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300
                ${activeIndex === index ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-0'}`}
              >
                <div className="mb-2 text-2xl text-secondary">{skill.icon}</div>
                <div className="text-base font-semibold">{skill.name}</div>
              </div>

              {/* Back View (detail) */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-sm text-center px-4 leading-snug transition-opacity duration-300
                ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                style={{ color: 'var(--secondary-color)' }}
              >
                {skill.detail}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
