import type { Metadata } from 'next'
import './globals.css'
import { UserProvider } from '@/lib/userContext'

export const metadata: Metadata = {
  title: 'Escuela de Seguros de Chile - Credenciales Verificables',
  description: 'Plataforma de credenciales verificables para estudiantes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}

