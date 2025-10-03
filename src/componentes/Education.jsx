const Education = () => {
  return (
    <section className="py-20 px-6 bg-light text-dark" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Formación</h2>
        <ul className="space-y-6 text-lg">
          <li>
            <strong>Codo a Codo – Diseño UX/UI (2023)</strong><br />
            Curso intensivo enfocado en diseño centrado en el usuario, uso de Figma, prototipado e investigación UX.
          </li>
          <li>
            <strong>Fundación Telefónica – Design Thinking</strong><br />
            Certificación en metodologías ágiles para la resolución creativa de problemas.
          </li>
          <li>
            <strong>UTN – Tecnicatura en Sistemas</strong><br />
            Formación técnica con enfoque en desarrollo, lógica computacional y sistemas industriales.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;


