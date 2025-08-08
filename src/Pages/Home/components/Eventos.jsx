const eventos = [
  {
    id: 1,
    titulo: "Jornadas de Adopcion La Ruina",
    fecha: "Todos los Domingos de 7:00 a 9:00",
    lugar: "Parque la ruina, Hemosillo Son.",
    descripcion:
      "Únete a nuestra campaña para encontrar un hogar para más de 50 animales. ¡Trae a tu familia y amigos!",
    imagen:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    titulo: "Jornadas de Adopcion Petco",
    fecha: "Todos los Domingos de 4:30 a 7:30",
    lugar: "Petco Express, Hermosillo Son.",
    descripcion:
      "Vacunación gratuita para perros y gatos. ¡Protege a tus mascotas con nosotros!",
    imagen:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },

];

export default function Eventos() {
  return (
    <section className="container mx-auto px-6 py-20 max-w-7xl">
      <h1 className="text-4xl font-extrabold text-center mb-16 txt-azul_claro txt-border-morado_oscuro">
        EVENTOS
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {eventos.map(({ id, titulo, fecha, lugar, descripcion, imagen }) => (
          <article
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={imagen}
              alt={titulo}
              className="h-100 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Fecha:</span> {fecha}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-semibold">Lugar:</span> {lugar}
              </p>
              <p className="text-gray-700 flex-grow">{descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
