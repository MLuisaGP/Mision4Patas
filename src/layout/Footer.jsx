import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LogoMision from '../assets/logo_M4P.png'
import { navigation } from "../js/navegacionlinks";
import Enlaces from "../components/Enlaces";
export default function Footer() {
    return (
        <footer className="bg-morado_oscuro text-gray-300 py-12">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">

                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img
                        src={LogoMision}
                        alt="Logo"
                        className="w-auto h-18 object-contain"
                    />
                </div>

                {/* Navegación rápida */}
                <nav className="hidden lg:flex space-x-6 text-sm font-medium items-center">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-bold txt-blanco hovertxt-amarillo_claro transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Redes sociales */}
                <div className="flex space-x-6 txt-blanco ">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-blue-600 transition text-2xl"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-sky-400 transition text-2xl"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-pink-500 transition text-2xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-700 transition text-2xl"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* Copyrigths */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
                &copy; {new Date().getFullYear()} Fundación Animales Felices. Todos los derechos reservados.
            </div>
        </footer>
    );
}
