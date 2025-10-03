import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section
      id="experience"
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
          <FaBriefcase className="text-3xl" />
          Experiencia
        </h2>

        <ul className="space-y-12">
          {/* Elecris */}
          <li>
            <h3 className="text-2xl font-semibold text-white">Elecris SRL</h3>
            <p className="text-sm italic text-gray-400">
              Supervisor de Producción y Técnico de Campo · 2018 – Actualidad
            </p>
            <ul className="mt-3 list-disc list-inside text-base space-y-1 text-custom-gray">
              <li>Control de calidad en tableros eléctricos y equipos de automatización.</li>
              <li>Programación y puesta en marcha de variadores de frecuencia y PLCs.</li>
              <li>Supervisión de procesos técnicos en planta y en campo.</li>
              <li>Soporte técnico, mantenimiento y documentación de procesos.</li>
            </ul>
          </li>

          {/* C Diseños / Diseño Freelance */}
          <li>
            <h3 className="text-2xl font-semibold text-white">C Diseños · Diseño Freelance</h3>
            <p className="text-sm italic text-gray-400">
              Diseñador Gráfico y UX/UI · 2020 – Actualidad
            </p>
            <ul className="mt-3 list-disc list-inside text-base space-y-1 text-custom-gray">
              <li>Diseño de identidades visuales, branding y piezas impresas.</li>
              <li>Diseño de estampas para sublimación y DTF.</li>
              <li>Desarrollo de interfaces y prototipos UX/UI con Figma.</li>
              <li>Diseño y maquetado web con HTML, CSS, JavaScript y React.</li>
              <li>Consultoría en diseño y experiencia de usuario para emprendedores.</li>
            </ul>
          </li>

          {/* Educación y formación paralela */}
          <li>
            <h3 className="text-2xl font-semibold text-white">Formación & Mentorías</h3>
            <p className="text-sm italic text-gray-400">Educador y Facilitador Freelance</p>
            <ul className="mt-3 list-disc list-inside text-base space-y-1 text-custom-gray">
              <li>Mentoría en habilidades blandas, comunicación y trabajo en equipo.</li>
              <li>Talleres de diseño UX/UI para principiantes.</li>
              <li>Aplicación de metodología 5S y mejora continua en entornos productivos.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
