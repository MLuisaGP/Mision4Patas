
export default function Hero() {
  return (
    <section className="bg-azul_claro py-16">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-12">
        {/* Texto: en móvil arriba, en desktop a la derecha */}
        <div className="lg:order-2 lg:flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl txt-amarillo_claro txt-border-blanco">
            POR UNA SEGUNDA OPORTUNIDAD
          </h1>
          <p className="mt-4 text-lg text-gray-900 max-w-lg mx-auto lg:mx-0 font-medium">
            
            Las mascotas adoptadas no juzgan tu pasado, simplemente están felices de ser parte de tu presente
          </p>
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <button
              class="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-morado_oscuro bg-morado_oscuro px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateX(.35rem)] hover:shadow-xl"
            >
              Quiero dar una segunda oportunidad
            </button>

            {/* <a
              href="#adoptar"
              className="inline-block rounded-md bg-morado_oscuro px-6 py-3 text-white font-semibold "
            >
              Quiero dar una segunda oportunidad
            </a> */}
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
