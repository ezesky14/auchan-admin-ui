'use client';

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserCircleIcon, List, X } from "@phosphor-icons/react";
import Link from "next/link";

const navItems = [
    { label: 'Tableau de bord', href: '/dashboard' },
    { label: 'Magasins', href: '/stores' },
    { label: 'Transactions', href: '/transactions' },
    { label: 'Clients', href: '/clients' },
    { label: 'Gestions', href: '/gestions' },
    { label: 'Satistiques', href: '/statistiques' },
];

const navItemClass =
    "h-9 flex items-center justify-center rounded-xl px-4 py-2 transition-all duration-200 hover:bg-primary-50 hover:text-primary data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:hover:bg-primary-600 cursor-pointer";

export default function HeaderMenu() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="relative w-full">
            <div className="flex h-16 lg:h-22.5 px-4 lg:px-5 py-3 lg:py-4 w-full bg-white justify-between lg:justify-around rounded-3xl items-center">
                <Image src="/assets/logo.png" alt="Logo" width={100} height={44} />

                <nav className="hidden lg:block">
                    <ul className="flex gap-4 text-medium font-semibold">
                        {navItems.map((item) => (
                            <li key={item.label} data-active={pathname === item.href} className={navItemClass}>
                               <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <div className="bg-gray-200 rounded-full p-2">
                        <UserCircleIcon size={22} weight="fill" color="white" />
                    </div>

                    <button
                        className="cursor-pointer lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 active:scale-90"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={mobileOpen}
                    >
                        <span className={`block transition-transform duration-300 ${mobileOpen ? 'rotate-90' : 'rotate-0'}`}>
                            {mobileOpen ? <X size={24} /> : <List size={24} />}
                        </span>
                    </button>
                </div>
            </div>

            <nav
                className={`lg:hidden absolute top-full left-0 right-0 z-50 mt-2 mx-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ease-out origin-top ${
                    mobileOpen
                        ? 'opacity-100 translate-y-0 scale-y-100'
                        : 'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
                }`}
            >
                <ul className="flex flex-col gap-1 p-3 text-medium font-semibold">
                    {navItems.map((item, index) => (
                        <li
                            key={item.label}
                            data-active={pathname === item.href}
                            className="h-11 flex items-center px-4 rounded-xl transition-all duration-200 hover:bg-gray-50 hover:translate-x-1 active:scale-[0.98] data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:hover:bg-primary-600 cursor-pointer"
                            style={{ transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms' }}
                            onClick={() => setMobileOpen(false)}
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}