import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import fotoHero from '../assets/home_foto.jpg'
import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
// const features = [
//   {
//     'name': 'Hola',
//     'description': 'Hola',
//     icon: CloudArrowUpIcon,
//   }

// ]

export default function Example() {
  return (
    <>
    <Hero/>
    {/* <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl txt-azul_claro">
                Mision 4 Patas
              </h1>
              <p className="mt-6 text-lg/8 text-gray-900 font-semibold">
                Somos una asociación civil formalmente constituida, que
                promueve la esterilización, adopción y promueve los derechos de
                los animales.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    Hola
                  </dt>{' '}
                  <dd className="inline">Hola</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    Hola
                  </dt>{' '}
                  <dd className="inline">Hola</dd>
                </div>
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
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
            src={fotoHero}
            width={2432}
            height={1442}
            className="mx-auto w-full max-w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </div> */}
    <BentoGrid/>
    </>
  )
}
