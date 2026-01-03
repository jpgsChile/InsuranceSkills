'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import StatusBadge from '@/components/StatusBadge'
import { getCredentialById } from '@/lib/mockData'
import { decodeId, encodeId } from '@/lib/urlUtils'

export default function CredentialDetailPage() {
  const params = useParams()
  const [showJSON, setShowJSON] = useState(false)
  
  // Obtener el ID del parámetro de la ruta
  const idParam = params?.id as string | undefined
  
  if (!idParam) {
    notFound()
  }
  
  // Decodificar el ID recibido de la URL
  const decodedId = decodeId(idParam)
  const credencial = getCredentialById(decodedId)

  if (!credencial) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const isVerified = credencial.verificationStatus === 'valid'

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/wallet"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a Mi Wallet
        </Link>

        {/* Diploma Card */}
        <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden">
          {/* Header with Verified Badge */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <StatusBadge status="valid" />
                  <span className="text-primary-100 text-sm font-medium">
                    Credencial Verificada
                  </span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">Diploma</h2>
            <p className="text-xl text-primary-100">
              {credencial.credentialSubject.course.name}
            </p>
          </div>

          {/* Diploma Content */}
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Otorgado a:</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {credencial.credentialSubject.name}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-1">Emitido por:</p>
                <p className="text-xl font-semibold text-gray-900">
                  {credencial.issuer.name}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-1">Fecha de emisión:</p>
                <p className="text-lg text-gray-900">
                  {formatDate(credencial.issuanceDate)}
                </p>
                {credencial.issuanceLocation && (
                  <p className="text-sm text-gray-600 mt-1">
                    {credencial.issuanceLocation}
                  </p>
                )}
              </div>
            </div>

            {/* JSON Toggle */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <button
                onClick={() => setShowJSON(!showJSON)}
                className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <span>Ver credencial en formato técnico (JSON)</span>
                <svg
                  className={`w-5 h-5 transition-transform ${showJSON ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showJSON && (
                <div className="mt-4 bg-gray-50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs text-gray-800">
                    {JSON.stringify(credencial, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href={`/verify/${encodeId(credencial.id)}`}
                className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Compartir credencial
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
