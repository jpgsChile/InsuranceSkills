import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
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
                <p className="text-sm text-gray-500">Credenciales Verificables</p>
              </div>
            </div>
            <Link
              href="/login"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Credenciales Verificables de Cursos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los estudiantes pueden obtener y compartir credenciales verificables 
            de los cursos completados en la Escuela de Seguros de Chile.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Completa tu curso
            </h3>
            <p className="text-gray-600">
              Finaliza exitosamente el programa de estudios
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Obtén tu credencial
            </h3>
            <p className="text-gray-600">
              Recibe tu credencial verificable digital
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Compártela y verifícala
            </h3>
            <p className="text-gray-600">
              Comparte tu credencial y permite su verificación pública
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary-50 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-gray-600 mb-8">
            Ingresa para ver tus cursos y credenciales
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Ingresar
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2026 Escuela de Seguros de Chile. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
