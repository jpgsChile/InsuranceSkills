import { notFound } from 'next/navigation'
import Link from 'next/link'
import StatusBadge from '@/components/StatusBadge'
import { getCredentialById } from '@/lib/mockData'
import { decodeId } from '@/lib/urlUtils'

interface PageProps {
  params: {
    id: string
  }
}

export default function VerifyPage({ params }: PageProps) {
  // Decodificar el ID recibido de la URL
  const decodedId = decodeId(params.id)
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verificación de Credencial
          </h1>
          <p className="text-gray-600">
            Esta es una página pública para verificar credenciales emitidas
          </p>
        </div>

        {/* Verification Status */}
        <div className={`bg-white rounded-lg shadow-sm border-2 ${isVerified ? 'border-green-500' : 'border-red-500'} overflow-hidden mb-6`}>
          <div className={`px-8 py-6 ${isVerified ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center justify-center">
              {isVerified ? (
                <div className="flex items-center">
                  <svg className="w-12 h-12 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h2 className="text-2xl font-bold text-green-900">
                      Credencial Verificada
                    </h2>
                    <p className="text-green-700 mt-1">
                      Esta credencial ha sido verificada y es auténtica
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <svg className="w-12 h-12 text-red-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h2 className="text-2xl font-bold text-red-900">
                      Credencial No Verificada
                    </h2>
                    <p className="text-red-700 mt-1">
                      No se pudo verificar la autenticidad de esta credencial
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Credential Details */}
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Diploma:</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {credencial.credentialSubject.course.name}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-1">Emitido por:</p>
                <p className="text-xl font-semibold text-gray-900">
                  {credencial.issuer.name}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  ID: {credencial.issuer.id}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-1">Estudiante:</p>
                <p className="text-lg text-gray-900">
                  {credencial.credentialSubject.name}
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
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex">
            <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">
                Sobre la Verificación
              </h4>
              <p className="text-sm text-blue-800">
                Esta página permite verificar la autenticidad de las credenciales 
                emitidas por la Escuela de Seguros de Chile. Las credenciales verificables 
                utilizan estándares internacionales para garantizar su autenticidad e 
                integridad. Esta credencial ha sido verificada y es válida.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2026 Escuela de Seguros de Chile. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
