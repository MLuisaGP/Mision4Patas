const stats = [
  { id: 1, name: 'Adoptados', value: '250+' },
  { id: 2, name: 'Esterilizaciones', value: '180+' },
  { id: 34, name: 'Jornadas de Adopcion', value: '300+' },
  { id: 34, name: 'Años Activas', value: '4+' },
]

export default function Estadisticas() {
  return (
    <div className="bg-amarillo_claro py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 txt-morado_oscuro font-bold">{stat.name}</dt>
              <h1 className="order-first text-3xl font-semibold tracking-tight txt-azul_claro sm:text-5xl txt-border-blanco">{stat.value}</h1>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
