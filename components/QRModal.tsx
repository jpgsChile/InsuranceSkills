'use client'

import { QRCodeSVG } from 'qrcode.react'

interface QRModalProps {
  isOpen: boolean
  verificationUrl: string
  courseName: string
  onClose: () => void
}

export default function QRModal({ isOpen, verificationUrl, courseName, onClose }: QRModalProps) {
  if (!isOpen) return null

  const handleDownload = () => {
    // Crear un canvas temporal para descargar el QR
    const svg = document.querySelector('#qr-code svg')
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0)
      
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = `qr-credencial-${courseName.replace(/\s+/g, '-')}.png`
      downloadLink.href = pngFile
      downloadLink.click()
    }

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Código QR de Verificación
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {courseName}
          </p>
          
          <div id="qr-code" className="flex justify-center mb-6 p-4 bg-white rounded-lg border-2 border-gray-200">
            <QRCodeSVG
              value={verificationUrl}
              size={256}
              level="H"
              includeMargin={true}
            />
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Escanea este código QR para verificar la credencial
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Descargar QR
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

