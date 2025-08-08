import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoMision from '../assets/logo_M4P.png'
import { useContext } from 'react';
import DialogPanelX from '../components/DialogPanelX';
import { MobileMenuOpenContext } from '../context/mobileMenuOpenContext';
import Enlaces from '../components/Enlaces';
import LoginBtn from '../components/LoginBtn.JSX';
import { navigation } from '../js/navegacionlinks';


export default function Header() {
    const { setMobileMenuOpen } = useContext(MobileMenuOpenContext);
    return (
        <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">

                {/* <!-- Logo --> */}
                <div className="flex-shrink-0">
                    <a href="#">
                        <img src={LogoMision} alt="Logo de la empresa" className="h-20 w-auto" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                {/* <!-- Navegación (centro) --> */}
                <nav className="hidden lg:flex space-x-6 text-sm font-medium">
                    {navigation.map((item) => (
                        <Enlaces key={item.id} item={item}></Enlaces>
                    ))}
                </nav>

                {/* <!-- Login (derecha) --> */}
                <div className="hidden lg:flex">
                    <LoginBtn />
                </div>
            </div>
            <DialogPanelX />
        </header>

    )
}
