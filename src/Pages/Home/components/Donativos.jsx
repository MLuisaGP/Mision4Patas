export default function Donativos() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-6xl mx-auto">
                {/* Texto */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-primary font-bold text-lg mb-3">Apoya Nuestra Causa</p>
                    <h2 className="text-4xl font-extrabold mb-6">
                        Dona y Haz la Diferencia
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Tu donativo nos ayuda a continuar con nuestro trabajo y a llegar a
                        más personas que necesitan apoyo. ¡Cada aporte cuenta y es muy
                        valioso para nosotros!
                    </p>

                    <button
                        class="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-morado_oscuro bg-morado_oscuro px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateX(.35rem)] hover:shadow-xl"
                    >
                        Quiero Donar
                    </button>
                </div>

                {/* Imagen */}
                <div className="lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Donativos"
                        className="rounded-lg shadow-lg object-cover w-full h-80 sm:h-[360px]"
                    />
                </div>
            </div>
        </section>
    );
}
