import React from 'react'
import './Enlaces.css'
export default function Enlaces({ item }) {
    return (
        <a key={item.name} href={item.href} className="text-sm/6 font-bold text-gray-900 hovertxt-amarillo_claro transition-colors duration-300">
            {item.name}
        </a>
    )
}
