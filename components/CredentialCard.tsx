import Link from 'next/link'
import StatusBadge from './StatusBadge'
import { encodeId } from '@/lib/urlUtils'

interface CredentialCardProps {
  id: string
  courseName: string
  issuer: string
  issuedDate: string
  status: 'valid' | 'expired'
}

export default function CredentialCard({
  id,
  courseName,
  issuer,
  issuedDate,
  status,
}: CredentialCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Codificar el ID para usarlo en la URL
  const encodedId = encodeId(id)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {courseName}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Emitido por:</span> {issuer}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Emitido el:</span> {formatDate(issuedDate)}
          </p>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <Link
          href={`/credential/${encodedId}`}
          className="flex-1 text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          Ver detalle
        </Link>
        <Link
          href={`/verify/${encodedId}`}
          className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          Verificar
        </Link>
      </div>
    </div>
  )
}

