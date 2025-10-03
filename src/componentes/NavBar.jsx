// componentes/NavBar.jsx
import React, { useState, useEffect } from 'react';
// Importa los iconos de React que vas a usar
import { FaHome, FaUser, FaCode, FaBriefcase, FaFolderOpen, FaGraduationCap, FaEnvelope, FaBrain } from 'react-icons/fa';

const NavBar = () => {
  // Estado para mantener la sección activa
  const [activeSection, setActiveSection] = useState('hero');
  // Nuevo estado para la opacidad de la barra de navegación
  const [navOpacity, setNavOpacity] = useState(1); // 1 = 100% opacidad

  // Efecto para detectar la sección activa y ajustar la opacidad al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      // Lógica para la sección activa
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'hero';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);

      // Lógica para el desvanecimiento de la opacidad
      const scrollPosition = window.scrollY;
      const fadeStart = 50; // Comienza a desvanecerse después de 50px de scroll
      const fadeEnd = 800;  // Termina de desvanecerse a los 800px de scroll
      const minOpacity = 0.80; // Opacidad mínima (80%)
      const maxOpacity = 1;   // Opacidad máxima (100%)

      let newOpacity = maxOpacity;

      if (scrollPosition > fadeStart) {
        // Calcula el porcentaje de scroll dentro del rango de desvanecimiento
        const scrollRange = fadeEnd - fadeStart;
        const scrolledIntoFade = scrollPosition - fadeStart;
        const fadeProgress = Math.min(1, scrolledIntoFade / scrollRange); // Clampa entre 0 y 1

        // Calcula la nueva opacidad
        newOpacity = maxOpacity - (fadeProgress * (maxOpacity - minOpacity));
        newOpacity = Math.max(minOpacity, newOpacity); // Asegura que no baje del 10%
      }

      setNavOpacity(newOpacity);
    };

    // Añade el event listener para el scroll
    window.addEventListener('scroll', handleScroll);
    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para el desplazamiento suave al hacer clic en un enlace
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Definición de los enlaces de navegación con sus componentes de icono y IDs de sección
  const navLinks = [
    { id: 'hero', icon: FaHome, label: 'Inicio' },
    { id: 'about', icon: FaUser, label: 'Sobre Mí' },
    { id: 'skills', icon: FaBrain, label: 'Habilidades' },
    { id: 'experience', icon: FaBriefcase, label: 'Experiencia' },
    { id: 'portfolio', icon: FaFolderOpen, label: 'Portafolio' },
    { id: 'formacion', icon: FaGraduationCap, label: 'Formación' },
    { id: 'contact', icon: FaEnvelope, label: 'Contacto' },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#000F12] bg-opacity-80 p-3 shadow-lg
                 md:top-0 md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:w-auto
                 md:rounded-2xl md:flex md:justify-center md:items-center
                 transition-opacity duration-300 ease-out"
      style={{ opacity: navOpacity }} // Aplica la opacidad dinámica
    >
      <ul className="flex justify-around md:space-x-8 w-full md:w-auto">
        {navLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 
                  ${activeSection === link.id ? 'text-accent-blue scale-110' : 'text-light-text hover:text-accent-blue hover:scale-105'}`}
                aria-label={link.label} style={{
            borderColor: 'var(--secondary-color)',
            color: 'var(--secondary-color)',
          }}
              >
                <IconComponent className="text-2xl md:text-3xl" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
