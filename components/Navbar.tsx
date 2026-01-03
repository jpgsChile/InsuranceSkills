'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isAuthenticated = pathname?.startsWith('/dashboard') || 
                          pathname?.startsWith('/wallet') ||
                          pathname?.startsWith('/credential')

  if (!isAuthenticated) return null

  const navLinks = [
    { href: '/dashboard', label: 'Mis Cursos' },
    { href: '/wallet', label: 'Mi Wallet' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/dashboard" className="flex items-center">
              <span className="text-xl font-semibold text-primary-700">
                Escuela de Seguros
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-primary-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

