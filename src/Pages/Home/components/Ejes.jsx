export default function Ejes() {
    return (
        <div className="bg-amarillo_claro py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                {/* <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2> */}
                <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance txt-azul_claro txt-border-blanco sm:text-5xl">
                    Nuestros Ejes
                </h1>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl " />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Activismo</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Buscamos promover y mejorar las leyes de bienestar animal en nuestro estado.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                    className="w-full max-lg:max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Adopción</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Contamos con un proyecto permanente de adopciones en Parque La Ruina.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                    className="w-full max-lg:max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
                    </div>

                    <div className="relative max-lg:row-start-1 pb-3">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-4xl " />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Esterilización</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center pb-1">
                                    Nos enfocamos en Bahía de Kino, donde la sobrepoblación de perros y gatos es crítica. Queremos ser parte de la solución.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                    className="w-full max-lg:max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-r-4xl" />
                    </div>



                </div>
            </div>
        </div>
    )
}
