'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useUser } from '@/lib/userContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function InstitucionDashboard() {
  const { role } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (role !== 'institucion') {
      router.push('/login')
    }
  }, [role, router])

  if (role !== 'institucion') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ES</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Escuela de Seguros de Chile
                </h1>
                <p className="text-sm text-gray-500">Panel de Institución</p>
              </div>
            </div>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </header>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Panel de Control - Institución
          </h1>
          <p className="text-gray-600">
            Gestiona la emisión y control de credenciales verificables
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-primary-600 mb-1">
              1,234
            </div>
            <div className="text-sm text-gray-600">Credenciales Emitidas</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-primary-600 mb-1">
              856
            </div>
            <div className="text-sm text-gray-600">Alumnos Activos</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-primary-600 mb-1">
              12
            </div>
            <div className="text-sm text-gray-600">Cursos Disponibles</div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="text-2xl mr-3">🏛️</div>
            <div>
              <h3 className="font-semibold text-purple-900 mb-2">
                Soberanía Total sobre la Emisión
              </h3>
              <p className="text-sm text-purple-800">
                Como institución, conservas control total sobre la emisión de credenciales. 
                Puedes validar que los alumnos aprobaron los cursos, emitir credenciales verificables, 
                y mantener un registro completo de todas las emisiones.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Acciones Rápidas
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/institucion/credenciales"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <div className="font-medium text-gray-900 mb-1">
                Ver Credenciales Emitidas
              </div>
              <div className="text-sm text-gray-600">
                Revisa todas las credenciales que has emitido
              </div>
            </Link>
            <div className="p-4 border-2 border-gray-200 rounded-lg bg-gray-50">
              <div className="font-medium text-gray-900 mb-1">
                Emitir Nueva Credencial
              </div>
              <div className="text-sm text-gray-600">
                (Funcionalidad en desarrollo)
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

