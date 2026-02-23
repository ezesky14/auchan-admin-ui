'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserCircleIcon, List, X } from '@phosphor-icons/react';
import Link from 'next/link';

const navItems = [
  { label: 'Tableau de bord', href: '/dashboard' },
  { label: 'Magasins', href: '/stores' },
  { label: 'Transactions', href: '/transactions' },
  { label: 'Clients', href: '/clients' },
  { label: 'Gestions', href: '/gestions' },
  { label: 'Satistiques', href: '/statistiques' },
];

const navItemClass =
  'h-9 flex items-center justify-center rounded-xl px-4 py-2 transition-all duration-200 hover:bg-primary-50 hover:text-primary data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:hover:bg-primary-600 cursor-pointer';

export default function HeaderMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative w-full">
      <div className="flex h-16 w-full items-center justify-between rounded-3xl bg-white px-4 py-3 lg:h-22.5 lg:justify-around lg:px-5 lg:py-4">
        <Image src="/assets/logo.png" alt="Logo" width={100} height={44} />

        <nav className="hidden lg:block">
          <ul className="text-medium flex gap-4 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.label}
                data-active={pathname === item.href}
                className={navItemClass}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gray-200 p-2">
            <UserCircleIcon size={22} weight="fill" color="white" />
          </div>

          <button
            className="cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-gray-100 active:scale-90 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block transition-transform duration-300 ${mobileOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              {mobileOpen ? <X size={24} /> : <List size={24} />}
            </span>
          </button>
        </div>
      </div>

      <nav
        className={`absolute top-full right-0 left-0 z-50 mx-2 mt-2 origin-top overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-out lg:hidden ${
          mobileOpen
            ? 'translate-y-0 scale-y-100 opacity-100'
            : 'pointer-events-none -translate-y-2 scale-y-95 opacity-0'
        }`}
      >
        <ul className="text-medium flex flex-col gap-1 p-3 font-semibold">
          {navItems.map((item, index) => (
            <li
              key={item.label}
              data-active={pathname === item.href}
              className="data-[active=true]:bg-primary data-[active=true]:hover:bg-primary-600 flex h-11 cursor-pointer items-center rounded-xl px-4 transition-all duration-200 hover:translate-x-1 hover:bg-gray-50 active:scale-[0.98] data-[active=true]:text-white"
              style={{
                transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms',
              }}
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
