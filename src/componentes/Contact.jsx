import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
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
          <FaEnvelopeOpenText className="text-3xl" />
          Contacto
        </h2>

        <form
          action="https://formspree.io/f/manjrbjn"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-custom-gray">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-[#1a1f2e] text-white border border-[#2a2f3f] focus:outline-none focus:ring-2 focus:ring-secondary-color"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-custom-gray">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-[#1a1f2e] text-white border border-[#2a2f3f] focus:outline-none focus:ring-2 focus:ring-secondary-color"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-custom-gray">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-[#1a1f2e] text-white border border-[#2a2f3f] focus:outline-none focus:ring-2 focus:ring-secondary-color"
            ></textarea>
          </div>

          <div>
            <button
                type="submit"
                className="w-full px-6 py-3 rounded font-semibold border-2 border-[var(--secondary-color)] text-white hover:bg-opacity-90 transition"
              >
                 Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
