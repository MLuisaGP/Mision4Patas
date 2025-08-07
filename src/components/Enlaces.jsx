import React from 'react'
import './Enlaces.css'
export default function Enlaces({ item }) {
    return (
        <a key={item.name} href={item.href} className="text-sm/6 font-bold text-gray-900 hover:text-orange-500 transition-colors duration-300">
            {item.name}
        </a>
    )
}
