export default function Hero() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-12">
        {/* Texto: en móvil arriba, en desktop a la derecha */}
        <div className="lg:order-2 lg:flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl txt-azul_claro">
            Encuentra a tu nuevo amigo <br /> y cambia su vida
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
            Somos una asociación dedicada a promover la adopción responsable y el bienestar animal.
          </p>
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a
              href="#adoptar"
              className="inline-block rounded-md bg-morado_oscuro px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
            >
              Adoptar
            </a>
            <a
              href="#registrar"
              className="inline-block rounded-md border border-morado_oscuro px-6 py-3 txt-morado_oscuro font-semibold hover:bg-purple-50 transition"
            >
              Registrar
            </a>
          </div>
        </div>

        {/* Imagen: en móvil abajo, en desktop a la izquierda */}
        <div className="mt-10 lg:order-1 lg:flex-1 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80"
            alt="Perro feliz"
            className="mx-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
