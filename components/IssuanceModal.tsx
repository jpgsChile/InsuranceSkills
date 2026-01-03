'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface IssuanceModalProps {
  isOpen: boolean
  courseName: string
  onClose: () => void
}

export default function IssuanceModal({ isOpen, courseName, onClose }: IssuanceModalProps) {
  const router = useRouter()
  const [stage, setStage] = useState<'message' | 'loading' | 'success'>('message')

  useEffect(() => {
    if (isOpen) {
      setStage('message')
    }
  }, [isOpen])

  const handleStart = () => {
    setStage('loading')
    
    // Simular proceso de emisión (2 segundos)
    setTimeout(() => {
      setStage('success')
      
      // Redirigir al wallet después de 2 segundos de mostrar el éxito
      setTimeout(() => {
        router.push('/wallet')
      }, 2000)
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        {stage === 'message' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Emisión de Credencial
            </h3>
            <p className="text-gray-600 mb-6">
              La Escuela de Seguros de Chile emitirá una credencial verificable para:
            </p>
            <p className="text-lg font-semibold text-primary-600 mb-6">
              {courseName}
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleStart}
                className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {stage === 'loading' && (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Emitiendo credencial...
            </h3>
            <p className="text-gray-600">
              Por favor espera mientras procesamos tu solicitud
            </p>
          </div>
        )}

        {stage === 'success' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ✅ Credencial emitida con éxito
            </h3>
            <p className="text-gray-600 mb-4">
              Tu credencial verificable ha sido emitida correctamente
            </p>
            <p className="text-sm text-gray-500">
              Redirigiendo a tu wallet...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

