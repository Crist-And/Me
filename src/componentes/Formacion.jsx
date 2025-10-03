import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    category: "Educación Formal",
    items: [
      {
        title: "UTN – Universidad Tecnológica Nacional",
        description: "Tecnicatura Universitaria en Sistemas",
      },
      {
        title: "EET N°2 – Almirante Brown",
        description: "Bachiller Técnico en Informática",
      },
    ],
  },
  {
    category: "Diseño UX/UI & Prototipado",
    items: [
      {
        title: "Codo a Codo 4.0",
        description: "Diseño UX/UI + Habilidades Blandas (198 hs)",
      },
      {
        title: "Globant – Ecosistema Tech",
        description: "UX/UI + IA: Cómo convertirte en un diseñador todo terreno",
      },
      {
        title: "Globant – Ecosistema Tech",
        description: "Design Systems UX/UI: Evolución en diseño digital",
      },
      {
        title: "Desafío Latam",
        description: "UX/UI en la era remota · Talleres intensivos",
      },
      {
        title: "LinkedIn Learning",
        description: "Fundamentos del diseño UX",
      },
    ],
  },
  {
    category: "Desarrollo Web & Tecnología",
    items: [
      {
        title: "BA Aprende – Talento Tech",
        description: "Front-End con JavaScript · React JS (80 hs)",
      },
      {
        title: "Desafío Latam",
        description: "Introducción al Desarrollo Web y animaciones Frontend",
      },
      {
        title: "Desafío Latam",
        description: "IA para la productividad",
      },
    ],
  },
  {
    category: "Habilidades Profesionales & Marketing",
    items: [
      {
        title: "Fundación Telefónica – Movistar",
        description: "Design Thinking · Metodología para la innovación",
      },
      {
        title: "HubSpot Academy",
        description: "Marketing Digital & Inbound",
      },
      {
        title: "CoderHouse – Coder Camp",
        description: "Habilidades Blandas para equipos de trabajo",
      },
    ],
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="formacion"
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
          <FaGraduationCap className="text-3xl" />
          Formación
        </h2>

        {educationData.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-white">{category.category}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => {
                const cardIndex = `${index}-${itemIndex}`;
                const isActive = activeIndex === cardIndex;

                return (
                  <div
                    key={cardIndex}
                    onClick={() => handleToggle(cardIndex)}
                    className="relative group bg-[#1a1f2e] border border-[#2a2f3f] rounded-xl p-4 h-36 flex items-center justify-center text-center shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                  >
                    {/* Título */}
                    <div
                      className={`absolute w-4/5 transition-opacity duration-300 ease-in-out
                      ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-0'}`}
                    >
                      <h4 className="text-lg font-semibold text-custom-gray">
                        {item.title}
                      </h4>
                    </div>

                    {/* Descripción */}
                    <div
                      className={`absolute w-4/5 text-sm transition-opacity duration-300 ease-in-out text-secondary
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    >
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
