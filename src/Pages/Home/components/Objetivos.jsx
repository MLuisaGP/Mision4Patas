import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Misión',
        description:
            'Activismo, adopción y esterilización son nuestros principales objetivos como asociación. Buscamos un mejor lugar para los animales, donde la empatía y sus derechos sean primordiales y de interés general.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Visión',
        description: 'Concientizar a los ciudadanos a cerca de la sobrepoblación animal y visibilizar el problema de salud pública que esto representa para la sociedad. Promovemos los derechos de los animales, luchamos contra el maltrato animal y trabajamos todos los días para lograr un cambio positivo para los animales.',
        icon: LockClosedIcon,
    },
    
]

export default function Objetivos() {
    return (
        <div className="overflow-hidden bg-blanco py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold txt-morado_oscuro">Asociacion</h2>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty txt-amarillo_claro sm:text-5xl txt-border-morado_oscuro">
                                MISION 4 PATAS
                            </h1>
                            <p className="mt-6 text-lg/8 text-gray-900">
                                Somos una asociación civil formalmente constituida, que promueve la esterilización, adopción y promueve los derechos de los animales.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-900 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold txt-morado_oscuro">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 txt-azul_claro" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="https://images.pexels.com/photos/1975989/pexels-photo-1975989.jpeg"
                        width={2432}
                        height={1442}
                        className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
