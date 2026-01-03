'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useUser } from '@/lib/userContext'
import RoleBadge from '@/components/RoleBadge'

export default function LoginPage() {
  const { setRole } = useUser()
  const [email, setEmail] = useState('')
  const [rut, setRut] = useState('')
  const [selectedRole, setSelectedRole] = useState<'alumno' | 'institucion' | null>(null)

  // Mock login - no validation, no authentication
  // This is a demo system that sets the role and redirects
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedRole) {
      setRole(selectedRole)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ES</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Escuela de Seguros de Chile
              </h1>
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Iniciar Sesión
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Selecciona tu tipo de cuenta
          </p>

          {/* Selector de Rol */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tipo de cuenta
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole('alumno')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  selectedRole === 'alumno'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">👤</div>
                <div className="font-medium text-gray-900">Alumno</div>
                <div className="text-xs text-gray-500 mt-1">Ver cursos y credenciales</div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('institucion')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  selectedRole === 'institucion'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">🏛️</div>
                <div className="font-medium text-gray-900">Institución</div>
                <div className="text-xs text-gray-500 mt-1">Emitir credenciales</div>
              </button>
            </div>
            {selectedRole && (
              <div className="mt-3 flex items-center justify-center">
                <RoleBadge role={selectedRole} />
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="rut" className="block text-sm font-medium text-gray-700 mb-2">
                RUT <span className="text-gray-500 font-normal">(opcional)</span>
              </label>
              <input
                id="rut"
                type="text"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="12.345.678-9"
              />
            </div>

            <button
              type="submit"
              disabled={!selectedRole}
              className={`w-full py-3 rounded-lg transition-colors font-medium ${
                selectedRole
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {selectedRole ? `Ingresar como ${selectedRole === 'alumno' ? 'Alumno' : 'Institución'}` : 'Selecciona un tipo de cuenta'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-primary-600 hover:text-primary-700">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
