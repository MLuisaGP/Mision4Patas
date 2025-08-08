import React from 'react'

const navigation = [
{id:1, name: 'Inicio', href: '#' },
{id:2, name: 'Adopciones', href: '#' },
{id:3, name: 'Donativos', href: '#' },
{id:4, name: 'Contactanos', href: '#' },
]
export default function Navegacion() {
    return (
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
            {navigation.map((item) => (
                <Enlaces key={item.id} item={item}></Enlaces>
            ))}
        </nav>
    )
}
