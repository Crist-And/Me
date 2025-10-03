import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 scroll-mt-16"
      style={{
        backgroundColor: 'var(--color-night)',
        color: 'var(--custom-gray)',
      }}
    >
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2
          className="text-4xl font-extrabold mb-6 flex items-center gap-3 border-b-2 pb-2"
          style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}
        >
          <FaUserAlt className="text-3xl" /> Sobre mí
        </h2>
        <p
          className="text-lg leading-relaxed tracking-wide space-y-4"
          style={{ color: 'var(--custom-gray)' }}
        >
          <span>
            Soy <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>Diseñador Gráfico</span> especializado en
            <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}> UX/UI</span>, con una sólida base técnica en entornos industriales
            y digitales.
          </span>
          <br className="hidden sm:inline" />
          <span>
            Mi enfoque combina diseño funcional, pensamiento estratégico y sensibilidad visual para
            <span style={{ fontStyle: 'italic', color: 'var(--secondary-color)' }}> crear experiencias que conectan</span> con las personas
            y potencian los productos.
          </span>
          <br className="hidden sm:inline" />
          <span>
            Aporto soluciones que equilibran creatividad y eficiencia, desde la idea hasta la implementación. Me interesa colaborar en proyectos
            donde el diseño tenga impacto real y humano.
          </span>
        </p>
      </div>
    </section>
  )
}

export default About
