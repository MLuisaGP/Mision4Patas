import React from 'react'

export default function LoginBtn() {
    return (
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <a
    href="#"
    className="group relative inline-flex items-center gap-1 text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-orange-500"
  >
    Log in
    <span
      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      →
    </span>
    <span
      className="absolute top-5 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"
    ></span>
  </a>
</div>

    )
}
