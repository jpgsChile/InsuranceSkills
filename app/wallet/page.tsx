'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CredentialCard from '@/components/CredentialCard'
import { useUser } from '@/lib/userContext'
import { getMockUser, getMockCredentials } from '@/lib/mockData'

export default function WalletPage() {
  const { role } = useUser()
  const router = useRouter()
  const user = getMockUser()
  const credentials = getMockCredentials()

  useEffect(() => {
    if (role !== 'alumno') {
      if (role === 'institucion') {
        router.push('/institucion/dashboard')
      } else {
        router.push('/login')
      }
    }
  }, [role, router])

  if (role !== 'alumno') {
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
            Mi Wallet de Credenciales
          </h1>
          <p className="text-gray-600">
            Tus credenciales verificables de cursos completados
          </p>
        </div>

        {credentials.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No tienes credenciales aún
            </h3>
            <p className="text-gray-600 mb-6">
              Completa un curso para recibir tu primera credencial verificable
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Ver Mis Cursos
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((credential) => {
              const isExpired = false // For demo, credentials don't expire
              return (
                <CredentialCard
                  key={credential.id}
                  id={credential.id}
                  courseName={credential.credentialSubject.course.name}
                  issuer={credential.issuer.name}
                  issuedDate={credential.issuanceDate}
                  status={isExpired ? 'expired' : 'valid'}
                />
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
