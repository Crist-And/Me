import React from 'react';

const Hero = () => {
  return (
    <header
      id="hero"
      data-aos="fade-up"
      data-aos-duration="1200"
      className="relative w-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[70vh]"
    >
      {/* Imagen de fondo */}
      <img
        src="https://res.cloudinary.com/du9ywopnu/image/upload/v1751689444/Frame_36_2_yyxfhs.png"
        alt="Fondo Hero"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Desktop (md+) */}
      <div
        className="hidden md:flex absolute top-8 left-8 z-20 items-end gap-4"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <img
          src="https://res.cloudinary.com/du9ywopnu/image/upload/v1752019863/logo_Cris_1_xbqgnn.png"
          alt="Logo Cris"
          className="h-20 lg:h-24 xl:h-28"
        />
        <div className="flex flex-col leading-tight">
          <p className="text-3xl lg:text-4xl xl:text-5xl font-space-grotesk text-gray-200">Cristian</p>
          <p className="text-3xl lg:text-4xl xl:text-5xl font-space-grotesk text-gray-200">Andrada</p>
        </div>
      </div>

      {/* Texto institucional inferior derecho (solo desktop) */}
      <div
        className="hidden md:block absolute bottom-6 right-6 z-20"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        <img
          src="https://res.cloudinary.com/du9ywopnu/image/upload/v1751689402/Dise%C3%B1o._Desarrollo._Identidad_Visual._Soluciones_Digitales_1_uyv8jt.png"
          alt="Texto institucional"
          className="h-12 md:h-16 lg:h-20"
        />
      </div>

      {/* Mobile (xs/sm) */}
      <div
        className="md:hidden absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <img
          src="https://res.cloudinary.com/du9ywopnu/image/upload/v1752019863/logo_Cris_1_xbqgnn.png"
          alt="Logo Cris"
          className="h-16 mb-2"
        />
        <div className="mb-2">
          <p className="text-3xl sm:text-4xl font-space-grotesk text-gray-200">Cristian</p>
          <p className="text-3xl sm:text-4xl font-space-grotesk text-gray-200">Andrada</p>
        </div>
        <div>
          <p className="text-sm text-gray-300">Diseño · Desarrollo · Imagen Visual</p>
          <p className="text-sm text-gray-300">Soluciones digitales y más</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
